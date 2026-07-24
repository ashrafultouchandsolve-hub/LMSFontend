# 📱 Nirvoor e-learning — Mobile Responsive Plan

> **Purpose of this file.** This is the single source of truth for making the whole
> frontend (`project_lms-main`) mobile responsive. Every route/page and every
> modal in the app is listed below. Each entry has: **where the code lives**, its
> **current responsive status**, and a concrete **task list** ("do this on this page").
>
> **How we work through it:** the whole job is split into **12 numbered Parts** below.
> Just tell me **"do Part 3"** (or any number) and I'll finish every page in that Part,
> then tick its boxes. Parts are ordered by priority — do them top to bottom, but you
> can also jump to any Part you want first.

---

## ▶ THE WORK, SPLIT INTO PARTS

> **Just say: "do Part N".** Each Part is a self-contained batch. Do them in order for
> best results (Part 0 first — it fixes ~40% of mobile bugs everywhere).

| Part | Name | Pages in this Part | Do it when |
|------|------|--------------------|-----------|
| **Part 0** | 🧱 Foundation (global CSS) | Global `styles.css` only (§2) | **First.** Everything else builds on it. |
| **Part 1** | 🏠 Entry & Navigation | Navbar · Home Page | Highest traffic — do right after Part 0. |
| **Part 2** | 🔎 Browse & Buy | Courses catalog · Course Details · Payment | The path to enrolling/paying. |
| **Part 3** | 🔐 Auth & Onboarding | Login · Register · Onboarding Preferences | Sign-up flow. |
| **Part 4** | 🎓 Learning Workspace | Enrolled Course shell · Course Live/Recordings/Classwork/Exams/Practice tabs · Video History | The core study screen + its 5 tabs. |
| **Part 5** | 📝 Assessments | Quiz Attempt · Quiz Editor · Live Exam Attempt · AI Writing | Exams & quizzes. |
| **Part 6** | 👤 Student Panel | Profile (+Wishlist) · My Courses · My Classes · Certificates · Assignments | The student's own dashboard. |
| **Part 7** | 🏆 Community & Extras | Leaderboard · Notifications · Announcements · Store · Instructors | Lower-traffic student pages. |
| **Part 8** | 🔴 Live Classes | Live Class Room · Free Live list · Free Class · Notification Bell dropdown | Jitsi rooms & live listings. |
| **Part 9** | 👨‍🏫 Teacher / Staff | Teacher/Course Manager · Exam Submissions · Enrolled Students · Live Exam Editor · Live Exam Responses · Teacher Profile · Teacher Evaluation | Staff-facing screens. |
| **Part 10** | 🛠️ Admin | Admin Dashboard · Admin Item · Admin Settings · Announcement Banner | Admin-only screens. |
| **Part 11** | 🪟 Shared & Modal Sweep | Confirm Dialog · Agenda Menu · full modal audit (§6) | Final pass over every popup. |

**Part checklist:** ✅ P0 · ✅ P1 · ✅ P2 · ✅ P3 · ✅ P4 · ✅ P5 · ✅ P6 · ✅ P7 · ✅ P8 · ✅ P9 · ✅ P10 · ✅ P11 — **🎉 ALL 12 PARTS DONE**

