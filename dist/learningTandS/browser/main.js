import {
  ActivatedRoute,
  AuthService,
  ChangeDetectionStrategy,
  Component,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  HTTP_INTERCEPTORS,
  Injectable,
  JwtService,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterOutlet,
  SelectControlValueAccessor,
  Validators,
  bootstrapApplication,
  computed,
  inject,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideRouter,
  setClassMetadata,
  signal,
  takeUntilDestroyed,
  withInterceptorsFromDi,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-XJRXZ73E.js";

// src/app/auth/login/login.ts
function Login_Conditional_3_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, "Enter a valid email address.");
    \u0275\u0275elementEnd();
  }
}
function Login_Conditional_3_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, "Password must be at least 6 characters.");
    \u0275\u0275elementEnd();
  }
}
function Login_Conditional_3_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Logging in... ");
  }
}
function Login_Conditional_3_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Login now ");
  }
}
function Login_Conditional_3_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.apiMessage());
  }
}
function Login_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 3)(1, "header", 5)(2, "p", 6);
    \u0275\u0275text(3, "Welcome back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5, "Login to continue your learning journey.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 7);
    \u0275\u0275text(7, " Access your lessons, progress dashboard, and skill streaks from one focused workspace. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 8)(9, "aside", 9)(10, "div", 10)(11, "span", 11);
    \u0275\u0275text(12, "Secure access");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h2");
    \u0275\u0275text(14, "Black-blue learning mode");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ul", 12)(16, "li")(17, "strong");
    \u0275\u0275text(18, "Fast resume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Jump back into your saved course path instantly.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "li")(22, "strong");
    \u0275\u0275text(23, "Progress sync");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "Keep streaks, scores, and milestones in one place.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "li")(27, "strong");
    \u0275\u0275text(28, "Clean focus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30, "Dark interface with sharp blue accents for low distraction.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "form", 13);
    \u0275\u0275listener("ngSubmit", function Login_Conditional_3_Template_form_ngSubmit_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(32, "div", 14)(33, "label", 15);
    \u0275\u0275text(34, "Email address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 16);
    \u0275\u0275conditionalCreate(36, Login_Conditional_3_Conditional_36_Template, 2, 0, "p", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 14)(38, "label", 18);
    \u0275\u0275text(39, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 19);
    \u0275\u0275conditionalCreate(41, Login_Conditional_3_Conditional_41_Template, 2, 0, "p", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 20)(43, "label", 21);
    \u0275\u0275element(44, "input", 22);
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46, "Remember me");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "a", 23);
    \u0275\u0275text(48, "Forgot password?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "button", 24);
    \u0275\u0275conditionalCreate(50, Login_Conditional_3_Conditional_50_Template, 1, 0)(51, Login_Conditional_3_Conditional_51_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(52, Login_Conditional_3_Conditional_52_Template, 2, 1, "p", 25);
    \u0275\u0275elementStart(53, "p", 25);
    \u0275\u0275text(54, " Don't have an account? ");
    \u0275\u0275elementStart(55, "a", 26);
    \u0275\u0275text(56, "Create one");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(31);
    \u0275\u0275property("formGroup", ctx_r1.loginForm);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.loginForm.controls.email.touched && ctx_r1.loginForm.controls.email.invalid ? 36 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.loginForm.controls.password.touched && ctx_r1.loginForm.controls.password.invalid ? 41 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSubmitting() ? 50 : 51);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.apiMessage() ? 52 : -1);
  }
}
function Login_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 27);
    \u0275\u0275element(2, "div", 28)(3, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Logging in and launching your home page...");
    \u0275\u0275elementEnd()();
  }
}
var Login = class _Login {
  authService = inject(AuthService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : (
    /* istanbul ignore next */
    []
  ));
  isRedirecting = signal(false, ...ngDevMode ? [{ debugName: "isRedirecting" }] : (
    /* istanbul ignore next */
    []
  ));
  apiMessage = signal("", ...ngDevMode ? [{ debugName: "apiMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  loginForm = new FormGroup({
    email: new FormControl("", {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl("", {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)]
    })
  });
  submit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid || this.isSubmitting() || this.isRedirecting()) {
      return;
    }
    const payload = this.loginForm.getRawValue();
    this.isSubmitting.set(true);
    this.apiMessage.set("");
    this.authService.login(payload.email, payload.password).subscribe({
      next: async (response) => {
        this.isSubmitting.set(false);
        this.apiMessage.set(response.message ?? "Login successful. Preparing your dashboard...");
        this.isRedirecting.set(true);
        await this.delay(2e3);
        const returnUrl = this.route.snapshot.queryParams["returnUrl"];
        await this.router.navigateByUrl(returnUrl || "/homepage");
      },
      error: (error) => {
        this.isSubmitting.set(false);
        const errorMessage = error.error?.message || "Login failed. Please check your credentials and try again.";
        this.apiMessage.set(errorMessage);
      }
    });
  }
  delay(ms) {
    return new Promise((resolve) => {
      window.setTimeout(() => resolve(), ms);
    });
  }
  static \u0275fac = function Login_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Login)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Login, selectors: [["app-login"]], decls: 5, vars: 2, consts: [[1, "auth-shell"], [1, "auth-glow", "auth-glow-left"], [1, "auth-glow", "auth-glow-right"], [1, "auth-card", "card-surface"], ["aria-live", "polite", "aria-label", "Loading your home page", 1, "redirect-loader"], [1, "auth-copy"], [1, "eyebrow"], [1, "lead"], [1, "auth-layout"], [1, "auth-panel"], [1, "auth-panel-header"], [1, "panel-pill"], ["aria-label", "Login benefits", 1, "feature-list"], [1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "you@example.com"], [1, "field-error"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"], [1, "form-row"], [1, "remember"], ["type", "checkbox"], ["href", "#", 1, "forgot-link"], ["type", "submit", 1, "submit-button", 3, "disabled"], [1, "auth-footer"], ["routerLink", "/register"], ["aria-hidden", "true", 1, "loader-rail"], [1, "loader-line"], [1, "loader-orb"]], template: function Login_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2);
      \u0275\u0275conditionalCreate(3, Login_Conditional_3_Template, 57, 6, "section", 3);
      \u0275\u0275conditionalCreate(4, Login_Conditional_4_Template, 6, 0, "section", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.isRedirecting() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isRedirecting() ? 4 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n.auth-shell[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  padding: 24px;\n  display: grid;\n  place-items: center;\n  overflow: hidden;\n}\n.auth-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 999px;\n  filter: blur(18px);\n  pointer-events: none;\n  opacity: 0.7;\n}\n.auth-glow-left[_ngcontent-%COMP%] {\n  top: -80px;\n  left: -80px;\n  width: 280px;\n  height: 280px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(26, 97, 255, 0.45) 0%,\n      rgba(5, 8, 20, 0) 72%);\n}\n.auth-glow-right[_ngcontent-%COMP%] {\n  right: -60px;\n  bottom: 40px;\n  width: 340px;\n  height: 340px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(78, 182, 255, 0.22) 0%,\n      rgba(5, 8, 20, 0) 72%);\n}\n.auth-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: min(1120px, 100%);\n  padding: 34px;\n  border-radius: 28px;\n}\n.auth-copy[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.eyebrow[_ngcontent-%COMP%], \n.panel-pill[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: #74a9ff;\n}\n.auth-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 10px 0 12px;\n  font-size: clamp(2.2rem, 4vw, 4rem);\n  line-height: 0.98;\n  letter-spacing: -0.05em;\n}\n.lead[_ngcontent-%COMP%] {\n  max-width: 64ch;\n  color: rgba(226, 236, 255, 0.74);\n  line-height: 1.75;\n}\n.auth-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 0.92fr) minmax(340px, 1.08fr);\n  gap: 18px;\n}\n.auth-panel[_ngcontent-%COMP%], \n.auth-form[_ngcontent-%COMP%] {\n  border-radius: 24px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(122, 177, 255, 0.14);\n}\n.auth-panel[_ngcontent-%COMP%] {\n  padding: 26px;\n}\n.auth-panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  font-size: 1.5rem;\n}\n.feature-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 22px 0 0;\n  padding: 0;\n  display: grid;\n  gap: 14px;\n}\n.feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 18px;\n  background: rgba(9, 12, 25, 0.45);\n  border: 1px solid rgba(122, 177, 255, 0.08);\n}\n.feature-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  color: #f6f9ff;\n}\n.feature-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(223, 234, 255, 0.72);\n  line-height: 1.6;\n}\n.auth-form[_ngcontent-%COMP%] {\n  padding: 26px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #edf4ff;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 52px;\n  padding: 0 16px;\n  border-radius: 16px;\n  border: 1px solid rgba(122, 177, 255, 0.16);\n  background: rgba(5, 8, 18, 0.85);\n  color: #f3f7ff;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: rgba(110, 192, 255, 0.8);\n  box-shadow: 0 0 0 4px rgba(26, 97, 255, 0.16);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(223, 234, 255, 0.42);\n}\n.field-error[_ngcontent-%COMP%] {\n  color: #f3536d;\n  font-size: 0.92rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.remember[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: rgba(231, 240, 255, 0.84);\n}\n.forgot-link[_ngcontent-%COMP%], \n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8cc5ff;\n  text-decoration: none;\n  font-weight: 700;\n}\n.submit-button[_ngcontent-%COMP%] {\n  min-height: 52px;\n  border: 0;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a61ff,\n      #4eb6ff);\n  color: #f8fbff;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n  box-shadow: 0 16px 30px rgba(26, 97, 255, 0.24);\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n}\n.submit-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 18px 34px rgba(26, 97, 255, 0.3);\n}\n.auth-footer[_ngcontent-%COMP%] {\n  margin: 0;\n  color: rgba(223, 234, 255, 0.76);\n  text-align: center;\n}\n.redirect-loader[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 60;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 26px;\n  padding: 24px 5vw;\n  background:\n    radial-gradient(\n      circle at 20% 30%,\n      rgba(26, 97, 255, 0.22),\n      transparent 36%),\n    radial-gradient(\n      circle at 80% 70%,\n      rgba(78, 182, 255, 0.16),\n      transparent 40%),\n    rgba(3, 6, 14, 0.9);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.redirect-loader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n  font-size: clamp(1.05rem, 2.6vw, 1.35rem);\n  font-weight: 700;\n  letter-spacing: 0.015em;\n  color: #e8f2ff;\n}\n.loader-rail[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(1100px, 100%);\n  margin-inline: auto;\n  height: 92px;\n  overflow: hidden;\n}\n.loader-line[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 100%;\n  height: 22px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(26, 97, 255, 0.9),\n      rgba(92, 193, 255, 0.95));\n  box-shadow: 0 0 34px rgba(70, 170, 255, 0.7);\n  transform: translateY(-50%) scaleX(0);\n  transform-origin: left center;\n  animation: _ngcontent-%COMP%_lineSweep 4s ease forwards;\n}\n.loader-orb[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -72px;\n  top: 50%;\n  width: 72px;\n  height: 72px;\n  margin-top: -36px;\n  border-radius: 50%;\n  border: 5px solid rgba(189, 227, 255, 0.92);\n  border-top-color: rgba(28, 111, 255, 1);\n  background:\n    radial-gradient(\n      circle at 28% 28%,\n      #ffffff 0%,\n      #8aceff 40%,\n      #2f8bff 100%);\n  box-shadow: 0 0 40px rgba(92, 193, 255, 0.75), 0 0 0 8px rgba(76, 178, 255, 0.16);\n  animation: _ngcontent-%COMP%_orbTravel 4s ease forwards, _ngcontent-%COMP%_orbSpin 0.75s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_lineSweep {\n  0% {\n    transform: translateY(-50%) scaleX(0);\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-50%) scaleX(1);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_orbTravel {\n  0% {\n    left: -72px;\n    opacity: 0;\n  }\n  15% {\n    opacity: 1;\n  }\n  50% {\n    left: calc(50% - 36px);\n    opacity: 1;\n  }\n  85% {\n    left: calc(100% - 72px);\n    opacity: 1;\n  }\n  100% {\n    left: calc(100% + 36px);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_orbSpin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 960px) {\n  .auth-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 720px) {\n  .auth-shell[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 22px;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .submit-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=login.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Login, [{
    type: Component,
    args: [{ selector: "app-login", imports: [ReactiveFormsModule, RouterLink], template: `<main class="auth-shell">
	<div class="auth-glow auth-glow-left"></div>
	<div class="auth-glow auth-glow-right"></div>

	@if (!isRedirecting()) {
		<section class="auth-card card-surface">
			<header class="auth-copy">
				<p class="eyebrow">Welcome back</p>
				<h1>Login to continue your learning journey.</h1>
				<p class="lead">
					Access your lessons, progress dashboard, and skill streaks from one focused workspace.
				</p>
			</header>

			<div class="auth-layout">
				<aside class="auth-panel">
					<div class="auth-panel-header">
						<span class="panel-pill">Secure access</span>
						<h2>Black-blue learning mode</h2>
					</div>

					<ul class="feature-list" aria-label="Login benefits">
						<li>
							<strong>Fast resume</strong>
							<span>Jump back into your saved course path instantly.</span>
						</li>
						<li>
							<strong>Progress sync</strong>
							<span>Keep streaks, scores, and milestones in one place.</span>
						</li>
						<li>
							<strong>Clean focus</strong>
							<span>Dark interface with sharp blue accents for low distraction.</span>
						</li>
					</ul>
				</aside>

				<form class="auth-form" [formGroup]="loginForm" (ngSubmit)="submit()">
					<div class="field">
						<label for="email">Email address</label>
						<input id="email" type="email" formControlName="email" placeholder="you@example.com" />
						@if (loginForm.controls.email.touched && loginForm.controls.email.invalid) {
							<p class="field-error">Enter a valid email address.</p>
						}
					</div>

					<div class="field">
						<label for="password">Password</label>
						<input id="password" type="password" formControlName="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" />
						@if (loginForm.controls.password.touched && loginForm.controls.password.invalid) {
							<p class="field-error">Password must be at least 6 characters.</p>
						}
					</div>

					<div class="form-row">
						<label class="remember">
							<input type="checkbox" />
							<span>Remember me</span>
						</label>

						<a href="#" class="forgot-link">Forgot password?</a>
					</div>

					<button type="submit" class="submit-button" [disabled]="isSubmitting()">
						@if (isSubmitting()) {
							Logging in...
						} @else {
							Login now
						}
					</button>

					@if (apiMessage()) {
						<p class="auth-footer">{{ apiMessage() }}</p>
					}

					<p class="auth-footer">
						Don't have an account?
						<a routerLink="/register">Create one</a>
					</p>
				</form>
			</div>
		</section>
	}

	@if (isRedirecting()) {
		<section class="redirect-loader" aria-live="polite" aria-label="Loading your home page">
			<div class="loader-rail" aria-hidden="true">
				<div class="loader-line"></div>
				<div class="loader-orb"></div>
			</div>
			<p>Logging in and launching your home page...</p>
		</section>
	}
</main>
`, styles: ["/* src/app/auth/login/login.css */\n.auth-shell {\n  position: relative;\n  min-height: 100vh;\n  padding: 24px;\n  display: grid;\n  place-items: center;\n  overflow: hidden;\n}\n.auth-glow {\n  position: absolute;\n  border-radius: 999px;\n  filter: blur(18px);\n  pointer-events: none;\n  opacity: 0.7;\n}\n.auth-glow-left {\n  top: -80px;\n  left: -80px;\n  width: 280px;\n  height: 280px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(26, 97, 255, 0.45) 0%,\n      rgba(5, 8, 20, 0) 72%);\n}\n.auth-glow-right {\n  right: -60px;\n  bottom: 40px;\n  width: 340px;\n  height: 340px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(78, 182, 255, 0.22) 0%,\n      rgba(5, 8, 20, 0) 72%);\n}\n.auth-card {\n  position: relative;\n  z-index: 1;\n  width: min(1120px, 100%);\n  padding: 34px;\n  border-radius: 28px;\n}\n.auth-copy {\n  margin-bottom: 24px;\n}\n.eyebrow,\n.panel-pill {\n  margin: 0;\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: #74a9ff;\n}\n.auth-copy h1 {\n  margin: 10px 0 12px;\n  font-size: clamp(2.2rem, 4vw, 4rem);\n  line-height: 0.98;\n  letter-spacing: -0.05em;\n}\n.lead {\n  max-width: 64ch;\n  color: rgba(226, 236, 255, 0.74);\n  line-height: 1.75;\n}\n.auth-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 0.92fr) minmax(340px, 1.08fr);\n  gap: 18px;\n}\n.auth-panel,\n.auth-form {\n  border-radius: 24px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(122, 177, 255, 0.14);\n}\n.auth-panel {\n  padding: 26px;\n}\n.auth-panel-header h2 {\n  margin: 10px 0 0;\n  font-size: 1.5rem;\n}\n.feature-list {\n  list-style: none;\n  margin: 22px 0 0;\n  padding: 0;\n  display: grid;\n  gap: 14px;\n}\n.feature-list li {\n  padding: 16px;\n  border-radius: 18px;\n  background: rgba(9, 12, 25, 0.45);\n  border: 1px solid rgba(122, 177, 255, 0.08);\n}\n.feature-list strong {\n  display: block;\n  margin-bottom: 6px;\n  color: #f6f9ff;\n}\n.feature-list span {\n  color: rgba(223, 234, 255, 0.72);\n  line-height: 1.6;\n}\n.auth-form {\n  padding: 26px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.field label {\n  font-weight: 700;\n  color: #edf4ff;\n}\n.field input {\n  width: 100%;\n  min-height: 52px;\n  padding: 0 16px;\n  border-radius: 16px;\n  border: 1px solid rgba(122, 177, 255, 0.16);\n  background: rgba(5, 8, 18, 0.85);\n  color: #f3f7ff;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.field input:focus {\n  border-color: rgba(110, 192, 255, 0.8);\n  box-shadow: 0 0 0 4px rgba(26, 97, 255, 0.16);\n}\n.field input::placeholder {\n  color: rgba(223, 234, 255, 0.42);\n}\n.field-error {\n  color: #f3536d;\n  font-size: 0.92rem;\n}\n.form-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.remember {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: rgba(231, 240, 255, 0.84);\n}\n.forgot-link,\n.auth-footer a {\n  color: #8cc5ff;\n  text-decoration: none;\n  font-weight: 700;\n}\n.submit-button {\n  min-height: 52px;\n  border: 0;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a61ff,\n      #4eb6ff);\n  color: #f8fbff;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n  box-shadow: 0 16px 30px rgba(26, 97, 255, 0.24);\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n}\n.submit-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 18px 34px rgba(26, 97, 255, 0.3);\n}\n.auth-footer {\n  margin: 0;\n  color: rgba(223, 234, 255, 0.76);\n  text-align: center;\n}\n.redirect-loader {\n  position: fixed;\n  inset: 0;\n  z-index: 60;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 26px;\n  padding: 24px 5vw;\n  background:\n    radial-gradient(\n      circle at 20% 30%,\n      rgba(26, 97, 255, 0.22),\n      transparent 36%),\n    radial-gradient(\n      circle at 80% 70%,\n      rgba(78, 182, 255, 0.16),\n      transparent 40%),\n    rgba(3, 6, 14, 0.9);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.redirect-loader p {\n  margin: 0;\n  text-align: center;\n  font-size: clamp(1.05rem, 2.6vw, 1.35rem);\n  font-weight: 700;\n  letter-spacing: 0.015em;\n  color: #e8f2ff;\n}\n.loader-rail {\n  position: relative;\n  width: min(1100px, 100%);\n  margin-inline: auto;\n  height: 92px;\n  overflow: hidden;\n}\n.loader-line {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 100%;\n  height: 22px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(26, 97, 255, 0.9),\n      rgba(92, 193, 255, 0.95));\n  box-shadow: 0 0 34px rgba(70, 170, 255, 0.7);\n  transform: translateY(-50%) scaleX(0);\n  transform-origin: left center;\n  animation: lineSweep 4s ease forwards;\n}\n.loader-orb {\n  position: absolute;\n  left: -72px;\n  top: 50%;\n  width: 72px;\n  height: 72px;\n  margin-top: -36px;\n  border-radius: 50%;\n  border: 5px solid rgba(189, 227, 255, 0.92);\n  border-top-color: rgba(28, 111, 255, 1);\n  background:\n    radial-gradient(\n      circle at 28% 28%,\n      #ffffff 0%,\n      #8aceff 40%,\n      #2f8bff 100%);\n  box-shadow: 0 0 40px rgba(92, 193, 255, 0.75), 0 0 0 8px rgba(76, 178, 255, 0.16);\n  animation: orbTravel 4s ease forwards, orbSpin 0.75s linear infinite;\n}\n@keyframes lineSweep {\n  0% {\n    transform: translateY(-50%) scaleX(0);\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-50%) scaleX(1);\n    opacity: 1;\n  }\n}\n@keyframes orbTravel {\n  0% {\n    left: -72px;\n    opacity: 0;\n  }\n  15% {\n    opacity: 1;\n  }\n  50% {\n    left: calc(50% - 36px);\n    opacity: 1;\n  }\n  85% {\n    left: calc(100% - 72px);\n    opacity: 1;\n  }\n  100% {\n    left: calc(100% + 36px);\n    opacity: 0;\n  }\n}\n@keyframes orbSpin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 960px) {\n  .auth-layout {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 720px) {\n  .auth-shell {\n    padding: 16px;\n  }\n  .auth-card {\n    padding: 22px;\n  }\n  .form-row {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .submit-button {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=login.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Login, { className: "Login", filePath: "app/auth/login/login.ts", lineNumber: 12 });
})();

// src/app/auth/register/register.ts
function Register_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1, "Enter your full name.");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1, "Please select Student or Teacher.");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1, "Enter a valid email address.");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1, "Password must be at least 6 characters.");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1, "Confirm your password.");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Submitting... ");
  }
}
function Register_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Create account ");
  }
}
function Register_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.apiMessage());
  }
}
var Register = class _Register {
  authService = inject(AuthService);
  router = inject(Router);
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : (
    /* istanbul ignore next */
    []
  ));
  apiMessage = signal("", ...ngDevMode ? [{ debugName: "apiMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  registerForm = new FormGroup({
    fullname: new FormControl("", {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)]
    }),
    role: new FormControl("", {
      nonNullable: true,
      validators: [Validators.required]
    }),
    email: new FormControl("", {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl("", {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)]
    }),
    confirmPassword: new FormControl("", {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)]
    })
  });
  submit() {
    this.registerForm.markAllAsTouched();
    this.apiMessage.set("");
    if (this.registerForm.invalid || this.isSubmitting()) {
      this.apiMessage.set("Fill all the fields correctly.");
      return;
    }
    const value = this.registerForm.getRawValue();
    if (value.password !== value.confirmPassword) {
      this.apiMessage.set("Passwords do not match.");
      return;
    }
    this.isSubmitting.set(true);
    this.authService.register(value.fullname, value.email, value.password, Number(value.role)).subscribe({
      next: (response) => {
        this.isSubmitting.set(false);
        this.apiMessage.set(response.message ?? "Registration successful! Redirecting to dashboard...");
        setTimeout(() => {
          this.router.navigateByUrl("/homepage");
        }, 2e3);
      },
      error: (error) => {
        this.isSubmitting.set(false);
        const extractedMessage = this.extractErrorMessage(error);
        if (extractedMessage) {
          this.apiMessage.set(extractedMessage);
          return;
        }
        if (typeof error.error === "string" && error.error.trim()) {
          this.apiMessage.set(error.error);
          return;
        }
        const serverMessage = error.error?.message;
        if (serverMessage) {
          this.apiMessage.set(serverMessage);
          return;
        }
        this.apiMessage.set("Registration failed. Please try again.");
      }
    });
  }
  extractErrorMessage(error) {
    const errors = error.error?.errors;
    if (errors) {
      const firstKey = Object.keys(errors)[0];
      const firstError = firstKey ? errors[firstKey]?.[0] : void 0;
      if (firstError) {
        return firstError;
      }
    }
    return "";
  }
  static \u0275fac = function Register_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Register)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Register, selectors: [["app-register"]], decls: 82, vars: 9, consts: [[1, "register-shell"], [1, "register-glow", "register-glow-left"], [1, "register-glow", "register-glow-right"], [1, "register-card", "card-surface"], [1, "register-copy"], [1, "eyebrow"], [1, "lead"], [1, "register-layout"], [1, "register-panel"], [1, "panel-header"], [1, "panel-pill"], ["aria-label", "Register benefits", 1, "feature-list"], [1, "register-form", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "fullname"], ["id", "fullname", "type", "text", "formControlName", "fullname", "placeholder", "Your name"], [1, "field-error"], ["for", "role"], ["id", "role", "formControlName", "role"], ["value", "", "disabled", ""], ["value", "0"], ["value", "1"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "you@example.com"], [1, "field-grid"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "Create a password"], ["for", "confirmPassword"], ["id", "confirmPassword", "type", "password", "formControlName", "confirmPassword", "placeholder", "Repeat password"], [1, "terms"], ["type", "checkbox"], ["type", "submit", 1, "submit-button", 3, "disabled"], [1, "auth-footer"], ["routerLink", "/login"], ["routerLink", "/homepage"]], template: function Register_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2);
      \u0275\u0275elementStart(3, "section", 3)(4, "header", 4)(5, "p", 5);
      \u0275\u0275text(6, "Create account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1");
      \u0275\u0275text(8, "Join the learning platform.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 6);
      \u0275\u0275text(10, " Set up your profile to track lessons, practice streaks, and progress inside the same dark blue workspace. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 7)(12, "aside", 8)(13, "div", 9)(14, "span", 10);
      \u0275\u0275text(15, "New learner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "h2");
      \u0275\u0275text(17, "Start strong from day one");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "ul", 11)(19, "li")(20, "strong");
      \u0275\u0275text(21, "Personal dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span");
      \u0275\u0275text(23, "Get a clean progress view for every learning path you join.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "li")(25, "strong");
      \u0275\u0275text(26, "Structured onboarding");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28, "Move into a guided setup flow with a focused interface.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "li")(30, "strong");
      \u0275\u0275text(31, "Black-blue identity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span");
      \u0275\u0275text(33, "Consistent with the home and login pages, visually and functionally.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "form", 12);
      \u0275\u0275listener("ngSubmit", function Register_Template_form_ngSubmit_34_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(35, "div", 13)(36, "label", 14);
      \u0275\u0275text(37, "Full name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "input", 15);
      \u0275\u0275conditionalCreate(39, Register_Conditional_39_Template, 2, 0, "p", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 13)(41, "label", 17);
      \u0275\u0275text(42, "Select role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "select", 18)(44, "option", 19);
      \u0275\u0275text(45, "Select one");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "option", 20);
      \u0275\u0275text(47, "Student");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "option", 21);
      \u0275\u0275text(49, "Teacher");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(50, Register_Conditional_50_Template, 2, 0, "p", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 13)(52, "label", 22);
      \u0275\u0275text(53, "Email address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(54, "input", 23);
      \u0275\u0275conditionalCreate(55, Register_Conditional_55_Template, 2, 0, "p", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 24)(57, "div", 13)(58, "label", 25);
      \u0275\u0275text(59, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(60, "input", 26);
      \u0275\u0275conditionalCreate(61, Register_Conditional_61_Template, 2, 0, "p", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 13)(63, "label", 27);
      \u0275\u0275text(64, "Confirm password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(65, "input", 28);
      \u0275\u0275conditionalCreate(66, Register_Conditional_66_Template, 2, 0, "p", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "label", 29);
      \u0275\u0275element(68, "input", 30);
      \u0275\u0275elementStart(69, "span");
      \u0275\u0275text(70, "I agree to the learning platform terms.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "button", 31);
      \u0275\u0275conditionalCreate(72, Register_Conditional_72_Template, 1, 0)(73, Register_Conditional_73_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(74, Register_Conditional_74_Template, 2, 1, "p", 32);
      \u0275\u0275elementStart(75, "p", 32);
      \u0275\u0275text(76, " Already have an account? ");
      \u0275\u0275elementStart(77, "a", 33);
      \u0275\u0275text(78, "Login here");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "p", 32)(80, "a", 34);
      \u0275\u0275text(81, "Go Home");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(34);
      \u0275\u0275property("formGroup", ctx.registerForm);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.registerForm.controls.fullname.touched && ctx.registerForm.controls.fullname.invalid ? 39 : -1);
      \u0275\u0275advance(11);
      \u0275\u0275conditional(ctx.registerForm.controls.role.touched && ctx.registerForm.controls.role.invalid ? 50 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.registerForm.controls.email.touched && ctx.registerForm.controls.email.invalid ? 55 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.registerForm.controls.password.touched && ctx.registerForm.controls.password.invalid ? 61 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.registerForm.controls.confirmPassword.touched && ctx.registerForm.controls.confirmPassword.invalid ? 66 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", ctx.isSubmitting());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isSubmitting() ? 72 : 73);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.apiMessage() ? 74 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n.register-shell[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  padding: 24px;\n  overflow: hidden;\n}\n.register-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: min(1120px, 100%);\n  padding: 34px;\n  border-radius: 28px;\n}\n.register-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 999px;\n  filter: blur(18px);\n  pointer-events: none;\n  opacity: 0.7;\n}\n.register-glow-left[_ngcontent-%COMP%] {\n  top: -90px;\n  left: -90px;\n  width: 300px;\n  height: 300px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(26, 97, 255, 0.42) 0%,\n      rgba(5, 8, 20, 0) 72%);\n}\n.register-glow-right[_ngcontent-%COMP%] {\n  right: -70px;\n  bottom: 20px;\n  width: 330px;\n  height: 330px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(78, 182, 255, 0.22) 0%,\n      rgba(5, 8, 20, 0) 72%);\n}\n.register-copy[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.eyebrow[_ngcontent-%COMP%], \n.panel-pill[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: #74a9ff;\n}\n.register-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 10px 0 12px;\n  font-size: clamp(2rem, 4vw, 3.7rem);\n  line-height: 0.98;\n  letter-spacing: -0.05em;\n  color: #f3f7ff;\n}\n.lead[_ngcontent-%COMP%] {\n  margin: 0;\n  color: rgba(226, 236, 255, 0.74);\n  line-height: 1.7;\n}\n.register-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 0.92fr) minmax(340px, 1.08fr);\n  gap: 18px;\n}\n.register-panel[_ngcontent-%COMP%], \n.register-form[_ngcontent-%COMP%] {\n  border-radius: 24px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(122, 177, 255, 0.14);\n}\n.register-panel[_ngcontent-%COMP%] {\n  padding: 26px;\n}\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  font-size: 1.5rem;\n}\n.feature-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 22px 0 0;\n  padding: 0;\n  display: grid;\n  gap: 14px;\n}\n.feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 18px;\n  background: rgba(9, 12, 25, 0.45);\n  border: 1px solid rgba(122, 177, 255, 0.08);\n}\n.feature-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  color: #f6f9ff;\n}\n.feature-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(223, 234, 255, 0.72);\n  line-height: 1.6;\n}\n.register-form[_ngcontent-%COMP%] {\n  padding: 26px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.field-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.terms[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #edf4ff;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 52px;\n  padding: 0 16px;\n  border-radius: 16px;\n  border: 1px solid rgba(122, 177, 255, 0.16);\n  background: rgba(5, 8, 18, 0.85);\n  color: #f3f7ff;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 52px;\n  padding: 0 16px;\n  border-radius: 16px;\n  border: 1px solid rgba(122, 177, 255, 0.16);\n  background: rgba(5, 8, 18, 0.85);\n  color: #f3f7ff;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: rgba(110, 192, 255, 0.8);\n  box-shadow: 0 0 0 4px rgba(26, 97, 255, 0.16);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: rgba(110, 192, 255, 0.8);\n  box-shadow: 0 0 0 4px rgba(26, 97, 255, 0.16);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(223, 234, 255, 0.42);\n}\n.field-error[_ngcontent-%COMP%] {\n  color: #8fc0ff;\n  font-size: 0.92rem;\n  margin: 0;\n}\n.terms[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: rgba(231, 240, 255, 0.84);\n}\n.terms[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: #4eb6ff;\n}\n.submit-button[_ngcontent-%COMP%] {\n  min-height: 52px;\n  border: 0;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a61ff,\n      #4eb6ff);\n  color: #f8fbff;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n  box-shadow: 0 16px 30px rgba(26, 97, 255, 0.24);\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n}\n.submit-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 18px 34px rgba(26, 97, 255, 0.3);\n}\n.auth-footer[_ngcontent-%COMP%] {\n  margin: 0;\n  color: rgba(223, 234, 255, 0.76);\n  text-align: center;\n  line-height: 1.6;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8cc5ff;\n  text-decoration: none;\n  font-weight: 700;\n}\n@media (max-width: 960px) {\n  .register-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .field-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 720px) {\n  .register-shell[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .register-card[_ngcontent-%COMP%] {\n    padding: 22px;\n  }\n  .submit-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=register.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Register, [{
    type: Component,
    args: [{ selector: "app-register", imports: [ReactiveFormsModule, RouterLink], template: '<main class="register-shell">\n	<div class="register-glow register-glow-left"></div>\n	<div class="register-glow register-glow-right"></div>\n\n	<section class="register-card card-surface">\n		<header class="register-copy">\n			<p class="eyebrow">Create account</p>\n			<h1>Join the learning platform.</h1>\n			<p class="lead">\n				Set up your profile to track lessons, practice streaks, and progress inside the same dark\n				blue workspace.\n			</p>\n		</header>\n\n		<div class="register-layout">\n			<aside class="register-panel">\n				<div class="panel-header">\n					<span class="panel-pill">New learner</span>\n					<h2>Start strong from day one</h2>\n				</div>\n\n				<ul class="feature-list" aria-label="Register benefits">\n					<li>\n						<strong>Personal dashboard</strong>\n						<span>Get a clean progress view for every learning path you join.</span>\n					</li>\n					<li>\n						<strong>Structured onboarding</strong>\n						<span>Move into a guided setup flow with a focused interface.</span>\n					</li>\n					<li>\n						<strong>Black-blue identity</strong>\n						<span>Consistent with the home and login pages, visually and functionally.</span>\n					</li>\n				</ul>\n			</aside>\n\n			<form class="register-form" [formGroup]="registerForm" (ngSubmit)="submit()">\n				<div class="field">\n					<label for="fullname">Full name</label>\n					<input id="fullname" type="text" formControlName="fullname" placeholder="Your name" />\n					@if (registerForm.controls.fullname.touched && registerForm.controls.fullname.invalid) {\n						<p class="field-error">Enter your full name.</p>\n					}\n				</div>\n\n				<div class="field">\n					<label for="role">Select role</label>\n					<select id="role" formControlName="role">\n						<option value="" disabled>Select one</option>\n						<option value="0">Student</option>\n						<option value="1">Teacher</option>\n					</select>\n					@if (registerForm.controls.role.touched && registerForm.controls.role.invalid) {\n						<p class="field-error">Please select Student or Teacher.</p>\n					}\n				</div>\n\n				<div class="field">\n					<label for="email">Email address</label>\n					<input id="email" type="email" formControlName="email" placeholder="you@example.com" />\n					@if (registerForm.controls.email.touched && registerForm.controls.email.invalid) {\n						<p class="field-error">Enter a valid email address.</p>\n					}\n				</div>\n\n				<div class="field-grid">\n					<div class="field">\n						<label for="password">Password</label>\n						<input id="password" type="password" formControlName="password" placeholder="Create a password" />\n						@if (registerForm.controls.password.touched && registerForm.controls.password.invalid) {\n							<p class="field-error">Password must be at least 6 characters.</p>\n						}\n					</div>\n\n					<div class="field">\n						<label for="confirmPassword">Confirm password</label>\n						<input\n							id="confirmPassword"\n							type="password"\n							formControlName="confirmPassword"\n							placeholder="Repeat password"\n						/>\n						@if (registerForm.controls.confirmPassword.touched && registerForm.controls.confirmPassword.invalid) {\n							<p class="field-error">Confirm your password.</p>\n						}\n					</div>\n				</div>\n\n				<label class="terms">\n					<input type="checkbox" />\n					<span>I agree to the learning platform terms.</span>\n				</label>\n\n				<button type="submit" class="submit-button" [disabled]="isSubmitting()">\n					@if (isSubmitting()) {\n						Submitting...\n					} @else {\n						Create account\n					}\n				</button>\n\n				@if (apiMessage()) {\n					<p class="auth-footer">{{ apiMessage() }}</p>\n				}\n\n				<p class="auth-footer">\n					Already have an account?\n					<a routerLink="/login">Login here</a>\n				</p>\n				<p class="auth-footer">\n					<a routerLink="/homepage">Go Home</a>\n				</p>\n			</form>\n		</div>\n	</section>\n</main>\n', styles: ["/* src/app/auth/register/register.css */\n.register-shell {\n  position: relative;\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  padding: 24px;\n  overflow: hidden;\n}\n.register-card {\n  position: relative;\n  z-index: 1;\n  width: min(1120px, 100%);\n  padding: 34px;\n  border-radius: 28px;\n}\n.register-glow {\n  position: absolute;\n  border-radius: 999px;\n  filter: blur(18px);\n  pointer-events: none;\n  opacity: 0.7;\n}\n.register-glow-left {\n  top: -90px;\n  left: -90px;\n  width: 300px;\n  height: 300px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(26, 97, 255, 0.42) 0%,\n      rgba(5, 8, 20, 0) 72%);\n}\n.register-glow-right {\n  right: -70px;\n  bottom: 20px;\n  width: 330px;\n  height: 330px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(78, 182, 255, 0.22) 0%,\n      rgba(5, 8, 20, 0) 72%);\n}\n.register-copy {\n  margin-bottom: 24px;\n}\n.eyebrow,\n.panel-pill {\n  margin: 0;\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: #74a9ff;\n}\n.register-copy h1 {\n  margin: 10px 0 12px;\n  font-size: clamp(2rem, 4vw, 3.7rem);\n  line-height: 0.98;\n  letter-spacing: -0.05em;\n  color: #f3f7ff;\n}\n.lead {\n  margin: 0;\n  color: rgba(226, 236, 255, 0.74);\n  line-height: 1.7;\n}\n.register-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 0.92fr) minmax(340px, 1.08fr);\n  gap: 18px;\n}\n.register-panel,\n.register-form {\n  border-radius: 24px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(122, 177, 255, 0.14);\n}\n.register-panel {\n  padding: 26px;\n}\n.panel-header h2 {\n  margin: 10px 0 0;\n  font-size: 1.5rem;\n}\n.feature-list {\n  list-style: none;\n  margin: 22px 0 0;\n  padding: 0;\n  display: grid;\n  gap: 14px;\n}\n.feature-list li {\n  padding: 16px;\n  border-radius: 18px;\n  background: rgba(9, 12, 25, 0.45);\n  border: 1px solid rgba(122, 177, 255, 0.08);\n}\n.feature-list strong {\n  display: block;\n  margin-bottom: 6px;\n  color: #f6f9ff;\n}\n.feature-list span {\n  color: rgba(223, 234, 255, 0.72);\n  line-height: 1.6;\n}\n.register-form {\n  padding: 26px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.field-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n}\n.field label,\n.terms {\n  font-weight: 700;\n  color: #edf4ff;\n}\n.field input {\n  width: 100%;\n  min-height: 52px;\n  padding: 0 16px;\n  border-radius: 16px;\n  border: 1px solid rgba(122, 177, 255, 0.16);\n  background: rgba(5, 8, 18, 0.85);\n  color: #f3f7ff;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.field select {\n  width: 100%;\n  min-height: 52px;\n  padding: 0 16px;\n  border-radius: 16px;\n  border: 1px solid rgba(122, 177, 255, 0.16);\n  background: rgba(5, 8, 18, 0.85);\n  color: #f3f7ff;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.field select:focus {\n  border-color: rgba(110, 192, 255, 0.8);\n  box-shadow: 0 0 0 4px rgba(26, 97, 255, 0.16);\n}\n.field input:focus {\n  border-color: rgba(110, 192, 255, 0.8);\n  box-shadow: 0 0 0 4px rgba(26, 97, 255, 0.16);\n}\n.field input::placeholder {\n  color: rgba(223, 234, 255, 0.42);\n}\n.field-error {\n  color: #8fc0ff;\n  font-size: 0.92rem;\n  margin: 0;\n}\n.terms {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: rgba(231, 240, 255, 0.84);\n}\n.terms input {\n  accent-color: #4eb6ff;\n}\n.submit-button {\n  min-height: 52px;\n  border: 0;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a61ff,\n      #4eb6ff);\n  color: #f8fbff;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n  box-shadow: 0 16px 30px rgba(26, 97, 255, 0.24);\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n}\n.submit-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 18px 34px rgba(26, 97, 255, 0.3);\n}\n.auth-footer {\n  margin: 0;\n  color: rgba(223, 234, 255, 0.76);\n  text-align: center;\n  line-height: 1.6;\n}\n.auth-footer a {\n  color: #8cc5ff;\n  text-decoration: none;\n  font-weight: 700;\n}\n@media (max-width: 960px) {\n  .register-layout {\n    grid-template-columns: 1fr;\n  }\n  .field-grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 720px) {\n  .register-shell {\n    padding: 16px;\n  }\n  .register-card {\n    padding: 22px;\n  }\n  .submit-button {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=register.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Register, { className: "Register", filePath: "app/auth/register/register.ts", lineNumber: 13 });
})();

// src/app/base/home-page/home-page.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.title;
function HomePage_Conditional_21_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 123)(1, "span", 122);
    \u0275\u0275text(2, "\u{1F393}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Teacher ");
    \u0275\u0275elementEnd();
  }
}
function HomePage_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "details", 113)(1, "summary", 114)(2, "span", 115);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 116);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 117);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 118);
    \u0275\u0275element(8, "path", 119);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 120)(10, "a", 121)(11, "span", 122);
    \u0275\u0275text(12, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Profile ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, HomePage_Conditional_21_Conditional_14_Template, 4, 0, "a", 123);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 124);
    \u0275\u0275listener("click", function HomePage_Conditional_21_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(16, "Logout");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.userInitial());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Hi, ", ctx_r1.userName());
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.isTeacher() ? 14 : -1);
  }
}
function HomePage_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 125);
    \u0275\u0275text(1, "Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 126)(3, "span");
    \u0275\u0275text(4, "Get started");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 127);
    \u0275\u0275element(6, "path", 128);
    \u0275\u0275elementEnd()();
  }
}
function HomePage_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 28)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r3.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r3.label);
  }
}
function HomePage_For_183_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 107)(1, "div", 129);
    \u0275\u0275element(2, "div", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 131)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const highlight_r4 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(highlight_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(highlight_r4.description);
  }
}
var HomePage = class _HomePage {
  authService = inject(AuthService);
  router = inject(Router);
  isLoggedIn = signal(false, ...ngDevMode ? [{ debugName: "isLoggedIn" }] : (
    /* istanbul ignore next */
    []
  ));
  userName = signal("", ...ngDevMode ? [{ debugName: "userName" }] : (
    /* istanbul ignore next */
    []
  ));
  userRole = signal(null, ...ngDevMode ? [{ debugName: "userRole" }] : (
    /* istanbul ignore next */
    []
  ));
  isTeacher = computed(() => this.userRole() === 1, ...ngDevMode ? [{ debugName: "isTeacher" }] : (
    /* istanbul ignore next */
    []
  ));
  userInitial = computed(() => this.userName().charAt(0).toUpperCase(), ...ngDevMode ? [{ debugName: "userInitial" }] : (
    /* istanbul ignore next */
    []
  ));
  stats = [
    { value: "350+", label: "Structured lessons" },
    { value: "42k+", label: "Active learners" },
    { value: "1.2M+", label: "Practice submissions" }
  ];
  learningTracks = [
    {
      title: "Web Development Foundations",
      description: "Build strong fundamentals in HTML, CSS, JavaScript, and modern UI principles.",
      badge: "Beginner"
    },
    {
      title: "Angular Application Engineering",
      description: "Learn components, routing, forms, and architecture patterns used in production apps.",
      badge: "Intermediate"
    },
    {
      title: "Capstone Project Labs",
      description: "Apply your knowledge with guided projects, code reviews, and deployment workflows.",
      badge: "Advanced"
    }
  ];
  highlights = [
    {
      title: "Outcome-based curriculum",
      description: "Follow role-focused modules designed around practical, job-ready outcomes."
    },
    {
      title: "Progress and performance analytics",
      description: "Track completion, assessment scores, and learning consistency in one dashboard."
    },
    {
      title: "Mentor-guided growth",
      description: "Get structured feedback and guidance to accelerate your learning path."
    }
  ];
  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn.set(isLoggedIn);
    });
    this.authService.currentUser$.subscribe((user2) => {
      if (user2 && user2.fullName) {
        this.userName.set(user2.fullName);
      }
      this.userRole.set(typeof user2?.role === "number" ? user2.role : null);
    });
    const user = this.authService.getCurrentUser();
    if (user) {
      this.userName.set(user.fullName || user.email);
      this.userRole.set(typeof user.role === "number" ? user.role : null);
    }
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
  static \u0275fac = function HomePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePage, selectors: [["app-home-page"]], decls: 197, vars: 10, consts: [[1, "home-page"], ["aria-hidden", "true", 1, "bg-dots"], ["aria-hidden", "true", 1, "bg-blob", "bg-blob-1"], ["aria-hidden", "true", 1, "bg-blob", "bg-blob-2"], [1, "topbar", "reveal-down"], ["routerLink", "/homepage", "aria-label", "Learning platform home", 1, "brand"], ["aria-hidden", "true", 1, "brand-mark"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none"], ["d", "M10 2L18 6V10C18 14.4 14.4 18 10 19C5.6 18 2 14.4 2 10V6L10 2Z", "fill", "currentColor", "opacity", "0.9"], ["d", "M7 10L9 12L13 8", "stroke", "white", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "brand-text"], ["aria-label", "Primary navigation", 1, "topbar-nav"], ["href", "#tracks"], ["href", "#platform-identity"], [1, "topbar-actions"], [1, "hero"], [1, "hero-copy", "reveal-up"], [1, "eyebrow-wrap"], ["aria-hidden", "true", 1, "eyebrow-dot"], [1, "eyebrow"], [1, "h1-accent"], [1, "lead"], [1, "actions"], ["href", "#tracks", 1, "primary-action"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "aria-hidden", "true"], ["d", "M3 8H13M13 8L9 4M13 8L9 12", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["href", "#platform-identity", 1, "secondary-action"], ["aria-label", "Platform highlights", 1, "stats"], [1, "stat-pill"], ["aria-label", "Educational showcase", 1, "hero-showcase", "reveal-up", "delay-1"], [1, "showcase-media"], [1, "showcase-badge"], ["viewBox", "0 0 320 260", "role", "img", "aria-label", "Students learning on modern devices", 1, "showcase-illustration"], ["id", "showcaseBg", "x1", "0", "x2", "1", "y1", "0", "y2", "1"], ["offset", "0%", "stop-color", "#eff6ff"], ["offset", "100%", "stop-color", "#dbeafe"], ["id", "deviceBlue", "x1", "0", "x2", "1", "y1", "0", "y2", "1"], ["offset", "0%", "stop-color", "#2563eb"], ["offset", "100%", "stop-color", "#0ea5e9"], ["x", "0", "y", "0", "width", "320", "height", "260", "rx", "28", "fill", "url(#showcaseBg)"], ["cx", "70", "cy", "52", "r", "22", "fill", "#bfdbfe"], ["cx", "248", "cy", "56", "r", "16", "fill", "#bae6fd"], ["x", "52", "y", "92", "width", "124", "height", "84", "rx", "14", "fill", "#ffffff", "stroke", "#c7ddff"], ["x", "64", "y", "104", "width", "100", "height", "54", "rx", "8", "fill", "url(#deviceBlue)", "opacity", "0.95"], ["x", "78", "y", "118", "width", "72", "height", "8", "rx", "4", "fill", "#ffffff", "opacity", "0.88"], ["x", "78", "y", "134", "width", "52", "height", "8", "rx", "4", "fill", "#ffffff", "opacity", "0.78"], ["x", "186", "y", "78", "width", "92", "height", "120", "rx", "20", "fill", "#ffffff", "stroke", "#c7ddff"], ["x", "198", "y", "94", "width", "68", "height", "88", "rx", "12", "fill", "#f8fafc", "stroke", "#d6e2fb"], ["d", "M214 152C214 142 221 134 230 134C239 134 246 142 246 152V168H214V152Z", "fill", "#93c5fd"], ["cx", "230", "cy", "121", "r", "10", "fill", "#bfdbfe"], ["x", "34", "y", "198", "width", "250", "height", "28", "rx", "14", "fill", "#ffffff", "stroke", "#dbe7ff"], ["x", "160", "y", "217", "text-anchor", "middle", "font-size", "14", "fill", "#2563eb", "font-family", "sans-serif", "font-weight", "700"], [1, "showcase-copy"], [1, "panel-label"], ["aria-label", "Learning highlights", 1, "showcase-chips"], [1, "section-head", "reveal-up", "delay-2"], [1, "section-label-wrap"], ["aria-hidden", "true", 1, "section-line"], ["id", "tracks"], ["aria-label", "Learning tracks", 1, "track-grid"], [1, "track-card", "reveal-up", "delay-2"], ["aria-hidden", "true", 1, "track-img", "track-img-beg"], ["width", "90", "height", "90", "viewBox", "0 0 90 90", "fill", "none"], ["x", "10", "y", "16", "width", "70", "height", "52", "rx", "7", "fill", "#bae6fd", "stroke", "#7dd3fc", "stroke-width", "1.5"], ["x", "10", "y", "16", "width", "70", "height", "14", "rx", "7", "fill", "#7dd3fc"], ["x", "10", "y", "23", "width", "70", "height", "7", "fill", "#7dd3fc"], ["cx", "18", "cy", "23", "r", "3", "fill", "white", "opacity", ".7"], ["cx", "27", "cy", "23", "r", "3", "fill", "white", "opacity", ".7"], ["cx", "36", "cy", "23", "r", "3", "fill", "white", "opacity", ".7"], ["x", "44", "y", "19", "width", "30", "height", "8", "rx", "4", "fill", "white", "opacity", ".35"], ["x", "18", "y", "38", "width", "22", "height", "4", "rx", "2", "fill", "#0284c7", "opacity", ".55"], ["x", "18", "y", "46", "width", "36", "height", "4", "rx", "2", "fill", "#0ea5e9", "opacity", ".4"], ["x", "18", "y", "54", "width", "28", "height", "4", "rx", "2", "fill", "#0284c7", "opacity", ".3"], ["x", "52", "y", "36", "width", "22", "height", "22", "rx", "5", "fill", "#0369a1", "opacity", ".18"], ["x", "63", "y", "51", "text-anchor", "middle", "font-size", "13", "fill", "#0369a1", "font-family", "monospace", "font-weight", "700"], [1, "track-card-inner"], [1, "track-badge", "track-badge-beg"], [1, "track-footer"], ["href", "#tracks", 1, "track-cta"], ["width", "12", "height", "12", "viewBox", "0 0 12 12", "fill", "none", "aria-hidden", "true"], ["d", "M2 6H10M10 6L7 3M10 6L7 9", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["aria-hidden", "true", 1, "track-img", "track-img-int"], ["x", "10", "y", "10", "width", "30", "height", "30", "rx", "6", "fill", "#c4b5fd", "stroke", "#a78bfa", "stroke-width", "1.5"], ["x", "50", "y", "10", "width", "30", "height", "30", "rx", "6", "fill", "#ddd6fe", "stroke", "#c4b5fd", "stroke-width", "1.5"], ["x", "10", "y", "50", "width", "30", "height", "30", "rx", "6", "fill", "#ddd6fe", "stroke", "#c4b5fd", "stroke-width", "1.5"], ["x", "50", "y", "50", "width", "30", "height", "30", "rx", "6", "fill", "#c4b5fd", "stroke", "#a78bfa", "stroke-width", "1.5"], ["x1", "40", "y1", "25", "x2", "50", "y2", "25", "stroke", "#7c3aed", "stroke-width", "1.5", "stroke-dasharray", "3 2"], ["x1", "40", "y1", "65", "x2", "50", "y2", "65", "stroke", "#7c3aed", "stroke-width", "1.5", "stroke-dasharray", "3 2"], ["x1", "25", "y1", "40", "x2", "25", "y2", "50", "stroke", "#7c3aed", "stroke-width", "1.5", "stroke-dasharray", "3 2"], ["x1", "65", "y1", "40", "x2", "65", "y2", "50", "stroke", "#7c3aed", "stroke-width", "1.5", "stroke-dasharray", "3 2"], ["cx", "25", "cy", "25", "r", "5", "fill", "#6d28d9", "opacity", ".6"], ["cx", "65", "cy", "65", "r", "5", "fill", "#6d28d9", "opacity", ".6"], ["cx", "65", "cy", "25", "r", "3.5", "fill", "#a78bfa", "opacity", ".6"], ["cx", "25", "cy", "65", "r", "3.5", "fill", "#a78bfa", "opacity", ".6"], [1, "track-badge", "track-badge-int"], ["aria-hidden", "true", 1, "track-img", "track-img-adv"], ["x", "12", "y", "54", "width", "14", "height", "24", "rx", "4", "fill", "#86efac", "stroke", "#4ade80", "stroke-width", "1.5"], ["x", "32", "y", "40", "width", "14", "height", "38", "rx", "4", "fill", "#4ade80", "stroke", "#22c55e", "stroke-width", "1.5"], ["x", "52", "y", "24", "width", "14", "height", "54", "rx", "4", "fill", "#16a34a", "stroke", "#15803d", "stroke-width", "1.5"], ["points", "19,52 39,38 59,22", "stroke", "#166534", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none"], ["cx", "19", "cy", "52", "r", "4", "fill", "#166534"], ["cx", "39", "cy", "38", "r", "4", "fill", "#166534"], ["cx", "59", "cy", "22", "r", "4", "fill", "#166534"], ["x", "68", "y", "22", "font-size", "16", "text-anchor", "middle"], [1, "track-badge", "track-badge-adv"], [1, "feature-layout"], [1, "feature-list"], [1, "feature-card", "reveal-up", "delay-3"], ["id", "platform-identity", 1, "quote-card", "reveal-up", "delay-3"], [1, "quote-top"], [1, "quote-label"], ["aria-hidden", "true", 1, "quote-mark"], [1, "quote-footer"], [1, "user-menu"], ["aria-label", "Logged in user menu", 1, "user-chip"], [1, "user-avatar"], [1, "user-name"], ["aria-hidden", "true", 1, "menu-caret"], ["width", "10", "height", "6", "viewBox", "0 0 10 6", "fill", "currentColor"], ["d", "M1 1L5 5L9 1"], ["role", "menu", 1, "user-menu-list"], ["routerLink", "/profile", "role", "menuitem", 1, "user-menu-link"], [1, "menu-icon"], ["routerLink", "/teacher", "role", "menuitem", 1, "user-menu-link"], ["type", "button", 1, "nav-button", "nav-button-ghost", 3, "click"], ["routerLink", "/login", 1, "nav-button", "nav-button-ghost"], ["routerLink", "/register", 1, "nav-button", "nav-button-primary"], ["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "aria-hidden", "true"], ["d", "M3 7H11M11 7L8 4M11 7L8 10", "stroke", "currentColor", "stroke-width", "1.6", "stroke-linecap", "round", "stroke-linejoin", "round"], ["aria-hidden", "true", 1, "feature-icon-wrap"], [1, "feature-icon"], [1, "feature-body"]], template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275elementStart(4, "header", 4)(5, "a", 5)(6, "span", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 7);
      \u0275\u0275element(8, "path", 8)(9, "path", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "span", 10)(11, "strong");
      \u0275\u0275text(12, "LearningTandS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "small");
      \u0275\u0275text(14, "Touch & Solve Learning");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "nav", 11)(16, "a", 12);
      \u0275\u0275text(17, "Tracks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "a", 13);
      \u0275\u0275text(19, "Vision");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 14);
      \u0275\u0275conditionalCreate(21, HomePage_Conditional_21_Template, 17, 3)(22, HomePage_Conditional_22_Template, 7, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "section", 15)(24, "div", 16)(25, "div", 17);
      \u0275\u0275element(26, "span", 18);
      \u0275\u0275elementStart(27, "p", 19);
      \u0275\u0275text(28, "Trusted learning ecosystem");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "h1");
      \u0275\u0275text(30, " Learn in-demand ");
      \u0275\u0275elementStart(31, "span", 20);
      \u0275\u0275text(32, "skills");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "br");
      \u0275\u0275text(34, "with structured paths. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "p", 21);
      \u0275\u0275text(36, " Grow from fundamentals to advanced implementation through mentor-guided modules and hands-on labs designed for real-world outcomes. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 22)(38, "a", 23);
      \u0275\u0275text(39, " Explore programs ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(40, "svg", 24);
      \u0275\u0275element(41, "path", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(42, "a", 26);
      \u0275\u0275text(43, "Why choose us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 27);
      \u0275\u0275repeaterCreate(45, HomePage_For_46_Template, 5, 2, "article", 28, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "aside", 29)(48, "div", 30)(49, "div", 31);
      \u0275\u0275text(50, "Education Spotlight");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(51, "svg", 32)(52, "defs")(53, "linearGradient", 33);
      \u0275\u0275element(54, "stop", 34)(55, "stop", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "linearGradient", 36);
      \u0275\u0275element(57, "stop", 37)(58, "stop", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(59, "rect", 39)(60, "circle", 40)(61, "circle", 41)(62, "rect", 42)(63, "rect", 43)(64, "rect", 44)(65, "rect", 45)(66, "rect", 46)(67, "rect", 47)(68, "path", 48)(69, "circle", 49)(70, "rect", 50);
      \u0275\u0275elementStart(71, "text", 51);
      \u0275\u0275text(72, "Interactive learning, labs, and guided practice");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(73, "div", 52)(74, "p", 53);
      \u0275\u0275text(75, "Future ready learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "h2");
      \u0275\u0275text(77, "Explore a visual learning journey");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "p");
      \u0275\u0275text(79, " From structured lessons to project-based milestones, the platform is designed to keep every learner focused, active, and progressing. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 54)(81, "span");
      \u0275\u0275text(82, "Live classes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "span");
      \u0275\u0275text(84, "Mentor support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "span");
      \u0275\u0275text(86, "Project labs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "span");
      \u0275\u0275text(88, "Career paths");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(89, "section", 55)(90, "div", 56);
      \u0275\u0275element(91, "span", 57);
      \u0275\u0275elementStart(92, "p", 19);
      \u0275\u0275text(93, "Programs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "h2", 58);
      \u0275\u0275text(95, "Career-focused learning paths");
      \u0275\u0275element(96, "br");
      \u0275\u0275text(97, "for every stage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "p");
      \u0275\u0275text(99, " Choose a pathway based on your current level and progress with curated lessons, challenges, and project-based milestones. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "section", 59)(101, "article", 60)(102, "div", 61);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(103, "svg", 62);
      \u0275\u0275element(104, "rect", 63)(105, "rect", 64)(106, "rect", 65)(107, "circle", 66)(108, "circle", 67)(109, "circle", 68)(110, "rect", 69)(111, "rect", 70)(112, "rect", 71)(113, "rect", 72)(114, "rect", 73);
      \u0275\u0275elementStart(115, "text", 74);
      \u0275\u0275text(116, "</>");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(117, "div", 75)(118, "span", 76);
      \u0275\u0275text(119);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "h3");
      \u0275\u0275text(121);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "p");
      \u0275\u0275text(123);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "div", 77)(125, "a", 78);
      \u0275\u0275text(126, " Start learning ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(127, "svg", 79);
      \u0275\u0275element(128, "path", 80);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(129, "article", 60)(130, "div", 81);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(131, "svg", 62);
      \u0275\u0275element(132, "rect", 82)(133, "rect", 83)(134, "rect", 84)(135, "rect", 85)(136, "line", 86)(137, "line", 87)(138, "line", 88)(139, "line", 89)(140, "circle", 90)(141, "circle", 91)(142, "circle", 92)(143, "circle", 93);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(144, "div", 75)(145, "span", 94);
      \u0275\u0275text(146);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "h3");
      \u0275\u0275text(148);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "p");
      \u0275\u0275text(150);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "div", 77)(152, "a", 78);
      \u0275\u0275text(153, " Start learning ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(154, "svg", 79);
      \u0275\u0275element(155, "path", 80);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(156, "article", 60)(157, "div", 95);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(158, "svg", 62);
      \u0275\u0275element(159, "rect", 96)(160, "rect", 97)(161, "rect", 98)(162, "polyline", 99)(163, "circle", 100)(164, "circle", 101)(165, "circle", 102);
      \u0275\u0275elementStart(166, "text", 103);
      \u0275\u0275text(167, "\u{1F680}");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(168, "div", 75)(169, "span", 104);
      \u0275\u0275text(170);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "h3");
      \u0275\u0275text(172);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "p");
      \u0275\u0275text(174);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "div", 77)(176, "a", 78);
      \u0275\u0275text(177, " Start learning ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(178, "svg", 79);
      \u0275\u0275element(179, "path", 80);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(180, "section", 105)(181, "div", 106);
      \u0275\u0275repeaterCreate(182, HomePage_For_183_Template, 8, 2, "article", 107, _forTrack1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "aside", 108)(185, "div", 109)(186, "p", 110);
      \u0275\u0275text(187, "Our commitment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "div", 111);
      \u0275\u0275text(189, '"');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(190, "blockquote");
      \u0275\u0275text(191, " Every learner deserves a clear roadmap, measurable progress, and practical skills that translate directly into real opportunities. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "div", 112)(193, "span");
      \u0275\u0275text(194, "Industry-ready curriculum");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "span");
      \u0275\u0275text(196, "Project-first learning model");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275conditional(ctx.isLoggedIn() ? 21 : 22);
      \u0275\u0275advance(24);
      \u0275\u0275repeater(ctx.stats);
      \u0275\u0275advance(74);
      \u0275\u0275textInterpolate(ctx.learningTracks[0].badge);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.learningTracks[0].title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.learningTracks[0].description);
      \u0275\u0275advance(23);
      \u0275\u0275textInterpolate(ctx.learningTracks[1].badge);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.learningTracks[1].title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.learningTracks[1].description);
      \u0275\u0275advance(20);
      \u0275\u0275textInterpolate(ctx.learningTracks[2].badge);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.learningTracks[2].title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.learningTracks[2].description);
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.highlights);
    }
  }, dependencies: [RouterLink], styles: ['@import "https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap";\n\n\n[_nghost-%COMP%], \n.home-page[_ngcontent-%COMP%] {\n  --c-bg: #f7f8fc;\n  --c-surface: #ffffff;\n  --c-surface-2: #f0f2f9;\n  --c-border: rgba(37, 99, 235, 0.10);\n  --c-border-2: rgba(37, 99, 235, 0.22);\n  --c-blue: #2563eb;\n  --c-blue-mid: #3b82f6;\n  --c-blue-light: #4f73d4;\n  --c-cyan: #0ea5e9;\n  --c-teal: #0d9488;\n  --c-text: #111827;\n  --c-text-2: rgba(17, 24, 39, 0.65);\n  --c-text-3: rgba(17, 24, 39, 0.40);\n  --c-accent-glow: rgba(37, 99, 235, 0.14);\n  --radius-sm: 10px;\n  --radius-md: 16px;\n  --radius-lg: 24px;\n  --radius-xl: 32px;\n  --font-display: "Syne", sans-serif;\n  --font-body: "DM Sans", sans-serif;\n}\n*[_ngcontent-%COMP%], \n*[_ngcontent-%COMP%]::before, \n*[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n  margin: 0;\n}\n.home-page[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  min-height: 100vh;\n  padding: 20px 28px 80px;\n  background-color: var(--c-bg);\n  color: var(--c-text);\n  font-family: var(--font-body);\n  font-size: 15px;\n  line-height: 1.6;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  margin: 0;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.bg-dots[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(37, 99, 235, 0.12) 1px,\n      transparent 1px);\n  background-size: 32px 32px;\n  pointer-events: none;\n  z-index: 0;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse 90% 60% at 50% 0%,\n      black 30%,\n      transparent 100%);\n  mask-image:\n    radial-gradient(\n      ellipse 90% 60% at 50% 0%,\n      black 30%,\n      transparent 100%);\n}\n.bg-blob[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  z-index: 0;\n  filter: blur(72px);\n}\n.bg-blob-1[_ngcontent-%COMP%] {\n  width: 560px;\n  height: 560px;\n  top: -180px;\n  left: -120px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(37, 99, 235, 0.10) 0%,\n      transparent 65%);\n  animation: _ngcontent-%COMP%_driftA 18s ease-in-out infinite;\n}\n.bg-blob-2[_ngcontent-%COMP%] {\n  width: 420px;\n  height: 420px;\n  top: 300px;\n  right: -80px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(13, 148, 136, 0.08) 0%,\n      transparent 65%);\n  animation: _ngcontent-%COMP%_driftB 22s ease-in-out infinite;\n}\n.topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 12px;\n  z-index: 50;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 18px;\n  margin-bottom: 28px;\n  border-radius: var(--radius-xl);\n  border: 1px solid var(--c-border);\n  background: rgba(255, 255, 255, 0.88);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  box-shadow: 0 2px 24px rgba(37, 99, 235, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 11px;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--c-blue) 0%,\n      var(--c-cyan) 100%);\n  color: white;\n  box-shadow: 0 4px 16px var(--c-accent-glow);\n  flex-shrink: 0;\n}\n.brand-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.brand-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--c-text);\n  letter-spacing: -0.01em;\n}\n.brand-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: var(--c-text-3);\n  font-weight: 400;\n}\n.topbar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: auto;\n}\n.topbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border-radius: 999px;\n  text-decoration: none;\n  font-size: 0.88rem;\n  font-weight: 500;\n  color: var(--c-text-2);\n  transition: background 0.2s, color 0.2s;\n}\n.topbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.07);\n  color: var(--c-blue);\n}\n.topbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.user-menu[_ngcontent-%COMP%] {\n  position: relative;\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  padding: 5px 12px 5px 5px;\n  border-radius: 999px;\n  border: 1px solid var(--c-border);\n  background: rgba(37, 99, 235, 0.04);\n  color: var(--c-text-2);\n  font-size: 0.88rem;\n  font-weight: 500;\n  list-style: none;\n  transition: border-color 0.2s, background 0.2s;\n}\n.user-chip[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-border-2);\n  background: rgba(37, 99, 235, 0.08);\n}\n.user-menu[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.user-menu[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]::-webkit-details-marker {\n  display: none;\n}\n.menu-caret[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n}\n.user-menu[open][_ngcontent-%COMP%]   .menu-caret[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.user-menu-list[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  min-width: 180px;\n  padding: 6px;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--c-border);\n  background: rgba(255, 255, 255, 0.98);\n  -webkit-backdrop-filter: blur(24px);\n  backdrop-filter: blur(24px);\n  box-shadow: 0 16px 40px rgba(37, 99, 235, 0.10), 0 2px 8px rgba(0, 0, 0, 0.06);\n  z-index: 60;\n}\n.user-menu-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-radius: var(--radius-sm);\n  text-decoration: none;\n  font-size: 0.88rem;\n  font-weight: 500;\n  color: var(--c-text-2);\n  transition: background 0.15s, color 0.15s;\n}\n.user-menu-link[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.07);\n  color: var(--c-blue);\n}\n.menu-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--c-blue),\n      var(--c-cyan));\n  color: white;\n  font-size: 0.76rem;\n  font-weight: 700;\n  font-family: var(--font-display);\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: var(--c-text);\n}\n.nav-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  min-height: 38px;\n  padding: 0 16px;\n  border-radius: 999px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  text-decoration: none;\n  border: 1px solid transparent;\n  cursor: pointer;\n  transition:\n    transform 0.2s,\n    background 0.2s,\n    border-color 0.2s,\n    box-shadow 0.2s;\n}\n.nav-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.nav-button-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: var(--c-border);\n  color: var(--c-text-2);\n}\n.nav-button-ghost[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-border-2);\n  color: var(--c-blue);\n  background: rgba(37, 99, 235, 0.05);\n}\n.nav-button-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--c-blue) 0%,\n      var(--c-blue-mid) 100%);\n  border-color: rgba(37, 99, 235, 0.3);\n  color: white;\n  box-shadow: 0 4px 18px var(--c-accent-glow);\n}\n.nav-button-primary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 24px rgba(37, 99, 235, 0.28);\n}\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: minmax(0, 1.1fr) minmax(300px, 0.9fr);\n  gap: 24px;\n  align-items: start;\n  padding: 52px 52px;\n  border-radius: var(--radius-xl);\n  border: 1px solid var(--c-border);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.95) 0%,\n      rgba(247, 248, 252, 0.90) 100%);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  box-shadow: 0 4px 32px rgba(37, 99, 235, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n}\n.hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -1px;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(37, 99, 235, 0.4),\n      var(--c-cyan),\n      transparent);\n}\n.hero-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  position: relative;\n  z-index: 1;\n}\n.eyebrow-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.eyebrow-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--c-cyan);\n  box-shadow: 0 0 8px var(--c-cyan);\n  animation: _ngcontent-%COMP%_pulse 2.5s ease-in-out infinite;\n}\n.eyebrow[_ngcontent-%COMP%], \n.panel-label[_ngcontent-%COMP%], \n.quote-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--c-blue);\n}\nh1[_ngcontent-%COMP%] {\n  font-size: clamp(2.6rem, 5vw, 4.6rem);\n  line-height: 0.97;\n  letter-spacing: -0.04em;\n  color: var(--c-text);\n}\n.h1-accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--c-blue),\n      var(--c-cyan));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.lead[_ngcontent-%COMP%] {\n  max-width: 56ch;\n  color: var(--c-text-2);\n  font-size: 1.02rem;\n  line-height: 1.8;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.primary-action[_ngcontent-%COMP%], \n.secondary-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  min-height: 48px;\n  padding: 0 24px;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.95rem;\n  text-decoration: none;\n  border: 1px solid transparent;\n  transition:\n    transform 0.25s,\n    box-shadow 0.25s,\n    background 0.25s;\n}\n.primary-action[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--c-blue) 0%,\n      var(--c-blue-mid) 100%);\n  border-color: rgba(37, 99, 235, 0.3);\n  color: white;\n  box-shadow: 0 6px 24px var(--c-accent-glow);\n}\n.primary-action[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 32px rgba(37, 99, 235, 0.30);\n}\n.secondary-action[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.05);\n  border-color: var(--c-border);\n  color: var(--c-text-2);\n}\n.secondary-action[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: var(--c-border-2);\n  color: var(--c-blue);\n  background: rgba(37, 99, 235, 0.08);\n}\n.stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 12px;\n}\n.stat-pill[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 16px 18px;\n  border-radius: var(--radius-md);\n  background: rgba(37, 99, 235, 0.04);\n  border: 1px solid var(--c-border);\n  transition:\n    border-color 0.2s,\n    background 0.2s,\n    box-shadow 0.2s;\n}\n.stat-pill[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-border-2);\n  background: rgba(37, 99, 235, 0.07);\n  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.08);\n}\n.stat-pill[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.6rem;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n  background:\n    linear-gradient(\n      90deg,\n      var(--c-blue),\n      var(--c-cyan));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-pill[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--c-text-3);\n  font-weight: 500;\n}\n.hero-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 26px;\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--c-border);\n  background: rgba(255, 255, 255, 0.82);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 24px rgba(37, 99, 235, 0.07);\n  position: relative;\n  overflow: hidden;\n}\n.hero-showcase[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 18px;\n  align-items: stretch;\n  padding: 20px;\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--c-border);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.95),\n      rgba(240, 243, 251, 0.95));\n  box-shadow: 0 4px 24px rgba(37, 99, 235, 0.07);\n  position: relative;\n  overflow: hidden;\n}\n.hero-showcase[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: auto 0 0 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(37, 99, 235, 0.35),\n      rgba(14, 165, 233, 0.5),\n      transparent);\n}\n.showcase-media[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  place-items: center;\n}\n.showcase-illustration[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 320px;\n  height: auto;\n  filter: drop-shadow(0 18px 30px rgba(37, 99, 235, 0.12));\n}\n.showcase-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  z-index: 1;\n  padding: 7px 11px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.92);\n  color: var(--c-blue);\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  border: 1px solid var(--c-border);\n}\n.showcase-copy[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n.showcase-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.45rem;\n  line-height: 1.15;\n  letter-spacing: -0.03em;\n}\n.showcase-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--c-text-2);\n  line-height: 1.7;\n}\n.showcase-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.showcase-chips[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 7px 11px;\n  border-radius: 999px;\n  background: rgba(37, 99, 235, 0.06);\n  border: 1px solid var(--c-border);\n  color: var(--c-text-2);\n  font-size: 0.84rem;\n  font-weight: 600;\n}\n.hero-panel[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(14, 165, 233, 0.5),\n      transparent);\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 1.1rem;\n  letter-spacing: -0.02em;\n  color: var(--c-text);\n}\n.live-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 11px;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--c-teal);\n  background: rgba(13, 148, 136, 0.08);\n  border: 1px solid rgba(13, 148, 136, 0.22);\n}\n.live-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--c-teal);\n  animation: _ngcontent-%COMP%_pulse 1.8s ease-in-out infinite;\n}\n.ring-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.progress-ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(100%, 130px);\n  aspect-ratio: 1;\n  flex-shrink: 0;\n}\n.ring-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.ring-track[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: rgba(37, 99, 235, 0.10);\n  stroke-width: 8;\n}\n.ring-fill[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: var(--c-blue);\n  stroke-width: 8;\n  stroke-linecap: round;\n  stroke-dasharray: 314;\n  stroke-dashoffset: calc(314 * (1 - 0.87));\n  transition: stroke-dashoffset 1.2s cubic-bezier(.4, 0, .2, 1);\n}\n.ring-core[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.ring-core[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.5rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  color: var(--c-blue);\n}\n.ring-core[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: var(--c-text-3);\n  font-weight: 500;\n}\n.ring-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.82rem;\n  color: var(--c-text-2);\n}\n.legend-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.legend-done[_ngcontent-%COMP%] {\n  background: var(--c-blue);\n}\n.legend-remain[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.15);\n  border: 1px solid var(--c-border);\n}\n.dashboard-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.dashboard-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 14px;\n  border-radius: var(--radius-sm);\n  background: rgba(37, 99, 235, 0.03);\n  border: 1px solid var(--c-border);\n  font-size: 0.84rem;\n  color: var(--c-text-2);\n  transition: background 0.2s, border-color 0.2s;\n}\n.dashboard-row[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.06);\n  border-color: var(--c-border-2);\n}\n.row-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.row-value[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-weight: 700;\n  font-size: 0.84rem;\n  color: var(--c-blue);\n}\n.row-ok[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.row-streak[_ngcontent-%COMP%] {\n  color: #ea580c;\n}\n.section-head[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 700px;\n  padding-top: 64px;\n}\n.section-label-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.section-line[_ngcontent-%COMP%] {\n  display: block;\n  width: 32px;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--c-blue),\n      var(--c-cyan));\n  border-radius: 2px;\n}\n.section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(1.7rem, 3vw, 2.6rem);\n  letter-spacing: -0.04em;\n  line-height: 1.1;\n  margin-bottom: 14px;\n  color: var(--c-text);\n}\n.section-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--c-text-2);\n  line-height: 1.8;\n  font-size: 1rem;\n}\n.track-grid[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n  margin-top: 28px;\n}\n.track-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--c-border);\n  background: var(--c-surface);\n  overflow: hidden;\n  transition:\n    transform 0.3s,\n    border-color 0.3s,\n    box-shadow 0.3s;\n  box-shadow: 0 2px 12px rgba(37, 99, 235, 0.05);\n}\n.track-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  border-color: var(--c-border-2);\n  box-shadow: 0 16px 48px rgba(37, 99, 235, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.track-img[_ngcontent-%COMP%] {\n  height: 118px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.track-img-beg[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e0f2fe 0%,\n      #bae6fd 100%);\n  border-bottom: 1px solid rgba(7, 172, 227, 0.15);\n}\n.track-img-int[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ede9fe 0%,\n      #c4b5fd 100%);\n  border-bottom: 1px solid rgba(124, 58, 237, 0.15);\n}\n.track-img-adv[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #86efac 100%);\n  border-bottom: 1px solid rgba(22, 163, 74, 0.15);\n}\n.track-card-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  padding: 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  min-height: 180px;\n}\n.track-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  width: fit-content;\n  padding: 4px 12px;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.track-badge-beg[_ngcontent-%COMP%] {\n  color: #0369a1;\n  background: #e0f2fe;\n  border: 1px solid rgba(3, 105, 161, 0.18);\n}\n.track-badge-int[_ngcontent-%COMP%] {\n  color: #6d28d9;\n  background: #ede9fe;\n  border: 1px solid rgba(109, 40, 217, 0.18);\n}\n.track-badge-adv[_ngcontent-%COMP%] {\n  color: #166534;\n  background: #dcfce7;\n  border: 1px solid rgba(22, 101, 52, 0.18);\n}\n.track-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.08rem;\n  letter-spacing: -0.02em;\n  line-height: 1.3;\n  color: var(--c-text);\n}\n.track-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--c-text-2);\n  font-size: 0.88rem;\n  line-height: 1.7;\n  flex: 1;\n}\n.track-footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n.track-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--c-blue);\n  text-decoration: none;\n  padding: 7px 0;\n  border-bottom: 1px solid rgba(37, 99, 235, 0.25);\n  transition:\n    gap 0.2s,\n    border-color 0.2s,\n    color 0.2s;\n}\n.track-cta[_ngcontent-%COMP%]:hover {\n  gap: 10px;\n  border-color: var(--c-blue);\n}\n.feature-layout[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);\n  gap: 18px;\n  margin-top: 18px;\n}\n.feature-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.feature-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 18px;\n  padding: 20px 22px;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--c-border);\n  background: var(--c-surface);\n  box-shadow: 0 1px 8px rgba(37, 99, 235, 0.04);\n  transition:\n    border-color 0.25s,\n    box-shadow 0.25s,\n    transform 0.25s;\n}\n.feature-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-border-2);\n  box-shadow: 0 6px 24px rgba(37, 99, 235, 0.09);\n  transform: translateX(4px);\n}\n.feature-icon-wrap[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 11px;\n  background: rgba(37, 99, 235, 0.07);\n  border: 1px solid rgba(37, 99, 235, 0.14);\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n}\n.feature-icon[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--c-blue),\n      var(--c-cyan));\n  box-shadow: 0 0 10px rgba(37, 99, 235, 0.5);\n}\n.feature-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  letter-spacing: -0.01em;\n  margin-bottom: 5px;\n  color: var(--c-text);\n}\n.feature-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--c-text-2);\n  line-height: 1.7;\n}\n.quote-card[_ngcontent-%COMP%] {\n  padding: 30px;\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--c-border);\n  background:\n    linear-gradient(\n      160deg,\n      #ffffff 0%,\n      #f0f4ff 100%);\n  box-shadow: 0 4px 24px rgba(37, 99, 235, 0.07);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 20px;\n  position: relative;\n  overflow: hidden;\n}\n.quote-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(14, 165, 233, 0.5),\n      transparent);\n}\n.quote-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.quote-mark[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  line-height: 0.7;\n  font-family: Georgia, serif;\n  color: rgba(37, 99, 235, 0.14);\n  font-weight: 900;\n  flex-shrink: 0;\n  margin-top: -8px;\n}\n.quote-card[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  line-height: 1.8;\n  color: var(--c-text-2);\n  letter-spacing: -0.01em;\n  font-style: italic;\n}\n.quote-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.quote-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border-radius: 999px;\n  background: rgba(37, 99, 235, 0.07);\n  border: 1px solid rgba(37, 99, 235, 0.14);\n  color: var(--c-blue);\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.reveal-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_revealUp 0.7s cubic-bezier(.22, 1, .36, 1) both;\n}\n.reveal-down[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_revealDown 0.7s cubic-bezier(.22, 1, .36, 1) both;\n}\n.delay-1[_ngcontent-%COMP%] {\n  animation-delay: 0.10s;\n}\n.delay-2[_ngcontent-%COMP%] {\n  animation-delay: 0.20s;\n}\n.delay-3[_ngcontent-%COMP%] {\n  animation-delay: 0.32s;\n}\n@keyframes _ngcontent-%COMP%_revealUp {\n  from {\n    opacity: 0;\n    transform: translateY(28px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_revealDown {\n  from {\n    opacity: 0;\n    transform: translateY(-16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(0.85);\n  }\n}\n@keyframes _ngcontent-%COMP%_driftA {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(20px, 30px) scale(1.05);\n  }\n}\n@keyframes _ngcontent-%COMP%_driftB {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(-22px, -18px) scale(1.04);\n  }\n}\n@media (max-width: 1100px) {\n  .hero[_ngcontent-%COMP%], \n   .feature-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .track-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .hero[_ngcontent-%COMP%] {\n    padding: 36px;\n  }\n}\n@media (max-width: 768px) {\n  .home-page[_ngcontent-%COMP%] {\n    padding: 14px 14px 56px;\n  }\n  .topbar[_ngcontent-%COMP%] {\n    position: static;\n    padding: 12px 14px;\n    flex-wrap: wrap;\n    border-radius: var(--radius-lg);\n  }\n  .topbar-nav[_ngcontent-%COMP%] {\n    order: 3;\n    width: 100%;\n    justify-content: center;\n    padding-top: 6px;\n    border-top: 1px solid var(--c-border);\n    margin-top: 4px;\n    margin-left: 0;\n  }\n  .topbar-actions[_ngcontent-%COMP%] {\n    margin-left: auto;\n  }\n  .track-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 2.4rem;\n  }\n  .stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hero[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n  .actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .primary-action[_ngcontent-%COMP%], \n   .secondary-action[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .user-menu-list[_ngcontent-%COMP%] {\n    position: static;\n    margin-top: 6px;\n  }\n  .ring-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n@media (max-width: 480px) {\n  .topbar-actions[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    width: 100%;\n  }\n  .nav-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=home-page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePage, [{
    type: Component,
    args: [{ selector: "app-home-page", imports: [RouterLink], template: '<!-- home-page.html \u2014 Angular template, paste as-is -->\n\n<main class="home-page">\n\n  <!-- Subtle dot-grid background -->\n  <div class="bg-dots" aria-hidden="true"></div>\n  <div class="bg-blob bg-blob-1" aria-hidden="true"></div>\n  <div class="bg-blob bg-blob-2" aria-hidden="true"></div>\n\n  <!-- \u2500\u2500\u2500 TOPBAR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <header class="topbar reveal-down">\n    <a class="brand" routerLink="/homepage" aria-label="Learning platform home">\n      <span class="brand-mark" aria-hidden="true">\n        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">\n          <path d="M10 2L18 6V10C18 14.4 14.4 18 10 19C5.6 18 2 14.4 2 10V6L10 2Z" fill="currentColor" opacity="0.9"/>\n          <path d="M7 10L9 12L13 8" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n      </span>\n      <span class="brand-text">\n        <strong>LearningTandS</strong>\n        <small>Touch &amp; Solve Learning</small>\n      </span>\n    </a>\n\n    <nav class="topbar-nav" aria-label="Primary navigation">\n      <a href="#tracks">Tracks</a>\n      <a href="#platform-identity">Vision</a>\n    </nav>\n\n    <div class="topbar-actions">\n      @if (isLoggedIn()) {\n        <details class="user-menu">\n          <summary class="user-chip" aria-label="Logged in user menu">\n            <span class="user-avatar">{{ userInitial() }}</span>\n            <span class="user-name">Hi, {{ userName() }}</span>\n            <span class="menu-caret" aria-hidden="true">\n              <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor"><path d="M1 1L5 5L9 1"/></svg>\n            </span>\n          </summary>\n          <div class="user-menu-list" role="menu">\n            <a routerLink="/profile" class="user-menu-link" role="menuitem">\n              <span class="menu-icon">\u{1F464}</span> Profile\n            </a>\n            @if (isTeacher()) {\n              <a routerLink="/teacher" class="user-menu-link" role="menuitem">\n                <span class="menu-icon">\u{1F393}</span> Teacher\n              </a>\n            }\n          </div>\n        </details>\n        <button type="button" class="nav-button nav-button-ghost" (click)="logout()">Logout</button>\n      } @else {\n        <a routerLink="/login" class="nav-button nav-button-ghost">Login</a>\n        <a routerLink="/register" class="nav-button nav-button-primary">\n          <span>Get started</span>\n          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">\n            <path d="M3 7H11M11 7L8 4M11 7L8 10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>\n          </svg>\n        </a>\n      }\n    </div>\n  </header>\n\n  <!-- \u2500\u2500\u2500 HERO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <section class="hero">\n    <div class="hero-copy reveal-up">\n      <div class="eyebrow-wrap">\n        <span class="eyebrow-dot" aria-hidden="true"></span>\n        <p class="eyebrow">Trusted learning ecosystem</p>\n      </div>\n\n      <h1>\n        Learn in-demand\n        <span class="h1-accent">skills</span>\n        <br>with structured paths.\n      </h1>\n\n      <p class="lead">\n        Grow from fundamentals to advanced implementation through\n        mentor-guided modules and hands-on labs designed for real-world outcomes.\n      </p>\n\n      <div class="actions">\n        <a href="#tracks" class="primary-action">\n          Explore programs\n          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">\n            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>\n          </svg>\n        </a>\n        <a href="#platform-identity" class="secondary-action">Why choose us</a>\n      </div>\n\n      <div class="stats" aria-label="Platform highlights">\n        @for (stat of stats; track stat.label) {\n          <article class="stat-pill">\n            <strong>{{ stat.value }}</strong>\n            <span>{{ stat.label }}</span>\n          </article>\n        }\n      </div>\n    </div>\n\n    <!-- Education showcase panel -->\n    <aside class="hero-showcase reveal-up delay-1" aria-label="Educational showcase">\n      <div class="showcase-media">\n        <div class="showcase-badge">Education Spotlight</div>\n        <svg class="showcase-illustration" viewBox="0 0 320 260" role="img" aria-label="Students learning on modern devices">\n          <defs>\n            <linearGradient id="showcaseBg" x1="0" x2="1" y1="0" y2="1">\n              <stop offset="0%" stop-color="#eff6ff"/>\n              <stop offset="100%" stop-color="#dbeafe"/>\n            </linearGradient>\n            <linearGradient id="deviceBlue" x1="0" x2="1" y1="0" y2="1">\n              <stop offset="0%" stop-color="#2563eb"/>\n              <stop offset="100%" stop-color="#0ea5e9"/>\n            </linearGradient>\n          </defs>\n          <rect x="0" y="0" width="320" height="260" rx="28" fill="url(#showcaseBg)"/>\n          <circle cx="70" cy="52" r="22" fill="#bfdbfe"/>\n          <circle cx="248" cy="56" r="16" fill="#bae6fd"/>\n          <rect x="52" y="92" width="124" height="84" rx="14" fill="#ffffff" stroke="#c7ddff"/>\n          <rect x="64" y="104" width="100" height="54" rx="8" fill="url(#deviceBlue)" opacity="0.95"/>\n          <rect x="78" y="118" width="72" height="8" rx="4" fill="#ffffff" opacity="0.88"/>\n          <rect x="78" y="134" width="52" height="8" rx="4" fill="#ffffff" opacity="0.78"/>\n          <rect x="186" y="78" width="92" height="120" rx="20" fill="#ffffff" stroke="#c7ddff"/>\n          <rect x="198" y="94" width="68" height="88" rx="12" fill="#f8fafc" stroke="#d6e2fb"/>\n          <path d="M214 152C214 142 221 134 230 134C239 134 246 142 246 152V168H214V152Z" fill="#93c5fd"/>\n          <circle cx="230" cy="121" r="10" fill="#bfdbfe"/>\n          <rect x="34" y="198" width="250" height="28" rx="14" fill="#ffffff" stroke="#dbe7ff"/>\n          <text x="160" y="217" text-anchor="middle" font-size="14" fill="#2563eb" font-family="sans-serif" font-weight="700">Interactive learning, labs, and guided practice</text>\n        </svg>\n      </div>\n\n      <div class="showcase-copy">\n        <p class="panel-label">Future ready learning</p>\n        <h2>Explore a visual learning journey</h2>\n        <p>\n          From structured lessons to project-based milestones, the platform is designed to keep\n          every learner focused, active, and progressing.\n        </p>\n\n        <div class="showcase-chips" aria-label="Learning highlights">\n          <span>Live classes</span>\n          <span>Mentor support</span>\n          <span>Project labs</span>\n          <span>Career paths</span>\n        </div>\n      </div>\n    </aside>\n  </section>\n\n  <!-- \u2500\u2500\u2500 SECTION HEAD \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <section class="section-head reveal-up delay-2">\n    <div class="section-label-wrap">\n      <span class="section-line" aria-hidden="true"></span>\n      <p class="eyebrow">Programs</p>\n    </div>\n    <h2 id="tracks">Career-focused learning paths<br>for every stage</h2>\n    <p>\n      Choose a pathway based on your current level and progress with curated lessons,\n      challenges, and project-based milestones.\n    </p>\n  </section>\n\n  <!-- \u2500\u2500\u2500 TRACK GRID \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <section class="track-grid" aria-label="Learning tracks">\n\n    <!-- Beginner card -->\n    <article class="track-card reveal-up delay-2">\n      <div class="track-img track-img-beg" aria-hidden="true">\n        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">\n          <!-- Browser window -->\n          <rect x="10" y="16" width="70" height="52" rx="7" fill="#bae6fd" stroke="#7dd3fc" stroke-width="1.5"/>\n          <rect x="10" y="16" width="70" height="14" rx="7" fill="#7dd3fc"/>\n          <rect x="10" y="23" width="70" height="7" fill="#7dd3fc"/>\n          <circle cx="18" cy="23" r="3" fill="white" opacity=".7"/>\n          <circle cx="27" cy="23" r="3" fill="white" opacity=".7"/>\n          <circle cx="36" cy="23" r="3" fill="white" opacity=".7"/>\n          <!-- URL bar -->\n          <rect x="44" y="19" width="30" height="8" rx="4" fill="white" opacity=".35"/>\n          <!-- Code lines -->\n          <rect x="18" y="38" width="22" height="4" rx="2" fill="#0284c7" opacity=".55"/>\n          <rect x="18" y="46" width="36" height="4" rx="2" fill="#0ea5e9" opacity=".4"/>\n          <rect x="18" y="54" width="28" height="4" rx="2" fill="#0284c7" opacity=".3"/>\n          <!-- Code tag badge -->\n          <rect x="52" y="36" width="22" height="22" rx="5" fill="#0369a1" opacity=".18"/>\n          <text x="63" y="51" text-anchor="middle" font-size="13" fill="#0369a1" font-family="monospace" font-weight="700">&lt;/&gt;</text>\n        </svg>\n      </div>\n      <div class="track-card-inner">\n        <span class="track-badge track-badge-beg">{{ learningTracks[0].badge }}</span>\n        <h3>{{ learningTracks[0].title }}</h3>\n        <p>{{ learningTracks[0].description }}</p>\n        <div class="track-footer">\n          <a href="#tracks" class="track-cta">\n            Start learning\n            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">\n              <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n            </svg>\n          </a>\n        </div>\n      </div>\n    </article>\n\n    <!-- Intermediate card -->\n    <article class="track-card reveal-up delay-2">\n      <div class="track-img track-img-int" aria-hidden="true">\n        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">\n          <!-- Angular-style component grid -->\n          <rect x="10" y="10" width="30" height="30" rx="6" fill="#c4b5fd" stroke="#a78bfa" stroke-width="1.5"/>\n          <rect x="50" y="10" width="30" height="30" rx="6" fill="#ddd6fe" stroke="#c4b5fd" stroke-width="1.5"/>\n          <rect x="10" y="50" width="30" height="30" rx="6" fill="#ddd6fe" stroke="#c4b5fd" stroke-width="1.5"/>\n          <rect x="50" y="50" width="30" height="30" rx="6" fill="#c4b5fd" stroke="#a78bfa" stroke-width="1.5"/>\n          <!-- Connectors -->\n          <line x1="40" y1="25" x2="50" y2="25" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3 2"/>\n          <line x1="40" y1="65" x2="50" y2="65" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3 2"/>\n          <line x1="25" y1="40" x2="25" y2="50" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3 2"/>\n          <line x1="65" y1="40" x2="65" y2="50" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3 2"/>\n          <!-- Dots at corners -->\n          <circle cx="25" cy="25" r="5" fill="#6d28d9" opacity=".6"/>\n          <circle cx="65" cy="65" r="5" fill="#6d28d9" opacity=".6"/>\n          <circle cx="65" cy="25" r="3.5" fill="#a78bfa" opacity=".6"/>\n          <circle cx="25" cy="65" r="3.5" fill="#a78bfa" opacity=".6"/>\n        </svg>\n      </div>\n      <div class="track-card-inner">\n        <span class="track-badge track-badge-int">{{ learningTracks[1].badge }}</span>\n        <h3>{{ learningTracks[1].title }}</h3>\n        <p>{{ learningTracks[1].description }}</p>\n        <div class="track-footer">\n          <a href="#tracks" class="track-cta">\n            Start learning\n            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">\n              <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n            </svg>\n          </a>\n        </div>\n      </div>\n    </article>\n\n    <!-- Advanced card -->\n    <article class="track-card reveal-up delay-2">\n      <div class="track-img track-img-adv" aria-hidden="true">\n        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">\n          <!-- Bar chart -->\n          <rect x="12" y="54" width="14" height="24" rx="4" fill="#86efac" stroke="#4ade80" stroke-width="1.5"/>\n          <rect x="32" y="40" width="14" height="38" rx="4" fill="#4ade80" stroke="#22c55e" stroke-width="1.5"/>\n          <rect x="52" y="24" width="14" height="54" rx="4" fill="#16a34a" stroke="#15803d" stroke-width="1.5"/>\n          <!-- Trend line -->\n          <polyline points="19,52 39,38 59,22" stroke="#166534" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>\n          <circle cx="19" cy="52" r="4" fill="#166534"/>\n          <circle cx="39" cy="38" r="4" fill="#166534"/>\n          <circle cx="59" cy="22" r="4" fill="#166534"/>\n          <!-- Rocket -->\n          <text x="68" y="22" font-size="16" text-anchor="middle">\u{1F680}</text>\n        </svg>\n      </div>\n      <div class="track-card-inner">\n        <span class="track-badge track-badge-adv">{{ learningTracks[2].badge }}</span>\n        <h3>{{ learningTracks[2].title }}</h3>\n        <p>{{ learningTracks[2].description }}</p>\n        <div class="track-footer">\n          <a href="#tracks" class="track-cta">\n            Start learning\n            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">\n              <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n            </svg>\n          </a>\n        </div>\n      </div>\n    </article>\n\n  </section>\n\n  <!-- \u2500\u2500\u2500 FEATURE LAYOUT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <section class="feature-layout">\n    <div class="feature-list">\n      @for (highlight of highlights; track highlight.title) {\n        <article class="feature-card reveal-up delay-3">\n          <div class="feature-icon-wrap" aria-hidden="true">\n            <div class="feature-icon"></div>\n          </div>\n          <div class="feature-body">\n            <h3>{{ highlight.title }}</h3>\n            <p>{{ highlight.description }}</p>\n          </div>\n        </article>\n      }\n    </div>\n\n    <aside id="platform-identity" class="quote-card reveal-up delay-3">\n      <div class="quote-top">\n        <p class="quote-label">Our commitment</p>\n        <div class="quote-mark" aria-hidden="true">"</div>\n      </div>\n      <blockquote>\n        Every learner deserves a clear roadmap, measurable progress, and practical\n        skills that translate directly into real opportunities.\n      </blockquote>\n      <div class="quote-footer">\n        <span>Industry-ready curriculum</span>\n        <span>Project-first learning model</span>\n      </div>\n    </aside>\n  </section>\n\n</main>', styles: ['@import "https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap";\n\n/* src/app/base/home-page/home-page.css */\n:host,\n.home-page {\n  --c-bg: #f7f8fc;\n  --c-surface: #ffffff;\n  --c-surface-2: #f0f2f9;\n  --c-border: rgba(37, 99, 235, 0.10);\n  --c-border-2: rgba(37, 99, 235, 0.22);\n  --c-blue: #2563eb;\n  --c-blue-mid: #3b82f6;\n  --c-blue-light: #4f73d4;\n  --c-cyan: #0ea5e9;\n  --c-teal: #0d9488;\n  --c-text: #111827;\n  --c-text-2: rgba(17, 24, 39, 0.65);\n  --c-text-3: rgba(17, 24, 39, 0.40);\n  --c-accent-glow: rgba(37, 99, 235, 0.14);\n  --radius-sm: 10px;\n  --radius-md: 16px;\n  --radius-lg: 24px;\n  --radius-xl: 32px;\n  --font-display: "Syne", sans-serif;\n  --font-body: "DM Sans", sans-serif;\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n}\n.home-page {\n  position: relative;\n  overflow: hidden;\n  min-height: 100vh;\n  padding: 20px 28px 80px;\n  background-color: var(--c-bg);\n  color: var(--c-text);\n  font-family: var(--font-body);\n  font-size: 15px;\n  line-height: 1.6;\n}\nh1,\nh2,\nh3 {\n  font-family: var(--font-display);\n  margin: 0;\n}\np {\n  margin: 0;\n}\n.bg-dots {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(37, 99, 235, 0.12) 1px,\n      transparent 1px);\n  background-size: 32px 32px;\n  pointer-events: none;\n  z-index: 0;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse 90% 60% at 50% 0%,\n      black 30%,\n      transparent 100%);\n  mask-image:\n    radial-gradient(\n      ellipse 90% 60% at 50% 0%,\n      black 30%,\n      transparent 100%);\n}\n.bg-blob {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  z-index: 0;\n  filter: blur(72px);\n}\n.bg-blob-1 {\n  width: 560px;\n  height: 560px;\n  top: -180px;\n  left: -120px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(37, 99, 235, 0.10) 0%,\n      transparent 65%);\n  animation: driftA 18s ease-in-out infinite;\n}\n.bg-blob-2 {\n  width: 420px;\n  height: 420px;\n  top: 300px;\n  right: -80px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(13, 148, 136, 0.08) 0%,\n      transparent 65%);\n  animation: driftB 22s ease-in-out infinite;\n}\n.topbar {\n  position: sticky;\n  top: 12px;\n  z-index: 50;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 18px;\n  margin-bottom: 28px;\n  border-radius: var(--radius-xl);\n  border: 1px solid var(--c-border);\n  background: rgba(255, 255, 255, 0.88);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  box-shadow: 0 2px 24px rgba(37, 99, 235, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 11px;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.brand-mark {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--c-blue) 0%,\n      var(--c-cyan) 100%);\n  color: white;\n  box-shadow: 0 4px 16px var(--c-accent-glow);\n  flex-shrink: 0;\n}\n.brand-text {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.brand-text strong {\n  font-family: var(--font-display);\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--c-text);\n  letter-spacing: -0.01em;\n}\n.brand-text small {\n  font-size: 0.74rem;\n  color: var(--c-text-3);\n  font-weight: 400;\n}\n.topbar-nav {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: auto;\n}\n.topbar-nav a {\n  padding: 7px 14px;\n  border-radius: 999px;\n  text-decoration: none;\n  font-size: 0.88rem;\n  font-weight: 500;\n  color: var(--c-text-2);\n  transition: background 0.2s, color 0.2s;\n}\n.topbar-nav a:hover {\n  background: rgba(37, 99, 235, 0.07);\n  color: var(--c-blue);\n}\n.topbar-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.user-menu {\n  position: relative;\n}\n.user-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  padding: 5px 12px 5px 5px;\n  border-radius: 999px;\n  border: 1px solid var(--c-border);\n  background: rgba(37, 99, 235, 0.04);\n  color: var(--c-text-2);\n  font-size: 0.88rem;\n  font-weight: 500;\n  list-style: none;\n  transition: border-color 0.2s, background 0.2s;\n}\n.user-chip:hover {\n  border-color: var(--c-border-2);\n  background: rgba(37, 99, 235, 0.08);\n}\n.user-menu summary {\n  list-style: none;\n}\n.user-menu summary::-webkit-details-marker {\n  display: none;\n}\n.menu-caret svg {\n  transition: transform 0.2s;\n}\n.user-menu[open] .menu-caret svg {\n  transform: rotate(180deg);\n}\n.user-menu-list {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  min-width: 180px;\n  padding: 6px;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--c-border);\n  background: rgba(255, 255, 255, 0.98);\n  -webkit-backdrop-filter: blur(24px);\n  backdrop-filter: blur(24px);\n  box-shadow: 0 16px 40px rgba(37, 99, 235, 0.10), 0 2px 8px rgba(0, 0, 0, 0.06);\n  z-index: 60;\n}\n.user-menu-link {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-radius: var(--radius-sm);\n  text-decoration: none;\n  font-size: 0.88rem;\n  font-weight: 500;\n  color: var(--c-text-2);\n  transition: background 0.15s, color 0.15s;\n}\n.user-menu-link:hover {\n  background: rgba(37, 99, 235, 0.07);\n  color: var(--c-blue);\n}\n.menu-icon {\n  font-size: 14px;\n}\n.user-avatar {\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--c-blue),\n      var(--c-cyan));\n  color: white;\n  font-size: 0.76rem;\n  font-weight: 700;\n  font-family: var(--font-display);\n}\n.user-name {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: var(--c-text);\n}\n.nav-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  min-height: 38px;\n  padding: 0 16px;\n  border-radius: 999px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  text-decoration: none;\n  border: 1px solid transparent;\n  cursor: pointer;\n  transition:\n    transform 0.2s,\n    background 0.2s,\n    border-color 0.2s,\n    box-shadow 0.2s;\n}\n.nav-button:hover {\n  transform: translateY(-1px);\n}\n.nav-button-ghost {\n  background: transparent;\n  border-color: var(--c-border);\n  color: var(--c-text-2);\n}\n.nav-button-ghost:hover {\n  border-color: var(--c-border-2);\n  color: var(--c-blue);\n  background: rgba(37, 99, 235, 0.05);\n}\n.nav-button-primary {\n  background:\n    linear-gradient(\n      135deg,\n      var(--c-blue) 0%,\n      var(--c-blue-mid) 100%);\n  border-color: rgba(37, 99, 235, 0.3);\n  color: white;\n  box-shadow: 0 4px 18px var(--c-accent-glow);\n}\n.nav-button-primary:hover {\n  box-shadow: 0 6px 24px rgba(37, 99, 235, 0.28);\n}\n.hero {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: minmax(0, 1.1fr) minmax(300px, 0.9fr);\n  gap: 24px;\n  align-items: start;\n  padding: 52px 52px;\n  border-radius: var(--radius-xl);\n  border: 1px solid var(--c-border);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.95) 0%,\n      rgba(247, 248, 252, 0.90) 100%);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  box-shadow: 0 4px 32px rgba(37, 99, 235, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n}\n.hero::before {\n  content: "";\n  position: absolute;\n  top: -1px;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(37, 99, 235, 0.4),\n      var(--c-cyan),\n      transparent);\n}\n.hero-copy {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  position: relative;\n  z-index: 1;\n}\n.eyebrow-wrap {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.eyebrow-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--c-cyan);\n  box-shadow: 0 0 8px var(--c-cyan);\n  animation: pulse 2.5s ease-in-out infinite;\n}\n.eyebrow,\n.panel-label,\n.quote-label {\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--c-blue);\n}\nh1 {\n  font-size: clamp(2.6rem, 5vw, 4.6rem);\n  line-height: 0.97;\n  letter-spacing: -0.04em;\n  color: var(--c-text);\n}\n.h1-accent {\n  background:\n    linear-gradient(\n      90deg,\n      var(--c-blue),\n      var(--c-cyan));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.lead {\n  max-width: 56ch;\n  color: var(--c-text-2);\n  font-size: 1.02rem;\n  line-height: 1.8;\n}\n.actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.primary-action,\n.secondary-action {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  min-height: 48px;\n  padding: 0 24px;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.95rem;\n  text-decoration: none;\n  border: 1px solid transparent;\n  transition:\n    transform 0.25s,\n    box-shadow 0.25s,\n    background 0.25s;\n}\n.primary-action {\n  background:\n    linear-gradient(\n      135deg,\n      var(--c-blue) 0%,\n      var(--c-blue-mid) 100%);\n  border-color: rgba(37, 99, 235, 0.3);\n  color: white;\n  box-shadow: 0 6px 24px var(--c-accent-glow);\n}\n.primary-action:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 32px rgba(37, 99, 235, 0.30);\n}\n.secondary-action {\n  background: rgba(37, 99, 235, 0.05);\n  border-color: var(--c-border);\n  color: var(--c-text-2);\n}\n.secondary-action:hover {\n  transform: translateY(-2px);\n  border-color: var(--c-border-2);\n  color: var(--c-blue);\n  background: rgba(37, 99, 235, 0.08);\n}\n.stats {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 12px;\n}\n.stat-pill {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 16px 18px;\n  border-radius: var(--radius-md);\n  background: rgba(37, 99, 235, 0.04);\n  border: 1px solid var(--c-border);\n  transition:\n    border-color 0.2s,\n    background 0.2s,\n    box-shadow 0.2s;\n}\n.stat-pill:hover {\n  border-color: var(--c-border-2);\n  background: rgba(37, 99, 235, 0.07);\n  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.08);\n}\n.stat-pill strong {\n  font-family: var(--font-display);\n  font-size: 1.6rem;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n  background:\n    linear-gradient(\n      90deg,\n      var(--c-blue),\n      var(--c-cyan));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-pill span {\n  font-size: 0.82rem;\n  color: var(--c-text-3);\n  font-weight: 500;\n}\n.hero-panel {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 26px;\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--c-border);\n  background: rgba(255, 255, 255, 0.82);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 24px rgba(37, 99, 235, 0.07);\n  position: relative;\n  overflow: hidden;\n}\n.hero-showcase {\n  display: grid;\n  gap: 18px;\n  align-items: stretch;\n  padding: 20px;\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--c-border);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.95),\n      rgba(240, 243, 251, 0.95));\n  box-shadow: 0 4px 24px rgba(37, 99, 235, 0.07);\n  position: relative;\n  overflow: hidden;\n}\n.hero-showcase::after {\n  content: "";\n  position: absolute;\n  inset: auto 0 0 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(37, 99, 235, 0.35),\n      rgba(14, 165, 233, 0.5),\n      transparent);\n}\n.showcase-media {\n  position: relative;\n  display: grid;\n  place-items: center;\n}\n.showcase-illustration {\n  width: 100%;\n  max-width: 320px;\n  height: auto;\n  filter: drop-shadow(0 18px 30px rgba(37, 99, 235, 0.12));\n}\n.showcase-badge {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  z-index: 1;\n  padding: 7px 11px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.92);\n  color: var(--c-blue);\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  border: 1px solid var(--c-border);\n}\n.showcase-copy {\n  display: grid;\n  gap: 10px;\n}\n.showcase-copy h2 {\n  font-size: 1.45rem;\n  line-height: 1.15;\n  letter-spacing: -0.03em;\n}\n.showcase-copy p {\n  color: var(--c-text-2);\n  line-height: 1.7;\n}\n.showcase-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.showcase-chips span {\n  padding: 7px 11px;\n  border-radius: 999px;\n  background: rgba(37, 99, 235, 0.06);\n  border: 1px solid var(--c-border);\n  color: var(--c-text-2);\n  font-size: 0.84rem;\n  font-weight: 600;\n}\n.hero-panel::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(14, 165, 233, 0.5),\n      transparent);\n}\n.panel-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.panel-header h2 {\n  margin-top: 5px;\n  font-size: 1.1rem;\n  letter-spacing: -0.02em;\n  color: var(--c-text);\n}\n.live-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 11px;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--c-teal);\n  background: rgba(13, 148, 136, 0.08);\n  border: 1px solid rgba(13, 148, 136, 0.22);\n}\n.live-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--c-teal);\n  animation: pulse 1.8s ease-in-out infinite;\n}\n.ring-wrap {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.progress-ring {\n  position: relative;\n  width: min(100%, 130px);\n  aspect-ratio: 1;\n  flex-shrink: 0;\n}\n.ring-svg {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.ring-track {\n  fill: none;\n  stroke: rgba(37, 99, 235, 0.10);\n  stroke-width: 8;\n}\n.ring-fill {\n  fill: none;\n  stroke: var(--c-blue);\n  stroke-width: 8;\n  stroke-linecap: round;\n  stroke-dasharray: 314;\n  stroke-dashoffset: calc(314 * (1 - 0.87));\n  transition: stroke-dashoffset 1.2s cubic-bezier(.4, 0, .2, 1);\n}\n.ring-core {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.ring-core strong {\n  font-family: var(--font-display);\n  font-size: 1.5rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  color: var(--c-blue);\n}\n.ring-core span {\n  font-size: 0.68rem;\n  color: var(--c-text-3);\n  font-weight: 500;\n}\n.ring-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.legend-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.82rem;\n  color: var(--c-text-2);\n}\n.legend-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.legend-done {\n  background: var(--c-blue);\n}\n.legend-remain {\n  background: rgba(37, 99, 235, 0.15);\n  border: 1px solid var(--c-border);\n}\n.dashboard-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.dashboard-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 14px;\n  border-radius: var(--radius-sm);\n  background: rgba(37, 99, 235, 0.03);\n  border: 1px solid var(--c-border);\n  font-size: 0.84rem;\n  color: var(--c-text-2);\n  transition: background 0.2s, border-color 0.2s;\n}\n.dashboard-row:hover {\n  background: rgba(37, 99, 235, 0.06);\n  border-color: var(--c-border-2);\n}\n.row-icon {\n  font-size: 14px;\n}\n.row-value {\n  margin-left: auto;\n  font-weight: 700;\n  font-size: 0.84rem;\n  color: var(--c-blue);\n}\n.row-ok {\n  color: #16a34a;\n}\n.row-streak {\n  color: #ea580c;\n}\n.section-head {\n  position: relative;\n  z-index: 1;\n  max-width: 700px;\n  padding-top: 64px;\n}\n.section-label-wrap {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.section-line {\n  display: block;\n  width: 32px;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--c-blue),\n      var(--c-cyan));\n  border-radius: 2px;\n}\n.section-head h2 {\n  font-size: clamp(1.7rem, 3vw, 2.6rem);\n  letter-spacing: -0.04em;\n  line-height: 1.1;\n  margin-bottom: 14px;\n  color: var(--c-text);\n}\n.section-head p {\n  color: var(--c-text-2);\n  line-height: 1.8;\n  font-size: 1rem;\n}\n.track-grid {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n  margin-top: 28px;\n}\n.track-card {\n  position: relative;\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--c-border);\n  background: var(--c-surface);\n  overflow: hidden;\n  transition:\n    transform 0.3s,\n    border-color 0.3s,\n    box-shadow 0.3s;\n  box-shadow: 0 2px 12px rgba(37, 99, 235, 0.05);\n}\n.track-card:hover {\n  transform: translateY(-5px);\n  border-color: var(--c-border-2);\n  box-shadow: 0 16px 48px rgba(37, 99, 235, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.track-img {\n  height: 118px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.track-img-beg {\n  background:\n    linear-gradient(\n      135deg,\n      #e0f2fe 0%,\n      #bae6fd 100%);\n  border-bottom: 1px solid rgba(7, 172, 227, 0.15);\n}\n.track-img-int {\n  background:\n    linear-gradient(\n      135deg,\n      #ede9fe 0%,\n      #c4b5fd 100%);\n  border-bottom: 1px solid rgba(124, 58, 237, 0.15);\n}\n.track-img-adv {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #86efac 100%);\n  border-bottom: 1px solid rgba(22, 163, 74, 0.15);\n}\n.track-card-inner {\n  position: relative;\n  z-index: 1;\n  padding: 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  min-height: 180px;\n}\n.track-badge {\n  display: inline-flex;\n  align-items: center;\n  width: fit-content;\n  padding: 4px 12px;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.track-badge-beg {\n  color: #0369a1;\n  background: #e0f2fe;\n  border: 1px solid rgba(3, 105, 161, 0.18);\n}\n.track-badge-int {\n  color: #6d28d9;\n  background: #ede9fe;\n  border: 1px solid rgba(109, 40, 217, 0.18);\n}\n.track-badge-adv {\n  color: #166534;\n  background: #dcfce7;\n  border: 1px solid rgba(22, 101, 52, 0.18);\n}\n.track-card h3 {\n  font-size: 1.08rem;\n  letter-spacing: -0.02em;\n  line-height: 1.3;\n  color: var(--c-text);\n}\n.track-card p {\n  color: var(--c-text-2);\n  font-size: 0.88rem;\n  line-height: 1.7;\n  flex: 1;\n}\n.track-footer {\n  margin-top: auto;\n}\n.track-cta {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--c-blue);\n  text-decoration: none;\n  padding: 7px 0;\n  border-bottom: 1px solid rgba(37, 99, 235, 0.25);\n  transition:\n    gap 0.2s,\n    border-color 0.2s,\n    color 0.2s;\n}\n.track-cta:hover {\n  gap: 10px;\n  border-color: var(--c-blue);\n}\n.feature-layout {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);\n  gap: 18px;\n  margin-top: 18px;\n}\n.feature-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.feature-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 18px;\n  padding: 20px 22px;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--c-border);\n  background: var(--c-surface);\n  box-shadow: 0 1px 8px rgba(37, 99, 235, 0.04);\n  transition:\n    border-color 0.25s,\n    box-shadow 0.25s,\n    transform 0.25s;\n}\n.feature-card:hover {\n  border-color: var(--c-border-2);\n  box-shadow: 0 6px 24px rgba(37, 99, 235, 0.09);\n  transform: translateX(4px);\n}\n.feature-icon-wrap {\n  width: 38px;\n  height: 38px;\n  border-radius: 11px;\n  background: rgba(37, 99, 235, 0.07);\n  border: 1px solid rgba(37, 99, 235, 0.14);\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n}\n.feature-icon {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--c-blue),\n      var(--c-cyan));\n  box-shadow: 0 0 10px rgba(37, 99, 235, 0.5);\n}\n.feature-body h3 {\n  font-size: 1rem;\n  letter-spacing: -0.01em;\n  margin-bottom: 5px;\n  color: var(--c-text);\n}\n.feature-body p {\n  font-size: 0.88rem;\n  color: var(--c-text-2);\n  line-height: 1.7;\n}\n.quote-card {\n  padding: 30px;\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--c-border);\n  background:\n    linear-gradient(\n      160deg,\n      #ffffff 0%,\n      #f0f4ff 100%);\n  box-shadow: 0 4px 24px rgba(37, 99, 235, 0.07);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 20px;\n  position: relative;\n  overflow: hidden;\n}\n.quote-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(14, 165, 233, 0.5),\n      transparent);\n}\n.quote-top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.quote-mark {\n  font-size: 5rem;\n  line-height: 0.7;\n  font-family: Georgia, serif;\n  color: rgba(37, 99, 235, 0.14);\n  font-weight: 900;\n  flex-shrink: 0;\n  margin-top: -8px;\n}\n.quote-card blockquote {\n  font-size: 1.05rem;\n  line-height: 1.8;\n  color: var(--c-text-2);\n  letter-spacing: -0.01em;\n  font-style: italic;\n}\n.quote-footer {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.quote-footer span {\n  padding: 7px 14px;\n  border-radius: 999px;\n  background: rgba(37, 99, 235, 0.07);\n  border: 1px solid rgba(37, 99, 235, 0.14);\n  color: var(--c-blue);\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.reveal-up {\n  animation: revealUp 0.7s cubic-bezier(.22, 1, .36, 1) both;\n}\n.reveal-down {\n  animation: revealDown 0.7s cubic-bezier(.22, 1, .36, 1) both;\n}\n.delay-1 {\n  animation-delay: 0.10s;\n}\n.delay-2 {\n  animation-delay: 0.20s;\n}\n.delay-3 {\n  animation-delay: 0.32s;\n}\n@keyframes revealUp {\n  from {\n    opacity: 0;\n    transform: translateY(28px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes revealDown {\n  from {\n    opacity: 0;\n    transform: translateY(-16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(0.85);\n  }\n}\n@keyframes driftA {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(20px, 30px) scale(1.05);\n  }\n}\n@keyframes driftB {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(-22px, -18px) scale(1.04);\n  }\n}\n@media (max-width: 1100px) {\n  .hero,\n  .feature-layout {\n    grid-template-columns: 1fr;\n  }\n  .track-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .hero {\n    padding: 36px;\n  }\n}\n@media (max-width: 768px) {\n  .home-page {\n    padding: 14px 14px 56px;\n  }\n  .topbar {\n    position: static;\n    padding: 12px 14px;\n    flex-wrap: wrap;\n    border-radius: var(--radius-lg);\n  }\n  .topbar-nav {\n    order: 3;\n    width: 100%;\n    justify-content: center;\n    padding-top: 6px;\n    border-top: 1px solid var(--c-border);\n    margin-top: 4px;\n    margin-left: 0;\n  }\n  .topbar-actions {\n    margin-left: auto;\n  }\n  .track-grid {\n    grid-template-columns: 1fr;\n  }\n  h1 {\n    font-size: 2.4rem;\n  }\n  .stats {\n    grid-template-columns: 1fr;\n  }\n  .hero {\n    padding: 24px 20px;\n  }\n  .actions {\n    flex-direction: column;\n  }\n  .primary-action,\n  .secondary-action {\n    width: 100%;\n    justify-content: center;\n  }\n  .user-menu-list {\n    position: static;\n    margin-top: 6px;\n  }\n  .ring-wrap {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n@media (max-width: 480px) {\n  .topbar-actions {\n    flex-wrap: wrap;\n    width: 100%;\n  }\n  .nav-button {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=home-page.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePage, { className: "HomePage", filePath: "app/base/home-page/home-page.ts", lineNumber: 22 });
})();

// src/app/guards/auth.guard.ts
var authGuard = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isLoggedIn()) {
    return true;
  }
  return router.createUrlTree(["/login"], { queryParams: { returnUrl: state.url } });
};

// src/app/guards/teacher.guard.ts
var teacherGuard = (_route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (!authService.isLoggedIn()) {
    return router.createUrlTree(["/login"], { queryParams: { returnUrl: state.url } });
  }
  const currentUser = authService.getCurrentUser();
  if (currentUser?.role === 1) {
    return true;
  }
  return router.createUrlTree(["/homepage"]);
};

// src/app/base/profile/profile.ts
function Profile_Conditional_16_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 47);
    \u0275\u0275text(1, "Teacher");
    \u0275\u0275elementEnd();
  }
}
function Profile_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "details", 40)(1, "summary", 41)(2, "span", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 44);
    \u0275\u0275text(7, "\u25BE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 45)(9, "a", 46);
    \u0275\u0275text(10, "Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, Profile_Conditional_16_Conditional_11_Template, 2, 0, "a", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 48);
    \u0275\u0275listener("click", function Profile_Conditional_16_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(13, "Logout");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.userInitial());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Hi, ", ctx_r1.userName());
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.isTeacher() ? 11 : -1);
  }
}
function Profile_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 49);
    \u0275\u0275text(1, "Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 50);
    \u0275\u0275text(3, "Register");
    \u0275\u0275elementEnd();
  }
}
function Profile_For_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(action_r3);
  }
}
var Profile = class _Profile {
  authService = inject(AuthService);
  router = inject(Router);
  user = signal(null, ...ngDevMode ? [{ debugName: "user" }] : (
    /* istanbul ignore next */
    []
  ));
  quickActions = [
    "My Classes",
    "My Courses",
    "Assignments",
    "Certificates"
  ];
  userName = computed(() => this.user()?.fullName || "Student", ...ngDevMode ? [{ debugName: "userName" }] : (
    /* istanbul ignore next */
    []
  ));
  userEmail = computed(() => this.user()?.email || "No email found", ...ngDevMode ? [{ debugName: "userEmail" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoggedIn = computed(() => !!this.user(), ...ngDevMode ? [{ debugName: "isLoggedIn" }] : (
    /* istanbul ignore next */
    []
  ));
  isTeacher = computed(() => this.user()?.role === 1, ...ngDevMode ? [{ debugName: "isTeacher" }] : (
    /* istanbul ignore next */
    []
  ));
  userInitial = computed(() => this.userName().charAt(0).toUpperCase(), ...ngDevMode ? [{ debugName: "userInitial" }] : (
    /* istanbul ignore next */
    []
  ));
  userRole = computed(() => {
    const role = this.user()?.role;
    return role === 1 ? "Instructor" : "Student";
  }, ...ngDevMode ? [{ debugName: "userRole" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.authService.currentUser$.pipe(takeUntilDestroyed()).subscribe((currentUser2) => {
      this.user.set(currentUser2);
    });
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.user.set(currentUser);
    }
  }
  goToHome() {
    this.router.navigateByUrl("/homepage");
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
  static \u0275fac = function Profile_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Profile)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Profile, selectors: [["app-profile"]], decls: 95, vars: 5, consts: [[1, "profile-page"], [1, "topbar", "card-surface", "reveal-up"], ["routerLink", "/homepage", "aria-label", "Learning platform home", 1, "brand"], [1, "brand-mark"], [1, "brand-text"], ["aria-label", "Primary navigation", 1, "topbar-nav"], ["href", "#tracks"], ["href", "#platform-identity"], [1, "topbar-actions"], [1, "profile-shell"], [1, "profile-head"], ["type", "button", 1, "back-link", 3, "click"], ["aria-label", "User profile details", 1, "info-card"], ["aria-hidden", "true", 1, "avatar"], [1, "user-info"], [1, "role-badge"], ["aria-label", "Learning dashboard preview", 1, "hero-panel", "profile-panel", "reveal-up"], [1, "panel-header"], [1, "panel-label"], [1, "live-badge"], ["aria-hidden", "true", 1, "live-dot"], [1, "ring-wrap"], ["role", "img", "aria-label", "87% weekly completion", 1, "progress-ring"], ["viewBox", "0 0 120 120", 1, "ring-svg"], ["cx", "60", "cy", "60", "r", "50", 1, "ring-track"], ["cx", "60", "cy", "60", "r", "50", 1, "ring-fill"], [1, "ring-core"], [1, "ring-legend"], [1, "legend-item"], ["aria-hidden", "true", 1, "legend-dot", "legend-done"], ["aria-hidden", "true", 1, "legend-dot", "legend-remain"], [1, "dashboard-list"], [1, "dashboard-row"], ["aria-hidden", "true", 1, "row-icon"], [1, "row-value", "row-ok"], [1, "row-value"], [1, "row-value", "row-streak"], ["aria-label", "Future learning features", 1, "future-card"], [1, "action-grid"], ["type", "button", 1, "future-btn"], [1, "user-menu"], ["aria-label", "Logged in user menu", 1, "user-chip"], [1, "user-avatar"], [1, "user-name"], ["aria-hidden", "true", 1, "menu-caret"], ["role", "menu", 1, "user-menu-list"], ["routerLink", "/profile", "role", "menuitem", 1, "user-menu-link"], ["routerLink", "/teacher", "role", "menuitem", 1, "user-menu-link"], ["type", "button", 1, "nav-button", "nav-button-ghost", 3, "click"], ["routerLink", "/login", 1, "nav-button", "nav-button-ghost"], ["routerLink", "/register", 1, "nav-button", "nav-button-primary"]], template: function Profile_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "header", 1)(2, "a", 2)(3, "span", 3);
      \u0275\u0275text(4, "LT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4)(6, "strong");
      \u0275\u0275text(7, "LearningTandS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "small");
      \u0275\u0275text(9, "Touch And Solve Learning");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "nav", 5)(11, "a", 6);
      \u0275\u0275text(12, "Tracks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 7);
      \u0275\u0275text(14, "Vision");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 8);
      \u0275\u0275conditionalCreate(16, Profile_Conditional_16_Template, 14, 3)(17, Profile_Conditional_17_Template, 4, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "section", 9)(19, "header", 10)(20, "button", 11);
      \u0275\u0275listener("click", function Profile_Template_button_click_20_listener() {
        return ctx.goToHome();
      });
      \u0275\u0275text(21, "Back to home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "h1");
      \u0275\u0275text(23, "My Profile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p");
      \u0275\u0275text(25, "Your account details and upcoming learning tools.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "section", 12)(27, "div", 13);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 14)(30, "h2");
      \u0275\u0275text(31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p");
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 15);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "aside", 16)(37, "div", 17)(38, "div")(39, "p", 18);
      \u0275\u0275text(40, "Student dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "h2");
      \u0275\u0275text(42, "Weekly performance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "span", 19);
      \u0275\u0275element(44, "span", 20);
      \u0275\u0275text(45, " Live ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 21)(47, "div", 22);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(48, "svg", 23);
      \u0275\u0275element(49, "circle", 24)(50, "circle", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(51, "div", 26)(52, "strong");
      \u0275\u0275text(53, "87%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "span");
      \u0275\u0275text(55, "completion");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(56, "div", 27)(57, "div", 28);
      \u0275\u0275element(58, "span", 29);
      \u0275\u0275elementStart(59, "span");
      \u0275\u0275text(60, "Completed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 28);
      \u0275\u0275element(62, "span", 30);
      \u0275\u0275elementStart(63, "span");
      \u0275\u0275text(64, "Remaining");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(65, "div", 31)(66, "div", 32)(67, "span", 33);
      \u0275\u0275text(68, "\u{1F4D0}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "span");
      \u0275\u0275text(70, "Angular assessments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "strong", 34);
      \u0275\u0275text(72, "Completed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 32)(74, "span", 33);
      \u0275\u0275text(75, "\u23F1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "span");
      \u0275\u0275text(77, "Coding time this week");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "strong", 35);
      \u0275\u0275text(79, "6.8 hrs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "div", 32)(81, "span", 33);
      \u0275\u0275text(82, "\u{1F525}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "span");
      \u0275\u0275text(84, "Consistency streak");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "strong", 36);
      \u0275\u0275text(86, "21 days");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(87, "section", 37)(88, "h3");
      \u0275\u0275text(89, "Coming Soon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "p");
      \u0275\u0275text(91, "These options will be activated in future updates.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div", 38);
      \u0275\u0275repeaterCreate(93, Profile_For_94_Template, 2, 1, "button", 39, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275conditional(ctx.isLoggedIn() ? 16 : 17);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.userName().charAt(0).toUpperCase());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.userName());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.userEmail());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Role: ", ctx.userRole());
      \u0275\u0275advance(58);
      \u0275\u0275repeater(ctx.quickActions);
    }
  }, dependencies: [RouterLink], styles: ["\n.profile-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 24px;\n  background:\n    radial-gradient(\n      circle at 10% 0%,\n      rgba(37, 99, 235, 0.14),\n      transparent 44%),\n    radial-gradient(\n      circle at 90% 20%,\n      rgba(14, 165, 233, 0.12),\n      transparent 40%),\n    linear-gradient(\n      180deg,\n      #f7f8fc,\n      #eef2fb);\n  color: #111827;\n}\n.profile-shell[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n  display: grid;\n  gap: 18px;\n}\n.hero-panel[_ngcontent-%COMP%] {\n  padding: 22px;\n  border-radius: 20px;\n  border: 1px solid rgba(37, 99, 235, 0.12);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.96),\n      rgba(247, 248, 252, 0.94));\n  box-shadow: 0 10px 28px rgba(37, 99, 235, 0.08);\n}\n.profile-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 24px;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 1.1rem;\n  letter-spacing: -0.02em;\n  color: #111827;\n}\n.panel-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: #2563eb;\n}\n.live-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 11px;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #0f766e;\n  background: rgba(13, 148, 136, 0.08);\n  border: 1px solid rgba(13, 148, 136, 0.22);\n}\n.live-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #0f766e;\n}\n.ring-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.progress-ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(100%, 130px);\n  aspect-ratio: 1;\n  flex-shrink: 0;\n}\n.ring-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.ring-track[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: rgba(37, 99, 235, 0.10);\n  stroke-width: 8;\n}\n.ring-fill[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #2563eb;\n  stroke-width: 8;\n  stroke-linecap: round;\n  stroke-dasharray: 314;\n  stroke-dashoffset: calc(314 * (1 - 0.87));\n}\n.ring-core[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.ring-core[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  font-weight: 800;\n  color: #111827;\n}\n.ring-core[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: rgba(17, 24, 39, 0.62);\n}\n.ring-legend[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.88rem;\n  color: rgba(17, 24, 39, 0.68);\n}\n.legend-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.legend-done[_ngcontent-%COMP%] {\n  background: #2563eb;\n}\n.legend-remain[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.18);\n}\n.dashboard-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  padding-top: 4px;\n}\n.dashboard-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border-radius: 14px;\n  background: rgba(37, 99, 235, 0.04);\n  border: 1px solid rgba(37, 99, 235, 0.1);\n}\n.row-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, 0.08);\n}\n.row-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #111827;\n  white-space: nowrap;\n}\n.row-ok[_ngcontent-%COMP%] {\n  color: #0f766e;\n}\n.row-streak[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 12px;\n  z-index: 50;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 18px;\n  margin: 0 auto 28px;\n  max-width: 960px;\n  border-radius: 32px;\n  border: 1px solid rgba(37, 99, 235, 0.1);\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  box-shadow: 0 2px 24px rgba(37, 99, 235, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 11px;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #0ea5e9 100%);\n  color: #ffffff;\n  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.14);\n  font-weight: 700;\n}\n.brand-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.brand-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #111827;\n}\n.brand-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: rgba(17, 24, 39, 0.4);\n  font-weight: 400;\n}\n.topbar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: auto;\n}\n.topbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border-radius: 999px;\n  text-decoration: none;\n  font-size: 0.88rem;\n  font-weight: 500;\n  color: rgba(17, 24, 39, 0.65);\n  transition: background 0.2s ease, color 0.2s ease;\n}\n.topbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.07);\n  color: #2563eb;\n}\n.topbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.user-menu[_ngcontent-%COMP%] {\n  position: relative;\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  padding: 5px 12px 5px 5px;\n  border-radius: 999px;\n  border: 1px solid rgba(37, 99, 235, 0.1);\n  background: rgba(37, 99, 235, 0.04);\n  color: rgba(17, 24, 39, 0.65);\n  font-size: 0.88rem;\n  font-weight: 500;\n  list-style: none;\n}\n.user-menu[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.user-menu[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]::-webkit-details-marker {\n  display: none;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #0ea5e9);\n  color: #ffffff;\n  font-size: 0.76rem;\n  font-weight: 700;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #111827;\n}\n.menu-caret[_ngcontent-%COMP%] {\n  color: rgba(17, 24, 39, 0.5);\n}\n.user-menu-list[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  min-width: 180px;\n  padding: 6px;\n  border-radius: 16px;\n  border: 1px solid rgba(37, 99, 235, 0.1);\n  background: rgba(255, 255, 255, 0.98);\n  box-shadow: 0 16px 40px rgba(37, 99, 235, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06);\n  z-index: 60;\n}\n.user-menu-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-radius: 10px;\n  text-decoration: none;\n  font-size: 0.88rem;\n  font-weight: 500;\n  color: rgba(17, 24, 39, 0.65);\n  transition: background 0.15s ease, color 0.15s ease;\n}\n.user-menu-link[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.07);\n  color: #2563eb;\n}\n.nav-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  min-height: 38px;\n  padding: 0 16px;\n  border-radius: 999px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  text-decoration: none;\n  border: 1px solid transparent;\n  cursor: pointer;\n  transition:\n    transform 0.2s ease,\n    background 0.2s ease,\n    border-color 0.2s ease;\n}\n.nav-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.nav-button-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: rgba(37, 99, 235, 0.1);\n  color: rgba(17, 24, 39, 0.65);\n}\n.nav-button-ghost[_ngcontent-%COMP%]:hover {\n  border-color: rgba(37, 99, 235, 0.22);\n  color: #2563eb;\n  background: rgba(37, 99, 235, 0.05);\n}\n.nav-button-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #3b82f6 100%);\n  border-color: rgba(37, 99, 235, 0.3);\n  color: #ffffff;\n  box-shadow: 0 4px 18px rgba(37, 99, 235, 0.14);\n}\n.nav-button-primary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 24px rgba(37, 99, 235, 0.28);\n}\n.profile-head[_ngcontent-%COMP%], \n.info-card[_ngcontent-%COMP%], \n.future-card[_ngcontent-%COMP%] {\n  padding: 22px;\n  border-radius: 20px;\n  border: 1px solid rgba(37, 99, 235, 0.12);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.96),\n      rgba(247, 248, 252, 0.94));\n  box-shadow: 0 10px 28px rgba(37, 99, 235, 0.08);\n}\n.profile-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.profile-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.user-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.future-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.future-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.profile-head[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n.back-link[_ngcontent-%COMP%] {\n  width: fit-content;\n  text-decoration: none;\n  padding: 8px 12px;\n  border-radius: 999px;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #1d4ed8;\n  border: 1px solid rgba(37, 99, 235, 0.2);\n  background: rgba(37, 99, 235, 0.05);\n}\n.profile-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.future-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(17, 24, 39, 0.68);\n  line-height: 1.65;\n}\n.info-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  gap: 16px;\n}\n.avatar[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 74px;\n  height: 74px;\n  border-radius: 50%;\n  font-size: 1.55rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #0ea5e9);\n  color: #ffffff;\n  box-shadow: 0 10px 22px rgba(37, 99, 235, 0.24);\n}\n.user-info[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n}\n.role-badge[_ngcontent-%COMP%] {\n  width: fit-content;\n  padding: 8px 12px;\n  border-radius: 999px;\n  font-size: 0.83rem;\n  font-weight: 700;\n  color: #1d4ed8;\n  background: rgba(37, 99, 235, 0.08);\n  border: 1px solid rgba(37, 99, 235, 0.16);\n}\n.future-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n.action-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n}\n.future-btn[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 0 14px;\n  border-radius: 12px;\n  border: 1px solid rgba(37, 99, 235, 0.2);\n  background: rgba(37, 99, 235, 0.04);\n  color: #1f2937;\n  font-size: 0.95rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: transform 0.2s ease, background 0.2s ease;\n}\n.future-btn[_ngcontent-%COMP%]:hover, \n.future-btn[_ngcontent-%COMP%]:focus-visible {\n  transform: translateY(-1px);\n  background: rgba(37, 99, 235, 0.12);\n  outline: none;\n}\n@media (max-width: 720px) {\n  .profile-page[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .panel-header[_ngcontent-%COMP%], \n   .ring-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .dashboard-row[_ngcontent-%COMP%] {\n    justify-items: start;\n  }\n  .topbar[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 10px;\n    padding: 10px 12px;\n    border-radius: 20px;\n  }\n  .topbar-nav[_ngcontent-%COMP%] {\n    order: 3;\n    width: 100%;\n    margin-left: 0;\n    overflow-x: auto;\n  }\n  .info-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n  .avatar[_ngcontent-%COMP%], \n   .role-badge[_ngcontent-%COMP%] {\n    margin-inline: auto;\n  }\n  .action-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=profile.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Profile, [{
    type: Component,
    args: [{ selector: "app-profile", imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: '<main class="profile-page">\n	<header class="topbar card-surface reveal-up">\n		<a class="brand" routerLink="/homepage" aria-label="Learning platform home">\n			<span class="brand-mark">LT</span>\n			<span class="brand-text">\n				<strong>LearningTandS</strong>\n				<small>Touch And Solve Learning</small>\n			</span>\n		</a>\n\n		<nav class="topbar-nav" aria-label="Primary navigation">\n			<a href="#tracks">Tracks</a>\n			<a href="#platform-identity">Vision</a>\n		</nav>\n\n		<div class="topbar-actions">\n			@if (isLoggedIn()) {\n				<details class="user-menu">\n					<summary class="user-chip" aria-label="Logged in user menu">\n						<span class="user-avatar">{{ userInitial() }}</span>\n						<span class="user-name">Hi, {{ userName() }}</span>\n						<span class="menu-caret" aria-hidden="true">\u25BE</span>\n					</summary>\n					<div class="user-menu-list" role="menu">\n						<a routerLink="/profile" class="user-menu-link" role="menuitem">Profile</a>\n						@if (isTeacher()) {\n							<a routerLink="/teacher" class="user-menu-link" role="menuitem">Teacher</a>\n						}\n					</div>\n				</details>\n				<button type="button" class="nav-button nav-button-ghost" (click)="logout()">Logout</button>\n			} @else {\n				<a routerLink="/login" class="nav-button nav-button-ghost">Login</a>\n				<a routerLink="/register" class="nav-button nav-button-primary">Register</a>\n			}\n		</div>\n	</header>\n	<section class="profile-shell">\n		<header class="profile-head">\n			<button type="button" class="back-link" (click)="goToHome()">Back to home</button>\n			<h1>My Profile</h1>\n			<p>Your account details and upcoming learning tools.</p>\n		</header>\n		<section class="info-card" aria-label="User profile details">\n			<div class="avatar" aria-hidden="true">{{ userName().charAt(0).toUpperCase() }}</div>\n			<div class="user-info">\n				<h2>{{ userName() }}</h2>\n				<p>{{ userEmail() }}</p>\n				<span class="role-badge">Role: {{ userRole() }}</span>\n			</div>\n		</section>\n\n		<aside class="hero-panel profile-panel reveal-up" aria-label="Learning dashboard preview">\n			<div class="panel-header">\n				<div>\n					<p class="panel-label">Student dashboard</p>\n					<h2>Weekly performance</h2>\n				</div>\n				<span class="live-badge">\n					<span class="live-dot" aria-hidden="true"></span>\n					Live\n				</span>\n			</div>\n\n			<div class="ring-wrap">\n				<div class="progress-ring" role="img" aria-label="87% weekly completion">\n					<svg class="ring-svg" viewBox="0 0 120 120">\n						<circle cx="60" cy="60" r="50" class="ring-track" />\n						<circle cx="60" cy="60" r="50" class="ring-fill" />\n					</svg>\n					<div class="ring-core">\n						<strong>87%</strong>\n						<span>completion</span>\n					</div>\n				</div>\n\n				<div class="ring-legend">\n					<div class="legend-item">\n						<span class="legend-dot legend-done" aria-hidden="true"></span>\n						<span>Completed</span>\n					</div>\n					<div class="legend-item">\n						<span class="legend-dot legend-remain" aria-hidden="true"></span>\n						<span>Remaining</span>\n					</div>\n				</div>\n			</div>\n\n			<div class="dashboard-list">\n				<div class="dashboard-row">\n					<span class="row-icon" aria-hidden="true">\u{1F4D0}</span>\n					<span>Angular assessments</span>\n					<strong class="row-value row-ok">Completed</strong>\n				</div>\n				<div class="dashboard-row">\n					<span class="row-icon" aria-hidden="true">\u23F1</span>\n					<span>Coding time this week</span>\n					<strong class="row-value">6.8 hrs</strong>\n				</div>\n				<div class="dashboard-row">\n					<span class="row-icon" aria-hidden="true">\u{1F525}</span>\n					<span>Consistency streak</span>\n					<strong class="row-value row-streak">21 days</strong>\n				</div>\n			</div>\n		</aside>\n\n\n		<section class="future-card" aria-label="Future learning features">\n			<h3>Coming Soon</h3>\n			<p>These options will be activated in future updates.</p>\n\n			<div class="action-grid">\n				@for (action of quickActions; track action) {\n					<button type="button" class="future-btn">{{ action }}</button>\n				}\n			</div>\n		</section>\n	</section>\n</main>\n', styles: ["/* src/app/base/profile/profile.css */\n.profile-page {\n  min-height: 100vh;\n  padding: 24px;\n  background:\n    radial-gradient(\n      circle at 10% 0%,\n      rgba(37, 99, 235, 0.14),\n      transparent 44%),\n    radial-gradient(\n      circle at 90% 20%,\n      rgba(14, 165, 233, 0.12),\n      transparent 40%),\n    linear-gradient(\n      180deg,\n      #f7f8fc,\n      #eef2fb);\n  color: #111827;\n}\n.profile-shell {\n  max-width: 960px;\n  margin: 0 auto;\n  display: grid;\n  gap: 18px;\n}\n.hero-panel {\n  padding: 22px;\n  border-radius: 20px;\n  border: 1px solid rgba(37, 99, 235, 0.12);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.96),\n      rgba(247, 248, 252, 0.94));\n  box-shadow: 0 10px 28px rgba(37, 99, 235, 0.08);\n}\n.profile-panel {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 24px;\n}\n.panel-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.panel-header h2 {\n  margin-top: 5px;\n  font-size: 1.1rem;\n  letter-spacing: -0.02em;\n  color: #111827;\n}\n.panel-label {\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: #2563eb;\n}\n.live-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 11px;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #0f766e;\n  background: rgba(13, 148, 136, 0.08);\n  border: 1px solid rgba(13, 148, 136, 0.22);\n}\n.live-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #0f766e;\n}\n.ring-wrap {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.progress-ring {\n  position: relative;\n  width: min(100%, 130px);\n  aspect-ratio: 1;\n  flex-shrink: 0;\n}\n.ring-svg {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.ring-track {\n  fill: none;\n  stroke: rgba(37, 99, 235, 0.10);\n  stroke-width: 8;\n}\n.ring-fill {\n  fill: none;\n  stroke: #2563eb;\n  stroke-width: 8;\n  stroke-linecap: round;\n  stroke-dasharray: 314;\n  stroke-dashoffset: calc(314 * (1 - 0.87));\n}\n.ring-core {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.ring-core strong {\n  font-size: 1.7rem;\n  font-weight: 800;\n  color: #111827;\n}\n.ring-core span {\n  font-size: 0.82rem;\n  color: rgba(17, 24, 39, 0.62);\n}\n.ring-legend {\n  display: grid;\n  gap: 8px;\n}\n.legend-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.88rem;\n  color: rgba(17, 24, 39, 0.68);\n}\n.legend-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.legend-done {\n  background: #2563eb;\n}\n.legend-remain {\n  background: rgba(37, 99, 235, 0.18);\n}\n.dashboard-list {\n  display: grid;\n  gap: 10px;\n  padding-top: 4px;\n}\n.dashboard-row {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border-radius: 14px;\n  background: rgba(37, 99, 235, 0.04);\n  border: 1px solid rgba(37, 99, 235, 0.1);\n}\n.row-icon {\n  display: grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, 0.08);\n}\n.row-value {\n  font-weight: 700;\n  color: #111827;\n  white-space: nowrap;\n}\n.row-ok {\n  color: #0f766e;\n}\n.row-streak {\n  color: #2563eb;\n}\n.topbar {\n  position: sticky;\n  top: 12px;\n  z-index: 50;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 18px;\n  margin: 0 auto 28px;\n  max-width: 960px;\n  border-radius: 32px;\n  border: 1px solid rgba(37, 99, 235, 0.1);\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  box-shadow: 0 2px 24px rgba(37, 99, 235, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 11px;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.brand-mark {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #0ea5e9 100%);\n  color: #ffffff;\n  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.14);\n  font-weight: 700;\n}\n.brand-text {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.brand-text strong {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #111827;\n}\n.brand-text small {\n  font-size: 0.74rem;\n  color: rgba(17, 24, 39, 0.4);\n  font-weight: 400;\n}\n.topbar-nav {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: auto;\n}\n.topbar-nav a {\n  padding: 7px 14px;\n  border-radius: 999px;\n  text-decoration: none;\n  font-size: 0.88rem;\n  font-weight: 500;\n  color: rgba(17, 24, 39, 0.65);\n  transition: background 0.2s ease, color 0.2s ease;\n}\n.topbar-nav a:hover {\n  background: rgba(37, 99, 235, 0.07);\n  color: #2563eb;\n}\n.topbar-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.user-menu {\n  position: relative;\n}\n.user-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  padding: 5px 12px 5px 5px;\n  border-radius: 999px;\n  border: 1px solid rgba(37, 99, 235, 0.1);\n  background: rgba(37, 99, 235, 0.04);\n  color: rgba(17, 24, 39, 0.65);\n  font-size: 0.88rem;\n  font-weight: 500;\n  list-style: none;\n}\n.user-menu summary {\n  list-style: none;\n}\n.user-menu summary::-webkit-details-marker {\n  display: none;\n}\n.user-avatar {\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #0ea5e9);\n  color: #ffffff;\n  font-size: 0.76rem;\n  font-weight: 700;\n}\n.user-name {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #111827;\n}\n.menu-caret {\n  color: rgba(17, 24, 39, 0.5);\n}\n.user-menu-list {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  min-width: 180px;\n  padding: 6px;\n  border-radius: 16px;\n  border: 1px solid rgba(37, 99, 235, 0.1);\n  background: rgba(255, 255, 255, 0.98);\n  box-shadow: 0 16px 40px rgba(37, 99, 235, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06);\n  z-index: 60;\n}\n.user-menu-link {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-radius: 10px;\n  text-decoration: none;\n  font-size: 0.88rem;\n  font-weight: 500;\n  color: rgba(17, 24, 39, 0.65);\n  transition: background 0.15s ease, color 0.15s ease;\n}\n.user-menu-link:hover {\n  background: rgba(37, 99, 235, 0.07);\n  color: #2563eb;\n}\n.nav-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  min-height: 38px;\n  padding: 0 16px;\n  border-radius: 999px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  text-decoration: none;\n  border: 1px solid transparent;\n  cursor: pointer;\n  transition:\n    transform 0.2s ease,\n    background 0.2s ease,\n    border-color 0.2s ease;\n}\n.nav-button:hover {\n  transform: translateY(-1px);\n}\n.nav-button-ghost {\n  background: transparent;\n  border-color: rgba(37, 99, 235, 0.1);\n  color: rgba(17, 24, 39, 0.65);\n}\n.nav-button-ghost:hover {\n  border-color: rgba(37, 99, 235, 0.22);\n  color: #2563eb;\n  background: rgba(37, 99, 235, 0.05);\n}\n.nav-button-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #3b82f6 100%);\n  border-color: rgba(37, 99, 235, 0.3);\n  color: #ffffff;\n  box-shadow: 0 4px 18px rgba(37, 99, 235, 0.14);\n}\n.nav-button-primary:hover {\n  box-shadow: 0 6px 24px rgba(37, 99, 235, 0.28);\n}\n.profile-head,\n.info-card,\n.future-card {\n  padding: 22px;\n  border-radius: 20px;\n  border: 1px solid rgba(37, 99, 235, 0.12);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.96),\n      rgba(247, 248, 252, 0.94));\n  box-shadow: 0 10px 28px rgba(37, 99, 235, 0.08);\n}\n.profile-head h1,\n.profile-head p,\n.user-info h2,\n.user-info p,\n.future-card h3,\n.future-card p {\n  margin: 0;\n}\n.profile-head {\n  display: grid;\n  gap: 10px;\n}\n.back-link {\n  width: fit-content;\n  text-decoration: none;\n  padding: 8px 12px;\n  border-radius: 999px;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #1d4ed8;\n  border: 1px solid rgba(37, 99, 235, 0.2);\n  background: rgba(37, 99, 235, 0.05);\n}\n.profile-head p,\n.user-info p,\n.future-card p {\n  color: rgba(17, 24, 39, 0.68);\n  line-height: 1.65;\n}\n.info-card {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  gap: 16px;\n}\n.avatar {\n  display: grid;\n  place-items: center;\n  width: 74px;\n  height: 74px;\n  border-radius: 50%;\n  font-size: 1.55rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #0ea5e9);\n  color: #ffffff;\n  box-shadow: 0 10px 22px rgba(37, 99, 235, 0.24);\n}\n.user-info {\n  display: grid;\n  gap: 6px;\n}\n.role-badge {\n  width: fit-content;\n  padding: 8px 12px;\n  border-radius: 999px;\n  font-size: 0.83rem;\n  font-weight: 700;\n  color: #1d4ed8;\n  background: rgba(37, 99, 235, 0.08);\n  border: 1px solid rgba(37, 99, 235, 0.16);\n}\n.future-card {\n  display: grid;\n  gap: 14px;\n}\n.action-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n}\n.future-btn {\n  min-height: 44px;\n  padding: 0 14px;\n  border-radius: 12px;\n  border: 1px solid rgba(37, 99, 235, 0.2);\n  background: rgba(37, 99, 235, 0.04);\n  color: #1f2937;\n  font-size: 0.95rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: transform 0.2s ease, background 0.2s ease;\n}\n.future-btn:hover,\n.future-btn:focus-visible {\n  transform: translateY(-1px);\n  background: rgba(37, 99, 235, 0.12);\n  outline: none;\n}\n@media (max-width: 720px) {\n  .profile-page {\n    padding: 16px;\n  }\n  .panel-header,\n  .ring-wrap {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .dashboard-row {\n    justify-items: start;\n  }\n  .topbar {\n    flex-wrap: wrap;\n    gap: 10px;\n    padding: 10px 12px;\n    border-radius: 20px;\n  }\n  .topbar-nav {\n    order: 3;\n    width: 100%;\n    margin-left: 0;\n    overflow-x: auto;\n  }\n  .info-card {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n  .avatar,\n  .role-badge {\n    margin-inline: auto;\n  }\n  .action-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=profile.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Profile, { className: "Profile", filePath: "app/base/profile/profile.ts", lineNumber: 20 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "homepage", pathMatch: "full" },
  { path: "login", component: Login },
  { path: "register", component: Register },
  { path: "homepage", component: HomePage },
  { path: "profile", component: Profile, canActivate: [authGuard] },
  {
    path: "teacher",
    loadComponent: () => import("./chunk-QSGUOG2B.js").then((m) => m.Teacher),
    canActivate: [authGuard, teacherGuard]
  },
  { path: "**", redirectTo: "homepage" }
];

// src/app/Service/jwt.interceptor.ts
var JwtInterceptor = class _JwtInterceptor {
  jwtService = inject(JwtService);
  intercept(request, next) {
    const token = this.jwtService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
  static \u0275fac = function JwtInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JwtInterceptor)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JwtInterceptor, factory: _JwtInterceptor.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JwtInterceptor, [{
    type: Injectable
  }], null, null);
})();

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    provideRouter(routes)
  ]
};

// src/app/app.ts
var App = class _App {
  title = signal("learningTandS", ...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=app.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet], template: "<router-outlet />", styles: ["/* src/app/app.css */\n:host {\n  display: block;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=app.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "app/app.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
