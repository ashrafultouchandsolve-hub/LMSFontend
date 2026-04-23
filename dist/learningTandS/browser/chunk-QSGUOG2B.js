import {
  AuthService,
  ChangeDetectionStrategy,
  CheckboxControlValueAccessor,
  Component,
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  Injectable,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NonNullableFormBuilder,
  NumberValueAccessor,
  ReactiveFormsModule,
  Router,
  SelectControlValueAccessor,
  Validators,
  __spreadProps,
  __spreadValues,
  catchError,
  computed,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  tap,
  throwError,
  toSignal,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-XJRXZ73E.js";

// src/app/Service/learning-api.service.ts
var LearningApiService = class _LearningApiService {
  http = inject(HttpClient);
  primaryBaseUrl = "https://localhost:7002/api";
  fallbackBaseUrl = "https://localhost:7236/api";
  activeBaseUrl = this.primaryBaseUrl;
  isNetworkError(error) {
    return error instanceof HttpErrorResponse && error.status === 0;
  }
  withFallback(requestFactory) {
    return requestFactory(this.primaryBaseUrl).pipe(tap(() => {
      this.activeBaseUrl = this.primaryBaseUrl;
    }), catchError((error) => {
      if (!this.isNetworkError(error)) {
        return throwError(() => error);
      }
      return requestFactory(this.fallbackBaseUrl).pipe(tap(() => {
        this.activeBaseUrl = this.fallbackBaseUrl;
      }));
    }));
  }
  getTeacherCourses() {
    return this.withFallback((baseUrl) => this.http.get(`${baseUrl}/course/getbyteacher`));
  }
  createCourse(payload) {
    return this.withFallback((baseUrl) => this.http.post(`${baseUrl}/course/create`, payload));
  }
  updateCourse(courseId, payload) {
    return this.withFallback((baseUrl) => this.http.put(`${baseUrl}/course/update/${courseId}`, payload));
  }
  deleteCourse(courseId) {
    return this.withFallback((baseUrl) => this.http.delete(`${baseUrl}/course/delete/${courseId}`));
  }
  uploadCourseThumbnail(courseId, file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.withFallback((baseUrl) => this.http.post(`${baseUrl}/course/uploadthumbnail/${courseId}`, formData));
  }
  getLessonsByCourse(courseId) {
    return this.withFallback((baseUrl) => this.http.get(`${baseUrl}/lesson/getbycourse/${courseId}`));
  }
  createLesson(payload) {
    return this.withFallback((baseUrl) => this.http.post(`${baseUrl}/lesson/create`, payload));
  }
  updateLesson(lessonId, payload) {
    return this.withFallback((baseUrl) => this.http.put(`${baseUrl}/lesson/update/${lessonId}`, payload));
  }
  deleteLesson(lessonId) {
    return this.withFallback((baseUrl) => this.http.delete(`${baseUrl}/lesson/delete/${lessonId}`));
  }
  uploadLessonThumbnail(lessonId, file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.withFallback((baseUrl) => this.http.post(`${baseUrl}/lesson/uploadthumbnail/${lessonId}`, formData));
  }
  uploadLessonVideo(lessonId, file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.withFallback((baseUrl) => this.http.post(`${baseUrl}/lesson/uploadvideo/${lessonId}`, formData));
  }
  setLessonVideoUrl(lessonId, videoUrl) {
    return this.withFallback((baseUrl) => this.http.post(`${baseUrl}/lesson/setvideurl/${lessonId}`, { videoUrl }));
  }
  buildDownloadUrl(path) {
    if (!path) {
      return "";
    }
    const params = new HttpParams().set("path", path);
    return `${this.activeBaseUrl}/files/download?${params.toString()}`;
  }
  buildStreamUrl(path) {
    if (!path) {
      return "";
    }
    const params = new HttpParams().set("path", path);
    return `${this.activeBaseUrl}/files/stream?${params.toString()}`;
  }
  static \u0275fac = function LearningApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LearningApiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LearningApiService, factory: _LearningApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LearningApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/base/teacher/teacher.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function Teacher_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function Teacher_For_7_Template_button_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectSidebar(item_r2.key));
    });
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", item_r2.key === ctx_r2.activeSidebarKey());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
  }
}
function Teacher_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("notice-error", ctx_r2.noticeType() === "error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.notice());
  }
}
function Teacher_Conditional_12_For_32_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 20);
  }
  if (rf & 2) {
    const course_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", course_r6.thumbnailUrl, \u0275\u0275sanitizeUrl)("alt", course_r6.title + " thumbnail");
  }
}
function Teacher_Conditional_12_For_32_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(course_r6.title.charAt(0));
  }
}
function Teacher_Conditional_12_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 19);
    \u0275\u0275conditionalCreate(3, Teacher_Conditional_12_For_32_Conditional_3_Template, 1, 2, "img", 20)(4, Teacher_Conditional_12_For_32_Conditional_4_Template, 2, 1, "div", 21);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td")(8, "span", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "span", 23);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 24)(22, "button", 25);
    \u0275\u0275listener("click", function Teacher_Conditional_12_For_32_Template_button_click_22_listener() {
      const course_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openLessons(course_r6.id));
    });
    \u0275\u0275text(23, "Lessons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 26);
    \u0275\u0275listener("click", function Teacher_Conditional_12_For_32_Template_button_click_24_listener() {
      const course_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEditCourseModal(course_r6.id));
    });
    \u0275\u0275text(25, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 27);
    \u0275\u0275listener("click", function Teacher_Conditional_12_For_32_Template_button_click_26_listener() {
      const course_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteCourse(course_r6.id));
    });
    \u0275\u0275text(27, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const course_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.canRenderThumbnail(course_r6.thumbnailUrl) ? 3 : 4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r6.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r6.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r6.level);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatPrice(course_r6.price));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r6.lessonCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r6.students);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("live", course_r6.published);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", course_r6.published ? "Published" : "Draft", " ");
  }
}
function Teacher_Conditional_12_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 28);
    \u0275\u0275text(2, "No course found.");
    \u0275\u0275elementEnd()();
  }
}
function Teacher_Conditional_12_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1, "Loading courses...");
    \u0275\u0275elementEnd();
  }
}
function Teacher_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 13)(1, "div")(2, "h1");
    \u0275\u0275text(3, "Courses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Manage course content, thumbnails, and publish status.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 14);
    \u0275\u0275listener("click", function Teacher_Conditional_12_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNewCourseModal());
    });
    \u0275\u0275text(7, "+ New Course");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "section", 15)(9, "input", 16);
    \u0275\u0275listener("input", function Teacher_Conditional_12_Template_input_input_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateSearchTerm($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 17)(11, "table")(12, "thead")(13, "tr")(14, "th");
    \u0275\u0275text(15, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Lessons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, "Students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th");
    \u0275\u0275text(29, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "tbody");
    \u0275\u0275repeaterCreate(31, Teacher_Conditional_12_For_32_Template, 28, 10, "tr", null, _forTrack1);
    \u0275\u0275conditionalCreate(33, Teacher_Conditional_12_Conditional_33_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(34, Teacher_Conditional_12_Conditional_34_Template, 2, 0, "p", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("value", ctx_r2.searchTerm());
    \u0275\u0275advance(22);
    \u0275\u0275repeater(ctx_r2.filteredCourses());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.isLoadingCourses() && ctx_r2.filteredCourses().length === 0 ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isLoadingCourses() ? 34 : -1);
  }
}
function Teacher_Conditional_13_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1, "Loading lessons...");
    \u0275\u0275elementEnd();
  }
}
function Teacher_Conditional_13_For_13_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lesson_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lesson_r9.description);
  }
}
function Teacher_Conditional_13_For_13_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "Preview");
    \u0275\u0275elementEnd();
  }
}
function Teacher_Conditional_13_For_13_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 37);
    \u0275\u0275text(1, " Open Video ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lesson_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", lesson_r9.videoUrl, \u0275\u0275sanitizeUrl);
  }
}
function Teacher_Conditional_13_For_13_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 37);
    \u0275\u0275text(1, " Thumbnail ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lesson_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", lesson_r9.thumbnailUrl, \u0275\u0275sanitizeUrl);
  }
}
function Teacher_Conditional_13_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 31)(1, "div", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, Teacher_Conditional_13_For_13_Conditional_6_Template, 2, 1, "p");
    \u0275\u0275elementStart(7, "div", 35)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, Teacher_Conditional_13_For_13_Conditional_12_Template, 2, 0, "span", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 36);
    \u0275\u0275conditionalCreate(14, Teacher_Conditional_13_For_13_Conditional_14_Template, 2, 1, "a", 37);
    \u0275\u0275conditionalCreate(15, Teacher_Conditional_13_For_13_Conditional_15_Template, 2, 1, "a", 37);
    \u0275\u0275elementStart(16, "button", 26);
    \u0275\u0275listener("click", function Teacher_Conditional_13_For_13_Template_button_click_16_listener() {
      const lesson_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEditLessonModal(lesson_r9.id));
    });
    \u0275\u0275text(17, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 27);
    \u0275\u0275listener("click", function Teacher_Conditional_13_For_13_Template_button_click_18_listener() {
      const lesson_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteLesson(lesson_r9.id));
    });
    \u0275\u0275text(19, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lesson_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lesson_r9.orderIndex);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(lesson_r9.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(lesson_r9.description ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(lesson_r9.videoType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", lesson_r9.durationMinutes, "min");
    \u0275\u0275advance();
    \u0275\u0275conditional(lesson_r9.isPreview ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(lesson_r9.videoUrl ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(lesson_r9.thumbnailUrl ? 15 : -1);
  }
}
function Teacher_Conditional_13_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1, "No lesson found for this course.");
    \u0275\u0275elementEnd();
  }
}
function Teacher_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 13)(1, "div")(2, "button", 29);
    \u0275\u0275listener("click", function Teacher_Conditional_13_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeLessonsView());
    });
    \u0275\u0275text(3, "\u2190 Back to Courses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Add or edit lesson videos and resources from this panel.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 14);
    \u0275\u0275listener("click", function Teacher_Conditional_13_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNewLessonModal());
    });
    \u0275\u0275text(9, "+ Add Lesson");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "section", 30);
    \u0275\u0275conditionalCreate(11, Teacher_Conditional_13_Conditional_11_Template, 2, 0, "p", 18);
    \u0275\u0275repeaterCreate(12, Teacher_Conditional_13_For_13_Template, 20, 8, "article", 31, _forTrack1);
    \u0275\u0275conditionalCreate(14, Teacher_Conditional_13_Conditional_14_Template, 2, 0, "p", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Lessons for ", ctx_r2.currentCourseName());
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.isLoadingLessons() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.sortedLessons());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.isLoadingLessons() && ctx_r2.sortedLessons().length === 0 ? 14 : -1);
  }
}
function Teacher_Conditional_14_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275element(1, "img", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.resolveCoursePreviewThumbnail(), \u0275\u0275sanitizeUrl);
  }
}
function Teacher_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 38)(2, "div", 39)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 40);
    \u0275\u0275listener("click", function Teacher_Conditional_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCourseModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 41);
    \u0275\u0275listener("ngSubmit", function Teacher_Conditional_14_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveCourse());
    });
    \u0275\u0275elementStart(8, "label")(9, "span");
    \u0275\u0275text(10, "Title *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "label")(13, "span");
    \u0275\u0275text(14, "Category *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "label", 44)(17, "span");
    \u0275\u0275text(18, "Description *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "textarea", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "label")(21, "span");
    \u0275\u0275text(22, "Instructor Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "label")(25, "span");
    \u0275\u0275text(26, "Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "select", 47)(28, "option", 48);
    \u0275\u0275text(29, "Beginner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 49);
    \u0275\u0275text(31, "Intermediate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 50);
    \u0275\u0275text(33, "Advanced");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "label")(35, "span");
    \u0275\u0275text(36, "Price (0 = Free)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "label")(39, "span");
    \u0275\u0275text(40, "Duration (minutes)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "label", 44)(43, "span");
    \u0275\u0275text(44, "Thumbnail URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "label", 54)(47, "span");
    \u0275\u0275text(48, "Or Upload Thumbnail Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "input", 55);
    \u0275\u0275listener("change", function Teacher_Conditional_14_Template_input_change_49_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onThumbnailSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(50, Teacher_Conditional_14_Conditional_50_Template, 2, 1, "div", 56);
    \u0275\u0275elementStart(51, "label", 57);
    \u0275\u0275element(52, "input", 58);
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54, "Publish course");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 59)(56, "button", 26);
    \u0275\u0275listener("click", function Teacher_Conditional_14_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCourseModal());
    });
    \u0275\u0275text(57, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 60);
    \u0275\u0275text(59, "Save Course");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.courseModalTitle());
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r2.courseForm);
    \u0275\u0275advance(43);
    \u0275\u0275conditional(ctx_r2.canRenderThumbnail(ctx_r2.resolveCoursePreviewThumbnail()) ? 50 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r2.isCourseFormInvalid());
  }
}
function Teacher_Conditional_15_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275element(1, "img", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.resolveLessonPreviewThumbnail(), \u0275\u0275sanitizeUrl);
  }
}
function Teacher_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 38)(2, "div", 39)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 40);
    \u0275\u0275listener("click", function Teacher_Conditional_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeLessonModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 41);
    \u0275\u0275listener("ngSubmit", function Teacher_Conditional_15_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveLesson());
    });
    \u0275\u0275elementStart(8, "label", 44)(9, "span");
    \u0275\u0275text(10, "Lesson Title *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "label", 44)(13, "span");
    \u0275\u0275text(14, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "textarea", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "label")(17, "span");
    \u0275\u0275text(18, "Video Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 62)(20, "option", 63);
    \u0275\u0275text(21, "YouTube");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 64);
    \u0275\u0275text(23, "Vimeo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 65);
    \u0275\u0275text(25, "Direct URL");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "label")(27, "span");
    \u0275\u0275text(28, "Order Index");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "label", 44)(31, "span");
    \u0275\u0275text(32, "Video URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "label", 54)(35, "span");
    \u0275\u0275text(36, "Or Upload Video File");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 68);
    \u0275\u0275listener("change", function Teacher_Conditional_15_Template_input_change_37_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onLessonVideoFileSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "label", 54)(39, "span");
    \u0275\u0275text(40, "Lesson Thumbnail (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 55);
    \u0275\u0275listener("change", function Teacher_Conditional_15_Template_input_change_41_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onLessonThumbnailSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(42, Teacher_Conditional_15_Conditional_42_Template, 2, 1, "div", 56);
    \u0275\u0275elementStart(43, "label")(44, "span");
    \u0275\u0275text(45, "Duration (minutes)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "input", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "label")(48, "span");
    \u0275\u0275text(49, "Resource URL (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "input", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "label", 57);
    \u0275\u0275element(52, "input", 70);
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54, "Free preview lesson");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 59)(56, "button", 26);
    \u0275\u0275listener("click", function Teacher_Conditional_15_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeLessonModal());
    });
    \u0275\u0275text(57, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 60);
    \u0275\u0275text(59, "Save Lesson");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.lessonModalTitle());
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r2.lessonForm);
    \u0275\u0275advance(35);
    \u0275\u0275conditional(ctx_r2.canRenderThumbnail(ctx_r2.resolveLessonPreviewThumbnail()) ? 42 : -1);
    \u0275\u0275advance(16);
    \u0275\u0275property("disabled", ctx_r2.isLessonFormInvalid());
  }
}
var Teacher = class _Teacher {
  authService = inject(AuthService);
  router = inject(Router);
  fb = inject(NonNullableFormBuilder);
  learningApi = inject(LearningApiService);
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedCourseId = signal(null, ...ngDevMode ? [{ debugName: "selectedCourseId" }] : (
    /* istanbul ignore next */
    []
  ));
  showCourseModal = signal(false, ...ngDevMode ? [{ debugName: "showCourseModal" }] : (
    /* istanbul ignore next */
    []
  ));
  showLessonModal = signal(false, ...ngDevMode ? [{ debugName: "showLessonModal" }] : (
    /* istanbul ignore next */
    []
  ));
  editingCourseId = signal(null, ...ngDevMode ? [{ debugName: "editingCourseId" }] : (
    /* istanbul ignore next */
    []
  ));
  editingLessonId = signal(null, ...ngDevMode ? [{ debugName: "editingLessonId" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoadingCourses = signal(false, ...ngDevMode ? [{ debugName: "isLoadingCourses" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoadingLessons = signal(false, ...ngDevMode ? [{ debugName: "isLoadingLessons" }] : (
    /* istanbul ignore next */
    []
  ));
  isSavingCourse = signal(false, ...ngDevMode ? [{ debugName: "isSavingCourse" }] : (
    /* istanbul ignore next */
    []
  ));
  isSavingLesson = signal(false, ...ngDevMode ? [{ debugName: "isSavingLesson" }] : (
    /* istanbul ignore next */
    []
  ));
  notice = signal("", ...ngDevMode ? [{ debugName: "notice" }] : (
    /* istanbul ignore next */
    []
  ));
  noticeType = signal("success", ...ngDevMode ? [{ debugName: "noticeType" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedCourseThumbnailFile = signal(null, ...ngDevMode ? [{ debugName: "selectedCourseThumbnailFile" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedCourseThumbnailPreview = signal("", ...ngDevMode ? [{ debugName: "selectedCourseThumbnailPreview" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedLessonThumbnailFile = signal(null, ...ngDevMode ? [{ debugName: "selectedLessonThumbnailFile" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedLessonThumbnailPreview = signal("", ...ngDevMode ? [{ debugName: "selectedLessonThumbnailPreview" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedLessonVideoFile = signal(null, ...ngDevMode ? [{ debugName: "selectedLessonVideoFile" }] : (
    /* istanbul ignore next */
    []
  ));
  courses = signal([], ...ngDevMode ? [{ debugName: "courses" }] : (
    /* istanbul ignore next */
    []
  ));
  currentUser = toSignal(this.authService.currentUser$, {
    initialValue: this.authService.getCurrentUser()
  });
  isLoggedIn = computed(() => !!this.currentUser(), ...ngDevMode ? [{ debugName: "isLoggedIn" }] : (
    /* istanbul ignore next */
    []
  ));
  userName = computed(() => this.currentUser()?.fullName || "Guest", ...ngDevMode ? [{ debugName: "userName" }] : (
    /* istanbul ignore next */
    []
  ));
  isTeacher = computed(() => this.currentUser()?.role === 1, ...ngDevMode ? [{ debugName: "isTeacher" }] : (
    /* istanbul ignore next */
    []
  ));
  userInitial = computed(() => this.userName().charAt(0).toUpperCase(), ...ngDevMode ? [{ debugName: "userInitial" }] : (
    /* istanbul ignore next */
    []
  ));
  filteredCourses = computed(() => {
    const keyword = this.searchTerm().trim().toLowerCase();
    if (!keyword) {
      return this.courses();
    }
    return this.courses().filter((course) => {
      return course.title.toLowerCase().includes(keyword) || course.category.toLowerCase().includes(keyword) || course.level.toLowerCase().includes(keyword);
    });
  }, ...ngDevMode ? [{ debugName: "filteredCourses" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedCourse = computed(() => {
    const selectedId = this.selectedCourseId();
    if (selectedId === null) {
      return null;
    }
    return this.courses().find((course) => course.id === selectedId) ?? null;
  }, ...ngDevMode ? [{ debugName: "selectedCourse" }] : (
    /* istanbul ignore next */
    []
  ));
  sortedLessons = computed(() => {
    const selected = this.selectedCourse();
    if (!selected) {
      return [];
    }
    return [...selected.lessons].sort((a, b) => a.orderIndex - b.orderIndex);
  }, ...ngDevMode ? [{ debugName: "sortedLessons" }] : (
    /* istanbul ignore next */
    []
  ));
  courseForm = this.fb.group({
    title: ["", [Validators.required, Validators.minLength(2)]],
    category: ["", [Validators.required, Validators.minLength(2)]],
    description: ["", [Validators.required, Validators.minLength(8)]],
    instructorName: [""],
    level: this.fb.control("Beginner"),
    price: [0, [Validators.min(0)]],
    durationMinutes: [0, [Validators.min(0)]],
    thumbnailUrl: [""],
    published: [false]
  });
  lessonForm = this.fb.group({
    title: ["", [Validators.required, Validators.minLength(2)]],
    description: [""],
    videoType: this.fb.control("YouTube"),
    videoUrl: [""],
    orderIndex: [1, [Validators.min(1)]],
    durationMinutes: [0, [Validators.min(0)]],
    resourceUrl: [""],
    isPreview: [false]
  });
  isCourseEditorOpen = computed(() => this.showCourseModal(), ...ngDevMode ? [{ debugName: "isCourseEditorOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isLessonEditorOpen = computed(() => this.showLessonModal(), ...ngDevMode ? [{ debugName: "isLessonEditorOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  courseModalTitle = computed(() => this.editingCourseId() === null ? "New Course" : "Edit Course", ...ngDevMode ? [{ debugName: "courseModalTitle" }] : (
    /* istanbul ignore next */
    []
  ));
  lessonModalTitle = computed(() => this.editingLessonId() === null ? "Add Lesson" : "Edit Lesson", ...ngDevMode ? [{ debugName: "lessonModalTitle" }] : (
    /* istanbul ignore next */
    []
  ));
  currentCourseName = computed(() => this.selectedCourse()?.title ?? "Course", ...ngDevMode ? [{ debugName: "currentCourseName" }] : (
    /* istanbul ignore next */
    []
  ));
  sidebarItems = [
    { key: "dashboard", label: "Dashboard", icon: "\u{1F4CA}" },
    { key: "courses", label: "Courses", icon: "\u{1F4DA}" },
    { key: "users", label: "Users", icon: "\u{1F465}" },
    { key: "enrollments", label: "Enrollments", icon: "\u{1F4DD}" }
  ];
  activeSidebarKey = signal("courses", ...ngDevMode ? [{ debugName: "activeSidebarKey" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    void this.loadTeacherCourses();
  }
  updateSearchTerm(value) {
    this.searchTerm.set(value);
  }
  selectSidebar(key) {
    this.activeSidebarKey.set(key);
    if (key === "courses") {
      this.closeLessonsView();
    }
  }
  openNewCourseModal() {
    this.clearCourseUploadState();
    this.editingCourseId.set(null);
    this.courseForm.reset({
      title: "",
      category: "",
      description: "",
      instructorName: this.userName(),
      level: "Beginner",
      price: 0,
      durationMinutes: 0,
      thumbnailUrl: "",
      published: false
    });
    this.showCourseModal.set(true);
  }
  openEditCourseModal(courseId) {
    const course = this.courses().find((item) => item.id === courseId);
    if (!course) {
      return;
    }
    this.clearCourseUploadState();
    this.editingCourseId.set(course.id);
    this.courseForm.reset({
      title: course.title,
      category: course.category,
      description: course.description,
      instructorName: course.instructorName,
      level: course.level,
      price: course.price,
      durationMinutes: course.durationMinutes,
      thumbnailUrl: course.thumbnailUrl,
      published: course.published
    });
    this.showCourseModal.set(true);
  }
  closeCourseModal() {
    this.showCourseModal.set(false);
    this.courseForm.markAsPristine();
    this.clearCourseUploadState();
  }
  async saveCourse() {
    if (this.courseForm.invalid) {
      this.courseForm.markAllAsTouched();
      return;
    }
    if (!this.authService.isLoggedIn()) {
      this.setNotice("\u0986\u09AA\u09A8\u09BF \u09B2\u0997\u0987\u09A8 \u0995\u09B0\u09C7\u09A8 \u09A8\u09BF\u0964 \u09AA\u09CD\u09B0\u09A5\u09AE\u09C7 \u09B2\u0997\u0987\u09A8 \u0995\u09B0\u09C1\u09A8\u0964", "error");
      this.router.navigateByUrl("/login");
      return;
    }
    this.isSavingCourse.set(true);
    try {
      const formValue = this.courseForm.getRawValue();
      const payload = {
        title: formValue.title,
        description: formValue.description,
        category: formValue.category,
        instructorName: formValue.instructorName || this.userName(),
        level: formValue.level,
        price: Number(formValue.price || 0),
        durationMinutes: Number(formValue.durationMinutes || 0),
        isPublished: formValue.published
      };
      const editingId = this.editingCourseId();
      let targetCourseId = editingId;
      if (editingId) {
        await firstValueFrom(this.learningApi.updateCourse(editingId, payload));
      } else {
        const createResult = await firstValueFrom(this.learningApi.createCourse(payload));
        targetCourseId = createResult.data;
      }
      const thumbnailFile = this.selectedCourseThumbnailFile();
      if (targetCourseId && thumbnailFile) {
        await firstValueFrom(this.learningApi.uploadCourseThumbnail(targetCourseId, thumbnailFile));
      }
      await this.loadTeacherCourses();
      this.setNotice("\u0995\u09CB\u09B0\u09CD\u09B8 \u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09A3 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u0964", "success");
      this.closeCourseModal();
    } catch (error) {
      this.setNotice(this.extractApiErrorMessage(error, "\u0995\u09CB\u09B0\u09CD\u09B8 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09A3 \u0995\u09B0\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF\u0964"), "error");
    } finally {
      this.isSavingCourse.set(false);
    }
  }
  async deleteCourse(courseId) {
    if (!this.authService.isLoggedIn()) {
      this.setNotice("\u0986\u09AA\u09A8\u09BF \u09B2\u0997\u0987\u09A8 \u0995\u09B0\u09C7\u09A8 \u09A8\u09BF\u0964 \u09AA\u09CD\u09B0\u09A5\u09AE\u09C7 \u09B2\u0997\u0987\u09A8 \u0995\u09B0\u09C1\u09A8\u0964", "error");
      this.router.navigateByUrl("/login");
      return;
    }
    try {
      await firstValueFrom(this.learningApi.deleteCourse(courseId));
      await this.loadTeacherCourses();
      if (this.selectedCourseId() === courseId) {
        this.selectedCourseId.set(null);
      }
      this.setNotice("\u0995\u09CB\u09B0\u09CD\u09B8 \u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u0964", "success");
    } catch (error) {
      this.setNotice(this.extractApiErrorMessage(error, "\u0995\u09CB\u09B0\u09CD\u09B8 \u09A1\u09BF\u09B2\u09BF\u099F \u0995\u09B0\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF\u0964"), "error");
    }
  }
  async openLessons(courseId) {
    this.selectedCourseId.set(courseId);
    await this.loadLessons(courseId);
  }
  closeLessonsView() {
    this.selectedCourseId.set(null);
  }
  openNewLessonModal() {
    if (this.selectedCourse() === null) {
      return;
    }
    this.clearLessonUploadState();
    this.editingLessonId.set(null);
    this.lessonForm.reset({
      title: "",
      description: "",
      videoType: "YouTube",
      videoUrl: "",
      orderIndex: this.sortedLessons().length + 1,
      durationMinutes: 0,
      resourceUrl: "",
      isPreview: false
    });
    this.showLessonModal.set(true);
  }
  openEditLessonModal(lessonId) {
    const lesson = this.sortedLessons().find((item) => item.id === lessonId);
    if (!lesson) {
      return;
    }
    this.clearLessonUploadState();
    this.editingLessonId.set(lesson.id);
    this.lessonForm.reset({
      title: lesson.title,
      description: lesson.description,
      videoType: lesson.videoType,
      videoUrl: lesson.videoUrl,
      orderIndex: lesson.orderIndex,
      durationMinutes: lesson.durationMinutes,
      resourceUrl: lesson.resourceUrl,
      isPreview: lesson.isPreview
    });
    this.showLessonModal.set(true);
  }
  closeLessonModal() {
    this.showLessonModal.set(false);
    this.lessonForm.markAsPristine();
    this.clearLessonUploadState();
  }
  async saveLesson() {
    const selected = this.selectedCourse();
    if (!selected || this.lessonForm.invalid) {
      this.lessonForm.markAllAsTouched();
      return;
    }
    if (!this.authService.isLoggedIn()) {
      this.setNotice("\u0986\u09AA\u09A8\u09BF \u09B2\u0997\u0987\u09A8 \u0995\u09B0\u09C7\u09A8 \u09A8\u09BF\u0964 \u09AA\u09CD\u09B0\u09A5\u09AE\u09C7 \u09B2\u0997\u0987\u09A8 \u0995\u09B0\u09C1\u09A8\u0964", "error");
      this.router.navigateByUrl("/login");
      return;
    }
    this.isSavingLesson.set(true);
    try {
      const formValue = this.lessonForm.getRawValue();
      const payload = {
        courseId: selected.id,
        title: formValue.title,
        description: formValue.description,
        orderIndex: Number(formValue.orderIndex || 1),
        videoType: formValue.videoType,
        videoUrl: formValue.videoUrl,
        durationMinutes: Number(formValue.durationMinutes || 0),
        resourceUrl: formValue.resourceUrl,
        isFreePreview: formValue.isPreview
      };
      const editingId = this.editingLessonId();
      let targetLessonId = editingId;
      if (editingId) {
        await firstValueFrom(this.learningApi.updateLesson(editingId, payload));
      } else {
        const createResult = await firstValueFrom(this.learningApi.createLesson(payload));
        targetLessonId = createResult.data;
      }
      const lessonThumbnailFile = this.selectedLessonThumbnailFile();
      if (targetLessonId && lessonThumbnailFile) {
        await firstValueFrom(this.learningApi.uploadLessonThumbnail(targetLessonId, lessonThumbnailFile));
      }
      const lessonVideoFile = this.selectedLessonVideoFile();
      if (targetLessonId && lessonVideoFile) {
        await firstValueFrom(this.learningApi.uploadLessonVideo(targetLessonId, lessonVideoFile));
      } else if (targetLessonId && formValue.videoUrl.trim()) {
        await firstValueFrom(this.learningApi.setLessonVideoUrl(targetLessonId, formValue.videoUrl.trim()));
      }
      await this.loadLessons(selected.id);
      await this.loadTeacherCourses();
      this.setNotice("\u09B2\u09C7\u09B8\u09A8 \u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09A3 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u0964", "success");
      this.closeLessonModal();
    } catch (error) {
      this.setNotice(this.extractApiErrorMessage(error, "\u09B2\u09C7\u09B8\u09A8 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09A3 \u0995\u09B0\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF\u0964"), "error");
    } finally {
      this.isSavingLesson.set(false);
    }
  }
  async deleteLesson(lessonId) {
    const selected = this.selectedCourse();
    if (!selected) {
      return;
    }
    if (!this.authService.isLoggedIn()) {
      this.setNotice("\u0986\u09AA\u09A8\u09BF \u09B2\u0997\u0987\u09A8 \u0995\u09B0\u09C7\u09A8 \u09A8\u09BF\u0964 \u09AA\u09CD\u09B0\u09A5\u09AE\u09C7 \u09B2\u0997\u0987\u09A8 \u0995\u09B0\u09C1\u09A8\u0964", "error");
      this.router.navigateByUrl("/login");
      return;
    }
    try {
      await firstValueFrom(this.learningApi.deleteLesson(lessonId));
      await this.loadLessons(selected.id);
      await this.loadTeacherCourses();
      this.setNotice("\u09B2\u09C7\u09B8\u09A8 \u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u0964", "success");
    } catch (error) {
      this.setNotice(this.extractApiErrorMessage(error, "\u09B2\u09C7\u09B8\u09A8 \u09A1\u09BF\u09B2\u09BF\u099F \u0995\u09B0\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF\u0964"), "error");
    }
  }
  onThumbnailSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file || !file.type.startsWith("image/")) {
      return;
    }
    this.selectedCourseThumbnailFile.set(file);
    this.selectedCourseThumbnailPreview.set(URL.createObjectURL(file));
    input.value = "";
  }
  onLessonThumbnailSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file || !file.type.startsWith("image/")) {
      return;
    }
    this.selectedLessonThumbnailFile.set(file);
    this.selectedLessonThumbnailPreview.set(URL.createObjectURL(file));
    input.value = "";
  }
  onLessonVideoFileSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file || !file.type.startsWith("video/")) {
      return;
    }
    this.selectedLessonVideoFile.set(file);
    this.lessonForm.patchValue({
      videoType: "Direct URL",
      videoUrl: file.name
    });
    input.value = "";
  }
  canRenderThumbnail = (value) => {
    return value.startsWith("http://") || value.startsWith("https://") || value.startsWith("data:image/");
  };
  formatPrice = (price) => {
    if (price <= 0) {
      return "Free";
    }
    return `\u09F3${price}`;
  };
  resolveCoursePreviewThumbnail = () => {
    return this.selectedCourseThumbnailPreview() || this.courseForm.controls.thumbnailUrl.value || "";
  };
  resolveLessonPreviewThumbnail = () => {
    return this.selectedLessonThumbnailPreview();
  };
  isCourseFormInvalid() {
    return this.courseForm.invalid || this.isSavingCourse();
  }
  isLessonFormInvalid() {
    return this.lessonForm.invalid || this.isSavingLesson();
  }
  goToHome() {
    this.router.navigateByUrl("/homepage");
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
  async loadTeacherCourses() {
    this.isLoadingCourses.set(true);
    try {
      const response = await firstValueFrom(this.learningApi.getTeacherCourses());
      const courseDtos = response.data;
      const mapped = courseDtos.map((course) => this.mapCourse(course));
      this.courses.set(mapped);
      if (this.selectedCourseId() && !mapped.some((course) => course.id === this.selectedCourseId())) {
        this.selectedCourseId.set(null);
      }
    } catch (error) {
      this.courses.set([]);
      this.setNotice(this.extractApiErrorMessage(error, "\u0995\u09CB\u09B0\u09CD\u09B8 \u09B2\u09CB\u09A1 \u0995\u09B0\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF\u0964 Backend URL \u098F\u09AC\u0982 token \u099A\u09C7\u0995 \u0995\u09B0\u09C1\u09A8\u0964"), "error");
    } finally {
      this.isLoadingCourses.set(false);
    }
  }
  async loadLessons(courseId) {
    this.isLoadingLessons.set(true);
    try {
      const response = await firstValueFrom(this.learningApi.getLessonsByCourse(courseId));
      const lessons = Array.isArray(response?.data) ? response.data.map((lesson) => this.mapLesson(lesson)) : [];
      this.courses.update((existingCourses) => {
        return existingCourses.map((course) => {
          if (course.id !== courseId) {
            return course;
          }
          return __spreadProps(__spreadValues({}, course), {
            lessonCount: lessons.length,
            lessons
          });
        });
      });
    } catch (error) {
      this.setNotice(this.extractApiErrorMessage(error, "\u09B2\u09C7\u09B8\u09A8 \u09B2\u09CB\u09A1 \u0995\u09B0\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF\u0964"), "error");
    } finally {
      this.isLoadingLessons.set(false);
    }
  }
  mapCourse(dto) {
    return {
      id: dto.id,
      title: dto.title,
      category: dto.category,
      description: dto.description,
      instructorName: dto.instructorName,
      level: this.normalizeLevel(dto.level),
      price: dto.price,
      durationMinutes: dto.durationMinutes,
      thumbnailUrl: this.learningApi.buildDownloadUrl(dto.thumbnailPath),
      published: dto.isPublished,
      students: 0,
      lessonCount: dto.lessonCount ?? 0,
      lessons: []
    };
  }
  mapLesson(dto) {
    return {
      id: dto.id,
      courseId: dto.courseId,
      title: dto.title,
      description: dto.description,
      videoType: this.normalizeVideoType(dto.videoType),
      videoUrl: dto.videoPath ? this.learningApi.buildStreamUrl(dto.videoPath) : dto.videoUrl ?? "",
      durationMinutes: dto.durationMinutes,
      orderIndex: dto.orderIndex,
      isPreview: dto.isFreePreview,
      resourceUrl: dto.resourceUrl ?? "",
      thumbnailUrl: this.learningApi.buildDownloadUrl(dto.thumbnailPath)
    };
  }
  normalizeLevel(level) {
    if (level === "Intermediate" || level === "Advanced") {
      return level;
    }
    return "Beginner";
  }
  normalizeVideoType(videoType) {
    if (videoType === "Vimeo" || videoType === "Direct URL") {
      return videoType;
    }
    return "YouTube";
  }
  clearCourseUploadState() {
    this.selectedCourseThumbnailFile.set(null);
    this.selectedCourseThumbnailPreview.set("");
  }
  clearLessonUploadState() {
    this.selectedLessonThumbnailFile.set(null);
    this.selectedLessonThumbnailPreview.set("");
    this.selectedLessonVideoFile.set(null);
  }
  setNotice(message, type) {
    this.notice.set(message);
    this.noticeType.set(type);
  }
  extractApiErrorMessage(error, fallbackMessage) {
    if (error instanceof HttpErrorResponse) {
      const errorBody = error.error;
      const validationErrors = errorBody && typeof errorBody?.errors === "object" ? Object.values(errorBody.errors).flat().join(" | ") : "";
      const rawBackendMessage = typeof errorBody === "string" && errorBody || typeof errorBody?.Details === "string" && errorBody.Details || typeof errorBody?.details === "string" && errorBody.details || typeof errorBody?.Message === "string" && errorBody.Message || typeof errorBody?.message === "string" && errorBody.message || typeof errorBody?.title === "string" && errorBody.title || validationErrors || "";
      const backendMessage = this.normalizeBackendMessage(rawBackendMessage);
      if (backendMessage) {
        return `${fallbackMessage} (${error.status}): ${backendMessage}`;
      }
      if (error.status === 500) {
        return `${fallbackMessage} (500): \u09B8\u09BE\u09B0\u09CD\u09AD\u09BE\u09B0\u09C7 Internal Error \u09B9\u09DF\u09C7\u099B\u09C7\u0964 Backend log \u09A6\u09C7\u0996\u09C7 exact exception \u09A0\u09BF\u0995 \u0995\u09B0\u09A4\u09C7 \u09B9\u09AC\u09C7\u0964`;
      }
      return `${fallbackMessage} (HTTP ${error.status})`;
    }
    return fallbackMessage;
  }
  normalizeBackendMessage(message) {
    if (!message) {
      return "";
    }
    const noHtml = message.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
    const withoutQuestionMarks = noHtml.replace(/[?؟]/g, "").trim();
    if (!withoutQuestionMarks) {
      return "";
    }
    return noHtml;
  }
  static \u0275fac = function Teacher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Teacher)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Teacher, selectors: [["app-teacher"]], decls: 16, vars: 4, consts: [[1, "teacher-page"], ["aria-label", "Teacher dashboard navigation", 1, "sidebar"], [1, "sidebar-head"], [1, "sidebar-nav"], ["type", "button", 1, "side-link", 3, "active"], ["type", "button", 1, "back-site", 3, "click"], [1, "dashboard-area"], [1, "notice", 3, "notice-error"], ["role", "dialog", "aria-modal", "true", "aria-label", "Course editor dialog", 1, "modal-backdrop"], ["role", "dialog", "aria-modal", "true", "aria-label", "Lesson editor dialog", 1, "modal-backdrop"], ["type", "button", 1, "side-link", 3, "click"], [1, "icon"], [1, "notice"], [1, "toolbar"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["aria-label", "Course list", 1, "panel"], ["type", "search", "placeholder", "Search courses...", 1, "search-input", 3, "input", "value"], [1, "table-wrap"], [1, "loading-text"], [1, "course-title-cell"], [1, "thumb", 3, "src", "alt"], [1, "thumb", "placeholder"], [1, "chip"], [1, "status"], [1, "actions-cell"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["colspan", "8", 1, "empty-state"], ["type", "button", 1, "link-btn", 3, "click"], ["aria-label", "Lesson list", 1, "panel", "lesson-list"], [1, "lesson-item"], [1, "empty-state"], [1, "lesson-order"], [1, "lesson-content"], [1, "lesson-meta"], [1, "lesson-actions"], ["target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-outline", 3, "href"], [1, "modal-card"], [1, "modal-head"], ["type", "button", 1, "icon-btn", 3, "click"], [1, "form-grid", 3, "ngSubmit", "formGroup"], ["type", "text", "formControlName", "title"], ["type", "text", "formControlName", "category"], [1, "full"], ["rows", "3", "formControlName", "description"], ["type", "text", "formControlName", "instructorName"], ["formControlName", "level"], ["value", "Beginner"], ["value", "Intermediate"], ["value", "Advanced"], ["type", "number", "formControlName", "price"], ["type", "number", "formControlName", "durationMinutes"], ["type", "url", "formControlName", "thumbnailUrl", "placeholder", "https://example.com/thumbnail.jpg"], [1, "full", "upload-field"], ["type", "file", "accept", "image/*", 3, "change"], [1, "full", "preview-wrap"], [1, "checkbox", "full"], ["type", "checkbox", "formControlName", "published"], [1, "modal-actions", "full"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["alt", "Selected thumbnail preview", 1, "thumb-preview", 3, "src"], ["formControlName", "videoType"], ["value", "YouTube"], ["value", "Vimeo"], ["value", "Direct URL"], ["type", "number", "formControlName", "orderIndex"], ["type", "url", "formControlName", "videoUrl", "placeholder", "https://www.youtube.com/watch?v=..."], ["type", "file", "accept", "video/*", 3, "change"], ["type", "url", "formControlName", "resourceUrl"], ["type", "checkbox", "formControlName", "isPreview"], ["alt", "Selected lesson thumbnail preview", 1, "thumb-preview", 3, "src"]], template: function Teacher_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "aside", 1)(2, "div", 2)(3, "h2");
      \u0275\u0275text(4, "\u2699 Admin Panel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "nav", 3);
      \u0275\u0275repeaterCreate(6, Teacher_For_7_Template, 5, 4, "button", 4, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function Teacher_Template_button_click_8_listener() {
        return ctx.goToHome();
      });
      \u0275\u0275text(9, "\u2190 Back to Site");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "section", 6);
      \u0275\u0275conditionalCreate(11, Teacher_Conditional_11_Template, 2, 3, "div", 7);
      \u0275\u0275conditionalCreate(12, Teacher_Conditional_12_Template, 35, 3)(13, Teacher_Conditional_13_Template, 15, 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(14, Teacher_Conditional_14_Template, 60, 4, "div", 8);
      \u0275\u0275conditionalCreate(15, Teacher_Conditional_15_Template, 60, 4, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.sidebarItems);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.notice() ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedCourse() === null ? 12 : 13);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isCourseEditorOpen() ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLessonEditorOpen() ? 15 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n.teacher-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 240px minmax(0, 1fr);\n  background: #eef0f6;\n  color: #171b2f;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  padding: 18px 14px;\n  background:\n    linear-gradient(\n      180deg,\n      #0f1230 0%,\n      #151a3e 100%);\n  color: #e5e9ff;\n  border-right: 1px solid rgba(255, 255, 255, 0.08);\n}\n.sidebar-head[_ngcontent-%COMP%] {\n  padding: 8px 10px 14px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.sidebar-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n  padding-top: 14px;\n}\n.side-link[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-height: 42px;\n  padding: 0 10px;\n  border: 1px solid transparent;\n  border-radius: 10px;\n  background: transparent;\n  color: rgba(231, 236, 255, 0.84);\n  font-size: 0.95rem;\n  text-align: left;\n  cursor: pointer;\n  transition: background 0.2s ease, color 0.2s ease;\n}\n.side-link[_ngcontent-%COMP%]:hover, \n.side-link.active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  color: #ffffff;\n}\n.icon[_ngcontent-%COMP%] {\n  width: 18px;\n  text-align: center;\n}\n.back-site[_ngcontent-%COMP%] {\n  margin-top: auto;\n  min-height: 38px;\n  border: none;\n  border-radius: 10px;\n  background: transparent;\n  color: rgba(188, 199, 255, 0.9);\n  font-size: 0.9rem;\n  text-align: left;\n  cursor: pointer;\n}\n.dashboard-area[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: grid;\n  gap: 18px;\n  align-content: start;\n}\n.notice[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border-radius: 10px;\n  border: 1px solid #bfe3ca;\n  background: #edf9f1;\n  color: #12753e;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.notice.notice-error[_ngcontent-%COMP%] {\n  border-color: #f0b2b2;\n  background: #fff1f1;\n  color: #b42323;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  align-self: start;\n}\n.toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2rem;\n  line-height: 1.1;\n  letter-spacing: -0.02em;\n}\n.toolbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: rgba(23, 27, 47, 0.64);\n  font-size: 0.95rem;\n}\n.panel[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.86);\n  border: 1px solid rgba(84, 98, 154, 0.18);\n  border-radius: 14px;\n  box-shadow: 0 10px 26px rgba(20, 26, 56, 0.08);\n  padding: 16px;\n}\n.search-input[_ngcontent-%COMP%], \nlabel[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \nlabel[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \nlabel[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 42px;\n  border: 1px solid #d5d9ea;\n  border-radius: 9px;\n  background: #ffffff;\n  color: #171b2f;\n  padding: 0 12px;\n  font-size: 0.95rem;\n}\n.search-input[_ngcontent-%COMP%] {\n  max-width: 280px;\n  margin-bottom: 14px;\n}\n.loading-text[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  color: rgba(23, 27, 47, 0.62);\n  font-size: 0.9rem;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n}\nlabel[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  min-height: 96px;\n  resize: vertical;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow: auto;\n  border: 1px solid #e4e7f2;\n  border-radius: 12px;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 900px;\n  background: rgba(255, 255, 255, 0.92);\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 12px 14px;\n  border-bottom: 1px solid #eceff8;\n  font-size: 0.92rem;\n}\nth[_ngcontent-%COMP%] {\n  color: rgba(23, 27, 47, 0.56);\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\ntr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.course-title-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 700;\n}\n.thumb[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 8px;\n  object-fit: cover;\n  border: 1px solid #dde3f2;\n  background: #f3f5fd;\n}\n.thumb.placeholder[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  font-weight: 700;\n  color: #4f5ccf;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 22px;\n  padding: 0 9px;\n  border-radius: 999px;\n  background: #ebefff;\n  color: #5a66b5;\n  font-size: 0.76rem;\n}\n.status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 22px;\n  padding: 0 9px;\n  border-radius: 999px;\n  font-size: 0.76rem;\n  background: #edf1f7;\n  color: #63708d;\n}\n.status.live[_ngcontent-%COMP%] {\n  background: #e6f6ec;\n  color: #1f8f58;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn[_ngcontent-%COMP%] {\n  min-height: 34px;\n  padding: 0 12px;\n  border-radius: 9px;\n  border: 1px solid transparent;\n  font-size: 0.86rem;\n  font-weight: 700;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: filter 0.2s ease, transform 0.2s ease;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  filter: brightness(0.98);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #5f6ecc;\n  border-color: #5f6ecc;\n  color: #ffffff;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #96a3e7;\n  color: #4d59bd;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: #f6f7fc;\n  border-color: #d6dced;\n  color: #3f4560;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #ff8f8f;\n  color: #d22f2f;\n}\n.lesson-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n.lesson-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 14px;\n  border: 1px solid #e3e7f4;\n  border-radius: 12px;\n  padding: 12px 14px;\n  background: #ffffff;\n}\n.lesson-order[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #5463cd;\n  background: #eef1ff;\n}\n.lesson-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.07rem;\n}\n.lesson-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0;\n  color: rgba(23, 27, 47, 0.68);\n  font-size: 0.9rem;\n}\n.lesson-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  color: rgba(23, 27, 47, 0.62);\n  font-size: 0.8rem;\n}\n.lesson-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.link-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: #5f6ecc;\n  font-size: 0.93rem;\n  font-weight: 700;\n  padding: 0;\n  margin-bottom: 8px;\n  cursor: pointer;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(18, 20, 34, 0.48);\n  display: grid;\n  place-items: center;\n  z-index: 100;\n  padding: 16px;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: min(760px, 100%);\n  max-height: calc(100vh - 32px);\n  overflow: auto;\n  background: #ffffff;\n  border-radius: 16px;\n  border: 1px solid #e2e7f5;\n  box-shadow: 0 28px 50px rgba(9, 10, 21, 0.2);\n  padding: 18px;\n}\n.modal-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.modal-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.8rem;\n  letter-spacing: -0.02em;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  border: none;\n  background: #f1f4fb;\n  color: #5e6688;\n  cursor: pointer;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 5px;\n}\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(23, 27, 47, 0.66);\n  font-size: 0.86rem;\n  font-weight: 700;\n}\nlabel.full[_ngcontent-%COMP%], \n.modal-actions.full[_ngcontent-%COMP%], \n.preview-wrap.full[_ngcontent-%COMP%], \n.checkbox.full[_ngcontent-%COMP%], \n.upload-field.full[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.upload-field[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  min-height: auto;\n  border: 1px dashed #c6cde5;\n  background: #f8f9ff;\n  padding: 10px;\n}\n.checkbox[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.thumb-preview[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 220px;\n  object-fit: cover;\n  border-radius: 12px;\n  border: 1px solid #d8deef;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding-top: 8px;\n}\n@media (max-width: 980px) {\n  .teacher-page[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    position: static;\n    min-height: auto;\n    border-right: none;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n  }\n  .sidebar-nav[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .back-site[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n}\n@media (max-width: 760px) {\n  .dashboard-area[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n  .toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .lesson-item[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 10px;\n  }\n  .lesson-actions[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    flex-wrap: wrap;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sidebar-nav[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=teacher.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Teacher, [{
    type: Component,
    args: [{ selector: "app-teacher", imports: [ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="teacher-page">\r
  <aside class="sidebar" aria-label="Teacher dashboard navigation">\r
    <div class="sidebar-head">\r
      <h2>\u2699 Admin Panel</h2>\r
    </div>\r
\r
    <nav class="sidebar-nav">\r
      @for (item of sidebarItems; track item.key) {\r
        <button\r
          type="button"\r
          class="side-link"\r
          [class.active]="item.key === activeSidebarKey()"\r
          (click)="selectSidebar(item.key)">\r
          <span class="icon">{{ item.icon }}</span>\r
          <span>{{ item.label }}</span>\r
        </button>\r
      }\r
    </nav>\r
\r
    <button type="button" class="back-site" (click)="goToHome()">\u2190 Back to Site</button>\r
  </aside>\r
\r
  <section class="dashboard-area">\r
    @if (notice()) {\r
      <div class="notice" [class.notice-error]="noticeType() === 'error'">{{ notice() }}</div>\r
    }\r
\r
    @if (selectedCourse() === null) {\r
      <header class="toolbar">\r
        <div>\r
          <h1>Courses</h1>\r
          <p>Manage course content, thumbnails, and publish status.</p>\r
        </div>\r
        <button type="button" class="btn btn-primary" (click)="openNewCourseModal()">+ New Course</button>\r
      </header>\r
\r
      <section class="panel" aria-label="Course list">\r
        <input\r
          type="search"\r
          class="search-input"\r
          placeholder="Search courses..."\r
          [value]="searchTerm()"\r
          (input)="updateSearchTerm($any($event.target).value)" />\r
\r
        <div class="table-wrap">\r
          <table>\r
            <thead>\r
              <tr>\r
                <th>Title</th>\r
                <th>Category</th>\r
                <th>Level</th>\r
                <th>Price</th>\r
                <th>Lessons</th>\r
                <th>Students</th>\r
                <th>Status</th>\r
                <th>Actions</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (course of filteredCourses(); track course.id) {\r
                <tr>\r
                  <td>\r
                    <div class="course-title-cell">\r
                      @if (canRenderThumbnail(course.thumbnailUrl)) {\r
                        <img [src]="course.thumbnailUrl" [alt]="course.title + ' thumbnail'" class="thumb" />\r
                      } @else {\r
                        <div class="thumb placeholder">{{ course.title.charAt(0) }}</div>\r
                      }\r
                      <span>{{ course.title }}</span>\r
                    </div>\r
                  </td>\r
                  <td><span class="chip">{{ course.category }}</span></td>\r
                  <td>{{ course.level }}</td>\r
                  <td>{{ formatPrice(course.price) }}</td>\r
                  <td>{{ course.lessonCount }}</td>\r
                  <td>{{ course.students }}</td>\r
                  <td>\r
                    <span class="status" [class.live]="course.published">\r
                      {{ course.published ? 'Published' : 'Draft' }}\r
                    </span>\r
                  </td>\r
                  <td class="actions-cell">\r
                    <button type="button" class="btn btn-outline" (click)="openLessons(course.id)">Lessons</button>\r
                    <button type="button" class="btn btn-ghost" (click)="openEditCourseModal(course.id)">Edit</button>\r
                    <button type="button" class="btn btn-danger" (click)="deleteCourse(course.id)">Delete</button>\r
                  </td>\r
                </tr>\r
              }\r
\r
              @if (!isLoadingCourses() && filteredCourses().length === 0) {\r
                <tr>\r
                  <td colspan="8" class="empty-state">No course found.</td>\r
                </tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
\r
        @if (isLoadingCourses()) {\r
          <p class="loading-text">Loading courses...</p>\r
        }\r
      </section>\r
    } @else {\r
      <header class="toolbar">\r
        <div>\r
          <button type="button" class="link-btn" (click)="closeLessonsView()">\u2190 Back to Courses</button>\r
          <h1>Lessons for {{ currentCourseName() }}</h1>\r
          <p>Add or edit lesson videos and resources from this panel.</p>\r
        </div>\r
        <button type="button" class="btn btn-primary" (click)="openNewLessonModal()">+ Add Lesson</button>\r
      </header>\r
\r
      <section class="panel lesson-list" aria-label="Lesson list">\r
        @if (isLoadingLessons()) {\r
          <p class="loading-text">Loading lessons...</p>\r
        }\r
\r
        @for (lesson of sortedLessons(); track lesson.id) {\r
          <article class="lesson-item">\r
            <div class="lesson-order">{{ lesson.orderIndex }}</div>\r
            <div class="lesson-content">\r
              <h3>{{ lesson.title }}</h3>\r
              @if (lesson.description) {\r
                <p>{{ lesson.description }}</p>\r
              }\r
              <div class="lesson-meta">\r
                <span>{{ lesson.videoType }}</span>\r
                <span>{{ lesson.durationMinutes }}min</span>\r
                @if (lesson.isPreview) {\r
                  <span class="chip">Preview</span>\r
                }\r
              </div>\r
            </div>\r
            <div class="lesson-actions">\r
              @if (lesson.videoUrl) {\r
                <a class="btn btn-outline" [href]="lesson.videoUrl" target="_blank" rel="noopener noreferrer">\r
                  Open Video\r
                </a>\r
              }\r
              @if (lesson.thumbnailUrl) {\r
                <a class="btn btn-outline" [href]="lesson.thumbnailUrl" target="_blank" rel="noopener noreferrer">\r
                  Thumbnail\r
                </a>\r
              }\r
              <button type="button" class="btn btn-ghost" (click)="openEditLessonModal(lesson.id)">Edit</button>\r
              <button type="button" class="btn btn-danger" (click)="deleteLesson(lesson.id)">Delete</button>\r
            </div>\r
          </article>\r
        }\r
\r
        @if (!isLoadingLessons() && sortedLessons().length === 0) {\r
          <p class="empty-state">No lesson found for this course.</p>\r
        }\r
      </section>\r
    }\r
  </section>\r
\r
  @if (isCourseEditorOpen()) {\r
    <div class="modal-backdrop" role="dialog" aria-modal="true" aria-label="Course editor dialog">\r
      <div class="modal-card">\r
        <div class="modal-head">\r
          <h2>{{ courseModalTitle() }}</h2>\r
          <button type="button" class="icon-btn" (click)="closeCourseModal()">\u2715</button>\r
        </div>\r
\r
        <form class="form-grid" [formGroup]="courseForm" (ngSubmit)="saveCourse()">\r
          <label>\r
            <span>Title *</span>\r
            <input type="text" formControlName="title" />\r
          </label>\r
\r
          <label>\r
            <span>Category *</span>\r
            <input type="text" formControlName="category" />\r
          </label>\r
\r
          <label class="full">\r
            <span>Description *</span>\r
            <textarea rows="3" formControlName="description"></textarea>\r
          </label>\r
\r
          <label>\r
            <span>Instructor Name</span>\r
            <input type="text" formControlName="instructorName" />\r
          </label>\r
\r
          <label>\r
            <span>Level</span>\r
            <select formControlName="level">\r
              <option value="Beginner">Beginner</option>\r
              <option value="Intermediate">Intermediate</option>\r
              <option value="Advanced">Advanced</option>\r
            </select>\r
          </label>\r
\r
          <label>\r
            <span>Price (0 = Free)</span>\r
            <input type="number" formControlName="price" />\r
          </label>\r
\r
          <label>\r
            <span>Duration (minutes)</span>\r
            <input type="number" formControlName="durationMinutes" />\r
          </label>\r
\r
          <label class="full">\r
            <span>Thumbnail URL</span>\r
            <input type="url" formControlName="thumbnailUrl" placeholder="https://example.com/thumbnail.jpg" />\r
          </label>\r
\r
          <label class="full upload-field">\r
            <span>Or Upload Thumbnail Image</span>\r
            <input type="file" accept="image/*" (change)="onThumbnailSelected($event)" />\r
          </label>\r
\r
          @if (canRenderThumbnail(resolveCoursePreviewThumbnail())) {\r
            <div class="full preview-wrap">\r
              <img\r
                class="thumb-preview"\r
                [src]="resolveCoursePreviewThumbnail()"\r
                alt="Selected thumbnail preview" />\r
            </div>\r
          }\r
\r
          <label class="checkbox full">\r
            <input type="checkbox" formControlName="published" />\r
            <span>Publish course</span>\r
          </label>\r
\r
          <div class="modal-actions full">\r
            <button type="button" class="btn btn-ghost" (click)="closeCourseModal()">Cancel</button>\r
            <button type="submit" class="btn btn-primary" [disabled]="isCourseFormInvalid()">Save Course</button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  }\r
\r
  @if (isLessonEditorOpen()) {\r
    <div class="modal-backdrop" role="dialog" aria-modal="true" aria-label="Lesson editor dialog">\r
      <div class="modal-card">\r
        <div class="modal-head">\r
          <h2>{{ lessonModalTitle() }}</h2>\r
          <button type="button" class="icon-btn" (click)="closeLessonModal()">\u2715</button>\r
        </div>\r
\r
        <form class="form-grid" [formGroup]="lessonForm" (ngSubmit)="saveLesson()">\r
          <label class="full">\r
            <span>Lesson Title *</span>\r
            <input type="text" formControlName="title" />\r
          </label>\r
\r
          <label class="full">\r
            <span>Description</span>\r
            <textarea rows="3" formControlName="description"></textarea>\r
          </label>\r
\r
          <label>\r
            <span>Video Type</span>\r
            <select formControlName="videoType">\r
              <option value="YouTube">YouTube</option>\r
              <option value="Vimeo">Vimeo</option>\r
              <option value="Direct URL">Direct URL</option>\r
            </select>\r
          </label>\r
\r
          <label>\r
            <span>Order Index</span>\r
            <input type="number" formControlName="orderIndex" />\r
          </label>\r
\r
          <label class="full">\r
            <span>Video URL</span>\r
            <input type="url" formControlName="videoUrl" placeholder="https://www.youtube.com/watch?v=..." />\r
          </label>\r
\r
          <label class="full upload-field">\r
            <span>Or Upload Video File</span>\r
            <input type="file" accept="video/*" (change)="onLessonVideoFileSelected($event)" />\r
          </label>\r
\r
          <label class="full upload-field">\r
            <span>Lesson Thumbnail (optional)</span>\r
            <input type="file" accept="image/*" (change)="onLessonThumbnailSelected($event)" />\r
          </label>\r
\r
          @if (canRenderThumbnail(resolveLessonPreviewThumbnail())) {\r
            <div class="full preview-wrap">\r
              <img\r
                class="thumb-preview"\r
                [src]="resolveLessonPreviewThumbnail()"\r
                alt="Selected lesson thumbnail preview" />\r
            </div>\r
          }\r
\r
          <label>\r
            <span>Duration (minutes)</span>\r
            <input type="number" formControlName="durationMinutes" />\r
          </label>\r
\r
          <label>\r
            <span>Resource URL (optional)</span>\r
            <input type="url" formControlName="resourceUrl" />\r
          </label>\r
\r
          <label class="checkbox full">\r
            <input type="checkbox" formControlName="isPreview" />\r
            <span>Free preview lesson</span>\r
          </label>\r
\r
          <div class="modal-actions full">\r
            <button type="button" class="btn btn-ghost" (click)="closeLessonModal()">Cancel</button>\r
            <button type="submit" class="btn btn-primary" [disabled]="isLessonFormInvalid()">Save Lesson</button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  }\r
</main>\r
`, styles: ["/* src/app/base/teacher/teacher.css */\n.teacher-page {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 240px minmax(0, 1fr);\n  background: #eef0f6;\n  color: #171b2f;\n}\n.sidebar {\n  position: sticky;\n  top: 0;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  padding: 18px 14px;\n  background:\n    linear-gradient(\n      180deg,\n      #0f1230 0%,\n      #151a3e 100%);\n  color: #e5e9ff;\n  border-right: 1px solid rgba(255, 255, 255, 0.08);\n}\n.sidebar-head {\n  padding: 8px 10px 14px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.sidebar-head h2 {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n}\n.sidebar-nav {\n  display: grid;\n  gap: 6px;\n  padding-top: 14px;\n}\n.side-link {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-height: 42px;\n  padding: 0 10px;\n  border: 1px solid transparent;\n  border-radius: 10px;\n  background: transparent;\n  color: rgba(231, 236, 255, 0.84);\n  font-size: 0.95rem;\n  text-align: left;\n  cursor: pointer;\n  transition: background 0.2s ease, color 0.2s ease;\n}\n.side-link:hover,\n.side-link.active {\n  background: rgba(255, 255, 255, 0.1);\n  color: #ffffff;\n}\n.icon {\n  width: 18px;\n  text-align: center;\n}\n.back-site {\n  margin-top: auto;\n  min-height: 38px;\n  border: none;\n  border-radius: 10px;\n  background: transparent;\n  color: rgba(188, 199, 255, 0.9);\n  font-size: 0.9rem;\n  text-align: left;\n  cursor: pointer;\n}\n.dashboard-area {\n  padding: 24px;\n  display: grid;\n  gap: 18px;\n  align-content: start;\n}\n.notice {\n  padding: 10px 12px;\n  border-radius: 10px;\n  border: 1px solid #bfe3ca;\n  background: #edf9f1;\n  color: #12753e;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.notice.notice-error {\n  border-color: #f0b2b2;\n  background: #fff1f1;\n  color: #b42323;\n}\n.toolbar {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  align-self: start;\n}\n.toolbar h1 {\n  margin: 0;\n  font-size: 2rem;\n  line-height: 1.1;\n  letter-spacing: -0.02em;\n}\n.toolbar p {\n  margin: 8px 0 0;\n  color: rgba(23, 27, 47, 0.64);\n  font-size: 0.95rem;\n}\n.panel {\n  background: rgba(255, 255, 255, 0.86);\n  border: 1px solid rgba(84, 98, 154, 0.18);\n  border-radius: 14px;\n  box-shadow: 0 10px 26px rgba(20, 26, 56, 0.08);\n  padding: 16px;\n}\n.search-input,\nlabel input,\nlabel textarea,\nlabel select {\n  width: 100%;\n  min-height: 42px;\n  border: 1px solid #d5d9ea;\n  border-radius: 9px;\n  background: #ffffff;\n  color: #171b2f;\n  padding: 0 12px;\n  font-size: 0.95rem;\n}\n.search-input {\n  max-width: 280px;\n  margin-bottom: 14px;\n}\n.loading-text,\n.empty-state {\n  margin: 12px 0 0;\n  color: rgba(23, 27, 47, 0.62);\n  font-size: 0.9rem;\n}\n.empty-state {\n  text-align: center;\n}\nlabel textarea {\n  padding: 10px 12px;\n  min-height: 96px;\n  resize: vertical;\n}\n.table-wrap {\n  overflow: auto;\n  border: 1px solid #e4e7f2;\n  border-radius: 12px;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 900px;\n  background: rgba(255, 255, 255, 0.92);\n}\nth,\ntd {\n  text-align: left;\n  padding: 12px 14px;\n  border-bottom: 1px solid #eceff8;\n  font-size: 0.92rem;\n}\nth {\n  color: rgba(23, 27, 47, 0.56);\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\ntr:last-child td {\n  border-bottom: none;\n}\n.course-title-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 700;\n}\n.thumb {\n  width: 44px;\n  height: 44px;\n  border-radius: 8px;\n  object-fit: cover;\n  border: 1px solid #dde3f2;\n  background: #f3f5fd;\n}\n.thumb.placeholder {\n  display: grid;\n  place-items: center;\n  font-weight: 700;\n  color: #4f5ccf;\n}\n.chip {\n  display: inline-flex;\n  align-items: center;\n  min-height: 22px;\n  padding: 0 9px;\n  border-radius: 999px;\n  background: #ebefff;\n  color: #5a66b5;\n  font-size: 0.76rem;\n}\n.status {\n  display: inline-flex;\n  align-items: center;\n  min-height: 22px;\n  padding: 0 9px;\n  border-radius: 999px;\n  font-size: 0.76rem;\n  background: #edf1f7;\n  color: #63708d;\n}\n.status.live {\n  background: #e6f6ec;\n  color: #1f8f58;\n}\n.actions-cell {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn {\n  min-height: 34px;\n  padding: 0 12px;\n  border-radius: 9px;\n  border: 1px solid transparent;\n  font-size: 0.86rem;\n  font-weight: 700;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: filter 0.2s ease, transform 0.2s ease;\n}\n.btn:hover {\n  transform: translateY(-1px);\n  filter: brightness(0.98);\n}\n.btn:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-primary {\n  background: #5f6ecc;\n  border-color: #5f6ecc;\n  color: #ffffff;\n}\n.btn-outline {\n  background: #ffffff;\n  border-color: #96a3e7;\n  color: #4d59bd;\n}\n.btn-ghost {\n  background: #f6f7fc;\n  border-color: #d6dced;\n  color: #3f4560;\n}\n.btn-danger {\n  background: #ffffff;\n  border-color: #ff8f8f;\n  color: #d22f2f;\n}\n.lesson-list {\n  display: grid;\n  gap: 10px;\n}\n.lesson-item {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 14px;\n  border: 1px solid #e3e7f4;\n  border-radius: 12px;\n  padding: 12px 14px;\n  background: #ffffff;\n}\n.lesson-order {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #5463cd;\n  background: #eef1ff;\n}\n.lesson-content h3 {\n  margin: 0;\n  font-size: 1.07rem;\n}\n.lesson-content p {\n  margin: 6px 0;\n  color: rgba(23, 27, 47, 0.68);\n  font-size: 0.9rem;\n}\n.lesson-meta {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  color: rgba(23, 27, 47, 0.62);\n  font-size: 0.8rem;\n}\n.lesson-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.link-btn {\n  border: none;\n  background: transparent;\n  color: #5f6ecc;\n  font-size: 0.93rem;\n  font-weight: 700;\n  padding: 0;\n  margin-bottom: 8px;\n  cursor: pointer;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(18, 20, 34, 0.48);\n  display: grid;\n  place-items: center;\n  z-index: 100;\n  padding: 16px;\n}\n.modal-card {\n  width: min(760px, 100%);\n  max-height: calc(100vh - 32px);\n  overflow: auto;\n  background: #ffffff;\n  border-radius: 16px;\n  border: 1px solid #e2e7f5;\n  box-shadow: 0 28px 50px rgba(9, 10, 21, 0.2);\n  padding: 18px;\n}\n.modal-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.modal-head h2 {\n  margin: 0;\n  font-size: 1.8rem;\n  letter-spacing: -0.02em;\n}\n.icon-btn {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  border: none;\n  background: #f1f4fb;\n  color: #5e6688;\n  cursor: pointer;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\nlabel {\n  display: grid;\n  gap: 5px;\n}\nlabel span {\n  color: rgba(23, 27, 47, 0.66);\n  font-size: 0.86rem;\n  font-weight: 700;\n}\nlabel.full,\n.modal-actions.full,\n.preview-wrap.full,\n.checkbox.full,\n.upload-field.full {\n  grid-column: 1 / -1;\n}\n.upload-field input[type=file] {\n  min-height: auto;\n  border: 1px dashed #c6cde5;\n  background: #f8f9ff;\n  padding: 10px;\n}\n.checkbox {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.checkbox input {\n  width: 16px;\n  height: 16px;\n}\n.thumb-preview {\n  width: 100%;\n  max-height: 220px;\n  object-fit: cover;\n  border-radius: 12px;\n  border: 1px solid #d8deef;\n}\n.modal-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding-top: 8px;\n}\n@media (max-width: 980px) {\n  .teacher-page {\n    grid-template-columns: 1fr;\n  }\n  .sidebar {\n    position: static;\n    min-height: auto;\n    border-right: none;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n  }\n  .sidebar-nav {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .back-site {\n    margin-top: 10px;\n  }\n}\n@media (max-width: 760px) {\n  .dashboard-area {\n    padding: 14px;\n  }\n  .toolbar {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .lesson-item {\n    grid-template-columns: 1fr;\n    gap: 10px;\n  }\n  .lesson-actions {\n    justify-content: flex-start;\n    flex-wrap: wrap;\n  }\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n  .sidebar-nav {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=teacher.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Teacher, { className: "Teacher", filePath: "app/base/teacher/teacher.ts", lineNumber: 56 });
})();
export {
  Teacher
};
//# sourceMappingURL=chunk-QSGUOG2B.js.map
