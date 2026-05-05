import { Injectable, signal, computed } from '@angular/core';

export type Language = 'en' | 'bn';

export interface Translations {
  // Navbar
  navTracks: string; navCourses: string; navVision: string; navLogin: string;
  navGetStarted: string; navLogout: string; navProfile: string; navTeacher: string; navHi: string;
  // Hero
  heroEyebrow: string; heroH1Part1: string; heroH1Accent: string; heroH1Part2: string;
  heroLead: string; heroExplore: string; heroWhyUs: string;
  // Stats
  statLessons: string; statLearners: string; statSubmissions: string;
  // Showcase
  showcaseBadge: string; showcaseLabel: string; showcaseH2: string; showcaseDesc: string;
  showcaseChip1: string; showcaseChip2: string; showcaseChip3: string; showcaseChip4: string;
  // Section
  sectionPrograms: string; sectionH2Line1: string; sectionH2Line2: string; sectionDesc: string;
  // Courses
  coursesLoading: string; coursesLoadingDesc: string; coursesNone: string; coursesNoneDesc: string;
  coursesNoMatch: string; coursesNoMatchDesc: string; coursesAllTitle: string;
  coursesSearchHint: string; coursesSearchLabel: string; coursesSearchPlaceholder: string; coursesBackHome: string;
  courseCategory: string; courseInstructor: string; courseLessons: string; courseDuration: string;
  coursePrice: string; courseSeeMore: string; courseEnrolled: string; courseEnrollNow: string;
  courseStartLearning: string; courseDurationUnit: string;
  // Features
  feature1Title: string; feature1Desc: string; feature2Title: string; feature2Desc: string; feature3Title: string; feature3Desc: string;
  // Quote
  quoteLabel: string; quoteText: string; quoteFooter1: string; quoteFooter2: string;
  // Levels
  levelBeginner: string; levelIntermediate: string; levelAdvanced: string;
  // Course Details
  cdBack: string; cdLoading: string; cdLoadingDesc: string; cdUnavailable: string;
  cdGoBack: string; cdOverview: string; cdInstructor: string; cdDescription: string;
  cdNote: string; cdNoteText: string; cdSeeLess: string; cdSeeMore: string;
  cdCoupon: string; cdCheckingEnrollment: string; cdEnrolled: string; cdEnrollNow: string;
  cdLoginToEnroll: string; cdCategory: string; cdLevel: string; cdLessonsCount: string;
  cdDuration: string; cdStatus: string; cdPublished: string; cdDraft: string;
  // Enrolled Course
  ecBack: string; ecNoLesson: string; ecLessons: string; ecInstructor: string;
  // Profile
  profileRole: string; profileDashboard: string; profileWeekly: string; profileLive: string;
  profileCompletion: string; profileCompleted: string; profileRemaining: string;
  profileAssessments: string; profileCodingTime: string; profileStreak: string; profileDays: string;
  profileActivity: string; profileActivityDesc: string; profileMyClasses: string;
  profileMyCourses: string; profileAssignments: string; profileCertificates: string;
  // Login
  loginEyebrow: string; loginTitle: string; loginLead: string; loginSecure: string; loginMode: string;
  loginF1Title: string; loginF1Desc: string; loginF2Title: string; loginF2Desc: string; loginF3Title: string; loginF3Desc: string;
  loginEmail: string; loginEmailError: string; loginPassword: string; loginPasswordError: string;
  loginRemember: string; loginForgot: string; loginLoggingIn: string; loginBtn: string;
  loginNoAccount: string; loginCreateOne: string; loginRedirecting: string;
  // Register
  registerEyebrow: string; registerTitle: string; registerLead: string; registerNewLearner: string;
  registerStartStrong: string; registerF1Title: string; registerF1Desc: string;
  registerF2Title: string; registerF2Desc: string; registerF3Title: string; registerF3Desc: string;
  registerFullName: string; registerFullNamePlaceholder: string; registerFullNameError: string;
  registerRole: string; registerRolePlaceholder: string; registerStudent: string; registerTeacher: string; registerRoleError: string;
  registerPasswordPlaceholder: string; registerConfirmPassword: string; registerRepeatPassword: string; registerConfirmPasswordError: string;
  registerTerms: string; registerSubmitting: string; registerBtn: string;
  registerHaveAccount: string; registerLoginHere: string; registerGoHome: string;
  // Leaderboard
  lbTitle: string; lbSubtitle: string; lbLoading: string; lbEmpty: string;
  lbTableRank: string; lbTableStudent: string; lbTableCorrect: string; lbTableTotal: string; lbTableScore: string;
  lbRanked: string; lbOutOf: string; lbStudents: string; lbYourScore: string;
}

