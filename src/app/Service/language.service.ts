import { Injectable, signal, computed } from '@angular/core';

export type Language = 'en' | 'bn';

export interface Translations {
  // Navbar (navLive = public free live classes link)
  navTracks: string; navCourses: string; navVision: string; navLogin: string; navLive: string; navWishlist: string;
  navLiveFree: string; navLiveScheduled: string; navLiveNone: string; navLiveViewAll: string;
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
  // Recommended for you
  recoTitle: string; recoSubPrefs: string; recoSubPopular: string;
  // Courses
  coursesLoading: string; coursesLoadingDesc: string; coursesNone: string; coursesNoneDesc: string;
  coursesNoMatch: string; coursesNoMatchDesc: string; coursesAllTitle: string;
  coursesSearchHint: string; coursesSearchLabel: string; coursesSearchPlaceholder: string; coursesBackHome: string;
  courseCategory: string; courseInstructor: string; courseLessons: string; courseDuration: string;
  coursePrice: string; courseSeeMore: string; courseEnrolled: string; courseEnrollNow: string;
  courseCompleted: string; tcMarkCompleted: string; tcMarkOngoing: string;
  courseStartLearning: string; courseDurationUnit: string; courseManage: string;
  // Courses catalogue — hero, filter rail, sort, pager
  coursesEyebrow: string; coursesHeading: string; coursesSubheading: string;
  coursesLoadFailed: string; coursesLoadFailedDesc: string;
  filtersTitle: string; filterClearAll: string; filterClose: string;
  filterCategory: string; filterLevel: string; filterPrice: string; filterRating: string;
  filterFree: string; filterPaid: string; filterAndUp: string;
  resultsOf: string; resultsCourses: string;
  sortBy: string; sortPopular: string; sortNewest: string; sortRating: string;
  sortPriceAsc: string; sortPriceDesc: string; sortTitle: string;
  viewToggleLabel: string; viewGrid: string; viewList: string;
  paginationLabel: string; paginationPrev: string; paginationNext: string;
  ratingsLabel: string; courseStatsLabel: string;
  wishlistAdd: string; wishlistRemove: string;
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
  cdFreeLiveTitle: string; cdFreeLiveLead: string; cdFollow: string; cdFollowing: string; cdFollowLogin: string;
  // Teacher evaluation
  teEvalButton: string; teTitle: string; teLead: string; teAnonNote: string;
  teTeaching: string; teKnowledge: string; teClarity: string; teSupport: string; teOverall: string;
  teCommentPh: string; teSubmit: string; teSubmitting: string; teSubmitted: string; teUpdate: string;
  teLoginMsg: string; teLoginBtn: string; teNotEnrolled: string; teBrowse: string;
  teNotCompleted: string; teBackToCourse: string; teNoTeachers: string; teGenericErr: string;
  cdIncludes: string; cdIncLive: string; cdFree: string; cdIncVideos: string; cdIncPractice: string;
  cdIncStudents: string; cdIncCert: string; cdPriceLabel: string; cdContinue: string; cdRatings: string;
  cdRateThis: string; cdClose: string; cdInWishlist: string; cdAddWishlist: string; cdUpdating: string; cdAdding: string;
  cdCurriculum: string; cdLessonsWord: string; cdFreePreview: string; cdCurriculumEmpty: string; cdMinShort: string; cdReviewsTitle: string;
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
  profileInstructorArea: string; profileAdminArea: string; profileCourses: string; profileTeacherNoBio: string;
  profileManageCourses: string; profileBrowseCourses: string; profileHome: string;
  profileAdminPanel: string; profileCourseManager: string; profileInstructors: string; profileYoutube: string;
  // Login
  loginEyebrow: string; loginTitle: string; loginLead: string; loginSecure: string; loginMode: string;
  loginF1Title: string; loginF1Desc: string; loginF2Title: string; loginF2Desc: string; loginF3Title: string; loginF3Desc: string;
  loginEmail: string; loginEmailError: string; loginPassword: string; loginPasswordError: string;
  loginRemember: string; loginForgot: string; loginLoggingIn: string; loginBtn: string;
  loginNoAccount: string; loginCreateOne: string; loginRedirecting: string;
  loginOrContinue: string; loginGoogle: string;
  // Register
  registerEyebrow: string; registerTitle: string; registerLead: string; registerNewLearner: string;
  registerStartStrong: string; registerF1Title: string; registerF1Desc: string;
  registerF2Title: string; registerF2Desc: string; registerF3Title: string; registerF3Desc: string;
  registerFullName: string; registerFullNamePlaceholder: string; registerFullNameError: string;
  registerMobile: string; registerMobilePlaceholder: string; registerMobileError: string;
  registerGroup: string; registerGroupPlaceholder: string; registerGroupScience: string; registerGroupCommerce: string; registerGroupArts: string; registerGroupOthers: string;
  registerParentEmail: string; registerParentEmailPlaceholder: string; registerParentEmailError: string;
  registerRole: string; registerRolePlaceholder: string; registerStudent: string; registerTeacher: string; registerRoleError: string;
  registerPasswordPlaceholder: string; registerConfirmPassword: string; registerRepeatPassword: string; registerConfirmPasswordError: string;
  registerTerms: string; registerSubmitting: string; registerBtn: string;
  registerHaveAccount: string; registerLoginHere: string; registerGoHome: string;
  registerOrSignUp: string; registerGoogle: string; registerGoLogin: string;
  // Leaderboard
  lbTitle: string; lbSubtitle: string; lbLoading: string; lbEmpty: string;
  lbTableRank: string; lbTableStudent: string; lbTableCorrect: string; lbTableTotal: string; lbTableScore: string;
  lbRanked: string; lbOutOf: string; lbStudents: string; lbYourScore: string;
  lbEyebrow: string; lbCourseLabel: string; lbRankingTitle: string; lbRankingSub: string;
  lbRecommendTitle: string; lbRecommendSub: string; lbNoAttempt: string; lbSearchPlaceholder: string;
  lbSort: string; lbSortScore: string; lbSortCorrect: string; lbNoResult: string; lbJumpToMe: string;
  lbIn: string; lbRecHeadPref: string; lbRecHeadPopular: string; lbRecHeadSub: string;
  lbRecEmpty: string; lbViewCourse: string; lbYou: string;
  lbScopeLabel: string; lbScopeGlobal: string; lbScopeCourse: string; lbLoadFailed: string;
  lbGlobalTitle: string; lbGlobalSub: string;
  // Notifications page
  notifEyebrow: string; notifTitle: string; notifSub: string; notifMarkAll: string;
  notifAll: string; notifUnread: string; notifEmpty: string; notifNoUnread: string; notifEmptyDesc: string;
  // Announcements page
  annEyebrow: string; annTitle: string; annSub: string; annEmpty: string; annEmptyDesc: string; annExpires: string;
  // Relative time
  timeJustNow: string; timeMinutesAgo: string; timeHoursAgo: string; timeDaysAgo: string;
  // Shared / Live class vocabulary
  liveNow: string; liveUpcoming: string; liveEnded: string; liveMissed: string; liveJoinNow: string; liveJoin: string;
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
  // Student info onboarding modal (steps 02–04, right after registration)
  siLead: string; siTitle2: string; siTitle3: string; siTitle4: string;
  siDesc2: string; siDesc3: string; siDesc4: string;
  siFullName: string; siDob: string; siGender: string; siGenderMale: string; siGenderFemale: string; siGenderOther: string;
  siMobile: string; siEmail: string; siPhoto: string; siPhotoHint: string; siPhotoRemove: string;
  siBoard: string; siBoardPick: string; siInstitute: string; siInstitutePlaceholder: string;
  siSscYear: string; siSscYearPick: string; siThana: string; siThanaPlaceholder: string;
  siDistrict: string; siDistrictPlaceholder: string;
  siFatherName: string; siMotherName: string; siParentMobile: string; siParentEmailOpt: string;
  siOccupation: string; siReferral: string;
  siAgreementTitle: string; siAgreeCorrect: string; siAgreeData: string; siAgreeNotif: string;
  siBack: string; siNext: string; siConfirm: string; siSaving: string;
  siFieldRequired: string; siPickRequired: string; siAgreeRequired: string; siSaveFailed: string;
  profileReferral: string;
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
  tcLiveTitle: string; tcLiveSub: string; tcLiveStartHeading: string; tcLivePickCourse: string;
  tcLiveGoLive: string; tcLiveNote: string; tcLiveMine: string;
  tcLiveNoneMine: string; tcLiveEnded: string; tcLiveCopy: string; tcLiveCopied: string;
  tcLiveOpenRoom: string; tcLiveEnd: string;
  // Public free live page
  flBadge: string; flTitle: string; flSubtitle: string; flRefresh: string; flLoading: string;
  flNoneTitle: string; flNoneDesc: string; flLiveNow: string; flHostedBy: string; flJoin: string;
  flKindCourse: string; flKindFree: string;
  flGuestHint: string; flJoinModalTitle: string; flJoinModalDesc: string; flNameLabel: string;
  flNamePlaceholder: string; flCancel: string; flEnterRoom: string;
  tcCoursesSub: string; tcNewCourse: string; tcSearchCourses: string;
  tcThTitle: string; tcThCategory: string; tcThLevel: string; tcThPrice: string; tcThLessons: string;
  tcThStudents: string; tcThRating: string; tcThStatus: string; tcThActions: string; tcNoRatings: string;
  tcBtnStudents: string; tcBtnLessons: string; tcNoCourse: string; tcLoadingCourses: string;
  tcBackToCourses: string; tcLessonsFor: string; tcLessonsSub: string; tcLiveSchedule: string; tcAddLesson: string;
  tcLoadingLessons: string; tcPreview: string; tcOpenVideo: string; tcThumbnail: string; tcAddQuiz: string; tcNoLesson: string;
  tcScheduledLive: string; tcLivePanelSub: string; tcLoadingLive: string; tcStart: string; tcEnd: string; tcNoLiveScheduled: string;
  tcEndInRoomHint: string; tcRecReady: string; tcRecNone: string;
  tcCreateLiveTitle: string; tcScheduledAt: string; tcLiveTitlePlaceholder: string; tcLiveDescPlaceholder: string; tcCreateLiveBtn: string;
  tcInstructorName: string; tcLevelLabel: string; tcPriceLabel: string; tcDurationLabel: string; tcThumbnailUrl: string;
  tcUploadThumb: string; tcPublishCourse: string; tcSaveCourse: string;
  courseStartDate: string; courseEndDate: string; courseDateHint: string;
  enrollDaysLeft: string; enrollLastDay: string; enrollClosed: string; courseStartsOn: string;
  discountOff: string; discountPercentLabel: string; discountStartLabel: string; discountEndLabel: string;
  discountHint: string; discountInvalid: string; courseDatesInvalid: string; exMarksRange: string;
  agTitle: string; agJoin: string; agNavLabel: string; agEmpty: string;
  agViewAll: string; agAllCaught: string; agOverdue: string; agToday: string; agUpcoming: string;
  agPillOverdue: string; agPillToday: string; agPillUpcoming: string; agPillLive: string;
  agKindLive: string; agKindExam: string; agKindEnding: string;
  tcLessonTitle: string; tcVideoType: string; tcOrderIndex: string; tcVideoUrl: string; tcUploadVideo: string;
  tcUploadingVideo: string; tcLessonThumb: string; tcResourceUrl: string; tcFreePreview: string; tcSaveLesson: string;
  tcEnrolled: string; tcIssue: string; tcEditCourse: string; tcEditLesson: string;
  // Notification bell
  nbTitle: string; nbMarkAll: string; nbEmpty: string; nbViewAll: string;
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
  recManageTitle: string; recManageSub: string; recNone: string; recLoading: string;
  recStatusReady: string; recStatusProcessing: string; recStatusFailed: string;
  recTitleRequired: string; recUpdated: string; recUpdateFailed: string;
  recDeleteConfirm: string; recDeleted: string; recDeleteFailed: string; recWatchFailed: string;
  // Course delete (irreversible)
  courseDeleteConfirm: string; courseDeleted: string;
  // Exams (student)
  exSectionTitle: string; exCourseTitle: string; exFirst: string; exSecond: string; exThird: string; exFinal: string;
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
  exTeacherSub: string; exAdminCreatesNote: string; exMarksSaved: string; exMarksSaveFailed: string;
  exAdminViewOnly: string; exNotGraded: string;
  exStarted: string; exDurationDays: string; exDurationHint: string;
  exEstimatedDate: string; exEstimatedHint: string; exEstimatedStart: string; exStartingSoon: string;
  // Course live component
  ecLiveClasses: string; ecScheduled: string; ecLiveNow: string; ecJoinNow: string; ecNoLive: string; ecUpcoming: string;
  ecHubPractice: string; ecHubPracticeSub: string; ecHubLive: string; ecHubLiveSub: string;
  ecHubRecord: string; ecHubRecordSub: string; ecHubExam: string; ecHubExamSub: string; ecComingSoon: string; ecAllCourses: string;
  // Practice materials
  pmTitle: string; pmSub: string; pmStudentSub: string; pmFieldName: string; pmDescPlaceholder: string;
  pmChooseFile: string; pmAdd: string; pmOpen: string; pmNone: string; pmNoneDesc: string;
  pmTypeBoard: string; pmTypeModel: string; pmTypeLabel: string; pmLocked: string; pmLockedMsg: string; pmBack: string;
  // AI Writing (AI-graded writing practice)
  aiwGateTitle: string; aiwViewResult: string; aiwStart: string; aiwLockedMsg: string;
  aiwAdminTitle: string; aiwAdminSub: string; aiwTypeLabel: string; aiwTitlePlaceholder: string;
  aiwInstructionsPlaceholder: string; aiwTopicsPlaceholder: string; aiwTopicsHint: string; aiwPublishNow: string;
  aiwAddTask: string; aiwNoTasks: string; aiwTopicsCount: string; aiwSubsCount: string;
  aiwUnpublish: string; aiwPublish: string; aiwSubmissions: string; aiwLoadingSubs: string; aiwNoSubs: string;
  aiwAiGave: string; aiwAdjusted: string; aiwOffTopic: string; aiwViewText: string; aiwViewFile: string; aiwChangeMark: string;
  aiwTitleRequired: string; aiwTopicsRequired: string; aiwSaved: string; aiwDeleteWarn: string; aiwDeleted: string;
  aiwMarksRange: string; aiwMarkUpdated: string;
  aiwBackToCourse: string; aiwLoading: string; aiwTaskNotFound: string; aiwResultTitle: string;
  aiwAdjustedNote: string; aiwOffTopicNote: string; aiwBreakdown: string; aiwFeedback: string;
  aiwGrammar: string; aiwSpelling: string; aiwStructure: string; aiwRelevance: string;
  aiwYourWriting: string; aiwTranscribed: string; aiwChecking: string; aiwCheckingSub: string;
  aiwOneAttempt: string; aiwPickTopic: string; aiwYourAnswer: string; aiwRemoveFile: string; aiwFileChosenNote: string;
  aiwRetake: string; aiwRetakeNote: string;
  aiwTypePlaceholder: string; aiwWords: string; aiwOr: string; aiwUploadHere: string; aiwUploadHint: string; aiwSubmit: string;
  aiwFileTypes: string; aiwFileTooBig: string; aiwGradedToast: string; aiwAlreadyAttempted: string; aiwSubmitFailed: string;
  aiwStatusLive: string; aiwStatusDraft: string;
  // Admin role-restructure: categories, course manager, appointment
  navAdmin: string; adCategories: string; adCategoriesSub: string; adCategoryNamePlaceholder: string;
  adAddCategory: string; adNoCategories: string; adManageCourses: string; adSetImage: string; adAuthorCourses: string;
  tcBackToAdmin: string; tcMyCoursesLive: string; tcLiveCoursesSub: string; tcManageLive: string;
  tcSelectCategory: string; tcNoCategoriesHint: string; tcAppointTeacher: string; tcSelectTeacher: string;
  tcAppointMulti: string; tcSelectedCount: string; cdCourseTeachers: string; tcChooseTeachers: string;
  // Admin dashboard
  adTeachers: string; adStudents: string; adComments: string; adAnnouncements: string; adStoreItems: string;
  adNavTeachers: string; adNavStudents: string; adNavCategories: string; adNavCourses: string; adNavComments: string; adCreateCategory: string;
  adOverview: string; adTotalStudents: string; adActiveTeachers: string; adPendingApprovals: string;
  adTotalCourses: string; adTotalEnrollments: string; adWaitingApproval: string; adReviewNow: string;
  adManage: string; adTopCourses: string; adByCategory: string; adNoChartData: string;
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
  // Home — hero slider (3 slides)
  hs1Badge: string; hs1Title: string; hs1Accent: string; hs1Desc: string; hs1Btn1: string; hs1Btn2: string;
  hs1F1Strong: string; hs1F1Sub: string; hs1F2Strong: string; hs1F2Sub: string;
  hs2Badge: string; hs2Title: string; hs2Accent: string; hs2Desc: string; hs2Btn1: string; hs2Btn2: string;
  hs2F1Strong: string; hs2F1Sub: string; hs2F2Strong: string; hs2F2Sub: string;
  hs3Badge: string; hs3Title: string; hs3Accent: string; hs3Desc: string; hs3Btn1: string; hs3Btn2: string;
  hs3F1Strong: string; hs3F1Sub: string; hs3F2Strong: string; hs3F2Sub: string;
  // Home — category + reviews headers + browse all
  homeCatTitle: string; homeCatSubtitle: string;
  homeRevTag: string; homeRevTitle: string; homeRevAccent: string; homeRevDesc: string;
  homeBrowseAll: string;
  // Home — about section
  aboutTag: string; aboutTitle: string; aboutAccent: string; aboutDesc: string;
  aboutC1Label: string; aboutC1Title: string; aboutC1Desc: string; aboutC1Stat: string;
  aboutC2Label: string; aboutC2Title: string; aboutC2Desc: string; aboutC2Stat: string;
  aboutC3Label: string; aboutC3Title: string; aboutC3Desc: string; aboutC3Stat: string;
  aboutC4Label: string; aboutC4Title: string; aboutC4Desc: string; aboutC4Stat: string;
  aboutC5Label: string; aboutC5Title: string; aboutC5Desc: string; aboutC5Stat: string;
  aboutQuote: string; aboutQuoteStat: string;
  // Home — community ("Join Our Community")
  commTag: string; commTitle: string; commAccent: string; commDesc: string;
  commFbTitle: string; commFbDesc: string; commFbStat1: string; commFbStat2: string;
  commYtTitle: string; commYtDesc: string; commYtStat1: string; commYtStat2: string;
  commFreeTitle: string; commFreeDesc: string; commFreeStat1: string; commFreeStat2: string;
  // Footer
  footBrandDesc: string; footExplore: string; footCompany: string; footAppTitle: string;
  footLinkCourses: string; footLinkInstructors: string; footLinkStore: string; footLinkFree: string;
  footLinkAbout: string; footLinkSuccess: string; footLinkPrivacy: string; footLinkTerms: string;
  footAppDesc: string; footAppGetOn: string; footAppDownloadOn: string;
  footCopyright: string; footBotHome: string; footBotAbout: string; footBotContact: string; footBotPrivacy: string;
}

