import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  ViewChild,
  computed,
  inject,
  signal,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { CourseDto, LearningApiService } from '../../Service/learning-api.service';
import { LanguageService } from '../../Service/language.service';
import { Category, CategoryService, categoryIcon } from '../../Service/category.service';
import { enrollmentWindow } from '../../Service/enrollment-window';
import { RecommendationService } from '../../Service/recommendation.service';
import { Navbar } from '../../shared/navbar/navbar';

type LearningHighlight = { title: string; description: string; };

type HomeCourse = {
  id: string; title: string; description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string; instructorName: string;
  lessonCount: number; durationMinutes: number;
  enrollmentCount: number; videoCount: number; practiceCount: number;
  price: number; thumbnailUrl: string; isEnrolled: boolean; isCompleted: boolean;
  averageRating?: number; totalRatings?: number;
  startDate?: string | null; endDate?: string | null;
};

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, Navbar],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit, AfterViewInit, OnDestroy {
  private readonly authService  = inject(AuthService);
  private readonly learningApi  = inject(LearningApiService);
  private readonly categoryService = inject(CategoryService);
  private readonly reco          = inject(RecommendationService);
  readonly lang                 = inject(LanguageService);
  private readonly zone        = inject(NgZone);
  private readonly hostRef     = inject(ElementRef<HTMLElement>);

  // ── Premium FX state (সব DOM-direct, OnPush change detection ছোঁয় না) ──
  private revealObserver?: IntersectionObserver;
  private fxCleanups: Array<() => void> = [];
  private fxEnabled = false;

  @ViewChild('courseTrackViewport')
  private courseTrackViewport?: ElementRef<HTMLDivElement>;

  @ViewChild('recoTrackViewport')
  private recoTrackViewport?: ElementRef<HTMLDivElement>;

  protected readonly userRole         = signal<number | null>(null);
  protected readonly isLoadingCourses = signal(false);
  protected readonly courses          = signal<HomeCourse[]>([]);
  protected readonly categories       = signal<Category[]>([]);

  // ── "Recommended for you" (logged-in students only) ──
  protected readonly recommendedCourses = signal<HomeCourse[]>([]);
  protected readonly recoUsedPrefs      = signal(false);
  protected readonly isStudent          = computed(() => this.userRole() === 0);

  /** Emoji for a category pill (shared with admin & courses pages). */
  protected catIcon(name: string): string { return categoryIcon(name); }

  /** Enrollment window (countdown / closed) for a course's start date. Shared helper. */
  protected readonly enrollWindow = enrollmentWindow;

  /** Cycle the 4 pill colour variants so dynamic categories keep visual variety. */
  private readonly pillVariants = ['cat-pill--ssc', 'cat-pill--hsc', 'cat-pill--admission', 'cat-pill--skills'];
  protected pillVariant(i: number): string { return this.pillVariants[i % this.pillVariants.length]; }

  // ── "Learn by Category" auto-slider (continuous right→left marquee, student-pausable) ──
  protected readonly categorySlidePaused = signal(false);
  protected toggleCategorySlide(): void { this.categorySlidePaused.update(p => !p); }

  /** Only categories that actually have at least one course — empty ones are hidden from students. */
  protected readonly visibleCategories = computed(() => {
    const courseCategoryNames = new Set(this.courses().map(c => c.category));
    return this.categories().filter(c => courseCategoryNames.has(c.name));
  });

  /** Categories rendered twice back-to-back so the marquee loops seamlessly. */
  protected readonly categoriesLoop = computed(() => {
    const list = this.visibleCategories();
    return list.length ? [...list, ...list] : [];
  });

  /** Duration scales with count → constant, gentle scroll speed regardless of how many categories exist.
   *  Higher seconds-per-card = slower slide. */
  protected readonly catMarqueeDuration = computed(() => Math.max(38, this.visibleCategories().length * 6));
  protected readonly isTeacher        = computed(() => this.userRole() === 1);
  protected readonly isAdmin          = computed(() => this.userRole() === 2);
  protected readonly activeReview = signal(0);
private reviewInterval: any;

  // ✅ Hero Slider state
  protected readonly activeSlide = signal(0);
  private sliderInterval: any;
  private readonly TOTAL_SLIDES = 3;

  // ✅ Workflow / "What you get" showcase state
  protected readonly activeFeature = signal(0);
  private featureInterval: any;
  private readonly TOTAL_FEATURES = 7;

  protected readonly workflowFeatures = computed(() => {
    const t = this.lang.t();
    return [
      { icon: '🎥', label: t.wfF1Label, desc: t.wfF1Desc },
      { icon: '🔴', label: t.wfF2Label, desc: t.wfF2Desc },
      { icon: '📝', label: t.wfF3Label, desc: t.wfF3Desc },
      { icon: '🧪', label: t.wfF4Label, desc: t.wfF4Desc },
      { icon: '📚', label: t.wfF5Label, desc: t.wfF5Desc },
      { icon: '🏆', label: t.wfF6Label, desc: t.wfF6Desc },
      { icon: '🎓', label: t.wfF7Label, desc: t.wfF7Desc },
    ];
  });

  // ✅ Hero slider content — language-driven so it re-translates on toggle (OnPush + signal).
  //    Structure/CSS unchanged: each slide keeps its slide-1/2/3 class; only the copy is i18n.
  protected readonly heroSlides = computed(() => {
    const t = this.lang.t();
    return [
      { cls: 'slide-1', category: 'SSC 2027',
        badge: t.hs1Badge, title: t.hs1Title, accent: t.hs1Accent, desc: t.hs1Desc, btn1: t.hs1Btn1, btn2: t.hs1Btn2,
        f1Icon: '📚', f1Strong: t.hs1F1Strong, f1Sub: t.hs1F1Sub, f2Icon: '✅', f2Strong: t.hs1F2Strong, f2Sub: t.hs1F2Sub },
      { cls: 'slide-2', category: 'HSC 2027',
        badge: t.hs2Badge, title: t.hs2Title, accent: t.hs2Accent, desc: t.hs2Desc, btn1: t.hs2Btn1, btn2: t.hs2Btn2,
        f1Icon: '🎓', f1Strong: t.hs2F1Strong, f1Sub: t.hs2F1Sub, f2Icon: '🔥', f2Strong: t.hs2F2Strong, f2Sub: t.hs2F2Sub },
      { cls: 'slide-3', category: 'Skills Development',
        badge: t.hs3Badge, title: t.hs3Title, accent: t.hs3Accent, desc: t.hs3Desc, btn1: t.hs3Btn1, btn2: t.hs3Btn2,
        f1Icon: '💡', f1Strong: t.hs3F1Strong, f1Sub: t.hs3F1Sub, f2Icon: '🚀', f2Strong: t.hs3F2Strong, f2Sub: t.hs3F2Sub },
    ];
  });

  ngOnInit(): void {
    this.startReviewTimer();
    this.authService.currentUser$.subscribe((user) => {
      this.userRole.set(typeof user?.role === 'number' ? user.role : null);
    });

    const user = this.authService.getCurrentUser();
    if (user) {
      this.userRole.set(typeof user.role === 'number' ? user.role : null);
    }

    void this.loadAllCourses();
    this.loadCategories();

    // ✅ Auto-slide every 5 seconds
    this.sliderInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);

    this.startFeatureTimer();
  }

  ngAfterViewInit(): void {
    queueMicrotask(() => {
      this.syncCourseCarouselState();
      this.setupFx();
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.sliderInterval);
    clearInterval(this.reviewInterval);
    clearInterval(this.featureInterval);
    this.fxCleanups.forEach((fn) => fn());
    this.fxCleanups = [];
    this.revealObserver?.disconnect();
  }

  // ══════════════════════════════════════════════════════════════
  //  PREMIUM FX ENGINE
  //  - সব listener NgZone-এর বাইরে (OnPush change detection trigger হয় না)
  //  - reveal = IntersectionObserver (scroll listener নয়)
  //  - pointer effects = rAF-throttled, শুধু transform/opacity
  //  - prefers-reduced-motion হলে পুরোটাই বন্ধ (fx-on class-ই বসে না)
  // ══════════════════════════════════════════════════════════════

  private setupFx(): void {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = (this.hostRef.nativeElement as HTMLElement).querySelector<HTMLElement>('.home-page');
    if (!root) return;
    this.fxEnabled = true;
    root.classList.add('fx-on');
    this.zone.runOutsideAngular(() => {
      this.bindScrollFx(root);
      this.bindHeroFx(root);
      this.bindTiltFx(root);
    });
    this.observeReveals();
  }

  /** [data-reveal] elements viewport-এ ঢুকলে .is-inview class পায় — একবারই */
  private observeReveals(): void {
    if (!this.fxEnabled) return;
    const root = this.hostRef.nativeElement as HTMLElement;
    this.revealObserver ??= new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('is-inview');
            this.revealObserver!.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    root.querySelectorAll<HTMLElement>('[data-reveal]:not(.fx-seen)').forEach((el) => {
      el.classList.add('fx-seen');
      this.revealObserver!.observe(el);
    });
  }

  /** Scroll progress bar + hero parallax variable — এক rAF-throttled handler */
  private bindScrollFx(root: HTMLElement): void {
    const bar = root.querySelector<HTMLElement>('.scroll-progress-bar');
    const hero = root.querySelector<HTMLElement>('.hero-slider');
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(1, doc.scrollTop / max) : 0})`;
        if (hero) hero.style.setProperty('--sy', String(Math.min(doc.scrollTop, 700)));
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    this.fxCleanups.push(() => window.removeEventListener('scroll', onScroll));
  }

  /** Hero: mouse-following glow (--mx/--my) + magnetic CTA buttons */
  private bindHeroFx(root: HTMLElement): void {
    const hero = root.querySelector<HTMLElement>('.hero-slider');
    if (!hero) return;
    let raf = 0;
    let px = 0;
    let py = 0;
    let magnetEl: HTMLElement | null = null;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      const rect = hero.getBoundingClientRect();
      px = e.clientX - rect.left;
      py = e.clientY - rect.top;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0;
          hero.style.setProperty('--mx', `${px}px`);
          hero.style.setProperty('--my', `${py}px`);
        });
      }
      // Magnetic CTA — cursor-এর দিকে হালকা টান
      const m = (e.target as Element).closest?.('[data-magnetic]') as HTMLElement | null;
      if (magnetEl && magnetEl !== m) {
        magnetEl.style.transform = '';
        magnetEl = null;
      }
      if (m) {
        magnetEl = m;
        const r = m.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        m.style.transform = `translate(${(dx * 0.22).toFixed(1)}px, ${(dy * 0.3).toFixed(1)}px)`;
      }
    };
    const onLeave = () => {
      if (magnetEl) {
        magnetEl.style.transform = '';
        magnetEl = null;
      }
      hero.classList.remove('glow-on');
    };
    const onEnter = (e: PointerEvent) => {
      if (e.pointerType !== 'touch') hero.classList.add('glow-on');
    };
    hero.addEventListener('pointermove', onMove, { passive: true });
    hero.addEventListener('pointerleave', onLeave);
    hero.addEventListener('pointerenter', onEnter);
    this.fxCleanups.push(() => {
      hero.removeEventListener('pointermove', onMove);
      hero.removeEventListener('pointerleave', onLeave);
      hero.removeEventListener('pointerenter', onEnter);
      if (raf) cancelAnimationFrame(raf);
    });
  }

  /** Delegated 3D tilt — [data-tilt] cards; async-loaded card-ও কাজ করে, re-bind লাগে না */
  private bindTiltFx(root: HTMLElement): void {
    let tiltEl: HTMLElement | null = null;
    let raf = 0;
    let lastEvent: PointerEvent | null = null;
    const reset = () => {
      if (tiltEl) {
        tiltEl.style.transform = '';
        tiltEl.classList.remove('is-tilting');
        tiltEl = null;
      }
    };
    const apply = () => {
      raf = 0;
      const e = lastEvent;
      if (!e || !tiltEl) return;
      const r = tiltEl.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      const rx = ((0.5 - y) * 7).toFixed(2);
      const ry = ((x - 0.5) * 9).toFixed(2);
      tiltEl.style.transform = `perspective(900px) translateY(-6px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      tiltEl.style.setProperty('--gx', `${(x * 100).toFixed(1)}%`);
      tiltEl.style.setProperty('--gy', `${(y * 100).toFixed(1)}%`);
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      const t = (e.target as Element).closest?.('[data-tilt]') as HTMLElement | null;
      if (t !== tiltEl) {
        reset();
        if (t) {
          tiltEl = t;
          t.classList.add('is-tilting');
        }
      }
      if (!tiltEl) return;
      lastEvent = e;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    root.addEventListener('pointermove', onMove, { passive: true });
    root.addEventListener('pointerleave', reset);
    this.fxCleanups.push(() => {
      root.removeEventListener('pointermove', onMove);
      root.removeEventListener('pointerleave', reset);
      if (raf) cancelAnimationFrame(raf);
      reset();
    });
  }

  // ── Slider methods ──────────────────────────────

  protected nextSlide(): void {
    this.activeSlide.update(s => (s + 1) % this.TOTAL_SLIDES);
  }

  protected prevSlide(): void {
    this.activeSlide.update(s => (s - 1 + this.TOTAL_SLIDES) % this.TOTAL_SLIDES);
  }

  protected goToSlide(index: number): void {
    this.activeSlide.set(index);
    // reset timer on manual nav
    clearInterval(this.sliderInterval);
    this.sliderInterval = setInterval(() => this.nextSlide(), 5000);
  }

  // ── Workflow showcase methods ────────────────────

  protected selectFeature(index: number): void {
    this.activeFeature.set(index);
    this.resetFeatureTimer();
  }

  private startFeatureTimer(): void {
    this.featureInterval = setInterval(() => {
      this.activeFeature.update((s) => (s + 1) % this.TOTAL_FEATURES);
    }, 3800);
  }

  private resetFeatureTimer(): void {
    clearInterval(this.featureInterval);
    this.startFeatureTimer();
  }

  // ── Existing methods ─────────────────────────────

  protected getCardColor(index: number): string {
    const colors = ['#ec4899','#7c3aed','#06b6d4','#f97316','#10b981','#3b82f6','#f59e0b','#8b5cf6'];
    return colors[index % colors.length];
  }

  protected buildPaymentQueryParams(course: HomeCourse): Record<string, string | number> {
    return { courseId: course.id, courseTitle: course.title, amount: course.price };
  }

  protected formatPrice(price: number): string {
    return price <= 0 ? 'Free' : `৳${price}`;
  }

  protected getImageUrl(thumbnailPath: string | null): string {
    if (!thumbnailPath) return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VlZWUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
    return this.learningApi.buildDownloadUrl(thumbnailPath);
  }

  protected onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = this.getImageUrl(null);
  }

  protected scrollCourses(direction: 'previous' | 'next'): void {
    const viewport = this.courseTrackViewport?.nativeElement;
    if (!viewport) return;
    const cardWidth = viewport.querySelector<HTMLElement>('.track-card')?.getBoundingClientRect().width ?? 320;
    viewport.scrollBy({ left: direction === 'next' ? (cardWidth + 18) * 1.05 : -(cardWidth + 18) * 1.05, behavior: 'smooth' });
  }

  private loadCategories(): void {
    this.categoryService.getAll().subscribe({
      next: (res: any) => this.categories.set(res?.data ?? res?.Data ?? []),
      error: () => this.categories.set([]),
    });
  }

  /** Scroll the "Recommended for you" carousel by roughly one card. */
  protected scrollReco(direction: 'previous' | 'next'): void {
    const viewport = this.recoTrackViewport?.nativeElement;
    if (!viewport) return;
    const cardWidth = viewport.querySelector<HTMLElement>('.cat-card')?.getBoundingClientRect().width ?? 290;
    viewport.scrollBy({ left: direction === 'next' ? (cardWidth + 18) * 1.05 : -(cardWidth + 18) * 1.05, behavior: 'smooth' });
  }

  /**
   * Build the personalized course row. Students only. Uses the shared RecommendationService
   * so it matches the leaderboard's logic exactly; excludes already-enrolled courses and
   * falls back to popular courses when there are no preference matches.
   */
  private async loadRecommended(allCourses: HomeCourse[]): Promise<void> {
    if (this.userRole() !== 0) { this.recommendedCourses.set([]); return; }

    const candidates = allCourses.filter((c) => !c.isEnrolled);
    if (candidates.length === 0) { this.recommendedCourses.set([]); return; }

    let prefs: { skillLevel?: string; interests?: string[] } | null = null;
    try { prefs = await firstValueFrom(this.learningApi.getUserPreferences()); }
    catch { prefs = null; } // 404 = no preferences saved yet

    const ranked = this.reco.rankCourses(candidates, prefs, { limit: 8 });
    if (ranked.length > 0) {
      this.recoUsedPrefs.set(true);
      this.recommendedCourses.set(ranked);
    } else {
      this.recoUsedPrefs.set(false);
      this.recommendedCourses.set(this.reco.popularFallback(candidates, 8));
    }
    queueMicrotask(() => this.observeReveals());
  }

  private async loadAllCourses(): Promise<void> {
    this.isLoadingCourses.set(true);
    try {
      const response = await firstValueFrom(this.learningApi.getAllCourses());
      const raw = Array.isArray(response.data) ? response.data : ((response as any).Data ?? []);
      let mapped = raw.map((c: CourseDto) => this.mapCourseForHome(c));
      mapped = await this.attachEnrollmentState(mapped);
      mapped = await this.attachRatings(mapped);
      this.courses.set(mapped);
    } catch { this.courses.set([]); }
    finally {
      this.isLoadingCourses.set(false);
      void this.loadRecommended(this.courses()); // self-contained; never disturbs courses()
      queueMicrotask(() => {
        this.syncCourseCarouselState();
        this.observeReveals(); // async-loaded course card-গুলোও reveal observer-এ ঢোকাও
        this.ensureCoursesRevealed(); // safety net: observer miss করলেও card যেন অদৃশ্য না থাকে
      });
    }
  }

  /**
   * Async-loaded course card গুলো reveal animation-এ opacity:0 দিয়ে শুরু হয় এবং
   * IntersectionObserver `.is-inview` যোগ করলে দেখায়। কোনো কারণে observer fire না করলে
   * (timing/below-fold) card স্থায়ীভাবে hidden থেকে যেত — তাই fallback হিসেবে অল্প পরে
   * জোর করে reveal করে দিই। observer আগেই দিলে এটা no-op (class idempotent)।
   */
  private ensureCoursesRevealed(): void {
    if (!this.fxEnabled) return;
    const shell = (this.hostRef.nativeElement as HTMLElement)
      .querySelector<HTMLElement>('.cats-carousel-shell');
    if (!shell) return;
    setTimeout(() => shell.classList.add('is-inview'), 1500);
  }

  private syncCourseCarouselState(): void { void this.courseTrackViewport?.nativeElement?.scrollLeft; }

  private mapCourseForHome(dto: CourseDto): HomeCourse {
    return {
      id: dto.id, title: dto.title, description: dto.description,
      level: this.normalizeLevel(dto.level), category: dto.category,
      instructorName: dto.instructorName, lessonCount: dto.lessonCount ?? 0,
      durationMinutes: dto.durationMinutes, price: dto.price,
      enrollmentCount: dto.enrollmentCount ?? 0,
      videoCount: dto.videoCount ?? 0,
      practiceCount: dto.practiceCount ?? 0,
      thumbnailUrl: this.learningApi.buildDownloadUrl(dto.thumbnailPath),
      isEnrolled: false,
      isCompleted: dto.isCompleted ?? false,
      startDate: dto.startDate ?? null,
      endDate: dto.endDate ?? null,
    };
  }

  private async attachEnrollmentState(courses: HomeCourse[]): Promise<HomeCourse[]> {
    if (!this.authService.isLoggedIn()) return courses;
    return Promise.all(courses.map(async (c) => {
      try { return { ...c, isEnrolled: await firstValueFrom(this.learningApi.checkMyEnrollment(c.id)) }; }
      catch { return { ...c, isEnrolled: false }; }
    }));
  }

  private async attachRatings(courses: HomeCourse[]): Promise<HomeCourse[]> {
    return Promise.all(courses.map(async (c) => {
      try {
        const res = await firstValueFrom(this.learningApi.getRatingSummary(c.id));
        const d = (res as any)?.data ?? (res as any)?.Data;
        if (d) return { ...c, averageRating: parseFloat(d.averageRating) || 0, totalRatings: d.totalRatings || 0 };
      } catch {}
      return c;
    }));
  }

  private normalizeLevel(level: string): HomeCourse['level'] {
    if (level === 'Intermediate' || level === 'Advanced') return level;
    return 'Beginner';
  }

  protected readonly reviews = [
  {
    name: 'রাহেলা আক্তার',
    role: 'SSC 2025 — GPA 5.00',
    quote: 'অল্প খরচে এত ভালো Teacher, আমাদের স্বপ্নের চেয়ে বেশি, আশার চেয়ে বড়।',
    rating: 5,
    image: '',           // ← image URL দাও অথবা খালি রাখো
    videoUrl: '',        // ← YouTube link দাও অথবা খালি রাখো
    videoCaption: 'SSC 2025 তে GPA-5 অর্জনের গল্প',
  },
  {
    name: 'তানভীর হোসেন',
    role: 'HSC 2024 — Golden A+',
    quote: 'Nirvor Nije Sikhi আমার জীবন পরিবর্তন করে দিয়েছে। শিক্ষকরা অনেক আন্তরিক এবং সবসময় সাহায্য করেন।',
    rating: 5,
    image: '',
    videoUrl: '',
    videoCaption: 'HSC তে Golden A+ পাওয়ার অভিজ্ঞতা',
  },
  {
    name: 'সুমাইয়া ইসলাম',
    role: 'Admission — ঢাকা বিশ্ববিদ্যালয়',
    quote: 'Admission English কোর্সটা না করলে ঢাকা বিশ্ববিদ্যালয়ে চান্স পেতাম না। অসাধারণ পড়ানোর ধরন।',
    rating: 5,
    image: '',
    videoUrl: '',
    videoCaption: 'ঢাকা বিশ্ববিদ্যালয়ে ভর্তির সাফল্য',
  },
  {
    name: 'মুশফিকের মা',
    role: 'সুন্দরবনের বেদকামী — SSC ২৫ GPA-5',
    quote: 'অল্প খরচে এত ভালো টিচার, আমাদের স্বপ্নের চেয়ে বেশি, আশার চেয়ে বড়।',
    rating: 5,
    image: '',
    videoUrl: '',
    videoCaption: 'সুন্দরবন থেকে নটর ডেম — মুশফিকের স্বপ্ন পূরণের গল্প!',
  },
];
 
protected nextReview(): void {
  this.activeReview.update(s => (s + 1) % this.reviews.length);
  this.resetReviewTimer();
}
 
protected prevReview(): void {
  this.activeReview.update(s => (s - 1 + this.reviews.length) % this.reviews.length);
  this.resetReviewTimer();
}
 
protected goToReview(index: number): void {
  this.activeReview.set(index);
  this.resetReviewTimer();
}
 
private startReviewTimer(): void {
  this.reviewInterval = setInterval(() => {
    this.activeReview.update(s => (s + 1) % this.reviews.length);
  }, 6000);
}
 
private resetReviewTimer(): void {
  clearInterval(this.reviewInterval);
  this.startReviewTimer();
}
}