const EN: Translations = {
  navTracks: 'Tracks', navCourses: 'Courses', navVision: 'Vision', navLogin: 'Login',
  navGetStarted: 'Get started', navLogout: 'Logout', navProfile: 'Profile', navTeacher: 'Instructor', navHi: 'Hi,',
  heroEyebrow: 'Trusted learning ecosystem', heroH1Part1: 'Learn in-demand', heroH1Accent: 'skills', heroH1Part2: 'with structured paths.',
  heroLead: 'Grow from fundamentals to advanced implementation through mentor-guided modules and hands-on labs designed for real-world outcomes.',
  heroExplore: 'Explore programs', heroWhyUs: 'Why choose us',
  statLessons: 'Structured lessons', statLearners: 'Active learners', statSubmissions: 'Practice submissions',
  showcaseBadge: 'Education Spotlight', showcaseLabel: 'Future ready learning', showcaseH2: 'Explore a visual learning journey',
  showcaseDesc: 'From structured lessons to project-based milestones, the platform is designed to keep every learner focused, active, and progressing.',
  showcaseChip1: 'Live classes', showcaseChip2: 'Mentor support', showcaseChip3: 'Project labs', showcaseChip4: 'Career paths',
  sectionPrograms: 'Programs', sectionH2Line1: 'Career-focused learning paths', sectionH2Line2: 'for every stage',
  sectionDesc: 'Choose a pathway based on your current level and progress with curated lessons, challenges, and project-based milestones.',
  coursesLoading: 'Courses loading...', coursesLoadingDesc: 'Please wait, courses are loading.',
  coursesNone: 'No course available', coursesNoneDesc: 'No courses have been published yet. Check back later.',
  coursesNoMatch: 'No matching course found', coursesNoMatchDesc: 'No course matched your search term.',
  coursesAllTitle: 'All Courses', coursesSearchHint: 'Search by title, category, instructor, level, or description.',
  coursesSearchLabel: 'Search courses', coursesSearchPlaceholder: 'Type a course name, category, or instructor...',
  coursesBackHome: 'Back To Home',
  courseCategory: 'Category:', courseInstructor: 'Instructor:', courseLessons: 'Lessons:',
  courseDuration: 'Duration:', coursePrice: 'Price:', courseSeeMore: 'See more',
  courseEnrolled: 'Enrolled', courseEnrollNow: 'Enroll Now', courseStartLearning: 'Start learning', courseDurationUnit: 'min',
  feature1Title: 'Outcome-based curriculum', feature1Desc: 'Follow role-focused modules designed around practical, job-ready outcomes.',
  feature2Title: 'Progress and performance analytics', feature2Desc: 'Track completion, assessment scores, and learning consistency in one dashboard.',
  feature3Title: 'Mentor-guided growth', feature3Desc: 'Get structured feedback and guidance to accelerate your learning path.',
  quoteLabel: 'Our commitment', quoteText: 'Every learner deserves a clear roadmap, measurable progress, and practical skills that translate directly into real opportunities.',
  quoteFooter1: 'Industry-ready curriculum', quoteFooter2: 'Project-first learning model',
  levelBeginner: 'Beginner', levelIntermediate: 'Intermediate', levelAdvanced: 'Advanced',
  cdBack: '← Back to Courses', cdLoading: 'Loading course details...', cdLoadingDesc: 'Please wait.',
  cdUnavailable: 'Course details unavailable', cdGoBack: 'Go back to courses', cdOverview: 'Overview',
  cdInstructor: 'Course Instructor', cdDescription: 'Course Description', cdNote: 'Note',
  cdNoteText: 'Video lessons are now available for this course.', cdSeeLess: 'See less', cdSeeMore: 'See more',
  cdCoupon: 'Have Coupon Code?', cdCheckingEnrollment: 'Checking enrollment...', cdEnrolled: 'You are enrolled in this course',
  cdEnrollNow: 'Enroll Now', cdLoginToEnroll: 'Login to Enroll', cdCategory: 'Category', cdLevel: 'Level',
  cdLessonsCount: 'Lessons', cdDuration: 'Duration', cdStatus: 'Status', cdPublished: 'Published', cdDraft: 'Draft',
  ecBack: '← Back to Course', ecNoLesson: 'No lesson selected', ecLessons: 'Lessons', ecInstructor: 'Instructor',
  profileRole: 'Role', profileDashboard: 'Student dashboard', profileWeekly: 'Weekly performance', profileLive: 'Live',
  profileCompletion: 'completion', profileCompleted: 'Completed', profileRemaining: 'Remaining',
  profileAssessments: 'Angular assessments', profileCodingTime: 'Coding time this week',
  profileStreak: 'Consistency streak', profileDays: 'days',
  profileActivity: 'Activity', profileActivityDesc: 'These options will be activated in future updates.',
  profileMyClasses: 'My Classes', profileMyCourses: 'My Courses', profileAssignments: 'Assignments', profileCertificates: 'Certificates',
  loginEyebrow: 'Welcome back', loginTitle: 'Login to continue your learning journey.',
  loginLead: 'Access your lessons, progress dashboard, and skill streaks from one focused workspace.',
  loginSecure: 'Secure access', loginMode: 'Black-blue learning mode',
  loginF1Title: 'Fast resume', loginF1Desc: 'Jump back into your saved course path instantly.',
  loginF2Title: 'Progress sync', loginF2Desc: 'Keep streaks, scores, and milestones in one place.',
  loginF3Title: 'Clean focus', loginF3Desc: 'Dark interface with sharp blue accents for low distraction.',
  loginEmail: 'Email address', loginEmailError: 'Enter a valid email address.',
  loginPassword: 'Password', loginPasswordError: 'Password must be at least 6 characters.',
  loginRemember: 'Remember me', loginForgot: 'Forgot password?', loginLoggingIn: 'Logging in...', loginBtn: 'Login now',
  loginNoAccount: "Don't have an account?", loginCreateOne: 'Create one', loginRedirecting: 'Logging in and launching your home page...',
  registerEyebrow: 'Create account', registerTitle: 'Join the learning platform.',
  registerLead: 'Set up your profile to track lessons, practice streaks, and progress inside the same dark blue workspace.',
  registerNewLearner: 'New learner', registerStartStrong: 'Start strong from day one',
  registerF1Title: 'Personal dashboard', registerF1Desc: 'Get a clean progress view for every learning path you join.',
  registerF2Title: 'Structured onboarding', registerF2Desc: 'Move into a guided setup flow with a focused interface.',
  registerF3Title: 'Black-blue identity', registerF3Desc: 'Consistent with the home and login pages, visually and functionally.',
  registerFullName: 'Full name', registerFullNamePlaceholder: 'Your name', registerFullNameError: 'Enter your full name.',
  registerRole: 'Select role', registerRolePlaceholder: 'Select one', registerStudent: 'Student', registerTeacher: 'Teacher', registerRoleError: 'Please select Student or Teacher.',
  registerPasswordPlaceholder: 'Create a password', registerConfirmPassword: 'Confirm password', registerRepeatPassword: 'Repeat password', registerConfirmPasswordError: 'Confirm your password.',
  registerTerms: 'I agree to the learning platform terms.', registerSubmitting: 'Submitting...', registerBtn: 'Create account',
  registerHaveAccount: "Don't have an account?", registerLoginHere: 'Create one', registerGoHome: 'Go Home',
  lbTitle: 'Top Performers', lbSubtitle: 'Best students based on quiz scores',
  lbLoading: 'Loading rankings...', lbEmpty: 'No quiz attempts yet',
  lbTableRank: 'Rank', lbTableStudent: 'Student', lbTableCorrect: 'Correct',
  lbTableTotal: 'Total Q', lbTableScore: 'Score',
  lbRanked: 'You are ranked', lbOutOf: 'out of', lbStudents: 'students', lbYourScore: 'Your score:',
};

