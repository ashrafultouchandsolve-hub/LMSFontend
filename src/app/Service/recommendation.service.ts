import { Injectable } from '@angular/core';

/**
 * Minimal course shape the ranker needs. Both the home page (`HomeCourse`) and the
 * leaderboard's raw `CourseDto` satisfy this, so the same engine serves both.
 */
export interface RankableCourse {
  id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  enrollmentCount?: number;
  averageRating?: number;
  createdAt?: string;
}

/** Saved onboarding preferences relevant to ranking. */
export interface RecoPrefs {
  skillLevel?: string;
  interests?: string[];
}

/**
 * Interest → keyword taxonomy. THIS is what makes a single onboarding choice
 * "catch everything": picking `Web Development` expands to many web keywords, so any
 * course whose category / title / description mentions web, react, html… gets matched —
 * even if the admin filed it under a generic category like "Skills Development".
 * Academic interests (SSC/HSC/Admission) map straight onto the category names.
 *
 * Curated on purpose (not admin-driven) — keep the keys in sync with the onboarding
 * `interestOptions` list in onboarding-preferences.ts.
 */
export const INTEREST_TAXONOMY: Record<string, string[]> = {
  'Web Development':        ['web', 'frontend', 'front-end', 'html', 'css', 'javascript', 'typescript', 'react', 'angular', 'vue', 'node', 'web design', 'webdesign', 'wordpress'],
  'Programming':            ['programming', 'coding', 'python', 'java', 'c++', 'c#', 'php', 'dsa', 'algorithm', 'data structure', 'developer', 'software'],
  'Mobile App Development': ['mobile', 'android', 'ios', 'flutter', 'kotlin', 'swift', 'react native', 'app development'],
  'Data Science & AI':      ['data science', 'machine learning', 'deep learning', 'artificial intelligence', 'analytics', 'pandas', 'numpy', 'tensorflow'],
  'UI/UX Design':           ['ui', 'ux', 'figma', 'graphic design', 'adobe', 'photoshop', 'illustrator', 'product design'],
  'Cyber Security':         ['cyber', 'security', 'ethical hacking', 'penetration', 'networking'],
  'Business & Marketing':   ['business', 'marketing', 'seo', 'digital marketing', 'freelancing', 'entrepreneur', 'sales'],
  // ── Academic / exam tracks (match category names directly) ──
  'SSC':                    ['ssc'],
  'HSC':                    ['hsc'],
  'University Admission':   ['admission', 'university'],
  'Skills & Communication': ['skill', 'communication', 'soft skill', 'spoken', 'english', 'general'],
};

/**
 * Canonical interest buckets, defined as substring matchers against the admin
 * CATEGORY NAMES (lowercased). This is the source of truth that makes recommendations
 * computable straight from categories: whatever bucket a student picks resolves to the
 * real category names admin filed courses under.
 *
 * Non-overlapping against the shipped fixed categories (SSC 20xx, HSC 20xx,
 * Admission English/Science, Skills Development, Communication, General). Any admin
 * category no bucket matches becomes its OWN selectable interest (see
 * {@link RecommendationService.buildInterestOptions}) — so admin can create anything
 * and it stays pickable + recommendable.
 */
export const CATEGORY_BUCKETS: Record<string, string[]> = {
  'SSC':           ['ssc'],
  'HSC':           ['hsc'],
  'Admission':     ['admission'],
  'Skills':        ['skill'],
  'Communication': ['communicat'],
  'General':       ['general'],
};

/**
 * Matchers for interest labels saved by OLDER onboarding versions, so a student who
 * picked the previous labels still resolves to real categories (no data migration).
 */
const LEGACY_INTEREST_MATCHERS: Record<string, string[]> = {
  'University Admission':   ['admission'],
  'Skills & Communication': ['skill', 'communicat'],
};

@Injectable({ providedIn: 'root' })
export class RecommendationService {
  /**
   * The interest options to show at onboarding, derived from the live admin categories:
   * every canonical bucket that matches ≥1 category, plus any category no bucket covers
   * (surfaced as its own interest). Guarantees every option maps to real, recommendable
   * courses — the "whatever admin creates stays computable" property.
   */
  buildInterestOptions(categoryNames: string[] | null | undefined): string[] {
    const cats = this.cleanCategories(categoryNames);
    const options: string[] = [];
    const covered = new Set<string>();

    for (const [label, matchers] of Object.entries(CATEGORY_BUCKETS)) {
      const hits = cats.filter((c) => this.categoryMatches(c, matchers));
      if (hits.length > 0) {
        options.push(label);
        hits.forEach((h) => covered.add(h));
      }
    }
    // Admin categories no bucket claimed become their own interests.
    for (const c of cats) {
      if (!covered.has(c) && !options.includes(c)) options.push(c);
    }
    return options;
  }

  /**
   * The set of category names a student's chosen interests resolve to.
   * Bucket label → its matching categories; a legacy label → its matchers' categories;
   * anything else is treated as a raw category name (kept as-is for direct comparison).
   */
  resolveInterestCategories(
    interests: string[] | null | undefined,
    categoryNames: string[] | null | undefined,
  ): Set<string> {
    const cats = this.cleanCategories(categoryNames);
    const out = new Set<string>();
    for (const raw of interests ?? []) {
      const label = (raw ?? '').trim();
      if (!label) continue;
      const matchers = CATEGORY_BUCKETS[label] ?? LEGACY_INTEREST_MATCHERS[label];
      if (matchers) {
        cats.filter((c) => this.categoryMatches(c, matchers)).forEach((c) => out.add(c));
      } else {
        // Raw category-name interest (self-healed option). Match a live category if present,
        // else keep the label so scoreCourse can still compare case-insensitively.
        const exact = cats.filter((c) => c.toLowerCase() === label.toLowerCase());
        if (exact.length) exact.forEach((c) => out.add(c));
        else out.add(label);
      }
    }
    return out;
  }