const EN: Translations = {
  navTracks: 'Tracks', navCourses: 'Courses', navVision: 'Vision', navLogin: 'Login', navLive: 'Live', navWishlist: 'Wishlist',
  navLiveFree: 'Free live', navLiveScheduled: 'Course live', navLiveNone: 'No live class right now', navLiveViewAll: 'View all live classes',
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
  recoTitle: 'Recommended for you', recoSubPrefs: 'Hand-picked from the topics you chose at signup', recoSubPopular: 'Popular courses learners love right now',
  coursesLoading: 'Courses loading...', coursesLoadingDesc: 'Please wait, courses are loading.',
  coursesNone: 'No course available', coursesNoneDesc: 'No courses have been published yet. Check back later.',
  coursesNoMatch: 'No matching course found', coursesNoMatchDesc: 'No course matched your search term.',
  coursesAllTitle: 'All Courses', coursesSearchHint: 'Search by title, category, instructor, level, or description.',
  coursesSearchLabel: 'Search courses', coursesSearchPlaceholder: 'Type a course name, category, or instructor...',
  coursesBackHome: 'Back To Home',
  courseCategory: 'Category:', courseInstructor: 'Instructor:', courseLessons: 'Lessons:',
  courseDuration: 'Duration:', coursePrice: 'Price:', courseSeeMore: 'See more',
  courseEnrolled: 'Enrolled', courseEnrollNow: 'Enroll Now', courseStartLearning: 'Start learning', courseDurationUnit: 'months', courseManage: 'Manage',
  coursesEyebrow: 'Course catalogue', coursesHeading: 'Explore Courses',
  coursesSubheading: 'Find the right course by category, level, price or rating.',
  coursesLoadFailed: 'Could not load courses', coursesLoadFailedDesc: 'Something went wrong. Please check your connection and try again.',
  filtersTitle: 'Filters', filterClearAll: 'Clear all', filterClose: 'Close filters',
  filterCategory: 'Category', filterLevel: 'Level', filterPrice: 'Price', filterRating: 'Rating',
  filterFree: 'Free', filterPaid: 'Paid', filterAndUp: '& up',
  resultsOf: 'of', resultsCourses: 'courses',
  sortBy: 'Sort by', sortPopular: 'Most popular', sortNewest: 'Newest', sortRating: 'Highest rated',
  sortPriceAsc: 'Price: low to high', sortPriceDesc: 'Price: high to low', sortTitle: 'Title (A–Z)',
  viewToggleLabel: 'View mode', viewGrid: 'Grid view', viewList: 'List view',
  paginationLabel: 'Pagination', paginationPrev: 'Prev', paginationNext: 'Next',
  ratingsLabel: 'ratings', courseStatsLabel: 'Course statistics',
  wishlistAdd: '♡ Add to Wishlist', wishlistRemove: '✓ In Wishlist',
  courseCompleted: 'Completed', tcMarkCompleted: '✓ Mark Completed', tcMarkOngoing: '↺ Mark Ongoing',
  feature1Title: 'Outcome-based curriculum', feature1Desc: 'Follow role-focused modules designed around practical, job-ready outcomes.',
  feature2Title: 'Progress and performance analytics', feature2Desc: 'Track completion, assessment scores, and learning consistency in one dashboard.',
  feature3Title: 'Mentor-guided growth', feature3Desc: 'Get structured feedback and guidance to accelerate your learning path.',
  wfTag: '⚙️ How It Works',
  wfTitle: 'Everything you get,', wfTitleAccent: 'in one flow',
  wfSubtitle: 'From live classes to smart notes — a complete learning flow built to keep you consistent, exam-ready, and a step ahead.',
  wfF1Label: 'Recorded Video Lessons', wfF1Desc: 'Watch every course lesson anytime and resume right where you left off.',
  wfF2Label: 'Live Classes & Recordings', wfF2Desc: 'Join scheduled live classes, or replay the recording whenever you want.',
  wfF3Label: 'Practice Quizzes (MCQ)', wfF3Desc: 'Lesson-wise MCQ quizzes to test and lock in every concept.',
  wfF4Label: 'Exams & Results', wfF4Desc: '1st, 2nd & final exams with PDF submission and teacher grading.',
  wfF5Label: 'Practice Materials', wfF5Desc: 'Board questions, model tests & notes shared by your teacher — ready to download.',
  wfF6Label: 'Leaderboard & Ranking', wfF6Desc: 'See exactly where you rank among classmates by quiz performance.',
  wfF7Label: 'Certificates', wfF7Desc: 'Earn a certificate of completion once you finish a course.',
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
  cdFreeLiveTitle: 'Free live classes', cdFreeLiveLead: 'Join this course\'s live classes free — even without enrolling. Follow to get notified the moment the teacher goes live.', cdFollow: 'Follow free live classes', cdFollowing: 'Following — we\'ll notify you', cdFollowLogin: 'Log in to follow',
  teEvalButton: 'Teacher Evaluation',
  teTitle: 'Teacher Evaluation',
  teLead: 'Rate your teacher(s) for this completed course. Your feedback helps them improve.',
  teAnonNote: 'Your evaluation is anonymous — teachers see only the overall ratings, never who submitted them.',
  teTeaching: 'Teaching quality',
  teKnowledge: 'Subject knowledge',
  teClarity: 'Clarity of explanation',
  teSupport: 'Support & responsiveness',
  teOverall: 'Overall',
  teCommentPh: 'Optional — share what went well or what could be better…',
  teSubmit: 'Submit evaluation',
  teSubmitting: 'Submitting…',
  teSubmitted: 'Submitted',
  teUpdate: 'Update evaluation',
  teLoginMsg: 'Please log in to evaluate the teacher.',
  teLoginBtn: 'Log in',
  teNotEnrolled: 'Only enrolled students can evaluate this course.',
  teBrowse: 'Browse courses',
  teNotCompleted: 'This course is not completed yet. Teacher evaluation opens once it is marked completed.',
  teBackToCourse: 'Back to course',
  teNoTeachers: 'No teacher is assigned to this course yet.',
  teGenericErr: 'Could not load the evaluation. Please try again later.',
  cdIncludes: 'This course includes', cdIncLive: '3 live classes', cdFree: 'Free', cdIncVideos: 'Video lessons', cdIncPractice: 'Practice materials',
  cdIncStudents: 'Students enrolled', cdIncCert: 'Certificate of completion', cdPriceLabel: 'Course price', cdContinue: 'Continue Learning →', cdRatings: 'ratings',
  cdRateThis: '⭐ Rate this course', cdClose: 'Close', cdInWishlist: 'In Wishlist', cdAddWishlist: 'Add to Wishlist', cdUpdating: 'Updating…', cdAdding: 'Adding…',
  cdCurriculum: 'Course content', cdLessonsWord: 'lessons', cdFreePreview: 'free preview', cdCurriculumEmpty: 'The lesson list will appear here once the instructor adds content.', cdMinShort: 'min', cdReviewsTitle: 'Ratings & reviews',
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
  profileInstructorArea: 'Instructor Area', profileAdminArea: 'Admin Area', profileCourses: 'Courses', profileTeacherNoBio: 'Add a short bio so students can learn about you.',
  profileManageCourses: 'Manage Courses & Live', profileBrowseCourses: 'Browse Courses', profileHome: 'Home',
  profileAdminPanel: 'Admin Dashboard', profileCourseManager: 'Course Manager', profileInstructors: 'Instructors', profileYoutube: 'YouTube',
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
  loginOrContinue: 'or continue with', loginGoogle: 'Continue with Google',
  registerEyebrow: 'Create account', registerTitle: 'Join the learning platform.',
  registerLead: 'Create your learning profile to track courses, quizzes, assignments, and monitor your progress all in one place.',
  registerNewLearner: 'New learner', registerStartStrong: 'Start strong from day one',
  registerF1Title: 'Personal dashboard', registerF1Desc: 'Get a clean progress view for every learning path you join.',
  registerF2Title: 'Structured onboarding', registerF2Desc: 'Move into a guided setup flow with a focused interface.',
  registerF3Title: 'Black-blue identity', registerF3Desc: 'Consistent with the home and login pages, visually and functionally.',
  registerFullName: 'Full name', registerFullNamePlaceholder: 'Your name', registerFullNameError: 'Enter your full name.',
  registerMobile: 'Mobile number', registerMobilePlaceholder: 'e.g. 01XXXXXXXXX', registerMobileError: 'Enter a valid mobile number.',
  registerGroup: 'Group (optional)', registerGroupPlaceholder: 'Select your group', registerGroupScience: 'Science', registerGroupCommerce: 'Commerce', registerGroupArts: 'Arts', registerGroupOthers: 'Others',
  registerParentEmail: "Parent / guardian email", registerParentEmailPlaceholder: 'parent@example.com', registerParentEmailError: 'Enter a valid parent email.',
  registerRole: 'Select role', registerRolePlaceholder: 'Select one', registerStudent: 'Student', registerTeacher: 'Teacher', registerRoleError: 'Please select Student or Teacher.',
  registerPasswordPlaceholder: 'Create a password', registerConfirmPassword: 'Confirm password', registerRepeatPassword: 'Repeat password', registerConfirmPasswordError: 'Confirm your password.',
  registerTerms: 'I agree to the learning platform terms.', registerSubmitting: 'Submitting...', registerBtn: 'Create account',
  registerHaveAccount: 'Already have an account?', registerLoginHere: 'Create one', registerGoHome: 'Go Home',
  registerOrSignUp: 'or sign up with', registerGoogle: 'Sign up with Google', registerGoLogin: 'Sign in',
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
  lbScopeLabel: 'Leaderboard scope', lbScopeGlobal: 'Global', lbScopeCourse: 'My Courses', lbLoadFailed: 'Leaderboard could not be loaded.',
  lbGlobalTitle: 'Global Leaderboard', lbGlobalSub: 'Top learners across the whole platform',
  notifEyebrow: 'Notifications', notifTitle: 'Your notifications', notifSub: 'Everything that happened across your courses.', notifMarkAll: 'Mark all as read',
  notifAll: 'All', notifUnread: 'Unread', notifEmpty: 'No notifications yet', notifNoUnread: 'You are all caught up', notifEmptyDesc: 'New lessons, quiz results and reminders will show up here.',
  annEyebrow: 'Announcements', annTitle: 'Announcements', annSub: 'Latest updates and notices from your instructors.', annEmpty: 'No announcements right now', annEmptyDesc: 'When there is something new, it will appear here.', annExpires: 'Active until',
  timeJustNow: 'Just now', timeMinutesAgo: 'minutes ago', timeHoursAgo: 'hours ago', timeDaysAgo: 'days ago',
  liveNow: 'Live now', liveUpcoming: 'Upcoming', liveEnded: 'Ended', liveMissed: 'Missed', liveJoinNow: 'Join Now →', liveJoin: 'Join Class',
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
  siLead: 'Complete your profile to continue', siTitle2: 'Student Information', siTitle3: 'Academic Information', siTitle4: 'Parent/Guardian Information',
  siDesc2: 'Tell us about yourself.', siDesc3: 'Your board, institute and location details.',
  siDesc4: 'For emergency & communication purposes.',
  siFullName: 'Full Name', siDob: 'Date of Birth', siGender: 'Gender', siGenderMale: 'Male', siGenderFemale: 'Female', siGenderOther: 'Other',
  siMobile: 'Student Mobile Number', siEmail: 'Student Email', siPhoto: 'Profile Picture (optional)',
  siPhotoHint: 'JPG, PNG or WEBP — max 5MB.', siPhotoRemove: 'Remove',
  siBoard: 'Board', siBoardPick: 'Select your board', siInstitute: 'Institute Name', siInstitutePlaceholder: 'e.g. Dhaka College',
  siSscYear: 'SSC Exam Year', siSscYearPick: 'Select year', siThana: 'Thana/Upazila', siThanaPlaceholder: 'Start typing your thana/upazila…',
  siDistrict: 'District', siDistrictPlaceholder: 'Start typing your district…',
  siFatherName: "Father/Guardian Name", siMotherName: "Mother's Name", siParentMobile: "Parent's Mobile Number", siParentEmailOpt: "Parent's Email (optional)",
  siOccupation: "Guardian's Occupation", siReferral: 'How did you hear about Nirvoor E-learning?',
  siAgreementTitle: 'Agreement', siAgreeCorrect: 'I confirm that all information is correct.',
  siAgreeData: 'I agree to store my data for emergency & analytical purposes.',
  siAgreeNotif: 'I agree to receive regular notifications & promotional messages.',
  siBack: '← Back', siNext: 'Next →', siConfirm: 'Confirm & Continue', siSaving: 'Saving…',
  siFieldRequired: 'This field is required.', siPickRequired: 'Please select an option.',
  siAgreeRequired: 'Please accept the required agreements to continue.', siSaveFailed: 'Could not save your info. Please try again.',
  profileReferral: 'Heard about us via',
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
  tcSideEnrollments: 'Enrollments', tcSideProfile: 'My Profile', tcBackToSite: 'Back to Site', tcSideLive: 'Free Live Class',
  tcLiveTitle: 'Free Live Class', tcLiveSub: 'Start a public live class anyone can join — no login or registration needed.',
  tcLiveStartHeading: 'Start a new free live class',
  tcLivePickCourse: 'Select a course…',
  tcLiveGoLive: 'Go Live', tcLiveNote: 'Once you go live, share the link and anyone can join instantly as a guest.',
  tcLiveMine: 'My Live Classes', tcLiveNoneMine: 'You have no active free live classes. Start one above.',
  tcLiveEnded: 'Ended', tcLiveCopy: 'Copy Link', tcLiveCopied: 'Copied', tcLiveOpenRoom: 'Open Live Room', tcLiveEnd: 'End',
  flBadge: 'Live Now', flTitle: 'Free Live Classes', flSubtitle: 'Join a live class right now — completely free, no login or registration required.',
  flRefresh: 'Refresh', flLoading: 'Loading live classes...',
  flNoneTitle: 'No live classes right now', flNoneDesc: 'There are no free live classes streaming at the moment. Check back soon!',
  flLiveNow: 'Live Now', flHostedBy: 'Hosted by', flJoin: 'Join Class',
  flKindCourse: 'Course', flKindFree: 'Free',
  flGuestHint: 'You can join any free live class without an account — just enter your name.',
  flJoinModalTitle: 'Join the live class', flJoinModalDesc: 'Enter a name to show to others, then jump right in.',
  flNameLabel: 'Your name (optional)', flNamePlaceholder: 'e.g. Rahim', flCancel: 'Cancel', flEnterRoom: 'Enter Room',
  tcCoursesSub: 'Manage course content, thumbnails, and publish status.', tcNewCourse: 'New Course', tcSearchCourses: 'Search courses...',
  tcThTitle: 'Title', tcThCategory: 'Category', tcThLevel: 'Level', tcThPrice: 'Price', tcThLessons: 'Lessons',
  tcThStudents: 'Students', tcThRating: 'Rating', tcThStatus: 'Status', tcThActions: 'Actions', tcNoRatings: 'No ratings',
  tcBtnStudents: 'Enrolled Students', tcBtnLessons: 'Manage Lessons', tcNoCourse: 'No course found.', tcLoadingCourses: 'Loading courses...',
  tcBackToCourses: 'Back to Courses', tcLessonsFor: 'Lessons for', tcLessonsSub: 'Add or edit lesson videos and resources from this panel.',
  tcLiveSchedule: 'Schedule Live Class', tcAddLesson: 'Add Lesson',
  tcLoadingLessons: 'Loading lessons...', tcPreview: 'Preview', tcOpenVideo: 'Watch Video', tcThumbnail: 'View Thumbnail',
  tcAddQuiz: 'Add Quiz', tcNoLesson: 'No lesson found for this course.',
  tcScheduledLive: 'Scheduled Live Classes', tcLivePanelSub: "Schedule, start, join and end this course's live sessions from here.",
  tcLoadingLive: 'Loading live classes...', tcStart: 'Start Class', tcEnd: 'End Class', tcNoLiveScheduled: 'No live class scheduled yet.',
  tcEndInRoomHint: 'Opens the class — press “End class” inside to stop and save the recording.', tcRecReady: 'Recording ready', tcRecNone: 'No recording',
  tcCreateLiveTitle: 'Create Live Class', tcScheduledAt: 'Scheduled At', tcLiveTitlePlaceholder: 'e.g. Chapter 5 Discussion',
  tcLiveDescPlaceholder: 'What the class is about...', tcCreateLiveBtn: 'Create Live Class',
  tcInstructorName: 'Instructor Name', tcLevelLabel: 'Level', tcPriceLabel: 'Price (0 = Free)', tcDurationLabel: 'Duration (months)',
  tcThumbnailUrl: 'Thumbnail URL', tcUploadThumb: 'Or Upload Thumbnail Image', tcPublishCourse: 'Publish course', tcSaveCourse: 'Save Course',
  courseStartDate: 'Start date', courseEndDate: 'End date',
  courseDateHint: 'Students can enroll until the start date. Leave blank to keep enrollment always open.',
  enrollDaysLeft: 'days left to enroll', enrollLastDay: 'Last day to enroll!', enrollClosed: 'Enrollment closed', courseStartsOn: 'Course starts',
  discountOff: 'OFF', discountPercentLabel: 'Discount (%)', discountStartLabel: 'Discount start', discountEndLabel: 'Discount end',
  discountHint: 'During the discount window the course price is reduced by this percent. Leave blank for no discount.',
  discountInvalid: 'Discount needs a percent between 1–100 and a valid start–end date range.',
  courseDatesInvalid: 'Course end date cannot be before the start date.',
  exMarksRange: 'Invalid marks — must be between 0 and {max}.',
  agTitle: 'My Tasks', agJoin: 'Join', agNavLabel: 'Todo', agEmpty: 'Nothing due right now. Explore a new course!',
  agViewAll: 'View all', agAllCaught: 'All caught up! 🎉', agOverdue: 'Overdue', agToday: 'Today', agUpcoming: 'Upcoming',
  agPillOverdue: 'task(s) overdue', agPillToday: 'task(s) today', agPillUpcoming: 'upcoming', agPillLive: 'LIVE NOW',
  agKindLive: 'Live class', agKindExam: 'Exam', agKindEnding: 'Course ending',
  tcLessonTitle: 'Lesson Title', tcVideoType: 'Video Type', tcOrderIndex: 'Order Index', tcVideoUrl: 'Video URL',
  tcUploadVideo: 'Or Upload Video File', tcUploadingVideo: 'Uploading video...', tcLessonThumb: 'Lesson Thumbnail (optional)',
  tcResourceUrl: 'Resource URL (optional)', tcFreePreview: 'Free preview lesson', tcSaveLesson: 'Save Lesson',
  tcEnrolled: 'Enrolled', tcIssue: 'Issue', tcEditCourse: 'Edit Course', tcEditLesson: 'Edit Lesson',
  nbTitle: 'Notifications', nbMarkAll: 'Mark all as read', nbEmpty: 'No notifications', nbViewAll: 'View all notifications →',
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
  recManageTitle: '🎬 Class Recordings', recManageSub: 'Recorded live classes for this course. Rename or delete them.',
  recNone: 'No recordings for this course yet.', recLoading: 'Loading recordings…',
  recStatusReady: 'Ready', recStatusProcessing: 'Processing…', recStatusFailed: 'Failed',
  recTitleRequired: 'Title is required.', recUpdated: 'Recording updated.', recUpdateFailed: 'Failed to update recording.',
  recDeleteConfirm: 'Delete this recording? This cannot be undone.', recDeleted: 'Recording deleted.', recDeleteFailed: 'Failed to delete recording.', recWatchFailed: 'Could not open the recording.',
  courseDeleteConfirm: '⚠️ Permanently delete this course?\n\nThis will remove EVERYTHING tied to it — lessons & videos, PDFs and practice materials, exams and student submissions, live classes, ratings, comments, enrolments and payments — from both the database and the server storage.\n\nThis action CANNOT be undone and the course can NOT be restored.\n\nType-check done? Press OK to delete permanently.',
  courseDeleted: 'Course and all of its content were permanently deleted.',
  exSectionTitle: 'My Exams', exCourseTitle: 'Course:', exFirst: '1st Exam', exSecond: '2nd Exam', exThird: '3rd Exam', exFinal: 'Final Exam',
  exLocked: 'Locked', exNotAvailable: 'Not available yet', exPending: 'Pending', exSubmitted: 'Submitted', exGraded: 'Graded',
  exMissed: 'Missed', exClosed: 'Closed — deadline passed', exDeadline: 'Deadline', exInstruction: 'Instruction', exQuestion: 'Question',
  exViewPdf: 'View Question Paper', exUpload: 'Choose answer file', exSubmit: 'Submit', exSubmitting: 'Submitting…', exDaysLeft: 'days left',
  exHr: 'hr', exMin: 'min', exLeft: 'left',
  exDayLeft: 'day left', exYourAnswer: 'Your answer', exMarks: 'Marks', exFeedback: 'Feedback', exAwaitingResult: 'Awaiting result…',
  exManageExams: 'Exams', exManageSub: 'Set questions & deadlines, and grade submissions.', exTitlePlaceholder: 'Exam title', exInstructionPlaceholder: 'Note / instruction for students',
  exTotalMarks: 'Total marks', exDurationMin: 'Duration (min)', exDeadlineField: 'Deadline', exSaveExam: 'Save Exam',
  exUploadQuestion: 'Upload Question PDF', exReplaceQuestion: 'Replace Question PDF', exPublished: 'Live', exUnpublished: 'Locked (no question)',
  exViewSubmissions: 'View Submissions', exNoSubmissions: 'No submissions yet', exDownload: 'Download', exSaveGrade: 'Save', exSubmittedAt: 'Submitted',
  exUpcoming: 'Upcoming', exStartsIn: 'Starts in', exStartDate: 'Started', exDetails: 'View details', exDay: 'day', exDays: 'days', exGradedByAdmin: 'Graded by admin',
  exTeacherSub: 'View questions and grade student submissions.', exAdminCreatesNote: 'Exam is set by admin',
  exMarksSaved: 'Marks saved.', exMarksSaveFailed: 'Could not save marks.',
  exAdminViewOnly: 'View only — the course teacher gives the marks & feedback.', exNotGraded: 'Not graded yet',
  exStarted: 'Exam Started', exDurationDays: 'Exam duration', exDurationHint: 'The exam timer starts the moment you upload the question. Students get this long to submit answers.',
  exEstimatedDate: 'Estimated start date', exEstimatedHint: 'Shown to students as a countdown — it does NOT start the exam.', exEstimatedStart: 'Estimated start', exStartingSoon: 'Starting soon',
  ecLiveClasses: 'Live Classes', ecScheduled: 'scheduled', ecLiveNow: 'Live now', ecJoinNow: 'Join Now', ecNoLive: 'No live class scheduled for this course yet.', ecUpcoming: 'Upcoming',
  ecHubPractice: 'Practice', ecHubPracticeSub: 'Sharpen your skills', ecHubLive: 'Live Class & Recordings', ecHubLiveSub: 'Join live & watch recordings',
  ecHubRecord: 'Course Videos', ecHubRecordSub: 'Lessons, notes & quizzes', ecHubExam: 'Exam', ecHubExamSub: 'Take your exams', ecComingSoon: 'Coming soon — stay tuned!', ecAllCourses: 'All Courses',
  pmTitle: 'Practice Materials', pmSub: 'Upload PDFs/DOCs students can study (board questions, model tests, notes…).', pmStudentSub: 'Study materials shared by your instructor.',
  pmFieldName: 'Field name (e.g. Previous Board Questions)', pmDescPlaceholder: 'Short description (optional)',
  pmChooseFile: 'Choose PDF / DOC', pmAdd: 'Add material', pmOpen: 'Open', pmNone: 'No practice materials yet', pmNoneDesc: 'Practice materials will appear here once your instructor uploads them.',
  pmTypeBoard: 'Previous Board Question', pmTypeModel: 'Special Model Test Question', pmTypeLabel: 'Question type',
  pmLocked: 'Locked', pmLockedMsg: 'No questions have been added here yet. Please check back soon.', pmBack: 'Back',
  // AI Writing
  aiwGateTitle: 'AI Writing', aiwViewResult: 'View result', aiwStart: 'Start writing', aiwLockedMsg: 'No writing tasks have been added here yet. Please check back soon.',
  aiwAdminTitle: 'AI Writing Tasks', aiwAdminSub: 'Create writing tasks; students submit once and the AI grades it out of 100.',
  aiwTypeLabel: 'Writing type', aiwTitlePlaceholder: 'Task title (e.g. My Village)',
  aiwInstructionsPlaceholder: 'Instructions for students (e.g. write 120-150 words)…',
  aiwTopicsPlaceholder: 'Topics — one per line. The student picks one.', aiwTopicsHint: 'One topic per line — the student chooses one of them.',
  aiwPublishNow: 'Published (visible to students)', aiwAddTask: 'Add task', aiwNoTasks: 'No writing tasks yet.',
  aiwTopicsCount: 'topics', aiwSubsCount: 'submissions', aiwUnpublish: 'Unpublish', aiwPublish: 'Publish',
  aiwSubmissions: 'Submissions', aiwLoadingSubs: 'Loading submissions…', aiwNoSubs: 'No submissions yet.',
  aiwAiGave: 'AI gave', aiwAdjusted: 'Adjusted', aiwOffTopic: 'Off topic', aiwViewText: 'View text', aiwViewFile: 'View file', aiwChangeMark: 'Change mark',
  aiwTitleRequired: 'Task title is required.', aiwTopicsRequired: 'Add at least one topic (one per line).',
  aiwSaved: 'Task saved.', aiwDeleteWarn: 'This task and all its student submissions will be permanently deleted.',
  aiwDeleted: 'Task deleted.', aiwMarksRange: 'Marks must be between 0 and 100.', aiwMarkUpdated: 'Mark updated.',
  aiwBackToCourse: 'Back to course', aiwLoading: 'Loading…', aiwTaskNotFound: 'This task could not be found.',
  aiwResultTitle: 'Your Result', aiwAdjustedNote: 'Your teacher adjusted this mark', aiwOffTopicNote: 'This writing did not match the chosen topic.',
  aiwBreakdown: 'Score breakdown', aiwFeedback: 'Feedback',
  aiwGrammar: 'Grammar', aiwSpelling: 'Spelling', aiwStructure: 'Structure', aiwRelevance: 'Relevance',
  aiwYourWriting: 'Your writing', aiwTranscribed: 'Transcribed text',
  aiwChecking: 'AI is checking your writing…', aiwCheckingSub: 'This can take up to a minute. Please wait.',
  aiwOneAttempt: 'You get ONE attempt for this task. Make it count!', aiwPickTopic: 'Pick a topic', aiwYourAnswer: 'Your writing',
  aiwRetake: 'Try again', aiwRetakeNote: 'You can re-take this task — only your latest attempt is kept.',
  aiwRemoveFile: 'Remove', aiwFileChosenNote: 'A file is attached — submit to have it checked, or remove it to type instead.',
  aiwTypePlaceholder: 'Write your answer here…', aiwWords: 'words', aiwOr: 'OR', aiwUploadHere: 'Upload a photo or PDF',
  aiwUploadHint: 'JPG, PNG or PDF — a clear photo of your handwriting works best (max 10 MB).', aiwSubmit: 'Submit for AI checking',
  aiwFileTypes: 'Only JPG, PNG or PDF files are allowed.', aiwFileTooBig: 'File too large — maximum 10 MB.',
  aiwGradedToast: 'Your writing has been graded!', aiwAlreadyAttempted: 'You have already attempted this task.',
  aiwSubmitFailed: 'Could not check your writing. Please try again.',
  aiwStatusLive: 'Live', aiwStatusDraft: 'Draft (hidden)',
  navAdmin: 'Admin Panel',
  adCategories: 'Categories', adCategoriesSub: 'Create categories, then build courses inside each one.',
  adCategoryNamePlaceholder: 'New category name (e.g. SSC 2027)', adAddCategory: 'Add Category',
  adNoCategories: 'No categories yet. Create one to start organizing courses.',
  adManageCourses: 'Manage Courses', adSetImage: 'Set Image', adAuthorCourses: 'Manage / Author Courses',
  tcBackToAdmin: 'Back to Admin', tcMyCoursesLive: 'My Live Courses', tcLiveCoursesSub: 'Run live classes for the courses you are appointed to.',
  tcManageLive: 'Manage Live Classes', tcSelectCategory: 'Select a category', tcNoCategoriesHint: 'No categories yet — create one in the Admin → Categories tab.',
  tcAppointTeacher: 'Appoint Teacher(s)', tcSelectTeacher: 'No approved teachers yet',
  tcAppointMulti: 'select one or more', tcSelectedCount: 'selected', cdCourseTeachers: 'Your Instructors', tcChooseTeachers: 'Select teacher(s)…',
  adTeachers: 'Teachers', adStudents: 'Students', adComments: 'Comments', adAnnouncements: 'Announcements', adStoreItems: 'Store Items',
  adNavTeachers: 'Manage Teachers', adNavStudents: 'Manage Students', adNavCategories: 'Manage Categories', adNavCourses: 'Manage Courses', adNavComments: 'Manage Comments', adCreateCategory: 'Create a new category',
  adOverview: 'Overview of your platform', adTotalStudents: 'Total Students', adActiveTeachers: 'Active Teachers',
  adPendingApprovals: 'Pending Approvals', adTotalCourses: 'Total Courses', adTotalEnrollments: 'Total Enrollments',
  adWaitingApproval: 'teacher(s) waiting for approval.', adReviewNow: 'Review Now →',
  adManage: 'Manage', adTopCourses: 'Top courses by enrollment', adByCategory: 'Courses by category',
  adNoChartData: 'No data to show yet.',
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
  // Home — hero slider
  hs1Badge: '🎯 Final Preparation', hs1Title: 'SSC 2027', hs1Accent: 'Complete Course',
  hs1Desc: 'Get complete preparation — all subjects in one place. Bengali, English, Math and everything.',
  hs1Btn1: 'Explore Courses', hs1Btn2: 'All Categories',
  hs1F1Strong: 'SSC 2027', hs1F1Sub: 'Full Syllabus', hs1F2Strong: 'Live MCQ', hs1F2Sub: 'Practice Daily',
  hs2Badge: '🏆 Top Rated', hs2Title: 'HSC 2027', hs2Accent: 'Master Class',
  hs2Desc: 'Complete HSC preparation with Admission English & Skills Development — with expert teachers.',
  hs2Btn1: 'Enroll Now', hs2Btn2: 'All Courses',
  hs2F1Strong: 'HSC 2027', hs2F1Sub: 'Expert Teachers', hs2F2Strong: 'Admission', hs2F2Sub: 'English Special',
  hs3Badge: '⚡ New Course', hs3Title: 'Skills', hs3Accent: 'Development',
  hs3Desc: 'Prepare yourself for the future — communication, critical thinking and more.',
  hs3Btn1: 'Get Started', hs3Btn2: 'View Details',
  hs3F1Strong: 'Skills', hs3F1Sub: 'Development', hs3F2Strong: 'Career', hs3F2Sub: 'Ready',
  // Home — category + reviews headers + browse all
  homeCatTitle: 'Learn by Category', homeCatSubtitle: 'Choose the right course based on your goals',
  homeRevTag: '💬 Reviews', homeRevTitle: 'Student', homeRevAccent: 'Feedback',
  homeRevDesc: 'Real stories from learners who study with us.',
  homeBrowseAll: 'Browse All',
  // Home — about section
  aboutTag: '💡 About Us', aboutTitle: 'About', aboutAccent: '"Nirvor Nije Sikhi"',
  aboutDesc: 'Not the biggest. The bravest. Built for SSC & HSC students who want to conquer English.',
  aboutC1Label: 'Mission', aboutC1Title: 'Focused Learning',
  aboutC1Desc: 'Clear guidance, structured content, and consistent practice — so every student can progress fast.',
  aboutC1Stat: 'Daily Smart Tasks',
  aboutC2Label: 'Vision', aboutC2Title: 'Future Ready',
  aboutC2Desc: 'We build confidence, skills, and mindset for exams and real-life communication.',
  aboutC2Stat: 'Exam + Career Ready',
  aboutC3Label: 'Community', aboutC3Title: 'Learn Together',
  aboutC3Desc: 'Thousands of learners, mentors, and teachers — all helping each other grow.',
  aboutC3Stat: 'Supportive Network',
  aboutC4Label: 'Mentors', aboutC4Title: 'Top Teachers',
  aboutC4Desc: 'Learn from experienced teachers with proven methods and exam-friendly guidance.',
  aboutC4Stat: 'Verified Experts',
  aboutC5Label: 'Growth', aboutC5Title: 'Track Progress',
  aboutC5Desc: 'Clear milestones and feedback help you measure improvement every week.',
  aboutC5Stat: 'Progress Dashboard',
  aboutQuote: 'We believe every student can master English with the right system and consistent guidance.',
  aboutQuoteStat: 'Touch & Solve',
  // Home — community
  commTag: '🌐 Our Family', commTitle: 'Join Our', commAccent: 'Community',
  commDesc: 'Connect with thousands of students — Learn together, Grow together.',
  commFbTitle: 'Facebook Group', commFbDesc: 'Join our Facebook group. Ask questions, get answers.',
  commFbStat1: '👥 10,000+ Members', commFbStat2: '🔥 Daily Posts',
  commYtTitle: 'YouTube Channel', commYtDesc: 'Get free video lessons, tips and tricks on our YouTube channel.',
  commYtStat1: '▶ Free Videos', commYtStat2: '📺 Weekly Upload',
  commFreeTitle: 'Free Classes', commFreeDesc: 'Learn for free — access our curated free classes here.',
  commFreeStat1: '✅ Completely Free', commFreeStat2: '🚀 Start Now',
  // Footer
  footBrandDesc: 'We solve just in touch. A learning platform built with a clean structure, stronger outcomes, and a smooth student journey.',
  footExplore: 'Explore', footCompany: 'Company', footAppTitle: 'Mobile App',
  footLinkCourses: 'Courses', footLinkInstructors: 'Instructors', footLinkStore: 'Store', footLinkFree: 'Free Classes',
  footLinkAbout: 'About Us', footLinkSuccess: 'Success Story', footLinkPrivacy: 'Privacy Policy', footLinkTerms: 'Terms of Use',
  footAppDesc: 'Learn anywhere, anytime with our mobile app.', footAppGetOn: 'Get it on', footAppDownloadOn: 'Download on the',
  footCopyright: '© 2026 Touch & Solve. All rights reserved.',
  footBotHome: 'Home', footBotAbout: 'About', footBotContact: 'Contact', footBotPrivacy: 'Privacy',
};