const BN: Translations = {
  navTracks: 'ট্র্যাকস', navCourses: 'কোর্সসমূহ', navVision: 'আমাদের লক্ষ্য', navLogin: 'লগইন',
  navGetStarted: 'শুরু করুন', navLogout: 'লগআউট', navProfile: 'প্রোফাইল', navTeacher: 'শিক্ষক', navHi: 'হ্যালো,',
  heroEyebrow: 'বিশ্বস্ত শিক্ষা প্ল্যাটফর্ম', heroH1Part1: 'চাহিদাসম্পন্ন', heroH1Accent: 'দক্ষতা', heroH1Part2: 'শিখুন কাঠামোবদ্ধ পথে।',
  heroLead: 'মেন্টর-গাইডেড মডিউল ও হ্যান্ডস-অন ল্যাবের মাধ্যমে বেসিক থেকে অ্যাডভান্সড পর্যন্ত শিখুন।',
  heroExplore: 'প্রোগ্রাম দেখুন', heroWhyUs: 'কেন আমাদের বেছে নেবেন',
  statLessons: 'কাঠামোবদ্ধ পাঠ', statLearners: 'সক্রিয় শিক্ষার্থী', statSubmissions: 'অনুশীলন জমা',
  showcaseBadge: 'শিক্ষা হাইলাইট', showcaseLabel: 'ভবিষ্যতের জন্য প্রস্তুত', showcaseH2: 'ভিজ্যুয়াল লার্নিং জার্নি অন্বেষণ করুন',
  showcaseDesc: 'কাঠামোবদ্ধ পাঠ থেকে প্রজেক্ট-ভিত্তিক মাইলস্টোন পর্যন্ত, প্ল্যাটফর্মটি প্রতিটি শিক্ষার্থীকে মনোযোগী রাখতে ডিজাইন করা হয়েছে।',
  showcaseChip1: 'লাইভ ক্লাস', showcaseChip2: 'মেন্টর সাপোর্ট', showcaseChip3: 'প্রজেক্ট ল্যাব', showcaseChip4: 'ক্যারিয়ার পথ',
  sectionPrograms: 'প্রোগ্রামসমূহ', sectionH2Line1: 'ক্যারিয়ার-কেন্দ্রিক শিক্ষার পথ', sectionH2Line2: 'প্রতিটি স্তরের জন্য',
  sectionDesc: 'আপনার বর্তমান স্তর অনুযায়ী পথ বেছে নিন এবং কিউরেটেড পাঠ ও প্রজেক্ট-ভিত্তিক মাইলস্টোন দিয়ে এগিয়ে যান।',
  coursesLoading: 'কোর্স লোড হচ্ছে...', coursesLoadingDesc: 'দয়া করে একটু অপেক্ষা করুন।',
  coursesNone: 'কোনো কোর্স পাওয়া যায়নি', coursesNoneDesc: 'এখনও কোনো কোর্স publish করা হয়নি। পরে আবার চেক করুন।',
  coursesNoMatch: 'কোনো মিলে যাওয়া কোর্স পাওয়া যায়নি', coursesNoMatchDesc: 'আপনার সার্চের সাথে মিলে এমন কোনো কোর্স নেই।',
  coursesAllTitle: 'সকল কোর্স', coursesSearchHint: 'শিরোনাম, বিষয়, প্রশিক্ষক, স্তর বা বিবরণ দিয়ে খুঁজুন।',
  coursesSearchLabel: 'কোর্স খুঁজুন', coursesSearchPlaceholder: 'কোর্সের নাম, বিষয় বা প্রশিক্ষক লিখুন...',
  coursesBackHome: 'হোমে ফিরুন',
  courseCategory: 'বিষয়:', courseInstructor: 'প্রশিক্ষক:', courseLessons: 'পাঠ:',
  courseDuration: 'সময়কাল:', coursePrice: 'মূল্য:', courseSeeMore: 'আরো দেখুন',
  courseEnrolled: 'ভর্তি হয়েছেন', courseEnrollNow: 'এখনই ভর্তি হন', courseStartLearning: 'শেখা শুরু করুন', courseDurationUnit: 'মিনিট',
  feature1Title: 'ফলাফল-ভিত্তিক পাঠ্যক্রম', feature1Desc: 'বাস্তব, চাকরি-উপযোগী ফলাফলের উপর ভিত্তি করে রোল-কেন্দ্রিক মডিউল অনুসরণ করুন।',
  feature2Title: 'অগ্রগতি ও কর্মক্ষমতা বিশ্লেষণ', feature2Desc: 'একটি ড্যাশবোর্ডে সম্পন্নতা, মূল্যায়ন স্কোর ট্র্যাক করুন।',
  feature3Title: 'মেন্টর-গাইডেড বিকাশ', feature3Desc: 'আপনার শিক্ষার পথ ত্বরান্বিত করতে কাঠামোবদ্ধ গাইডেন্স পান।',
  quoteLabel: 'আমাদের প্রতিশ্রুতি', quoteText: 'প্রতিটি শিক্ষার্থী একটি স্পষ্ট রোডম্যাপ ও বাস্তব দক্ষতা পাওয়ার অধিকারী।',
  quoteFooter1: 'শিল্প-উপযোগী পাঠ্যক্রম', quoteFooter2: 'প্রজেক্ট-ফার্স্ট শিক্ষা মডেল',
  levelBeginner: 'শিক্ষার্থী', levelIntermediate: 'মধ্যবর্তী', levelAdvanced: 'উন্নত',
  cdBack: '← কোর্সে ফিরুন', cdLoading: 'কোর্স লোড হচ্ছে...', cdLoadingDesc: 'দয়া করে অপেক্ষা করুন।',
  cdUnavailable: 'কোর্সের তথ্য পাওয়া যায়নি', cdGoBack: 'কোর্সে ফিরে যান', cdOverview: 'সংক্ষিপ্ত বিবরণ',
  cdInstructor: 'কোর্স প্রশিক্ষক', cdDescription: 'কোর্সের বিবরণ', cdNote: 'নোট',
  cdNoteText: 'এই কোর্সের ভিডিও লেসন এখন উপলব্ধ।', cdSeeLess: 'কম দেখুন', cdSeeMore: 'আরো দেখুন',
  cdCoupon: 'কুপন কোড আছে?', cdCheckingEnrollment: 'এনরোলমেন্ট চেক হচ্ছে...', cdEnrolled: 'আপনি এই কোর্সে ভর্তি আছেন',
  cdEnrollNow: 'এখনই ভর্তি হন', cdLoginToEnroll: 'ভর্তি হতে লগইন করুন', cdCategory: 'বিষয়', cdLevel: 'স্তর',
  cdLessonsCount: 'পাঠ', cdDuration: 'সময়কাল', cdStatus: 'অবস্থা', cdPublished: 'প্রকাশিত', cdDraft: 'ড্রাফট',
  ecBack: '← কোর্সে ফিরুন', ecNoLesson: 'কোনো পাঠ নির্বাচিত হয়নি', ecLessons: 'পাঠসমূহ', ecInstructor: 'প্রশিক্ষক',
  profileRole: 'ভূমিকা', profileDashboard: 'শিক্ষার্থী ড্যাশবোর্ড', profileWeekly: 'সাপ্তাহিক পারফরম্যান্স', profileLive: 'লাইভ',
  profileCompletion: 'সম্পন্ন', profileCompleted: 'সম্পন্ন হয়েছে', profileRemaining: 'বাকি আছে',
  profileAssessments: 'Angular মূল্যায়ন', profileCodingTime: 'এই সপ্তাহে কোডিং সময়',
  profileStreak: 'ধারাবাহিকতার স্ট্রিক', profileDays: 'দিন',
  profileActivity: 'কার্যক্রম', profileActivityDesc: 'এই বিকল্পগুলো ভবিষ্যৎ আপডেটে চালু হবে।',
  profileMyClasses: 'আমার ক্লাস', profileMyCourses: 'আমার কোর্স', profileAssignments: 'অ্যাসাইনমেন্ট', profileCertificates: 'সার্টিফিকেট',
  loginEyebrow: 'স্বাগতম', loginTitle: 'আপনার শিক্ষার যাত্রা চালিয়ে যেতে লগইন করুন।',
  loginLead: 'একটি ফোকাসড ওয়ার্কস্পেস থেকে আপনার পাঠ, অগ্রগতি ড্যাশবোর্ড এবং স্কিল স্ট্রিক অ্যাক্সেস করুন।',
  loginSecure: 'নিরাপদ প্রবেশ', loginMode: 'ব্ল্যাক-ব্লু লার্নিং মোড',
  loginF1Title: 'দ্রুত শুরু', loginF1Desc: 'আপনার সেভ করা কোর্স পাথে তাৎক্ষণিকভাবে ফিরে যান।',
  loginF2Title: 'অগ্রগতি সিঙ্ক', loginF2Desc: 'স্ট্রিক, স্কোর এবং মাইলস্টোন এক জায়গায় রাখুন।',
  loginF3Title: 'পরিষ্কার ফোকাস', loginF3Desc: 'কম বিক্ষেপের জন্য তীক্ষ্ণ নীল অ্যাকসেন্ট সহ ডার্ক ইন্টারফেস।',
  loginEmail: 'ইমেইল ঠিকানা', loginEmailError: 'একটি বৈধ ইমেইল ঠিকানা দিন।',
  loginPassword: 'পাসওয়ার্ড', loginPasswordError: 'পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।',
  loginRemember: 'আমাকে মনে রাখুন', loginForgot: 'পাসওয়ার্ড ভুলে গেছেন?', loginLoggingIn: 'লগইন হচ্ছে...', loginBtn: 'লগইন করুন',
  loginNoAccount: 'অ্যাকাউন্ট নেই?', loginCreateOne: 'তৈরি করুন', loginRedirecting: 'লগইন হচ্ছে এবং হোম পেজ লোড হচ্ছে...',
  registerEyebrow: 'অ্যাকাউন্ট তৈরি করুন', registerTitle: 'লার্নিং প্ল্যাটফর্মে যোগ দিন।',
  registerLead: 'পাঠ, স্ট্রিক এবং অগ্রগতি ট্র্যাক করতে আপনার প্রোফাইল সেট আপ করুন।',
  registerNewLearner: 'নতুন শিক্ষার্থী', registerStartStrong: 'প্রথম দিন থেকেই শক্তিশালীভাবে শুরু করুন',
  registerF1Title: 'ব্যক্তিগত ড্যাশবোর্ড', registerF1Desc: 'আপনি যোগ দেওয়া প্রতিটি লার্নিং পাথের জন্য পরিষ্কার অগ্রগতি দৃশ্য পান।',
  registerF2Title: 'কাঠামোবদ্ধ অনবোর্ডিং', registerF2Desc: 'ফোকাসড ইন্টারফেসের সাথে একটি গাইডেড সেটআপ ফ্লোতে যান।',
  registerF3Title: 'ব্ল্যাক-ব্লু পরিচয়', registerF3Desc: 'হোম এবং লগইন পেজের সাথে দৃশ্যত ও কার্যকরীভাবে সামঞ্জস্যপূর্ণ।',
  registerFullName: 'পূর্ণ নাম', registerFullNamePlaceholder: 'আপনার নাম', registerFullNameError: 'আপনার পূর্ণ নাম দিন।',
  registerRole: 'ভূমিকা নির্বাচন করুন', registerRolePlaceholder: 'একটি বেছে নিন', registerStudent: 'শিক্ষার্থী', registerTeacher: 'শিক্ষক', registerRoleError: 'শিক্ষার্থী বা শিক্ষক বেছে নিন।',
  registerPasswordPlaceholder: 'পাসওয়ার্ড তৈরি করুন', registerConfirmPassword: 'পাসওয়ার্ড নিশ্চিত করুন', registerRepeatPassword: 'পাসওয়ার্ড পুনরায় দিন', registerConfirmPasswordError: 'আপনার পাসওয়ার্ড নিশ্চিত করুন।',
  registerTerms: 'আমি লার্নিং প্ল্যাটফর্মের শর্তাবলীতে সম্মত।', registerSubmitting: 'জমা হচ্ছে...', registerBtn: 'অ্যাকাউন্ট তৈরি করুন',
  registerHaveAccount: 'ইতিমধ্যে অ্যাকাউন্ট আছে?', registerLoginHere: 'এখানে লগইন করুন', registerGoHome: 'হোমে যান',
  lbTitle: 'শীর্ষ পারফরমার', lbSubtitle: 'কুইজ স্কোরের ভিত্তিতে সেরা শিক্ষার্থী',
  lbLoading: 'র‍্যাঙ্কিং লোড হচ্ছে...', lbEmpty: 'এখনও কোনো কুইজ অ্যাটেম্প্ট নেই',
  lbTableRank: 'র‍্যাঙ্ক', lbTableStudent: 'শিক্ষার্থী', lbTableCorrect: 'সঠিক',
  lbTableTotal: 'মোট প্র', lbTableScore: 'স্কোর',
  lbRanked: 'আপনি র‍্যাঙ্ক করছেন', lbOutOf: 'জন', lbStudents: 'শিক্ষার্থীর মধ্যে', lbYourScore: 'আপনার স্কোর:',
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly _lang = signal<Language>('en');
  readonly lang = this._lang.asReadonly();
  readonly isBangla = computed(() => this._lang() === 'bn');
  readonly t = computed<Translations>(() => (this._lang() === 'bn' ? BN : EN));

  toggle(): void { this._lang.update(l => (l === 'en' ? 'bn' : 'en')); }
  set(lang: Language): void { this._lang.set(lang); }
}
