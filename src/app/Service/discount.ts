/**
 * Discount-window helper — shared by every price surface (home cards, courses list,
 * course details, payment links) so the "discounted price" logic lives in exactly one place.
 *
 * A discount is active while today is inside [discountStartDate, discountEndDate], both
 * inclusive, compared at day level (you get the discount through the whole end day).
 * This mirrors the backend `CoursePricing` helper (BD time there, browser-local day here —
 * the backend price is authoritative at payment time).
 */
export interface DiscountInfo {
  /** True while the discount window is running (and the inputs are valid). */
  active: boolean;
  /** The payable price: discounted while active, otherwise the original price. */
  effectivePrice: number;
  /** The percent applied (0 when inactive). */
  percent: number;
}

export function discountInfo(
  price: number,
  percent?: number | null,
  startDate?: string | null,
  endDate?: string | null,
): DiscountInfo {
  const inactive: DiscountInfo = { active: false, effectivePrice: price, percent: 0 };

  if (price <= 0) return inactive; // free courses never show discount UI
  if (!percent || percent <= 0 || percent > 100) return inactive;
  if (!startDate || !endDate) return inactive;

  const start = new Date(startDate);
  const end = new Date(endDate);
  if (isNaN(start.getTime()) || isNaN(end.getTime())) return inactive;

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const startDay = new Date(start.getFullYear(), start.getMonth(), start.getDate()).getTime();
  const endDay = new Date(end.getFullYear(), end.getMonth(), end.getDate()).getTime();

  if (today < startDay || today > endDay) return inactive;

  const effectivePrice = Math.round((price - (price * percent) / 100) * 100) / 100;
  return { active: true, effectivePrice, percent };
}

/** "1 Jul – 10 Jul" style label for the discount window (badge text on course cards). */
export function discountPeriodLabel(startDate?: string | null, endDate?: string | null): string {
  const fmt = (iso?: string | null): string => {
    if (!iso) return '';
    const d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  };
  const from = fmt(startDate);
  const to = fmt(endDate);
  if (!from || !to) return '';
  return from === to ? from : `${from} – ${to}`;
}