const BN: Translations = {
  navTracks: 'ট্র্যাকস', navCourses: 'কোর্সসমূহ', navVision: 'আমাদের লক্ষ্য', navLogin: 'লগইন', navLive: 'লাইভ', navWishlist: 'উইশলিস্ট',
  navLiveFree: 'ফ্রি লাইভ', navLiveScheduled: 'কোর্স লাইভ', navLiveNone: 'এখন কোনো লাইভ ক্লাস নেই', navLiveViewAll: 'সব লাইভ ক্লাস দেখুন',
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
  recoTitle: 'আপনার জন্য প্রস্তাবিত', recoSubPrefs: 'সাইনআপে বেছে নেওয়া বিষয় থেকে বাছাই করা', recoSubPopular: 'এই মুহূর্তে জনপ্রিয় কোর্সসমূহ',
  coursesLoading: 'কোর্স লোড হচ্ছে...', coursesLoadingDesc: 'দয়া করে একটু অপেক্ষা করুন।',
  coursesNone: 'কোনো কোর্স পাওয়া যায়নি', coursesNoneDesc: 'এখনও কোনো কোর্স publish করা হয়নি। পরে আবার চেক করুন।',
  coursesNoMatch: 'কোনো মিলে যাওয়া কোর্স পাওয়া যায়নি', coursesNoMatchDesc: 'আপনার সার্চের সাথে মিলে এমন কোনো কোর্স নেই।',
  coursesAllTitle: 'সকল কোর্স', coursesSearchHint: 'শিরোনাম, বিষয়, প্রশিক্ষক, স্তর বা বিবরণ দিয়ে খুঁজুন।',
  coursesSearchLabel: 'কোর্স খুঁজুন', coursesSearchPlaceholder: 'কোর্সের নাম, বিষয় বা প্রশিক্ষক লিখুন...',
  coursesBackHome: 'হোমে ফিরুন',
  courseCategory: 'বিষয়:', courseInstructor: 'প্রশিক্ষক:', courseLessons: 'পাঠ:',
  courseDuration: 'সময়কাল:', coursePrice: 'মূল্য:', courseSeeMore: 'আরো দেখুন',
  courseEnrolled: 'ভর্তি হয়েছেন', courseEnrollNow: 'এখনই ভর্তি হন', courseStartLearning: 'শেখা শুরু করুন', courseDurationUnit: 'মাস', courseManage: 'ম্যানেজ',
  coursesEyebrow: 'কোর্স ক্যাটালগ', coursesHeading: 'কোর্স খুঁজুন',
  coursesSubheading: 'বিষয়, স্তর, মূল্য বা রেটিং অনুযায়ী আপনার উপযুক্ত কোর্সটি বেছে নিন।',
  coursesLoadFailed: 'কোর্স লোড করা যায়নি', coursesLoadFailedDesc: 'কিছু একটা সমস্যা হয়েছে। ইন্টারনেট সংযোগ দেখে আবার চেষ্টা করুন।',
  filtersTitle: 'ফিল্টার', filterClearAll: 'সব মুছুন', filterClose: 'ফিল্টার বন্ধ করুন',
  filterCategory: 'বিষয়', filterLevel: 'স্তর', filterPrice: 'মূল্য', filterRating: 'রেটিং',
  filterFree: 'ফ্রি', filterPaid: 'পেইড', filterAndUp: 'ও তার বেশি',
  resultsOf: 'এর মধ্যে', resultsCourses: 'কোর্স',
  sortBy: 'সাজান', sortPopular: 'সবচেয়ে জনপ্রিয়', sortNewest: 'নতুন আগে', sortRating: 'সর্বোচ্চ রেটিং',
  sortPriceAsc: 'মূল্য: কম থেকে বেশি', sortPriceDesc: 'মূল্য: বেশি থেকে কম', sortTitle: 'নাম (অ-ঔ)',
  viewToggleLabel: 'ভিউ মোড', viewGrid: 'গ্রিড ভিউ', viewList: 'লিস্ট ভিউ',
  paginationLabel: 'পেজিনেশন', paginationPrev: 'পূর্ববর্তী', paginationNext: 'পরবর্তী',
  ratingsLabel: 'রেটিং', courseStatsLabel: 'কোর্সের পরিসংখ্যান',
  wishlistAdd: '♡ উইশলিস্টে যোগ করুন', wishlistRemove: '✓ উইশলিস্টে আছে',
  courseCompleted: 'সম্পন্ন', tcMarkCompleted: '✓ সম্পন্ন করুন', tcMarkOngoing: '↺ চলমান করুন',
  feature1Title: 'ফলাফল-ভিত্তিক পাঠ্যক্রম', feature1Desc: 'বাস্তব, চাকরি-উপযোগী ফলাফলের উপর ভিত্তি করে রোল-কেন্দ্রিক মডিউল অনুসরণ করুন।',
  feature2Title: 'অগ্রগতি ও কর্মক্ষমতা বিশ্লেষণ', feature2Desc: 'একটি ড্যাশবোর্ডে সম্পন্নতা, মূল্যায়ন স্কোর ট্র্যাক করুন।',
  feature3Title: 'মেন্টর-গাইডেড বিকাশ', feature3Desc: 'আপনার শিক্ষার পথ ত্বরান্বিত করতে কাঠামোবদ্ধ গাইডেন্স পান।',
  wfTag: '⚙️ যেভাবে কাজ করে',
  wfTitle: 'যা যা পাচ্ছেন,', wfTitleAccent: 'সব এক ফ্লো-তে',
  wfSubtitle: 'লাইভ ক্লাস থেকে স্মার্ট নোট — একটি পূর্ণাঙ্গ শেখার ফ্লো, যা আপনাকে ধারাবাহিক, পরীক্ষা-প্রস্তুত আর সবসময় এক ধাপ এগিয়ে রাখে।',
  wfF1Label: 'রেকর্ডেড ভিডিও লেসন', wfF1Desc: 'যেকোনো সময় কোর্সের প্রতিটি লেসন দেখুন, যেখানে থেমেছিলেন সেখান থেকেই শুরু করুন।',
  wfF2Label: 'লাইভ ক্লাস ও রেকর্ডিং', wfF2Desc: 'শিডিউল করা লাইভ ক্লাসে যোগ দিন, অথবা যেকোনো সময় রেকর্ডিং রিপ্লে দেখুন।',
  wfF3Label: 'প্র্যাকটিস কুইজ (MCQ)', wfF3Desc: 'লেসন-ভিত্তিক MCQ কুইজ দিয়ে প্রতিটি কনসেপ্ট পাকা করুন।',
  wfF4Label: 'পরীক্ষা ও ফলাফল', wfF4Desc: '১ম, ২য় ও ফাইনাল পরীক্ষা — PDF জমা ও শিক্ষকের গ্রেডিংসহ।',
  wfF5Label: 'প্র্যাকটিস ম্যাটেরিয়াল', wfF5Desc: 'বোর্ড প্রশ্ন, মডেল টেস্ট আর নোট — শিক্ষকের শেয়ার করা, ডাউনলোডের জন্য প্রস্তুত।',
  wfF6Label: 'লিডারবোর্ড ও র‍্যাংকিং', wfF6Desc: 'কুইজের ফলাফলে সহপাঠীদের মধ্যে আপনি ঠিক কোথায় আছেন দেখে নিন।',
  wfF7Label: 'সার্টিফিকেট', wfF7Desc: 'কোর্স শেষ করলেই পেয়ে যান সম্পন্নের সার্টিফিকেট।',
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
  cdFreeLiveTitle: 'ফ্রি লাইভ ক্লাস', cdFreeLiveLead: 'এনরোল না করেও এই কোর্সের লাইভ ক্লাস ফ্রিতে করুন। Follow করলে টিচার লাইভে এলে সঙ্গে সঙ্গে নোটিফিকেশন পাবেন।', cdFollow: 'ফ্রি লাইভ ক্লাস Follow করুন', cdFollowing: 'Following — নোটিফিকেশন পাবেন', cdFollowLogin: 'Follow করতে লগইন করুন',
  teEvalButton: 'টিচার ইভ্যালুয়েশন',
  teTitle: 'টিচার ইভ্যালুয়েশন',
  teLead: 'এই সম্পন্ন কোর্সের টিচারকে রেটিং দিন। আপনার মতামত টিচারকে আরও ভালো হতে সাহায্য করবে।',
  teAnonNote: 'আপনার মূল্যায়ন গোপন — টিচার শুধু সামগ্রিক রেটিং দেখবেন, কে দিয়েছে তা কখনো দেখবেন না।',
  teTeaching: 'পড়ানোর মান',
  teKnowledge: 'বিষয়ের জ্ঞান',
  teClarity: 'বোঝানোর স্পষ্টতা',
  teSupport: 'সাহায্য ও সাড়া',
  teOverall: 'সামগ্রিক',
  teCommentPh: 'ঐচ্ছিক — কী ভালো লেগেছে বা কী আরও ভালো হতে পারত লিখুন…',
  teSubmit: 'মূল্যায়ন জমা দিন',
  teSubmitting: 'জমা হচ্ছে…',
  teSubmitted: 'জমা হয়েছে',
  teUpdate: 'মূল্যায়ন আপডেট করুন',
  teLoginMsg: 'টিচারকে মূল্যায়ন করতে অনুগ্রহ করে লগইন করুন।',
  teLoginBtn: 'লগইন',
  teNotEnrolled: 'শুধু এনরোল করা শিক্ষার্থীরাই এই কোর্স মূল্যায়ন করতে পারবে।',
  teBrowse: 'কোর্স দেখুন',
  teNotCompleted: 'এই কোর্সটি এখনো সম্পন্ন হয়নি। কোর্স সম্পন্ন হিসেবে চিহ্নিত হলে মূল্যায়ন চালু হবে।',
  teBackToCourse: 'কোর্সে ফিরে যান',
  teNoTeachers: 'এই কোর্সে এখনো কোনো টিচার অ্যাসাইন করা হয়নি।',
  teGenericErr: 'মূল্যায়ন লোড করা যায়নি। একটু পরে আবার চেষ্টা করুন।',
  cdIncludes: 'এই কোর্সে যা পাবেন', cdIncLive: '৩টি লাইভ ক্লাস', cdFree: 'ফ্রি', cdIncVideos: 'ভিডিও লেসন', cdIncPractice: 'প্র্যাকটিস ম্যাটেরিয়াল',
  cdIncStudents: 'শিক্ষার্থী ভর্তি', cdIncCert: 'সমাপনী সার্টিফিকেট', cdPriceLabel: 'কোর্স ফি', cdContinue: 'শেখা চালিয়ে যান →', cdRatings: 'রেটিং',
  cdRateThis: '⭐ এই কোর্স রেট করুন', cdClose: 'বন্ধ', cdInWishlist: 'উইশলিস্টে আছে', cdAddWishlist: 'উইশলিস্টে যোগ করুন', cdUpdating: 'আপডেট হচ্ছে…', cdAdding: 'যোগ হচ্ছে…',
  cdCurriculum: 'কোর্স কনটেন্ট', cdLessonsWord: 'টি লেসন', cdFreePreview: 'ফ্রি প্রিভিউ', cdCurriculumEmpty: 'ইন্সট্রাক্টর কনটেন্ট যোগ করলে লেসনের তালিকা এখানে দেখা যাবে।', cdMinShort: 'মিনিট', cdReviewsTitle: 'রেটিং ও রিভিউ',
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
  profileInstructorArea: 'ইন্সট্রাক্টর এরিয়া', profileAdminArea: 'অ্যাডমিন এরিয়া', profileCourses: 'কোর্স', profileTeacherNoBio: 'একটি সংক্ষিপ্ত বায়ো যোগ করুন যাতে শিক্ষার্থীরা আপনাকে জানতে পারে।',
  profileManageCourses: 'কোর্স ও লাইভ ম্যানেজ', profileBrowseCourses: 'কোর্স দেখুন', profileHome: 'হোম',
  profileAdminPanel: 'অ্যাডমিন ড্যাশবোর্ড', profileCourseManager: 'কোর্স ম্যানেজার', profileInstructors: 'ইন্সট্রাক্টর', profileYoutube: 'ইউটিউব',
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
  loginOrContinue: 'অথবা যেভাবে চালিয়ে যাবেন', loginGoogle: 'Google দিয়ে চালিয়ে যান',
  registerEyebrow: 'অ্যাকাউন্ট তৈরি করুন', registerTitle: 'লার্নিং প্ল্যাটফর্মে যোগ দিন।',
  registerLead: 'পাঠ, স্ট্রিক এবং অগ্রগতি ট্র্যাক করতে আপনার প্রোফাইল সেট আপ করুন।',
  registerNewLearner: 'নতুন শিক্ষার্থী', registerStartStrong: 'প্রথম দিন থেকেই শক্তিশালীভাবে শুরু করুন',
  registerF1Title: 'ব্যক্তিগত ড্যাশবোর্ড', registerF1Desc: 'আপনি যোগ দেওয়া প্রতিটি লার্নিং পাথের জন্য পরিষ্কার অগ্রগতি দৃশ্য পান।',
  registerF2Title: 'কাঠামোবদ্ধ অনবোর্ডিং', registerF2Desc: 'ফোকাসড ইন্টারফেসের সাথে একটি গাইডেড সেটআপ ফ্লোতে যান।',
  registerF3Title: 'ব্ল্যাক-ব্লু পরিচয়', registerF3Desc: 'হোম এবং লগইন পেজের সাথে দৃশ্যত ও কার্যকরীভাবে সামঞ্জস্যপূর্ণ।',
  registerFullName: 'পূর্ণ নাম', registerFullNamePlaceholder: 'আপনার নাম', registerFullNameError: 'আপনার পূর্ণ নাম দিন।',
  registerMobile: 'মোবাইল নম্বর', registerMobilePlaceholder: 'যেমন ০১XXXXXXXXX', registerMobileError: 'সঠিক মোবাইল নম্বর দিন।',
  registerGroup: 'গ্রুপ (ঐচ্ছিক)', registerGroupPlaceholder: 'আপনার গ্রুপ বেছে নিন', registerGroupScience: 'বিজ্ঞান', registerGroupCommerce: 'ব্যবসায় শিক্ষা', registerGroupArts: 'মানবিক', registerGroupOthers: 'অন্যান্য',
  registerParentEmail: 'অভিভাবকের ইমেইল', registerParentEmailPlaceholder: 'parent@example.com', registerParentEmailError: 'সঠিক অভিভাবকের ইমেইল দিন।',
  registerRole: 'ভূমিকা নির্বাচন করুন', registerRolePlaceholder: 'একটি বেছে নিন', registerStudent: 'শিক্ষার্থী', registerTeacher: 'শিক্ষক', registerRoleError: 'শিক্ষার্থী বা শিক্ষক বেছে নিন।',
  registerPasswordPlaceholder: 'পাসওয়ার্ড তৈরি করুন', registerConfirmPassword: 'পাসওয়ার্ড নিশ্চিত করুন', registerRepeatPassword: 'পাসওয়ার্ড পুনরায় দিন', registerConfirmPasswordError: 'আপনার পাসওয়ার্ড নিশ্চিত করুন।',
  registerTerms: 'আমি লার্নিং প্ল্যাটফর্মের শর্তাবলীতে সম্মত।', registerSubmitting: 'জমা হচ্ছে...', registerBtn: 'অ্যাকাউন্ট তৈরি করুন',
  registerHaveAccount: 'ইতিমধ্যে অ্যাকাউন্ট আছে?', registerLoginHere: 'এখানে লগইন করুন', registerGoHome: 'হোমে যান',
  registerOrSignUp: 'অথবা যেভাবে সাইন আপ করবেন', registerGoogle: 'Google দিয়ে সাইন আপ করুন', registerGoLogin: 'সাইন ইন',
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
  lbScopeLabel: 'লিডারবোর্ড স্কোপ', lbScopeGlobal: 'গ্লোবাল', lbScopeCourse: 'আমার কোর্স', lbLoadFailed: 'লিডারবোর্ড লোড করা যায়নি।',
  lbGlobalTitle: 'গ্লোবাল লিডারবোর্ড', lbGlobalSub: 'পুরো প্ল্যাটফর্মের সেরা শিক্ষার্থীরা',
  notifEyebrow: 'নোটিফিকেশন', notifTitle: 'আপনার নোটিফিকেশন', notifSub: 'আপনার কোর্সগুলোতে ঘটে যাওয়া সবকিছু।', notifMarkAll: 'সব পঠিত করুন',
  notifAll: 'সব', notifUnread: 'অপঠিত', notifEmpty: 'এখনো কোনো নোটিফিকেশন নেই', notifNoUnread: 'সব পড়া হয়ে গেছে', notifEmptyDesc: 'নতুন লেসন, কুইজ ফলাফল ও রিমাইন্ডার এখানে দেখা যাবে।',
  annEyebrow: 'ঘোষণা', annTitle: 'ঘোষণা', annSub: 'ইন্সট্রাক্টরদের সর্বশেষ আপডেট ও নোটিশ।', annEmpty: 'এই মুহূর্তে কোনো ঘোষণা নেই', annEmptyDesc: 'নতুন কিছু এলে এখানে দেখা যাবে।', annExpires: 'সক্রিয় থাকবে',
  timeJustNow: 'এইমাত্র', timeMinutesAgo: 'মিনিট আগে', timeHoursAgo: 'ঘণ্টা আগে', timeDaysAgo: 'দিন আগে',
  liveNow: 'এখন লাইভ', liveUpcoming: 'আসন্ন', liveEnded: 'শেষ', liveMissed: 'মিস হয়েছে', liveJoinNow: 'এখনই যোগ দিন →', liveJoin: 'ক্লাসে যোগ দিন',
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
  siLead: 'চালিয়ে যেতে আপনার প্রোফাইল সম্পূর্ণ করুন', siTitle2: 'শিক্ষার্থীর তথ্য', siTitle3: 'একাডেমিক তথ্য', siTitle4: 'অভিভাবকের তথ্য',
  siDesc2: 'আপনার সম্পর্কে জানান।', siDesc3: 'আপনার বোর্ড, প্রতিষ্ঠান ও ঠিকানার তথ্য।',
  siDesc4: 'জরুরি প্রয়োজন ও যোগাযোগের জন্য।',
  siFullName: 'পূর্ণ নাম', siDob: 'জন্ম তারিখ', siGender: 'লিঙ্গ', siGenderMale: 'ছেলে', siGenderFemale: 'মেয়ে', siGenderOther: 'অন্যান্য',
  siMobile: 'শিক্ষার্থীর মোবাইল নম্বর', siEmail: 'শিক্ষার্থীর ইমেইল', siPhoto: 'প্রোফাইল ছবি (ঐচ্ছিক)',
  siPhotoHint: 'JPG, PNG বা WEBP — সর্বোচ্চ 5MB।', siPhotoRemove: 'মুছুন',
  siBoard: 'বোর্ড', siBoardPick: 'আপনার বোর্ড নির্বাচন করুন', siInstitute: 'প্রতিষ্ঠানের নাম', siInstitutePlaceholder: 'যেমন: ঢাকা কলেজ',
  siSscYear: 'SSC পরীক্ষার সাল', siSscYearPick: 'সাল নির্বাচন করুন', siThana: 'থানা/উপজেলা', siThanaPlaceholder: 'আপনার থানা/উপজেলা লিখুন…',
  siDistrict: 'জেলা', siDistrictPlaceholder: 'আপনার জেলা লিখুন…',
  siFatherName: 'বাবা/অভিভাবকের নাম', siMotherName: 'মায়ের নাম', siParentMobile: 'অভিভাবকের মোবাইল নম্বর', siParentEmailOpt: 'অভিভাবকের ইমেইল (ঐচ্ছিক)',
  siOccupation: 'অভিভাবকের পেশা', siReferral: 'Nirvoor E-learning সম্পর্কে কীভাবে জানলেন?',
  siAgreementTitle: 'সম্মতি', siAgreeCorrect: 'আমি নিশ্চিত করছি যে সব তথ্য সঠিক।',
  siAgreeData: 'জরুরি ও বিশ্লেষণের প্রয়োজনে আমার তথ্য সংরক্ষণে আমি সম্মত।',
  siAgreeNotif: 'নিয়মিত নোটিফিকেশন ও প্রমোশনাল মেসেজ পেতে আমি সম্মত।',
  siBack: '← পেছনে', siNext: 'পরবর্তী →', siConfirm: 'নিশ্চিত করে এগিয়ে যান', siSaving: 'সংরক্ষণ হচ্ছে…',
  siFieldRequired: 'এই ঘরটি পূরণ করা আবশ্যক।', siPickRequired: 'একটি অপশন নির্বাচন করুন।',
  siAgreeRequired: 'চালিয়ে যেতে আবশ্যক সম্মতিগুলো দিন।', siSaveFailed: 'তথ্য সংরক্ষণ করা যায়নি। আবার চেষ্টা করুন।',
  profileReferral: 'আমাদের সম্পর্কে জেনেছেন',
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
  tcSideEnrollments: 'এনরোলমেন্ট', tcSideProfile: 'আমার প্রোফাইল', tcBackToSite: 'সাইটে ফিরুন', tcSideLive: 'ফ্রি লাইভ ক্লাস',
  tcLiveTitle: 'ফ্রি লাইভ ক্লাস', tcLiveSub: 'এমন একটি পাবলিক লাইভ ক্লাস শুরু করুন যেখানে যে কেউ লগইন বা রেজিস্ট্রেশন ছাড়াই যোগ দিতে পারে।',
  tcLiveStartHeading: 'নতুন ফ্রি লাইভ ক্লাস শুরু করুন',
  tcLivePickCourse: 'একটি কোর্স বেছে নিন…',
  tcLiveGoLive: 'লাইভ শুরু করুন', tcLiveNote: 'লাইভ শুরু হলে লিংক শেয়ার করুন — যে কেউ গেস্ট হিসেবে সাথে সাথে যোগ দিতে পারবে।',
  tcLiveMine: 'আমার লাইভ ক্লাস', tcLiveNoneMine: 'আপনার কোনো সক্রিয় ফ্রি লাইভ ক্লাস নেই। উপরে থেকে একটি শুরু করুন।',
  tcLiveEnded: 'শেষ', tcLiveCopy: 'লিংক কপি', tcLiveCopied: 'কপি হয়েছে', tcLiveOpenRoom: 'লাইভ রুম খুলুন', tcLiveEnd: 'শেষ করুন',
  flBadge: 'এখন লাইভ', flTitle: 'ফ্রি লাইভ ক্লাস', flSubtitle: 'এখনই একটি লাইভ ক্লাসে যোগ দিন — সম্পূর্ণ ফ্রি, লগইন বা রেজিস্ট্রেশন লাগবে না।',
  flRefresh: 'রিফ্রেশ', flLoading: 'লাইভ ক্লাস লোড হচ্ছে...',
  flNoneTitle: 'এখন কোনো লাইভ ক্লাস নেই', flNoneDesc: 'এই মুহূর্তে কোনো ফ্রি লাইভ ক্লাস চলছে না। একটু পরে আবার দেখুন!',
  flLiveNow: 'এখন লাইভ', flHostedBy: 'হোস্ট করছেন', flJoin: 'ক্লাসে যোগ দিন',
  flKindCourse: 'কোর্স', flKindFree: 'ফ্রি',
  flGuestHint: 'অ্যাকাউন্ট ছাড়াই যেকোনো ফ্রি লাইভ ক্লাসে যোগ দিতে পারেন — শুধু আপনার নাম লিখুন।',
  flJoinModalTitle: 'লাইভ ক্লাসে যোগ দিন', flJoinModalDesc: 'অন্যদের দেখানোর জন্য একটি নাম লিখুন, তারপর সরাসরি ঢুকে পড়ুন।',
  flNameLabel: 'আপনার নাম (ঐচ্ছিক)', flNamePlaceholder: 'যেমন: রহিম', flCancel: 'বাতিল', flEnterRoom: 'রুমে ঢুকুন',
  tcCoursesSub: 'কোর্সের কন্টেন্ট, থাম্বনেইল ও publish স্ট্যাটাস পরিচালনা করুন।', tcNewCourse: 'নতুন কোর্স', tcSearchCourses: 'কোর্স খুঁজুন...',
  tcThTitle: 'শিরোনাম', tcThCategory: 'বিষয়', tcThLevel: 'স্তর', tcThPrice: 'মূল্য', tcThLessons: 'পাঠ',
  tcThStudents: 'শিক্ষার্থী', tcThRating: 'রেটিং', tcThStatus: 'অবস্থা', tcThActions: 'অ্যাকশন', tcNoRatings: 'কোনো রেটিং নেই',
  tcBtnStudents: 'ভর্তি শিক্ষার্থী', tcBtnLessons: 'পাঠ ব্যবস্থাপনা', tcNoCourse: 'কোনো কোর্স পাওয়া যায়নি।', tcLoadingCourses: 'কোর্স লোড হচ্ছে...',
  tcBackToCourses: 'কোর্সে ফিরুন', tcLessonsFor: 'এর পাঠসমূহ —', tcLessonsSub: 'এই প্যানেল থেকে পাঠের ভিডিও ও রিসোর্স যোগ বা এডিট করুন।',
  tcLiveSchedule: 'লাইভ ক্লাস নির্ধারণ করুন', tcAddLesson: 'পাঠ যোগ করুন',
  tcLoadingLessons: 'পাঠ লোড হচ্ছে...', tcPreview: 'প্রিভিউ', tcOpenVideo: 'ভিডিও দেখুন', tcThumbnail: 'থাম্বনেইল দেখুন',
  tcAddQuiz: 'কুইজ যোগ করুন', tcNoLesson: 'এই কোর্সে কোনো পাঠ পাওয়া যায়নি।',
  tcScheduledLive: 'নির্ধারিত লাইভ ক্লাস', tcLivePanelSub: 'এই কোর্সের লাইভ সেশন schedule, start, join আর end এখান থেকে manage করুন।',
  tcLoadingLive: 'লাইভ ক্লাস লোড হচ্ছে...', tcStart: 'ক্লাস শুরু', tcEnd: 'ক্লাস শেষ', tcNoLiveScheduled: 'এখনো কোনো লাইভ ক্লাস schedule করা হয়নি।',
  tcEndInRoomHint: 'ক্লাস খুলবে — ভেতরে “End class” চাপলে রেকর্ডিং সেভ হয়ে ক্লাস শেষ হবে।', tcRecReady: 'রেকর্ডিং প্রস্তুত', tcRecNone: 'রেকর্ডিং নেই',
  tcCreateLiveTitle: 'লাইভ ক্লাস তৈরি করুন', tcScheduledAt: 'নির্ধারিত সময়', tcLiveTitlePlaceholder: 'যেমন: অধ্যায় ৫ আলোচনা',
  tcLiveDescPlaceholder: 'কী নিয়ে class হবে...', tcCreateLiveBtn: 'লাইভ ক্লাস তৈরি',
  tcInstructorName: 'প্রশিক্ষকের নাম', tcLevelLabel: 'স্তর', tcPriceLabel: 'মূল্য (০ = ফ্রি)', tcDurationLabel: 'সময়কাল (মাস)',
  tcThumbnailUrl: 'থাম্বনেইল URL', tcUploadThumb: 'অথবা থাম্বনেইল ছবি আপলোড করুন', tcPublishCourse: 'কোর্স publish করুন', tcSaveCourse: 'কোর্স সংরক্ষণ',
  courseStartDate: 'শুরুর তারিখ', courseEndDate: 'শেষের তারিখ',
  courseDateHint: 'শুরুর তারিখ পর্যন্ত শিক্ষার্থীরা ভর্তি হতে পারবে। খালি রাখলে ভর্তি সবসময় খোলা থাকবে।',
  enrollDaysLeft: 'দিন বাকি', enrollLastDay: 'আজই ভর্তির শেষ দিন!', enrollClosed: 'ভর্তি বন্ধ', courseStartsOn: 'কোর্স শুরু',
  discountOff: 'ছাড়', discountPercentLabel: 'ডিসকাউন্ট (%)', discountStartLabel: 'ডিসকাউন্ট শুরু', discountEndLabel: 'ডিসকাউন্ট শেষ',
  discountHint: 'ডিসকাউন্ট চলাকালীন কোর্সের দাম এই শতাংশ কমে যাবে। ডিসকাউন্ট না দিলে খালি রাখুন।',
  discountInvalid: 'ডিসকাউন্টের জন্য ১–১০০ এর মধ্যে শতাংশ এবং সঠিক শুরু–শেষ তারিখ দিন।',
  courseDatesInvalid: 'কোর্সের শেষ তারিখ শুরুর তারিখের আগে হতে পারে না।',
  exMarksRange: 'ভুল মার্ক — ০ থেকে {max} এর মধ্যে দিতে হবে।',
  agTitle: 'আমার করণীয়', agJoin: 'যোগ দিন', agNavLabel: 'টুডু', agEmpty: 'এখন কোনো করণীয় নেই। নতুন কোর্স explore করুন।',
  agViewAll: 'সব দেখুন', agAllCaught: 'সব কাজ শেষ! 🎉', agOverdue: 'মেয়াদ পার', agToday: 'আজ', agUpcoming: 'আসন্ন',
  agPillOverdue: 'টা কাজ দেরি', agPillToday: 'টা কাজ আজ', agPillUpcoming: 'টা আসন্ন', agPillLive: 'এখন লাইভ',
  agKindLive: 'লাইভ ক্লাস', agKindExam: 'পরীক্ষা', agKindEnding: 'কোর্স শেষ হচ্ছে',
  tcLessonTitle: 'পাঠের শিরোনাম', tcVideoType: 'ভিডিও টাইপ', tcOrderIndex: 'ক্রম সূচক', tcVideoUrl: 'ভিডিও URL',
  tcUploadVideo: 'অথবা ভিডিও ফাইল আপলোড করুন', tcUploadingVideo: 'ভিডিও আপলোড হচ্ছে...', tcLessonThumb: 'পাঠের থাম্বনেইল (ঐচ্ছিক)',
  tcResourceUrl: 'রিসোর্স URL (ঐচ্ছিক)', tcFreePreview: 'ফ্রি প্রিভিউ পাঠ', tcSaveLesson: 'পাঠ সংরক্ষণ',
  tcEnrolled: 'ভর্তি', tcIssue: 'প্রদান', tcEditCourse: 'কোর্স এডিট', tcEditLesson: 'পাঠ এডিট',
  nbTitle: 'নোটিফিকেশন', nbMarkAll: 'সব পঠিত করুন', nbEmpty: 'কোনো নোটিফিকেশন নেই', nbViewAll: 'সব নোটিফিকেশন দেখুন →',
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
  recManageTitle: '🎬 ক্লাস রেকর্ডিং', recManageSub: 'এই কোর্সের রেকর্ড করা লাইভ ক্লাস। নাম পরিবর্তন বা ডিলিট করুন।',
  recNone: 'এই কোর্সে এখনো কোনো রেকর্ডিং নেই।', recLoading: 'রেকর্ডিং লোড হচ্ছে…',
  recStatusReady: 'প্রস্তুত', recStatusProcessing: 'প্রসেসিং…', recStatusFailed: 'ব্যর্থ',
  recTitleRequired: 'টাইটেল দিতে হবে।', recUpdated: 'রেকর্ডিং আপডেট হয়েছে।', recUpdateFailed: 'রেকর্ডিং আপডেট ব্যর্থ হয়েছে।',
  recDeleteConfirm: 'এই রেকর্ডিং ডিলিট করবেন? এটি ফেরানো যাবে না।', recDeleted: 'রেকর্ডিং ডিলিট হয়েছে।', recDeleteFailed: 'রেকর্ডিং ডিলিট ব্যর্থ হয়েছে।', recWatchFailed: 'রেকর্ডিং খোলা যায়নি।',
  courseDeleteConfirm: '⚠️ এই কোর্সটি স্থায়ীভাবে ডিলিট করবেন?\n\nএর সাথে জড়িত সবকিছু মুছে যাবে — লেসন ও ভিডিও, পিডিএফ ও প্র্যাকটিস মেটেরিয়াল, পরীক্ষা ও শিক্ষার্থীদের জমা দেওয়া উত্তর, লাইভ ক্লাস, রেটিং, কমেন্ট, এনরোলমেন্ট ও পেমেন্ট — ডেটাবেজ এবং সার্ভার স্টোরেজ দুই জায়গা থেকেই।\n\nএই কাজটি কোনোভাবেই ফেরানো যাবে না এবং কোর্সটি আর রিস্টোর করা যাবে না।\n\nনিশ্চিত হলে OK চাপুন — স্থায়ীভাবে ডিলিট হবে।',
  courseDeleted: 'কোর্স এবং এর সব কন্টেন্ট স্থায়ীভাবে ডিলিট করা হয়েছে।',
  exSectionTitle: 'আমার পরীক্ষা', exCourseTitle: 'কোর্স:', exFirst: '১ম পরীক্ষা', exSecond: '২য় পরীক্ষা', exThird: '৩য় পরীক্ষা', exFinal: 'ফাইনাল পরীক্ষা',
  exLocked: 'লক', exNotAvailable: 'এখনো উপলব্ধ নয়', exPending: 'বাকি আছে', exSubmitted: 'জমা হয়েছে', exGraded: 'মূল্যায়িত',
  exMissed: 'মিস হয়েছে', exClosed: 'বন্ধ — সময় শেষ', exDeadline: 'শেষ তারিখ', exInstruction: 'নির্দেশনা', exQuestion: 'প্রশ্ন',
  exViewPdf: 'প্রশ্নপত্র দেখুন', exUpload: 'উত্তর ফাইল দিন', exSubmit: 'জমা দিন', exSubmitting: 'জমা হচ্ছে…', exDaysLeft: 'দিন বাকি',
  exHr: 'ঘণ্টা', exMin: 'মিনিট', exLeft: 'বাকি',
  exDayLeft: 'দিন বাকি', exYourAnswer: 'আপনার উত্তর', exMarks: 'নম্বর', exFeedback: 'মন্তব্য', exAwaitingResult: 'ফলাফলের অপেক্ষায়…',
  exManageExams: 'পরীক্ষা', exManageSub: 'প্রশ্ন ও সময়সীমা সেট করুন এবং খাতা মূল্যায়ন করুন।', exTitlePlaceholder: 'পরীক্ষার শিরোনাম', exInstructionPlaceholder: 'শিক্ষার্থীদের জন্য নির্দেশনা',
  exTotalMarks: 'পূর্ণমান', exDurationMin: 'সময় (মিনিট)', exDeadlineField: 'শেষ তারিখ', exSaveExam: 'পরীক্ষা সেভ করুন',
  exUploadQuestion: 'প্রশ্ন PDF আপলোড করুন', exReplaceQuestion: 'প্রশ্ন PDF বদলান', exPublished: 'লাইভ', exUnpublished: 'লক (প্রশ্ন নেই)',
  exViewSubmissions: 'জমা দেখুন', exNoSubmissions: 'এখনো কেউ জমা দেয়নি', exDownload: 'ডাউনলোড', exSaveGrade: 'সেভ', exSubmittedAt: 'জমা',
  exUpcoming: 'আসছে', exStartsIn: 'শুরু হবে', exStartDate: 'শুরু হয়েছে', exDetails: 'বিস্তারিত দেখুন', exDay: 'দিনে', exDays: 'দিনে', exGradedByAdmin: 'অ্যাডমিন মূল্যায়ন করেছে',
  exTeacherSub: 'প্রশ্ন দেখুন ও শিক্ষার্থীদের খাতা মূল্যায়ন করুন।', exAdminCreatesNote: 'পরীক্ষা অ্যাডমিন তৈরি করবে',
  exMarksSaved: 'মার্ক সেভ হয়েছে।', exMarksSaveFailed: 'মার্ক সেভ করা যায়নি।',
  exAdminViewOnly: 'শুধু দেখা যাবে — মার্ক ও ফিডব্যাক কোর্সের শিক্ষক দেবেন।', exNotGraded: 'এখনো মূল্যায়ন হয়নি',
  exStarted: 'পরীক্ষা শুরু', exDurationDays: 'পরীক্ষার সময়সীমা', exDurationHint: 'প্রশ্ন আপলোড করার সাথে সাথেই পরীক্ষার টাইমার শুরু হয়। এই সময়ের মধ্যে শিক্ষার্থীরা উত্তর জমা দিতে পারবে।',
  exEstimatedDate: 'আনুমানিক শুরুর তারিখ', exEstimatedHint: 'শিক্ষার্থীদের কাছে কাউন্টডাউন হিসেবে দেখাবে — এটা পরীক্ষা শুরু করে না।', exEstimatedStart: 'আনুমানিক শুরু', exStartingSoon: 'খুব শিগগিরই শুরু',
  ecLiveClasses: 'লাইভ ক্লাস', ecScheduled: 'নির্ধারিত', ecLiveNow: 'এখন লাইভ', ecJoinNow: 'জয়েন করুন', ecNoLive: 'এই কোর্সে এখনো কোনো লাইভ ক্লাস নেই।', ecUpcoming: 'আসছে',
  ecHubPractice: 'প্র্যাকটিস', ecHubPracticeSub: 'নিজেকে ঝালিয়ে নাও', ecHubLive: 'লাইভ ক্লাস ও রেকর্ডিং', ecHubLiveSub: 'লাইভ জয়েন ও রেকর্ডিং দেখো',
  ecHubRecord: 'কোর্স ভিডিও', ecHubRecordSub: 'পাঠ, নোট ও কুইজ', ecHubExam: 'পরীক্ষা', ecHubExamSub: 'পরীক্ষা দাও', ecComingSoon: 'শীঘ্রই আসছে — অপেক্ষা করো!', ecAllCourses: 'সব কোর্স',
  pmTitle: 'প্র্যাকটিস ম্যাটেরিয়াল', pmSub: 'শিক্ষার্থীদের জন্য PDF/DOC আপলোড করুন (বোর্ড প্রশ্ন, মডেল টেস্ট, নোট…)।', pmStudentSub: 'আপনার শিক্ষকের শেয়ার করা স্টাডি ম্যাটেরিয়াল।',
  pmFieldName: 'ফিল্ডের নাম (যেমন: বিগত বোর্ড প্রশ্ন)', pmDescPlaceholder: 'সংক্ষিপ্ত বিবরণ (ঐচ্ছিক)',
  pmChooseFile: 'PDF / DOC বেছে নিন', pmAdd: 'যোগ করুন', pmOpen: 'খুলুন', pmNone: 'এখনো কোনো প্র্যাকটিস ম্যাটেরিয়াল নেই', pmNoneDesc: 'শিক্ষক আপলোড করলে এখানে দেখা যাবে।',
  pmTypeBoard: 'বিগত বোর্ড প্রশ্ন', pmTypeModel: 'স্পেশাল মডেল টেস্ট প্রশ্ন', pmTypeLabel: 'প্রশ্নের ধরন',
  pmLocked: 'লকড', pmLockedMsg: 'এখানে এখনো কোনো প্রশ্ন যোগ করা হয়নি। শীঘ্রই আবার দেখুন।', pmBack: 'পিছনে',
  // AI Writing
  aiwGateTitle: 'এআই রাইটিং', aiwViewResult: 'ফলাফল দেখুন', aiwStart: 'লেখা শুরু করুন', aiwLockedMsg: 'এখানে এখনো কোনো রাইটিং টাস্ক যোগ করা হয়নি। শীঘ্রই আবার দেখুন।',
  aiwAdminTitle: 'এআই রাইটিং টাস্ক', aiwAdminSub: 'রাইটিং টাস্ক তৈরি করুন; স্টুডেন্ট একবার সাবমিট করবে, এআই ১০০-তে নম্বর দেবে।',
  aiwTypeLabel: 'লেখার ধরন', aiwTitlePlaceholder: 'টাস্কের শিরোনাম (যেমন My Village)',
  aiwInstructionsPlaceholder: 'স্টুডেন্টদের জন্য নির্দেশনা (যেমন ১২০-১৫০ শব্দ লিখুন)…',
  aiwTopicsPlaceholder: 'টপিক — প্রতি লাইনে একটি। স্টুডেন্ট একটি বেছে নেবে।', aiwTopicsHint: 'প্রতি লাইনে একটি টপিক — স্টুডেন্ট এদের একটি বেছে নেবে।',
  aiwPublishNow: 'প্রকাশিত (স্টুডেন্টরা দেখতে পাবে)', aiwAddTask: 'টাস্ক যোগ করুন', aiwNoTasks: 'এখনো কোনো রাইটিং টাস্ক নেই।',
  aiwTopicsCount: 'টপিক', aiwSubsCount: 'সাবমিশন', aiwUnpublish: 'আনপাবলিশ', aiwPublish: 'পাবলিশ',
  aiwSubmissions: 'সাবমিশন', aiwLoadingSubs: 'সাবমিশন লোড হচ্ছে…', aiwNoSubs: 'এখনো কোনো সাবমিশন নেই।',
  aiwAiGave: 'এআই দিয়েছে', aiwAdjusted: 'পরিবর্তিত', aiwOffTopic: 'টপিকের বাইরে', aiwViewText: 'লেখা দেখুন', aiwViewFile: 'ফাইল দেখুন', aiwChangeMark: 'নম্বর পরিবর্তন',
  aiwTitleRequired: 'টাস্কের শিরোনাম দিন।', aiwTopicsRequired: 'কমপক্ষে একটি টপিক দিন (প্রতি লাইনে একটি)।',
  aiwSaved: 'টাস্ক সেভ হয়েছে।', aiwDeleteWarn: 'এই টাস্ক ও এর সব স্টুডেন্ট সাবমিশন স্থায়ীভাবে মুছে যাবে।',
  aiwDeleted: 'টাস্ক ডিলিট হয়েছে।', aiwMarksRange: 'নম্বর ০ থেকে ১০০-এর মধ্যে হতে হবে।', aiwMarkUpdated: 'নম্বর আপডেট হয়েছে।',
  aiwBackToCourse: 'কোর্সে ফিরে যান', aiwLoading: 'লোড হচ্ছে…', aiwTaskNotFound: 'এই টাস্কটি পাওয়া যায়নি।',
  aiwResultTitle: 'আপনার ফলাফল', aiwAdjustedNote: 'আপনার শিক্ষক এই নম্বর পরিবর্তন করেছেন', aiwOffTopicNote: 'এই লেখাটি নির্বাচিত টপিকের সাথে মেলেনি।',
  aiwBreakdown: 'নম্বরের বিস্তারিত', aiwFeedback: 'মতামত',
  aiwGrammar: 'ব্যাকরণ', aiwSpelling: 'বানান', aiwStructure: 'গঠন', aiwRelevance: 'প্রাসঙ্গিকতা',
  aiwYourWriting: 'আপনার লেখা', aiwTranscribed: 'পঠিত লেখা',
  aiwChecking: 'এআই আপনার লেখা যাচাই করছে…', aiwCheckingSub: 'এতে এক মিনিট পর্যন্ত সময় লাগতে পারে। অপেক্ষা করুন।',
  aiwOneAttempt: 'এই টাস্কে আপনি মাত্র একবার সুযোগ পাবেন। ভালোভাবে লিখুন!', aiwPickTopic: 'একটি টপিক বেছে নিন', aiwYourAnswer: 'আপনার লেখা',
  aiwRetake: 'আবার চেষ্টা করুন', aiwRetakeNote: 'আপনি আবার চেষ্টা করতে পারবেন — শুধু সর্বশেষ চেষ্টাটির নম্বর সংরক্ষিত থাকবে।',
  aiwRemoveFile: 'বাদ দিন', aiwFileChosenNote: 'একটি ফাইল যুক্ত আছে — যাচাই করতে সাবমিট করুন, অথবা টাইপ করতে বাদ দিন।',
  aiwTypePlaceholder: 'এখানে আপনার উত্তর লিখুন…', aiwWords: 'শব্দ', aiwOr: 'অথবা', aiwUploadHere: 'ছবি বা পিডিএফ আপলোড করুন',
  aiwUploadHint: 'JPG, PNG বা PDF — হাতের লেখার পরিষ্কার ছবি সবচেয়ে ভালো কাজ করে (সর্বোচ্চ ১০ MB)।', aiwSubmit: 'এআই যাচাইয়ের জন্য সাবমিট করুন',
  aiwFileTypes: 'শুধু JPG, PNG বা PDF ফাইল অনুমোদিত।', aiwFileTooBig: 'ফাইল অনেক বড় — সর্বোচ্চ ১০ MB।',
  aiwGradedToast: 'আপনার লেখা যাচাই হয়েছে!', aiwAlreadyAttempted: 'আপনি এই টাস্কে ইতিমধ্যে চেষ্টা করেছেন।',
  aiwSubmitFailed: 'আপনার লেখা যাচাই করা যায়নি। আবার চেষ্টা করুন।',
  aiwStatusLive: 'লাইভ', aiwStatusDraft: 'ড্রাফট (লুকানো)',
  navAdmin: 'অ্যাডমিন প্যানেল',
  adCategories: 'ক্যাটাগরি', adCategoriesSub: 'ক্যাটাগরি তৈরি করুন, তারপর প্রতিটির ভেতরে কোর্স বানান।',
  adCategoryNamePlaceholder: 'নতুন ক্যাটাগরির নাম (যেমন: SSC 2027)', adAddCategory: 'ক্যাটাগরি যোগ করুন',
  adNoCategories: 'এখনও কোনো ক্যাটাগরি নেই। কোর্স গোছাতে একটি তৈরি করুন।',
  adManageCourses: 'কোর্স ম্যানেজ', adSetImage: 'ছবি দিন', adAuthorCourses: 'কোর্স ম্যানেজ / তৈরি',
  tcBackToAdmin: 'অ্যাডমিনে ফিরুন', tcMyCoursesLive: 'আমার লাইভ কোর্স', tcLiveCoursesSub: 'আপনি যে কোর্সগুলোতে নিযুক্ত, সেগুলোর লাইভ ক্লাস নিন।',
  tcManageLive: 'লাইভ ক্লাস পরিচালনা', tcSelectCategory: 'ক্যাটাগরি বেছে নিন', tcNoCategoriesHint: 'এখনও ক্যাটাগরি নেই — অ্যাডমিন → ক্যাটাগরি ট্যাবে তৈরি করুন।',
  tcAppointTeacher: 'শিক্ষক নিযুক্ত করুন', tcSelectTeacher: 'এখনো কোনো অনুমোদিত শিক্ষক নেই',
  tcAppointMulti: 'এক বা একাধিক বেছে নিন', tcSelectedCount: 'জন নির্বাচিত', cdCourseTeachers: 'আপনার শিক্ষকগণ', tcChooseTeachers: 'শিক্ষক বেছে নিন…',
  adTeachers: 'শিক্ষক', adStudents: 'শিক্ষার্থী', adComments: 'কমেন্ট', adAnnouncements: 'ঘোষণা', adStoreItems: 'স্টোর আইটেম',
  adNavTeachers: 'শিক্ষক ম্যানেজ', adNavStudents: 'শিক্ষার্থী ম্যানেজ', adNavCategories: 'ক্যাটাগরি ম্যানেজ', adNavCourses: 'কোর্স ম্যানেজ', adNavComments: 'কমেন্ট ম্যানেজ', adCreateCategory: 'নতুন ক্যাটাগরি তৈরি করুন',
  adOverview: 'আপনার প্ল্যাটফর্মের সংক্ষিপ্ত চিত্র', adTotalStudents: 'মোট শিক্ষার্থী', adActiveTeachers: 'সক্রিয় শিক্ষক',
  adPendingApprovals: 'অনুমোদনের অপেক্ষায়', adTotalCourses: 'মোট কোর্স', adTotalEnrollments: 'মোট এনরোলমেন্ট',
  adWaitingApproval: 'জন শিক্ষক অনুমোদনের অপেক্ষায়।', adReviewNow: 'এখন পর্যালোচনা →',
  adManage: 'ম্যানেজ', adTopCourses: 'এনরোলমেন্ট অনুযায়ী সেরা কোর্স', adByCategory: 'ক্যাটাগরি অনুযায়ী কোর্স',
  adNoChartData: 'এখনো দেখানোর মতো ডেটা নেই।',
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
  // Home — hero slider
  hs1Badge: '🎯 চূড়ান্ত প্রস্তুতি', hs1Title: 'SSC 2027', hs1Accent: 'কমপ্লিট কোর্স',
  hs1Desc: 'সম্পূর্ণ প্রস্তুতি — সব বিষয় এক জায়গায়। বাংলা, ইংরেজি, গণিত সবকিছু।',
  hs1Btn1: 'কোর্স দেখুন', hs1Btn2: 'সব ক্যাটাগরি',
  hs1F1Strong: 'SSC 2027', hs1F1Sub: 'ফুল সিলেবাস', hs1F2Strong: 'লাইভ MCQ', hs1F2Sub: 'প্রতিদিন প্র্যাকটিস',
  hs2Badge: '🏆 টপ রেটেড', hs2Title: 'HSC 2027', hs2Accent: 'মাস্টার ক্লাস',
  hs2Desc: 'অ্যাডমিশন ইংরেজি ও স্কিল ডেভেলপমেন্টসহ সম্পূর্ণ HSC প্রস্তুতি — অভিজ্ঞ শিক্ষকদের সাথে।',
  hs2Btn1: 'এখনই ভর্তি হন', hs2Btn2: 'সব কোর্স',
  hs2F1Strong: 'HSC 2027', hs2F1Sub: 'অভিজ্ঞ শিক্ষক', hs2F2Strong: 'অ্যাডমিশন', hs2F2Sub: 'ইংরেজি স্পেশাল',
  hs3Badge: '⚡ নতুন কোর্স', hs3Title: 'স্কিল', hs3Accent: 'ডেভেলপমেন্ট',
  hs3Desc: 'ভবিষ্যতের জন্য নিজেকে প্রস্তুত করুন — কমিউনিকেশন, ক্রিটিক্যাল থিংকিং আরও অনেক কিছু।',
  hs3Btn1: 'শুরু করুন', hs3Btn2: 'বিস্তারিত দেখুন',
  hs3F1Strong: 'স্কিল', hs3F1Sub: 'ডেভেলপমেন্ট', hs3F2Strong: 'ক্যারিয়ার', hs3F2Sub: 'রেডি',
  // Home — category + reviews headers + browse all
  homeCatTitle: 'বিষয় অনুযায়ী শিখুন', homeCatSubtitle: 'আপনার লক্ষ্য অনুযায়ী সঠিক কোর্স বেছে নিন',
  homeRevTag: '💬 রিভিউ', homeRevTitle: 'শিক্ষার্থীদের', homeRevAccent: 'মতামত',
  homeRevDesc: 'আমাদের সাথে যারা পড়ছে তাদের বাস্তব গল্প।',
  homeBrowseAll: 'সব দেখুন',
  // Home — about section
  aboutTag: '💡 আমাদের সম্পর্কে', aboutTitle: 'সম্পর্কে', aboutAccent: '"নির্ভর নিজে শিখি"',
  aboutDesc: 'সবচেয়ে বড় নয়, সবচেয়ে সাহসী। SSC ও HSC শিক্ষার্থীদের জন্য, যারা ইংরেজিতে জয় করতে চায়।',
  aboutC1Label: 'লক্ষ্য', aboutC1Title: 'ফোকাসড লার্নিং',
  aboutC1Desc: 'স্পষ্ট দিকনির্দেশনা, গোছানো কন্টেন্ট আর ধারাবাহিক প্র্যাকটিস — যাতে প্রতিটি শিক্ষার্থী দ্রুত এগোতে পারে।',
  aboutC1Stat: 'প্রতিদিন স্মার্ট টাস্ক',
  aboutC2Label: 'ভিশন', aboutC2Title: 'ফিউচার রেডি',
  aboutC2Desc: 'পরীক্ষা ও বাস্তব জীবনের যোগাযোগের জন্য আত্মবিশ্বাস, দক্ষতা ও মানসিকতা গড়ে তুলি।',
  aboutC2Stat: 'পরীক্ষা + ক্যারিয়ার রেডি',
  aboutC3Label: 'কমিউনিটি', aboutC3Title: 'একসাথে শিখুন',
  aboutC3Desc: 'হাজারো শিক্ষার্থী, মেন্টর আর শিক্ষক — সবাই একে অপরকে এগিয়ে নিতে সাহায্য করে।',
  aboutC3Stat: 'সহায়ক নেটওয়ার্ক',
  aboutC4Label: 'মেন্টর', aboutC4Title: 'সেরা শিক্ষক',
  aboutC4Desc: 'প্রমাণিত পদ্ধতি ও পরীক্ষা-উপযোগী গাইডেন্সসহ অভিজ্ঞ শিক্ষকদের কাছ থেকে শিখুন।',
  aboutC4Stat: 'ভেরিফায়েড এক্সপার্ট',
  aboutC5Label: 'গ্রোথ', aboutC5Title: 'অগ্রগতি ট্র্যাক করুন',
  aboutC5Desc: 'স্পষ্ট মাইলস্টোন ও ফিডব্যাক প্রতি সপ্তাহে উন্নতি মাপতে সাহায্য করে।',
  aboutC5Stat: 'প্রোগ্রেস ড্যাশবোর্ড',
  aboutQuote: 'আমরা বিশ্বাস করি, সঠিক সিস্টেম ও ধারাবাহিক গাইডেন্সে প্রতিটি শিক্ষার্থী ইংরেজিতে দক্ষ হতে পারে।',
  aboutQuoteStat: 'Touch & Solve',
  // Home — community
  commTag: '🌐 আমাদের পরিবার', commTitle: 'আমাদের', commAccent: 'কমিউনিটিতে যোগ দিন',
  commDesc: 'হাজারো শিক্ষার্থীর সাথে যুক্ত হন — একসাথে শিখুন, একসাথে এগিয়ে যান।',
  commFbTitle: 'ফেসবুক গ্রুপ', commFbDesc: 'আমাদের ফেসবুক গ্রুপে যোগ দিন। প্রশ্ন করুন, উত্তর পান।',
  commFbStat1: '👥 ১০,০০০+ সদস্য', commFbStat2: '🔥 প্রতিদিন পোস্ট',
  commYtTitle: 'ইউটিউব চ্যানেল', commYtDesc: 'আমাদের ইউটিউব চ্যানেলে ফ্রি ভিডিও লেসন, টিপস ও ট্রিকস পান।',
  commYtStat1: '▶ ফ্রি ভিডিও', commYtStat2: '📺 সাপ্তাহিক আপলোড',
  commFreeTitle: 'ফ্রি ক্লাস', commFreeDesc: 'ফ্রিতে শিখুন — আমাদের বাছাই করা ফ্রি ক্লাস এখানে।',
  commFreeStat1: '✅ সম্পূর্ণ ফ্রি', commFreeStat2: '🚀 এখনই শুরু',
  // Footer
  footBrandDesc: 'এক ছোঁয়ায় সমাধান। পরিষ্কার কাঠামো, শক্তিশালী ফলাফল আর মসৃণ শিক্ষার্থী অভিজ্ঞতা নিয়ে গড়া একটি লার্নিং প্ল্যাটফর্ম।',
  footExplore: 'এক্সপ্লোর', footCompany: 'কোম্পানি', footAppTitle: 'মোবাইল অ্যাপ',
  footLinkCourses: 'কোর্সসমূহ', footLinkInstructors: 'প্রশিক্ষক', footLinkStore: 'স্টোর', footLinkFree: 'ফ্রি ক্লাস',
  footLinkAbout: 'আমাদের সম্পর্কে', footLinkSuccess: 'সাফল্যের গল্প', footLinkPrivacy: 'প্রাইভেসি পলিসি', footLinkTerms: 'ব্যবহারের শর্তাবলী',
  footAppDesc: 'আমাদের মোবাইল অ্যাপে যেকোনো জায়গায়, যেকোনো সময় শিখুন।', footAppGetOn: 'ডাউনলোড করুন', footAppDownloadOn: 'ডাউনলোড করুন',
  footCopyright: '© ২০২৬ Touch & Solve. সর্বস্বত্ব সংরক্ষিত।',
  footBotHome: 'হোম', footBotAbout: 'সম্পর্কে', footBotContact: 'যোগাযোগ', footBotPrivacy: 'প্রাইভেসি',
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
