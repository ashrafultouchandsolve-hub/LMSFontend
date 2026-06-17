import { Injectable, signal, computed } from '@angular/core';

export type Language = 'en' | 'bn';

export interface Translations {
  // Navbar (navLive = public free live classes link)
  navTracks: string; navCourses: string; navVision: string; navLogin: string; navLive: string;
  navGetStarted: string; navLogout: string; navProfile: string; navTeacher: string; navHi: string;
  // Hero
  heroEyebrow: string; heroH1Part1: string; heroH1Accent: string; heroH1Part2: string;
  heroLead: string; heroExplore: string; heroWhyUs: string;
  heroFreeLiveTop: string; heroFreeLiveBottom: string;
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
  courseStartLearning: string; courseDurationUnit: string; courseManage: string;
  // Features
  feature1Title: string; feature1Desc: string; feature2Title: string; feature2Desc: string; feature3Title: string; feature3Desc: string;
  // Workflow / What you get
  wfTag: string; wfTitle: string; wfTitleAccent: string; wfSubtitle: string;
  wfF1Label: string; wfF1Desc: string; wfF2Label: string; wfF2Desc: string;
  wfF3Label: string; wfF3Desc: string; wfF4Label: string; wfF4Desc: string;
  wfF5Label: string; wfF5Desc: string; wfF6Label: string; wfF6Desc: string;
  wfF7Label: string; wfF7Desc: string;
  wfLiveBadge: string; wfLiveTime: string; wfJoinBtn: string; wfJoined: string;
  wfChatName: string; wfChatMsg: string; wfScreenHint: string;
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
  cdStudents: string; cdTotalVideos: string; cdTotalPractice: string; cdFreeLiveNote: string;
  cdIncludes: string; cdIncLive: string; cdFree: string; cdIncVideos: string; cdIncPractice: string;
  cdIncStudents: string; cdIncCert: string; cdPriceLabel: string; cdContinue: string; cdRatings: string;
  cdRateThis: string; cdClose: string; cdInWishlist: string; cdAddWishlist: string; cdUpdating: string; cdAdding: string;
  // Enrolled Course
  ecBack: string; ecNoLesson: string; ecLessons: string; ecInstructor: string;
  // Profile
  profileRole: string; profileDashboard: string; profileWeekly: string; profileLive: string;
  profileCompletion: string; profileCompleted: string; profileRemaining: string;
  profileAssessments: string; profileCodingTime: string; profileStreak: string; profileDays: string;
  profileActivity: string; profileActivityDesc: string; profileMyClasses: string;
  profileMyCourses: string; profileAssignments: string; profileCertificates: string;
  // Profile edit
  profileEdit: string; profileSave: string; profileSaving: string; profileCancel: string;
  profileUpdated: string; profileChangePhoto: string; profilePhotoHint: string;
  profileBasicInfo: string; profileOptionalInfo: string; profileOptionalHint: string;
  profileDetails: string; profileAboutSection: string; profileNotSet: string; profileAddInfo: string;
  profileFullName: string; profileEmailLabel: string; profileEmailNote: string;
  profilePhone: string; profileDob: string; profileGender: string;
  profileGenderSelect: string; profileGenderMale: string; profileGenderFemale: string; profileGenderOther: string;
  profileAddress: string; profileInstitution: string; profileClass: string;
  profileGuardianName: string; profileGuardianPhone: string;
  profileFacebook: string; profileLinkedIn: string; profileBio: string; profileBioPlaceholder: string;
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
  lbEyebrow: string; lbCourseLabel: string; lbRankingTitle: string; lbRankingSub: string;
  lbRecommendTitle: string; lbRecommendSub: string; lbNoAttempt: string; lbSearchPlaceholder: string;
  lbSort: string; lbSortScore: string; lbSortCorrect: string; lbNoResult: string; lbJumpToMe: string;
  lbIn: string; lbRecHeadPref: string; lbRecHeadPopular: string; lbRecHeadSub: string;
  lbRecEmpty: string; lbViewCourse: string; lbYou: string;
  // Shared / Live class vocabulary
  liveNow: string; liveUpcoming: string; liveEnded: string; liveJoinNow: string; liveJoin: string;
  commonLoading: string; commonBack: string;
  // My Live Classes
  mcTitle: string; mcSub: string; mcLoginBtn: string; mcLiveNowSec: string; mcUpcomingSec: string;
  mcByCourseSec: string; mcNoEnrolled: string; mcNoEnrolledDesc: string; mcBrowse: string;
  mcCourseLoading: string; mcNoLiveForCourse: string;
  // Certificates
  certTitle: string; certNoCourses: string; certNoCoursesDesc: string; certViewCourses: string;
  certIssuedOn: string; certIssuedStatus: string; certDownloadPdf: string; certPending: string;
  certLockMsg: string; certDownloadLocked: string;
  // Assignments
  asgTitle: string; asgSub: string; asgStatus: string; asgPending: string; asgSubmit: string;
  asgEmpty: string; asgEmptyDesc: string; asgDue: string;
  // Video / Watch History
  vhTitle: string; vhSub: string; vhEmpty: string; vhEmptyDesc: string; vhBrowse: string;
  vhCompleted: string; vhPlaying: string; vhRewatch: string; vhResume: string;
  // Free Classes
  fcTag: string; fcTitle: string; fcSub: string; fcComingTitle: string; fcComingDesc: string; fcBtn: string;
  // Common
  commonCancel: string; commonSave: string; commonEmail: string; commonStudent: string;
  // Onboarding preferences
  obStep: string; obOf: string; obSkip: string; obSkillLevel: string; obSkillLevelDesc: string;
  obGoal: string; obGoalDesc: string; obLanguage: string; obLanguageDesc: string;
  obInterests: string; obInterestsDesc: string; obContinue: string;
  // Instructors
  insTag: string; insTitle1: string; insSub: string; insNoYet: string; insNoYetDesc: string;
  insCourses: string; insInstructor: string; insExpert: string;
  // Store
  stTag: string; stTitle1: string; stSub: string; stAll: string; stNoItems: string; stNoItemsDesc: string;
  stDownload: string; stBuyNow: string;
  // Enrolled students
  esBack: string; esTitle: string; esSub: string; esLoading: string; esNoStudents: string; esNoStudentsDesc: string;
  esTotalPre: string; esTotalPost: string; esThEmail: string; esThDate: string; esThCert: string;
  esIssued: string; esIssueCert: string;
  // Teacher profile
  tpTitle: string; tpSub: string; tpEdit: string; tpCancelEdit: string; tpUploadPhoto: string; tpUpload: string;
  tpUploading: string; tpFullName: string; tpAboutMe: string; tpFacebook: string; tpYoutube: string;
  tpSave: string; tpSaving: string; tpAboutPlaceholder: string; tpNamePlaceholder: string;
  // Quiz attempt
  qzAlreadyTitle: string; qzAlreadyDesc: string; qzBackToLesson: string; qzYourScore: string; qzFinished: string;
  qzCorrect: string; qzWrong: string; qzYourAnswer: string; qzNotGiven: string; qzCorrectAnswer: string;
  qzSubmittedMsg: string; qzNoQuiz: string; qzAnswered: string; qzSubmitted: string; qzAlreadyCompleted: string; qzSubmitQuiz: string;
  // Quiz editor
  qeTitle: string; qeLesson: string; qeHowMany: string; qeQuestion: string; qeQuestionPlaceholder: string;
  qeCorrect: string; qeOption: string; qeSaveAll: string; qeSaving: string; qeSavedQuizzes: string;
  // Common actions
  commonEdit: string; commonDelete: string; commonName: string; commonTitle: string; commonDescription: string;
  // Teacher dashboard
  tcAdminPanel: string; tcSideDashboard: string; tcSideCourses: string; tcSideUsers: string;
  tcSideEnrollments: string; tcSideProfile: string; tcBackToSite: string; tcSideLive: string;
  // Teacher free live class panel
  tcLiveTitle: string; tcLiveSub: string; tcLiveStartHeading: string;
  tcLiveGoLive: string; tcLiveNote: string; tcLiveMine: string;
  tcLiveNoneMine: string; tcLiveEnded: string; tcLiveCopy: string; tcLiveCopied: string;
  tcLiveOpenRoom: string; tcLiveEnd: string;
  // Public free live page
  flBadge: string; flTitle: string; flSubtitle: string; flRefresh: string; flLoading: string;
  flNoneTitle: string; flNoneDesc: string; flLiveNow: string; flHostedBy: string; flJoin: string;
  flGuestHint: string; flJoinModalTitle: string; flJoinModalDesc: string; flNameLabel: string;
  flNamePlaceholder: string; flCancel: string; flEnterRoom: string;
  tcCoursesSub: string; tcNewCourse: string; tcSearchCourses: string;
  tcThTitle: string; tcThCategory: string; tcThLevel: string; tcThPrice: string; tcThLessons: string;
  tcThStudents: string; tcThRating: string; tcThStatus: string; tcThActions: string; tcNoRatings: string;
  tcBtnStudents: string; tcBtnLessons: string; tcNoCourse: string; tcLoadingCourses: string;
  tcBackToCourses: string; tcLessonsFor: string; tcLessonsSub: string; tcLiveSchedule: string; tcAddLesson: string;
  tcLoadingLessons: string; tcPreview: string; tcOpenVideo: string; tcThumbnail: string; tcAddQuiz: string; tcNoLesson: string;
  tcScheduledLive: string; tcLivePanelSub: string; tcLoadingLive: string; tcStart: string; tcEnd: string; tcNoLiveScheduled: string;
  tcCreateLiveTitle: string; tcScheduledAt: string; tcLiveTitlePlaceholder: string; tcLiveDescPlaceholder: string; tcCreateLiveBtn: string;
  tcInstructorName: string; tcLevelLabel: string; tcPriceLabel: string; tcDurationLabel: string; tcThumbnailUrl: string;
  tcUploadThumb: string; tcPublishCourse: string; tcSaveCourse: string;
  tcLessonTitle: string; tcVideoType: string; tcOrderIndex: string; tcVideoUrl: string; tcUploadVideo: string;
  tcUploadingVideo: string; tcLessonThumb: string; tcResourceUrl: string; tcFreePreview: string; tcSaveLesson: string;
  tcEnrolled: string; tcIssue: string; tcEditCourse: string; tcEditLesson: string;
  // Notification bell
  nbTitle: string; nbMarkAll: string; nbEmpty: string;
  // Payment
  payBackHome: string; paySecure: string; paySummaryNote: string; payPayable: string; payMethods: string;
  payCard: string; payInternetBanking: string; payOrderSummary: string; payCourse: string; payAmount: string;
  payGateway: string; paySslNotice: string; payRedirecting: string; payPay: string; paySecurely: string; paySecureNote: string;
  // Live class room
  lcEndClass: string; lcJoining: string; lcGoHome: string;
  // Live class auto-recording
  lcEndConfirm: string; lcRecBadge: string; lcRecUploading: string; lcRecPromptTitle: string;
  lcRecPromptDesc: string; lcRecBrowserNote: string; lcRecStart: string; lcRecSkip: string;
  lcRecDenied: string; lcRecStoppedShare: string; lcRecUploadFailed: string;
  recSectionTitle: string; recWatch: string;
  // Exams (student)
  exSectionTitle: string; exCourseTitle: string; exFirst: string; exSecond: string; exFinal: string;
  exLocked: string; exNotAvailable: string; exPending: string; exSubmitted: string; exGraded: string;
  exMissed: string; exClosed: string; exDeadline: string; exInstruction: string; exQuestion: string;
  exViewPdf: string; exUpload: string; exSubmit: string; exSubmitting: string; exDaysLeft: string;
  exHr: string; exMin: string; exLeft: string;
  exDayLeft: string; exYourAnswer: string; exMarks: string; exFeedback: string; exAwaitingResult: string;
  // Exams (admin/teacher authoring + grading)
  exManageExams: string; exManageSub: string; exTitlePlaceholder: string; exInstructionPlaceholder: string;
  exTotalMarks: string; exDurationMin: string; exDeadlineField: string; exSaveExam: string;
  exUploadQuestion: string; exReplaceQuestion: string; exPublished: string; exUnpublished: string;
  exViewSubmissions: string; exNoSubmissions: string; exDownload: string; exSaveGrade: string; exSubmittedAt: string;
  exUpcoming: string; exStartsIn: string; exStartDate: string; exDetails: string; exDay: string; exDays: string; exGradedByAdmin: string;
  exStarted: string; exDurationDays: string; exDurationHint: string;
  exEstimatedDate: string; exEstimatedHint: string; exEstimatedStart: string; exStartingSoon: string;
  // Course live component
  ecLiveClasses: string; ecScheduled: string; ecLiveNow: string; ecJoinNow: string; ecNoLive: string; ecUpcoming: string;
  ecHubPractice: string; ecHubPracticeSub: string; ecHubLive: string; ecHubLiveSub: string;
  ecHubRecord: string; ecHubRecordSub: string; ecHubExam: string; ecHubExamSub: string; ecComingSoon: string; ecAllCourses: string;
  // Practice materials
  pmTitle: string; pmSub: string; pmStudentSub: string; pmFieldName: string; pmDescPlaceholder: string;
  pmChooseFile: string; pmAdd: string; pmOpen: string; pmNone: string; pmNoneDesc: string;
  // Admin role-restructure: categories, course manager, appointment
  navAdmin: string; adCategories: string; adCategoriesSub: string; adCategoryNamePlaceholder: string;
  adAddCategory: string; adNoCategories: string; adManageCourses: string; adSetImage: string; adAuthorCourses: string;
  tcBackToAdmin: string; tcMyCoursesLive: string; tcLiveCoursesSub: string; tcManageLive: string;
  tcSelectCategory: string; tcNoCategoriesHint: string; tcAppointTeacher: string; tcSelectTeacher: string;
  tcAppointMulti: string; tcSelectedCount: string; cdCourseTeachers: string; tcChooseTeachers: string;
  // Admin dashboard
  adTeachers: string; adStudents: string; adComments: string; adAnnouncements: string; adStoreItems: string;
  adOverview: string; adTotalStudents: string; adActiveTeachers: string; adPendingApprovals: string;
  adTotalCourses: string; adTotalEnrollments: string; adWaitingApproval: string; adReviewNow: string;
  adTeachersSub: string; adSearchNameEmail: string; adThCourses: string; adApprove: string; adBlock: string;
  adUnblock: string; adNoTeachers: string; adStudentsSub: string; adNoStudents: string;
  adCoursesSub: string; adSearchCourseTeacher: string; adThTeacher: string; adThEnrollments: string; adNoCourses: string;
  adCommentsSub: string; adSearchComment: string; adNoComments: string;
  adAnnSub: string; adCreateAnn: string; adOptional: string; adType: string; adMessage: string;
  adAnnTitlePlaceholder: string; adMessagePlaceholder: string; adExpiresAt: string; adShowIndefinite: string;
  adPreview: string; adPublishing: string; adPublishAnn: string; adInactive: string; adUntil: string;
  adDeactivate: string; adNoAnn: string;
  // Admin store items
  aiTitle: string; aiSub: string; aiAddNew: string; aiSearch: string; aiAllCategories: string; aiLoading: string;
  aiNoItems: string; aiAvailable: string; aiUnavailable: string; aiEditItem: string; aiAddItem: string;
  aiTitlePlaceholder: string; aiPrice: string; aiDescPlaceholder: string; aiFileUrl: string; aiUploadPdf: string;
  aiItemImage: string; aiSaveItem: string;
}