  private cleanCategories(names: string[] | null | undefined): string[] {
    return (names ?? []).map((c) => (c ?? '').trim()).filter(Boolean);
  }

  private categoryMatches(categoryName: string, matchers: string[]): boolean {
    const n = (categoryName ?? '').toLowerCase();
    return matchers.some((m) => n.includes(m));
  }

  /**
   * Expand chosen interests into a deduped, lowercased keyword set via the taxonomy.
   * Unknown interests fall back to their own label so nothing silently drops.
   */
  expandInterests(interests: string[] | undefined | null): string[] {
    const out = new Set<string>();
    for (const raw of interests ?? []) {
      const key = (raw ?? '').trim();
      if (!key) continue;
      const kws = INTEREST_TAXONOMY[key];
      if (kws) kws.forEach((k) => out.add(k.toLowerCase()));
      else out.add(key.toLowerCase());
    }
    return [...out];
  }

  /**
   * Rank courses against a student's preferences.
   * Scoring per keyword hit: category +3, title +2, description +1; matching skill level +1.
   * Returns only courses with score > 0 (so callers can fall back to popularFallback()).
   */
  rankCourses<T extends RankableCourse>(
    courses: T[],
    prefs: RecoPrefs | null,
    opts: { limit?: number; excludeIds?: Iterable<string>; categories?: string[] } = {},
  ): T[] {
    const limit = opts.limit ?? 8;
    const exclude = new Set<string>([...(opts.excludeIds ?? [])].map(String));

    const matchers = this.expandInterests(prefs?.interests).map((kw) => this.buildMatcher(kw));
    const skill = (prefs?.skillLevel ?? '').trim().toLowerCase();

    // Category is the dominant, always-computable signal: resolve the student's interests
    // to real category names, so a course in one of those categories scores strongly even
    // if its title/description share no keywords.
    const resolvedCats = new Set(
      [...this.resolveInterestCategories(prefs?.interests, opts.categories)].map((c) => c.toLowerCase()),
    );

    if (matchers.length === 0 && !skill && resolvedCats.size === 0) return [];

    return (courses ?? [])
      .filter((c) => !exclude.has(String(c.id)))
      .map((c) => ({ c, score: this.scoreCourse(c, matchers, skill, resolvedCats) }))
      .filter((s) => s.score > 0)
      .sort(
        (a, b) =>
          b.score - a.score ||
          (b.c.enrollmentCount ?? 0) - (a.c.enrollmentCount ?? 0) ||
          (b.c.averageRating ?? 0) - (a.c.averageRating ?? 0),
      )
      .slice(0, limit)
      .map((s) => s.c);
  }

  /**
   * Fallback when the student has no preferences or nothing matched:
   * most-enrolled → highest-rated → newest.
   */
  popularFallback<T extends RankableCourse>(
    courses: T[],
    limit = 8,
    opts: { excludeIds?: Iterable<string> } = {},
  ): T[] {
    const exclude = new Set<string>([...(opts.excludeIds ?? [])].map(String));
    return [...(courses ?? [])]
      .filter((c) => !exclude.has(String(c.id)))
      .sort(
        (a, b) =>
          (b.enrollmentCount ?? 0) - (a.enrollmentCount ?? 0) ||
          (b.averageRating ?? 0) - (a.averageRating ?? 0) ||
          this.time(b.createdAt) - this.time(a.createdAt),
      )
      .slice(0, limit);
  }

  // ── internals ──────────────────────────────────────────────

  private scoreCourse(c: RankableCourse, matchers: RegExp[], skill: string, resolvedCats: Set<string>): number {
    const cat = (c.category ?? '').toLowerCase();
    const title = (c.title ?? '').toLowerCase();
    const desc = (c.description ?? '').toLowerCase();
    let score = 0;
    // Strong signal: the course's category is one the student explicitly cares about.
    if (resolvedCats.size > 0 && resolvedCats.has(cat)) score += 5;
    // Weaker keyword fallback (helps raw-keyword interests and generic categories).
    for (const re of matchers) {
      if (re.test(cat)) score += 3;
      else if (re.test(title)) score += 2;
      else if (re.test(desc)) score += 1;
    }
    if (skill && (c.level ?? '').toLowerCase() === skill) score += 1;
    return score;
  }

  /**
   * Whole-token matcher so short keywords don't false-match inside words
   * (e.g. "ui" must not hit "building", "ai" must not hit "domain").
   * Custom boundaries `[^a-z0-9]` keep symbol keywords like "c++"/"c#" working.
   */
  private buildMatcher(kw: string): RegExp {
    const esc = kw.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`(^|[^a-z0-9])${esc}([^a-z0-9]|$)`);
  }

  private time(s?: string): number {
    const t = s ? Date.parse(s) : NaN;
    return Number.isNaN(t) ? 0 : t;
  }
}
