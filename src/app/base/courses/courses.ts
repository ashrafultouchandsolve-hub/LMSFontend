import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { CourseDto, CourseFacets, CourseQuery, CourseSort, LearningApiService } from '../../Service/learning-api.service';
import { LanguageService } from '../../Service/language.service';
import { Category, CategoryService, categoryIcon } from '../../Service/category.service';
import { enrollmentWindow } from '../../Service/enrollment-window';
import { DiscountInfo, discountInfo, discountPeriodLabel } from '../../Service/discount';
import { RecommendationService } from '../../Service/recommendation.service';
import { Navbar } from '../../shared/navbar/navbar';

type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';

type CoursesViewItem = {
  id: string;
  title: string;
  description: string;
  level: CourseLevel;
  category: string;
  instructorName: string;
  lessonCount: number;
  enrollmentCount: number;
  videoCount: number;
  practiceCount: number;
  durationMinutes: number;
  price: number;
  isEnrolled: boolean;
  isCompleted: boolean;
  isWishlisted: boolean;
  thumbnailUrl: string;
  averageRating?: number;
  totalRatings?: number;
  startDate?: string | null;
  endDate?: string | null;
  discountPercent?: number | null;
  discountStartDate?: string | null;
  discountEndDate?: string | null;
};

/** One removable pill in the "active filters" strip. */
type FilterChip = { kind: 'category' | 'level' | 'price' | 'rating' | 'search'; value: string; label: string };

const LEVELS: CourseLevel[] = ['Beginner', 'Intermediate', 'Advanced'];
const RATING_OPTIONS = [4.5, 4, 3.5, 3];
const PAGE_SIZE = 12;
const SEARCH_DEBOUNCE_MS = 350;