const EN: Translations = {
  navTracks: 'Tracks', navCourses: 'Courses', navVision: 'Vision', navLogin: 'Login', navLive: 'Live',
  navGetStarted: 'Get started', navLogout: 'Logout', navProfile: 'Profile', navTeacher: 'Instructor', navHi: 'Hi,',
  heroEyebrow: 'Trusted learning ecosystem', heroH1Part1: 'Learn in-demand', heroH1Accent: 'skills', heroH1Part2: 'with structured paths.',
  heroLead: 'Grow from fundamentals to advanced implementation through mentor-guided modules and hands-on labs designed for real-world outcomes.',
  heroExplore: 'Explore programs', heroWhyUs: 'Why choose us',
  heroFreeLiveTop: 'Free Live', heroFreeLiveBottom: 'Class',
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
  courseEnrolled: 'Enrolled', courseEnrollNow: 'Enroll Now', courseStartLearning: 'Start learning', courseDurationUnit: 'min', courseManage: 'Manage',
  feature1Title: 'Outcome-based curriculum', feature1Desc: 'Follow role-focused modules designed around practical, job-ready outcomes.',
  feature2Title: 'Progress and performance analytics', feature2Desc: 'Track completion, assessment scores, and learning consistency in one dashboard.',
  feature3Title: 'Mentor-guided growth', feature3Desc: 'Get structured feedback and guidance to accelerate your learning path.',
  wfTag: '⚙️ How It Works',
  wfTitle: 'Everything you get,', wfTitleAccent: 'in one flow',
  wfSubtitle: 'From live classes to smart notes — a complete learning flow built to keep you consistent, exam-ready, and a step ahead.',
  wfF1Label: 'Live & Recorded Classes', wfF1Desc: 'Attend live, or replay any class anytime — never miss a lesson again.',
  wfF2Label: 'Animated Video Lessons', wfF2Desc: 'Tough topics made simple with crisp, animated explanations.',
  wfF3Label: 'Practice MCQ Tests', wfF3Desc: 'Sharpen every concept with unlimited topic-wise practice quizzes.',
  wfF4Label: 'Live MCQ Contests', wfF4Desc: 'Compete in real time and see exactly where you rank.',
  wfF5Label: 'Class Notes', wfF5Desc: 'Clean, structured notes for every class — ready to download.',
  wfF6Label: 'Smart Notes', wfF6Desc: 'Auto-organized revision notes that save you hours before exams.',
  wfF7Label: 'Report Card', wfF7Desc: 'Track progress, scores, and growth in one clear dashboard.',
  wfLiveBadge: 'Live Class', wfLiveTime: 'Today · 8:30 PM', wfJoinBtn: 'Join Now', wfJoined: '554 Joined',
  wfChatName: 'Enamul Islam Rahan', wfChatMsg: 'Tonight we crack the toughest grammar shortcuts — be ready!',
  wfScreenHint: 'Tap a feature to preview',
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
  cdStudents: 'Enrolled Students', cdTotalVideos: 'Total Videos', cdTotalPractice: 'Total Practice', cdFreeLiveNote: '🎥 3 live classes are free',
  cdIncludes: 'This course includes', cdIncLive: '3 live classes', cdFree: 'Free', cdIncVideos: 'Video lessons', cdIncPractice: 'Practice materials',
  cdIncStudents: 'Students enrolled', cdIncCert: 'Certificate of completion', cdPriceLabel: 'Course price', cdContinue: 'Continue Learning →', cdRatings: 'ratings',
  cdRateThis: '⭐ Rate this course', cdClose: 'Close', cdInWishlist: 'In Wishlist', cdAddWishlist: 'Add to Wishlist', cdUpdating: 'Updating…', cdAdding: 'Adding…',
  ecBack: '← Back to Course', ecNoLesson: 'No lesson selected', ecLessons: 'Lessons', ecInstructor: 'Instructor',
  profileRole: 'Role', profileDashboard: 'Student dashboard', profileWeekly: 'Weekly performance', profileLive: 'Live',
  profileCompletion: 'completion', profileCompleted: 'Completed', profileRemaining: 'Remaining',
  profileAssessments: 'Angular assessments', profileCodingTime: 'Coding time this week',
  profileStreak: 'Consistency streak', profileDays: 'days',
  profileActivity: 'Activity', profileActivityDesc: 'These options will be activated in future updates.',
  profileMyClasses: 'My Classes', profileMyCourses: 'My Courses', profileAssignments: 'Assignments', profileCertificates: 'Certificates',
  profileEdit: 'Edit Profile', profileSave: 'Save Changes', profileSaving: 'Saving...', profileCancel: 'Cancel',
  profileUpdated: 'Profile updated successfully.', profileChangePhoto: 'Change Photo', profilePhotoHint: 'JPG, PNG or WEBP · max 5MB',
  profileBasicInfo: 'Basic Information', profileOptionalInfo: 'Additional Information', profileOptionalHint: 'Optional — add these if you want.',
  profileDetails: 'Profile Details', profileAboutSection: 'About Me', profileNotSet: 'Not set', profileAddInfo: 'Add your details',
  profileFullName: 'Full Name', profileEmailLabel: 'Email', profileEmailNote: 'Email cannot be changed',
  profilePhone: 'Phone', profileDob: 'Date of Birth', profileGender: 'Gender',
  profileGenderSelect: 'Select…', profileGenderMale: 'Male', profileGenderFemale: 'Female', profileGenderOther: 'Other',
  profileAddress: 'Address', profileInstitution: 'Institution / School', profileClass: 'Class / Grade',
  profileGuardianName: 'Guardian Name', profileGuardianPhone: 'Guardian Phone',
  profileFacebook: 'Facebook', profileLinkedIn: 'LinkedIn', profileBio: 'About / Bio', profileBioPlaceholder: 'Write a short bio about yourself…',
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
  registerLead: 'Create your learning profile to track courses, quizzes, assignments, and monitor your progress all in one place.',
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
  lbEyebrow: 'LEADERBOARD', lbCourseLabel: 'Course', lbRankingTitle: 'Course Leaderboard',
  lbRankingSub: 'Top performers in your enrolled course',
  lbRecommendTitle: 'Start your journey', lbRecommendSub: "You're not enrolled in any course yet — explore courses picked for you",
  lbNoAttempt: 'No quiz attempts in this course yet', lbSearchPlaceholder: 'Search student...',
  lbSort: 'Sort:', lbSortScore: 'Score %', lbSortCorrect: 'Correct', lbNoResult: 'No student found for',
  lbJumpToMe: 'Jump to me', lbIn: 'in',
  lbRecHeadPref: '✨ Recommended courses for you', lbRecHeadPopular: '🔥 Popular courses for you',
  lbRecHeadSub: 'Enroll in a course to see its leaderboard here.', lbRecEmpty: 'No courses published yet.',
  lbViewCourse: 'View course →', lbYou: 'You',
  liveNow: 'Live now', liveUpcoming: 'Upcoming', liveEnded: 'Ended', liveJoinNow: 'Join Now →', liveJoin: 'Join',
  commonLoading: 'Loading...', commonBack: 'Back',
  mcTitle: 'My Live Classes', mcSub: 'All live classes from your enrolled courses appear here.',
  mcLoginBtn: 'Login', mcLiveNowSec: 'Live now', mcUpcomingSec: 'Upcoming Classes', mcByCourseSec: 'By Course',
  mcNoEnrolled: 'No enrolled course', mcNoEnrolledDesc: 'Enroll in a course to see live classes here.',
  mcBrowse: 'Browse Courses →', mcCourseLoading: 'Loading...', mcNoLiveForCourse: 'No live class scheduled for this course yet.',
  certTitle: 'My Certificates', certNoCourses: 'No Courses Enrolled', certNoCoursesDesc: 'Enroll in a course first to receive certificates.',
  certViewCourses: 'View Courses', certIssuedOn: 'Issued:', certIssuedStatus: 'Certificate Issued',
  certDownloadPdf: 'Download PDF', certPending: 'Pending Teacher Approval',
  certLockMsg: 'You can download the certificate once the teacher issues it.', certDownloadLocked: 'Download (Locked)',
  asgTitle: 'My Assignments', asgSub: 'All your assignments will be here. Submit on time!',
  asgStatus: 'Status:', asgPending: 'Pending', asgSubmit: 'Submit', asgEmpty: 'No assignment found',
  asgEmptyDesc: 'New assignments will appear here.', asgDue: 'Due:',
  vhTitle: 'Watch History', vhSub: 'Lessons you have watched', vhEmpty: 'No history',
  vhEmptyDesc: "You haven't watched any video yet.", vhBrowse: 'Browse Courses',
  vhCompleted: 'Completed', vhPlaying: 'Playing', vhRewatch: 'Rewatch', vhResume: 'Resume',
  fcTag: 'Completely free', fcTitle: 'Free', fcSub: 'Selected free classes are here — learn without any payment.',
  fcComingTitle: 'Free Classes Coming Soon', fcComingDesc: "We're building the best free classes for you. Coming here soon.",
  fcBtn: 'Browse Courses now →',
  commonCancel: 'Cancel', commonSave: 'Save', commonEmail: 'Email', commonStudent: 'Student',
  obStep: 'Step', obOf: 'of', obSkip: 'Skip', obSkillLevel: 'Skill Level', obSkillLevelDesc: 'Select your current skill level.',
  obGoal: 'Goal', obGoalDesc: 'What goal do you want to achieve by learning?', obLanguage: 'Language',
  obLanguageDesc: 'Which language are you comfortable learning in?', obInterests: 'Interests (Multiple Select)',
  obInterestsDesc: 'Select as many interests as you like, then continue.', obContinue: 'Continue',
  insTag: 'Our Team', insTitle1: 'Meet Our', insSub: 'Learn from the best teachers in Bangladesh. Every instructor is an expert in their field.',
  insNoYet: 'No instructors yet', insNoYetDesc: 'Instructors will appear here once approved.',
  insCourses: 'Courses', insInstructor: 'Instructor', insExpert: 'Expert instructor',
  stTag: 'Our Store', stTitle1: 'Study', stSub: 'Books, study materials and resources — all in one place.',
  stAll: 'All', stNoItems: 'No items available', stNoItemsDesc: 'Store items will appear here soon.',
  stDownload: 'Download', stBuyNow: 'Buy Now',
  esBack: 'Back to Dashboard', esTitle: 'Enrolled Students', esSub: 'View all students of this course and issue certificates',
  esLoading: 'Loading students...', esNoStudents: 'No students', esNoStudentsDesc: 'No one has enrolled in this course yet.',
  esTotalPre: 'Total', esTotalPost: 'students enrolled', esThEmail: 'Email', esThDate: 'Enrolled Date', esThCert: 'Certificate',
  esIssued: 'Issued', esIssueCert: 'Issue Certificate',
  tpTitle: 'My Profile', tpSub: 'Manage your teacher profile information.', tpEdit: 'Edit Profile', tpCancelEdit: 'Cancel Edit',
  tpUploadPhoto: 'Upload Photo', tpUpload: 'Upload', tpUploading: 'Uploading...', tpFullName: 'Full Name', tpAboutMe: 'About Me',
  tpFacebook: 'Facebook Link', tpYoutube: 'YouTube Link', tpSave: 'Save', tpSaving: 'Saving...',
  tpAboutPlaceholder: 'Tell us about yourself...', tpNamePlaceholder: 'Your full name',
  qzAlreadyTitle: 'Quiz already completed', qzAlreadyDesc: "You've already attempted this lesson's quiz. You can't attempt again.",
  qzBackToLesson: 'Back to Lesson', qzYourScore: 'Your score', qzFinished: 'Quiz finished!',
  qzCorrect: 'correct', qzWrong: 'wrong', qzYourAnswer: 'Your answer:', qzNotGiven: 'Not given', qzCorrectAnswer: 'Correct answer:',
  qzSubmittedMsg: 'Quiz submitted!', qzNoQuiz: 'No quiz in this lesson', qzAnswered: 'answered',
  qzSubmitted: 'Submitted', qzAlreadyCompleted: 'Already Completed', qzSubmitQuiz: 'Submit Quiz',
  qeTitle: 'Quiz Editor', qeLesson: 'Lesson:', qeHowMany: 'How many quizzes do you want to add?', qeQuestion: 'Question',
  qeQuestionPlaceholder: 'Enter question...', qeCorrect: 'Correct', qeOption: 'Option', qeSaveAll: 'Save All Quiz',
  qeSaving: 'Saving...', qeSavedQuizzes: 'Saved Quizzes',
  commonEdit: 'Edit', commonDelete: 'Delete', commonName: 'Name', commonTitle: 'Title', commonDescription: 'Description',
  tcAdminPanel: 'Admin Panel', tcSideDashboard: 'Dashboard', tcSideCourses: 'Courses', tcSideUsers: 'Users',
  tcSideEnrollments: 'Enrollments', tcSideProfile: 'My Profile', tcBackToSite: 'Back to Site', tcSideLive: 'Live Class',
  tcLiveTitle: 'Free Live Class', tcLiveSub: 'Start a public live class anyone can join — no login or registration needed.',
  tcLiveStartHeading: 'Start a new free live class',
  tcLiveGoLive: 'Go Live', tcLiveNote: 'Once you go live, share the link and anyone can join instantly as a guest.',
  tcLiveMine: 'My Live Classes', tcLiveNoneMine: 'You have no active free live classes. Start one above.',
  tcLiveEnded: 'Ended', tcLiveCopy: 'Copy Link', tcLiveCopied: 'Copied', tcLiveOpenRoom: 'Open Room', tcLiveEnd: 'End',
  flBadge: 'Live Now', flTitle: 'Free Live Classes', flSubtitle: 'Join a live class right now — completely free, no login or registration required.',
  flRefresh: 'Refresh', flLoading: 'Loading live classes...',
  flNoneTitle: 'No live classes right now', flNoneDesc: 'There are no free live classes streaming at the moment. Check back soon!',
  flLiveNow: 'Live Now', flHostedBy: 'Hosted by', flJoin: 'Join Class',
  flGuestHint: 'You can join any free live class without an account — just enter your name.',
  flJoinModalTitle: 'Join the live class', flJoinModalDesc: 'Enter a name to show to others, then jump right in.',
  flNameLabel: 'Your name (optional)', flNamePlaceholder: 'e.g. Rahim', flCancel: 'Cancel', flEnterRoom: 'Enter Room',
  tcCoursesSub: 'Manage course content, thumbnails, and publish status.', tcNewCourse: 'New Course', tcSearchCourses: 'Search courses...',
  tcThTitle: 'Title', tcThCategory: 'Category', tcThLevel: 'Level', tcThPrice: 'Price', tcThLessons: 'Lessons',
  tcThStudents: 'Students', tcThRating: 'Rating', tcThStatus: 'Status', tcThActions: 'Actions', tcNoRatings: 'No ratings',
  tcBtnStudents: 'Students', tcBtnLessons: 'Lessons', tcNoCourse: 'No course found.', tcLoadingCourses: 'Loading courses...',
  tcBackToCourses: 'Back to Courses', tcLessonsFor: 'Lessons for', tcLessonsSub: 'Add or edit lesson videos and resources from this panel.',
  tcLiveSchedule: 'Schedule Live Class', tcAddLesson: 'Add Lesson',
  tcLoadingLessons: 'Loading lessons...', tcPreview: 'Preview', tcOpenVideo: 'Open Video', tcThumbnail: 'Thumbnail',
  tcAddQuiz: 'Add Quiz', tcNoLesson: 'No lesson found for this course.',
  tcScheduledLive: 'Scheduled Live Classes', tcLivePanelSub: "Schedule, start, join and end this course's live sessions from here.",
  tcLoadingLive: 'Loading live classes...', tcStart: 'Start', tcEnd: 'End', tcNoLiveScheduled: 'No live class scheduled yet.',
  tcCreateLiveTitle: 'Create Live Class', tcScheduledAt: 'Scheduled At', tcLiveTitlePlaceholder: 'e.g. Chapter 5 Discussion',
  tcLiveDescPlaceholder: 'What the class is about...', tcCreateLiveBtn: 'Create Live Class',
  tcInstructorName: 'Instructor Name', tcLevelLabel: 'Level', tcPriceLabel: 'Price (0 = Free)', tcDurationLabel: 'Duration (minutes)',
  tcThumbnailUrl: 'Thumbnail URL', tcUploadThumb: 'Or Upload Thumbnail Image', tcPublishCourse: 'Publish course', tcSaveCourse: 'Save Course',
  tcLessonTitle: 'Lesson Title', tcVideoType: 'Video Type', tcOrderIndex: 'Order Index', tcVideoUrl: 'Video URL',
  tcUploadVideo: 'Or Upload Video File', tcUploadingVideo: 'Uploading video...', tcLessonThumb: 'Lesson Thumbnail (optional)',
  tcResourceUrl: 'Resource URL (optional)', tcFreePreview: 'Free preview lesson', tcSaveLesson: 'Save Lesson',
  tcEnrolled: 'Enrolled', tcIssue: 'Issue', tcEditCourse: 'Edit Course', tcEditLesson: 'Edit Lesson',
  nbTitle: 'Notifications', nbMarkAll: 'Mark all as read', nbEmpty: 'No notifications',
  payBackHome: 'Back to Home', paySecure: 'Secure Payment',
  paySummaryNote: "You will be redirected to SSLCommerz's secure payment gateway, where you can pay with Card, bKash, Nagad and more.",
  payPayable: 'Payable Amount', payMethods: 'Accepted Payment Methods', payCard: 'Credit / Debit Card',
  payInternetBanking: 'Internet Banking', payOrderSummary: 'Order Summary', payCourse: 'Course', payAmount: 'Amount',
  payGateway: 'Gateway', paySslNotice: "Your payment info is fully secure. SSLCommerz is Bangladesh's most trusted payment gateway.",
  payRedirecting: 'Redirecting to Gateway...', payPay: 'Pay', paySecurely: 'Securely',
  paySecureNote: 'By clicking Pay, you agree to our Terms & Conditions. No card info is stored on our servers.',
  lcEndClass: 'End Class', lcJoining: 'Joining live class...', lcGoHome: 'Go to Homepage',
  lcEndConfirm: 'End the live class? The recording (if any) will be uploaded.',
  lcRecBadge: 'REC', lcRecUploading: 'Uploading recording…',
  lcRecPromptTitle: 'Record this live class?',
  lcRecPromptDesc: 'The whole session will be recorded and, when you end the class, automatically uploaded to this course so students can rewatch it. Choose "This Tab" and enable tab audio when asked.',
  lcRecBrowserNote: 'For best results host the class in Chrome or Edge.',
  lcRecStart: 'Start recording', lcRecSkip: 'Not now',
  lcRecDenied: 'Recording was not started (permission denied). The class is still live.',
  lcRecStoppedShare: 'Screen sharing stopped — your recording is saved. End the class to upload it.',
  lcRecUploadFailed: 'The recording could not be uploaded, but the class ended normally.',
  recSectionTitle: 'Recorded Live Classes', recWatch: 'Watch',
  exSectionTitle: 'My Exams', exCourseTitle: 'Course:', exFirst: '1st Exam', exSecond: '2nd Exam', exFinal: 'Final Exam',
  exLocked: 'Locked', exNotAvailable: 'Not available yet', exPending: 'Pending', exSubmitted: 'Submitted', exGraded: 'Graded',
  exMissed: 'Missed', exClosed: 'Closed — deadline passed', exDeadline: 'Deadline', exInstruction: 'Instruction', exQuestion: 'Question',
  exViewPdf: 'View PDF', exUpload: 'Choose answer file', exSubmit: 'Submit', exSubmitting: 'Submitting…', exDaysLeft: 'days left',
  exHr: 'hr', exMin: 'min', exLeft: 'left',
  exDayLeft: 'day left', exYourAnswer: 'Your answer', exMarks: 'Marks', exFeedback: 'Feedback', exAwaitingResult: 'Awaiting result…',
  exManageExams: 'Exams', exManageSub: 'Set questions & deadlines, and grade submissions.', exTitlePlaceholder: 'Exam title', exInstructionPlaceholder: 'Note / instruction for students',
  exTotalMarks: 'Total marks', exDurationMin: 'Duration (min)', exDeadlineField: 'Deadline', exSaveExam: 'Save exam',
  exUploadQuestion: 'Upload question PDF', exReplaceQuestion: 'Replace question', exPublished: 'Live', exUnpublished: 'Locked (no question)',
  exViewSubmissions: 'Submissions', exNoSubmissions: 'No submissions yet', exDownload: 'Download', exSaveGrade: 'Save', exSubmittedAt: 'Submitted',
  exUpcoming: 'Upcoming', exStartsIn: 'Starts in', exStartDate: 'Started', exDetails: 'View details', exDay: 'day', exDays: 'days', exGradedByAdmin: 'Graded by admin',
  exStarted: 'Exam Started', exDurationDays: 'Exam duration', exDurationHint: 'The exam timer starts the moment you upload the question. Students get this long to submit answers.',
  exEstimatedDate: 'Estimated start date', exEstimatedHint: 'Shown to students as a countdown — it does NOT start the exam.', exEstimatedStart: 'Estimated start', exStartingSoon: 'Starting soon',
  ecLiveClasses: 'Live Classes', ecScheduled: 'scheduled', ecLiveNow: 'Live now', ecJoinNow: 'Join Now', ecNoLive: 'No live class scheduled for this course yet.', ecUpcoming: 'Upcoming',
  ecHubPractice: 'Practice', ecHubPracticeSub: 'Sharpen your skills', ecHubLive: 'Live Class', ecHubLiveSub: 'Join live & watch recordings',
  ecHubRecord: 'Recorded Videos', ecHubRecordSub: 'Lessons, notes & quizzes', ecHubExam: 'Exam', ecHubExamSub: 'Take your exams', ecComingSoon: 'Coming soon — stay tuned!', ecAllCourses: 'All Courses',
  pmTitle: 'Practice Materials', pmSub: 'Upload PDFs/DOCs students can study (board questions, model tests, notes…).', pmStudentSub: 'Study materials shared by your instructor.',
  pmFieldName: 'Field name (e.g. Previous Board Questions)', pmDescPlaceholder: 'Short description (optional)',
  pmChooseFile: 'Choose PDF / DOC', pmAdd: 'Add material', pmOpen: 'Open', pmNone: 'No practice materials yet', pmNoneDesc: 'Practice materials will appear here once your instructor uploads them.',
  navAdmin: 'Admin Panel',
  adCategories: 'Categories', adCategoriesSub: 'Create categories, then build courses inside each one.',
  adCategoryNamePlaceholder: 'New category name (e.g. SSC 2027)', adAddCategory: 'Add Category',
  adNoCategories: 'No categories yet. Create one to start organizing courses.',
  adManageCourses: 'Manage Courses', adSetImage: 'Set Image', adAuthorCourses: 'Manage / Author Courses',
  tcBackToAdmin: 'Back to Admin', tcMyCoursesLive: 'My Live Courses', tcLiveCoursesSub: 'Run live classes for the courses you are appointed to.',
  tcManageLive: 'Live Classes', tcSelectCategory: 'Select a category', tcNoCategoriesHint: 'No categories yet — create one in the Admin → Categories tab.',
  tcAppointTeacher: 'Appoint Teacher(s)', tcSelectTeacher: 'No approved teachers yet',
  tcAppointMulti: 'select one or more', tcSelectedCount: 'selected', cdCourseTeachers: 'Your Instructors', tcChooseTeachers: 'Select teacher(s)…',
  adTeachers: 'Teachers', adStudents: 'Students', adComments: 'Comments', adAnnouncements: 'Announcements', adStoreItems: 'Store Items',
  adOverview: 'Overview of your platform', adTotalStudents: 'Total Students', adActiveTeachers: 'Active Teachers',
  adPendingApprovals: 'Pending Approvals', adTotalCourses: 'Total Courses', adTotalEnrollments: 'Total Enrollments',
  adWaitingApproval: 'teacher(s) waiting for approval.', adReviewNow: 'Review Now →',
  adTeachersSub: 'Manage teacher accounts and approvals', adSearchNameEmail: 'Search by name or email...',
  adThCourses: 'Courses', adApprove: 'Approve', adBlock: 'Block', adUnblock: 'Unblock', adNoTeachers: 'No teachers found.',
  adStudentsSub: 'Manage student accounts', adNoStudents: 'No students found.',
  adCoursesSub: 'View and manage all courses', adSearchCourseTeacher: 'Search by course title or teacher...',
  adThTeacher: 'Teacher', adThEnrollments: 'Enrollments', adNoCourses: 'No courses found.',
  adCommentsSub: 'Moderate course comments', adSearchComment: 'Search by username, course, or content...', adNoComments: 'No comments found.',
  adAnnSub: "Visible as a banner on everyone's homepage", adCreateAnn: 'Create New Announcement', adOptional: '(optional)',
  adType: 'Type', adMessage: 'Message', adAnnTitlePlaceholder: 'e.g. Happy Eid!', adMessagePlaceholder: 'Write announcement details...',
  adExpiresAt: 'Expires At', adShowIndefinite: 'Leave empty to show indefinitely', adPreview: 'Preview',
  adPublishing: 'Publishing...', adPublishAnn: 'Publish Announcement', adInactive: 'Inactive', adUntil: 'Until',
  adDeactivate: 'Deactivate', adNoAnn: 'No announcements yet.',
  aiTitle: 'Store Items', aiSub: 'Manage books, materials, and study resources.', aiAddNew: 'Add New Item',
  aiSearch: 'Search items...', aiAllCategories: 'All Categories', aiLoading: 'Loading items...', aiNoItems: 'No items found.',
  aiAvailable: 'Available', aiUnavailable: 'Unavailable', aiEditItem: 'Edit Item', aiAddItem: 'Add New Item',
  aiTitlePlaceholder: 'Enter item title', aiPrice: 'Price (৳)', aiDescPlaceholder: 'Enter item description',
  aiFileUrl: 'Download File URL', aiUploadPdf: 'Upload PDF File', aiItemImage: 'Item Image', aiSaveItem: 'Save Item',
};

