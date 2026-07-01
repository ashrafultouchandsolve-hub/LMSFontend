/**
 * Enrollment window helper — shared by every course-card surface (home, courses list, course details)
 * so the "countdown / closed" logic lives in exactly one place.
 *
 * A course's `startDate` doubles as the enrollment cutoff:
 *   - no start date            → 'none'    (always open, no badge)  — backward compatible
 *   - start day already passed → 'closed'  (enroll disabled, "Enrollment Closed")
 *   - within `thresholdDays`   → 'closing' (show the "X days left" countdown pill)
 *   - further out              → 'open'    (enrollable, no urgency badge)
 *
 * Day-level (calendar) comparison — you can enroll through the whole start day; it closes once that
 * day has passed. This matches the backend guard (`BdTime.Now.Date > StartDate.Date`).
 */
export type EnrollmentState = 'none' | 'open' | 'closing' | 'closed';

export interface EnrollmentWindow {
  state: EnrollmentState;
  /** Whole calendar days until the start day. 0 = today is the last day; -1 when not applicable. */
  daysLeft: number;
}

const MS_PER_DAY = 86_400_000;

export function enrollmentWindow(startDate?: string | null, thresholdDays = 15): EnrollmentWindow {
  if (!startDate) return { state: 'none', daysLeft: -1 };

  const start = new Date(startDate);
  if (isNaN(start.getTime())) return { state: 'none', daysLeft: -1 };

  const now = new Date();
  const startDay = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const daysLeft = Math.round((startDay.getTime() - today.getTime()) / MS_PER_DAY);

  if (daysLeft < 0) return { state: 'closed', daysLeft };
  if (daysLeft <= thresholdDays) return { state: 'closing', daysLeft };
  return { state: 'open', daysLeft };
}