@Component({
  selector: 'app-courses',
  imports: [RouterLink, Navbar],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Courses {
  private readonly authService     = inject(AuthService);
  private readonly learningApi     = inject(LearningApiService);
  private readonly categoryService = inject(CategoryService);
  private readonly reco            = inject(RecommendationService);
  private readonly route           = inject(ActivatedRoute);
  private readonly router          = inject(Router);
  readonly lang                    = inject(LanguageService);

  // ---- filter state -------------------------------------------------------
  protected readonly searchInput        = signal('');   // what's in the box right now
  protected readonly selectedCategories = signal<string[]>([]);
  protected readonly selectedLevels     = signal<CourseLevel[]>([]);
  protected readonly priceFilter        = signal<'free' | 'paid' | null>(null);
  protected readonly minRating          = signal<number | null>(null);
  protected readonly sort               = signal<CourseSort>('popular');
  protected readonly page               = signal(1);

  // ---- result state -------------------------------------------------------
  protected readonly items      = signal<CourseDto[]>([]);
  protected readonly total      = signal(0);
  protected readonly totalPages = signal(0);
  protected readonly facets     = signal<CourseFacets>({ categories: {}, levels: {} });
  protected readonly isLoading  = signal(true);
  protected readonly loadFailed = signal(false);

  // ---- view state ---------------------------------------------------------
  protected readonly viewMode        = signal<'grid' | 'list'>('grid');
  protected readonly filtersOpen     = signal(false);   // mobile drawer
  protected readonly sortOpen        = signal(false);
  protected readonly dynamicCategories = signal<Category[]>([]);

  // "Recommended for you" — personalised strip shown on the default (unfiltered) view.
  protected readonly recommended = signal<CourseDto[]>([]);
  protected readonly recoUsedPrefs = signal(false);

  // Enrollment + wishlist come from one request each (not one per course) and are
  // merged into the view by id — see `viewItems`.
  private readonly enrolledIds = signal<Set<string>>(new Set());
  private readonly wishlistIds = signal<Set<string>>(new Set());
  protected readonly wishlistToggleId = signal<string | null>(null);

  protected readonly levels        = LEVELS;
  protected readonly ratingOptions = RATING_OPTIONS;
  protected readonly skeletonSlots = Array.from({ length: 6 });

  private searchTimer: ReturnType<typeof setTimeout> | null = null;

  protected readonly sortOptions: ReadonlyArray<{ value: CourseSort; label: () => string }> = [
    { value: 'popular',    label: () => this.lang.t().sortPopular },
    { value: 'newest',     label: () => this.lang.t().sortNewest },
    { value: 'rating',     label: () => this.lang.t().sortRating },
    { value: 'price_asc',  label: () => this.lang.t().sortPriceAsc },
    { value: 'price_desc', label: () => this.lang.t().sortPriceDesc },
    { value: 'title',      label: () => this.lang.t().sortTitle },
  ];

  protected readonly activeSortLabel = computed(
    () => this.sortOptions.find(o => o.value === this.sort())?.label() ?? '',
  );

  /**
   * Category checkboxes, driven by the server's facet counts rather than the raw
   * admin category list — an admin category with no courses would otherwise sit
   * in the sidebar and return nothing when clicked. A currently-selected value is
   * always kept so the user can untick it even when it now yields 0.
   */
  protected readonly categoryOptions = computed(() => {
    const counts = this.facets().categories;
    const selected = this.selectedCategories();
    const names = new Set([...Object.keys(counts), ...selected]);

    // Preserve the admin-defined ordering, then append any category that only
    // exists on courses (e.g. one removed from the managed list since).
    const managed = this.dynamicCategories().map(c => c.name);
    const ordered = [
      ...managed.filter(n => names.has(n)),
      ...[...names].filter(n => !managed.includes(n)).sort(),
    ];

    return ordered.map(name => ({
      label: name,
      value: name,
      icon: categoryIcon(name),
      count: counts[name] ?? 0,
    }));
  });

  protected levelCount(level: CourseLevel): number {
    return this.facets().levels[level] ?? 0;
  }

  /** Server rows + locally-known enrollment/wishlist state. */
  protected readonly viewItems = computed<CoursesViewItem[]>(() => {
    const enrolled = this.enrolledIds();
    const wished   = this.wishlistIds();
    return this.items().map(dto => ({
      id: dto.id,
      title: dto.title,
      description: dto.description,
      level: this.normalizeLevel(dto.level),
      category: dto.category,
      instructorName: dto.instructorName,
      lessonCount: dto.lessonCount ?? 0,
      enrollmentCount: dto.enrollmentCount ?? 0,
      videoCount: dto.videoCount ?? 0,
      practiceCount: dto.practiceCount ?? 0,
      durationMinutes: dto.durationMinutes,
      price: dto.price,
      isEnrolled: enrolled.has(dto.id),
      isWishlisted: wished.has(dto.id),
      isCompleted: dto.isCompleted ?? false,
      thumbnailUrl: this.getImageUrl(dto.thumbnailPath),
      averageRating: dto.averageRating ?? 0,
      totalRatings: dto.totalRatings ?? 0,
      startDate: dto.startDate ?? null,
      endDate: dto.endDate ?? null,
      discountPercent: dto.discountPercent ?? null,
      discountStartDate: dto.discountStartDate ?? null,
      discountEndDate: dto.discountEndDate ?? null,
    }));
  });

  protected readonly hasResults = computed(() => this.viewItems().length > 0);

  protected readonly activeChips = computed<FilterChip[]>(() => {
    const chips: FilterChip[] = [];
    const term = this.searchInput().trim();
    if (term) chips.push({ kind: 'search', value: term, label: `"${term}"` });
    for (const c of this.selectedCategories()) chips.push({ kind: 'category', value: c, label: c });
    for (const l of this.selectedLevels())     chips.push({ kind: 'level', value: l, label: this.levelLabel(l) });
    const p = this.priceFilter();
    if (p) chips.push({ kind: 'price', value: p, label: p === 'free' ? this.lang.t().filterFree : this.lang.t().filterPaid });
    const r = this.minRating();
    if (r != null) chips.push({ kind: 'rating', value: String(r), label: `${r}★ ${this.lang.t().filterAndUp}` });
    return chips;
  });

  protected readonly hasActiveFilters = computed(() => this.activeChips().length > 0);

  /** Page numbers for the pager, with '…' gaps when there are many pages. */
  protected readonly pageNumbers = computed<(number | '…')[]>(() => {
    const totalP = this.totalPages();
    const cur = this.page();
    if (totalP <= 7) return Array.from({ length: totalP }, (_, i) => i + 1);

    const out: (number | '…')[] = [1];
    const from = Math.max(2, cur - 1);
    const to   = Math.min(totalP - 1, cur + 1);
    if (from > 2) out.push('…');
    for (let i = from; i <= to; i++) out.push(i);
    if (to < totalP - 1) out.push('…');
    out.push(totalP);
    return out;
  });

  /** "Showing 1–12 of 46" range. */
  protected readonly rangeStart = computed(() => (this.total() === 0 ? 0 : (this.page() - 1) * PAGE_SIZE + 1));
  protected readonly rangeEnd   = computed(() => Math.min(this.page() * PAGE_SIZE, this.total()));

  protected readonly isStaff = computed(() => {
    const role = this.authService.getCurrentUser()?.role;
    return role === 1 || role === 2;
  });

  constructor() {
    this.readStateFromUrl();
    this.loadCategories();
    void this.initPersonalization();
    void this.load();
  }

  /** Enrollment/wishlist first (so recommendations can exclude enrolled courses), then reco. */
  private async initPersonalization(): Promise<void> {
    await this.loadEnrollmentAndWishlist();
    await this.loadRecommended();
  }

  /** Whole "Recommended for you" strip only shows on the untouched default view. */
  protected readonly showReco = computed(
    () => this.recommended().length > 0 && !this.hasActiveFilters() && this.page() === 1,
  );

  /** Compact card shape for the recommendation strip. */
  protected readonly recommendedView = computed(() =>
    this.recommended().map((c) => ({
      id: c.id,
      title: c.title,
      category: c.category,
      level: this.normalizeLevel(c.level),
      price: c.price,
      thumbnailUrl: this.getImageUrl(c.thumbnailPath),
      averageRating: c.averageRating ?? 0,
      totalRatings: c.totalRatings ?? 0,
    })),
  );

  // ---- URL <-> state ------------------------------------------------------

  /**
   * Seeds filter state from the URL so deep links and the browser back button work.
   * `?category=X` (singular) is the legacy shape the navbar mega-dropdown and the
   * home-page category marquee still link with — it must keep working.
   */
  private readStateFromUrl(): void {
    const q = this.route.snapshot.queryParams;

    const legacyCategory = q['category'];
    const categories = q['categories'] ?? legacyCategory;
    if (categories) this.selectedCategories.set(String(categories).split(',').filter(Boolean));

    if (q['levels']) {
      this.selectedLevels.set(
        String(q['levels']).split(',').filter((l): l is CourseLevel => LEVELS.includes(l as CourseLevel)),
      );
    }
    if (q['q'])     this.searchInput.set(String(q['q']));
    if (q['price'] === 'free' || q['price'] === 'paid') this.priceFilter.set(q['price']);
    if (q['rating']) {
      const r = Number(q['rating']);
      if (!Number.isNaN(r)) this.minRating.set(r);
    }
    if (q['sort'] && this.sortOptions.some(o => o.value === q['sort'])) this.sort.set(q['sort'] as CourseSort);
    if (q['view'] === 'list') this.viewMode.set('list');
    const p = Number(q['page']);
    if (!Number.isNaN(p) && p > 0) this.page.set(p);
  }

  /** Mirrors current filter state into the URL (replaceUrl so we don't spam history). */
  private writeStateToUrl(): void {
    const cats = this.selectedCategories();
    const lvls = this.selectedLevels();
    const queryParams: Record<string, string | null> = {
      // legacy single-category param is retired once the user touches the filters
      category:   null,
      categories: cats.length ? cats.join(',') : null,
      levels:     lvls.length ? lvls.join(',') : null,
      q:          this.searchInput().trim() || null,
      price:      this.priceFilter(),
      rating:     this.minRating() != null ? String(this.minRating()) : null,
      sort:       this.sort() === 'popular' ? null : this.sort(),
      page:       this.page() === 1 ? null : String(this.page()),
      view:       this.viewMode() === 'grid' ? null : 'list',
    };
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  // ---- data loading -------------------------------------------------------

  private buildQuery(): CourseQuery {
    return {
      search: this.searchInput().trim() || undefined,
      categories: this.selectedCategories().length ? this.selectedCategories() : undefined,
      levels: this.selectedLevels().length ? this.selectedLevels() : undefined,
      price: this.priceFilter() ?? undefined,
      minRating: this.minRating() ?? undefined,
      sort: this.sort(),
      page: this.page(),
      pageSize: PAGE_SIZE,
    };
  }

  private async load(): Promise<void> {
    this.isLoading.set(true);
    this.loadFailed.set(false);
    try {
      const res = await firstValueFrom(this.learningApi.searchCourses(this.buildQuery()));
      const rows = Array.isArray(res?.data) ? res.data : ((res as any)?.Data ?? []);
      this.items.set(rows);
      this.total.set(res?.total ?? rows.length);
      this.totalPages.set(res?.totalPages ?? 1);
      this.facets.set({
        categories: res?.facets?.categories ?? {},
        levels: res?.facets?.levels ?? {},
      });
    } catch {
      this.items.set([]);
      this.total.set(0);
      this.totalPages.set(0);
      this.loadFailed.set(true);
    } finally {
      this.isLoading.set(false);
    }
  }

  /** Any filter change resets to page 1, syncs the URL, and refetches. */
  private applyFilters(): void {
    this.page.set(1);
    this.writeStateToUrl();
    void this.load();
  }

  private loadCategories(): void {
    this.categoryService.getAll().subscribe({
      next: (res: any) => this.dynamicCategories.set(res?.data ?? res?.Data ?? []),
      error: () => this.dynamicCategories.set([]),
    });
  }

  /**
   * One request each for "which courses am I in" and "what have I wishlisted",
   * instead of the old per-course checks. Best-effort: cards render either way.
   */
  private async loadEnrollmentAndWishlist(): Promise<void> {
    if (!this.authService.isLoggedIn()) return;
    const userId = this.authService.getCurrentUser()?.id;

    try {
      const res = await firstValueFrom(this.learningApi.getMyEnrollments());
      const list = (res as any)?.data ?? (res as any)?.Data ?? [];
      if (Array.isArray(list)) {
        this.enrolledIds.set(new Set(list.map((c: any) => String(c?.id ?? c?.courseId ?? '')).filter(Boolean)));
      }
    } catch { /* badge just won't show */ }

    if (!userId) return;
    try {
      const res = await firstValueFrom(this.learningApi.getWishlist(String(userId)));
      const list = (res as any)?.data ?? (res as any)?.Data ?? res ?? [];
      if (Array.isArray(list)) {
        this.wishlistIds.set(new Set(list.map((i: any) => String(i?.courseId ?? i?.id ?? '')).filter(Boolean)));
      }
    } catch { /* heart just stays hollow */ }
  }

  /**
   * Build the "Recommended for you" strip. Ranks the full catalogue against the student's
   * saved interests via the category-aware engine (category is the dominant signal), excludes
   * enrolled/closed courses, and falls back to popular when there are no preference matches.
   * Category names are taken from the courses themselves, so it always maps to real categories.
   */
  private async loadRecommended(): Promise<void> {
    if (!this.authService.isLoggedIn() || this.isStaff()) return;
    try {
      const res = await firstValueFrom(this.learningApi.getAllCourses());
      const raw: CourseDto[] = Array.isArray(res?.data) ? res.data : ((res as any)?.Data ?? []);

      const enrolled = this.enrolledIds();
      const candidates = raw.filter(
        (c) => enrollmentWindow(c.startDate).state !== 'closed' && !enrolled.has(c.id),
      );
      if (candidates.length === 0) { this.recommended.set([]); return; }

      let prefs: { skillLevel?: string; interests?: string[] } | null = null;
      try { prefs = await firstValueFrom(this.learningApi.getUserPreferences()); }
      catch { prefs = null; } // 404 = no preferences saved yet

      const categoryNames = [...new Set(candidates.map((c) => c.category).filter(Boolean))];
      const ranked = this.reco.rankCourses(candidates as any, prefs, {
        limit: 10, categories: categoryNames, excludeIds: enrolled,
      }) as CourseDto[];

      if (ranked.length > 0) {
        this.recoUsedPrefs.set(true);
        this.recommended.set(ranked);
      } else {
        this.recoUsedPrefs.set(false);
        this.recommended.set(this.reco.popularFallback(candidates as any, 10) as CourseDto[]);
      }
    } catch {
      this.recommended.set([]);
    }
  }

  // ---- filter mutations ---------------------------------------------------

  protected onSearchInput(term: string): void {
    this.searchInput.set(term);
    if (this.searchTimer) clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => this.applyFilters(), SEARCH_DEBOUNCE_MS);
  }

  protected toggleCategory(name: string): void {
    this.selectedCategories.update(list =>
      list.includes(name) ? list.filter(c => c !== name) : [...list, name],
    );
    this.applyFilters();
  }

  protected toggleLevel(level: CourseLevel): void {
    this.selectedLevels.update(list =>
      list.includes(level) ? list.filter(l => l !== level) : [...list, level],
    );
    this.applyFilters();
  }

  protected setPrice(value: 'free' | 'paid' | null): void {
    this.priceFilter.update(cur => (cur === value ? null : value));
    this.applyFilters();
  }

  protected setMinRating(value: number | null): void {
    this.minRating.update(cur => (cur === value ? null : value));
    this.applyFilters();
  }

  protected setSort(value: CourseSort): void {
    this.sort.set(value);
    this.sortOpen.set(false);
    this.applyFilters();
  }

  protected toggleSortMenu(): void { this.sortOpen.update(o => !o); }
  protected closeSortMenu(): void  { this.sortOpen.set(false); }

  protected setViewMode(mode: 'grid' | 'list'): void {
    this.viewMode.set(mode);
    this.writeStateToUrl();
  }

  protected toggleFilters(): void { this.filtersOpen.update(o => !o); }
  protected closeFilters(): void  { this.filtersOpen.set(false); }

  protected removeChip(chip: FilterChip): void {
    switch (chip.kind) {
      case 'search':   this.searchInput.set(''); break;
      case 'category': this.selectedCategories.update(l => l.filter(c => c !== chip.value)); break;
      case 'level':    this.selectedLevels.update(l => l.filter(x => x !== chip.value)); break;
      case 'price':    this.priceFilter.set(null); break;
      case 'rating':   this.minRating.set(null); break;
    }
    this.applyFilters();
  }

  protected clearAllFilters(): void {
    this.searchInput.set('');
    this.selectedCategories.set([]);
    this.selectedLevels.set([]);
    this.priceFilter.set(null);
    this.minRating.set(null);
    this.applyFilters();
  }

  protected goToPage(p: number | '…'): void {
    if (p === '…' || p === this.page() || p < 1 || p > this.totalPages()) return;
    this.page.set(p);
    this.writeStateToUrl();
    void this.load();
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  protected isCategorySelected(name: string): boolean { return this.selectedCategories().includes(name); }
  protected isLevelSelected(level: CourseLevel): boolean { return this.selectedLevels().includes(level); }

  // ---- presentation helpers ----------------------------------------------

  protected levelLabel(level: CourseLevel): string {
    const t = this.lang.t();
    return level === 'Beginner' ? t.levelBeginner
         : level === 'Intermediate' ? t.levelIntermediate
         : t.levelAdvanced;
  }

  protected formatPrice(price: number): string {
    return price <= 0 ? 'Free' : `৳${price}`;
  }

  /** Enrollment window (countdown / closed) for a course's start date. Shared helper. */
  protected readonly enrollWindow = enrollmentWindow;

  /** Discount window (strikethrough price + badge) for a course. Shared helper. */
  protected discountFor(course: CoursesViewItem): DiscountInfo {
    return discountInfo(course.price, course.discountPercent, course.discountStartDate, course.discountEndDate);
  }

  protected discountPeriod(course: CoursesViewItem): string {
    return discountPeriodLabel(course.discountStartDate, course.discountEndDate);
  }

  protected buildPaymentQueryParams(course: CoursesViewItem): Record<string, string | number> {
    return { courseId: course.id, courseTitle: course.title, amount: this.discountFor(course).effectivePrice };
  }

  protected async toggleWishlist(course: CoursesViewItem): Promise<void> {
    const userId = this.authService.getCurrentUser()?.id;
    if (userId == null) return;

    this.wishlistToggleId.set(course.id);
    try {
      const response = await firstValueFrom(this.learningApi.toggleWishlist(course.id, String(userId)));
      const nextState = (response as any)?.data ?? (response as any)?.Data;
      const nowWishlisted = typeof nextState === 'boolean' ? nextState : !course.isWishlisted;
      this.wishlistIds.update(set => {
        const next = new Set(set);
        if (nowWishlisted) next.add(course.id); else next.delete(course.id);
        return next;
      });
    } catch {}
    finally { this.wishlistToggleId.set(null); }
  }

  protected getCardColor(index: number): string {
    const colors = ['#ec4899','#7c3aed','#06b6d4','#f97316','#10b981','#3b82f6','#f59e0b','#8b5cf6'];
    return colors[index % colors.length];
  }

  protected getImageUrl(thumbnailPath: string | null | undefined): string {
    if (!thumbnailPath) return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VlZWUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
    return this.learningApi.buildDownloadUrl(thumbnailPath);
  }

  protected onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = this.getImageUrl(null);
  }

  private normalizeLevel(level: string): CourseLevel {
    if (level === 'Intermediate' || level === 'Advanced') return level;
    return 'Beginner';
  }
}