const BN: Translations = {
  navTracks: 'ট্র্যাকস', navCourses: 'কোর্সসমূহ', navVision: 'আমাদের লক্ষ্য', navLogin: 'লগইন', navLive: 'লাইভ',
  navGetStarted: 'শুরু করুন', navLogout: 'লগআউট', navProfile: 'প্রোফাইল', navTeacher: 'শিক্ষক', navHi: 'হ্যালো,',
  heroEyebrow: 'বিশ্বস্ত শিক্ষা প্ল্যাটফর্ম', heroH1Part1: 'চাহিদাসম্পন্ন', heroH1Accent: 'দক্ষতা', heroH1Part2: 'শিখুন কাঠামোবদ্ধ পথে।',
  heroLead: 'মেন্টর-গাইডেড মডিউল ও হ্যান্ডস-অন ল্যাবের মাধ্যমে বেসিক থেকে অ্যাডভান্সড পর্যন্ত শিখুন।',
  heroExplore: 'প্রোগ্রাম দেখুন', heroWhyUs: 'কেন আমাদের বেছে নেবেন',
  heroFreeLiveTop: 'ফ্রি লাইভ', heroFreeLiveBottom: 'ক্লাস',
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
  courseEnrolled: 'ভর্তি হয়েছেন', courseEnrollNow: 'এখনই ভর্তি হন', courseStartLearning: 'শেখা শুরু করুন', courseDurationUnit: 'মিনিট', courseManage: 'ম্যানেজ',
  feature1Title: 'ফলাফল-ভিত্তিক পাঠ্যক্রম', feature1Desc: 'বাস্তব, চাকরি-উপযোগী ফলাফলের উপর ভিত্তি করে রোল-কেন্দ্রিক মডিউল অনুসরণ করুন।',
  feature2Title: 'অগ্রগতি ও কর্মক্ষমতা বিশ্লেষণ', feature2Desc: 'একটি ড্যাশবোর্ডে সম্পন্নতা, মূল্যায়ন স্কোর ট্র্যাক করুন।',
  feature3Title: 'মেন্টর-গাইডেড বিকাশ', feature3Desc: 'আপনার শিক্ষার পথ ত্বরান্বিত করতে কাঠামোবদ্ধ গাইডেন্স পান।',
  wfTag: '⚙️ যেভাবে কাজ করে',
  wfTitle: 'যা যা পাচ্ছেন,', wfTitleAccent: 'সব এক ফ্লো-তে',
  wfSubtitle: 'লাইভ ক্লাস থেকে স্মার্ট নোট — একটি পূর্ণাঙ্গ শেখার ফ্লো, যা আপনাকে ধারাবাহিক, পরীক্ষা-প্রস্তুত আর সবসময় এক ধাপ এগিয়ে রাখে।',
  wfF1Label: 'লাইভ ও রেকর্ডেড ক্লাস', wfF1Desc: 'লাইভে যোগ দিন, অথবা যেকোনো সময় রিপ্লে দেখুন — কোনো ক্লাস আর মিস নয়।',
  wfF2Label: 'অ্যানিমেটেড ভিডিও', wfF2Desc: 'কঠিন টপিকও সহজ হয়ে যায় ঝকঝকে অ্যানিমেশনের মাধ্যমে।',
  wfF3Label: 'প্র্যাকটিস MCQ টেস্ট', wfF3Desc: 'টপিক-ভিত্তিক আনলিমিটেড কুইজ দিয়ে প্রতিটি কনসেপ্ট পাকা করুন।',
  wfF4Label: 'লাইভ MCQ টেস্ট', wfF4Desc: 'রিয়েল-টাইমে প্রতিযোগিতা করুন আর ঠিক কোথায় আছেন দেখে নিন।',
  wfF5Label: 'ক্লাস নোট', wfF5Desc: 'প্রতিটি ক্লাসের গোছানো নোট — ডাউনলোডের জন্য প্রস্তুত।',
  wfF6Label: 'স্মার্ট নোট', wfF6Desc: 'অটো-সাজানো রিভিশন নোট, যা পরীক্ষার আগে অনেক সময় বাঁচায়।',
  wfF7Label: 'রিপোর্ট কার্ড', wfF7Desc: 'অগ্রগতি, স্কোর আর উন্নতি — সব এক পরিষ্কার ড্যাশবোর্ডে।',
  wfLiveBadge: 'লাইভ ক্লাস', wfLiveTime: 'আজ · ৮:৩০ PM', wfJoinBtn: 'জয়েন করুন', wfJoined: '৫৫৪ জন যুক্ত',
  wfChatName: 'এনামুল ইসলাম রেহান', wfChatMsg: 'আজ রাতে সবচেয়ে কঠিন গ্রামার শর্টকাটগুলো সলভ করব — রেডি থেকো!',
  wfScreenHint: 'প্রিভিউ দেখতে ফিচারে ট্যাপ করুন',
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
  cdStudents: 'নিবন্ধিত শিক্ষার্থী', cdTotalVideos: 'মোট ভিডিও', cdTotalPractice: 'মোট প্র্যাকটিস', cdFreeLiveNote: '🎥 ৩টি লাইভ ক্লাস ফ্রি',
  cdIncludes: 'এই কোর্সে যা পাবেন', cdIncLive: '৩টি লাইভ ক্লাস', cdFree: 'ফ্রি', cdIncVideos: 'ভিডিও লেসন', cdIncPractice: 'প্র্যাকটিস ম্যাটেরিয়াল',
  cdIncStudents: 'শিক্ষার্থী ভর্তি', cdIncCert: 'সমাপনী সার্টিফিকেট', cdPriceLabel: 'কোর্স ফি', cdContinue: 'শেখা চালিয়ে যান →', cdRatings: 'রেটিং',
  cdRateThis: '⭐ এই কোর্স রেট করুন', cdClose: 'বন্ধ', cdInWishlist: 'উইশলিস্টে আছে', cdAddWishlist: 'উইশলিস্টে যোগ করুন', cdUpdating: 'আপডেট হচ্ছে…', cdAdding: 'যোগ হচ্ছে…',
  ecBack: '← কোর্সে ফিরুন', ecNoLesson: 'কোনো পাঠ নির্বাচিত হয়নি', ecLessons: 'পাঠসমূহ', ecInstructor: 'প্রশিক্ষক',
  profileRole: 'ভূমিকা', profileDashboard: 'শিক্ষার্থী ড্যাশবোর্ড', profileWeekly: 'সাপ্তাহিক পারফরম্যান্স', profileLive: 'লাইভ',
  profileCompletion: 'সম্পন্ন', profileCompleted: 'সম্পন্ন হয়েছে', profileRemaining: 'বাকি আছে',
  profileAssessments: 'Angular মূল্যায়ন', profileCodingTime: 'এই সপ্তাহে কোডিং সময়',
  profileStreak: 'ধারাবাহিকতার স্ট্রিক', profileDays: 'দিন',
  profileActivity: 'কার্যক্রম', profileActivityDesc: 'এই বিকল্পগুলো ভবিষ্যৎ আপডেটে চালু হবে।',
  profileMyClasses: 'আমার ক্লাস', profileMyCourses: 'আমার কোর্স', profileAssignments: 'অ্যাসাইনমেন্ট', profileCertificates: 'সার্টিফিকেট',
  profileEdit: 'প্রোফাইল এডিট', profileSave: 'পরিবর্তন সংরক্ষণ', profileSaving: 'সংরক্ষণ হচ্ছে...', profileCancel: 'বাতিল',
  profileUpdated: 'প্রোফাইল সফলভাবে আপডেট হয়েছে।', profileChangePhoto: 'ছবি পরিবর্তন', profilePhotoHint: 'JPG, PNG বা WEBP · সর্বোচ্চ ৫MB',
  profileBasicInfo: 'মূল তথ্য', profileOptionalInfo: 'অতিরিক্ত তথ্য', profileOptionalHint: 'ঐচ্ছিক — চাইলে যোগ করতে পারেন।',
  profileDetails: 'প্রোফাইল বিবরণ', profileAboutSection: 'আমার সম্পর্কে', profileNotSet: 'দেওয়া হয়নি', profileAddInfo: 'আপনার তথ্য যোগ করুন',
  profileFullName: 'পূর্ণ নাম', profileEmailLabel: 'ইমেইল', profileEmailNote: 'ইমেইল পরিবর্তন করা যাবে না',
  profilePhone: 'ফোন', profileDob: 'জন্ম তারিখ', profileGender: 'লিঙ্গ',
  profileGenderSelect: 'নির্বাচন করুন…', profileGenderMale: 'পুরুষ', profileGenderFemale: 'মহিলা', profileGenderOther: 'অন্যান্য',
  profileAddress: 'ঠিকানা', profileInstitution: 'প্রতিষ্ঠান / স্কুল', profileClass: 'শ্রেণি / গ্রেড',
  profileGuardianName: 'অভিভাবকের নাম', profileGuardianPhone: 'অভিভাবকের ফোন',
  profileFacebook: 'ফেসবুক', profileLinkedIn: 'লিংকডইন', profileBio: 'পরিচিতি / বায়ো', profileBioPlaceholder: 'নিজের সম্পর্কে সংক্ষেপে লিখুন…',
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
  lbEyebrow: 'লিডারবোর্ড', lbCourseLabel: 'কোর্স', lbRankingTitle: 'কোর্স লিডারবোর্ড',
  lbRankingSub: 'আপনার enrolled কোর্সের সেরা পারফরমার',
  lbRecommendTitle: 'আপনার যাত্রা শুরু করুন', lbRecommendSub: 'আপনি এখনো কোনো কোর্সে enrolled নন — আপনার জন্য বাছাই করা কোর্স দেখুন',
  lbNoAttempt: 'এই কোর্সে এখনো কোনো কুইজ অ্যাটেম্প্ট নেই', lbSearchPlaceholder: 'শিক্ষার্থী খুঁজুন...',
  lbSort: 'সাজান:', lbSortScore: 'স্কোর %', lbSortCorrect: 'সঠিক', lbNoResult: 'কোনো শিক্ষার্থী পাওয়া যায়নি',
  lbJumpToMe: 'আমার কাছে যান', lbIn: 'কোর্সে',
  lbRecHeadPref: '✨ আপনার জন্য recommended কোর্স', lbRecHeadPopular: '🔥 আপনার জন্য জনপ্রিয় কোর্স',
  lbRecHeadSub: 'কোনো কোর্সে enroll করলে এখানে সেই কোর্সের লিডারবোর্ড দেখা যাবে।', lbRecEmpty: 'এখনো কোনো কোর্স প্রকাশ করা হয়নি।',
  lbViewCourse: 'কোর্স দেখুন →', lbYou: 'আপনি',
  liveNow: 'এখন লাইভ', liveUpcoming: 'আসন্ন', liveEnded: 'শেষ', liveJoinNow: 'এখনই যোগ দিন →', liveJoin: 'যোগ দিন',
  commonLoading: 'লোড হচ্ছে...', commonBack: 'ফিরে যান',
  mcTitle: 'আমার লাইভ ক্লাস', mcSub: 'আপনার enrolled কোর্সগুলোর সব লাইভ ক্লাস এখানে দেখতে পাবেন।',
  mcLoginBtn: 'লগইন করুন', mcLiveNowSec: 'এখন লাইভ', mcUpcomingSec: 'আসন্ন ক্লাস', mcByCourseSec: 'কোর্স অনুযায়ী',
  mcNoEnrolled: 'কোনো enrolled কোর্স নেই', mcNoEnrolledDesc: 'কোর্সে enroll করলে এখানে লাইভ ক্লাস দেখতে পাবেন।',
  mcBrowse: 'কোর্স দেখুন →', mcCourseLoading: 'লোড হচ্ছে...', mcNoLiveForCourse: 'এই কোর্সে এখনো কোনো লাইভ ক্লাস schedule হয়নি।',
  certTitle: 'আমার সার্টিফিকেট', certNoCourses: 'কোনো কোর্সে ভর্তি নেই', certNoCoursesDesc: 'সার্টিফিকেট পেতে আগে একটি কোর্সে ভর্তি হন।',
  certViewCourses: 'কোর্স দেখুন', certIssuedOn: 'প্রদান করা হয়েছে:', certIssuedStatus: 'সার্টিফিকেট প্রদান করা হয়েছে',
  certDownloadPdf: 'PDF ডাউনলোড', certPending: 'শিক্ষকের অনুমোদনের অপেক্ষায়',
  certLockMsg: 'শিক্ষক প্রদান করলে আপনি সার্টিফিকেট ডাউনলোড করতে পারবেন।', certDownloadLocked: 'ডাউনলোড (লক)',
  asgTitle: 'আমার অ্যাসাইনমেন্ট', asgSub: 'আপনার সব অ্যাসাইনমেন্ট এখানে থাকবে। সময়মতো জমা দিন!',
  asgStatus: 'অবস্থা:', asgPending: 'বাকি', asgSubmit: 'জমা দিন', asgEmpty: 'কোনো অ্যাসাইনমেন্ট পাওয়া যায়নি',
  asgEmptyDesc: 'নতুন অ্যাসাইনমেন্ট এলে এখানে দেখতে পাবেন।', asgDue: 'শেষ তারিখ:',
  vhTitle: 'দেখার ইতিহাস', vhSub: 'আপনি যেসব lesson দেখেছেন', vhEmpty: 'কোনো ইতিহাস নেই',
  vhEmptyDesc: 'আপনি এখনো কোনো video দেখেননি।', vhBrowse: 'কোর্স দেখুন',
  vhCompleted: 'সম্পন্ন', vhPlaying: 'চলছে', vhRewatch: 'আবার দেখুন', vhResume: 'চালিয়ে যান',
  fcTag: 'সম্পূর্ণ বিনামূল্যে', fcTitle: 'ফ্রি', fcSub: 'বাছাই করা ফ্রি ক্লাসগুলো এখানে পাবেন — কোনো payment ছাড়াই শিখুন।',
  fcComingTitle: 'ফ্রি ক্লাস শীঘ্রই আসছে', fcComingDesc: 'আমরা আপনার জন্য সেরা ফ্রি ক্লাসগুলো তৈরি করছি। শীঘ্রই এখানে পাবেন।',
  fcBtn: 'এখন কোর্স দেখুন →',
  commonCancel: 'বাতিল', commonSave: 'সংরক্ষণ', commonEmail: 'ইমেইল', commonStudent: 'শিক্ষার্থী',
  obStep: 'ধাপ', obOf: '/', obSkip: 'এড়িয়ে যান', obSkillLevel: 'স্কিল লেভেল', obSkillLevelDesc: 'আপনার বর্তমান স্কিল লেভেল সিলেক্ট করুন।',
  obGoal: 'লক্ষ্য', obGoalDesc: 'শিখে আপনি কোন লক্ষ্য অর্জন করতে চান?', obLanguage: 'ভাষা',
  obLanguageDesc: 'কোন ভাষায় শিখতে কমফোর্টেবল?', obInterests: 'আগ্রহ (একাধিক নির্বাচন)',
  obInterestsDesc: 'আপনার আগ্রহ যত খুশি সিলেক্ট করুন, তারপর continue দিন।', obContinue: 'চালিয়ে যান',
  insTag: 'আমাদের টিম', insTitle1: 'পরিচিত হোন আমাদের', insSub: 'বাংলাদেশের সেরা শিক্ষকদের সাথে পড়ুন। প্রতিটি instructor তাদের বিষয়ে expert।',
  insNoYet: 'এখনো কোনো instructor নেই', insNoYetDesc: 'অনুমোদনের পর instructor এখানে দেখা যাবে।',
  insCourses: 'কোর্স', insInstructor: 'ইনস্ট্রাক্টর', insExpert: 'অভিজ্ঞ ইনস্ট্রাক্টর',
  stTag: 'আমাদের স্টোর', stTitle1: 'স্টাডি', stSub: 'বই, স্টাডি ম্যাটেরিয়াল এবং রিসোর্স — সব এক জায়গায়।',
  stAll: 'সব', stNoItems: 'কোনো আইটেম নেই', stNoItemsDesc: 'স্টোর আইটেম শীঘ্রই এখানে দেখা যাবে।',
  stDownload: 'ডাউনলোড', stBuyNow: 'এখনই কিনুন',
  esBack: 'ড্যাশবোর্ডে ফিরুন', esTitle: 'ভর্তি হওয়া শিক্ষার্থী', esSub: 'এই কোর্সের সকল student এর তালিকা এবং certificate issue করুন',
  esLoading: 'শিক্ষার্থী লোড হচ্ছে...', esNoStudents: 'কোনো শিক্ষার্থী নেই', esNoStudentsDesc: 'এই কোর্সে এখনো কেউ enroll করেনি।',
  esTotalPre: 'মোট', esTotalPost: 'জন শিক্ষার্থী enrolled', esThEmail: 'ইমেইল', esThDate: 'ভর্তির তারিখ', esThCert: 'সার্টিফিকেট',
  esIssued: 'প্রদান করা হয়েছে', esIssueCert: 'সার্টিফিকেট প্রদান করুন',
  tpTitle: 'আমার প্রোফাইল', tpSub: 'আপনার শিক্ষক প্রোফাইলের তথ্য পরিচালনা করুন।', tpEdit: 'প্রোফাইল এডিট', tpCancelEdit: 'এডিট বাতিল',
  tpUploadPhoto: 'ছবি আপলোড', tpUpload: 'আপলোড', tpUploading: 'আপলোড হচ্ছে...', tpFullName: 'পূর্ণ নাম', tpAboutMe: 'আমার সম্পর্কে',
  tpFacebook: 'ফেসবুক লিংক', tpYoutube: 'ইউটিউব লিংক', tpSave: 'সংরক্ষণ', tpSaving: 'সংরক্ষণ হচ্ছে...',
  tpAboutPlaceholder: 'নিজের সম্পর্কে লিখুন...', tpNamePlaceholder: 'আপনার পূর্ণ নাম',
  qzAlreadyTitle: 'Quiz ইতিমধ্যে সম্পন্ন হয়েছে', qzAlreadyDesc: 'এই lesson এর quiz আপনি আগেই দিয়েছেন। আবার attempt করা যাবে না।',
  qzBackToLesson: 'পাঠে ফিরুন', qzYourScore: 'আপনার স্কোর', qzFinished: 'Quiz শেষ!',
  qzCorrect: 'টি সঠিক', qzWrong: 'টি ভুল', qzYourAnswer: 'তোমার উত্তর:', qzNotGiven: 'দেওয়া হয়নি', qzCorrectAnswer: 'সঠিক উত্তর:',
  qzSubmittedMsg: 'Quiz জমা হয়েছে!', qzNoQuiz: 'এই lesson এ কোনো quiz নেই', qzAnswered: 'টি উত্তর দেওয়া',
  qzSubmitted: 'জমা হয়েছে', qzAlreadyCompleted: 'ইতিমধ্যে সম্পন্ন', qzSubmitQuiz: 'Quiz জমা দিন',
  qeTitle: 'কুইজ এডিটর', qeLesson: 'পাঠ:', qeHowMany: 'আপনি কয়টি কুইজ যোগ করতে চান?', qeQuestion: 'প্রশ্ন',
  qeQuestionPlaceholder: 'প্রশ্ন লিখুন...', qeCorrect: 'সঠিক', qeOption: 'অপশন', qeSaveAll: 'সব কুইজ সংরক্ষণ',
  qeSaving: 'সংরক্ষণ হচ্ছে...', qeSavedQuizzes: 'সংরক্ষিত কুইজ',
  commonEdit: 'এডিট', commonDelete: 'মুছুন', commonName: 'নাম', commonTitle: 'শিরোনাম', commonDescription: 'বিবরণ',
  tcAdminPanel: 'অ্যাডমিন প্যানেল', tcSideDashboard: 'ড্যাশবোর্ড', tcSideCourses: 'কোর্স', tcSideUsers: 'ব্যবহারকারী',
  tcSideEnrollments: 'এনরোলমেন্ট', tcSideProfile: 'আমার প্রোফাইল', tcBackToSite: 'সাইটে ফিরুন', tcSideLive: 'লাইভ ক্লাস',
  tcLiveTitle: 'ফ্রি লাইভ ক্লাস', tcLiveSub: 'এমন একটি পাবলিক লাইভ ক্লাস শুরু করুন যেখানে যে কেউ লগইন বা রেজিস্ট্রেশন ছাড়াই যোগ দিতে পারে।',
  tcLiveStartHeading: 'নতুন ফ্রি লাইভ ক্লাস শুরু করুন',
  tcLiveGoLive: 'লাইভ শুরু করুন', tcLiveNote: 'লাইভ শুরু হলে লিংক শেয়ার করুন — যে কেউ গেস্ট হিসেবে সাথে সাথে যোগ দিতে পারবে।',
  tcLiveMine: 'আমার লাইভ ক্লাস', tcLiveNoneMine: 'আপনার কোনো সক্রিয় ফ্রি লাইভ ক্লাস নেই। উপরে থেকে একটি শুরু করুন।',
  tcLiveEnded: 'শেষ', tcLiveCopy: 'লিংক কপি', tcLiveCopied: 'কপি হয়েছে', tcLiveOpenRoom: 'রুম খুলুন', tcLiveEnd: 'শেষ করুন',
  flBadge: 'এখন লাইভ', flTitle: 'ফ্রি লাইভ ক্লাস', flSubtitle: 'এখনই একটি লাইভ ক্লাসে যোগ দিন — সম্পূর্ণ ফ্রি, লগইন বা রেজিস্ট্রেশন লাগবে না।',
  flRefresh: 'রিফ্রেশ', flLoading: 'লাইভ ক্লাস লোড হচ্ছে...',
  flNoneTitle: 'এখন কোনো লাইভ ক্লাস নেই', flNoneDesc: 'এই মুহূর্তে কোনো ফ্রি লাইভ ক্লাস চলছে না। একটু পরে আবার দেখুন!',
  flLiveNow: 'এখন লাইভ', flHostedBy: 'হোস্ট করছেন', flJoin: 'ক্লাসে যোগ দিন',
  flGuestHint: 'অ্যাকাউন্ট ছাড়াই যেকোনো ফ্রি লাইভ ক্লাসে যোগ দিতে পারেন — শুধু আপনার নাম লিখুন।',
  flJoinModalTitle: 'লাইভ ক্লাসে যোগ দিন', flJoinModalDesc: 'অন্যদের দেখানোর জন্য একটি নাম লিখুন, তারপর সরাসরি ঢুকে পড়ুন।',
  flNameLabel: 'আপনার নাম (ঐচ্ছিক)', flNamePlaceholder: 'যেমন: রহিম', flCancel: 'বাতিল', flEnterRoom: 'রুমে ঢুকুন',
  tcCoursesSub: 'কোর্সের কন্টেন্ট, থাম্বনেইল ও publish স্ট্যাটাস পরিচালনা করুন।', tcNewCourse: 'নতুন কোর্স', tcSearchCourses: 'কোর্স খুঁজুন...',
  tcThTitle: 'শিরোনাম', tcThCategory: 'বিষয়', tcThLevel: 'স্তর', tcThPrice: 'মূল্য', tcThLessons: 'পাঠ',
  tcThStudents: 'শিক্ষার্থী', tcThRating: 'রেটিং', tcThStatus: 'অবস্থা', tcThActions: 'অ্যাকশন', tcNoRatings: 'কোনো রেটিং নেই',
  tcBtnStudents: 'শিক্ষার্থী', tcBtnLessons: 'পাঠ', tcNoCourse: 'কোনো কোর্স পাওয়া যায়নি।', tcLoadingCourses: 'কোর্স লোড হচ্ছে...',
  tcBackToCourses: 'কোর্সে ফিরুন', tcLessonsFor: 'এর পাঠসমূহ —', tcLessonsSub: 'এই প্যানেল থেকে পাঠের ভিডিও ও রিসোর্স যোগ বা এডিট করুন।',
  tcLiveSchedule: 'লাইভ ক্লাস schedule করুন', tcAddLesson: 'পাঠ যোগ করুন',
  tcLoadingLessons: 'পাঠ লোড হচ্ছে...', tcPreview: 'প্রিভিউ', tcOpenVideo: 'ভিডিও খুলুন', tcThumbnail: 'থাম্বনেইল',
  tcAddQuiz: 'কুইজ যোগ করুন', tcNoLesson: 'এই কোর্সে কোনো পাঠ পাওয়া যায়নি।',
  tcScheduledLive: 'নির্ধারিত লাইভ ক্লাস', tcLivePanelSub: 'এই কোর্সের লাইভ সেশন schedule, start, join আর end এখান থেকে manage করুন।',
  tcLoadingLive: 'লাইভ ক্লাস লোড হচ্ছে...', tcStart: 'শুরু', tcEnd: 'শেষ', tcNoLiveScheduled: 'এখনো কোনো লাইভ ক্লাস schedule করা হয়নি।',
  tcCreateLiveTitle: 'লাইভ ক্লাস তৈরি করুন', tcScheduledAt: 'নির্ধারিত সময়', tcLiveTitlePlaceholder: 'যেমন: অধ্যায় ৫ আলোচনা',
  tcLiveDescPlaceholder: 'কী নিয়ে class হবে...', tcCreateLiveBtn: 'লাইভ ক্লাস তৈরি',
  tcInstructorName: 'প্রশিক্ষকের নাম', tcLevelLabel: 'স্তর', tcPriceLabel: 'মূল্য (০ = ফ্রি)', tcDurationLabel: 'সময়কাল (মিনিট)',
  tcThumbnailUrl: 'থাম্বনেইল URL', tcUploadThumb: 'অথবা থাম্বনেইল ছবি আপলোড করুন', tcPublishCourse: 'কোর্স publish করুন', tcSaveCourse: 'কোর্স সংরক্ষণ',
  tcLessonTitle: 'পাঠের শিরোনাম', tcVideoType: 'ভিডিও টাইপ', tcOrderIndex: 'ক্রম সূচক', tcVideoUrl: 'ভিডিও URL',
  tcUploadVideo: 'অথবা ভিডিও ফাইল আপলোড করুন', tcUploadingVideo: 'ভিডিও আপলোড হচ্ছে...', tcLessonThumb: 'পাঠের থাম্বনেইল (ঐচ্ছিক)',
  tcResourceUrl: 'রিসোর্স URL (ঐচ্ছিক)', tcFreePreview: 'ফ্রি প্রিভিউ পাঠ', tcSaveLesson: 'পাঠ সংরক্ষণ',
  tcEnrolled: 'ভর্তি', tcIssue: 'প্রদান', tcEditCourse: 'কোর্স এডিট', tcEditLesson: 'পাঠ এডিট',
  nbTitle: 'নোটিফিকেশন', nbMarkAll: 'সব পঠিত করুন', nbEmpty: 'কোনো নোটিফিকেশন নেই',
  payBackHome: 'হোমে ফিরুন', paySecure: 'নিরাপদ পেমেন্ট',
  paySummaryNote: 'আপনাকে SSLCommerz-এর নিরাপদ payment gateway তে redirect করা হবে। সেখানে Card, bKash, Nagad সহ সব method দিয়ে payment করতে পারবেন।',
  payPayable: 'প্রদেয় পরিমাণ', payMethods: 'গৃহীত পেমেন্ট মাধ্যম', payCard: 'ক্রেডিট / ডেবিট কার্ড',
  payInternetBanking: 'ইন্টারনেট ব্যাংকিং', payOrderSummary: 'অর্ডার সারাংশ', payCourse: 'কোর্স', payAmount: 'পরিমাণ',
  payGateway: 'গেটওয়ে', paySslNotice: 'আপনার payment তথ্য সম্পূর্ণ নিরাপদ। SSLCommerz Bangladesh-এর সবচেয়ে বিশ্বস্ত payment gateway।',
  payRedirecting: 'গেটওয়েতে redirect হচ্ছে...', payPay: 'পরিশোধ করুন', paySecurely: 'নিরাপদে',
  paySecureNote: 'Pay-তে ক্লিক করলে আপনি আমাদের শর্তাবলীতে সম্মত হচ্ছেন। কোনো কার্ড তথ্য আমাদের সার্ভারে সংরক্ষণ করা হয় না।',
  lcEndClass: 'ক্লাস শেষ করুন', lcJoining: 'লাইভ ক্লাসে যোগ দিচ্ছে...', lcGoHome: 'হোমপেজে যান',
  lcEndConfirm: 'লাইভ ক্লাস শেষ করবেন? রেকর্ডিং (যদি থাকে) আপলোড হয়ে যাবে।',
  lcRecBadge: 'REC', lcRecUploading: 'রেকর্ডিং আপলোড হচ্ছে…',
  lcRecPromptTitle: 'এই লাইভ ক্লাসটি রেকর্ড করবেন?',
  lcRecPromptDesc: 'পুরো সেশনটি রেকর্ড হবে এবং ক্লাস শেষ করলে স্বয়ংক্রিয়ভাবে এই কোর্সে আপলোড হয়ে যাবে — শিক্ষার্থীরা পরে দেখতে পারবে। অনুরোধ এলে "This Tab" বেছে নিন এবং tab audio চালু করুন।',
  lcRecBrowserNote: 'সেরা ফলাফলের জন্য Chrome বা Edge-এ ক্লাস হোস্ট করুন।',
  lcRecStart: 'রেকর্ডিং শুরু করুন', lcRecSkip: 'এখন নয়',
  lcRecDenied: 'রেকর্ডিং শুরু হয়নি (অনুমতি দেওয়া হয়নি)। ক্লাস কিন্তু চলছে।',
  lcRecStoppedShare: 'স্ক্রিন শেয়ার বন্ধ হয়েছে — রেকর্ডিং সেভ হয়ে আছে। আপলোড করতে ক্লাস শেষ করুন।',
  lcRecUploadFailed: 'রেকর্ডিং আপলোড করা যায়নি, তবে ক্লাস স্বাভাবিকভাবে শেষ হয়েছে।',
  recSectionTitle: 'রেকর্ড করা লাইভ ক্লাস', recWatch: 'দেখুন',
  exSectionTitle: 'আমার পরীক্ষা', exCourseTitle: 'কোর্স:', exFirst: '১ম পরীক্ষা', exSecond: '২য় পরীক্ষা', exFinal: 'ফাইনাল পরীক্ষা',
  exLocked: 'লক', exNotAvailable: 'এখনো উপলব্ধ নয়', exPending: 'বাকি আছে', exSubmitted: 'জমা হয়েছে', exGraded: 'মূল্যায়িত',
  exMissed: 'মিস হয়েছে', exClosed: 'বন্ধ — সময় শেষ', exDeadline: 'শেষ তারিখ', exInstruction: 'নির্দেশনা', exQuestion: 'প্রশ্ন',
  exViewPdf: 'PDF দেখুন', exUpload: 'উত্তর ফাইল দিন', exSubmit: 'জমা দিন', exSubmitting: 'জমা হচ্ছে…', exDaysLeft: 'দিন বাকি',
  exHr: 'ঘণ্টা', exMin: 'মিনিট', exLeft: 'বাকি',
  exDayLeft: 'দিন বাকি', exYourAnswer: 'আপনার উত্তর', exMarks: 'নম্বর', exFeedback: 'মন্তব্য', exAwaitingResult: 'ফলাফলের অপেক্ষায়…',
  exManageExams: 'পরীক্ষা', exManageSub: 'প্রশ্ন ও সময়সীমা সেট করুন এবং খাতা মূল্যায়ন করুন।', exTitlePlaceholder: 'পরীক্ষার শিরোনাম', exInstructionPlaceholder: 'শিক্ষার্থীদের জন্য নির্দেশনা',
  exTotalMarks: 'পূর্ণমান', exDurationMin: 'সময় (মিনিট)', exDeadlineField: 'শেষ তারিখ', exSaveExam: 'পরীক্ষা সেভ করুন',
  exUploadQuestion: 'প্রশ্ন PDF আপলোড', exReplaceQuestion: 'প্রশ্ন বদলান', exPublished: 'লাইভ', exUnpublished: 'লক (প্রশ্ন নেই)',
  exViewSubmissions: 'জমা', exNoSubmissions: 'এখনো কেউ জমা দেয়নি', exDownload: 'ডাউনলোড', exSaveGrade: 'সেভ', exSubmittedAt: 'জমা',
  exUpcoming: 'আসছে', exStartsIn: 'শুরু হবে', exStartDate: 'শুরু হয়েছে', exDetails: 'বিস্তারিত দেখুন', exDay: 'দিনে', exDays: 'দিনে', exGradedByAdmin: 'অ্যাডমিন মূল্যায়ন করেছে',
  exStarted: 'পরীক্ষা শুরু', exDurationDays: 'পরীক্ষার সময়সীমা', exDurationHint: 'প্রশ্ন আপলোড করার সাথে সাথেই পরীক্ষার টাইমার শুরু হয়। এই সময়ের মধ্যে শিক্ষার্থীরা উত্তর জমা দিতে পারবে।',
  exEstimatedDate: 'আনুমানিক শুরুর তারিখ', exEstimatedHint: 'শিক্ষার্থীদের কাছে কাউন্টডাউন হিসেবে দেখাবে — এটা পরীক্ষা শুরু করে না।', exEstimatedStart: 'আনুমানিক শুরু', exStartingSoon: 'খুব শিগগিরই শুরু',
  ecLiveClasses: 'লাইভ ক্লাস', ecScheduled: 'নির্ধারিত', ecLiveNow: 'এখন লাইভ', ecJoinNow: 'জয়েন করুন', ecNoLive: 'এই কোর্সে এখনো কোনো লাইভ ক্লাস নেই।', ecUpcoming: 'আসছে',
  ecHubPractice: 'প্র্যাকটিস', ecHubPracticeSub: 'নিজেকে ঝালিয়ে নাও', ecHubLive: 'লাইভ ক্লাস', ecHubLiveSub: 'লাইভ জয়েন ও রেকর্ডিং দেখো',
  ecHubRecord: 'রেকর্ডেড ভিডিও', ecHubRecordSub: 'পাঠ, নোট ও কুইজ', ecHubExam: 'পরীক্ষা', ecHubExamSub: 'পরীক্ষা দাও', ecComingSoon: 'শীঘ্রই আসছে — অপেক্ষা করো!', ecAllCourses: 'সব কোর্স',
  pmTitle: 'প্র্যাকটিস ম্যাটেরিয়াল', pmSub: 'শিক্ষার্থীদের জন্য PDF/DOC আপলোড করুন (বোর্ড প্রশ্ন, মডেল টেস্ট, নোট…)।', pmStudentSub: 'আপনার শিক্ষকের শেয়ার করা স্টাডি ম্যাটেরিয়াল।',
  pmFieldName: 'ফিল্ডের নাম (যেমন: বিগত বোর্ড প্রশ্ন)', pmDescPlaceholder: 'সংক্ষিপ্ত বিবরণ (ঐচ্ছিক)',
  pmChooseFile: 'PDF / DOC বেছে নিন', pmAdd: 'যোগ করুন', pmOpen: 'খুলুন', pmNone: 'এখনো কোনো প্র্যাকটিস ম্যাটেরিয়াল নেই', pmNoneDesc: 'শিক্ষক আপলোড করলে এখানে দেখা যাবে।',
  navAdmin: 'অ্যাডমিন প্যানেল',
  adCategories: 'ক্যাটাগরি', adCategoriesSub: 'ক্যাটাগরি তৈরি করুন, তারপর প্রতিটির ভেতরে কোর্স বানান।',
  adCategoryNamePlaceholder: 'নতুন ক্যাটাগরির নাম (যেমন: SSC 2027)', adAddCategory: 'ক্যাটাগরি যোগ করুন',
  adNoCategories: 'এখনও কোনো ক্যাটাগরি নেই। কোর্স গোছাতে একটি তৈরি করুন।',
  adManageCourses: 'কোর্স ম্যানেজ', adSetImage: 'ছবি দিন', adAuthorCourses: 'কোর্স ম্যানেজ / তৈরি',
  tcBackToAdmin: 'অ্যাডমিনে ফিরুন', tcMyCoursesLive: 'আমার লাইভ কোর্স', tcLiveCoursesSub: 'আপনি যে কোর্সগুলোতে নিযুক্ত, সেগুলোর লাইভ ক্লাস নিন।',
  tcManageLive: 'লাইভ ক্লাস', tcSelectCategory: 'ক্যাটাগরি বেছে নিন', tcNoCategoriesHint: 'এখনও ক্যাটাগরি নেই — অ্যাডমিন → ক্যাটাগরি ট্যাবে তৈরি করুন।',
  tcAppointTeacher: 'শিক্ষক নিযুক্ত করুন', tcSelectTeacher: 'এখনো কোনো অনুমোদিত শিক্ষক নেই',
  tcAppointMulti: 'এক বা একাধিক বেছে নিন', tcSelectedCount: 'জন নির্বাচিত', cdCourseTeachers: 'আপনার শিক্ষকগণ', tcChooseTeachers: 'শিক্ষক বেছে নিন…',
  adTeachers: 'শিক্ষক', adStudents: 'শিক্ষার্থী', adComments: 'কমেন্ট', adAnnouncements: 'ঘোষণা', adStoreItems: 'স্টোর আইটেম',
  adOverview: 'আপনার প্ল্যাটফর্মের সংক্ষিপ্ত চিত্র', adTotalStudents: 'মোট শিক্ষার্থী', adActiveTeachers: 'সক্রিয় শিক্ষক',
  adPendingApprovals: 'অনুমোদনের অপেক্ষায়', adTotalCourses: 'মোট কোর্স', adTotalEnrollments: 'মোট এনরোলমেন্ট',
  adWaitingApproval: 'জন শিক্ষক অনুমোদনের অপেক্ষায়।', adReviewNow: 'এখন পর্যালোচনা →',
  adTeachersSub: 'শিক্ষক অ্যাকাউন্ট ও অনুমোদন পরিচালনা করুন', adSearchNameEmail: 'নাম বা ইমেইল দিয়ে খুঁজুন...',
  adThCourses: 'কোর্স', adApprove: 'অনুমোদন', adBlock: 'ব্লক', adUnblock: 'আনব্লক', adNoTeachers: 'কোনো শিক্ষক পাওয়া যায়নি।',
  adStudentsSub: 'শিক্ষার্থী অ্যাকাউন্ট পরিচালনা করুন', adNoStudents: 'কোনো শিক্ষার্থী পাওয়া যায়নি।',
  adCoursesSub: 'সব কোর্স দেখুন ও পরিচালনা করুন', adSearchCourseTeacher: 'কোর্স বা শিক্ষকের নাম দিয়ে খুঁজুন...',
  adThTeacher: 'শিক্ষক', adThEnrollments: 'এনরোলমেন্ট', adNoCourses: 'কোনো কোর্স পাওয়া যায়নি।',
  adCommentsSub: 'কোর্স কমেন্ট মডারেট করুন', adSearchComment: 'ইউজারনেম, কোর্স বা কনটেন্ট দিয়ে খুঁজুন...', adNoComments: 'কোনো কমেন্ট পাওয়া যায়নি।',
  adAnnSub: 'সবার হোমপেজে ব্যানার হিসেবে দেখা যাবে', adCreateAnn: 'নতুন ঘোষণা তৈরি করুন', adOptional: '(ঐচ্ছিক)',
  adType: 'ধরন', adMessage: 'বার্তা', adAnnTitlePlaceholder: 'যেমন: ঈদ মোবারক!', adMessagePlaceholder: 'ঘোষণার বিস্তারিত লিখুন...',
  adExpiresAt: 'মেয়াদ শেষ', adShowIndefinite: 'অনির্দিষ্টকাল দেখাতে খালি রাখুন', adPreview: 'প্রিভিউ',
  adPublishing: 'প্রকাশ হচ্ছে...', adPublishAnn: 'ঘোষণা প্রকাশ করুন', adInactive: 'নিষ্ক্রিয়', adUntil: 'পর্যন্ত',
  adDeactivate: 'নিষ্ক্রিয় করুন', adNoAnn: 'এখনো কোনো ঘোষণা নেই।',
  aiTitle: 'স্টোর আইটেম', aiSub: 'বই, ম্যাটেরিয়াল ও স্টাডি রিসোর্স পরিচালনা করুন।', aiAddNew: 'নতুন আইটেম যোগ করুন',
  aiSearch: 'আইটেম খুঁজুন...', aiAllCategories: 'সব বিভাগ', aiLoading: 'আইটেম লোড হচ্ছে...', aiNoItems: 'কোনো আইটেম পাওয়া যায়নি।',
  aiAvailable: 'উপলব্ধ', aiUnavailable: 'অনুপলব্ধ', aiEditItem: 'আইটেম এডিট', aiAddItem: 'নতুন আইটেম যোগ করুন',
  aiTitlePlaceholder: 'আইটেমের শিরোনাম লিখুন', aiPrice: 'মূল্য (৳)', aiDescPlaceholder: 'আইটেমের বিবরণ লিখুন',
  aiFileUrl: 'ডাউনলোড ফাইল URL', aiUploadPdf: 'PDF ফাইল আপলোড', aiItemImage: 'আইটেম ছবি', aiSaveItem: 'আইটেম সংরক্ষণ',
};

const STORAGE_KEY = 'app_lang';

function readStoredLang(): Language {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === 'bn' || v === 'en' ? v : 'en';
  } catch {
    return 'en';
  }
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  // reload-এও ভাষা মনে রাখতে localStorage থেকে initial value নাও
  private readonly _lang = signal<Language>(readStoredLang());
  readonly lang = this._lang.asReadonly();
  readonly isBangla = computed(() => this._lang() === 'bn');
  readonly t = computed<Translations>(() => (this._lang() === 'bn' ? BN : EN));

  private persist(lang: Language): void {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* ignore */ }
  }

  toggle(): void {
    this._lang.update(l => (l === 'en' ? 'bn' : 'en'));
    this.persist(this._lang());
  }
  set(lang: Language): void {
    this._lang.set(lang);
    this.persist(lang);
  }
}