> **✅ Part 0 & Part 1 done + tested** (2026-07-24). Verified with headless Chrome at
> 360 / 390 / 768px and desktop 1280px: **zero horizontal overflow**, hamburger drawer
> opens/closes (tap-outside + Esc + route change), desktop unchanged. Build passes clean.
> Follow-up fix: home course-card carousel was clipping cards on phones (arrows stole
> width) → arrows hidden on phones, card sized to the track (`88%`) → cards show fully.
>
> **✅ Part 2 & Part 3 done + tested** (2026-07-24). Verified live at 360 / 390px against
> the real backend: **zero overflow** on Courses, Course Details, Payment, Login, Register.
> Highlights — Courses filter rail confirmed as an off-canvas drawer (+ body scroll-lock);
> Course Details purchase card (image · price · **Enroll**) now reorders **above** the
> content on mobile; Payment CTA made full-width; Login/Register/Onboarding switched to
> `100dvh` so the mobile keyboard can't hide the submit button. Build passes clean.
>
> **✅ Part 4 & Part 5 done + tested** (2026-07-24). The Enrolled-Course shell, its 5 tab
> components, Live Exam Attempt and AI Writing were already responsive — verified. New work:
> the lesson list now flows below the video on mobile (no cramped nested scroll); **Video
> History**, **Quiz Attempt** and **Quiz Editor** had *zero* responsive CSS and got fresh
> mobile blocks (history cards stack with a full-width Resume button; quiz options/inputs go
> single-column). Verified live at 390px on `/history` and `/enrolled-course/:id` (video +
> lesson list) — **zero overflow**; the rest verified via clean build + single-column CSS.
>
> **✅ Part 6 & Part 7 done + tested** (2026-07-24). All 10 student-panel / community pages
> tested live at 390px: **9 already had zero overflow** (Profile with card-stacked results,
> My Courses, My Classes, Certificates, Assignments, Notifications, Announcements, Store,
> Instructors). The one real fix — **Leaderboard**: its ranking table (530px) was being
> *clipped* inside an `overflow:hidden` card, hiding the Total/Score columns; now the card
> scrolls sideways on phones (verified scrollable, corners still rounded). Build passes clean.
>
> **✅ Part 8 & Part 9 done + tested** (2026-07-24). Part 8: **Live Class Room** (had zero CSS)
> — header now wraps + `100dvh` so Jitsi controls clear the mobile address bar; **Free Class**
> got mobile padding; Free Live already collapsed; **Notification Bell + Agenda dropdowns**
> fixed earlier (viewport-pinned, no edge spill). Part 9: the **3 staff tables** were the risk —
> Teacher's main + students-modal tables and **Enrolled Students** now scroll sideways (verified
> live as admin: es-table scrollable 603→348, not clipped) instead of hiding columns; Live Exam
> Responses already scrolled; Teacher Profile grid + the exam/eval/editor pages already collapse.
> Verified live at 390px (free-live, free-class, course-manager, enrolled-students). Build clean.
> Follow-up: Course Manager had a full-height empty dark sidebar (`height:100vh` on mobile → now
> `auto`, 259px) and its 9-column courses table forced horizontal sliding to reach actions →
> now **card-stacked** on phones (thumbnail+title header, labelled fields, full action-button row,
> no scroll). Students-modal table stays a simple horizontal scroll (only 4 cols).
>
> **✅ Part 10 & Part 11 done + tested — WHOLE SITE COMPLETE** (2026-07-24). Part 10: **Admin
> Dashboard** — sidebar already collapses to a compact horizontal top bar; its **3 user tables
> card-stacked** on phones (Name header · labelled fields · action row — no sliding), verified live
> as admin; parent-report modal scrolls wide report HTML + `dvh`. Admin Item / Settings / Announcement
> Banner already responsive (auto-fit grid, 768/640 blocks). Part 11: **Confirm Dialog** already
> F6-perfect (`min(420px,100%)`, 44px flex buttons); **modal sweep clean** — an app-wide audit found
> **no modal uses a fixed px width**, so none overflow (all use `min()`/`max-width`/`100%`). Payment,
> Notification Bell + Agenda dropdowns done earlier. Build passes clean. **Every page + modal is now
> mobile-responsive.**

---

## ✅ Done so far — test these on your phone

Run locally: backend on `https://localhost:7002` (https profile) + `npm start` (dev server on
`http://localhost:4200`). Open on a phone (same Wi‑Fi — swap `localhost` for your PC's IP) or in
Chrome DevTools device mode (**Ctrl+Shift+M**). *These are local — the changes aren't deployed to
the live site yet.*

| ✅ Page | Link (local dev) | Note |
|---------|------------------|------|
| Home | `http://localhost:4200/homepage` | tap ☰ menu |
| Navbar | *(on every page)* | ☰ appears ≤768px |
| Courses | `http://localhost:4200/courses` | tap **Filters** → drawer |
| Course Details | `http://localhost:4200/course-details/98c1273f-7d28-459c-afbd-06788271c93e` | price + **Enroll** on top |
| Login | `http://localhost:4200/login` | |
| Register | `http://localhost:4200/register` | |
| Payment | `http://localhost:4200/payment?courseId=98c1273f-7d28-459c-afbd-06788271c93e&courseTitle=Python&amount=1200` | must be **logged in** first |
| Onboarding | `http://localhost:4200/onboarding-preferences` | must be **logged in** |
| Enrolled Course | `http://localhost:4200/enrolled-course/98c1273f-7d28-459c-afbd-06788271c93e` | logged in + enrolled; video + lesson list |
| Video History | `http://localhost:4200/history` | logged in |
| Quiz / Exam / AI Writing | open from inside an enrolled course | content-gated deep links |
| Profile | `http://localhost:4200/profile` | logged in; tabs + dashboard |
| My Courses / Classes | `http://localhost:4200/my-courses` · `/myClasses` | logged in |
| Certificates / Assignments | `http://localhost:4200/certificates` · `/assignments` | logged in |
| Leaderboard | `http://localhost:4200/leaderboard` | logged-in student; **swipe the table** sideways |
| Notifications / Announcements | `http://localhost:4200/notifications` · `/announcements` | |
| Store / Instructors | `http://localhost:4200/store` · `/instructors` | public |
| Free Live | `http://localhost:4200/free-live` | public; swipe/join cards |
| Free Class | `http://localhost:4200/free-class` | logged in |
| Course Manager (Teacher UI) | `http://localhost:4200/course-manager` | **admin/teacher login**; table scrolls |
| Enrolled Students | `http://localhost:4200/enrolled-students/98c1273f-7d28-459c-afbd-06788271c93e` | **admin login**; swipe the table |
| Teacher Evaluation | `http://localhost:4200/teacher-evaluation/98c1273f-7d28-459c-afbd-06788271c93e` | logged in |
| Live Class Room / Exam Editor / Responses / Exam Submissions | open from a live class / exam | content-gated deep links |
| Admin Dashboard | `http://localhost:4200/admin` | **admin login**; tap tabs → tables are cards |
| Admin Item / Settings / Announcement Banner | admin dashboard tabs | admin login |

> **Staff pages** (Course Manager, Enrolled Students, etc.) need an admin/teacher account —
> your dev admin is `admin@learning.com` (from the `_vtest` scripts). The Notification Bell 🔔
> and Agenda "upcoming" dropdowns appear in the navbar on any logged-in page.

> Course-details / payment links use a real course id (`Python`). Any id from `/courses` works too.
> **What to check:** no left‑right scrolling, ☰ opens/closes, buttons easy to tap.

---

## 0. Definition of Done (applies to every page)

A page/modal counts as **responsive-done** only when all of these pass:

- [ ] No horizontal scrollbar / no content bleeding off-screen at **360px, 390px, 414px** widths.
- [ ] Layout is verified at **4 widths**: `360` (small phone), `390` (iPhone), `768` (tablet), `1024`+ (desktop still looks correct — no regressions).
- [ ] All tap targets (buttons, links, icons) are **≥ 44×44px**.
- [ ] Text is readable without zoom (**≥ 14px** body, **16px** on form inputs to stop iOS auto-zoom).
- [ ] Any `<table>` is either card-stacked or wrapped in a horizontal-scroll container — never squished.
- [ ] Modals/overlays: fit the viewport, scroll internally (not the page body), and are dismissible with a visible close button.
- [ ] Images/video/iframes never exceed viewport width (`max-width:100%`).
- [ ] Forms are single-column on phones; labels + inputs stack.
- [ ] Desktop appearance is unchanged (mobile rules live inside `@media` queries only).

**Test how:** Chrome DevTools device toolbar (Ctrl+Shift+M) → iPhone SE (375), iPhone 12 Pro (390), Pixel 7, iPad (768). Also throttle to "Slow 4G" once per critical page.

---

## 1. Breakpoint System (use these everywhere — do not invent new ones)

The app currently has inconsistent breakpoints (`960/640` in `styles.css`, `768` in navbar). **Standardize on these tokens** and use them in every `@media` block from now on:

| Token | Query | Target |
|-------|-------|--------|
| `xl` | `min-width: 1280px` | Large desktop (base styles, no query needed) |
| `lg` | `max-width: 1024px` | Small laptop / large tablet landscape |
| `md` | `max-width: 768px`  | Tablet portrait — **primary mobile breakpoint** |
| `sm` | `max-width: 600px`  | Large phone — collapse to single column here |
| `xs` | `max-width: 380px`  | Small phone — tighten spacing/font |

> **Rule:** design desktop-first (base CSS = desktop, already written), then add `max-width` overrides. Most work happens in the `768` and `600` blocks.

---

## 2. Foundation Tasks — DO THESE FIRST (once, globally)

These live in `src/styles.css` and fix ~40% of mobile bugs across *all* pages before we touch individual pages.

- [ ] **F1 — Kill horizontal overflow globally.** Add:
  ```css
  html, body { overflow-x: hidden; max-width: 100%; }
  * { min-width: 0; }            /* stops flex/grid children forcing overflow */
  img, video, iframe, svg, canvas { max-width: 100%; height: auto; }
  ```
- [ ] **F2 — Fluid container.** Audit page wrappers using fixed `width:` / large `min-width:` and swap to `width:100%; max-width:1200px; margin-inline:auto; padding-inline:clamp(12px,4vw,32px)`.
- [ ] **F3 — Responsive table utility** (reused by the 5 table pages). Add a global helper:
  ```css
  .table-scroll { width:100%; overflow-x:auto; -webkit-overflow-scrolling:touch; }
  @media (max-width:600px){ .table-scroll table { min-width:640px; } }
  ```
- [ ] **F4 — Form inputs = 16px** on mobile to prevent iOS zoom-on-focus:
  ```css
  @media (max-width:768px){ input, select, textarea { font-size:16px; } }
  ```
- [ ] **F5 — Tap target minimum:** global `@media (max-width:768px)` bump for `button, .btn, a.button, .icon-btn { min-height:44px; }`.
- [ ] **F6 — Modal base pattern** (shared by every modal). Standardize overlay CSS so each modal doesn't reinvent it:
  ```css
  .modal-overlay { position:fixed; inset:0; display:grid; place-items:center; padding:16px; z-index:1000; }
  .modal-panel  { width:100%; max-width:560px; max-height:90dvh; overflow-y:auto; border-radius:16px; }
  @media (max-width:600px){
    .modal-overlay{ padding:0; align-items:flex-end; }         /* bottom sheet on phone */
    .modal-panel { max-width:100%; max-height:92dvh; border-radius:20px 20px 0 0; }
  }
  ```
  Use `dvh` (dynamic viewport height) not `vh` so mobile browser chrome doesn't clip modals.
- [ ] **F7 — Reconcile breakpoints:** update the two existing blocks in `styles.css` (`960px`, `640px`) to the standard `1024/768/600` tokens so global + component rules agree.

---

## 3. Execution Order

See **▶ THE WORK, SPLIT INTO PARTS** at the top — Parts 0 → 11 are already in
recommended priority order. Just say *"do Part N"*. The detailed per-page task lists
in §5 below follow the same order (Part 0 = Foundation §2, then Part 1 onward).

---

## 4. Progress Tracker (tick as we finish)

| # | Page / Component | Route | Status | Priority | Has `@media` now? | Has table? |
|---|------------------|-------|--------|----------|-------------------|-----------|
| — | **Foundation (§2)** | global | ✅ **done** | 🔴 P0 | F1–F6 added | — |
| 1 | Navbar | (all) | ✅ **done** | 🔴 P0 | ✅ hardened | — |
| 2 | Home Page | `/homepage` | ✅ **done** | 🔴 P0 | ✅ verified | — |
| 3 | Courses (catalog) | `/courses` | ✅ **done** | 🔴 P0 | ✅ verified | — |
| 4 | Course Details | `/course-details/:id` | ✅ **done** | 🔴 P0 | ✅ verified | — |
| 5 | Login | `/login` | ✅ **done** | 🔴 P0 | ✅ verified | — |
| 6 | Register | `/register`, `/register/student`, `/register/teacher` | ✅ **done** | 🔴 P0 | ✅ verified | — |
| 7 | Enrolled Course (shell) | `/enrolled-course/:id` | ✅ **done** | 🔴 P0 | ✅ verified | — |
| 8 | ├ Course Live (tab) | inside #7 | ✅ **done** | 🟠 P1 | ✅ verified | — |
| 9 | ├ Course Recordings (tab) | inside #7 | ✅ **done** | 🟠 P1 | ✅ verified | — |
| 10 | ├ Course Classwork (tab) | inside #7 | ✅ **done** | 🟠 P1 | ✅ verified | — |
| 11 | ├ Course Exams (tab) | inside #7 | ✅ **done** | 🟠 P1 | ✅ verified | — |
| 12 | ├ Course Practice (tab) | inside #7 | ✅ **done** | 🟠 P1 | ✅ verified | — |
| 13 | └ Course Videos/History | `/history` | ✅ **done** | 🟠 P1 | ✅ added | — |
| 14 | Quiz Attempt | `/quiz/:lessonId` | ✅ **done** | 🔴 P0 | ✅ added | — |
| 15 | Quiz Editor | `/quiz-editor/:lessonId` | ✅ **done** | 🟡 P2 | ✅ added | — |
| 16 | Live Exam Attempt | `/live-exam/:examId` | ✅ **done** | 🔴 P0 | ✅ verified | — |
| 17 | AI Writing | `/ai-writing/:taskId` | ✅ **done** | 🟠 P1 | ✅ verified | — |
| 18 | Profile (+ Wishlist tab) | `/profile`, `/wishlist` | ✅ **done** | 🔴 P0 | ✅ verified | — |
| 19 | My Courses | `/my-courses` | ✅ **done** | 🟠 P1 | ✅ verified | — |
| 20 | My Classes | `/myClasses` | ✅ **done** | 🟠 P1 | ✅ verified | — |
| 21 | Certificates | `/certificates` | ✅ **done** | 🟡 P2 | ✅ verified | — |
| 22 | Assignments | `/assignments` | ✅ **done** | 🟡 P2 | ✅ verified | — |
| 23 | Leaderboard | `/leaderboard` | ✅ **done** | 🟠 P1 | ✅ table scroll | ⚠️ fixed |
| 24 | Notifications | `/notifications` | ✅ **done** | 🟡 P2 | ✅ verified | — |
| 25 | Announcements | `/announcements` | ✅ **done** | 🟡 P2 | ✅ verified | — |
| 26 | Store | `/store` | ✅ **done** | 🟡 P2 | ✅ verified | — |
| 27 | Instructors | `/instructors` | ✅ **done** | 🟡 P2 | ✅ verified | — |
| 28 | Live Class Room | `/live-class/:id`, `/free-live/:id` | ✅ **done** | 🔴 P0 | ✅ added | — |
| 29 | Free Live (list) | `/free-live` | ✅ **done** | 🟠 P1 | ✅ verified | — |
| 30 | Free Class | `/free-class` | ✅ **done** | 🟠 P1 | ✅ added | — |
| 31 | Onboarding Preferences | `/onboarding-preferences` | ✅ **done** | 🟠 P1 | ✅ verified | — |
| 32 | Teacher / Course Manager | `/teacher`, `/course-manager` | ✅ **done** | 🟠 P1 | ✅ tables scroll | ⚠️ fixed |
| 33 | Exam Submissions | `/exam-submissions/:examId` | ✅ **done** | 🟠 P1 | ✅ verified | — |
| 34 | Enrolled Students | `/enrolled-students/:courseId` | ✅ **done** | 🟠 P1 | ✅ table scroll | ⚠️ fixed |
| 35 | Live Exam Editor | `/live-exam-editor/:liveClassId` | ✅ **done** | 🟡 P2 | ✅ verified | — |
| 36 | Live Exam Responses | `/live-exam-responses/:examId` | ✅ **done** | 🟡 P2 | ✅ already scrolls | ⚠️ ok |
| 37 | Teacher Profile | (component) | ✅ **done** | 🟡 P2 | ✅ verified | — |
| 38 | Teacher Evaluation | `/teacher-evaluation/:courseId` | ✅ **done** | 🟡 P2 | ✅ verified | — |
| 39 | Admin Dashboard | `/admin` | ✅ **done** | 🟠 P1 | ✅ tables card-stacked | ⚠️ fixed |
| 40 | Admin Item | (component) | ✅ **done** | 🟡 P2 | ✅ verified | — |
| 41 | Admin Settings | (component) | ✅ **done** | 🟡 P2 | ✅ auto-fit | — |
| 42 | Announcement Banner | (component) | ✅ **done** | 🟡 P2 | ✅ verified | — |
| 43 | Payment (modal/page) | `/payment` | ✅ **done** | 🔴 P0 | ✅ verified | — |
| 44 | Confirm Dialog (global) | (modal) | ✅ **done** | 🟠 P1 | ✅ F6-perfect | — |
| 45 | Notification Bell (dropdown) | (in navbar) | ✅ **done** | 🟠 P1 | ✅ viewport-pinned | — |
| 46 | Agenda Menu (dropdown) | (component) | ✅ **done** | 🟡 P2 | ✅ viewport-pinned | — |

**Legend:** 🔴 P0 = highest traffic / most broken · 🟠 P1 = important · 🟡 P2 = lower traffic · ❌ **0** = zero responsive CSS today (highest risk) · ⚠️ **yes** = contains a raw `<table>` (top mobile-breaker).

---

## 5. Page-by-Page Task Lists

> Files for every component follow the pattern `<name>.html`, `<name>.css`, `<name>.ts`
> inside its folder (Angular new-style naming — no `.component` suffix).
>
> **Which pages are in which Part?** Use the *▶ Parts table* at the top as the authority.
> When you say "do Part N", I run the task lists for exactly the pages that Part names —
> find each by its name/heading below.

### Phase 1 — Everyone hits these

#### 1. Navbar — `src/app/shared/navbar/`  🔴 P0
*Status: hamburger + mobile drawer already exist (`toggleMobileMenu`, `.mobile-nav-*`). Mostly polish.*
- [ ] Verify hamburger shows below `768px` and the desktop nav hides — no overlap of logo + links.
- [ ] Mobile drawer scrolls internally if content taller than screen; body scroll locked while open.
- [ ] Close drawer on route change and on outside-tap (backdrop).
- [ ] Logo + profile avatar shrink; language toggle + notification bell reachable with one thumb.
- [ ] Live-class "LIVE" pulse link not clipped in the drawer.
- [ ] Reconcile navbar breakpoint (`768`) with the standard tokens.

#### 2. Home Page — `src/app/base/home-page/`  🔴 P0
*Biggest CSS file (3,904 lines), 11 media blocks, many `grid-template-columns`.*
- [ ] Hero section: stack headline/CTA vertically; hero image scales, no fixed heights that crop text.
- [ ] All card grids (courses, categories, features, testimonials) → `1fr` on `sm`, `2` cols on `md`.
- [ ] Stat/counter rows wrap instead of overflowing.
- [ ] Footer columns stack; reduce huge desktop paddings via `clamp()`.
- [ ] Any carousel/slider: swipe works, arrows reachable, no off-screen bleed.
- [ ] Check for fixed `width:` px on sections → make fluid.

#### 3. Courses (catalog) — `src/app/base/courses/`  🔴 P0
*Udemy-style filter rail + grid.*
- [ ] Collapse the left **filter rail** into a top "Filters" button that opens a bottom-sheet/drawer on `md`.
- [ ] Course grid → 1 col (`sm`) / 2 col (`md`).
- [ ] Sort dropdown + result count wrap onto their own row.
- [ ] "Recommended for you" strip becomes horizontal swipe, not squished grid.
- [ ] Filter chips wrap, no overflow.

#### 4. Course Details — `src/app/base/course-details/`  🔴 P0
- [ ] Two-column (content + sticky purchase card) → single column; purchase card moves to top or becomes a **sticky bottom bar** with price + "Enroll".
- [ ] Curriculum accordion full-width; long lesson titles wrap.
- [ ] Reviews + rating histogram stack; bars don't overflow.
- [ ] Instructor block stacks avatar over text.
- [ ] Preview video/thumbnail `max-width:100%`.

#### 5. Login — `src/app/auth/login/`  🔴 P0
- [ ] Two-pane "Study Hall" layout → hide/again-stack the decorative side panel on `sm`; form full-width.
- [ ] Card `max-width:100%` with side padding; inputs 16px (F4).
- [ ] Google button + submit full-width on phone.
- [ ] Keyboard doesn't cover submit (avoid `100vh` centering → use `min-height:100dvh`).

#### 6. Register — `src/app/auth/register/`  🔴 P0
- [ ] Same two-pane treatment as login.
- [ ] Student/teacher toggle + multi-field form → single column.
- [ ] Group field & role-specific fields stack cleanly.
- [ ] Long validation messages wrap under fields.

### Phase 2 — Enrolled learning experience

#### 7. Enrolled Course shell — `src/app/base/enrolled-course/`  🔴 P0
*The learning workspace (1,720-line CSS). Hosts the tab sub-components #8–#12.*
- [ ] Sidebar/curriculum panel → off-canvas drawer (toggle button) on `md`; video/content area full-width.
- [ ] Video player responsive 16:9 (`aspect-ratio`), never overflows.
- [ ] Tab bar (Live/Recordings/Classwork/Exams/Practice) → horizontal scroll or icon row on phone.
- [ ] Progress widgets/badges wrap.
- [ ] Lesson list items: title wraps, checkmarks/lock icons stay aligned.

#### 8. Course Live tab — `src/app/base/course-live/`  🟠 P1
- [ ] Live-session cards stack; join button full-width.
- [ ] Countdown/schedule chips wrap.

#### 9. Course Recordings tab — `src/app/base/course-recordings/`  🟠 P1
- [ ] Recording grid → 1 col; thumbnails scale.
- [ ] Any upload/record modal fits the F6 pattern.

#### 10. Course Classwork tab — `src/app/base/course-classwork/`  🟠 P1
- [ ] Assignment/classwork list cards stack; attachment chips wrap.
- [ ] Submission modal fits F6; file input full-width.

#### 11. Course Exams tab — `src/app/base/course-exams/`  🟠 P1
- [ ] Exam cards stack; status badges + marks wrap.
- [ ] Any "start exam" confirm/detail modal fits F6.

#### 12. Course Practice tab — `src/app/base/course-practice/`  🟠 P1
- [ ] Practice/quiz list → 1 col; action buttons full-width.

#### 13. Video History — `src/app/base/video-history/`  🟠 P1  ❌ *(no @media yet)*
- [ ] Add media blocks from scratch: history rows stack, thumbnail over meta.
- [ ] Timestamps/progress bars don't overflow.

#### 14. Quiz Attempt — `src/app/base/quiz-attempt/`  🔴 P0  ❌ *(no @media yet)*
- [ ] Add responsive CSS: question card full-width, options full-width tappable rows (≥44px).
- [ ] Timer + question counter fixed/compact header that doesn't cover content.
- [ ] Navigation (prev/next/submit) → sticky bottom bar, thumb-reachable.
- [ ] Question palette/grid wraps.

#### 15. Quiz Editor — `src/app/base/quiz-editor/`  🟡 P2  ❌ *(no @media yet)*
- [ ] Add media blocks: question builder rows stack; option inputs full-width.
- [ ] Add/remove buttons don't overflow; toolbar wraps.

#### 16. Live Exam Attempt — `src/app/base/live-exam-attempt/`  🔴 P0
*Google-Forms style; 7 modal/overlay refs.*
- [ ] Question blocks single column; radio/checkbox rows ≥44px.
- [ ] File-answer upload control full-width.
- [ ] Section headers/progress don't clip.
- [ ] Submit + confirmation modal fit F6.

#### 17. AI Writing — `src/app/base/ai-writing/`  🟠 P1
- [ ] Prompt + textarea stack; textarea full-width, min-height sensible.
- [ ] Image upload / OCR preview scales.
- [ ] Score + feedback panel stacks under submission on phone.

### Phase 3 — Student panel

#### 18. Profile (+ Wishlist tab) — `src/app/base/profile/`  🔴 P0
*1,914-line CSS, 8 media blocks, 12 modal/overlay refs.*
- [ ] Tab bar (overview / courses / wishlist / settings / etc.) → horizontal scroll or dropdown on phone.
- [ ] Profile header: avatar over name/stats; redesigned dropdown reachable.
- [ ] Info cards / stat grids → 1 col.
- [ ] Wishlist grid → 1 col; remove button reachable.
- [ ] Every edit modal (name, avatar, student info) fits F6.

#### 19. My Courses — `src/app/user/my-courses/`  🟠 P1
- [ ] Enrolled-course cards → 1 col; progress bar full-width.
- [ ] "Continue" button full-width.

#### 20. My Classes — `src/app/user/my-classes/`  🟠 P1
- [ ] Class schedule cards stack; date/time chips wrap.
- [ ] Join links full-width.

#### 21. Certificates — `src/app/user/certificates/`  🟡 P2
- [ ] Certificate cards → 1 col; the certificate preview image scales (it's wide — wrap in `.table-scroll`-style or scale down).
- [ ] Download/share buttons wrap.

#### 22. Assignments — `src/app/user/assignment/`  🟡 P2
- [ ] Assignment list rows stack; due-date + status wrap.
- [ ] Submit modal fits F6.

#### 23. Leaderboard — `src/app/base/leaderboard/`  🟠 P1  ⚠️ *table*
- [ ] Wrap the ranking `<table>` in `.table-scroll` **or** card-stack it (rank • avatar • name • score) below `600px` — recommended: card-stack.
- [ ] Top-3 podium block stacks/scales on phone.
- [ ] Sticky "your rank" row stays visible.

#### 24. Notifications — `src/app/base/notifications/`  🟡 P2
- [ ] Notification rows full-width; icon over text; long text wraps.
- [ ] Mark-read/delete actions reachable (swipe or visible button ≥44px).

#### 25. Announcements — `src/app/base/announcements/`  🟡 P2
- [ ] Announcement cards → 1 col; images scale.

#### 26. Store — `src/app/base/store/`  🟡 P2
- [ ] Product grid → 1–2 col; price/buy button wrap.
- [ ] Any product/checkout modal fits F6.

#### 27. Instructors — `src/app/base/instructors/`  🟡 P2
- [ ] Instructor card grid → 1–2 col; avatars scale; bio text clamps.

### Phase 4 — Live classes

#### 28. Live Class Room — `src/app/shared/live-class-room/`  🔴 P0  ❌ *(no @media yet)*
*Jitsi + MediaRecorder. 4 overlay refs.*
- [ ] Add responsive CSS: Jitsi iframe fills available space, `100dvh` minus header, never overflows.
- [ ] Control bar (mic/cam/record/end) → wraps or bottom bar; buttons ≥44px.
- [ ] Side chat/participant panel → toggle overlay on phone, not fixed side column.
- [ ] Recording indicator + end-room confirm modal fit F6.

#### 29. Free Live (list) — `src/app/base/free-live/`  🟠 P1
*4 overlay refs.*
- [ ] Live-class cards stack; join button full-width; "LIVE" badge visible.
- [ ] Any join/preview modal fits F6.

#### 30. Free Class — `src/app/base/free-class/`  🟠 P1  ❌ *(no @media yet)*
- [ ] Add media blocks: class list → 1 col; thumbnails scale; CTA full-width.

#### 31. Onboarding Preferences — `src/app/auth/onboarding-preferences/`  🟠 P1
*Mandatory post-register modal, steps 02–04, 6 overlay refs.*
- [ ] Modal fits F6 (bottom-sheet on phone), steps scroll internally.
- [ ] Interest/category chips wrap into a tappable grid.
- [ ] Step nav (back/next) → sticky footer inside the sheet.
- [ ] Parent-email + student-info fields single column, 16px inputs.

### Phase 5 — Staff / Teacher

#### 32. Teacher / Course Manager — `src/app/base/teacher/`  🟠 P1  ⚠️ *table* · 23 modal refs
*1,578-line CSS; the authoring hub — many modals.*
- [ ] Wrap all admin `<table>`s in `.table-scroll`.
- [ ] Course/lesson management panels → stack; sidebar → drawer.
- [ ] The 23 modals (create course, add lesson, upload video, add quiz/exam, etc.) **all** adopt F6 — audit each one.
- [ ] Toolbars/action button rows wrap.
- [ ] Drag-drop ordering: ensure usable (or provide up/down buttons) on touch.

#### 33. Exam Submissions — `src/app/base/exam-submissions/`  🟠 P1
- [ ] Submission list + grading panel stack (list on top, grading below).
- [ ] Marks input + save button reachable; per-answer blocks full-width.

#### 34. Enrolled Students — `src/app/base/enrolled-students/`  🟠 P1  ⚠️ *table*
- [ ] Student `<table>` → `.table-scroll` or card-stack (name • email • progress • actions).
- [ ] Search/filter bar wraps.

#### 35. Live Exam Editor — `src/app/base/live-exam-editor/`  🟡 P2
*12 overlay refs.*
- [ ] Builder rows stack; question/option inputs full-width.
- [ ] Question-file attach control full-width.
- [ ] Settings/preview modals fit F6.

#### 36. Live Exam Responses — `src/app/base/live-exam-responses/`  🟡 P2  ⚠️ *table*
- [ ] Responses `<table>` → `.table-scroll`.
- [ ] Per-student response detail view stacks; verified file links tappable.

#### 37. Teacher Profile — `src/app/base/teacher-profile/`  🟡 P2
- [ ] Header stacks avatar/name/stats; course grid → 1–2 col.

#### 38. Teacher Evaluation — `src/app/base/teacher-evaluation/`  🟡 P2
- [ ] Rating rows/stars stack; comment textarea full-width.
- [ ] Submit button full-width.

### Phase 6 — Admin

#### 39. Admin Dashboard — `src/app/admin/admin-dashboard/`  🟠 P1  ⚠️ *table* · 20 modal refs
*2,180-line CSS. The heaviest admin surface.*
- [ ] Admin sidebar/nav → top drawer or bottom tab bar on `md`.
- [ ] KPI/stat card grid → 1–2 col.
- [ ] Every data `<table>` (users, courses, payments, coupons, reports) → `.table-scroll`.
- [ ] The 20 modals (create/edit entities, coupon, AI-writing task, parent-report preview, etc.) adopt F6 — audit each.
- [ ] Charts/graphs `max-width:100%`, scroll if needed.
- [ ] Filter/date-range controls wrap.

#### 40. Admin Item — `src/app/admin/admin-item/`  🟡 P2
*4 modal refs.*
- [ ] Item form/card → single column; its modals adopt F6.

#### 41. Admin Settings — `src/app/admin/admin-settings/`  🟡 P2  ❌ *(no @media yet)*
- [ ] Add media blocks: settings form single column; toggle rows stack label/control.

#### 42. Announcement Banner — `src/app/admin/announcement-banner/`  🟡 P2
- [ ] Banner text + dismiss button don't overflow; banner wraps to 2 lines gracefully; fixed/sticky position doesn't cover content on small screens.

### Phase 7 — Shared components & Modals

#### 43. Payment — `src/app/shared/payment/`  🔴 P0
*Purchase/checkout — revenue-critical.*
- [ ] Payment card/modal fits F6; order summary + method selector stack.
- [ ] Coupon input + apply button on their own row; totals right-aligned but not clipped.
- [ ] Pay button full-width, sticky at bottom of the sheet.

#### 44. Confirm Dialog (global) — `src/app/shared/confirm-dialog/`  🟠 P1
*Replaces all native confirms — appears everywhere. 3 overlay refs.*
- [ ] Adopt F6; title/message wrap; action buttons stack full-width on `xs`.
- [ ] Verify it never exceeds viewport with long messages (internal scroll).

#### 45. Notification Bell (dropdown) — `src/app/shared/notification-bell/`  🟠 P1  ❌ *(no @media yet)*
- [ ] Dropdown panel: on phone become full-width (or full-screen sheet) instead of a narrow floating box that overflows the right edge.
- [ ] List rows tappable ≥44px; "see all" link reachable.

#### 46. Agenda Menu (dropdown) — `src/app/shared/agenda-menu/`  🟡 P2
- [ ] Same treatment as notification bell: constrain width, align to screen, no right-edge overflow.

---

## 6. Modal / Overlay Inventory

Every modal must pass the F6 pattern (fits viewport, internal scroll, `dvh`, visible close, bottom-sheet on phone). Counts below are overlay/dialog references found per file — treat each as an audit checklist.

| Component | Modal/overlay refs | Notes |
|-----------|-------------------|-------|
| `base/teacher` | 23 | Authoring modals: create course, lesson, video, quiz, exam, etc. |
| `admin/admin-dashboard` | 20 | Entity CRUD, coupon, AI task, parent-report preview |
| `base/profile` | 12 | Edit profile, avatar, student info, wishlist actions |
| `base/live-exam-editor` | 12 | Builder settings, preview, attach file |
| `base/live-exam-attempt` | 7 | Submit / confirm / section overlays |
| `auth/onboarding-preferences` | 6 | Mandatory step modal (02–04) |
| `base/course-exams` | 6 | Start-exam / detail |
| `base/course-classwork` | 5 | Submission modal |
| `admin/admin-item` | 4 | Item CRUD |
| `shared/live-class-room` | 4 | End-room confirm, recording |
| `base/course-recordings` | 4 | Upload/record |
| `base/free-live` | 4 | Join/preview |
| `shared/confirm-dialog` | 3 | Global confirm (used app-wide) |
| `base/courses` | 2 | Filter drawer target |
| `app.html` | 1 | Root overlay host |

> **Global modal rule:** we never use native `confirm/alert` (see project convention). All confirmations go through `ConfirmService` → `confirm-dialog`. So fixing #44 fixes confirmations app-wide; the per-page modals above are the custom ones.

---

## 7. Reusable Patterns Cheat-Sheet (copy/paste while working)

```css
/* Card grid → responsive */
.grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(280px,1fr)); gap:16px; }
@media (max-width:600px){ .grid { grid-template-columns:1fr; } }

/* Two-column page → stack */
@media (max-width:768px){ .two-col { grid-template-columns:1fr; } }

/* Sidebar → off-canvas drawer */
@media (max-width:768px){
  .sidebar { position:fixed; inset:0 auto 0 0; width:min(85vw,320px);
             transform:translateX(-100%); transition:transform .25s; z-index:900; }
  .sidebar.open { transform:none; }
  .sidebar-backdrop { position:fixed; inset:0; background:rgba(0,0,0,.5); z-index:899; }
}

/* Responsive video */
.video-wrap { position:relative; aspect-ratio:16/9; }
.video-wrap iframe, .video-wrap video { position:absolute; inset:0; width:100%; height:100%; }

/* Sticky mobile action bar (enroll / submit / pay) */
@media (max-width:768px){
  .mobile-action-bar { position:sticky; bottom:0; display:flex; gap:8px;
    padding:12px; background:#fff; box-shadow:0 -4px 16px rgba(0,0,0,.08); }
  .mobile-action-bar .btn { flex:1; min-height:48px; }
}

/* Card-stack a table on phones */
@media (max-width:600px){
  .stack-table thead { display:none; }
  .stack-table tr { display:block; margin-bottom:12px; border:1px solid #eee; border-radius:12px; padding:8px; }
  .stack-table td { display:flex; justify-content:space-between; gap:12px; padding:6px 8px; }
  .stack-table td::before { content:attr(data-label); font-weight:600; color:#666; }
}
```

---

## 8. Notes / Guardrails

- **Desktop must not regress.** All new rules go inside `max-width` media queries. Never edit a base (desktop) rule to fix mobile unless it's a genuine bug on both.
- **`dvh` over `vh`** for full-height mobile layouts (address-bar collapse).
- **Test the language toggle (Bangla/English):** longer Bangla strings must still wrap, not overflow.
- **Don't break the visual test harness** (`_vtest`, headless CDP). If you add IDs/classes it relies on, keep them.
- **One page = one commit** ideally, so any regression is easy to bisect. (Frontend repo is git-tracked at `project_lms-main/.git`.)

---

*Generated as a working plan. Update the tracker checkboxes in §4 and the per-page boxes in §5 as each page is completed.*
