import {
  ANIMATION_MODULE_TYPE,
  ActivatedRoute,
  ApplicationRef,
  AuthService,
  BrowserModule,
  ChangeDetectionStrategy,
  CheckboxControlValueAccessor,
  CommonModule,
  Component,
  DOCUMENT,
  DecimalPipe,
  DefaultValueAccessor,
  Directive,
  DomRendererFactory2,
  DomSanitizer,
  ElementRef,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  JwtService,
  LearningApiService,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModule,
  NgSelectOption,
  NgZone,
  ReactiveFormsModule,
  RendererFactory2,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  RuntimeError,
  SecurityContext,
  SelectControlValueAccessor,
  Service,
  Subject,
  Validators,
  ViewChild,
  __objRest,
  __spreadProps,
  __spreadValues,
  bootstrapApplication,
  computed,
  createComponent,
  firstValueFrom,
  inject,
  linkedSignal,
  makeEnvironmentProviders,
  performanceMarkFeature,
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
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵanimateEnter,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementContainerEnd,
  ɵɵdomElementContainerStart,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-6ZRBP5NL.js";

// node_modules/ngx-toastr/fesm2022/ngx-toastr.mjs
var _c0 = ["toast-component", ""];
function ToastBase_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 2);
    \u0275\u0275domListener("click", function ToastBase_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove());
    });
    \u0275\u0275domElementStart(1, "span", 3);
    \u0275\u0275text(2, "\xD7");
    \u0275\u0275domElementEnd()();
  }
}
function ToastBase_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275domElementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("[", ctx_r1.duplicatesCount + 1, "]");
  }
}
function ToastBase_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, ToastBase_Conditional_2_Conditional_2_Template, 2, 1, "ng-container");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const _options_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275classMap(_options_r3.titleClass);
    \u0275\u0275attribute("aria-label", ctx_r1.title());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.title(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.duplicatesCount ? 2 : -1);
  }
}
function ToastBase_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const _options_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275classMap(_options_r3.messageClass);
    \u0275\u0275domProperty("innerHTML", ctx_r1.message(), \u0275\u0275sanitizeHtml);
  }
}
function ToastBase_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const _options_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275classMap(_options_r3.messageClass);
    \u0275\u0275attribute("aria-label", ctx_r1.message());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.message(), " ");
  }
}
function ToastBase_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ToastBase_Conditional_3_Conditional_0_Template, 1, 3, "div", 4)(1, ToastBase_Conditional_3_Conditional_1_Template, 2, 4, "div", 5);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const _options_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275conditional(_options_r3.enableHtml ? 0 : 1);
  }
}
function ToastBase_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div");
    \u0275\u0275domElement(1, "div", 8);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r1.width() + "%");
  }
}
function Toast_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 2);
    \u0275\u0275domListener("click", function Toast_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove());
    });
    \u0275\u0275domElementStart(1, "span", 3);
    \u0275\u0275text(2, "\xD7");
    \u0275\u0275domElementEnd()();
  }
}
function Toast_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275domElementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("[", ctx_r1.duplicatesCount + 1, "]");
  }
}
function Toast_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, Toast_Conditional_2_Conditional_2_Template, 2, 1, "ng-container");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const _options_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275classMap(_options_r3.titleClass);
    \u0275\u0275attribute("aria-label", ctx_r1.title());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.title(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.duplicatesCount ? 2 : -1);
  }
}
function Toast_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const _options_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275classMap(_options_r3.messageClass);
    \u0275\u0275domProperty("innerHTML", ctx_r1.message(), \u0275\u0275sanitizeHtml);
  }
}
function Toast_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const _options_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275classMap(_options_r3.messageClass);
    \u0275\u0275attribute("aria-label", ctx_r1.message());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.message(), " ");
  }
}
function Toast_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Toast_Conditional_3_Conditional_0_Template, 1, 3, "div", 4)(1, Toast_Conditional_3_Conditional_1_Template, 2, 4, "div", 5);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const _options_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275conditional(_options_r3.enableHtml ? 0 : 1);
  }
}
function Toast_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div");
    \u0275\u0275domElement(1, "div", 8);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r1.width() + "%");
  }
}
var ToastContainerDirective = class _ToastContainerDirective {
  el = inject(ElementRef);
  getContainerElement() {
    return this.el.nativeElement;
  }
  static \u0275fac = function ToastContainerDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastContainerDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ToastContainerDirective,
    selectors: [["", "toastContainer", ""]],
    exportAs: ["toastContainer"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastContainerDirective, [{
    type: Directive,
    args: [{
      selector: "[toastContainer]",
      exportAs: "toastContainer",
      standalone: true
    }]
  }], null, null);
})();
var ToastPackage = class {
  toastId;
  config;
  message;
  title;
  toastType;
  toastRef;
  _onTap = new Subject();
  _onAction = new Subject();
  constructor(toastId, config, message, title, toastType, toastRef) {
    this.toastId = toastId;
    this.config = config;
    this.message = message;
    this.title = title;
    this.toastType = toastType;
    this.toastRef = toastRef;
    this.toastRef.afterClosed().subscribe(() => {
      this._onAction.complete();
      this._onTap.complete();
    });
  }
  /** Fired on click */
  triggerTap() {
    this._onTap.next();
    if (this.config.tapToDismiss) {
      this._onTap.complete();
    }
  }
  onTap() {
    return this._onTap.asObservable();
  }
  /** available for use in custom toast */
  triggerAction(action) {
    this._onAction.next(action);
  }
  onAction() {
    return this._onAction.asObservable();
  }
};
var DefaultNoComponentGlobalConfig = {
  maxOpened: 0,
  autoDismiss: false,
  newestOnTop: true,
  preventDuplicates: false,
  countDuplicates: false,
  resetTimeoutOnDuplicate: false,
  includeTitleDuplicates: false,
  iconClasses: {
    error: "toast-error",
    info: "toast-info",
    success: "toast-success",
    warning: "toast-warning"
  },
  // Individual
  closeButton: false,
  disableTimeOut: false,
  timeOut: 5e3,
  extendedTimeOut: 1e3,
  enableHtml: false,
  progressBar: false,
  toastClass: "ngx-toastr",
  positionClass: "toast-top-right",
  titleClass: "toast-title",
  messageClass: "toast-message",
  easing: "ease-in",
  easeTime: 300,
  tapToDismiss: true,
  onActivateTick: false,
  progressAnimation: "decreasing"
};
var TOAST_CONFIG = new InjectionToken("ToastConfig");
var ComponentPortal = class {
  _attachedHost;
  /** The type of the component that will be instantiated for attachment. */
  component;
  /**
   * [Optional] Where the attached component should live in Angular's *logical* component tree.
   * This is different from where the component *renders*, which is determined by the PortalHost.
   * The origin necessary when the host is outside of the Angular application context.
   */
  viewContainerRef;
  /** Injector used for the instantiation of the component. */
  injector;
  constructor(component, injector) {
    this.component = component;
    this.injector = injector;
  }
  /** Attach this portal to a host. */
  attach(host, newestOnTop) {
    this._attachedHost = host;
    return host.attach(this, newestOnTop);
  }
  /** Detach this portal from its host */
  detach() {
    const host = this._attachedHost;
    if (host) {
      this._attachedHost = void 0;
      return host.detach();
    }
  }
  /** Whether this portal is attached to a host. */
  get isAttached() {
    return this._attachedHost != null;
  }
  /**
   * Sets the PortalHost reference without performing `attach()`. This is used directly by
   * the PortalHost when it is performing an `attach()` or `detach()`.
   */
  setAttachedHost(host) {
    this._attachedHost = host;
  }
};
var BasePortalHost = class {
  /** The portal currently attached to the host. */
  _attachedPortal;
  /** A function that will permanently dispose this host. */
  _disposeFn;
  attach(portal, newestOnTop) {
    this._attachedPortal = portal;
    return this.attachComponentPortal(portal, newestOnTop);
  }
  detach() {
    if (this._attachedPortal) {
      this._attachedPortal.setAttachedHost();
    }
    this._attachedPortal = void 0;
    if (this._disposeFn) {
      this._disposeFn();
      this._disposeFn = void 0;
    }
  }
  setDisposeFn(fn) {
    this._disposeFn = fn;
  }
};
var DomPortalHost = class extends BasePortalHost {
  _hostDomElement;
  _appRef;
  constructor(_hostDomElement, _appRef) {
    super();
    this._hostDomElement = _hostDomElement;
    this._appRef = _appRef;
  }
  /**
   * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
   * @param portal Portal to be attached
   */
  attachComponentPortal(portal, newestOnTop) {
    const componentRef = createComponent(portal.component, {
      environmentInjector: this._appRef.injector,
      elementInjector: portal.injector
    });
    this._appRef.attachView(componentRef.hostView);
    this.setDisposeFn(() => {
      this._appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    });
    if (newestOnTop) {
      this._hostDomElement.insertBefore(this._getComponentRootNode(componentRef), this._hostDomElement.firstChild);
    } else {
      this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
    }
    return componentRef;
  }
  /** Gets the root HTMLElement for an instantiated component. */
  _getComponentRootNode(componentRef) {
    return componentRef.hostView.rootNodes[0];
  }
};
var OverlayContainer = class _OverlayContainer {
  _document = inject(DOCUMENT);
  _containerElement;
  ngOnDestroy() {
    if (this._containerElement && this._containerElement.parentNode) {
      this._containerElement.parentNode.removeChild(this._containerElement);
    }
  }
  /**
   * This method returns the overlay container element. It will lazily
   * create the element the first time  it is called to facilitate using
   * the container in non-browser environments.
   * @returns the container element
   */
  getContainerElement() {
    if (!this._containerElement) {
      this._createContainer();
    }
    return this._containerElement;
  }
  /**
   * Create the overlay container element, which is simply a div
   * with the 'cdk-overlay-container' class on the document body
   * and 'aria-live="polite"'
   */
  _createContainer() {
    const container = this._document.createElement("div");
    container.classList.add("overlay-container");
    container.setAttribute("aria-live", "polite");
    this._document.body.appendChild(container);
    this._containerElement = container;
  }
  static \u0275fac = function OverlayContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverlayContainer)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _OverlayContainer,
    factory: _OverlayContainer.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayContainer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var OverlayRef = class {
  _portalHost;
  constructor(_portalHost) {
    this._portalHost = _portalHost;
  }
  attach(portal, newestOnTop = true) {
    return this._portalHost.attach(portal, newestOnTop);
  }
  /**
   * Detaches an overlay from a portal.
   * @returns Resolves when the overlay has been detached.
   */
  detach() {
    return this._portalHost.detach();
  }
};
var Overlay = class _Overlay {
  _overlayContainer = inject(OverlayContainer);
  _appRef = inject(ApplicationRef);
  _document = inject(DOCUMENT);
  // Namespace panes by overlay container
  _paneElements = /* @__PURE__ */ new Map();
  /**
   * Creates an overlay.
   * @returns A reference to the created overlay.
   */
  create(positionClass, overlayContainer) {
    return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
  }
  getPaneElement(positionClass = "", overlayContainer) {
    if (!this._paneElements.get(overlayContainer)) {
      this._paneElements.set(overlayContainer, {});
    }
    if (!this._paneElements.get(overlayContainer)[positionClass]) {
      this._paneElements.get(overlayContainer)[positionClass] = this._createPaneElement(positionClass, overlayContainer);
    }
    return this._paneElements.get(overlayContainer)[positionClass];
  }
  /**
   * Creates the DOM element for an overlay and appends it to the overlay container.
   * @returns Newly-created pane element
   */
  _createPaneElement(positionClass, overlayContainer) {
    const pane = this._document.createElement("div");
    pane.id = "toast-container";
    pane.classList.add(positionClass);
    pane.classList.add("toast-container");
    if (!overlayContainer) {
      this._overlayContainer.getContainerElement().appendChild(pane);
    } else {
      overlayContainer.getContainerElement().appendChild(pane);
    }
    return pane;
  }
  /**
   * Create a DomPortalHost into which the overlay content can be loaded.
   * @param pane The DOM element to turn into a portal host.
   * @returns A portal host for the given DOM element.
   */
  _createPortalHost(pane) {
    return new DomPortalHost(pane, this._appRef);
  }
  /**
   * Creates an OverlayRef for an overlay in the given DOM element.
   * @param pane DOM element for the overlay
   */
  _createOverlayRef(pane) {
    return new OverlayRef(this._createPortalHost(pane));
  }
  static \u0275fac = function Overlay_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Overlay)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Overlay,
    factory: _Overlay.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Overlay, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ToastRef = class {
  _overlayRef;
  /** The instance of component opened into the toast. */
  componentInstance;
  /** Count of duplicates of this toast */
  duplicatesCount = 0;
  /** Subject for notifying the user that the toast has finished closing. */
  _afterClosed = new Subject();
  /** triggered when toast is activated */
  _activate = new Subject();
  /** notifies the toast that it should close before the timeout */
  _manualClose = new Subject();
  /** notifies the toast that it should reset the timeouts */
  _resetTimeout = new Subject();
  /** notifies the toast that it should count a duplicate toast */
  _countDuplicate = new Subject();
  constructor(_overlayRef) {
    this._overlayRef = _overlayRef;
  }
  manualClose() {
    this._manualClose.next();
    this._manualClose.complete();
  }
  manualClosed() {
    return this._manualClose.asObservable();
  }
  timeoutReset() {
    return this._resetTimeout.asObservable();
  }
  countDuplicate() {
    return this._countDuplicate.asObservable();
  }
  /**
   * Close the toast.
   */
  close() {
    this._overlayRef.detach();
    this._afterClosed.next();
    this._manualClose.next();
    this._afterClosed.complete();
    this._manualClose.complete();
    this._activate.complete();
    this._resetTimeout.complete();
    this._countDuplicate.complete();
  }
  /** Gets an observable that is notified when the toast is finished closing. */
  afterClosed() {
    return this._afterClosed.asObservable();
  }
  isInactive() {
    return this._activate.closed;
  }
  activate() {
    this._activate.next();
    this._activate.complete();
  }
  /** Gets an observable that is notified when the toast has started opening. */
  afterActivate() {
    return this._activate.asObservable();
  }
  /** Reset the toast timouts and count duplicates */
  onDuplicate(resetTimeout, countDuplicate) {
    if (resetTimeout) {
      this._resetTimeout.next();
    }
    if (countDuplicate) {
      this._countDuplicate.next(++this.duplicatesCount);
    }
  }
};
var ToastrService = class _ToastrService {
  overlay = inject(Overlay);
  _injector = inject(Injector);
  sanitizer = inject(DomSanitizer);
  ngZone = inject(NgZone);
  toastrConfig;
  currentlyActive = 0;
  toasts = [];
  overlayContainer;
  previousToastMessage;
  index = 0;
  constructor() {
    const token = inject(TOAST_CONFIG);
    this.toastrConfig = __spreadValues(__spreadValues({}, token.default), token.config);
    if (token.config.iconClasses) {
      this.toastrConfig.iconClasses = __spreadValues(__spreadValues({}, token.default.iconClasses), token.config.iconClasses);
    }
  }
  /** show toast */
  show(message, title, override = {}, type = "") {
    return this._preBuildNotification(type, message, title, this.applyConfig(override));
  }
  /** show successful toast */
  success(message, title, override = {}) {
    const type = this.toastrConfig.iconClasses.success || "";
    return this._preBuildNotification(type, message, title, this.applyConfig(override));
  }
  /** show error toast */
  error(message, title, override = {}) {
    const type = this.toastrConfig.iconClasses.error || "";
    return this._preBuildNotification(type, message, title, this.applyConfig(override));
  }
  /** show info toast */
  info(message, title, override = {}) {
    const type = this.toastrConfig.iconClasses.info || "";
    return this._preBuildNotification(type, message, title, this.applyConfig(override));
  }
  /** show warning toast */
  warning(message, title, override = {}) {
    const type = this.toastrConfig.iconClasses.warning || "";
    return this._preBuildNotification(type, message, title, this.applyConfig(override));
  }
  /**
   * Remove all or a single toast by id
   */
  clear(toastId) {
    for (const toast of this.toasts) {
      if (toastId !== void 0) {
        if (toast.toastId === toastId) {
          toast.toastRef.manualClose();
          return;
        }
      } else {
        toast.toastRef.manualClose();
      }
    }
  }
  /**
   * Remove and destroy a single toast by id
   */
  remove(toastId) {
    const found = this._findToast(toastId);
    if (!found) {
      return false;
    }
    found.activeToast.toastRef.close();
    this.toasts.splice(found.index, 1);
    this.currentlyActive = this.currentlyActive - 1;
    if (!this.toastrConfig.maxOpened || !this.toasts.length) {
      return false;
    }
    if (this.currentlyActive < this.toastrConfig.maxOpened && this.toasts[this.currentlyActive]) {
      const p = this.toasts[this.currentlyActive].toastRef;
      if (!p.isInactive()) {
        this.currentlyActive = this.currentlyActive + 1;
        p.activate();
      }
    }
    return true;
  }
  /**
   * Determines if toast message is already shown
   */
  findDuplicate(title = "", message = "", resetOnDuplicate, countDuplicates) {
    const {
      includeTitleDuplicates
    } = this.toastrConfig;
    for (const toast of this.toasts) {
      const hasDuplicateTitle = includeTitleDuplicates && toast.title === title;
      if ((!includeTitleDuplicates || hasDuplicateTitle) && toast.message === message) {
        toast.toastRef.onDuplicate(resetOnDuplicate, countDuplicates);
        return toast;
      }
    }
    return null;
  }
  /** create a clone of global config and apply individual settings */
  applyConfig(override = {}) {
    return __spreadValues(__spreadValues({}, this.toastrConfig), override);
  }
  /**
   * Find toast object by id
   */
  _findToast(toastId) {
    for (let i = 0; i < this.toasts.length; i++) {
      if (this.toasts[i].toastId === toastId) {
        return {
          index: i,
          activeToast: this.toasts[i]
        };
      }
    }
    return null;
  }
  /**
   * Determines the need to run inside angular's zone then builds the toast
   */
  _preBuildNotification(toastType, message, title, config) {
    if (config.onActivateTick) {
      return this.ngZone.run(() => this._buildNotification(toastType, message, title, config));
    }
    return this._buildNotification(toastType, message, title, config);
  }
  /**
   * Creates and attaches toast data to component
   * returns the active toast, or in case preventDuplicates is enabled the original/non-duplicate active toast.
   */
  _buildNotification(toastType, message, title, config) {
    if (!config.toastComponent) {
      throw new Error("toastComponent required");
    }
    const duplicate = this.findDuplicate(title, message, this.toastrConfig.resetTimeoutOnDuplicate && config.timeOut > 0, this.toastrConfig.countDuplicates);
    if ((this.toastrConfig.includeTitleDuplicates && title || message) && this.toastrConfig.preventDuplicates && duplicate !== null) {
      return duplicate;
    }
    this.previousToastMessage = message;
    let keepInactive = false;
    if (this.toastrConfig.maxOpened && this.currentlyActive >= this.toastrConfig.maxOpened) {
      keepInactive = true;
      if (this.toastrConfig.autoDismiss) {
        this.clear(this.toasts[0].toastId);
      }
    }
    const overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
    this.index = this.index + 1;
    let sanitizedMessage = message;
    if (message && config.enableHtml) {
      sanitizedMessage = this.sanitizer.sanitize(SecurityContext.HTML, message);
    }
    const toastRef = new ToastRef(overlayRef);
    const toastPackage = new ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
    const providers = [{
      provide: ToastPackage,
      useValue: toastPackage
    }];
    const toastInjector = Injector.create({
      providers,
      parent: this._injector
    });
    const component = new ComponentPortal(config.toastComponent, toastInjector);
    const portal = overlayRef.attach(component, config.newestOnTop);
    toastRef.componentInstance = portal.instance;
    const ins = {
      toastId: this.index,
      title: title || "",
      message: message || "",
      toastRef,
      onShown: toastRef.afterActivate(),
      onHidden: toastRef.afterClosed(),
      onTap: toastPackage.onTap(),
      onAction: toastPackage.onAction(),
      portal
    };
    if (!keepInactive) {
      this.currentlyActive = this.currentlyActive + 1;
      setTimeout(() => {
        ins.toastRef.activate();
      });
    }
    this.toasts.push(ins);
    return ins;
  }
  static \u0275fac = function ToastrService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastrService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ToastrService,
    factory: _ToastrService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastrService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var TimeoutsService = class _TimeoutsService {
  ngZone = inject(NgZone);
  setInterval(func, timeout) {
    if (this.ngZone) {
      return this.ngZone.runOutsideAngular(() => window.setInterval(() => this.runInsideAngular(func), timeout));
    } else {
      return window.setInterval(() => func(), timeout);
    }
  }
  setTimeout(func, timeout) {
    if (this.ngZone) {
      return this.ngZone.runOutsideAngular(() => window.setTimeout(() => this.runInsideAngular(func), timeout));
    } else {
      return window.setTimeout(() => func(), timeout);
    }
  }
  runInsideAngular(func) {
    if (this.ngZone) {
      this.ngZone.run(() => func());
    } else {
      func();
    }
  }
  static \u0275fac = function TimeoutsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimeoutsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TimeoutsService,
    factory: _TimeoutsService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeoutsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ToastBase = class _ToastBase {
  toastPackage = inject(ToastPackage);
  toastrService = inject(ToastrService);
  appRef = inject(ApplicationRef);
  timeoutsService = inject(TimeoutsService);
  duplicatesCount;
  hideTime;
  /** width of progress bar */
  width = signal(-1, ...ngDevMode ? [{
    debugName: "width"
  }] : []);
  state = signal("inactive", ...ngDevMode ? [{
    debugName: "state"
  }] : []);
  /** hides component when waiting to be displayed */
  displayStyle = computed(() => this.state() === "inactive" ? "none" : void 0, ...ngDevMode ? [{
    debugName: "displayStyle"
  }] : []);
  message = computed(() => this.toastPackage.message, ...ngDevMode ? [{
    debugName: "message"
  }] : []);
  title = computed(() => this.toastPackage.title, ...ngDevMode ? [{
    debugName: "title"
  }] : []);
  options = linkedSignal(() => this.toastPackage.config, ...ngDevMode ? [{
    debugName: "options"
  }] : []);
  originalTimeout = computed(() => this.toastPackage.config.timeOut, ...ngDevMode ? [{
    debugName: "originalTimeout"
  }] : []);
  toastClasses = computed(() => `${this.toastPackage.toastType} ${this.toastPackage.config.toastClass}`, ...ngDevMode ? [{
    debugName: "toastClasses"
  }] : []);
  timeout;
  intervalId;
  afterActivateSubscription;
  manualClosedSubscription;
  timeoutResetSubscription;
  countDuplicateSubscription;
  constructor() {
    this.afterActivateSubscription = this.toastPackage.toastRef.afterActivate().subscribe(() => {
      this.activateToast();
    });
    this.manualClosedSubscription = this.toastPackage.toastRef.manualClosed().subscribe(() => {
      this.remove();
    });
    this.timeoutResetSubscription = this.toastPackage.toastRef.timeoutReset().subscribe(() => {
      this.resetTimeout();
    });
    this.countDuplicateSubscription = this.toastPackage.toastRef.countDuplicate().subscribe((count) => {
      this.duplicatesCount = count;
    });
  }
  ngOnDestroy() {
    this.afterActivateSubscription.unsubscribe();
    this.manualClosedSubscription.unsubscribe();
    this.timeoutResetSubscription.unsubscribe();
    this.countDuplicateSubscription.unsubscribe();
    clearInterval(this.intervalId);
    clearTimeout(this.timeout);
  }
  /**
   * activates toast and sets timeout
   */
  activateToast() {
    const options = this.options();
    this.state.set("active");
    if (!(options.disableTimeOut === true || options.disableTimeOut === "timeOut") && options.timeOut) {
      this.timeout = this.timeoutsService.setTimeout(() => this.remove(), options.timeOut);
      this.hideTime = (/* @__PURE__ */ new Date()).getTime() + options.timeOut;
      if (options.progressBar) {
        this.intervalId = this.timeoutsService.setInterval(() => this.updateProgress(), 10);
      }
    }
  }
  /**
   * updates progress bar width
   */
  updateProgress() {
    const options = this.options();
    if (this.width() === 0 || this.width() === 100 || !options.timeOut) {
      return;
    }
    const now = (/* @__PURE__ */ new Date()).getTime();
    const remaining = this.hideTime - now;
    this.width.set(remaining / options.timeOut * 100);
    if (options.progressAnimation === "increasing") {
      this.width.update((width) => 100 - width);
    }
    if (this.width() <= 0) {
      this.width.set(0);
    }
    if (this.width() >= 100) {
      this.width.set(100);
    }
  }
  resetTimeout() {
    const options = this.options();
    clearTimeout(this.timeout);
    clearInterval(this.intervalId);
    this.state.set("active");
    this.options.update((options2) => __spreadProps(__spreadValues({}, options2), {
      timeOut: this.originalTimeout()
    }));
    this.timeout = this.timeoutsService.setTimeout(() => this.remove(), this.originalTimeout());
    this.hideTime = (/* @__PURE__ */ new Date()).getTime() + (this.originalTimeout() || 0);
    this.width.set(-1);
    if (options.progressBar) this.intervalId = this.timeoutsService.setInterval(() => this.updateProgress(), 10);
  }
  /**
   * tells toastrService to remove this toast after animation time
   */
  remove() {
    if (this.state() === "removed") return;
    clearTimeout(this.timeout);
    this.state.set("removed");
    this.timeout = this.timeoutsService.setTimeout(() => this.toastrService.remove(this.toastPackage.toastId));
  }
  tapToast() {
    if (this.state() === "removed") return;
    this.toastPackage.triggerTap();
    if (this.options().tapToDismiss) {
      this.remove();
    }
  }
  stickAround() {
    if (this.state() === "removed") return;
    if (this.options().disableTimeOut !== "extendedTimeOut") {
      clearTimeout(this.timeout);
      this.options.update((options) => __spreadProps(__spreadValues({}, options), {
        timeOut: 0
      }));
      this.hideTime = 0;
      clearInterval(this.intervalId);
      this.width.set(0);
    }
  }
  delayedHideToast() {
    const options = this.options();
    if (options.disableTimeOut === true || options.disableTimeOut === "extendedTimeOut" || options.extendedTimeOut === 0 || this.state() === "removed") {
      return;
    }
    const extendedTimeOut = options.extendedTimeOut;
    this.timeout = this.timeoutsService.setTimeout(() => this.remove(), extendedTimeOut);
    this.options.update((options2) => __spreadProps(__spreadValues({}, options2), {
      timeOut: extendedTimeOut
    }));
    this.hideTime = (/* @__PURE__ */ new Date()).getTime() + (extendedTimeOut || 0);
    this.width.set(-1);
    if (options.progressBar) {
      this.intervalId = this.timeoutsService.setInterval(() => this.updateProgress(), 10);
    }
  }
  static \u0275fac = function ToastBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastBase)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ToastBase,
    selectors: [["", "toast-component", ""]],
    hostVars: 4,
    hostBindings: function ToastBase_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mouseenter", function ToastBase_mouseenter_HostBindingHandler() {
          return ctx.stickAround();
        })("mouseleave", function ToastBase_mouseleave_HostBindingHandler() {
          return ctx.delayedHideToast();
        })("click", function ToastBase_click_HostBindingHandler() {
          return ctx.tapToast();
        });
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.toastClasses());
        \u0275\u0275styleProp("display", ctx.displayStyle());
      }
    },
    attrs: _c0,
    decls: 5,
    vars: 5,
    consts: [["type", "button", "aria-label", "Close", 1, "toast-close-button"], [3, "class"], ["type", "button", "aria-label", "Close", 1, "toast-close-button", 3, "click"], ["aria-hidden", "true"], ["role", "alert", 3, "class", "innerHTML"], ["role", "alert", 3, "class"], ["role", "alert", 3, "innerHTML"], ["role", "alert"], [1, "toast-progress"]],
    template: function ToastBase_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275declareLet(0);
        \u0275\u0275conditionalCreate(1, ToastBase_Conditional_1_Template, 3, 0, "button", 0);
        \u0275\u0275conditionalCreate(2, ToastBase_Conditional_2_Template, 3, 5, "div", 1);
        \u0275\u0275conditionalCreate(3, ToastBase_Conditional_3_Template, 2, 1);
        \u0275\u0275conditionalCreate(4, ToastBase_Conditional_4_Template, 2, 2, "div");
      }
      if (rf & 2) {
        const _options_r4 = \u0275\u0275storeLet(ctx.options());
        \u0275\u0275advance();
        \u0275\u0275conditional(_options_r4.closeButton ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.title() ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.message() ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(_options_r4.progressBar ? 4 : -1);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastBase, [{
    type: Component,
    args: [{
      selector: "[toast-component]",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class]": "toastClasses()",
        "[style.display]": "displayStyle()",
        "(mouseenter)": "stickAround()",
        "(mouseleave)": "delayedHideToast()",
        "(click)": "tapToast()"
      },
      template: `@let _options = options();

@if (_options.closeButton) {
  <button (click)="remove()" type="button" class="toast-close-button" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
}

@if (title()) {
  <div [class]="_options.titleClass" [attr.aria-label]="title()">
    {{ title() }}

    @if (duplicatesCount) {
      <ng-container>[{{ duplicatesCount + 1 }}]</ng-container>
    }
  </div>
}

@if (message()) {
  @if (_options.enableHtml) {
    <div role="alert" [class]="_options.messageClass" [innerHTML]="message()"></div>
  } @else {
    <div role="alert" [class]="_options.messageClass" [attr.aria-label]="message()">
      {{ message() }}
    </div>
  }
}

@if (_options.progressBar) {
  <div>
    <div class="toast-progress" [style.width]="width() + '%'"></div>
  </div>
}
`
    }]
  }], () => [], null);
})();
var Toast = class _Toast extends ToastBase {
  params = {
    easeTime: this.toastPackage.config.easeTime,
    easing: "ease-in"
  };
  elementRef = inject(ElementRef);
  remove() {
    if (this.state() === "removed") return;
    clearTimeout(this.timeout);
    this.state.set("removed");
    this.elementRef.nativeElement.classList.add("toast-out");
    this.timeout = this.timeoutsService.setTimeout(() => this.toastrService.remove(this.toastPackage.toastId), +this.params.easeTime);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Toast_BaseFactory;
    return function Toast_Factory(__ngFactoryType__) {
      return (\u0275Toast_BaseFactory || (\u0275Toast_BaseFactory = \u0275\u0275getInheritedFactory(_Toast)))(__ngFactoryType__ || _Toast);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Toast,
    selectors: [["", "toast-component", ""]],
    hostVars: 4,
    hostBindings: function Toast_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275animateEnter("toast-in");
      }
      if (rf & 2) {
        \u0275\u0275styleProp("--animation-easing", ctx.params.easing)("--animation-duration", ctx.params.easeTime + "ms");
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c0,
    decls: 5,
    vars: 5,
    consts: [["type", "button", "aria-label", "Close", 1, "toast-close-button"], [3, "class"], ["type", "button", "aria-label", "Close", 1, "toast-close-button", 3, "click"], ["aria-hidden", "true"], ["role", "alert", 3, "class", "innerHTML"], ["role", "alert", 3, "class"], ["role", "alert", 3, "innerHTML"], ["role", "alert"], [1, "toast-progress"]],
    template: function Toast_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275declareLet(0);
        \u0275\u0275conditionalCreate(1, Toast_Conditional_1_Template, 3, 0, "button", 0);
        \u0275\u0275conditionalCreate(2, Toast_Conditional_2_Template, 3, 5, "div", 1);
        \u0275\u0275conditionalCreate(3, Toast_Conditional_3_Template, 2, 1);
        \u0275\u0275conditionalCreate(4, Toast_Conditional_4_Template, 2, 2, "div");
      }
      if (rf & 2) {
        const _options_r4 = \u0275\u0275storeLet(ctx.options());
        \u0275\u0275advance();
        \u0275\u0275conditional(_options_r4.closeButton ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.title() ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.message() ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(_options_r4.progressBar ? 4 : -1);
      }
    },
    styles: [".toast-in[_nghost-%COMP%]{animation:_ngcontent-%COMP%_toast-animation var(--animation-duration) var(--animation-easing)}.toast-out[_nghost-%COMP%]{animation:_ngcontent-%COMP%_toast-animation var(--animation-duration) var(--animation-easing) reverse forwards}@keyframes _ngcontent-%COMP%_toast-animation{0%{opacity:0}to{opacity:1}}"],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Toast, [{
    type: Component,
    args: [{
      selector: "[toast-component]",
      host: {
        "[style.--animation-easing]": "params.easing",
        "[style.--animation-duration]": 'params.easeTime + "ms"',
        "animate.enter": "toast-in"
      },
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `@let _options = options();

@if (_options.closeButton) {
  <button (click)="remove()" type="button" class="toast-close-button" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
}

@if (title()) {
  <div [class]="_options.titleClass" [attr.aria-label]="title()">
    {{ title() }}

    @if (duplicatesCount) {
      <ng-container>[{{ duplicatesCount + 1 }}]</ng-container>
    }
  </div>
}

@if (message()) {
  @if (_options.enableHtml) {
    <div role="alert" [class]="_options.messageClass" [innerHTML]="message()"></div>
  } @else {
    <div role="alert" [class]="_options.messageClass" [attr.aria-label]="message()">
      {{ message() }}
    </div>
  }
}

@if (_options.progressBar) {
  <div>
    <div class="toast-progress" [style.width]="width() + '%'"></div>
  </div>
}
`,
      styles: [":host.toast-in{animation:toast-animation var(--animation-duration) var(--animation-easing)}:host.toast-out{animation:toast-animation var(--animation-duration) var(--animation-easing) reverse forwards}@keyframes toast-animation{0%{opacity:0}to{opacity:1}}\n"]
    }]
  }], null, null);
})();
var DefaultGlobalConfig = __spreadProps(__spreadValues({}, DefaultNoComponentGlobalConfig), {
  toastComponent: Toast
});
var provideToastr = (config = {}) => {
  const providers = [{
    provide: TOAST_CONFIG,
    useValue: {
      default: DefaultGlobalConfig,
      config
    }
  }];
  return makeEnvironmentProviders(providers);
};
var ToastrModule = class _ToastrModule {
  static forRoot(config = {}) {
    return {
      ngModule: _ToastrModule,
      providers: [provideToastr(config)]
    };
  }
  static \u0275fac = function ToastrModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastrModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToastrModule,
    imports: [Toast],
    exports: [Toast]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastrModule, [{
    type: NgModule,
    args: [{
      imports: [Toast],
      exports: [Toast]
    }]
  }], null, null);
})();
var ToastrComponentlessModule = class _ToastrComponentlessModule {
  static forRoot(config = {}) {
    return {
      ngModule: ToastrModule,
      providers: [{
        provide: TOAST_CONFIG,
        useValue: {
          default: DefaultNoComponentGlobalConfig,
          config
        }
      }]
    };
  }
  static \u0275fac = function ToastrComponentlessModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastrComponentlessModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToastrComponentlessModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastrComponentlessModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var DefaultNoAnimationsGlobalConfig = __spreadProps(__spreadValues({}, DefaultNoComponentGlobalConfig), {
  toastComponent: ToastBase
});
var ToastNoAnimationModule = class _ToastNoAnimationModule {
  static forRoot(config = {}) {
    return {
      ngModule: _ToastNoAnimationModule,
      providers: [{
        provide: TOAST_CONFIG,
        useValue: {
          default: DefaultNoAnimationsGlobalConfig,
          config
        }
      }]
    };
  }
  static \u0275fac = function ToastNoAnimationModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastNoAnimationModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToastNoAnimationModule,
    imports: [ToastBase],
    exports: [ToastBase]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastNoAnimationModule, [{
    type: NgModule,
    args: [{
      imports: [ToastBase],
      exports: [ToastBase]
    }]
  }], null, null);
})();

// node_modules/@angular/animations/fesm2022/_private_export-chunk.mjs
/**
 * @license Angular v21.2.11
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var AnimationMetadataType;
(function(AnimationMetadataType2) {
  AnimationMetadataType2[AnimationMetadataType2["State"] = 0] = "State";
  AnimationMetadataType2[AnimationMetadataType2["Transition"] = 1] = "Transition";
  AnimationMetadataType2[AnimationMetadataType2["Sequence"] = 2] = "Sequence";
  AnimationMetadataType2[AnimationMetadataType2["Group"] = 3] = "Group";
  AnimationMetadataType2[AnimationMetadataType2["Animate"] = 4] = "Animate";
  AnimationMetadataType2[AnimationMetadataType2["Keyframes"] = 5] = "Keyframes";
  AnimationMetadataType2[AnimationMetadataType2["Style"] = 6] = "Style";
  AnimationMetadataType2[AnimationMetadataType2["Trigger"] = 7] = "Trigger";
  AnimationMetadataType2[AnimationMetadataType2["Reference"] = 8] = "Reference";
  AnimationMetadataType2[AnimationMetadataType2["AnimateChild"] = 9] = "AnimateChild";
  AnimationMetadataType2[AnimationMetadataType2["AnimateRef"] = 10] = "AnimateRef";
  AnimationMetadataType2[AnimationMetadataType2["Query"] = 11] = "Query";
  AnimationMetadataType2[AnimationMetadataType2["Stagger"] = 12] = "Stagger";
})(AnimationMetadataType || (AnimationMetadataType = {}));
var AUTO_STYLE = "*";
function sequence(steps, options = null) {
  return {
    type: AnimationMetadataType.Sequence,
    steps,
    options
  };
}
function style(tokens) {
  return {
    type: AnimationMetadataType.Style,
    styles: tokens,
    offset: null
  };
}
var NoopAnimationPlayer = class {
  _onDoneFns = [];
  _onStartFns = [];
  _onDestroyFns = [];
  _originalOnDoneFns = [];
  _originalOnStartFns = [];
  _started = false;
  _destroyed = false;
  _finished = false;
  _position = 0;
  parentPlayer = null;
  totalTime;
  constructor(duration = 0, delay = 0) {
    this.totalTime = duration + delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  init() {
  }
  play() {
    if (!this.hasStarted()) {
      this._onStart();
      this.triggerMicrotask();
    }
    this._started = true;
  }
  triggerMicrotask() {
    queueMicrotask(() => this._onFinish());
  }
  _onStart() {
    this._onStartFns.forEach((fn) => fn());
    this._onStartFns = [];
  }
  pause() {
  }
  restart() {
  }
  finish() {
    this._onFinish();
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      if (!this.hasStarted()) {
        this._onStart();
      }
      this.finish();
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this._started = false;
    this._finished = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  setPosition(position) {
    this._position = this.totalTime ? position * this.totalTime : 1;
  }
  getPosition() {
    return this.totalTime ? this._position / this.totalTime : 1;
  }
  triggerCallback(phaseName) {
    const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var AnimationGroupPlayer = class {
  _onDoneFns = [];
  _onStartFns = [];
  _finished = false;
  _started = false;
  _destroyed = false;
  _onDestroyFns = [];
  parentPlayer = null;
  totalTime = 0;
  players;
  constructor(_players) {
    this.players = _players;
    let doneCount = 0;
    let destroyCount = 0;
    let startCount = 0;
    const total = this.players.length;
    if (total == 0) {
      queueMicrotask(() => this._onFinish());
    } else {
      this.players.forEach((player) => {
        player.onDone(() => {
          if (++doneCount == total) {
            this._onFinish();
          }
        });
        player.onDestroy(() => {
          if (++destroyCount == total) {
            this._onDestroy();
          }
        });
        player.onStart(() => {
          if (++startCount == total) {
            this._onStart();
          }
        });
      });
    }
    this.totalTime = this.players.reduce((time, player) => Math.max(time, player.totalTime), 0);
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this.players.forEach((player) => player.init());
  }
  onStart(fn) {
    this._onStartFns.push(fn);
  }
  _onStart() {
    if (!this.hasStarted()) {
      this._started = true;
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
    }
  }
  onDone(fn) {
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  play() {
    if (!this.parentPlayer) {
      this.init();
    }
    this._onStart();
    this.players.forEach((player) => player.play());
  }
  pause() {
    this.players.forEach((player) => player.pause());
  }
  restart() {
    this.players.forEach((player) => player.restart());
  }
  finish() {
    this._onFinish();
    this.players.forEach((player) => player.finish());
  }
  destroy() {
    this._onDestroy();
  }
  _onDestroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._onFinish();
      this.players.forEach((player) => player.destroy());
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this.players.forEach((player) => player.reset());
    this._destroyed = false;
    this._finished = false;
    this._started = false;
  }
  setPosition(p) {
    const timeAtPosition = p * this.totalTime;
    this.players.forEach((player) => {
      const position = player.totalTime ? Math.min(1, timeAtPosition / player.totalTime) : 1;
      player.setPosition(position);
    });
  }
  getPosition() {
    const longestPlayer = this.players.reduce((longestSoFar, player) => {
      const newPlayerIsLongest = longestSoFar === null || player.totalTime > longestSoFar.totalTime;
      return newPlayerIsLongest ? player : longestSoFar;
    }, null);
    return longestPlayer != null ? longestPlayer.getPosition() : 0;
  }
  beforeDestroy() {
    this.players.forEach((player) => {
      if (player.beforeDestroy) {
        player.beforeDestroy();
      }
    });
  }
  triggerCallback(phaseName) {
    const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var \u0275PRE_STYLE = "!";

// node_modules/@angular/animations/fesm2022/_util-chunk.mjs
/**
 * @license Angular v21.2.11
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var LINE_START = "\n - ";
function invalidTimingValue(exp) {
  return new RuntimeError(3e3, ngDevMode && `The provided timing value "${exp}" is invalid.`);
}
function negativeStepValue() {
  return new RuntimeError(3100, ngDevMode && "Duration values below 0 are not allowed for this animation step.");
}
function negativeDelayValue() {
  return new RuntimeError(3101, ngDevMode && "Delay values below 0 are not allowed for this animation step.");
}
function invalidStyleParams(varName) {
  return new RuntimeError(3001, ngDevMode && `Unable to resolve the local animation param ${varName} in the given list of values`);
}
function invalidParamValue(varName) {
  return new RuntimeError(3003, ngDevMode && `Please provide a value for the animation param ${varName}`);
}
function invalidNodeType(nodeType) {
  return new RuntimeError(3004, ngDevMode && `Unable to resolve animation metadata node #${nodeType}`);
}
function invalidCssUnitValue(userProvidedProperty, value) {
  return new RuntimeError(3005, ngDevMode && `Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
}
function invalidTrigger() {
  return new RuntimeError(3006, ngDevMode && "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))");
}
function invalidDefinition() {
  return new RuntimeError(3007, ngDevMode && "only state() and transition() definitions can sit inside of a trigger()");
}
function invalidState(metadataName, missingSubs) {
  return new RuntimeError(3008, ngDevMode && `state("${metadataName}", ...) must define default values for all the following style substitutions: ${missingSubs.join(", ")}`);
}
function invalidStyleValue(value) {
  return new RuntimeError(3002, ngDevMode && `The provided style string value ${value} is not allowed.`);
}
function invalidParallelAnimation(prop, firstStart, firstEnd, secondStart, secondEnd) {
  return new RuntimeError(3010, ngDevMode && `The CSS property "${prop}" that exists between the times of "${firstStart}ms" and "${firstEnd}ms" is also being animated in a parallel animation between the times of "${secondStart}ms" and "${secondEnd}ms"`);
}
function invalidKeyframes() {
  return new RuntimeError(3011, ngDevMode && `keyframes() must be placed inside of a call to animate()`);
}
function invalidOffset() {
  return new RuntimeError(3012, ngDevMode && `Please ensure that all keyframe offsets are between 0 and 1`);
}
function keyframeOffsetsOutOfOrder() {
  return new RuntimeError(3200, ngDevMode && `Please ensure that all keyframe offsets are in order`);
}
function keyframesMissingOffsets() {
  return new RuntimeError(3202, ngDevMode && `Not all style() steps within the declared keyframes() contain offsets`);
}
function invalidStagger() {
  return new RuntimeError(3013, ngDevMode && `stagger() can only be used inside of query()`);
}
function invalidQuery(selector) {
  return new RuntimeError(3014, ngDevMode && `\`query("${selector}")\` returned zero elements. (Use \`query("${selector}", { optional: true })\` if you wish to allow this.)`);
}
function invalidExpression(expr) {
  return new RuntimeError(3015, ngDevMode && `The provided transition expression "${expr}" is not supported`);
}
function invalidTransitionAlias(alias) {
  return new RuntimeError(3016, ngDevMode && `The transition alias value "${alias}" is not supported`);
}
function triggerBuildFailed(name, errors) {
  return new RuntimeError(3404, ngDevMode && `The animation trigger "${name}" has failed to build due to the following errors:
 - ${errors.map((err) => err.message).join("\n - ")}`);
}
function animationFailed(errors) {
  return new RuntimeError(3502, ngDevMode && `Unable to animate due to the following errors:${LINE_START}${errors.map((err) => err.message).join(LINE_START)}`);
}
function registerFailed(errors) {
  return new RuntimeError(3503, ngDevMode && `Unable to build the animation due to the following errors: ${errors.map((err) => err.message).join("\n")}`);
}
function missingOrDestroyedAnimation() {
  return new RuntimeError(3300, ngDevMode && "The requested animation doesn't exist or has already been destroyed");
}
function createAnimationFailed(errors) {
  return new RuntimeError(3504, ngDevMode && `Unable to create the animation due to the following errors:${errors.map((err) => err.message).join("\n")}`);
}
function missingPlayer(id) {
  return new RuntimeError(3301, ngDevMode && `Unable to find the timeline player referenced by ${id}`);
}
function missingTrigger(phase, name) {
  return new RuntimeError(3302, ngDevMode && `Unable to listen on the animation trigger event "${phase}" because the animation trigger "${name}" doesn't exist!`);
}
function missingEvent(name) {
  return new RuntimeError(3303, ngDevMode && `Unable to listen on the animation trigger "${name}" because the provided event is undefined!`);
}
function unsupportedTriggerEvent(phase, name) {
  return new RuntimeError(3400, ngDevMode && `The provided animation trigger event "${phase}" for the animation trigger "${name}" is not supported!`);
}
function unregisteredTrigger(name) {
  return new RuntimeError(3401, ngDevMode && `The provided animation trigger "${name}" has not been registered!`);
}
function triggerTransitionsFailed(errors) {
  return new RuntimeError(3402, ngDevMode && `Unable to process animations due to the following failed trigger transitions
 ${errors.map((err) => err.message).join("\n")}`);
}
function transitionFailed(name, errors) {
  return new RuntimeError(3505, ngDevMode && `@${name} has failed due to:
 ${errors.map((err) => err.message).join("\n- ")}`);
}
var ANIMATABLE_PROP_SET = /* @__PURE__ */ new Set(["-moz-outline-radius", "-moz-outline-radius-bottomleft", "-moz-outline-radius-bottomright", "-moz-outline-radius-topleft", "-moz-outline-radius-topright", "-ms-grid-columns", "-ms-grid-rows", "-webkit-line-clamp", "-webkit-text-fill-color", "-webkit-text-stroke", "-webkit-text-stroke-color", "accent-color", "all", "backdrop-filter", "background", "background-color", "background-position", "background-size", "block-size", "border", "border-block-end", "border-block-end-color", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-width", "border-color", "border-end-end-radius", "border-end-start-radius", "border-image-outset", "border-image-slice", "border-image-width", "border-inline-end", "border-inline-end-color", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-width", "border-left", "border-left-color", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-width", "border-start-end-radius", "border-start-start-radius", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-width", "border-width", "bottom", "box-shadow", "caret-color", "clip", "clip-path", "color", "column-count", "column-gap", "column-rule", "column-rule-color", "column-rule-width", "column-width", "columns", "filter", "flex", "flex-basis", "flex-grow", "flex-shrink", "font", "font-size", "font-size-adjust", "font-stretch", "font-variation-settings", "font-weight", "gap", "grid-column-gap", "grid-gap", "grid-row-gap", "grid-template-columns", "grid-template-rows", "height", "inline-size", "input-security", "inset", "inset-block", "inset-block-end", "inset-block-start", "inset-inline", "inset-inline-end", "inset-inline-start", "left", "letter-spacing", "line-clamp", "line-height", "margin", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "mask", "mask-border", "mask-position", "mask-size", "max-block-size", "max-height", "max-inline-size", "max-lines", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "object-position", "offset", "offset-anchor", "offset-distance", "offset-path", "offset-position", "offset-rotate", "opacity", "order", "outline", "outline-color", "outline-offset", "outline-width", "padding", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "perspective", "perspective-origin", "right", "rotate", "row-gap", "scale", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-coordinate", "scroll-snap-destination", "scrollbar-color", "shape-image-threshold", "shape-margin", "shape-outside", "tab-size", "text-decoration", "text-decoration-color", "text-decoration-thickness", "text-emphasis", "text-emphasis-color", "text-indent", "text-shadow", "text-underline-offset", "top", "transform", "transform-origin", "translate", "vertical-align", "visibility", "width", "word-spacing", "z-index", "zoom"]);
function optimizeGroupPlayer(players) {
  switch (players.length) {
    case 0:
      return new NoopAnimationPlayer();
    case 1:
      return players[0];
    default:
      return new AnimationGroupPlayer(players);
  }
}
function normalizeKeyframes$1(normalizer, keyframes, preStyles = /* @__PURE__ */ new Map(), postStyles = /* @__PURE__ */ new Map()) {
  const errors = [];
  const normalizedKeyframes = [];
  let previousOffset = -1;
  let previousKeyframe = null;
  keyframes.forEach((kf) => {
    const offset = kf.get("offset");
    const isSameOffset = offset == previousOffset;
    const normalizedKeyframe = isSameOffset && previousKeyframe || /* @__PURE__ */ new Map();
    kf.forEach((val, prop) => {
      let normalizedProp = prop;
      let normalizedValue = val;
      if (prop !== "offset") {
        normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
        switch (normalizedValue) {
          case \u0275PRE_STYLE:
            normalizedValue = preStyles.get(prop);
            break;
          case AUTO_STYLE:
            normalizedValue = postStyles.get(prop);
            break;
          default:
            normalizedValue = normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
            break;
        }
      }
      normalizedKeyframe.set(normalizedProp, normalizedValue);
    });
    if (!isSameOffset) {
      normalizedKeyframes.push(normalizedKeyframe);
    }
    previousKeyframe = normalizedKeyframe;
    previousOffset = offset;
  });
  if (errors.length) {
    throw animationFailed(errors);
  }
  return normalizedKeyframes;
}
function listenOnPlayer(player, eventName, event, callback) {
  switch (eventName) {
    case "start":
      player.onStart(() => callback(event && copyAnimationEvent(event, "start", player)));
      break;
    case "done":
      player.onDone(() => callback(event && copyAnimationEvent(event, "done", player)));
      break;
    case "destroy":
      player.onDestroy(() => callback(event && copyAnimationEvent(event, "destroy", player)));
      break;
  }
}
function copyAnimationEvent(e, phaseName, player) {
  const totalTime = player.totalTime;
  const disabled = player.disabled ? true : false;
  const event = makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, phaseName || e.phaseName, totalTime == void 0 ? e.totalTime : totalTime, disabled);
  const data = e["_data"];
  if (data != null) {
    event["_data"] = data;
  }
  return event;
}
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName = "", totalTime = 0, disabled) {
  return {
    element,
    triggerName,
    fromState,
    toState,
    phaseName,
    totalTime,
    disabled: !!disabled
  };
}
function getOrSetDefaultValue(map, key, defaultValue) {
  let value = map.get(key);
  if (!value) {
    map.set(key, value = defaultValue);
  }
  return value;
}
function parseTimelineCommand(command) {
  const separatorPos = command.indexOf(":");
  const id = command.substring(1, separatorPos);
  const action = command.slice(separatorPos + 1);
  return [id, action];
}
var documentElement = /* @__PURE__ */ (() => typeof document === "undefined" ? null : document.documentElement)();
function getParentElement(element) {
  const parent = element.parentNode || element.host || null;
  if (parent === documentElement) {
    return null;
  }
  return parent;
}
function containsVendorPrefix(prop) {
  return prop.substring(1, 6) == "ebkit";
}
var _CACHED_BODY = null;
var _IS_WEBKIT = false;
function validateStyleProperty(prop) {
  if (!_CACHED_BODY) {
    _CACHED_BODY = getBodyNode() || {};
    _IS_WEBKIT = _CACHED_BODY.style ? "WebkitAppearance" in _CACHED_BODY.style : false;
  }
  let result = true;
  if (_CACHED_BODY.style && !containsVendorPrefix(prop)) {
    result = prop in _CACHED_BODY.style;
    if (!result && _IS_WEBKIT) {
      const camelProp = "Webkit" + prop.charAt(0).toUpperCase() + prop.slice(1);
      result = camelProp in _CACHED_BODY.style;
    }
  }
  return result;
}
function validateWebAnimatableStyleProperty(prop) {
  return ANIMATABLE_PROP_SET.has(prop);
}
function getBodyNode() {
  if (typeof document != "undefined") {
    return document.body;
  }
  return null;
}
function containsElement(elm1, elm2) {
  while (elm2) {
    if (elm2 === elm1) {
      return true;
    }
    elm2 = getParentElement(elm2);
  }
  return false;
}
function invokeQuery(element, selector, multi) {
  if (multi) {
    return Array.from(element.querySelectorAll(selector));
  }
  const elem = element.querySelector(selector);
  return elem ? [elem] : [];
}
var ONE_SECOND = 1e3;
var SUBSTITUTION_EXPR_START = "{{";
var SUBSTITUTION_EXPR_END = "}}";
var ENTER_CLASSNAME = "ng-enter";
var LEAVE_CLASSNAME = "ng-leave";
var NG_TRIGGER_CLASSNAME = "ng-trigger";
var NG_TRIGGER_SELECTOR = ".ng-trigger";
var NG_ANIMATING_CLASSNAME = "ng-animating";
var NG_ANIMATING_SELECTOR = ".ng-animating";
function resolveTimingValue(value) {
  if (typeof value == "number") return value;
  const matches = value.match(/^(-?[\.\d]+)(m?s)/);
  if (!matches || matches.length < 2) return 0;
  return _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
}
function _convertTimeValueToMS(value, unit) {
  switch (unit) {
    case "s":
      return value * ONE_SECOND;
    default:
      return value;
  }
}
function resolveTiming(timings, errors, allowNegativeValues) {
  return timings.hasOwnProperty("duration") ? timings : parseTimeExpression(timings, errors, allowNegativeValues);
}
var PARSE_TIME_EXPRESSION_REGEX = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
function parseTimeExpression(exp, errors, allowNegativeValues) {
  let duration;
  let delay = 0;
  let easing = "";
  if (typeof exp === "string") {
    const matches = exp.match(PARSE_TIME_EXPRESSION_REGEX);
    if (matches === null) {
      errors.push(invalidTimingValue(exp));
      return {
        duration: 0,
        delay: 0,
        easing: ""
      };
    }
    duration = _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
    const delayMatch = matches[3];
    if (delayMatch != null) {
      delay = _convertTimeValueToMS(parseFloat(delayMatch), matches[4]);
    }
    const easingVal = matches[5];
    if (easingVal) {
      easing = easingVal;
    }
  } else {
    duration = exp;
  }
  if (!allowNegativeValues) {
    let containsErrors = false;
    let startIndex = errors.length;
    if (duration < 0) {
      errors.push(negativeStepValue());
      containsErrors = true;
    }
    if (delay < 0) {
      errors.push(negativeDelayValue());
      containsErrors = true;
    }
    if (containsErrors) {
      errors.splice(startIndex, 0, invalidTimingValue(exp));
    }
  }
  return {
    duration,
    delay,
    easing
  };
}
function normalizeKeyframes(keyframes) {
  if (!keyframes.length) {
    return [];
  }
  if (keyframes[0] instanceof Map) {
    return keyframes;
  }
  return keyframes.map((kf) => new Map(Object.entries(kf)));
}
function setStyles(element, styles, formerStyles) {
  styles.forEach((val, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    if (formerStyles && !formerStyles.has(prop)) {
      formerStyles.set(prop, element.style[camelProp]);
    }
    element.style[camelProp] = val;
  });
}
function eraseStyles(element, styles) {
  styles.forEach((_, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    element.style[camelProp] = "";
  });
}
function normalizeAnimationEntry(steps) {
  if (Array.isArray(steps)) {
    if (steps.length == 1) return steps[0];
    return sequence(steps);
  }
  return steps;
}
function validateStyleParams(value, options, errors) {
  const params = options.params || {};
  const matches = extractStyleParams(value);
  if (matches.length) {
    matches.forEach((varName) => {
      if (!params.hasOwnProperty(varName)) {
        errors.push(invalidStyleParams(varName));
      }
    });
  }
}
var PARAM_REGEX = /* @__PURE__ */ new RegExp(`${SUBSTITUTION_EXPR_START}\\s*(.+?)\\s*${SUBSTITUTION_EXPR_END}`, "g");
function extractStyleParams(value) {
  let params = [];
  if (typeof value === "string") {
    let match;
    while (match = PARAM_REGEX.exec(value)) {
      params.push(match[1]);
    }
    PARAM_REGEX.lastIndex = 0;
  }
  return params;
}
function interpolateParams(value, params, errors) {
  const original = `${value}`;
  const str = original.replace(PARAM_REGEX, (_, varName) => {
    let localVal = params[varName];
    if (localVal == null) {
      errors.push(invalidParamValue(varName));
      localVal = "";
    }
    return localVal.toString();
  });
  return str == original ? value : str;
}
var DASH_CASE_REGEXP = /-+([a-z0-9])/g;
function dashCaseToCamelCase(input) {
  return input.replace(DASH_CASE_REGEXP, (...m) => m[1].toUpperCase());
}
function camelCaseToDashCase(input) {
  return input.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function allowPreviousPlayerStylesMerge(duration, delay) {
  return duration === 0 || delay === 0;
}
function balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles) {
  if (previousStyles.size && keyframes.length) {
    let startingKeyframe = keyframes[0];
    let missingStyleProps = [];
    previousStyles.forEach((val, prop) => {
      if (!startingKeyframe.has(prop)) {
        missingStyleProps.push(prop);
      }
      startingKeyframe.set(prop, val);
    });
    if (missingStyleProps.length) {
      for (let i = 1; i < keyframes.length; i++) {
        let kf = keyframes[i];
        missingStyleProps.forEach((prop) => kf.set(prop, computeStyle(element, prop)));
      }
    }
  }
  return keyframes;
}
function visitDslNode(visitor, node, context) {
  switch (node.type) {
    case AnimationMetadataType.Trigger:
      return visitor.visitTrigger(node, context);
    case AnimationMetadataType.State:
      return visitor.visitState(node, context);
    case AnimationMetadataType.Transition:
      return visitor.visitTransition(node, context);
    case AnimationMetadataType.Sequence:
      return visitor.visitSequence(node, context);
    case AnimationMetadataType.Group:
      return visitor.visitGroup(node, context);
    case AnimationMetadataType.Animate:
      return visitor.visitAnimate(node, context);
    case AnimationMetadataType.Keyframes:
      return visitor.visitKeyframes(node, context);
    case AnimationMetadataType.Style:
      return visitor.visitStyle(node, context);
    case AnimationMetadataType.Reference:
      return visitor.visitReference(node, context);
    case AnimationMetadataType.AnimateChild:
      return visitor.visitAnimateChild(node, context);
    case AnimationMetadataType.AnimateRef:
      return visitor.visitAnimateRef(node, context);
    case AnimationMetadataType.Query:
      return visitor.visitQuery(node, context);
    case AnimationMetadataType.Stagger:
      return visitor.visitStagger(node, context);
    default:
      throw invalidNodeType(node.type);
  }
}
function computeStyle(element, prop) {
  return window.getComputedStyle(element)[prop];
}

// node_modules/@angular/animations/fesm2022/browser.mjs
/**
 * @license Angular v21.2.11
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var NoopAnimationDriver = class _NoopAnimationDriver {
  validateStyleProperty(prop) {
    return validateStyleProperty(prop);
  }
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  getParentElement(element) {
    return getParentElement(element);
  }
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  computeStyle(element, prop, defaultValue) {
    return defaultValue || "";
  }
  animate(element, keyframes, duration, delay, easing, previousPlayers = [], scrubberAccessRequested) {
    return new NoopAnimationPlayer(duration, delay);
  }
  static \u0275fac = function NoopAnimationDriver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationDriver)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NoopAnimationDriver,
    factory: _NoopAnimationDriver.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationDriver, [{
    type: Injectable
  }], null, null);
})();
var AnimationDriver = class {
  static NOOP = new NoopAnimationDriver();
};
var AnimationStyleNormalizer = class {
};
var DIMENSIONAL_PROP_SET = /* @__PURE__ */ new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]);
var WebAnimationsStyleNormalizer = class extends AnimationStyleNormalizer {
  normalizePropertyName(propertyName, errors) {
    return dashCaseToCamelCase(propertyName);
  }
  normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
    let unit = "";
    const strVal = value.toString().trim();
    if (DIMENSIONAL_PROP_SET.has(normalizedProperty) && value !== 0 && value !== "0") {
      if (typeof value === "number") {
        unit = "px";
      } else {
        const valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
        if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
          errors.push(invalidCssUnitValue(userProvidedProperty, value));
        }
      }
    }
    return strVal + unit;
  }
};
function createListOfWarnings(warnings) {
  const LINE_START2 = "\n - ";
  return `${LINE_START2}${warnings.filter(Boolean).map((warning) => warning).join(LINE_START2)}`;
}
function warnTriggerBuild(name, warnings) {
  console.warn(`The animation trigger "${name}" has built with the following warnings:${createListOfWarnings(warnings)}`);
}
function warnRegister(warnings) {
  console.warn(`Animation built with the following warnings:${createListOfWarnings(warnings)}`);
}
function pushUnrecognizedPropertiesWarning(warnings, props) {
  if (props.length) {
    warnings.push(`The following provided properties are not recognized: ${props.join(", ")}`);
  }
}
var ANY_STATE = "*";
function parseTransitionExpr(transitionValue, errors) {
  const expressions = [];
  if (typeof transitionValue == "string") {
    transitionValue.split(/\s*,\s*/).forEach((str) => parseInnerTransitionStr(str, expressions, errors));
  } else {
    expressions.push(transitionValue);
  }
  return expressions;
}
function parseInnerTransitionStr(eventStr, expressions, errors) {
  if (eventStr[0] == ":") {
    const result = parseAnimationAlias(eventStr, errors);
    if (typeof result == "function") {
      expressions.push(result);
      return;
    }
    eventStr = result;
  }
  const match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (match == null || match.length < 4) {
    errors.push(invalidExpression(eventStr));
    return expressions;
  }
  const fromState = match[1];
  const separator = match[2];
  const toState = match[3];
  expressions.push(makeLambdaFromStates(fromState, toState));
  const isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
  if (separator[0] == "<" && !isFullAnyStateExpr) {
    expressions.push(makeLambdaFromStates(toState, fromState));
  }
  return;
}
function parseAnimationAlias(alias, errors) {
  switch (alias) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (fromState, toState) => parseFloat(toState) > parseFloat(fromState);
    case ":decrement":
      return (fromState, toState) => parseFloat(toState) < parseFloat(fromState);
    default:
      errors.push(invalidTransitionAlias(alias));
      return "* => *";
  }
}
var TRUE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["true", "1"]);
var FALSE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["false", "0"]);
function makeLambdaFromStates(lhs, rhs) {
  const LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
  const RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
  return (fromState, toState) => {
    let lhsMatch = lhs == ANY_STATE || lhs == fromState;
    let rhsMatch = rhs == ANY_STATE || rhs == toState;
    if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === "boolean") {
      lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
    }
    if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === "boolean") {
      rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
    }
    return lhsMatch && rhsMatch;
  };
}
var SELF_TOKEN = ":self";
var SELF_TOKEN_REGEX = /* @__PURE__ */ new RegExp(`s*${SELF_TOKEN}s*,?`, "g");
function buildAnimationAst(driver, metadata, errors, warnings) {
  return new AnimationAstBuilderVisitor(driver).build(metadata, errors, warnings);
}
var ROOT_SELECTOR = "";
var AnimationAstBuilderVisitor = class {
  _driver;
  constructor(_driver) {
    this._driver = _driver;
  }
  build(metadata, errors, warnings) {
    const context = new AnimationAstBuilderContext(errors);
    this._resetContextStyleTimingState(context);
    const ast = visitDslNode(this, normalizeAnimationEntry(metadata), context);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (context.unsupportedCSSPropertiesFound.size) {
        pushUnrecognizedPropertiesWarning(warnings, [...context.unsupportedCSSPropertiesFound.keys()]);
      }
    }
    return ast;
  }
  _resetContextStyleTimingState(context) {
    context.currentQuerySelector = ROOT_SELECTOR;
    context.collectedStyles = /* @__PURE__ */ new Map();
    context.collectedStyles.set(ROOT_SELECTOR, /* @__PURE__ */ new Map());
    context.currentTime = 0;
  }
  visitTrigger(metadata, context) {
    let queryCount = context.queryCount = 0;
    let depCount = context.depCount = 0;
    const states = [];
    const transitions = [];
    if (metadata.name.charAt(0) == "@") {
      context.errors.push(invalidTrigger());
    }
    metadata.definitions.forEach((def) => {
      this._resetContextStyleTimingState(context);
      if (def.type == AnimationMetadataType.State) {
        const stateDef = def;
        const name = stateDef.name;
        name.toString().split(/\s*,\s*/).forEach((n) => {
          stateDef.name = n;
          states.push(this.visitState(stateDef, context));
        });
        stateDef.name = name;
      } else if (def.type == AnimationMetadataType.Transition) {
        const transition = this.visitTransition(def, context);
        queryCount += transition.queryCount;
        depCount += transition.depCount;
        transitions.push(transition);
      } else {
        context.errors.push(invalidDefinition());
      }
    });
    return {
      type: AnimationMetadataType.Trigger,
      name: metadata.name,
      states,
      transitions,
      queryCount,
      depCount,
      options: null
    };
  }
  visitState(metadata, context) {
    const styleAst = this.visitStyle(metadata.styles, context);
    const astParams = metadata.options && metadata.options.params || null;
    if (styleAst.containsDynamicStyles) {
      const missingSubs = /* @__PURE__ */ new Set();
      const params = astParams || {};
      styleAst.styles.forEach((style2) => {
        if (style2 instanceof Map) {
          style2.forEach((value) => {
            extractStyleParams(value).forEach((sub) => {
              if (!params.hasOwnProperty(sub)) {
                missingSubs.add(sub);
              }
            });
          });
        }
      });
      if (missingSubs.size) {
        context.errors.push(invalidState(metadata.name, [...missingSubs.values()]));
      }
    }
    return {
      type: AnimationMetadataType.State,
      name: metadata.name,
      style: styleAst,
      options: astParams ? {
        params: astParams
      } : null
    };
  }
  visitTransition(metadata, context) {
    context.queryCount = 0;
    context.depCount = 0;
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    const matchers = parseTransitionExpr(metadata.expr, context.errors);
    return {
      type: AnimationMetadataType.Transition,
      matchers,
      animation,
      queryCount: context.queryCount,
      depCount: context.depCount,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitSequence(metadata, context) {
    return {
      type: AnimationMetadataType.Sequence,
      steps: metadata.steps.map((s) => visitDslNode(this, s, context)),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitGroup(metadata, context) {
    const currentTime = context.currentTime;
    let furthestTime = 0;
    const steps = metadata.steps.map((step) => {
      context.currentTime = currentTime;
      const innerAst = visitDslNode(this, step, context);
      furthestTime = Math.max(furthestTime, context.currentTime);
      return innerAst;
    });
    context.currentTime = furthestTime;
    return {
      type: AnimationMetadataType.Group,
      steps,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimate(metadata, context) {
    const timingAst = constructTimingAst(metadata.timings, context.errors);
    context.currentAnimateTimings = timingAst;
    let styleAst;
    let styleMetadata = metadata.styles ? metadata.styles : style({});
    if (styleMetadata.type == AnimationMetadataType.Keyframes) {
      styleAst = this.visitKeyframes(styleMetadata, context);
    } else {
      let styleMetadata2 = metadata.styles;
      let isEmpty = false;
      if (!styleMetadata2) {
        isEmpty = true;
        const newStyleData = {};
        if (timingAst.easing) {
          newStyleData["easing"] = timingAst.easing;
        }
        styleMetadata2 = style(newStyleData);
      }
      context.currentTime += timingAst.duration + timingAst.delay;
      const _styleAst = this.visitStyle(styleMetadata2, context);
      _styleAst.isEmptyStep = isEmpty;
      styleAst = _styleAst;
    }
    context.currentAnimateTimings = null;
    return {
      type: AnimationMetadataType.Animate,
      timings: timingAst,
      style: styleAst,
      options: null
    };
  }
  visitStyle(metadata, context) {
    const ast = this._makeStyleAst(metadata, context);
    this._validateStyleAst(ast, context);
    return ast;
  }
  _makeStyleAst(metadata, context) {
    const styles = [];
    const metadataStyles = Array.isArray(metadata.styles) ? metadata.styles : [metadata.styles];
    for (let styleTuple of metadataStyles) {
      if (typeof styleTuple === "string") {
        if (styleTuple === AUTO_STYLE) {
          styles.push(styleTuple);
        } else {
          context.errors.push(invalidStyleValue(styleTuple));
        }
      } else {
        styles.push(new Map(Object.entries(styleTuple)));
      }
    }
    let containsDynamicStyles = false;
    let collectedEasing = null;
    styles.forEach((styleData) => {
      if (styleData instanceof Map) {
        if (styleData.has("easing")) {
          collectedEasing = styleData.get("easing");
          styleData.delete("easing");
        }
        if (!containsDynamicStyles) {
          for (let value of styleData.values()) {
            if (value.toString().indexOf(SUBSTITUTION_EXPR_START) >= 0) {
              containsDynamicStyles = true;
              break;
            }
          }
        }
      }
    });
    return {
      type: AnimationMetadataType.Style,
      styles,
      easing: collectedEasing,
      offset: metadata.offset,
      containsDynamicStyles,
      options: null
    };
  }
  _validateStyleAst(ast, context) {
    const timings = context.currentAnimateTimings;
    let endTime = context.currentTime;
    let startTime = context.currentTime;
    if (timings && startTime > 0) {
      startTime -= timings.duration + timings.delay;
    }
    ast.styles.forEach((tuple) => {
      if (typeof tuple === "string") return;
      tuple.forEach((value, prop) => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (!this._driver.validateStyleProperty(prop)) {
            tuple.delete(prop);
            context.unsupportedCSSPropertiesFound.add(prop);
            return;
          }
        }
        const collectedStyles = context.collectedStyles.get(context.currentQuerySelector);
        const collectedEntry = collectedStyles.get(prop);
        let updateCollectedStyle = true;
        if (collectedEntry) {
          if (startTime != endTime && startTime >= collectedEntry.startTime && endTime <= collectedEntry.endTime) {
            context.errors.push(invalidParallelAnimation(prop, collectedEntry.startTime, collectedEntry.endTime, startTime, endTime));
            updateCollectedStyle = false;
          }
          startTime = collectedEntry.startTime;
        }
        if (updateCollectedStyle) {
          collectedStyles.set(prop, {
            startTime,
            endTime
          });
        }
        if (context.options) {
          validateStyleParams(value, context.options, context.errors);
        }
      });
    });
  }
  visitKeyframes(metadata, context) {
    const ast = {
      type: AnimationMetadataType.Keyframes,
      styles: [],
      options: null
    };
    if (!context.currentAnimateTimings) {
      context.errors.push(invalidKeyframes());
      return ast;
    }
    const MAX_KEYFRAME_OFFSET = 1;
    let totalKeyframesWithOffsets = 0;
    const offsets = [];
    let offsetsOutOfOrder = false;
    let keyframesOutOfRange = false;
    let previousOffset = 0;
    const keyframes = metadata.steps.map((styles) => {
      const style2 = this._makeStyleAst(styles, context);
      let offsetVal = style2.offset != null ? style2.offset : consumeOffset(style2.styles);
      let offset = 0;
      if (offsetVal != null) {
        totalKeyframesWithOffsets++;
        offset = style2.offset = offsetVal;
      }
      keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
      offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
      previousOffset = offset;
      offsets.push(offset);
      return style2;
    });
    if (keyframesOutOfRange) {
      context.errors.push(invalidOffset());
    }
    if (offsetsOutOfOrder) {
      context.errors.push(keyframeOffsetsOutOfOrder());
    }
    const length = metadata.steps.length;
    let generatedOffset = 0;
    if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
      context.errors.push(keyframesMissingOffsets());
    } else if (totalKeyframesWithOffsets == 0) {
      generatedOffset = MAX_KEYFRAME_OFFSET / (length - 1);
    }
    const limit = length - 1;
    const currentTime = context.currentTime;
    const currentAnimateTimings = context.currentAnimateTimings;
    const animateDuration = currentAnimateTimings.duration;
    keyframes.forEach((kf, i) => {
      const offset = generatedOffset > 0 ? i == limit ? 1 : generatedOffset * i : offsets[i];
      const durationUpToThisFrame = offset * animateDuration;
      context.currentTime = currentTime + currentAnimateTimings.delay + durationUpToThisFrame;
      currentAnimateTimings.duration = durationUpToThisFrame;
      this._validateStyleAst(kf, context);
      kf.offset = offset;
      ast.styles.push(kf);
    });
    return ast;
  }
  visitReference(metadata, context) {
    return {
      type: AnimationMetadataType.Reference,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateChild(metadata, context) {
    context.depCount++;
    return {
      type: AnimationMetadataType.AnimateChild,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateRef(metadata, context) {
    return {
      type: AnimationMetadataType.AnimateRef,
      animation: this.visitReference(metadata.animation, context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitQuery(metadata, context) {
    const parentSelector = context.currentQuerySelector;
    const options = metadata.options || {};
    context.queryCount++;
    context.currentQuery = metadata;
    const [selector, includeSelf] = normalizeSelector(metadata.selector);
    context.currentQuerySelector = parentSelector.length ? parentSelector + " " + selector : selector;
    getOrSetDefaultValue(context.collectedStyles, context.currentQuerySelector, /* @__PURE__ */ new Map());
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    context.currentQuery = null;
    context.currentQuerySelector = parentSelector;
    return {
      type: AnimationMetadataType.Query,
      selector,
      limit: options.limit || 0,
      optional: !!options.optional,
      includeSelf,
      animation,
      originalSelector: metadata.selector,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitStagger(metadata, context) {
    if (!context.currentQuery) {
      context.errors.push(invalidStagger());
    }
    const timings = metadata.timings === "full" ? {
      duration: 0,
      delay: 0,
      easing: "full"
    } : resolveTiming(metadata.timings, context.errors, true);
    return {
      type: AnimationMetadataType.Stagger,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      timings,
      options: null
    };
  }
};
function normalizeSelector(selector) {
  const hasAmpersand = selector.split(/\s*,\s*/).find((token) => token == SELF_TOKEN) ? true : false;
  if (hasAmpersand) {
    selector = selector.replace(SELF_TOKEN_REGEX, "");
  }
  selector = selector.replace(/@\*/g, NG_TRIGGER_SELECTOR).replace(/@\w+/g, (match) => NG_TRIGGER_SELECTOR + "-" + match.slice(1)).replace(/:animating/g, NG_ANIMATING_SELECTOR);
  return [selector, hasAmpersand];
}
function normalizeParams(obj) {
  return obj ? __spreadValues({}, obj) : null;
}
var AnimationAstBuilderContext = class {
  errors;
  queryCount = 0;
  depCount = 0;
  currentTransition = null;
  currentQuery = null;
  currentQuerySelector = null;
  currentAnimateTimings = null;
  currentTime = 0;
  collectedStyles = /* @__PURE__ */ new Map();
  options = null;
  unsupportedCSSPropertiesFound = /* @__PURE__ */ new Set();
  constructor(errors) {
    this.errors = errors;
  }
};
function consumeOffset(styles) {
  if (typeof styles == "string") return null;
  let offset = null;
  if (Array.isArray(styles)) {
    styles.forEach((styleTuple) => {
      if (styleTuple instanceof Map && styleTuple.has("offset")) {
        const obj = styleTuple;
        offset = parseFloat(obj.get("offset"));
        obj.delete("offset");
      }
    });
  } else if (styles instanceof Map && styles.has("offset")) {
    const obj = styles;
    offset = parseFloat(obj.get("offset"));
    obj.delete("offset");
  }
  return offset;
}
function constructTimingAst(value, errors) {
  if (value.hasOwnProperty("duration")) {
    return value;
  }
  if (typeof value == "number") {
    const duration = resolveTiming(value, errors).duration;
    return makeTimingAst(duration, 0, "");
  }
  const strValue = value;
  const isDynamic = strValue.split(/\s+/).some((v) => v.charAt(0) == "{" && v.charAt(1) == "{");
  if (isDynamic) {
    const ast = makeTimingAst(0, 0, "");
    ast.dynamic = true;
    ast.strValue = strValue;
    return ast;
  }
  const timings = resolveTiming(strValue, errors);
  return makeTimingAst(timings.duration, timings.delay, timings.easing);
}
function normalizeAnimationOptions(options) {
  if (options) {
    options = __spreadValues({}, options);
    if (options["params"]) {
      options["params"] = normalizeParams(options["params"]);
    }
  } else {
    options = {};
  }
  return options;
}
function makeTimingAst(duration, delay, easing) {
  return {
    duration,
    delay,
    easing
  };
}
function createTimelineInstruction(element, keyframes, preStyleProps, postStyleProps, duration, delay, easing = null, subTimeline = false) {
  return {
    type: 1,
    element,
    keyframes,
    preStyleProps,
    postStyleProps,
    duration,
    delay,
    totalTime: duration + delay,
    easing,
    subTimeline
  };
}
var ElementInstructionMap = class {
  _map = /* @__PURE__ */ new Map();
  get(element) {
    return this._map.get(element) || [];
  }
  append(element, instructions) {
    let existingInstructions = this._map.get(element);
    if (!existingInstructions) {
      this._map.set(element, existingInstructions = []);
    }
    existingInstructions.push(...instructions);
  }
  has(element) {
    return this._map.has(element);
  }
  clear() {
    this._map.clear();
  }
};
var ONE_FRAME_IN_MILLISECONDS = 1;
var ENTER_TOKEN = ":enter";
var ENTER_TOKEN_REGEX = /* @__PURE__ */ new RegExp(ENTER_TOKEN, "g");
var LEAVE_TOKEN = ":leave";
var LEAVE_TOKEN_REGEX = /* @__PURE__ */ new RegExp(LEAVE_TOKEN, "g");
function buildAnimationTimelines(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles = /* @__PURE__ */ new Map(), finalStyles = /* @__PURE__ */ new Map(), options, subInstructions, errors = []) {
  return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors);
}
var AnimationTimelineBuilderVisitor = class {
  buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors = []) {
    subInstructions = subInstructions || new ElementInstructionMap();
    const context = new AnimationTimelineContext(driver, rootElement, subInstructions, enterClassName, leaveClassName, errors, []);
    context.options = options;
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    context.currentTimeline.delayNextStep(delay);
    context.currentTimeline.setStyles([startingStyles], null, context.errors, options);
    visitDslNode(this, ast, context);
    const timelines = context.timelines.filter((timeline) => timeline.containsAnimation());
    if (timelines.length && finalStyles.size) {
      let lastRootTimeline;
      for (let i = timelines.length - 1; i >= 0; i--) {
        const timeline = timelines[i];
        if (timeline.element === rootElement) {
          lastRootTimeline = timeline;
          break;
        }
      }
      if (lastRootTimeline && !lastRootTimeline.allowOnlyTimelineStyles()) {
        lastRootTimeline.setStyles([finalStyles], null, context.errors, options);
      }
    }
    return timelines.length ? timelines.map((timeline) => timeline.buildKeyframes()) : [createTimelineInstruction(rootElement, [], [], [], 0, delay, "", false)];
  }
  visitTrigger(ast, context) {
  }
  visitState(ast, context) {
  }
  visitTransition(ast, context) {
  }
  visitAnimateChild(ast, context) {
    const elementInstructions = context.subInstructions.get(context.element);
    if (elementInstructions) {
      const innerContext = context.createSubContext(ast.options);
      const startTime = context.currentTimeline.currentTime;
      const endTime = this._visitSubInstructions(elementInstructions, innerContext, innerContext.options);
      if (startTime != endTime) {
        context.transformIntoNewTimeline(endTime);
      }
    }
    context.previousNode = ast;
  }
  visitAnimateRef(ast, context) {
    const innerContext = context.createSubContext(ast.options);
    innerContext.transformIntoNewTimeline();
    this._applyAnimationRefDelays([ast.options, ast.animation.options], context, innerContext);
    this.visitReference(ast.animation, innerContext);
    context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
    context.previousNode = ast;
  }
  _applyAnimationRefDelays(animationsRefsOptions, context, innerContext) {
    for (const animationRefOptions of animationsRefsOptions) {
      const animationDelay = animationRefOptions?.delay;
      if (animationDelay) {
        const animationDelayValue = typeof animationDelay === "number" ? animationDelay : resolveTimingValue(interpolateParams(animationDelay, animationRefOptions?.params ?? {}, context.errors));
        innerContext.delayNextStep(animationDelayValue);
      }
    }
  }
  _visitSubInstructions(instructions, context, options) {
    const startTime = context.currentTimeline.currentTime;
    let furthestTime = startTime;
    const duration = options.duration != null ? resolveTimingValue(options.duration) : null;
    const delay = options.delay != null ? resolveTimingValue(options.delay) : null;
    if (duration !== 0) {
      instructions.forEach((instruction) => {
        const instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay);
        furthestTime = Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
      });
    }
    return furthestTime;
  }
  visitReference(ast, context) {
    context.updateOptions(ast.options, true);
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
  }
  visitSequence(ast, context) {
    const subContextCount = context.subContextCount;
    let ctx = context;
    const options = ast.options;
    if (options && (options.params || options.delay)) {
      ctx = context.createSubContext(options);
      ctx.transformIntoNewTimeline();
      if (options.delay != null) {
        if (ctx.previousNode.type == AnimationMetadataType.Style) {
          ctx.currentTimeline.snapshotCurrentStyles();
          ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }
        const delay = resolveTimingValue(options.delay);
        ctx.delayNextStep(delay);
      }
    }
    if (ast.steps.length) {
      ast.steps.forEach((s) => visitDslNode(this, s, ctx));
      ctx.currentTimeline.applyStylesToKeyframe();
      if (ctx.subContextCount > subContextCount) {
        ctx.transformIntoNewTimeline();
      }
    }
    context.previousNode = ast;
  }
  visitGroup(ast, context) {
    const innerTimelines = [];
    let furthestTime = context.currentTimeline.currentTime;
    const delay = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
    ast.steps.forEach((s) => {
      const innerContext = context.createSubContext(ast.options);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      visitDslNode(this, s, innerContext);
      furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
      innerTimelines.push(innerContext.currentTimeline);
    });
    innerTimelines.forEach((timeline) => context.currentTimeline.mergeTimelineCollectedStyles(timeline));
    context.transformIntoNewTimeline(furthestTime);
    context.previousNode = ast;
  }
  _visitTiming(ast, context) {
    if (ast.dynamic) {
      const strValue = ast.strValue;
      const timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
      return resolveTiming(timingValue, context.errors);
    } else {
      return {
        duration: ast.duration,
        delay: ast.delay,
        easing: ast.easing
      };
    }
  }
  visitAnimate(ast, context) {
    const timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);
    const timeline = context.currentTimeline;
    if (timings.delay) {
      context.incrementTime(timings.delay);
      timeline.snapshotCurrentStyles();
    }
    const style2 = ast.style;
    if (style2.type == AnimationMetadataType.Keyframes) {
      this.visitKeyframes(style2, context);
    } else {
      context.incrementTime(timings.duration);
      this.visitStyle(style2, context);
      timeline.applyStylesToKeyframe();
    }
    context.currentAnimateTimings = null;
    context.previousNode = ast;
  }
  visitStyle(ast, context) {
    const timeline = context.currentTimeline;
    const timings = context.currentAnimateTimings;
    if (!timings && timeline.hasCurrentStyleProperties()) {
      timeline.forwardFrame();
    }
    const easing = timings && timings.easing || ast.easing;
    if (ast.isEmptyStep) {
      timeline.applyEmptyStep(easing);
    } else {
      timeline.setStyles(ast.styles, easing, context.errors, context.options);
    }
    context.previousNode = ast;
  }
  visitKeyframes(ast, context) {
    const currentAnimateTimings = context.currentAnimateTimings;
    const startTime = context.currentTimeline.duration;
    const duration = currentAnimateTimings.duration;
    const innerContext = context.createSubContext();
    const innerTimeline = innerContext.currentTimeline;
    innerTimeline.easing = currentAnimateTimings.easing;
    ast.styles.forEach((step) => {
      const offset = step.offset || 0;
      innerTimeline.forwardTime(offset * duration);
      innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
      innerTimeline.applyStylesToKeyframe();
    });
    context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
    context.transformIntoNewTimeline(startTime + duration);
    context.previousNode = ast;
  }
  visitQuery(ast, context) {
    const startTime = context.currentTimeline.currentTime;
    const options = ast.options || {};
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    if (delay && (context.previousNode.type === AnimationMetadataType.Style || startTime == 0 && context.currentTimeline.hasCurrentStyleProperties())) {
      context.currentTimeline.snapshotCurrentStyles();
      context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    }
    let furthestTime = startTime;
    const elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options.optional ? true : false, context.errors);
    context.currentQueryTotal = elms.length;
    let sameElementTimeline = null;
    elms.forEach((element, i) => {
      context.currentQueryIndex = i;
      const innerContext = context.createSubContext(ast.options, element);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      if (element === context.element) {
        sameElementTimeline = innerContext.currentTimeline;
      }
      visitDslNode(this, ast.animation, innerContext);
      innerContext.currentTimeline.applyStylesToKeyframe();
      const endTime = innerContext.currentTimeline.currentTime;
      furthestTime = Math.max(furthestTime, endTime);
    });
    context.currentQueryIndex = 0;
    context.currentQueryTotal = 0;
    context.transformIntoNewTimeline(furthestTime);
    if (sameElementTimeline) {
      context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
      context.currentTimeline.snapshotCurrentStyles();
    }
    context.previousNode = ast;
  }
  visitStagger(ast, context) {
    const parentContext = context.parentContext;
    const tl = context.currentTimeline;
    const timings = ast.timings;
    const duration = Math.abs(timings.duration);
    const maxTime = duration * (context.currentQueryTotal - 1);
    let delay = duration * context.currentQueryIndex;
    let staggerTransformer = timings.duration < 0 ? "reverse" : timings.easing;
    switch (staggerTransformer) {
      case "reverse":
        delay = maxTime - delay;
        break;
      case "full":
        delay = parentContext.currentStaggerTime;
        break;
    }
    const timeline = context.currentTimeline;
    if (delay) {
      timeline.delayNextStep(delay);
    }
    const startingTime = timeline.currentTime;
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
    parentContext.currentStaggerTime = tl.currentTime - startingTime + (tl.startTime - parentContext.currentTimeline.startTime);
  }
};
var DEFAULT_NOOP_PREVIOUS_NODE = {};
var AnimationTimelineContext = class _AnimationTimelineContext {
  _driver;
  element;
  subInstructions;
  _enterClassName;
  _leaveClassName;
  errors;
  timelines;
  parentContext = null;
  currentTimeline;
  currentAnimateTimings = null;
  previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
  subContextCount = 0;
  options = {};
  currentQueryIndex = 0;
  currentQueryTotal = 0;
  currentStaggerTime = 0;
  constructor(_driver, element, subInstructions, _enterClassName, _leaveClassName, errors, timelines, initialTimeline) {
    this._driver = _driver;
    this.element = element;
    this.subInstructions = subInstructions;
    this._enterClassName = _enterClassName;
    this._leaveClassName = _leaveClassName;
    this.errors = errors;
    this.timelines = timelines;
    this.currentTimeline = initialTimeline || new TimelineBuilder(this._driver, element, 0);
    timelines.push(this.currentTimeline);
  }
  get params() {
    return this.options.params;
  }
  updateOptions(options, skipIfExists) {
    if (!options) return;
    const newOptions = options;
    let optionsToUpdate = this.options;
    if (newOptions.duration != null) {
      optionsToUpdate.duration = resolveTimingValue(newOptions.duration);
    }
    if (newOptions.delay != null) {
      optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
    }
    const newParams = newOptions.params;
    if (newParams) {
      let paramsToUpdate = optionsToUpdate.params;
      if (!paramsToUpdate) {
        paramsToUpdate = this.options.params = {};
      }
      Object.keys(newParams).forEach((name) => {
        if (!skipIfExists || !paramsToUpdate.hasOwnProperty(name)) {
          paramsToUpdate[name] = interpolateParams(newParams[name], paramsToUpdate, this.errors);
        }
      });
    }
  }
  _copyOptions() {
    const options = {};
    if (this.options) {
      const oldParams = this.options.params;
      if (oldParams) {
        const params = options["params"] = {};
        Object.keys(oldParams).forEach((name) => {
          params[name] = oldParams[name];
        });
      }
    }
    return options;
  }
  createSubContext(options = null, element, newTime) {
    const target = element || this.element;
    const context = new _AnimationTimelineContext(this._driver, target, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
    context.previousNode = this.previousNode;
    context.currentAnimateTimings = this.currentAnimateTimings;
    context.options = this._copyOptions();
    context.updateOptions(options);
    context.currentQueryIndex = this.currentQueryIndex;
    context.currentQueryTotal = this.currentQueryTotal;
    context.parentContext = this;
    this.subContextCount++;
    return context;
  }
  transformIntoNewTimeline(newTime) {
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
    this.timelines.push(this.currentTimeline);
    return this.currentTimeline;
  }
  appendInstructionToTimeline(instruction, duration, delay) {
    const updatedTimings = {
      duration: duration != null ? duration : instruction.duration,
      delay: this.currentTimeline.currentTime + (delay != null ? delay : 0) + instruction.delay,
      easing: ""
    };
    const builder = new SubTimelineBuilder(this._driver, instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
    this.timelines.push(builder);
    return updatedTimings;
  }
  incrementTime(time) {
    this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
  }
  delayNextStep(delay) {
    if (delay > 0) {
      this.currentTimeline.delayNextStep(delay);
    }
  }
  invokeQuery(selector, originalSelector, limit, includeSelf, optional, errors) {
    let results = [];
    if (includeSelf) {
      results.push(this.element);
    }
    if (selector.length > 0) {
      selector = selector.replace(ENTER_TOKEN_REGEX, "." + this._enterClassName);
      selector = selector.replace(LEAVE_TOKEN_REGEX, "." + this._leaveClassName);
      const multi = limit != 1;
      let elements = this._driver.query(this.element, selector, multi);
      if (limit !== 0) {
        elements = limit < 0 ? elements.slice(elements.length + limit, elements.length) : elements.slice(0, limit);
      }
      results.push(...elements);
    }
    if (!optional && results.length == 0) {
      errors.push(invalidQuery(originalSelector));
    }
    return results;
  }
};
var TimelineBuilder = class _TimelineBuilder {
  _driver;
  element;
  startTime;
  _elementTimelineStylesLookup;
  duration = 0;
  easing = null;
  _previousKeyframe = /* @__PURE__ */ new Map();
  _currentKeyframe = /* @__PURE__ */ new Map();
  _keyframes = /* @__PURE__ */ new Map();
  _styleSummary = /* @__PURE__ */ new Map();
  _localTimelineStyles = /* @__PURE__ */ new Map();
  _globalTimelineStyles;
  _pendingStyles = /* @__PURE__ */ new Map();
  _backFill = /* @__PURE__ */ new Map();
  _currentEmptyStepKeyframe = null;
  constructor(_driver, element, startTime, _elementTimelineStylesLookup) {
    this._driver = _driver;
    this.element = element;
    this.startTime = startTime;
    this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
    if (!this._elementTimelineStylesLookup) {
      this._elementTimelineStylesLookup = /* @__PURE__ */ new Map();
    }
    this._globalTimelineStyles = this._elementTimelineStylesLookup.get(element);
    if (!this._globalTimelineStyles) {
      this._globalTimelineStyles = this._localTimelineStyles;
      this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
    }
    this._loadKeyframe();
  }
  containsAnimation() {
    switch (this._keyframes.size) {
      case 0:
        return false;
      case 1:
        return this.hasCurrentStyleProperties();
      default:
        return true;
    }
  }
  hasCurrentStyleProperties() {
    return this._currentKeyframe.size > 0;
  }
  get currentTime() {
    return this.startTime + this.duration;
  }
  delayNextStep(delay) {
    const hasPreStyleStep = this._keyframes.size === 1 && this._pendingStyles.size;
    if (this.duration || hasPreStyleStep) {
      this.forwardTime(this.currentTime + delay);
      if (hasPreStyleStep) {
        this.snapshotCurrentStyles();
      }
    } else {
      this.startTime += delay;
    }
  }
  fork(element, currentTime) {
    this.applyStylesToKeyframe();
    return new _TimelineBuilder(this._driver, element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
  }
  _loadKeyframe() {
    if (this._currentKeyframe) {
      this._previousKeyframe = this._currentKeyframe;
    }
    this._currentKeyframe = this._keyframes.get(this.duration);
    if (!this._currentKeyframe) {
      this._currentKeyframe = /* @__PURE__ */ new Map();
      this._keyframes.set(this.duration, this._currentKeyframe);
    }
  }
  forwardFrame() {
    this.duration += ONE_FRAME_IN_MILLISECONDS;
    this._loadKeyframe();
  }
  forwardTime(time) {
    this.applyStylesToKeyframe();
    this.duration = time;
    this._loadKeyframe();
  }
  _updateStyle(prop, value) {
    this._localTimelineStyles.set(prop, value);
    this._globalTimelineStyles.set(prop, value);
    this._styleSummary.set(prop, {
      time: this.currentTime,
      value
    });
  }
  allowOnlyTimelineStyles() {
    return this._currentEmptyStepKeyframe !== this._currentKeyframe;
  }
  applyEmptyStep(easing) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    for (let [prop, value] of this._globalTimelineStyles) {
      this._backFill.set(prop, value || AUTO_STYLE);
      this._currentKeyframe.set(prop, AUTO_STYLE);
    }
    this._currentEmptyStepKeyframe = this._currentKeyframe;
  }
  setStyles(input, easing, errors, options) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    const params = options && options.params || {};
    const styles = flattenStyles(input, this._globalTimelineStyles);
    for (let [prop, value] of styles) {
      const val = interpolateParams(value, params, errors);
      this._pendingStyles.set(prop, val);
      if (!this._localTimelineStyles.has(prop)) {
        this._backFill.set(prop, this._globalTimelineStyles.get(prop) ?? AUTO_STYLE);
      }
      this._updateStyle(prop, val);
    }
  }
  applyStylesToKeyframe() {
    if (this._pendingStyles.size == 0) return;
    this._pendingStyles.forEach((val, prop) => {
      this._currentKeyframe.set(prop, val);
    });
    this._pendingStyles.clear();
    this._localTimelineStyles.forEach((val, prop) => {
      if (!this._currentKeyframe.has(prop)) {
        this._currentKeyframe.set(prop, val);
      }
    });
  }
  snapshotCurrentStyles() {
    for (let [prop, val] of this._localTimelineStyles) {
      this._pendingStyles.set(prop, val);
      this._updateStyle(prop, val);
    }
  }
  getFinalKeyframe() {
    return this._keyframes.get(this.duration);
  }
  get properties() {
    const properties = [];
    for (let prop in this._currentKeyframe) {
      properties.push(prop);
    }
    return properties;
  }
  mergeTimelineCollectedStyles(timeline) {
    timeline._styleSummary.forEach((details1, prop) => {
      const details0 = this._styleSummary.get(prop);
      if (!details0 || details1.time > details0.time) {
        this._updateStyle(prop, details1.value);
      }
    });
  }
  buildKeyframes() {
    this.applyStylesToKeyframe();
    const preStyleProps = /* @__PURE__ */ new Set();
    const postStyleProps = /* @__PURE__ */ new Set();
    const isEmpty = this._keyframes.size === 1 && this.duration === 0;
    let finalKeyframes = [];
    this._keyframes.forEach((keyframe, time) => {
      const finalKeyframe = new Map([...this._backFill, ...keyframe]);
      finalKeyframe.forEach((value, prop) => {
        if (value === \u0275PRE_STYLE) {
          preStyleProps.add(prop);
        } else if (value === AUTO_STYLE) {
          postStyleProps.add(prop);
        }
      });
      if (!isEmpty) {
        finalKeyframe.set("offset", time / this.duration);
      }
      finalKeyframes.push(finalKeyframe);
    });
    const preProps = [...preStyleProps.values()];
    const postProps = [...postStyleProps.values()];
    if (isEmpty) {
      const kf0 = finalKeyframes[0];
      const kf1 = new Map(kf0);
      kf0.set("offset", 0);
      kf1.set("offset", 1);
      finalKeyframes = [kf0, kf1];
    }
    return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
  }
};
var SubTimelineBuilder = class extends TimelineBuilder {
  keyframes;
  preStyleProps;
  postStyleProps;
  _stretchStartingKeyframe;
  timings;
  constructor(driver, element, keyframes, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe = false) {
    super(driver, element, timings.delay);
    this.keyframes = keyframes;
    this.preStyleProps = preStyleProps;
    this.postStyleProps = postStyleProps;
    this._stretchStartingKeyframe = _stretchStartingKeyframe;
    this.timings = {
      duration: timings.duration,
      delay: timings.delay,
      easing: timings.easing
    };
  }
  containsAnimation() {
    return this.keyframes.length > 1;
  }
  buildKeyframes() {
    let keyframes = this.keyframes;
    let {
      delay,
      duration,
      easing
    } = this.timings;
    if (this._stretchStartingKeyframe && delay) {
      const newKeyframes = [];
      const totalTime = duration + delay;
      const startingGap = delay / totalTime;
      const newFirstKeyframe = new Map(keyframes[0]);
      newFirstKeyframe.set("offset", 0);
      newKeyframes.push(newFirstKeyframe);
      const oldFirstKeyframe = new Map(keyframes[0]);
      oldFirstKeyframe.set("offset", roundOffset(startingGap));
      newKeyframes.push(oldFirstKeyframe);
      const limit = keyframes.length - 1;
      for (let i = 1; i <= limit; i++) {
        let kf = new Map(keyframes[i]);
        const oldOffset = kf.get("offset");
        const timeAtKeyframe = delay + oldOffset * duration;
        kf.set("offset", roundOffset(timeAtKeyframe / totalTime));
        newKeyframes.push(kf);
      }
      duration = totalTime;
      delay = 0;
      easing = "";
      keyframes = newKeyframes;
    }
    return createTimelineInstruction(this.element, keyframes, this.preStyleProps, this.postStyleProps, duration, delay, easing, true);
  }
};
function roundOffset(offset, decimalPoints = 3) {
  const mult = Math.pow(10, decimalPoints - 1);
  return Math.round(offset * mult) / mult;
}
function flattenStyles(input, allStyles) {
  const styles = /* @__PURE__ */ new Map();
  let allProperties;
  input.forEach((token) => {
    if (token === "*") {
      allProperties ??= allStyles.keys();
      for (let prop of allProperties) {
        styles.set(prop, AUTO_STYLE);
      }
    } else {
      for (let [prop, val] of token) {
        styles.set(prop, val);
      }
    }
  });
  return styles;
}
function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
  return {
    type: 0,
    element,
    triggerName,
    isRemovalTransition,
    fromState,
    fromStyles,
    toState,
    toStyles,
    timelines,
    queriedElements,
    preStyleProps,
    postStyleProps,
    totalTime,
    errors
  };
}
var EMPTY_OBJECT = {};
var AnimationTransitionFactory = class {
  _triggerName;
  ast;
  _stateStyles;
  constructor(_triggerName, ast, _stateStyles) {
    this._triggerName = _triggerName;
    this.ast = ast;
    this._stateStyles = _stateStyles;
  }
  match(currentState, nextState, element, params) {
    return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState, element, params);
  }
  buildStyles(stateName, params, errors) {
    let styler = this._stateStyles.get("*");
    if (stateName !== void 0) {
      styler = this._stateStyles.get(stateName?.toString()) || styler;
    }
    return styler ? styler.buildStyles(params, errors) : /* @__PURE__ */ new Map();
  }
  build(driver, element, currentState, nextState, enterClassName, leaveClassName, currentOptions, nextOptions, subInstructions, skipAstBuild) {
    const errors = [];
    const transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
    const currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
    const currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
    const nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
    const nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
    const queriedElements = /* @__PURE__ */ new Set();
    const preStyleMap = /* @__PURE__ */ new Map();
    const postStyleMap = /* @__PURE__ */ new Map();
    const isRemoval = nextState === "void";
    const animationOptions = {
      params: applyParamDefaults(nextAnimationParams, transitionAnimationParams),
      delay: this.ast.options?.delay
    };
    const timelines = skipAstBuild ? [] : buildAnimationTimelines(driver, element, this.ast.animation, enterClassName, leaveClassName, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
    let totalTime = 0;
    timelines.forEach((tl) => {
      totalTime = Math.max(tl.duration + tl.delay, totalTime);
    });
    if (errors.length) {
      return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, totalTime, errors);
    }
    timelines.forEach((tl) => {
      const elm = tl.element;
      const preProps = getOrSetDefaultValue(preStyleMap, elm, /* @__PURE__ */ new Set());
      tl.preStyleProps.forEach((prop) => preProps.add(prop));
      const postProps = getOrSetDefaultValue(postStyleMap, elm, /* @__PURE__ */ new Set());
      tl.postStyleProps.forEach((prop) => postProps.add(prop));
      if (elm !== element) {
        queriedElements.add(elm);
      }
    });
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkNonAnimatableInTimelines(timelines, this._triggerName, driver);
    }
    return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, [...queriedElements.values()], preStyleMap, postStyleMap, totalTime);
  }
};
function checkNonAnimatableInTimelines(timelines, triggerName, driver) {
  if (!driver.validateAnimatableStyleProperty) {
    return;
  }
  const allowedNonAnimatableProps = /* @__PURE__ */ new Set(["easing"]);
  const invalidNonAnimatableProps = /* @__PURE__ */ new Set();
  timelines.forEach(({
    keyframes
  }) => {
    const nonAnimatablePropsInitialValues = /* @__PURE__ */ new Map();
    keyframes.forEach((keyframe) => {
      const entriesToCheck = Array.from(keyframe.entries()).filter(([prop]) => !allowedNonAnimatableProps.has(prop));
      for (const [prop, value] of entriesToCheck) {
        if (!driver.validateAnimatableStyleProperty(prop)) {
          if (nonAnimatablePropsInitialValues.has(prop) && !invalidNonAnimatableProps.has(prop)) {
            const propInitialValue = nonAnimatablePropsInitialValues.get(prop);
            if (propInitialValue !== value) {
              invalidNonAnimatableProps.add(prop);
            }
          } else {
            nonAnimatablePropsInitialValues.set(prop, value);
          }
        }
      }
    });
  });
  if (invalidNonAnimatableProps.size > 0) {
    console.warn(`Warning: The animation trigger "${triggerName}" is attempting to animate the following not animatable properties: ` + Array.from(invalidNonAnimatableProps).join(", ") + "\n(to check the list of all animatable properties visit https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)");
  }
}
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState, element, params) {
  return matchFns.some((fn) => fn(currentState, nextState, element, params));
}
function applyParamDefaults(userParams, defaults) {
  const result = __spreadValues({}, defaults);
  Object.entries(userParams).forEach(([key, value]) => {
    if (value != null) {
      result[key] = value;
    }
  });
  return result;
}
var AnimationStateStyles = class {
  styles;
  defaultParams;
  normalizer;
  constructor(styles, defaultParams, normalizer) {
    this.styles = styles;
    this.defaultParams = defaultParams;
    this.normalizer = normalizer;
  }
  buildStyles(params, errors) {
    const finalStyles = /* @__PURE__ */ new Map();
    const combinedParams = applyParamDefaults(params, this.defaultParams);
    this.styles.styles.forEach((value) => {
      if (typeof value !== "string") {
        value.forEach((val, prop) => {
          if (val) {
            val = interpolateParams(val, combinedParams, errors);
          }
          const normalizedProp = this.normalizer.normalizePropertyName(prop, errors);
          val = this.normalizer.normalizeStyleValue(prop, normalizedProp, val, errors);
          finalStyles.set(prop, val);
        });
      }
    });
    return finalStyles;
  }
};
function buildTrigger(name, ast, normalizer) {
  return new AnimationTrigger(name, ast, normalizer);
}
var AnimationTrigger = class {
  name;
  ast;
  _normalizer;
  transitionFactories = [];
  fallbackTransition;
  states = /* @__PURE__ */ new Map();
  constructor(name, ast, _normalizer) {
    this.name = name;
    this.ast = ast;
    this._normalizer = _normalizer;
    ast.states.forEach((ast2) => {
      const defaultParams = ast2.options && ast2.options.params || {};
      this.states.set(ast2.name, new AnimationStateStyles(ast2.style, defaultParams, _normalizer));
    });
    balanceProperties(this.states, "true", "1");
    balanceProperties(this.states, "false", "0");
    ast.transitions.forEach((ast2) => {
      this.transitionFactories.push(new AnimationTransitionFactory(name, ast2, this.states));
    });
    this.fallbackTransition = createFallbackTransition(name, this.states);
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(currentState, nextState, element, params) {
    const entry = this.transitionFactories.find((f) => f.match(currentState, nextState, element, params));
    return entry || null;
  }
  matchStyles(currentState, params, errors) {
    return this.fallbackTransition.buildStyles(currentState, params, errors);
  }
};
function createFallbackTransition(triggerName, states, normalizer) {
  const matchers = [(fromState, toState) => true];
  const animation = {
    type: AnimationMetadataType.Sequence,
    steps: [],
    options: null
  };
  const transition = {
    type: AnimationMetadataType.Transition,
    animation,
    matchers,
    options: null,
    queryCount: 0,
    depCount: 0
  };
  return new AnimationTransitionFactory(triggerName, transition, states);
}
function balanceProperties(stateMap, key1, key2) {
  if (stateMap.has(key1)) {
    if (!stateMap.has(key2)) {
      stateMap.set(key2, stateMap.get(key1));
    }
  } else if (stateMap.has(key2)) {
    stateMap.set(key1, stateMap.get(key2));
  }
}
var EMPTY_INSTRUCTION_MAP = /* @__PURE__ */ new ElementInstructionMap();
var TimelineAnimationEngine = class {
  bodyNode;
  _driver;
  _normalizer;
  _animations = /* @__PURE__ */ new Map();
  _playersById = /* @__PURE__ */ new Map();
  players = [];
  constructor(bodyNode, _driver, _normalizer) {
    this.bodyNode = bodyNode;
    this._driver = _driver;
    this._normalizer = _normalizer;
  }
  register(id, metadata) {
    const errors = [];
    const warnings = [];
    const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
    if (errors.length) {
      throw registerFailed(errors);
    } else {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnRegister(warnings);
        }
      }
      this._animations.set(id, ast);
    }
  }
  _buildPlayer(i, preStyles, postStyles) {
    const element = i.element;
    const keyframes = normalizeKeyframes$1(this._normalizer, i.keyframes, preStyles, postStyles);
    return this._driver.animate(element, keyframes, i.duration, i.delay, i.easing, [], true);
  }
  create(id, element, options = {}) {
    const errors = [];
    const ast = this._animations.get(id);
    let instructions;
    const autoStylesMap = /* @__PURE__ */ new Map();
    if (ast) {
      instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), options, EMPTY_INSTRUCTION_MAP, errors);
      instructions.forEach((inst) => {
        const styles = getOrSetDefaultValue(autoStylesMap, inst.element, /* @__PURE__ */ new Map());
        inst.postStyleProps.forEach((prop) => styles.set(prop, null));
      });
    } else {
      errors.push(missingOrDestroyedAnimation());
      instructions = [];
    }
    if (errors.length) {
      throw createAnimationFailed(errors);
    }
    autoStylesMap.forEach((styles, element2) => {
      styles.forEach((_, prop) => {
        styles.set(prop, this._driver.computeStyle(element2, prop, AUTO_STYLE));
      });
    });
    const players = instructions.map((i) => {
      const styles = autoStylesMap.get(i.element);
      return this._buildPlayer(i, /* @__PURE__ */ new Map(), styles);
    });
    const player = optimizeGroupPlayer(players);
    this._playersById.set(id, player);
    player.onDestroy(() => this.destroy(id));
    this.players.push(player);
    return player;
  }
  destroy(id) {
    const player = this._getPlayer(id);
    player.destroy();
    this._playersById.delete(id);
    const index = this.players.indexOf(player);
    if (index >= 0) {
      this.players.splice(index, 1);
    }
  }
  _getPlayer(id) {
    const player = this._playersById.get(id);
    if (!player) {
      throw missingPlayer(id);
    }
    return player;
  }
  listen(id, element, eventName, callback) {
    const baseEvent = makeAnimationEvent(element, "", "", "");
    listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
    return () => {
    };
  }
  command(id, element, command, args) {
    if (command == "register") {
      this.register(id, args[0]);
      return;
    }
    if (command == "create") {
      const options = args[0] || {};
      this.create(id, element, options);
      return;
    }
    const player = this._getPlayer(id);
    switch (command) {
      case "play":
        player.play();
        break;
      case "pause":
        player.pause();
        break;
      case "reset":
        player.reset();
        break;
      case "restart":
        player.restart();
        break;
      case "finish":
        player.finish();
        break;
      case "init":
        player.init();
        break;
      case "setPosition":
        player.setPosition(parseFloat(args[0]));
        break;
      case "destroy":
        this.destroy(id);
        break;
    }
  }
};
var QUEUED_CLASSNAME = "ng-animate-queued";
var QUEUED_SELECTOR = ".ng-animate-queued";
var DISABLED_CLASSNAME = "ng-animate-disabled";
var DISABLED_SELECTOR = ".ng-animate-disabled";
var STAR_CLASSNAME = "ng-star-inserted";
var STAR_SELECTOR = ".ng-star-inserted";
var EMPTY_PLAYER_ARRAY = [];
var NULL_REMOVAL_STATE = {
  namespaceId: "",
  setForRemoval: false,
  setForMove: false,
  hasAnimation: false,
  removedBeforeQueried: false
};
var NULL_REMOVED_QUERIED_STATE = {
  namespaceId: "",
  setForMove: false,
  setForRemoval: false,
  hasAnimation: false,
  removedBeforeQueried: true
};
var REMOVAL_FLAG = "__ng_removed";
var StateValue = class {
  namespaceId;
  value;
  options;
  get params() {
    return this.options.params;
  }
  constructor(input, namespaceId = "") {
    this.namespaceId = namespaceId;
    const isObj = input && input.hasOwnProperty("value");
    const value = isObj ? input["value"] : input;
    this.value = normalizeTriggerValue(value);
    if (isObj) {
      const _a = input, {
        value: value2
      } = _a, options = __objRest(_a, [
        "value"
      ]);
      this.options = options;
    } else {
      this.options = {};
    }
    if (!this.options.params) {
      this.options.params = {};
    }
  }
  absorbOptions(options) {
    const newParams = options.params;
    if (newParams) {
      const oldParams = this.options.params;
      Object.keys(newParams).forEach((prop) => {
        if (oldParams[prop] == null) {
          oldParams[prop] = newParams[prop];
        }
      });
    }
  }
};
var VOID_VALUE = "void";
var DEFAULT_STATE_VALUE = /* @__PURE__ */ new StateValue(VOID_VALUE);
var AnimationTransitionNamespace = class {
  id;
  hostElement;
  _engine;
  players = [];
  _triggers = /* @__PURE__ */ new Map();
  _queue = [];
  _elementListeners = /* @__PURE__ */ new Map();
  _hostClassName;
  constructor(id, hostElement, _engine) {
    this.id = id;
    this.hostElement = hostElement;
    this._engine = _engine;
    this._hostClassName = "ng-tns-" + id;
    addClass(hostElement, this._hostClassName);
  }
  listen(element, name, phase, callback) {
    if (!this._triggers.has(name)) {
      throw missingTrigger(phase, name);
    }
    if (phase == null || phase.length == 0) {
      throw missingEvent(name);
    }
    if (!isTriggerEventValid(phase)) {
      throw unsupportedTriggerEvent(phase, name);
    }
    const listeners = getOrSetDefaultValue(this._elementListeners, element, []);
    const data = {
      name,
      phase,
      callback
    };
    listeners.push(data);
    const triggersWithStates = getOrSetDefaultValue(this._engine.statesByElement, element, /* @__PURE__ */ new Map());
    if (!triggersWithStates.has(name)) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + name);
      triggersWithStates.set(name, DEFAULT_STATE_VALUE);
    }
    return () => {
      this._engine.afterFlush(() => {
        const index = listeners.indexOf(data);
        if (index >= 0) {
          listeners.splice(index, 1);
        }
        if (!this._triggers.has(name)) {
          triggersWithStates.delete(name);
        }
      });
    };
  }
  register(name, ast) {
    if (this._triggers.has(name)) {
      return false;
    } else {
      this._triggers.set(name, ast);
      return true;
    }
  }
  _getTrigger(name) {
    const trigger = this._triggers.get(name);
    if (!trigger) {
      throw unregisteredTrigger(name);
    }
    return trigger;
  }
  trigger(element, triggerName, value, defaultToFallback = true) {
    const trigger = this._getTrigger(triggerName);
    const player = new TransitionAnimationPlayer(this.id, triggerName, element);
    let triggersWithStates = this._engine.statesByElement.get(element);
    if (!triggersWithStates) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + triggerName);
      this._engine.statesByElement.set(element, triggersWithStates = /* @__PURE__ */ new Map());
    }
    let fromState = triggersWithStates.get(triggerName);
    const toState = new StateValue(value, this.id);
    const isObj = value && value.hasOwnProperty("value");
    if (!isObj && fromState) {
      toState.absorbOptions(fromState.options);
    }
    triggersWithStates.set(triggerName, toState);
    if (!fromState) {
      fromState = DEFAULT_STATE_VALUE;
    }
    const isRemoval = toState.value === VOID_VALUE;
    if (!isRemoval && fromState.value === toState.value) {
      if (!objEquals(fromState.params, toState.params)) {
        const errors = [];
        const fromStyles = trigger.matchStyles(fromState.value, fromState.params, errors);
        const toStyles = trigger.matchStyles(toState.value, toState.params, errors);
        if (errors.length) {
          this._engine.reportError(errors);
        } else {
          this._engine.afterFlush(() => {
            eraseStyles(element, fromStyles);
            setStyles(element, toStyles);
          });
        }
      }
      return;
    }
    const playersOnElement = getOrSetDefaultValue(this._engine.playersByElement, element, []);
    playersOnElement.forEach((player2) => {
      if (player2.namespaceId == this.id && player2.triggerName == triggerName && player2.queued) {
        player2.destroy();
      }
    });
    let transition = trigger.matchTransition(fromState.value, toState.value, element, toState.params);
    let isFallbackTransition = false;
    if (!transition) {
      if (!defaultToFallback) return;
      transition = trigger.fallbackTransition;
      isFallbackTransition = true;
    }
    this._engine.totalQueuedPlayers++;
    this._queue.push({
      element,
      triggerName,
      transition,
      fromState,
      toState,
      player,
      isFallbackTransition
    });
    if (!isFallbackTransition) {
      addClass(element, QUEUED_CLASSNAME);
      player.onStart(() => {
        removeClass(element, QUEUED_CLASSNAME);
      });
    }
    player.onDone(() => {
      let index = this.players.indexOf(player);
      if (index >= 0) {
        this.players.splice(index, 1);
      }
      const players = this._engine.playersByElement.get(element);
      if (players) {
        let index2 = players.indexOf(player);
        if (index2 >= 0) {
          players.splice(index2, 1);
        }
      }
    });
    this.players.push(player);
    playersOnElement.push(player);
    return player;
  }
  deregister(name) {
    this._triggers.delete(name);
    this._engine.statesByElement.forEach((stateMap) => stateMap.delete(name));
    this._elementListeners.forEach((listeners, element) => {
      this._elementListeners.set(element, listeners.filter((entry) => {
        return entry.name != name;
      }));
    });
  }
  clearElementCache(element) {
    this._engine.statesByElement.delete(element);
    this._elementListeners.delete(element);
    const elementPlayers = this._engine.playersByElement.get(element);
    if (elementPlayers) {
      elementPlayers.forEach((player) => player.destroy());
      this._engine.playersByElement.delete(element);
    }
  }
  _signalRemovalForInnerTriggers(rootElement, context) {
    const elements = this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((elm) => {
      if (elm[REMOVAL_FLAG]) return;
      const namespaces = this._engine.fetchNamespacesByElement(elm);
      if (namespaces.size) {
        namespaces.forEach((ns) => ns.triggerLeaveAnimation(elm, context, false, true));
      } else {
        this.clearElementCache(elm);
      }
    });
    this._engine.afterFlushAnimationsDone(() => elements.forEach((elm) => this.clearElementCache(elm)));
  }
  triggerLeaveAnimation(element, context, destroyAfterComplete, defaultToFallback) {
    const triggerStates = this._engine.statesByElement.get(element);
    const previousTriggersValues = /* @__PURE__ */ new Map();
    if (triggerStates) {
      const players = [];
      triggerStates.forEach((state, triggerName) => {
        previousTriggersValues.set(triggerName, state.value);
        if (this._triggers.has(triggerName)) {
          const player = this.trigger(element, triggerName, VOID_VALUE, defaultToFallback);
          if (player) {
            players.push(player);
          }
        }
      });
      if (players.length) {
        this._engine.markElementAsRemoved(this.id, element, true, context, previousTriggersValues);
        if (destroyAfterComplete) {
          optimizeGroupPlayer(players).onDone(() => this._engine.processLeaveNode(element));
        }
        return true;
      }
    }
    return false;
  }
  prepareLeaveAnimationListeners(element) {
    const listeners = this._elementListeners.get(element);
    const elementStates = this._engine.statesByElement.get(element);
    if (listeners && elementStates) {
      const visitedTriggers = /* @__PURE__ */ new Set();
      listeners.forEach((listener) => {
        const triggerName = listener.name;
        if (visitedTriggers.has(triggerName)) return;
        visitedTriggers.add(triggerName);
        const trigger = this._triggers.get(triggerName);
        const transition = trigger.fallbackTransition;
        const fromState = elementStates.get(triggerName) || DEFAULT_STATE_VALUE;
        const toState = new StateValue(VOID_VALUE);
        const player = new TransitionAnimationPlayer(this.id, triggerName, element);
        this._engine.totalQueuedPlayers++;
        this._queue.push({
          element,
          triggerName,
          transition,
          fromState,
          toState,
          player,
          isFallbackTransition: true
        });
      });
    }
  }
  removeNode(element, context) {
    const engine = this._engine;
    if (element.childElementCount) {
      this._signalRemovalForInnerTriggers(element, context);
    }
    if (this.triggerLeaveAnimation(element, context, true)) return;
    let containsPotentialParentTransition = false;
    if (engine.totalAnimations) {
      const currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : [];
      if (currentPlayers && currentPlayers.length) {
        containsPotentialParentTransition = true;
      } else {
        let parent = element;
        while (parent = parent.parentNode) {
          const triggers = engine.statesByElement.get(parent);
          if (triggers) {
            containsPotentialParentTransition = true;
            break;
          }
        }
      }
    }
    this.prepareLeaveAnimationListeners(element);
    if (containsPotentialParentTransition) {
      engine.markElementAsRemoved(this.id, element, false, context);
    } else {
      const removalFlag = element[REMOVAL_FLAG];
      if (!removalFlag || removalFlag === NULL_REMOVAL_STATE) {
        engine.afterFlush(() => this.clearElementCache(element));
        engine.destroyInnerAnimations(element);
        engine._onRemovalComplete(element, context);
      }
    }
  }
  insertNode(element, parent) {
    addClass(element, this._hostClassName);
  }
  drainQueuedTransitions(microtaskId) {
    const instructions = [];
    this._queue.forEach((entry) => {
      const player = entry.player;
      if (player.destroyed) return;
      const element = entry.element;
      const listeners = this._elementListeners.get(element);
      if (listeners) {
        listeners.forEach((listener) => {
          if (listener.name == entry.triggerName) {
            const baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
            baseEvent["_data"] = microtaskId;
            listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
          }
        });
      }
      if (player.markedForDestroy) {
        this._engine.afterFlush(() => {
          player.destroy();
        });
      } else {
        instructions.push(entry);
      }
    });
    this._queue = [];
    return instructions.sort((a, b) => {
      const d0 = a.transition.ast.depCount;
      const d1 = b.transition.ast.depCount;
      if (d0 == 0 || d1 == 0) {
        return d0 - d1;
      }
      return this._engine.driver.containsElement(a.element, b.element) ? 1 : -1;
    });
  }
  destroy(context) {
    this.players.forEach((p) => p.destroy());
    this._signalRemovalForInnerTriggers(this.hostElement, context);
  }
};
var TransitionAnimationEngine = class {
  bodyNode;
  driver;
  _normalizer;
  players = [];
  newHostElements = /* @__PURE__ */ new Map();
  playersByElement = /* @__PURE__ */ new Map();
  playersByQueriedElement = /* @__PURE__ */ new Map();
  statesByElement = /* @__PURE__ */ new Map();
  disabledNodes = /* @__PURE__ */ new Set();
  totalAnimations = 0;
  totalQueuedPlayers = 0;
  _namespaceLookup = {};
  _namespaceList = [];
  _flushFns = [];
  _whenQuietFns = [];
  namespacesByHostElement = /* @__PURE__ */ new Map();
  collectedEnterElements = [];
  collectedLeaveElements = [];
  onRemovalComplete = (element, context) => {
  };
  _onRemovalComplete(element, context) {
    this.onRemovalComplete(element, context);
  }
  constructor(bodyNode, driver, _normalizer) {
    this.bodyNode = bodyNode;
    this.driver = driver;
    this._normalizer = _normalizer;
  }
  get queuedPlayers() {
    const players = [];
    this._namespaceList.forEach((ns) => {
      ns.players.forEach((player) => {
        if (player.queued) {
          players.push(player);
        }
      });
    });
    return players;
  }
  createNamespace(namespaceId, hostElement) {
    const ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);
    if (this.bodyNode && this.driver.containsElement(this.bodyNode, hostElement)) {
      this._balanceNamespaceList(ns, hostElement);
    } else {
      this.newHostElements.set(hostElement, ns);
      this.collectEnterElement(hostElement);
    }
    return this._namespaceLookup[namespaceId] = ns;
  }
  _balanceNamespaceList(ns, hostElement) {
    const namespaceList = this._namespaceList;
    const namespacesByHostElement = this.namespacesByHostElement;
    const limit = namespaceList.length - 1;
    if (limit >= 0) {
      let found = false;
      let ancestor = this.driver.getParentElement(hostElement);
      while (ancestor) {
        const ancestorNs = namespacesByHostElement.get(ancestor);
        if (ancestorNs) {
          const index = namespaceList.indexOf(ancestorNs);
          namespaceList.splice(index + 1, 0, ns);
          found = true;
          break;
        }
        ancestor = this.driver.getParentElement(ancestor);
      }
      if (!found) {
        namespaceList.unshift(ns);
      }
    } else {
      namespaceList.push(ns);
    }
    namespacesByHostElement.set(hostElement, ns);
    return ns;
  }
  register(namespaceId, hostElement) {
    let ns = this._namespaceLookup[namespaceId];
    if (!ns) {
      ns = this.createNamespace(namespaceId, hostElement);
    }
    return ns;
  }
  registerTrigger(namespaceId, name, trigger) {
    let ns = this._namespaceLookup[namespaceId];
    if (ns && ns.register(name, trigger)) {
      this.totalAnimations++;
    }
  }
  destroy(namespaceId, context) {
    if (!namespaceId) return;
    this.afterFlush(() => {
    });
    this.afterFlushAnimationsDone(() => {
      const ns = this._fetchNamespace(namespaceId);
      this.namespacesByHostElement.delete(ns.hostElement);
      const index = this._namespaceList.indexOf(ns);
      if (index >= 0) {
        this._namespaceList.splice(index, 1);
      }
      ns.destroy(context);
      delete this._namespaceLookup[namespaceId];
    });
  }
  _fetchNamespace(id) {
    return this._namespaceLookup[id];
  }
  fetchNamespacesByElement(element) {
    const namespaces = /* @__PURE__ */ new Set();
    const elementStates = this.statesByElement.get(element);
    if (elementStates) {
      for (let stateValue of elementStates.values()) {
        if (stateValue.namespaceId) {
          const ns = this._fetchNamespace(stateValue.namespaceId);
          if (ns) {
            namespaces.add(ns);
          }
        }
      }
    }
    return namespaces;
  }
  trigger(namespaceId, element, name, value) {
    if (isElementNode(element)) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.trigger(element, name, value);
        return true;
      }
    }
    return false;
  }
  insertNode(namespaceId, element, parent, insertBefore) {
    if (!isElementNode(element)) return;
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      details.setForRemoval = false;
      details.setForMove = true;
      const index = this.collectedLeaveElements.indexOf(element);
      if (index >= 0) {
        this.collectedLeaveElements.splice(index, 1);
      }
    }
    if (namespaceId) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.insertNode(element, parent);
      }
    }
    if (insertBefore) {
      this.collectEnterElement(element);
    }
  }
  collectEnterElement(element) {
    this.collectedEnterElements.push(element);
  }
  markElementAsDisabled(element, value) {
    if (value) {
      if (!this.disabledNodes.has(element)) {
        this.disabledNodes.add(element);
        addClass(element, DISABLED_CLASSNAME);
      }
    } else if (this.disabledNodes.has(element)) {
      this.disabledNodes.delete(element);
      removeClass(element, DISABLED_CLASSNAME);
    }
  }
  removeNode(namespaceId, element, context) {
    if (isElementNode(element)) {
      const ns = namespaceId ? this._fetchNamespace(namespaceId) : null;
      if (ns) {
        ns.removeNode(element, context);
      } else {
        this.markElementAsRemoved(namespaceId, element, false, context);
      }
      const hostNS = this.namespacesByHostElement.get(element);
      if (hostNS && hostNS.id !== namespaceId) {
        hostNS.removeNode(element, context);
      }
    } else {
      this._onRemovalComplete(element, context);
    }
  }
  markElementAsRemoved(namespaceId, element, hasAnimation, context, previousTriggersValues) {
    this.collectedLeaveElements.push(element);
    element[REMOVAL_FLAG] = {
      namespaceId,
      setForRemoval: context,
      hasAnimation,
      removedBeforeQueried: false,
      previousTriggersValues
    };
  }
  listen(namespaceId, element, name, phase, callback) {
    if (isElementNode(element)) {
      return this._fetchNamespace(namespaceId).listen(element, name, phase, callback);
    }
    return () => {
    };
  }
  _buildInstruction(entry, subTimelines, enterClassName, leaveClassName, skipBuildAst) {
    return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, enterClassName, leaveClassName, entry.fromState.options, entry.toState.options, subTimelines, skipBuildAst);
  }
  destroyInnerAnimations(containerElement) {
    let elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((element) => this.destroyActiveAnimationsForElement(element));
    if (this.playersByQueriedElement.size == 0) return;
    elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
    elements.forEach((element) => this.finishActiveQueriedAnimationOnElement(element));
  }
  destroyActiveAnimationsForElement(element) {
    const players = this.playersByElement.get(element);
    if (players) {
      players.forEach((player) => {
        if (player.queued) {
          player.markedForDestroy = true;
        } else {
          player.destroy();
        }
      });
    }
  }
  finishActiveQueriedAnimationOnElement(element) {
    const players = this.playersByQueriedElement.get(element);
    if (players) {
      players.forEach((player) => player.finish());
    }
  }
  whenRenderingDone() {
    return new Promise((resolve) => {
      if (this.players.length) {
        return optimizeGroupPlayer(this.players).onDone(() => resolve());
      } else {
        resolve();
      }
    });
  }
  processLeaveNode(element) {
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;
      if (details.namespaceId) {
        this.destroyInnerAnimations(element);
        const ns = this._fetchNamespace(details.namespaceId);
        if (ns) {
          ns.clearElementCache(element);
        }
      }
      this._onRemovalComplete(element, details.setForRemoval);
    }
    if (element.classList?.contains(DISABLED_CLASSNAME)) {
      this.markElementAsDisabled(element, false);
    }
    this.driver.query(element, DISABLED_SELECTOR, true).forEach((node) => {
      this.markElementAsDisabled(node, false);
    });
  }
  flush(microtaskId = -1) {
    let players = [];
    if (this.newHostElements.size) {
      this.newHostElements.forEach((ns, element) => this._balanceNamespaceList(ns, element));
      this.newHostElements.clear();
    }
    if (this.totalAnimations && this.collectedEnterElements.length) {
      for (let i = 0; i < this.collectedEnterElements.length; i++) {
        const elm = this.collectedEnterElements[i];
        addClass(elm, STAR_CLASSNAME);
      }
    }
    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
      const cleanupFns = [];
      try {
        players = this._flushAnimations(cleanupFns, microtaskId);
      } finally {
        for (let i = 0; i < cleanupFns.length; i++) {
          cleanupFns[i]();
        }
      }
    } else {
      for (let i = 0; i < this.collectedLeaveElements.length; i++) {
        const element = this.collectedLeaveElements[i];
        this.processLeaveNode(element);
      }
    }
    this.totalQueuedPlayers = 0;
    this.collectedEnterElements.length = 0;
    this.collectedLeaveElements.length = 0;
    this._flushFns.forEach((fn) => fn());
    this._flushFns = [];
    if (this._whenQuietFns.length) {
      const quietFns = this._whenQuietFns;
      this._whenQuietFns = [];
      if (players.length) {
        optimizeGroupPlayer(players).onDone(() => {
          quietFns.forEach((fn) => fn());
        });
      } else {
        quietFns.forEach((fn) => fn());
      }
    }
  }
  reportError(errors) {
    throw triggerTransitionsFailed(errors);
  }
  _flushAnimations(cleanupFns, microtaskId) {
    const subTimelines = new ElementInstructionMap();
    const skippedPlayers = [];
    const skippedPlayersMap = /* @__PURE__ */ new Map();
    const queuedInstructions = [];
    const queriedElements = /* @__PURE__ */ new Map();
    const allPreStyleElements = /* @__PURE__ */ new Map();
    const allPostStyleElements = /* @__PURE__ */ new Map();
    const disabledElementsSet = /* @__PURE__ */ new Set();
    this.disabledNodes.forEach((node) => {
      disabledElementsSet.add(node);
      const nodesThatAreDisabled = this.driver.query(node, QUEUED_SELECTOR, true);
      for (let i2 = 0; i2 < nodesThatAreDisabled.length; i2++) {
        disabledElementsSet.add(nodesThatAreDisabled[i2]);
      }
    });
    const bodyNode = this.bodyNode;
    const allTriggerElements = Array.from(this.statesByElement.keys());
    const enterNodeMap = buildRootMap(allTriggerElements, this.collectedEnterElements);
    const enterNodeMapIds = /* @__PURE__ */ new Map();
    let i = 0;
    enterNodeMap.forEach((nodes, root) => {
      const className = ENTER_CLASSNAME + i++;
      enterNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    const allLeaveNodes = [];
    const mergedLeaveNodes = /* @__PURE__ */ new Set();
    const leaveNodesWithoutAnimations = /* @__PURE__ */ new Set();
    for (let i2 = 0; i2 < this.collectedLeaveElements.length; i2++) {
      const element = this.collectedLeaveElements[i2];
      const details = element[REMOVAL_FLAG];
      if (details && details.setForRemoval) {
        allLeaveNodes.push(element);
        mergedLeaveNodes.add(element);
        if (details.hasAnimation) {
          this.driver.query(element, STAR_SELECTOR, true).forEach((elm) => mergedLeaveNodes.add(elm));
        } else {
          leaveNodesWithoutAnimations.add(element);
        }
      }
    }
    const leaveNodeMapIds = /* @__PURE__ */ new Map();
    const leaveNodeMap = buildRootMap(allTriggerElements, Array.from(mergedLeaveNodes));
    leaveNodeMap.forEach((nodes, root) => {
      const className = LEAVE_CLASSNAME + i++;
      leaveNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    cleanupFns.push(() => {
      enterNodeMap.forEach((nodes, root) => {
        const className = enterNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      leaveNodeMap.forEach((nodes, root) => {
        const className = leaveNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      allLeaveNodes.forEach((element) => {
        this.processLeaveNode(element);
      });
    });
    const allPlayers = [];
    const erroneousTransitions = [];
    for (let i2 = this._namespaceList.length - 1; i2 >= 0; i2--) {
      const ns = this._namespaceList[i2];
      ns.drainQueuedTransitions(microtaskId).forEach((entry) => {
        const player = entry.player;
        const element = entry.element;
        allPlayers.push(player);
        if (this.collectedEnterElements.length) {
          const details = element[REMOVAL_FLAG];
          if (details && details.setForMove) {
            if (details.previousTriggersValues && details.previousTriggersValues.has(entry.triggerName)) {
              const previousValue = details.previousTriggersValues.get(entry.triggerName);
              const triggersWithStates = this.statesByElement.get(entry.element);
              if (triggersWithStates && triggersWithStates.has(entry.triggerName)) {
                const state = triggersWithStates.get(entry.triggerName);
                state.value = previousValue;
                triggersWithStates.set(entry.triggerName, state);
              }
            }
            player.destroy();
            return;
          }
        }
        const nodeIsOrphaned = !bodyNode || !this.driver.containsElement(bodyNode, element);
        const leaveClassName = leaveNodeMapIds.get(element);
        const enterClassName = enterNodeMapIds.get(element);
        const instruction = this._buildInstruction(entry, subTimelines, enterClassName, leaveClassName, nodeIsOrphaned);
        if (instruction.errors && instruction.errors.length) {
          erroneousTransitions.push(instruction);
          return;
        }
        if (nodeIsOrphaned) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        if (entry.isFallbackTransition) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        const timelines = [];
        instruction.timelines.forEach((tl) => {
          tl.stretchStartingKeyframe = true;
          if (!this.disabledNodes.has(tl.element)) {
            timelines.push(tl);
          }
        });
        instruction.timelines = timelines;
        subTimelines.append(element, instruction.timelines);
        const tuple = {
          instruction,
          player,
          element
        };
        queuedInstructions.push(tuple);
        instruction.queriedElements.forEach((element2) => getOrSetDefaultValue(queriedElements, element2, []).push(player));
        instruction.preStyleProps.forEach((stringMap, element2) => {
          if (stringMap.size) {
            let setVal = allPreStyleElements.get(element2);
            if (!setVal) {
              allPreStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
            }
            stringMap.forEach((_, prop) => setVal.add(prop));
          }
        });
        instruction.postStyleProps.forEach((stringMap, element2) => {
          let setVal = allPostStyleElements.get(element2);
          if (!setVal) {
            allPostStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
          }
          stringMap.forEach((_, prop) => setVal.add(prop));
        });
      });
    }
    if (erroneousTransitions.length) {
      const errors = [];
      erroneousTransitions.forEach((instruction) => {
        errors.push(transitionFailed(instruction.triggerName, instruction.errors));
      });
      allPlayers.forEach((player) => player.destroy());
      this.reportError(errors);
    }
    const allPreviousPlayersMap = /* @__PURE__ */ new Map();
    const animationElementMap = /* @__PURE__ */ new Map();
    queuedInstructions.forEach((entry) => {
      const element = entry.element;
      if (subTimelines.has(element)) {
        animationElementMap.set(element, element);
        this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
      }
    });
    skippedPlayers.forEach((player) => {
      const element = player.element;
      const previousPlayers = this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);
      previousPlayers.forEach((prevPlayer) => {
        getOrSetDefaultValue(allPreviousPlayersMap, element, []).push(prevPlayer);
        prevPlayer.destroy();
      });
    });
    const replaceNodes = allLeaveNodes.filter((node) => {
      return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
    });
    const postStylesMap = /* @__PURE__ */ new Map();
    const allLeaveQueriedNodes = cloakAndComputeStyles(postStylesMap, this.driver, leaveNodesWithoutAnimations, allPostStyleElements, AUTO_STYLE);
    allLeaveQueriedNodes.forEach((node) => {
      if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
        replaceNodes.push(node);
      }
    });
    const preStylesMap = /* @__PURE__ */ new Map();
    enterNodeMap.forEach((nodes, root) => {
      cloakAndComputeStyles(preStylesMap, this.driver, new Set(nodes), allPreStyleElements, \u0275PRE_STYLE);
    });
    replaceNodes.forEach((node) => {
      const post = postStylesMap.get(node);
      const pre = preStylesMap.get(node);
      postStylesMap.set(node, new Map([...post?.entries() ?? [], ...pre?.entries() ?? []]));
    });
    const rootPlayers = [];
    const subPlayers = [];
    const NO_PARENT_ANIMATION_ELEMENT_DETECTED = {};
    queuedInstructions.forEach((entry) => {
      const {
        element,
        player,
        instruction
      } = entry;
      if (subTimelines.has(element)) {
        if (disabledElementsSet.has(element)) {
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          player.disabled = true;
          player.overrideTotalTime(instruction.totalTime);
          skippedPlayers.push(player);
          return;
        }
        let parentWithAnimation = NO_PARENT_ANIMATION_ELEMENT_DETECTED;
        if (animationElementMap.size > 1) {
          let elm = element;
          const parentsToAdd = [];
          while (elm = elm.parentNode) {
            const detectedParent = animationElementMap.get(elm);
            if (detectedParent) {
              parentWithAnimation = detectedParent;
              break;
            }
            parentsToAdd.push(elm);
          }
          parentsToAdd.forEach((parent) => animationElementMap.set(parent, parentWithAnimation));
        }
        const innerPlayer = this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);
        player.setRealPlayer(innerPlayer);
        if (parentWithAnimation === NO_PARENT_ANIMATION_ELEMENT_DETECTED) {
          rootPlayers.push(player);
        } else {
          const parentPlayers = this.playersByElement.get(parentWithAnimation);
          if (parentPlayers && parentPlayers.length) {
            player.parentPlayer = optimizeGroupPlayer(parentPlayers);
          }
          skippedPlayers.push(player);
        }
      } else {
        eraseStyles(element, instruction.fromStyles);
        player.onDestroy(() => setStyles(element, instruction.toStyles));
        subPlayers.push(player);
        if (disabledElementsSet.has(element)) {
          skippedPlayers.push(player);
        }
      }
    });
    subPlayers.forEach((player) => {
      const playersForElement = skippedPlayersMap.get(player.element);
      if (playersForElement && playersForElement.length) {
        const innerPlayer = optimizeGroupPlayer(playersForElement);
        player.setRealPlayer(innerPlayer);
      }
    });
    skippedPlayers.forEach((player) => {
      if (player.parentPlayer) {
        player.syncPlayerEvents(player.parentPlayer);
      } else {
        player.destroy();
      }
    });
    for (let i2 = 0; i2 < allLeaveNodes.length; i2++) {
      const element = allLeaveNodes[i2];
      const details = element[REMOVAL_FLAG];
      removeClass(element, LEAVE_CLASSNAME);
      if (details && details.hasAnimation) continue;
      let players = [];
      if (queriedElements.size) {
        let queriedPlayerResults = queriedElements.get(element);
        if (queriedPlayerResults && queriedPlayerResults.length) {
          players.push(...queriedPlayerResults);
        }
        let queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);
        for (let j = 0; j < queriedInnerElements.length; j++) {
          let queriedPlayers = queriedElements.get(queriedInnerElements[j]);
          if (queriedPlayers && queriedPlayers.length) {
            players.push(...queriedPlayers);
          }
        }
      }
      const activePlayers = players.filter((p) => !p.destroyed);
      if (activePlayers.length) {
        removeNodesAfterAnimationDone(this, element, activePlayers);
      } else {
        this.processLeaveNode(element);
      }
    }
    allLeaveNodes.length = 0;
    rootPlayers.forEach((player) => {
      this.players.push(player);
      player.onDone(() => {
        player.destroy();
        const index = this.players.indexOf(player);
        this.players.splice(index, 1);
      });
      player.play();
    });
    return rootPlayers;
  }
  afterFlush(callback) {
    this._flushFns.push(callback);
  }
  afterFlushAnimationsDone(callback) {
    this._whenQuietFns.push(callback);
  }
  _getPreviousPlayers(element, isQueriedElement, namespaceId, triggerName, toStateValue) {
    let players = [];
    if (isQueriedElement) {
      const queriedElementPlayers = this.playersByQueriedElement.get(element);
      if (queriedElementPlayers) {
        players = queriedElementPlayers;
      }
    } else {
      const elementPlayers = this.playersByElement.get(element);
      if (elementPlayers) {
        const isRemovalAnimation = !toStateValue || toStateValue == VOID_VALUE;
        elementPlayers.forEach((player) => {
          if (player.queued) return;
          if (!isRemovalAnimation && player.triggerName != triggerName) return;
          players.push(player);
        });
      }
    }
    if (namespaceId || triggerName) {
      players = players.filter((player) => {
        if (namespaceId && namespaceId != player.namespaceId) return false;
        if (triggerName && triggerName != player.triggerName) return false;
        return true;
      });
    }
    return players;
  }
  _beforeAnimationBuild(namespaceId, instruction, allPreviousPlayersMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const targetNameSpaceId = instruction.isRemovalTransition ? void 0 : namespaceId;
    const targetTriggerName = instruction.isRemovalTransition ? void 0 : triggerName;
    for (const timelineInstruction of instruction.timelines) {
      const element = timelineInstruction.element;
      const isQueriedElement = element !== rootElement;
      const players = getOrSetDefaultValue(allPreviousPlayersMap, element, []);
      const previousPlayers = this._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);
      previousPlayers.forEach((player) => {
        const realPlayer = player.getRealPlayer();
        if (realPlayer.beforeDestroy) {
          realPlayer.beforeDestroy();
        }
        player.destroy();
        players.push(player);
      });
    }
    eraseStyles(rootElement, instruction.fromStyles);
  }
  _buildAnimation(namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const allQueriedPlayers = [];
    const allConsumedElements = /* @__PURE__ */ new Set();
    const allSubElements = /* @__PURE__ */ new Set();
    const allNewPlayers = instruction.timelines.map((timelineInstruction) => {
      const element = timelineInstruction.element;
      allConsumedElements.add(element);
      const details = element[REMOVAL_FLAG];
      if (details && details.removedBeforeQueried) return new NoopAnimationPlayer(timelineInstruction.duration, timelineInstruction.delay);
      const isQueriedElement = element !== rootElement;
      const previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY).map((p) => p.getRealPlayer())).filter((p) => {
        const pp = p;
        return pp.element ? pp.element === element : false;
      });
      const preStyles = preStylesMap.get(element);
      const postStyles = postStylesMap.get(element);
      const keyframes = normalizeKeyframes$1(this._normalizer, timelineInstruction.keyframes, preStyles, postStyles);
      const player2 = this._buildPlayer(timelineInstruction, keyframes, previousPlayers);
      if (timelineInstruction.subTimeline && skippedPlayersMap) {
        allSubElements.add(element);
      }
      if (isQueriedElement) {
        const wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
        wrappedPlayer.setRealPlayer(player2);
        allQueriedPlayers.push(wrappedPlayer);
      }
      return player2;
    });
    allQueriedPlayers.forEach((player2) => {
      getOrSetDefaultValue(this.playersByQueriedElement, player2.element, []).push(player2);
      player2.onDone(() => deleteOrUnsetInMap(this.playersByQueriedElement, player2.element, player2));
    });
    allConsumedElements.forEach((element) => addClass(element, NG_ANIMATING_CLASSNAME));
    const player = optimizeGroupPlayer(allNewPlayers);
    player.onDestroy(() => {
      allConsumedElements.forEach((element) => removeClass(element, NG_ANIMATING_CLASSNAME));
      setStyles(rootElement, instruction.toStyles);
    });
    allSubElements.forEach((element) => {
      getOrSetDefaultValue(skippedPlayersMap, element, []).push(player);
    });
    return player;
  }
  _buildPlayer(instruction, keyframes, previousPlayers) {
    if (keyframes.length > 0) {
      return this.driver.animate(instruction.element, keyframes, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
    }
    return new NoopAnimationPlayer(instruction.duration, instruction.delay);
  }
};
var TransitionAnimationPlayer = class {
  namespaceId;
  triggerName;
  element;
  _player = new NoopAnimationPlayer();
  _containsRealPlayer = false;
  _queuedCallbacks = /* @__PURE__ */ new Map();
  destroyed = false;
  parentPlayer = null;
  markedForDestroy = false;
  disabled = false;
  queued = true;
  totalTime = 0;
  constructor(namespaceId, triggerName, element) {
    this.namespaceId = namespaceId;
    this.triggerName = triggerName;
    this.element = element;
  }
  setRealPlayer(player) {
    if (this._containsRealPlayer) return;
    this._player = player;
    this._queuedCallbacks.forEach((callbacks, phase) => {
      callbacks.forEach((callback) => listenOnPlayer(player, phase, void 0, callback));
    });
    this._queuedCallbacks.clear();
    this._containsRealPlayer = true;
    this.overrideTotalTime(player.totalTime);
    this.queued = false;
  }
  getRealPlayer() {
    return this._player;
  }
  overrideTotalTime(totalTime) {
    this.totalTime = totalTime;
  }
  syncPlayerEvents(player) {
    const p = this._player;
    if (p.triggerCallback) {
      player.onStart(() => p.triggerCallback("start"));
    }
    player.onDone(() => this.finish());
    player.onDestroy(() => this.destroy());
  }
  _queueEvent(name, callback) {
    getOrSetDefaultValue(this._queuedCallbacks, name, []).push(callback);
  }
  onDone(fn) {
    if (this.queued) {
      this._queueEvent("done", fn);
    }
    this._player.onDone(fn);
  }
  onStart(fn) {
    if (this.queued) {
      this._queueEvent("start", fn);
    }
    this._player.onStart(fn);
  }
  onDestroy(fn) {
    if (this.queued) {
      this._queueEvent("destroy", fn);
    }
    this._player.onDestroy(fn);
  }
  init() {
    this._player.init();
  }
  hasStarted() {
    return this.queued ? false : this._player.hasStarted();
  }
  play() {
    !this.queued && this._player.play();
  }
  pause() {
    !this.queued && this._player.pause();
  }
  restart() {
    !this.queued && this._player.restart();
  }
  finish() {
    this._player.finish();
  }
  destroy() {
    this.destroyed = true;
    this._player.destroy();
  }
  reset() {
    !this.queued && this._player.reset();
  }
  setPosition(p) {
    if (!this.queued) {
      this._player.setPosition(p);
    }
  }
  getPosition() {
    return this.queued ? 0 : this._player.getPosition();
  }
  triggerCallback(phaseName) {
    const p = this._player;
    if (p.triggerCallback) {
      p.triggerCallback(phaseName);
    }
  }
};
function deleteOrUnsetInMap(map, key, value) {
  let currentValues = map.get(key);
  if (currentValues) {
    if (currentValues.length) {
      const index = currentValues.indexOf(value);
      currentValues.splice(index, 1);
    }
    if (currentValues.length == 0) {
      map.delete(key);
    }
  }
  return currentValues;
}
function normalizeTriggerValue(value) {
  return value != null ? value : null;
}
function isElementNode(node) {
  return node && node["nodeType"] === 1;
}
function isTriggerEventValid(eventName) {
  return eventName == "start" || eventName == "done";
}
function cloakElement(element, value) {
  const oldValue = element.style.display;
  element.style.display = value != null ? value : "none";
  return oldValue;
}
function cloakAndComputeStyles(valuesMap, driver, elements, elementPropsMap, defaultStyle) {
  const cloakVals = [];
  elements.forEach((element) => cloakVals.push(cloakElement(element)));
  const failedElements = [];
  elementPropsMap.forEach((props, element) => {
    const styles = /* @__PURE__ */ new Map();
    props.forEach((prop) => {
      const value = driver.computeStyle(element, prop, defaultStyle);
      styles.set(prop, value);
      if (!value || value.length == 0) {
        element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
        failedElements.push(element);
      }
    });
    valuesMap.set(element, styles);
  });
  let i = 0;
  elements.forEach((element) => cloakElement(element, cloakVals[i++]));
  return failedElements;
}
function buildRootMap(roots, nodes) {
  const rootMap = /* @__PURE__ */ new Map();
  roots.forEach((root) => rootMap.set(root, []));
  if (nodes.length == 0) return rootMap;
  const NULL_NODE = 1;
  const nodeSet = new Set(nodes);
  const localRootMap = /* @__PURE__ */ new Map();
  function getRoot(node) {
    if (!node) return NULL_NODE;
    let root = localRootMap.get(node);
    if (root) return root;
    const parent = node.parentNode;
    if (rootMap.has(parent)) {
      root = parent;
    } else if (nodeSet.has(parent)) {
      root = NULL_NODE;
    } else {
      root = getRoot(parent);
    }
    localRootMap.set(node, root);
    return root;
  }
  nodes.forEach((node) => {
    const root = getRoot(node);
    if (root !== NULL_NODE) {
      rootMap.get(root).push(node);
    }
  });
  return rootMap;
}
function addClass(element, className) {
  element.classList?.add(className);
}
function removeClass(element, className) {
  element.classList?.remove(className);
}
function removeNodesAfterAnimationDone(engine, element, players) {
  optimizeGroupPlayer(players).onDone(() => engine.processLeaveNode(element));
}
function flattenGroupPlayers(players) {
  const finalPlayers = [];
  _flattenGroupPlayersRecur(players, finalPlayers);
  return finalPlayers;
}
function _flattenGroupPlayersRecur(players, finalPlayers) {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player instanceof AnimationGroupPlayer) {
      _flattenGroupPlayersRecur(player.players, finalPlayers);
    } else {
      finalPlayers.push(player);
    }
  }
}
function objEquals(a, b) {
  const k1 = Object.keys(a);
  const k2 = Object.keys(b);
  if (k1.length != k2.length) return false;
  for (let i = 0; i < k1.length; i++) {
    const prop = k1[i];
    if (!b.hasOwnProperty(prop) || a[prop] !== b[prop]) return false;
  }
  return true;
}
function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
  const postEntry = allPostStyleElements.get(element);
  if (!postEntry) return false;
  let preEntry = allPreStyleElements.get(element);
  if (preEntry) {
    postEntry.forEach((data) => preEntry.add(data));
  } else {
    allPreStyleElements.set(element, postEntry);
  }
  allPostStyleElements.delete(element);
  return true;
}
var AnimationEngine = class {
  _driver;
  _normalizer;
  _transitionEngine;
  _timelineEngine;
  _triggerCache = {};
  onRemovalComplete = (element, context) => {
  };
  constructor(doc, _driver, _normalizer) {
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._transitionEngine = new TransitionAnimationEngine(doc.body, _driver, _normalizer);
    this._timelineEngine = new TimelineAnimationEngine(doc.body, _driver, _normalizer);
    this._transitionEngine.onRemovalComplete = (element, context) => this.onRemovalComplete(element, context);
  }
  registerTrigger(componentId, namespaceId, hostElement, name, metadata) {
    const cacheKey = componentId + "-" + name;
    let trigger = this._triggerCache[cacheKey];
    if (!trigger) {
      const errors = [];
      const warnings = [];
      const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
      if (errors.length) {
        throw triggerBuildFailed(name, errors);
      }
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnTriggerBuild(name, warnings);
        }
      }
      trigger = buildTrigger(name, ast, this._normalizer);
      this._triggerCache[cacheKey] = trigger;
    }
    this._transitionEngine.registerTrigger(namespaceId, name, trigger);
  }
  register(namespaceId, hostElement) {
    this._transitionEngine.register(namespaceId, hostElement);
  }
  destroy(namespaceId, context) {
    this._transitionEngine.destroy(namespaceId, context);
  }
  onInsert(namespaceId, element, parent, insertBefore) {
    this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
  }
  onRemove(namespaceId, element, context) {
    this._transitionEngine.removeNode(namespaceId, element, context);
  }
  disableAnimations(element, disable) {
    this._transitionEngine.markElementAsDisabled(element, disable);
  }
  process(namespaceId, element, property, value) {
    if (property.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(property);
      const args = value;
      this._timelineEngine.command(id, element, action, args);
    } else {
      this._transitionEngine.trigger(namespaceId, element, property, value);
    }
  }
  listen(namespaceId, element, eventName, eventPhase, callback) {
    if (eventName.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(eventName);
      return this._timelineEngine.listen(id, element, action, callback);
    }
    return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
  }
  flush(microtaskId = -1) {
    this._transitionEngine.flush(microtaskId);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(cb) {
    this._transitionEngine.afterFlushAnimationsDone(cb);
  }
};
function packageNonAnimatableStyles(element, styles) {
  let startStyles = null;
  let endStyles = null;
  if (Array.isArray(styles) && styles.length) {
    startStyles = filterNonAnimatableStyles(styles[0]);
    if (styles.length > 1) {
      endStyles = filterNonAnimatableStyles(styles[styles.length - 1]);
    }
  } else if (styles instanceof Map) {
    startStyles = filterNonAnimatableStyles(styles);
  }
  return startStyles || endStyles ? new SpecialCasedStyles(element, startStyles, endStyles) : null;
}
var SpecialCasedStyles = class _SpecialCasedStyles {
  _element;
  _startStyles;
  _endStyles;
  static initialStylesByElement = /* @__PURE__ */ new WeakMap();
  _state = 0;
  _initialStyles;
  constructor(_element, _startStyles, _endStyles) {
    this._element = _element;
    this._startStyles = _startStyles;
    this._endStyles = _endStyles;
    let initialStyles = _SpecialCasedStyles.initialStylesByElement.get(_element);
    if (!initialStyles) {
      _SpecialCasedStyles.initialStylesByElement.set(_element, initialStyles = /* @__PURE__ */ new Map());
    }
    this._initialStyles = initialStyles;
  }
  start() {
    if (this._state < 1) {
      if (this._startStyles) {
        setStyles(this._element, this._startStyles, this._initialStyles);
      }
      this._state = 1;
    }
  }
  finish() {
    this.start();
    if (this._state < 2) {
      setStyles(this._element, this._initialStyles);
      if (this._endStyles) {
        setStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      this._state = 1;
    }
  }
  destroy() {
    this.finish();
    if (this._state < 3) {
      _SpecialCasedStyles.initialStylesByElement.delete(this._element);
      if (this._startStyles) {
        eraseStyles(this._element, this._startStyles);
        this._endStyles = null;
      }
      if (this._endStyles) {
        eraseStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      setStyles(this._element, this._initialStyles);
      this._state = 3;
    }
  }
};
function filterNonAnimatableStyles(styles) {
  let result = null;
  styles.forEach((val, prop) => {
    if (isNonAnimatableStyle(prop)) {
      result = result || /* @__PURE__ */ new Map();
      result.set(prop, val);
    }
  });
  return result;
}
function isNonAnimatableStyle(prop) {
  return prop === "display" || prop === "position";
}
var WebAnimationsPlayer = class {
  element;
  keyframes;
  options;
  _specialStyles;
  _onDoneFns = [];
  _onStartFns = [];
  _onDestroyFns = [];
  _duration;
  _delay;
  _initialized = false;
  _finished = false;
  _started = false;
  _destroyed = false;
  _finalKeyframe;
  _originalOnDoneFns = [];
  _originalOnStartFns = [];
  domPlayer = null;
  time = 0;
  parentPlayer = null;
  currentSnapshot = /* @__PURE__ */ new Map();
  constructor(element, keyframes, options, _specialStyles) {
    this.element = element;
    this.keyframes = keyframes;
    this.options = options;
    this._specialStyles = _specialStyles;
    this._duration = options["duration"];
    this._delay = options["delay"] || 0;
    this.time = this._duration + this._delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    if (!this._buildPlayer()) {
      return;
    }
    this._preparePlayerBeforeStart();
  }
  _buildPlayer() {
    if (this._initialized) return this.domPlayer;
    this._initialized = true;
    const keyframes = this.keyframes;
    const animation = this._triggerWebAnimation(this.element, keyframes, this.options);
    if (!animation) {
      this._onFinish();
      return null;
    }
    this.domPlayer = animation;
    this._finalKeyframe = keyframes.length ? keyframes[keyframes.length - 1] : /* @__PURE__ */ new Map();
    const onFinish = () => this._onFinish();
    animation.addEventListener("finish", onFinish);
    this.onDestroy(() => {
      animation.removeEventListener("finish", onFinish);
    });
    return animation;
  }
  _preparePlayerBeforeStart() {
    if (this._delay) {
      this._resetDomPlayerState();
    } else {
      this.domPlayer?.pause();
    }
  }
  _convertKeyframesToObject(keyframes) {
    const kfs = [];
    keyframes.forEach((frame) => {
      kfs.push(Object.fromEntries(frame));
    });
    return kfs;
  }
  _triggerWebAnimation(element, keyframes, options) {
    const keyframesObject = this._convertKeyframesToObject(keyframes);
    try {
      return element.animate(keyframesObject, options);
    } catch {
      return null;
    }
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  play() {
    const player = this._buildPlayer();
    if (!player) {
      return;
    }
    if (!this.hasStarted()) {
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
      this._started = true;
      if (this._specialStyles) {
        this._specialStyles.start();
      }
    }
    player.play();
  }
  pause() {
    this.init();
    this.domPlayer?.pause();
  }
  finish() {
    this.init();
    if (!this.domPlayer) return;
    if (this._specialStyles) {
      this._specialStyles.finish();
    }
    this._onFinish();
    this.domPlayer.finish();
  }
  reset() {
    this._resetDomPlayerState();
    this._destroyed = false;
    this._finished = false;
    this._started = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  _resetDomPlayerState() {
    this.domPlayer?.cancel();
  }
  restart() {
    this.reset();
    this.play();
  }
  hasStarted() {
    return this._started;
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._resetDomPlayerState();
      this._onFinish();
      if (this._specialStyles) {
        this._specialStyles.destroy();
      }
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  setPosition(p) {
    if (!this.domPlayer) {
      this.init();
    }
    if (this.domPlayer) {
      this.domPlayer.currentTime = p * this.time;
    }
  }
  getPosition() {
    if (!this.domPlayer) {
      return this._initialized ? 1 : 0;
    }
    return +(this.domPlayer.currentTime ?? 0) / this.time;
  }
  get totalTime() {
    return this._delay + this._duration;
  }
  beforeDestroy() {
    const styles = /* @__PURE__ */ new Map();
    if (this.hasStarted()) {
      const finalKeyframe = this._finalKeyframe;
      finalKeyframe.forEach((val, prop) => {
        if (prop !== "offset") {
          styles.set(prop, this._finished ? val : computeStyle(this.element, prop));
        }
      });
    }
    this.currentSnapshot = styles;
  }
  triggerCallback(phaseName) {
    const methods = phaseName === "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var WebAnimationsDriver = class {
  validateStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      return validateStyleProperty(prop);
    }
    return true;
  }
  validateAnimatableStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const cssProp = camelCaseToDashCase(prop);
      return validateWebAnimatableStyleProperty(cssProp);
    }
    return true;
  }
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  getParentElement(element) {
    return getParentElement(element);
  }
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  computeStyle(element, prop, defaultValue) {
    return computeStyle(element, prop);
  }
  animate(element, keyframes, duration, delay, easing, previousPlayers = []) {
    const fill = delay == 0 ? "both" : "forwards";
    const playerOptions = {
      duration,
      delay,
      fill
    };
    if (easing) {
      playerOptions["easing"] = easing;
    }
    const previousStyles = /* @__PURE__ */ new Map();
    const previousWebAnimationPlayers = previousPlayers.filter((player) => player instanceof WebAnimationsPlayer);
    if (allowPreviousPlayerStylesMerge(duration, delay)) {
      previousWebAnimationPlayers.forEach((player) => {
        player.currentSnapshot.forEach((val, prop) => previousStyles.set(prop, val));
      });
    }
    let _keyframes = normalizeKeyframes(keyframes).map((styles) => new Map(styles));
    _keyframes = balancePreviousStylesIntoKeyframes(element, _keyframes, previousStyles);
    const specialStyles = packageNonAnimatableStyles(element, _keyframes);
    return new WebAnimationsPlayer(element, _keyframes, playerOptions, specialStyles);
  }
};
var ANIMATION_PREFIX = "@";
var DISABLE_ANIMATIONS_FLAG = "@.disabled";
var BaseAnimationRenderer = class {
  namespaceId;
  delegate;
  engine;
  _onDestroy;
  \u0275type = 0;
  constructor(namespaceId, delegate, engine, _onDestroy) {
    this.namespaceId = namespaceId;
    this.delegate = delegate;
    this.engine = engine;
    this._onDestroy = _onDestroy;
  }
  get data() {
    return this.delegate.data;
  }
  destroyNode(node) {
    this.delegate.destroyNode?.(node);
  }
  destroy() {
    this.engine.destroy(this.namespaceId, this.delegate);
    this.engine.afterFlushAnimationsDone(() => {
      queueMicrotask(() => {
        this.delegate.destroy();
      });
    });
    this._onDestroy?.();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, false);
  }
  insertBefore(parent, newChild, refChild, isMove = true) {
    this.delegate.insertBefore(parent, newChild, refChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, isMove);
  }
  removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval) {
    if (requireSynchronousElementRemoval) {
      this.delegate.removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval);
      return;
    }
    if (this.parentNode(oldChild)) {
      this.engine.onRemove(this.namespaceId, oldChild, this.delegate);
    }
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX && name == DISABLE_ANIMATIONS_FLAG) {
      this.disableAnimations(el, !!value);
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    return this.delegate.listen(target, eventName, callback, options);
  }
  disableAnimations(element, value) {
    this.engine.disableAnimations(element, value);
  }
};
var AnimationRenderer = class extends BaseAnimationRenderer {
  factory;
  constructor(factory, namespaceId, delegate, engine, onDestroy) {
    super(namespaceId, delegate, engine, onDestroy);
    this.factory = factory;
    this.namespaceId = namespaceId;
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX) {
      if (name.charAt(1) == "." && name == DISABLE_ANIMATIONS_FLAG) {
        value = value === void 0 ? true : !!value;
        this.disableAnimations(el, value);
      } else {
        this.engine.process(this.namespaceId, el, name.slice(1), value);
      }
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  listen(target, eventName, callback, options) {
    if (eventName.charAt(0) == ANIMATION_PREFIX) {
      const element = resolveElementFromTarget(target);
      let name = eventName.slice(1);
      let phase = "";
      if (name.charAt(0) != ANIMATION_PREFIX) {
        [name, phase] = parseTriggerCallbackName(name);
      }
      return this.engine.listen(this.namespaceId, element, name, phase, (event) => {
        const countId = event["_data"] || -1;
        this.factory.scheduleListenerCallback(countId, callback, event);
      });
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
};
function resolveElementFromTarget(target) {
  switch (target) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return target;
  }
}
function parseTriggerCallbackName(triggerName) {
  const dotIndex = triggerName.indexOf(".");
  const trigger = triggerName.substring(0, dotIndex);
  const phase = triggerName.slice(dotIndex + 1);
  return [trigger, phase];
}
var AnimationRendererFactory = class {
  delegate;
  engine;
  _zone;
  _currentId = 0;
  _microtaskId = 1;
  _animationCallbacksBuffer = [];
  _rendererCache = /* @__PURE__ */ new Map();
  _cdRecurDepth = 0;
  constructor(delegate, engine, _zone) {
    this.delegate = delegate;
    this.engine = engine;
    this._zone = _zone;
    engine.onRemovalComplete = (element, delegate2) => {
      delegate2?.removeChild(null, element);
    };
  }
  createRenderer(hostElement, type) {
    const EMPTY_NAMESPACE_ID = "";
    const delegate = this.delegate.createRenderer(hostElement, type);
    if (!hostElement || !type?.data?.["animation"]) {
      const cache = this._rendererCache;
      let renderer = cache.get(delegate);
      if (!renderer) {
        const onRendererDestroy = () => cache.delete(delegate);
        renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine, onRendererDestroy);
        cache.set(delegate, renderer);
      }
      return renderer;
    }
    const componentId = type.id;
    const namespaceId = type.id + "-" + this._currentId;
    this._currentId++;
    this.engine.register(namespaceId, hostElement);
    const registerTrigger = (trigger) => {
      if (Array.isArray(trigger)) {
        trigger.forEach(registerTrigger);
      } else {
        this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger.name, trigger);
      }
    };
    const animationTriggers = type.data["animation"];
    animationTriggers.forEach(registerTrigger);
    return new AnimationRenderer(this, namespaceId, delegate, this.engine);
  }
  begin() {
    this._cdRecurDepth++;
    if (this.delegate.begin) {
      this.delegate.begin();
    }
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  scheduleListenerCallback(count, fn, data) {
    if (count >= 0 && count < this._microtaskId) {
      this._zone.run(() => fn(data));
      return;
    }
    const animationCallbacksBuffer = this._animationCallbacksBuffer;
    if (animationCallbacksBuffer.length == 0) {
      queueMicrotask(() => {
        this._zone.run(() => {
          animationCallbacksBuffer.forEach((tuple) => {
            const [fn2, data2] = tuple;
            fn2(data2);
          });
          this._animationCallbacksBuffer = [];
        });
      });
    }
    animationCallbacksBuffer.push([fn, data]);
  }
  end() {
    this._cdRecurDepth--;
    if (this._cdRecurDepth == 0) {
      this._zone.runOutsideAngular(() => {
        this._scheduleCountTask();
        this.engine.flush(this._microtaskId);
      });
    }
    if (this.delegate.end) {
      this.delegate.end();
    }
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
  componentReplaced(componentId) {
    this.engine.flush();
    this.delegate.componentReplaced?.(componentId);
  }
};

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
/**
 * @license Angular v21.2.9
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer);
  }
  ngOnDestroy() {
    this.flush();
  }
  static \u0275fac = function InjectableAnimationEngine_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InjectableAnimationEngine)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(AnimationDriver), \u0275\u0275inject(AnimationStyleNormalizer));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InjectableAnimationEngine,
    factory: _InjectableAnimationEngine.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: AnimationDriver
  }, {
    type: AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory() {
  return new AnimationRendererFactory(inject(DomRendererFactory2), inject(AnimationEngine), inject(NgZone));
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory
}];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useFactory: () => false ? new NoopAnimationDriver() : new WebAnimationsDriver()
}, {
  provide: ANIMATION_MODULE_TYPE,
  useFactory: () => false ? "NoopAnimations" : "BrowserAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BrowserAnimationsModule = class _BrowserAnimationsModule {
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
  static \u0275fac = function BrowserAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BrowserAnimationsModule,
    exports: [BrowserModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
function provideAnimations() {
  performanceMarkFeature("NgEagerAnimations");
  return [...BROWSER_ANIMATIONS_PROVIDERS];
}
var NoopAnimationsModule = class _NoopAnimationsModule {
  static \u0275fac = function NoopAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NoopAnimationsModule,
    exports: [BrowserModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();

// src/app/Service/language.service.ts
var EN = {
  navTracks: "Tracks",
  navCourses: "Courses",
  navVision: "Vision",
  navLogin: "Login",
  navGetStarted: "Get started",
  navLogout: "Logout",
  navProfile: "Profile",
  navTeacher: "Instructor",
  navHi: "Hi,",
  heroEyebrow: "Trusted learning ecosystem",
  heroH1Part1: "Learn in-demand",
  heroH1Accent: "skills",
  heroH1Part2: "with structured paths.",
  heroLead: "Grow from fundamentals to advanced implementation through mentor-guided modules and hands-on labs designed for real-world outcomes.",
  heroExplore: "Explore programs",
  heroWhyUs: "Why choose us",
  statLessons: "Structured lessons",
  statLearners: "Active learners",
  statSubmissions: "Practice submissions",
  showcaseBadge: "Education Spotlight",
  showcaseLabel: "Future ready learning",
  showcaseH2: "Explore a visual learning journey",
  showcaseDesc: "From structured lessons to project-based milestones, the platform is designed to keep every learner focused, active, and progressing.",
  showcaseChip1: "Live classes",
  showcaseChip2: "Mentor support",
  showcaseChip3: "Project labs",
  showcaseChip4: "Career paths",
  sectionPrograms: "Programs",
  sectionH2Line1: "Career-focused learning paths",
  sectionH2Line2: "for every stage",
  sectionDesc: "Choose a pathway based on your current level and progress with curated lessons, challenges, and project-based milestones.",
  coursesLoading: "Courses loading...",
  coursesLoadingDesc: "Please wait, courses are loading.",
  coursesNone: "No course available",
  coursesNoneDesc: "No courses have been published yet. Check back later.",
  coursesNoMatch: "No matching course found",
  coursesNoMatchDesc: "No course matched your search term.",
  coursesAllTitle: "All Courses",
  coursesSearchHint: "Search by title, category, instructor, level, or description.",
  coursesSearchLabel: "Search courses",
  coursesSearchPlaceholder: "Type a course name, category, or instructor...",
  coursesBackHome: "Back To Home",
  courseCategory: "Category:",
  courseInstructor: "Instructor:",
  courseLessons: "Lessons:",
  courseDuration: "Duration:",
  coursePrice: "Price:",
  courseSeeMore: "See more",
  courseEnrolled: "Enrolled",
  courseEnrollNow: "Enroll Now",
  courseStartLearning: "Start learning",
  courseDurationUnit: "min",
  feature1Title: "Outcome-based curriculum",
  feature1Desc: "Follow role-focused modules designed around practical, job-ready outcomes.",
  feature2Title: "Progress and performance analytics",
  feature2Desc: "Track completion, assessment scores, and learning consistency in one dashboard.",
  feature3Title: "Mentor-guided growth",
  feature3Desc: "Get structured feedback and guidance to accelerate your learning path.",
  quoteLabel: "Our commitment",
  quoteText: "Every learner deserves a clear roadmap, measurable progress, and practical skills that translate directly into real opportunities.",
  quoteFooter1: "Industry-ready curriculum",
  quoteFooter2: "Project-first learning model",
  levelBeginner: "Beginner",
  levelIntermediate: "Intermediate",
  levelAdvanced: "Advanced",
  cdBack: "\u2190 Back to Courses",
  cdLoading: "Loading course details...",
  cdLoadingDesc: "Please wait.",
  cdUnavailable: "Course details unavailable",
  cdGoBack: "Go back to courses",
  cdOverview: "Overview",
  cdInstructor: "Course Instructor",
  cdDescription: "Course Description",
  cdNote: "Note",
  cdNoteText: "Video lessons are now available for this course.",
  cdSeeLess: "See less",
  cdSeeMore: "See more",
  cdCoupon: "Have Coupon Code?",
  cdCheckingEnrollment: "Checking enrollment...",
  cdEnrolled: "You are enrolled in this course",
  cdEnrollNow: "Enroll Now",
  cdLoginToEnroll: "Login to Enroll",
  cdCategory: "Category",
  cdLevel: "Level",
  cdLessonsCount: "Lessons",
  cdDuration: "Duration",
  cdStatus: "Status",
  cdPublished: "Published",
  cdDraft: "Draft",
  ecBack: "\u2190 Back to Course",
  ecNoLesson: "No lesson selected",
  ecLessons: "Lessons",
  ecInstructor: "Instructor",
  profileRole: "Role",
  profileDashboard: "Student dashboard",
  profileWeekly: "Weekly performance",
  profileLive: "Live",
  profileCompletion: "completion",
  profileCompleted: "Completed",
  profileRemaining: "Remaining",
  profileAssessments: "Angular assessments",
  profileCodingTime: "Coding time this week",
  profileStreak: "Consistency streak",
  profileDays: "days",
  profileActivity: "Activity",
  profileActivityDesc: "These options will be activated in future updates.",
  profileMyClasses: "My Classes",
  profileMyCourses: "My Courses",
  profileAssignments: "Assignments",
  profileCertificates: "Certificates",
  loginEyebrow: "Welcome back",
  loginTitle: "Login to continue your learning journey.",
  loginLead: "Access your lessons, progress dashboard, and skill streaks from one focused workspace.",
  loginSecure: "Secure access",
  loginMode: "Black-blue learning mode",
  loginF1Title: "Fast resume",
  loginF1Desc: "Jump back into your saved course path instantly.",
  loginF2Title: "Progress sync",
  loginF2Desc: "Keep streaks, scores, and milestones in one place.",
  loginF3Title: "Clean focus",
  loginF3Desc: "Dark interface with sharp blue accents for low distraction.",
  loginEmail: "Email address",
  loginEmailError: "Enter a valid email address.",
  loginPassword: "Password",
  loginPasswordError: "Password must be at least 6 characters.",
  loginRemember: "Remember me",
  loginForgot: "Forgot password?",
  loginLoggingIn: "Logging in...",
  loginBtn: "Login now",
  loginNoAccount: "Don't have an account?",
  loginCreateOne: "Create one",
  loginRedirecting: "Logging in and launching your home page...",
  registerEyebrow: "Create account",
  registerTitle: "Join the learning platform.",
  registerLead: "Set up your profile to track lessons, practice streaks, and progress inside the same dark blue workspace.",
  registerNewLearner: "New learner",
  registerStartStrong: "Start strong from day one",
  registerF1Title: "Personal dashboard",
  registerF1Desc: "Get a clean progress view for every learning path you join.",
  registerF2Title: "Structured onboarding",
  registerF2Desc: "Move into a guided setup flow with a focused interface.",
  registerF3Title: "Black-blue identity",
  registerF3Desc: "Consistent with the home and login pages, visually and functionally.",
  registerFullName: "Full name",
  registerFullNamePlaceholder: "Your name",
  registerFullNameError: "Enter your full name.",
  registerRole: "Select role",
  registerRolePlaceholder: "Select one",
  registerStudent: "Student",
  registerTeacher: "Teacher",
  registerRoleError: "Please select Student or Teacher.",
  registerPasswordPlaceholder: "Create a password",
  registerConfirmPassword: "Confirm password",
  registerRepeatPassword: "Repeat password",
  registerConfirmPasswordError: "Confirm your password.",
  registerTerms: "I agree to the learning platform terms.",
  registerSubmitting: "Submitting...",
  registerBtn: "Create account",
  registerHaveAccount: "Already have an account?",
  registerLoginHere: "Login here",
  registerGoHome: "Go Home"
};
var BN = {
  navTracks: "\u099F\u09CD\u09B0\u09CD\u09AF\u09BE\u0995\u09B8",
  navCourses: "\u0995\u09CB\u09B0\u09CD\u09B8\u09B8\u09AE\u09C2\u09B9",
  navVision: "\u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09B2\u0995\u09CD\u09B7\u09CD\u09AF",
  navLogin: "\u09B2\u0997\u0987\u09A8",
  navGetStarted: "\u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09C1\u09A8",
  navLogout: "\u09B2\u0997\u0986\u0989\u099F",
  navProfile: "\u09AA\u09CD\u09B0\u09CB\u09AB\u09BE\u0987\u09B2",
  navTeacher: "\u09B6\u09BF\u0995\u09CD\u09B7\u0995",
  navHi: "\u09B9\u09CD\u09AF\u09BE\u09B2\u09CB,",
  heroEyebrow: "\u09AC\u09BF\u09B6\u09CD\u09AC\u09B8\u09CD\u09A4 \u09B6\u09BF\u0995\u09CD\u09B7\u09BE \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09AB\u09B0\u09CD\u09AE",
  heroH1Part1: "\u099A\u09BE\u09B9\u09BF\u09A6\u09BE\u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8",
  heroH1Accent: "\u09A6\u0995\u09CD\u09B7\u09A4\u09BE",
  heroH1Part2: "\u09B6\u09BF\u0996\u09C1\u09A8 \u0995\u09BE\u09A0\u09BE\u09AE\u09CB\u09AC\u09A6\u09CD\u09A7 \u09AA\u09A5\u09C7\u0964",
  heroLead: "\u09AE\u09C7\u09A8\u09CD\u099F\u09B0-\u0997\u09BE\u0987\u09A1\u09C7\u09A1 \u09AE\u09A1\u09BF\u0989\u09B2 \u0993 \u09B9\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1\u09B8-\u0985\u09A8 \u09B2\u09CD\u09AF\u09BE\u09AC\u09C7\u09B0 \u09AE\u09BE\u09A7\u09CD\u09AF\u09AE\u09C7 \u09AC\u09C7\u09B8\u09BF\u0995 \u09A5\u09C7\u0995\u09C7 \u0985\u09CD\u09AF\u09BE\u09A1\u09AD\u09BE\u09A8\u09CD\u09B8\u09A1 \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4 \u09B6\u09BF\u0996\u09C1\u09A8\u0964",
  heroExplore: "\u09AA\u09CD\u09B0\u09CB\u0997\u09CD\u09B0\u09BE\u09AE \u09A6\u09C7\u0996\u09C1\u09A8",
  heroWhyUs: "\u0995\u09C7\u09A8 \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09AC\u09C7\u099B\u09C7 \u09A8\u09C7\u09AC\u09C7\u09A8",
  statLessons: "\u0995\u09BE\u09A0\u09BE\u09AE\u09CB\u09AC\u09A6\u09CD\u09A7 \u09AA\u09BE\u09A0",
  statLearners: "\u09B8\u0995\u09CD\u09B0\u09BF\u09AF\u09BC \u09B6\u09BF\u0995\u09CD\u09B7\u09BE\u09B0\u09CD\u09A5\u09C0",
  statSubmissions: "\u0985\u09A8\u09C1\u09B6\u09C0\u09B2\u09A8 \u099C\u09AE\u09BE",
  showcaseBadge: "\u09B6\u09BF\u0995\u09CD\u09B7\u09BE \u09B9\u09BE\u0987\u09B2\u09BE\u0987\u099F",
  showcaseLabel: "\u09AD\u09AC\u09BF\u09B7\u09CD\u09AF\u09A4\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09AA\u09CD\u09B0\u09B8\u09CD\u09A4\u09C1\u09A4",
  showcaseH2: "\u09AD\u09BF\u099C\u09CD\u09AF\u09C1\u09AF\u09BC\u09BE\u09B2 \u09B2\u09BE\u09B0\u09CD\u09A8\u09BF\u0982 \u099C\u09BE\u09B0\u09CD\u09A8\u09BF \u0985\u09A8\u09CD\u09AC\u09C7\u09B7\u09A3 \u0995\u09B0\u09C1\u09A8",
  showcaseDesc: "\u0995\u09BE\u09A0\u09BE\u09AE\u09CB\u09AC\u09A6\u09CD\u09A7 \u09AA\u09BE\u09A0 \u09A5\u09C7\u0995\u09C7 \u09AA\u09CD\u09B0\u099C\u09C7\u0995\u09CD\u099F-\u09AD\u09BF\u09A4\u09CD\u09A4\u09BF\u0995 \u09AE\u09BE\u0987\u09B2\u09B8\u09CD\u099F\u09CB\u09A8 \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4, \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09AB\u09B0\u09CD\u09AE\u099F\u09BF \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09B6\u09BF\u0995\u09CD\u09B7\u09BE\u09B0\u09CD\u09A5\u09C0\u0995\u09C7 \u09AE\u09A8\u09CB\u09AF\u09CB\u0997\u09C0 \u09B0\u09BE\u0996\u09A4\u09C7 \u09A1\u09BF\u099C\u09BE\u0987\u09A8 \u0995\u09B0\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u0964",
  showcaseChip1: "\u09B2\u09BE\u0987\u09AD \u0995\u09CD\u09B2\u09BE\u09B8",
  showcaseChip2: "\u09AE\u09C7\u09A8\u09CD\u099F\u09B0 \u09B8\u09BE\u09AA\u09CB\u09B0\u09CD\u099F",
  showcaseChip3: "\u09AA\u09CD\u09B0\u099C\u09C7\u0995\u09CD\u099F \u09B2\u09CD\u09AF\u09BE\u09AC",
  showcaseChip4: "\u0995\u09CD\u09AF\u09BE\u09B0\u09BF\u09AF\u09BC\u09BE\u09B0 \u09AA\u09A5",
  sectionPrograms: "\u09AA\u09CD\u09B0\u09CB\u0997\u09CD\u09B0\u09BE\u09AE\u09B8\u09AE\u09C2\u09B9",
  sectionH2Line1: "\u0995\u09CD\u09AF\u09BE\u09B0\u09BF\u09AF\u09BC\u09BE\u09B0-\u0995\u09C7\u09A8\u09CD\u09A6\u09CD\u09B0\u09BF\u0995 \u09B6\u09BF\u0995\u09CD\u09B7\u09BE\u09B0 \u09AA\u09A5",
  sectionH2Line2: "\u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09B8\u09CD\u09A4\u09B0\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF",
  sectionDesc: "\u0986\u09AA\u09A8\u09BE\u09B0 \u09AC\u09B0\u09CD\u09A4\u09AE\u09BE\u09A8 \u09B8\u09CD\u09A4\u09B0 \u0985\u09A8\u09C1\u09AF\u09BE\u09AF\u09BC\u09C0 \u09AA\u09A5 \u09AC\u09C7\u099B\u09C7 \u09A8\u09BF\u09A8 \u098F\u09AC\u0982 \u0995\u09BF\u0989\u09B0\u09C7\u099F\u09C7\u09A1 \u09AA\u09BE\u09A0 \u0993 \u09AA\u09CD\u09B0\u099C\u09C7\u0995\u09CD\u099F-\u09AD\u09BF\u09A4\u09CD\u09A4\u09BF\u0995 \u09AE\u09BE\u0987\u09B2\u09B8\u09CD\u099F\u09CB\u09A8 \u09A6\u09BF\u09AF\u09BC\u09C7 \u098F\u0997\u09BF\u09AF\u09BC\u09C7 \u09AF\u09BE\u09A8\u0964",
  coursesLoading: "\u0995\u09CB\u09B0\u09CD\u09B8 \u09B2\u09CB\u09A1 \u09B9\u099A\u09CD\u099B\u09C7...",
  coursesLoadingDesc: "\u09A6\u09AF\u09BC\u09BE \u0995\u09B0\u09C7 \u098F\u0995\u099F\u09C1 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8\u0964",
  coursesNone: "\u0995\u09CB\u09A8\u09CB \u0995\u09CB\u09B0\u09CD\u09B8 \u09AA\u09BE\u0993\u09AF\u09BC\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF",
  coursesNoneDesc: "\u098F\u0996\u09A8\u0993 \u0995\u09CB\u09A8\u09CB \u0995\u09CB\u09B0\u09CD\u09B8 publish \u0995\u09B0\u09BE \u09B9\u09AF\u09BC\u09A8\u09BF\u0964 \u09AA\u09B0\u09C7 \u0986\u09AC\u09BE\u09B0 \u099A\u09C7\u0995 \u0995\u09B0\u09C1\u09A8\u0964",
  coursesNoMatch: "\u0995\u09CB\u09A8\u09CB \u09AE\u09BF\u09B2\u09C7 \u09AF\u09BE\u0993\u09AF\u09BC\u09BE \u0995\u09CB\u09B0\u09CD\u09B8 \u09AA\u09BE\u0993\u09AF\u09BC\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF",
  coursesNoMatchDesc: "\u0986\u09AA\u09A8\u09BE\u09B0 \u09B8\u09BE\u09B0\u09CD\u099A\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09AE\u09BF\u09B2\u09C7 \u098F\u09AE\u09A8 \u0995\u09CB\u09A8\u09CB \u0995\u09CB\u09B0\u09CD\u09B8 \u09A8\u09C7\u0987\u0964",
  coursesAllTitle: "\u09B8\u0995\u09B2 \u0995\u09CB\u09B0\u09CD\u09B8",
  coursesSearchHint: "\u09B6\u09BF\u09B0\u09CB\u09A8\u09BE\u09AE, \u09AC\u09BF\u09B7\u09AF\u09BC, \u09AA\u09CD\u09B0\u09B6\u09BF\u0995\u09CD\u09B7\u0995, \u09B8\u09CD\u09A4\u09B0 \u09AC\u09BE \u09AC\u09BF\u09AC\u09B0\u09A3 \u09A6\u09BF\u09AF\u09BC\u09C7 \u0996\u09C1\u0981\u099C\u09C1\u09A8\u0964",
  coursesSearchLabel: "\u0995\u09CB\u09B0\u09CD\u09B8 \u0996\u09C1\u0981\u099C\u09C1\u09A8",
  coursesSearchPlaceholder: "\u0995\u09CB\u09B0\u09CD\u09B8\u09C7\u09B0 \u09A8\u09BE\u09AE, \u09AC\u09BF\u09B7\u09AF\u09BC \u09AC\u09BE \u09AA\u09CD\u09B0\u09B6\u09BF\u0995\u09CD\u09B7\u0995 \u09B2\u09BF\u0996\u09C1\u09A8...",
  coursesBackHome: "\u09B9\u09CB\u09AE\u09C7 \u09AB\u09BF\u09B0\u09C1\u09A8",
  courseCategory: "\u09AC\u09BF\u09B7\u09AF\u09BC:",
  courseInstructor: "\u09AA\u09CD\u09B0\u09B6\u09BF\u0995\u09CD\u09B7\u0995:",
  courseLessons: "\u09AA\u09BE\u09A0:",
  courseDuration: "\u09B8\u09AE\u09AF\u09BC\u0995\u09BE\u09B2:",
  coursePrice: "\u09AE\u09C2\u09B2\u09CD\u09AF:",
  courseSeeMore: "\u0986\u09B0\u09CB \u09A6\u09C7\u0996\u09C1\u09A8",
  courseEnrolled: "\u09AD\u09B0\u09CD\u09A4\u09BF \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u09A8",
  courseEnrollNow: "\u098F\u0996\u09A8\u0987 \u09AD\u09B0\u09CD\u09A4\u09BF \u09B9\u09A8",
  courseStartLearning: "\u09B6\u09C7\u0996\u09BE \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09C1\u09A8",
  courseDurationUnit: "\u09AE\u09BF\u09A8\u09BF\u099F",
  feature1Title: "\u09AB\u09B2\u09BE\u09AB\u09B2-\u09AD\u09BF\u09A4\u09CD\u09A4\u09BF\u0995 \u09AA\u09BE\u09A0\u09CD\u09AF\u0995\u09CD\u09B0\u09AE",
  feature1Desc: "\u09AC\u09BE\u09B8\u09CD\u09A4\u09AC, \u099A\u09BE\u0995\u09B0\u09BF-\u0989\u09AA\u09AF\u09CB\u0997\u09C0 \u09AB\u09B2\u09BE\u09AB\u09B2\u09C7\u09B0 \u0989\u09AA\u09B0 \u09AD\u09BF\u09A4\u09CD\u09A4\u09BF \u0995\u09B0\u09C7 \u09B0\u09CB\u09B2-\u0995\u09C7\u09A8\u09CD\u09A6\u09CD\u09B0\u09BF\u0995 \u09AE\u09A1\u09BF\u0989\u09B2 \u0985\u09A8\u09C1\u09B8\u09B0\u09A3 \u0995\u09B0\u09C1\u09A8\u0964",
  feature2Title: "\u0985\u0997\u09CD\u09B0\u0997\u09A4\u09BF \u0993 \u0995\u09B0\u09CD\u09AE\u0995\u09CD\u09B7\u09AE\u09A4\u09BE \u09AC\u09BF\u09B6\u09CD\u09B2\u09C7\u09B7\u09A3",
  feature2Desc: "\u098F\u0995\u099F\u09BF \u09A1\u09CD\u09AF\u09BE\u09B6\u09AC\u09CB\u09B0\u09CD\u09A1\u09C7 \u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8\u09A4\u09BE, \u09AE\u09C2\u09B2\u09CD\u09AF\u09BE\u09AF\u09BC\u09A8 \u09B8\u09CD\u0995\u09CB\u09B0 \u099F\u09CD\u09B0\u09CD\u09AF\u09BE\u0995 \u0995\u09B0\u09C1\u09A8\u0964",
  feature3Title: "\u09AE\u09C7\u09A8\u09CD\u099F\u09B0-\u0997\u09BE\u0987\u09A1\u09C7\u09A1 \u09AC\u09BF\u0995\u09BE\u09B6",
  feature3Desc: "\u0986\u09AA\u09A8\u09BE\u09B0 \u09B6\u09BF\u0995\u09CD\u09B7\u09BE\u09B0 \u09AA\u09A5 \u09A4\u09CD\u09AC\u09B0\u09BE\u09A8\u09CD\u09AC\u09BF\u09A4 \u0995\u09B0\u09A4\u09C7 \u0995\u09BE\u09A0\u09BE\u09AE\u09CB\u09AC\u09A6\u09CD\u09A7 \u0997\u09BE\u0987\u09A1\u09C7\u09A8\u09CD\u09B8 \u09AA\u09BE\u09A8\u0964",
  quoteLabel: "\u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09AA\u09CD\u09B0\u09A4\u09BF\u09B6\u09CD\u09B0\u09C1\u09A4\u09BF",
  quoteText: "\u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09B6\u09BF\u0995\u09CD\u09B7\u09BE\u09B0\u09CD\u09A5\u09C0 \u098F\u0995\u099F\u09BF \u09B8\u09CD\u09AA\u09B7\u09CD\u099F \u09B0\u09CB\u09A1\u09AE\u09CD\u09AF\u09BE\u09AA \u0993 \u09AC\u09BE\u09B8\u09CD\u09A4\u09AC \u09A6\u0995\u09CD\u09B7\u09A4\u09BE \u09AA\u09BE\u0993\u09AF\u09BC\u09BE\u09B0 \u0985\u09A7\u09BF\u0995\u09BE\u09B0\u09C0\u0964",
  quoteFooter1: "\u09B6\u09BF\u09B2\u09CD\u09AA-\u0989\u09AA\u09AF\u09CB\u0997\u09C0 \u09AA\u09BE\u09A0\u09CD\u09AF\u0995\u09CD\u09B0\u09AE",
  quoteFooter2: "\u09AA\u09CD\u09B0\u099C\u09C7\u0995\u09CD\u099F-\u09AB\u09BE\u09B0\u09CD\u09B8\u09CD\u099F \u09B6\u09BF\u0995\u09CD\u09B7\u09BE \u09AE\u09A1\u09C7\u09B2",
  levelBeginner: "\u09B6\u09BF\u0995\u09CD\u09B7\u09BE\u09B0\u09CD\u09A5\u09C0",
  levelIntermediate: "\u09AE\u09A7\u09CD\u09AF\u09AC\u09B0\u09CD\u09A4\u09C0",
  levelAdvanced: "\u0989\u09A8\u09CD\u09A8\u09A4",
  cdBack: "\u2190 \u0995\u09CB\u09B0\u09CD\u09B8\u09C7 \u09AB\u09BF\u09B0\u09C1\u09A8",
  cdLoading: "\u0995\u09CB\u09B0\u09CD\u09B8 \u09B2\u09CB\u09A1 \u09B9\u099A\u09CD\u099B\u09C7...",
  cdLoadingDesc: "\u09A6\u09AF\u09BC\u09BE \u0995\u09B0\u09C7 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8\u0964",
  cdUnavailable: "\u0995\u09CB\u09B0\u09CD\u09B8\u09C7\u09B0 \u09A4\u09A5\u09CD\u09AF \u09AA\u09BE\u0993\u09AF\u09BC\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF",
  cdGoBack: "\u0995\u09CB\u09B0\u09CD\u09B8\u09C7 \u09AB\u09BF\u09B0\u09C7 \u09AF\u09BE\u09A8",
  cdOverview: "\u09B8\u0982\u0995\u09CD\u09B7\u09BF\u09AA\u09CD\u09A4 \u09AC\u09BF\u09AC\u09B0\u09A3",
  cdInstructor: "\u0995\u09CB\u09B0\u09CD\u09B8 \u09AA\u09CD\u09B0\u09B6\u09BF\u0995\u09CD\u09B7\u0995",
  cdDescription: "\u0995\u09CB\u09B0\u09CD\u09B8\u09C7\u09B0 \u09AC\u09BF\u09AC\u09B0\u09A3",
  cdNote: "\u09A8\u09CB\u099F",
  cdNoteText: "\u098F\u0987 \u0995\u09CB\u09B0\u09CD\u09B8\u09C7\u09B0 \u09AD\u09BF\u09A1\u09BF\u0993 \u09B2\u09C7\u09B8\u09A8 \u098F\u0996\u09A8 \u0989\u09AA\u09B2\u09AC\u09CD\u09A7\u0964",
  cdSeeLess: "\u0995\u09AE \u09A6\u09C7\u0996\u09C1\u09A8",
  cdSeeMore: "\u0986\u09B0\u09CB \u09A6\u09C7\u0996\u09C1\u09A8",
  cdCoupon: "\u0995\u09C1\u09AA\u09A8 \u0995\u09CB\u09A1 \u0986\u099B\u09C7?",
  cdCheckingEnrollment: "\u098F\u09A8\u09B0\u09CB\u09B2\u09AE\u09C7\u09A8\u09CD\u099F \u099A\u09C7\u0995 \u09B9\u099A\u09CD\u099B\u09C7...",
  cdEnrolled: "\u0986\u09AA\u09A8\u09BF \u098F\u0987 \u0995\u09CB\u09B0\u09CD\u09B8\u09C7 \u09AD\u09B0\u09CD\u09A4\u09BF \u0986\u099B\u09C7\u09A8",
  cdEnrollNow: "\u098F\u0996\u09A8\u0987 \u09AD\u09B0\u09CD\u09A4\u09BF \u09B9\u09A8",
  cdLoginToEnroll: "\u09AD\u09B0\u09CD\u09A4\u09BF \u09B9\u09A4\u09C7 \u09B2\u0997\u0987\u09A8 \u0995\u09B0\u09C1\u09A8",
  cdCategory: "\u09AC\u09BF\u09B7\u09AF\u09BC",
  cdLevel: "\u09B8\u09CD\u09A4\u09B0",
  cdLessonsCount: "\u09AA\u09BE\u09A0",
  cdDuration: "\u09B8\u09AE\u09AF\u09BC\u0995\u09BE\u09B2",
  cdStatus: "\u0985\u09AC\u09B8\u09CD\u09A5\u09BE",
  cdPublished: "\u09AA\u09CD\u09B0\u0995\u09BE\u09B6\u09BF\u09A4",
  cdDraft: "\u09A1\u09CD\u09B0\u09BE\u09AB\u099F",
  ecBack: "\u2190 \u0995\u09CB\u09B0\u09CD\u09B8\u09C7 \u09AB\u09BF\u09B0\u09C1\u09A8",
  ecNoLesson: "\u0995\u09CB\u09A8\u09CB \u09AA\u09BE\u09A0 \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09BF\u09A4 \u09B9\u09AF\u09BC\u09A8\u09BF",
  ecLessons: "\u09AA\u09BE\u09A0\u09B8\u09AE\u09C2\u09B9",
  ecInstructor: "\u09AA\u09CD\u09B0\u09B6\u09BF\u0995\u09CD\u09B7\u0995",
  profileRole: "\u09AD\u09C2\u09AE\u09BF\u0995\u09BE",
  profileDashboard: "\u09B6\u09BF\u0995\u09CD\u09B7\u09BE\u09B0\u09CD\u09A5\u09C0 \u09A1\u09CD\u09AF\u09BE\u09B6\u09AC\u09CB\u09B0\u09CD\u09A1",
  profileWeekly: "\u09B8\u09BE\u09AA\u09CD\u09A4\u09BE\u09B9\u09BF\u0995 \u09AA\u09BE\u09B0\u09AB\u09B0\u09AE\u09CD\u09AF\u09BE\u09A8\u09CD\u09B8",
  profileLive: "\u09B2\u09BE\u0987\u09AD",
  profileCompletion: "\u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8",
  profileCompleted: "\u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7",
  profileRemaining: "\u09AC\u09BE\u0995\u09BF \u0986\u099B\u09C7",
  profileAssessments: "Angular \u09AE\u09C2\u09B2\u09CD\u09AF\u09BE\u09AF\u09BC\u09A8",
  profileCodingTime: "\u098F\u0987 \u09B8\u09AA\u09CD\u09A4\u09BE\u09B9\u09C7 \u0995\u09CB\u09A1\u09BF\u0982 \u09B8\u09AE\u09AF\u09BC",
  profileStreak: "\u09A7\u09BE\u09B0\u09BE\u09AC\u09BE\u09B9\u09BF\u0995\u09A4\u09BE\u09B0 \u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u0995",
  profileDays: "\u09A6\u09BF\u09A8",
  profileActivity: "\u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09CD\u09B0\u09AE",
  profileActivityDesc: "\u098F\u0987 \u09AC\u09BF\u0995\u09B2\u09CD\u09AA\u0997\u09C1\u09B2\u09CB \u09AD\u09AC\u09BF\u09B7\u09CD\u09AF\u09CE \u0986\u09AA\u09A1\u09C7\u099F\u09C7 \u099A\u09BE\u09B2\u09C1 \u09B9\u09AC\u09C7\u0964",
  profileMyClasses: "\u0986\u09AE\u09BE\u09B0 \u0995\u09CD\u09B2\u09BE\u09B8",
  profileMyCourses: "\u0986\u09AE\u09BE\u09B0 \u0995\u09CB\u09B0\u09CD\u09B8",
  profileAssignments: "\u0985\u09CD\u09AF\u09BE\u09B8\u09BE\u0987\u09A8\u09AE\u09C7\u09A8\u09CD\u099F",
  profileCertificates: "\u09B8\u09BE\u09B0\u09CD\u099F\u09BF\u09AB\u09BF\u0995\u09C7\u099F",
  loginEyebrow: "\u09B8\u09CD\u09AC\u09BE\u0997\u09A4\u09AE",
  loginTitle: "\u0986\u09AA\u09A8\u09BE\u09B0 \u09B6\u09BF\u0995\u09CD\u09B7\u09BE\u09B0 \u09AF\u09BE\u09A4\u09CD\u09B0\u09BE \u099A\u09BE\u09B2\u09BF\u09AF\u09BC\u09C7 \u09AF\u09C7\u09A4\u09C7 \u09B2\u0997\u0987\u09A8 \u0995\u09B0\u09C1\u09A8\u0964",
  loginLead: "\u098F\u0995\u099F\u09BF \u09AB\u09CB\u0995\u09BE\u09B8\u09A1 \u0993\u09AF\u09BC\u09BE\u09B0\u09CD\u0995\u09B8\u09CD\u09AA\u09C7\u09B8 \u09A5\u09C7\u0995\u09C7 \u0986\u09AA\u09A8\u09BE\u09B0 \u09AA\u09BE\u09A0, \u0985\u0997\u09CD\u09B0\u0997\u09A4\u09BF \u09A1\u09CD\u09AF\u09BE\u09B6\u09AC\u09CB\u09B0\u09CD\u09A1 \u098F\u09AC\u0982 \u09B8\u09CD\u0995\u09BF\u09B2 \u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u0995 \u0985\u09CD\u09AF\u09BE\u0995\u09CD\u09B8\u09C7\u09B8 \u0995\u09B0\u09C1\u09A8\u0964",
  loginSecure: "\u09A8\u09BF\u09B0\u09BE\u09AA\u09A6 \u09AA\u09CD\u09B0\u09AC\u09C7\u09B6",
  loginMode: "\u09AC\u09CD\u09B2\u09CD\u09AF\u09BE\u0995-\u09AC\u09CD\u09B2\u09C1 \u09B2\u09BE\u09B0\u09CD\u09A8\u09BF\u0982 \u09AE\u09CB\u09A1",
  loginF1Title: "\u09A6\u09CD\u09B0\u09C1\u09A4 \u09B6\u09C1\u09B0\u09C1",
  loginF1Desc: "\u0986\u09AA\u09A8\u09BE\u09B0 \u09B8\u09C7\u09AD \u0995\u09B0\u09BE \u0995\u09CB\u09B0\u09CD\u09B8 \u09AA\u09BE\u09A5\u09C7 \u09A4\u09BE\u09CE\u0995\u09CD\u09B7\u09A3\u09BF\u0995\u09AD\u09BE\u09AC\u09C7 \u09AB\u09BF\u09B0\u09C7 \u09AF\u09BE\u09A8\u0964",
  loginF2Title: "\u0985\u0997\u09CD\u09B0\u0997\u09A4\u09BF \u09B8\u09BF\u0999\u09CD\u0995",
  loginF2Desc: "\u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u0995, \u09B8\u09CD\u0995\u09CB\u09B0 \u098F\u09AC\u0982 \u09AE\u09BE\u0987\u09B2\u09B8\u09CD\u099F\u09CB\u09A8 \u098F\u0995 \u099C\u09BE\u09AF\u09BC\u0997\u09BE\u09AF\u09BC \u09B0\u09BE\u0996\u09C1\u09A8\u0964",
  loginF3Title: "\u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u09AB\u09CB\u0995\u09BE\u09B8",
  loginF3Desc: "\u0995\u09AE \u09AC\u09BF\u0995\u09CD\u09B7\u09C7\u09AA\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09A4\u09C0\u0995\u09CD\u09B7\u09CD\u09A3 \u09A8\u09C0\u09B2 \u0985\u09CD\u09AF\u09BE\u0995\u09B8\u09C7\u09A8\u09CD\u099F \u09B8\u09B9 \u09A1\u09BE\u09B0\u09CD\u0995 \u0987\u09A8\u09CD\u099F\u09BE\u09B0\u09AB\u09C7\u09B8\u0964",
  loginEmail: "\u0987\u09AE\u09C7\u0987\u09B2 \u09A0\u09BF\u0995\u09BE\u09A8\u09BE",
  loginEmailError: "\u098F\u0995\u099F\u09BF \u09AC\u09C8\u09A7 \u0987\u09AE\u09C7\u0987\u09B2 \u09A0\u09BF\u0995\u09BE\u09A8\u09BE \u09A6\u09BF\u09A8\u0964",
  loginPassword: "\u09AA\u09BE\u09B8\u0993\u09AF\u09BC\u09BE\u09B0\u09CD\u09A1",
  loginPasswordError: "\u09AA\u09BE\u09B8\u0993\u09AF\u09BC\u09BE\u09B0\u09CD\u09A1 \u0995\u09AE\u09AA\u0995\u09CD\u09B7\u09C7 \u09EC \u0985\u0995\u09CD\u09B7\u09B0\u09C7\u09B0 \u09B9\u09A4\u09C7 \u09B9\u09AC\u09C7\u0964",
  loginRemember: "\u0986\u09AE\u09BE\u0995\u09C7 \u09AE\u09A8\u09C7 \u09B0\u09BE\u0996\u09C1\u09A8",
  loginForgot: "\u09AA\u09BE\u09B8\u0993\u09AF\u09BC\u09BE\u09B0\u09CD\u09A1 \u09AD\u09C1\u09B2\u09C7 \u0997\u09C7\u099B\u09C7\u09A8?",
  loginLoggingIn: "\u09B2\u0997\u0987\u09A8 \u09B9\u099A\u09CD\u099B\u09C7...",
  loginBtn: "\u09B2\u0997\u0987\u09A8 \u0995\u09B0\u09C1\u09A8",
  loginNoAccount: "\u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09A8\u09C7\u0987?",
  loginCreateOne: "\u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C1\u09A8",
  loginRedirecting: "\u09B2\u0997\u0987\u09A8 \u09B9\u099A\u09CD\u099B\u09C7 \u098F\u09AC\u0982 \u09B9\u09CB\u09AE \u09AA\u09C7\u099C \u09B2\u09CB\u09A1 \u09B9\u099A\u09CD\u099B\u09C7...",
  registerEyebrow: "\u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C1\u09A8",
  registerTitle: "\u09B2\u09BE\u09B0\u09CD\u09A8\u09BF\u0982 \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09AB\u09B0\u09CD\u09AE\u09C7 \u09AF\u09CB\u0997 \u09A6\u09BF\u09A8\u0964",
  registerLead: "\u09AA\u09BE\u09A0, \u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u0995 \u098F\u09AC\u0982 \u0985\u0997\u09CD\u09B0\u0997\u09A4\u09BF \u099F\u09CD\u09B0\u09CD\u09AF\u09BE\u0995 \u0995\u09B0\u09A4\u09C7 \u0986\u09AA\u09A8\u09BE\u09B0 \u09AA\u09CD\u09B0\u09CB\u09AB\u09BE\u0987\u09B2 \u09B8\u09C7\u099F \u0986\u09AA \u0995\u09B0\u09C1\u09A8\u0964",
  registerNewLearner: "\u09A8\u09A4\u09C1\u09A8 \u09B6\u09BF\u0995\u09CD\u09B7\u09BE\u09B0\u09CD\u09A5\u09C0",
  registerStartStrong: "\u09AA\u09CD\u09B0\u09A5\u09AE \u09A6\u09BF\u09A8 \u09A5\u09C7\u0995\u09C7\u0987 \u09B6\u0995\u09CD\u09A4\u09BF\u09B6\u09BE\u09B2\u09C0\u09AD\u09BE\u09AC\u09C7 \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09C1\u09A8",
  registerF1Title: "\u09AC\u09CD\u09AF\u0995\u09CD\u09A4\u09BF\u0997\u09A4 \u09A1\u09CD\u09AF\u09BE\u09B6\u09AC\u09CB\u09B0\u09CD\u09A1",
  registerF1Desc: "\u0986\u09AA\u09A8\u09BF \u09AF\u09CB\u0997 \u09A6\u09C7\u0993\u09AF\u09BC\u09BE \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09B2\u09BE\u09B0\u09CD\u09A8\u09BF\u0982 \u09AA\u09BE\u09A5\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u0985\u0997\u09CD\u09B0\u0997\u09A4\u09BF \u09A6\u09C3\u09B6\u09CD\u09AF \u09AA\u09BE\u09A8\u0964",
  registerF2Title: "\u0995\u09BE\u09A0\u09BE\u09AE\u09CB\u09AC\u09A6\u09CD\u09A7 \u0985\u09A8\u09AC\u09CB\u09B0\u09CD\u09A1\u09BF\u0982",
  registerF2Desc: "\u09AB\u09CB\u0995\u09BE\u09B8\u09A1 \u0987\u09A8\u09CD\u099F\u09BE\u09B0\u09AB\u09C7\u09B8\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u098F\u0995\u099F\u09BF \u0997\u09BE\u0987\u09A1\u09C7\u09A1 \u09B8\u09C7\u099F\u0986\u09AA \u09AB\u09CD\u09B2\u09CB\u09A4\u09C7 \u09AF\u09BE\u09A8\u0964",
  registerF3Title: "\u09AC\u09CD\u09B2\u09CD\u09AF\u09BE\u0995-\u09AC\u09CD\u09B2\u09C1 \u09AA\u09B0\u09BF\u099A\u09AF\u09BC",
  registerF3Desc: "\u09B9\u09CB\u09AE \u098F\u09AC\u0982 \u09B2\u0997\u0987\u09A8 \u09AA\u09C7\u099C\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09A6\u09C3\u09B6\u09CD\u09AF\u09A4 \u0993 \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09B0\u09C0\u09AD\u09BE\u09AC\u09C7 \u09B8\u09BE\u09AE\u099E\u09CD\u099C\u09B8\u09CD\u09AF\u09AA\u09C2\u09B0\u09CD\u09A3\u0964",
  registerFullName: "\u09AA\u09C2\u09B0\u09CD\u09A3 \u09A8\u09BE\u09AE",
  registerFullNamePlaceholder: "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A8\u09BE\u09AE",
  registerFullNameError: "\u0986\u09AA\u09A8\u09BE\u09B0 \u09AA\u09C2\u09B0\u09CD\u09A3 \u09A8\u09BE\u09AE \u09A6\u09BF\u09A8\u0964",
  registerRole: "\u09AD\u09C2\u09AE\u09BF\u0995\u09BE \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0995\u09B0\u09C1\u09A8",
  registerRolePlaceholder: "\u098F\u0995\u099F\u09BF \u09AC\u09C7\u099B\u09C7 \u09A8\u09BF\u09A8",
  registerStudent: "\u09B6\u09BF\u0995\u09CD\u09B7\u09BE\u09B0\u09CD\u09A5\u09C0",
  registerTeacher: "\u09B6\u09BF\u0995\u09CD\u09B7\u0995",
  registerRoleError: "\u09B6\u09BF\u0995\u09CD\u09B7\u09BE\u09B0\u09CD\u09A5\u09C0 \u09AC\u09BE \u09B6\u09BF\u0995\u09CD\u09B7\u0995 \u09AC\u09C7\u099B\u09C7 \u09A8\u09BF\u09A8\u0964",
  registerPasswordPlaceholder: "\u09AA\u09BE\u09B8\u0993\u09AF\u09BC\u09BE\u09B0\u09CD\u09A1 \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C1\u09A8",
  registerConfirmPassword: "\u09AA\u09BE\u09B8\u0993\u09AF\u09BC\u09BE\u09B0\u09CD\u09A1 \u09A8\u09BF\u09B6\u09CD\u099A\u09BF\u09A4 \u0995\u09B0\u09C1\u09A8",
  registerRepeatPassword: "\u09AA\u09BE\u09B8\u0993\u09AF\u09BC\u09BE\u09B0\u09CD\u09A1 \u09AA\u09C1\u09A8\u09B0\u09BE\u09AF\u09BC \u09A6\u09BF\u09A8",
  registerConfirmPasswordError: "\u0986\u09AA\u09A8\u09BE\u09B0 \u09AA\u09BE\u09B8\u0993\u09AF\u09BC\u09BE\u09B0\u09CD\u09A1 \u09A8\u09BF\u09B6\u09CD\u099A\u09BF\u09A4 \u0995\u09B0\u09C1\u09A8\u0964",
  registerTerms: "\u0986\u09AE\u09BF \u09B2\u09BE\u09B0\u09CD\u09A8\u09BF\u0982 \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09AB\u09B0\u09CD\u09AE\u09C7\u09B0 \u09B6\u09B0\u09CD\u09A4\u09BE\u09AC\u09B2\u09C0\u09A4\u09C7 \u09B8\u09AE\u09CD\u09AE\u09A4\u0964",
  registerSubmitting: "\u099C\u09AE\u09BE \u09B9\u099A\u09CD\u099B\u09C7...",
  registerBtn: "\u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C1\u09A8",
  registerHaveAccount: "\u0987\u09A4\u09BF\u09AE\u09A7\u09CD\u09AF\u09C7 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u0986\u099B\u09C7?",
  registerLoginHere: "\u098F\u0996\u09BE\u09A8\u09C7 \u09B2\u0997\u0987\u09A8 \u0995\u09B0\u09C1\u09A8",
  registerGoHome: "\u09B9\u09CB\u09AE\u09C7 \u09AF\u09BE\u09A8"
};
var LanguageService = class _LanguageService {
  _lang = signal("en", ...ngDevMode ? [{ debugName: "_lang" }] : (
    /* istanbul ignore next */
    []
  ));
  lang = this._lang.asReadonly();
  isBangla = computed(() => this._lang() === "bn", ...ngDevMode ? [{ debugName: "isBangla" }] : (
    /* istanbul ignore next */
    []
  ));
  t = computed(() => this._lang() === "bn" ? BN : EN, ...ngDevMode ? [{ debugName: "t" }] : (
    /* istanbul ignore next */
    []
  ));
  toggle() {
    this._lang.update((l) => l === "en" ? "bn" : "en");
  }
  set(lang) {
    this._lang.set(lang);
  }
  static \u0275fac = function LanguageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LanguageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LanguageService, factory: _LanguageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/auth/login/login.ts
function Login_Conditional_9_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.lang.t().loginEmailError);
  }
}
function Login_Conditional_9_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.lang.t().loginPasswordError);
  }
}
function Login_Conditional_9_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.lang.t().loginLoggingIn, " ");
  }
}
function Login_Conditional_9_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.lang.t().loginBtn, " ");
  }
}
function Login_Conditional_9_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.apiMessage());
  }
}
function Login_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 5)(1, "header", 7)(2, "p", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 10)(9, "aside", 11)(10, "div", 12)(11, "span", 13);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h2");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ul", 14)(16, "li")(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "li")(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "li")(27, "strong");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "form", 15);
    \u0275\u0275listener("ngSubmit", function Login_Conditional_9_Template_form_ngSubmit_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(32, "div", 16)(33, "label", 17);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 18);
    \u0275\u0275conditionalCreate(36, Login_Conditional_9_Conditional_36_Template, 2, 1, "p", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 16)(38, "label", 20);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 21);
    \u0275\u0275conditionalCreate(41, Login_Conditional_9_Conditional_41_Template, 2, 1, "p", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 22)(43, "label", 23);
    \u0275\u0275element(44, "input", 24);
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "a", 25);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "button", 26);
    \u0275\u0275conditionalCreate(50, Login_Conditional_9_Conditional_50_Template, 1, 1)(51, Login_Conditional_9_Conditional_51_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(52, Login_Conditional_9_Conditional_52_Template, 2, 1, "p", 27);
    \u0275\u0275elementStart(53, "p", 27);
    \u0275\u0275text(54);
    \u0275\u0275elementStart(55, "a", 28);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().loginEyebrow);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().loginTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().loginLead);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().loginSecure);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().loginMode);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().loginF1Title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().loginF1Desc);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().loginF2Title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().loginF2Desc);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().loginF3Title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().loginF3Desc);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.loginForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().loginEmail);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.loginForm.controls.email.touched && ctx_r1.loginForm.controls.email.invalid ? 36 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().loginPassword);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.loginForm.controls.password.touched && ctx_r1.loginForm.controls.password.invalid ? 41 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().loginRemember);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().loginForgot);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSubmitting() ? 50 : 51);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.apiMessage() ? 52 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.lang.t().loginNoAccount, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().loginCreateOne);
  }
}
function Login_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "div", 29);
    \u0275\u0275element(2, "div", 30)(3, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().loginRedirecting);
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
  lang = inject(LanguageService);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Login, selectors: [["app-login"]], decls: 11, vars: 3, consts: [[1, "auth-shell"], [1, "auth-glow", "auth-glow-left"], [1, "auth-glow", "auth-glow-right"], [2, "position", "fixed", "top", "16px", "right", "16px", "z-index", "999"], ["type", "button", 1, "lang-toggle-btn", 3, "click"], [1, "auth-card", "card-surface"], ["aria-live", "polite", 1, "redirect-loader"], [1, "auth-copy"], [1, "eyebrow"], [1, "lead"], [1, "auth-layout"], [1, "auth-panel"], [1, "auth-panel-header"], [1, "panel-pill"], [1, "feature-list"], [1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "you@example.com"], [1, "field-error"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"], [1, "form-row"], [1, "remember"], ["type", "checkbox"], ["href", "#", 1, "forgot-link"], ["type", "submit", 1, "submit-button", 3, "disabled"], [1, "auth-footer"], ["routerLink", "/register"], ["aria-hidden", "true", 1, "loader-rail"], [1, "loader-line"], [1, "loader-orb"]], template: function Login_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "button", 4);
      \u0275\u0275listener("click", function Login_Template_button_click_4_listener() {
        return ctx.lang.toggle();
      });
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "\u{1F310}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(9, Login_Conditional_9_Template, 57, 23, "section", 5);
      \u0275\u0275conditionalCreate(10, Login_Conditional_10_Template, 6, 1, "section", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.lang.isBangla() ? "EN" : "\u09AC\u09BE\u0982");
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isRedirecting() ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isRedirecting() ? 10 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n.auth-shell[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  padding: 24px;\n  display: grid;\n  place-items: center;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at 12% 10%,\n      rgba(43, 130, 255, 0.12) 0%,\n      rgba(43, 130, 255, 0) 35%),\n    radial-gradient(\n      circle at 88% 88%,\n      rgba(25, 155, 255, 0.1) 0%,\n      rgba(25, 155, 255, 0) 38%),\n    #ffffff;\n}\n.auth-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 999px;\n  filter: blur(18px);\n  pointer-events: none;\n  opacity: 0.7;\n}\n.auth-glow-left[_ngcontent-%COMP%] {\n  top: -80px;\n  left: -80px;\n  width: 280px;\n  height: 280px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(26, 97, 255, 0.2) 0%,\n      rgba(26, 97, 255, 0) 72%);\n}\n.auth-glow-right[_ngcontent-%COMP%] {\n  right: -60px;\n  bottom: 40px;\n  width: 340px;\n  height: 340px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(78, 182, 255, 0.18) 0%,\n      rgba(78, 182, 255, 0) 72%);\n}\n.auth-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: min(1120px, 100%);\n  padding: 34px;\n  border-radius: 28px;\n  background: rgba(255, 255, 255, 0.96);\n  border: 1px solid #e4ecf7;\n  box-shadow: 0 18px 42px rgba(28, 70, 130, 0.12);\n  color: #172334;\n}\n.auth-copy[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.lang-toggle-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border: 1.5px solid #2563eb;\n  border-radius: 999px;\n  background: transparent;\n  color: #2563eb;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background 0.18s,\n    color 0.18s,\n    transform 0.15s;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.lang-toggle-btn[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  color: #fff;\n  transform: scale(1.04);\n}\n.lang-toggle-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.eyebrow[_ngcontent-%COMP%], \n.panel-pill[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: #2e6fd8;\n}\n.auth-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 10px 0 12px;\n  font-size: clamp(2.2rem, 4vw, 4rem);\n  line-height: 0.98;\n  letter-spacing: -0.05em;\n  color: #102030;\n}\n.lead[_ngcontent-%COMP%] {\n  max-width: 64ch;\n  color: #4a5f77;\n  line-height: 1.75;\n}\n.auth-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 0.92fr) minmax(340px, 1.08fr);\n  gap: 18px;\n}\n.auth-panel[_ngcontent-%COMP%], \n.auth-form[_ngcontent-%COMP%] {\n  border-radius: 24px;\n  background: #ffffff;\n  border: 1px solid #dce8f8;\n}\n.auth-panel[_ngcontent-%COMP%] {\n  padding: 26px;\n}\n.auth-panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  font-size: 1.5rem;\n}\n.feature-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 22px 0 0;\n  padding: 0;\n  display: grid;\n  gap: 14px;\n}\n.feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 18px;\n  background: #f7fbff;\n  border: 1px solid #dce8f8;\n}\n.feature-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  color: #16314f;\n}\n.feature-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #4f647a;\n  line-height: 1.6;\n}\n.auth-form[_ngcontent-%COMP%] {\n  padding: 26px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1f3b57;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 52px;\n  padding: 0 16px;\n  border-radius: 16px;\n  border: 1px solid #c9d9ee;\n  background: #ffffff;\n  color: #0f2439;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: rgba(110, 192, 255, 0.8);\n  box-shadow: 0 0 0 4px rgba(26, 97, 255, 0.16);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #7a8fa7;\n}\n.field-error[_ngcontent-%COMP%] {\n  color: #f3536d;\n  font-size: 0.92rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.remember[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: #41566f;\n}\n.forgot-link[_ngcontent-%COMP%], \n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1c67d5;\n  text-decoration: none;\n  font-weight: 700;\n}\n.submit-button[_ngcontent-%COMP%] {\n  min-height: 52px;\n  border: 0;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a61ff,\n      #4eb6ff);\n  color: #f8fbff;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n  box-shadow: 0 16px 30px rgba(26, 97, 255, 0.24);\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n}\n.submit-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 18px 34px rgba(26, 97, 255, 0.3);\n}\n.auth-footer[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #4e637b;\n  text-align: center;\n}\n.redirect-loader[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 60;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 26px;\n  padding: 24px 5vw;\n  background:\n    radial-gradient(\n      circle at 20% 30%,\n      rgba(26, 97, 255, 0.22),\n      transparent 36%),\n    radial-gradient(\n      circle at 80% 70%,\n      rgba(78, 182, 255, 0.16),\n      transparent 40%),\n    rgba(3, 6, 14, 0.9);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.redirect-loader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n  font-size: clamp(1.05rem, 2.6vw, 1.35rem);\n  font-weight: 700;\n  letter-spacing: 0.015em;\n  color: #e8f2ff;\n}\n.loader-rail[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(1100px, 100%);\n  margin-inline: auto;\n  height: 92px;\n  overflow: hidden;\n}\n.loader-line[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 100%;\n  height: 22px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(26, 97, 255, 0.9),\n      rgba(92, 193, 255, 0.95));\n  box-shadow: 0 0 34px rgba(70, 170, 255, 0.7);\n  transform: translateY(-50%) scaleX(0);\n  transform-origin: left center;\n  animation: _ngcontent-%COMP%_lineSweep 4s ease forwards;\n}\n.loader-orb[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -72px;\n  top: 50%;\n  width: 72px;\n  height: 72px;\n  margin-top: -36px;\n  border-radius: 50%;\n  border: 5px solid rgba(189, 227, 255, 0.92);\n  border-top-color: rgba(28, 111, 255, 1);\n  background:\n    radial-gradient(\n      circle at 28% 28%,\n      #ffffff 0%,\n      #8aceff 40%,\n      #2f8bff 100%);\n  box-shadow: 0 0 40px rgba(92, 193, 255, 0.75), 0 0 0 8px rgba(76, 178, 255, 0.16);\n  animation: _ngcontent-%COMP%_orbTravel 4s ease forwards, _ngcontent-%COMP%_orbSpin 0.75s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_lineSweep {\n  0% {\n    transform: translateY(-50%) scaleX(0);\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-50%) scaleX(1);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_orbTravel {\n  0% {\n    left: -72px;\n    opacity: 0;\n  }\n  15% {\n    opacity: 1;\n  }\n  50% {\n    left: calc(50% - 36px);\n    opacity: 1;\n  }\n  85% {\n    left: calc(100% - 72px);\n    opacity: 1;\n  }\n  100% {\n    left: calc(100% + 36px);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_orbSpin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 960px) {\n  .auth-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 720px) {\n  .auth-shell[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 22px;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .submit-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=login.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Login, [{
    type: Component,
    args: [{ selector: "app-login", imports: [ReactiveFormsModule, RouterLink], template: `<main class="auth-shell">
	<div class="auth-glow auth-glow-left"></div>
	<div class="auth-glow auth-glow-right"></div>

	<div style="position:fixed;top:16px;right:16px;z-index:999;">
		<button type="button" class="lang-toggle-btn" (click)="lang.toggle()">
			<span>\u{1F310}</span>
			<span>{{ lang.isBangla() ? 'EN' : '\u09AC\u09BE\u0982' }}</span>
		</button>
	</div>

	@if (!isRedirecting()) {
		<section class="auth-card card-surface">
			<header class="auth-copy">
				<p class="eyebrow">{{ lang.t().loginEyebrow }}</p>
				<h1>{{ lang.t().loginTitle }}</h1>
				<p class="lead">{{ lang.t().loginLead }}</p>
			</header>

			<div class="auth-layout">
				<aside class="auth-panel">
					<div class="auth-panel-header">
						<span class="panel-pill">{{ lang.t().loginSecure }}</span>
						<h2>{{ lang.t().loginMode }}</h2>
					</div>
					<ul class="feature-list">
						<li><strong>{{ lang.t().loginF1Title }}</strong><span>{{ lang.t().loginF1Desc }}</span></li>
						<li><strong>{{ lang.t().loginF2Title }}</strong><span>{{ lang.t().loginF2Desc }}</span></li>
						<li><strong>{{ lang.t().loginF3Title }}</strong><span>{{ lang.t().loginF3Desc }}</span></li>
					</ul>
				</aside>

				<form class="auth-form" [formGroup]="loginForm" (ngSubmit)="submit()">
					<div class="field">
						<label for="email">{{ lang.t().loginEmail }}</label>
						<input id="email" type="email" formControlName="email" placeholder="you@example.com" />
						@if (loginForm.controls.email.touched && loginForm.controls.email.invalid) {
							<p class="field-error">{{ lang.t().loginEmailError }}</p>
						}
					</div>
					<div class="field">
						<label for="password">{{ lang.t().loginPassword }}</label>
						<input id="password" type="password" formControlName="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" />
						@if (loginForm.controls.password.touched && loginForm.controls.password.invalid) {
							<p class="field-error">{{ lang.t().loginPasswordError }}</p>
						}
					</div>
					<div class="form-row">
						<label class="remember"><input type="checkbox" /><span>{{ lang.t().loginRemember }}</span></label>
						<a href="#" class="forgot-link">{{ lang.t().loginForgot }}</a>
					</div>
					<button type="submit" class="submit-button" [disabled]="isSubmitting()">
						@if (isSubmitting()) { {{ lang.t().loginLoggingIn }} } @else { {{ lang.t().loginBtn }} }
					</button>
					@if (apiMessage()) { <p class="auth-footer">{{ apiMessage() }}</p> }
					<p class="auth-footer">{{ lang.t().loginNoAccount }} <a routerLink="/register">{{ lang.t().loginCreateOne }}</a></p>
				</form>
			</div>
		</section>
	}

	@if (isRedirecting()) {
		<section class="redirect-loader" aria-live="polite">
			<div class="loader-rail" aria-hidden="true">
				<div class="loader-line"></div>
				<div class="loader-orb"></div>
			</div>
			<p>{{ lang.t().loginRedirecting }}</p>
		</section>
	}
</main>
`, styles: ["/* src/app/auth/login/login.css */\n.auth-shell {\n  position: relative;\n  min-height: 100vh;\n  padding: 24px;\n  display: grid;\n  place-items: center;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at 12% 10%,\n      rgba(43, 130, 255, 0.12) 0%,\n      rgba(43, 130, 255, 0) 35%),\n    radial-gradient(\n      circle at 88% 88%,\n      rgba(25, 155, 255, 0.1) 0%,\n      rgba(25, 155, 255, 0) 38%),\n    #ffffff;\n}\n.auth-glow {\n  position: absolute;\n  border-radius: 999px;\n  filter: blur(18px);\n  pointer-events: none;\n  opacity: 0.7;\n}\n.auth-glow-left {\n  top: -80px;\n  left: -80px;\n  width: 280px;\n  height: 280px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(26, 97, 255, 0.2) 0%,\n      rgba(26, 97, 255, 0) 72%);\n}\n.auth-glow-right {\n  right: -60px;\n  bottom: 40px;\n  width: 340px;\n  height: 340px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(78, 182, 255, 0.18) 0%,\n      rgba(78, 182, 255, 0) 72%);\n}\n.auth-card {\n  position: relative;\n  z-index: 1;\n  width: min(1120px, 100%);\n  padding: 34px;\n  border-radius: 28px;\n  background: rgba(255, 255, 255, 0.96);\n  border: 1px solid #e4ecf7;\n  box-shadow: 0 18px 42px rgba(28, 70, 130, 0.12);\n  color: #172334;\n}\n.auth-copy {\n  margin-bottom: 24px;\n}\n.lang-toggle-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border: 1.5px solid #2563eb;\n  border-radius: 999px;\n  background: transparent;\n  color: #2563eb;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background 0.18s,\n    color 0.18s,\n    transform 0.15s;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.lang-toggle-btn:hover {\n  background: #2563eb;\n  color: #fff;\n  transform: scale(1.04);\n}\n.lang-toggle-btn:active {\n  transform: scale(0.97);\n}\n.eyebrow,\n.panel-pill {\n  margin: 0;\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: #2e6fd8;\n}\n.auth-copy h1 {\n  margin: 10px 0 12px;\n  font-size: clamp(2.2rem, 4vw, 4rem);\n  line-height: 0.98;\n  letter-spacing: -0.05em;\n  color: #102030;\n}\n.lead {\n  max-width: 64ch;\n  color: #4a5f77;\n  line-height: 1.75;\n}\n.auth-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 0.92fr) minmax(340px, 1.08fr);\n  gap: 18px;\n}\n.auth-panel,\n.auth-form {\n  border-radius: 24px;\n  background: #ffffff;\n  border: 1px solid #dce8f8;\n}\n.auth-panel {\n  padding: 26px;\n}\n.auth-panel-header h2 {\n  margin: 10px 0 0;\n  font-size: 1.5rem;\n}\n.feature-list {\n  list-style: none;\n  margin: 22px 0 0;\n  padding: 0;\n  display: grid;\n  gap: 14px;\n}\n.feature-list li {\n  padding: 16px;\n  border-radius: 18px;\n  background: #f7fbff;\n  border: 1px solid #dce8f8;\n}\n.feature-list strong {\n  display: block;\n  margin-bottom: 6px;\n  color: #16314f;\n}\n.feature-list span {\n  color: #4f647a;\n  line-height: 1.6;\n}\n.auth-form {\n  padding: 26px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.field label {\n  font-weight: 700;\n  color: #1f3b57;\n}\n.field input {\n  width: 100%;\n  min-height: 52px;\n  padding: 0 16px;\n  border-radius: 16px;\n  border: 1px solid #c9d9ee;\n  background: #ffffff;\n  color: #0f2439;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.field input:focus {\n  border-color: rgba(110, 192, 255, 0.8);\n  box-shadow: 0 0 0 4px rgba(26, 97, 255, 0.16);\n}\n.field input::placeholder {\n  color: #7a8fa7;\n}\n.field-error {\n  color: #f3536d;\n  font-size: 0.92rem;\n}\n.form-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.remember {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: #41566f;\n}\n.forgot-link,\n.auth-footer a {\n  color: #1c67d5;\n  text-decoration: none;\n  font-weight: 700;\n}\n.submit-button {\n  min-height: 52px;\n  border: 0;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a61ff,\n      #4eb6ff);\n  color: #f8fbff;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n  box-shadow: 0 16px 30px rgba(26, 97, 255, 0.24);\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n}\n.submit-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 18px 34px rgba(26, 97, 255, 0.3);\n}\n.auth-footer {\n  margin: 0;\n  color: #4e637b;\n  text-align: center;\n}\n.redirect-loader {\n  position: fixed;\n  inset: 0;\n  z-index: 60;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 26px;\n  padding: 24px 5vw;\n  background:\n    radial-gradient(\n      circle at 20% 30%,\n      rgba(26, 97, 255, 0.22),\n      transparent 36%),\n    radial-gradient(\n      circle at 80% 70%,\n      rgba(78, 182, 255, 0.16),\n      transparent 40%),\n    rgba(3, 6, 14, 0.9);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.redirect-loader p {\n  margin: 0;\n  text-align: center;\n  font-size: clamp(1.05rem, 2.6vw, 1.35rem);\n  font-weight: 700;\n  letter-spacing: 0.015em;\n  color: #e8f2ff;\n}\n.loader-rail {\n  position: relative;\n  width: min(1100px, 100%);\n  margin-inline: auto;\n  height: 92px;\n  overflow: hidden;\n}\n.loader-line {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 100%;\n  height: 22px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(26, 97, 255, 0.9),\n      rgba(92, 193, 255, 0.95));\n  box-shadow: 0 0 34px rgba(70, 170, 255, 0.7);\n  transform: translateY(-50%) scaleX(0);\n  transform-origin: left center;\n  animation: lineSweep 4s ease forwards;\n}\n.loader-orb {\n  position: absolute;\n  left: -72px;\n  top: 50%;\n  width: 72px;\n  height: 72px;\n  margin-top: -36px;\n  border-radius: 50%;\n  border: 5px solid rgba(189, 227, 255, 0.92);\n  border-top-color: rgba(28, 111, 255, 1);\n  background:\n    radial-gradient(\n      circle at 28% 28%,\n      #ffffff 0%,\n      #8aceff 40%,\n      #2f8bff 100%);\n  box-shadow: 0 0 40px rgba(92, 193, 255, 0.75), 0 0 0 8px rgba(76, 178, 255, 0.16);\n  animation: orbTravel 4s ease forwards, orbSpin 0.75s linear infinite;\n}\n@keyframes lineSweep {\n  0% {\n    transform: translateY(-50%) scaleX(0);\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-50%) scaleX(1);\n    opacity: 1;\n  }\n}\n@keyframes orbTravel {\n  0% {\n    left: -72px;\n    opacity: 0;\n  }\n  15% {\n    opacity: 1;\n  }\n  50% {\n    left: calc(50% - 36px);\n    opacity: 1;\n  }\n  85% {\n    left: calc(100% - 72px);\n    opacity: 1;\n  }\n  100% {\n    left: calc(100% + 36px);\n    opacity: 0;\n  }\n}\n@keyframes orbSpin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 960px) {\n  .auth-layout {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 720px) {\n  .auth-shell {\n    padding: 16px;\n  }\n  .auth-card {\n    padding: 22px;\n  }\n  .form-row {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .submit-button {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=login.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Login, { className: "Login", filePath: "app/auth/login/login.ts", lineNumber: 13 });
})();

// src/app/auth/register/register.ts
function Register_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.lang.t().registerFullNameError);
  }
}
function Register_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.lang.t().registerRoleError);
  }
}
function Register_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.lang.t().loginEmailError);
  }
}
function Register_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.lang.t().loginPasswordError);
  }
}
function Register_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.lang.t().registerConfirmPasswordError);
  }
}
function Register_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.lang.t().registerSubmitting, " ");
  }
}
function Register_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.lang.t().registerBtn, " ");
  }
}
function Register_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
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
  lang = inject(LanguageService);
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
        this.apiMessage.set(response.message ?? "Registration successful! Redirecting to onboarding...");
        setTimeout(() => {
          this.router.navigateByUrl("/onboarding-preferences");
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Register, selectors: [["app-register"]], decls: 88, vars: 36, consts: [[1, "register-shell"], [1, "register-glow", "register-glow-left"], [1, "register-glow", "register-glow-right"], [2, "position", "fixed", "top", "16px", "right", "16px", "z-index", "999"], ["type", "button", 1, "lang-toggle-btn", 3, "click"], [1, "register-card", "card-surface"], [1, "register-copy"], [1, "eyebrow"], [1, "lead"], [1, "register-layout"], [1, "register-panel"], [1, "panel-header"], [1, "panel-pill"], [1, "feature-list"], [1, "register-form", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "fullname"], ["id", "fullname", "type", "text", "formControlName", "fullname", 3, "placeholder"], [1, "field-error"], ["for", "role"], ["id", "role", "formControlName", "role"], ["value", "", "disabled", ""], ["value", "0"], ["value", "1"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "you@example.com"], [1, "field-grid"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", 3, "placeholder"], ["for", "confirmPassword"], ["id", "confirmPassword", "type", "password", "formControlName", "confirmPassword", 3, "placeholder"], [1, "terms"], ["type", "checkbox"], ["type", "submit", 1, "submit-button", 3, "disabled"], [1, "auth-footer"], ["routerLink", "/login"], ["routerLink", "/homepage"]], template: function Register_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "button", 4);
      \u0275\u0275listener("click", function Register_Template_button_click_4_listener() {
        return ctx.lang.toggle();
      });
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "\u{1F310}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "section", 5)(10, "header", 6)(11, "p", 7);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "h1");
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 8);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 9)(18, "aside", 10)(19, "div", 11)(20, "span", 12);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "h2");
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "ul", 13)(25, "li")(26, "strong");
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span");
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "li")(31, "strong");
      \u0275\u0275text(32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span");
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "li")(36, "strong");
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span");
      \u0275\u0275text(39);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "form", 14);
      \u0275\u0275listener("ngSubmit", function Register_Template_form_ngSubmit_40_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(41, "div", 15)(42, "label", 16);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275element(44, "input", 17);
      \u0275\u0275conditionalCreate(45, Register_Conditional_45_Template, 2, 1, "p", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 15)(47, "label", 19);
      \u0275\u0275text(48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "select", 20)(50, "option", 21);
      \u0275\u0275text(51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "option", 22);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "option", 23);
      \u0275\u0275text(55);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(56, Register_Conditional_56_Template, 2, 1, "p", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 15)(58, "label", 24);
      \u0275\u0275text(59);
      \u0275\u0275elementEnd();
      \u0275\u0275element(60, "input", 25);
      \u0275\u0275conditionalCreate(61, Register_Conditional_61_Template, 2, 1, "p", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 26)(63, "div", 15)(64, "label", 27);
      \u0275\u0275text(65);
      \u0275\u0275elementEnd();
      \u0275\u0275element(66, "input", 28);
      \u0275\u0275conditionalCreate(67, Register_Conditional_67_Template, 2, 1, "p", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 15)(69, "label", 29);
      \u0275\u0275text(70);
      \u0275\u0275elementEnd();
      \u0275\u0275element(71, "input", 30);
      \u0275\u0275conditionalCreate(72, Register_Conditional_72_Template, 2, 1, "p", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "label", 31);
      \u0275\u0275element(74, "input", 32);
      \u0275\u0275elementStart(75, "span");
      \u0275\u0275text(76);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "button", 33);
      \u0275\u0275conditionalCreate(78, Register_Conditional_78_Template, 1, 1)(79, Register_Conditional_79_Template, 1, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(80, Register_Conditional_80_Template, 2, 1, "p", 34);
      \u0275\u0275elementStart(81, "p", 34);
      \u0275\u0275text(82);
      \u0275\u0275elementStart(83, "a", 35);
      \u0275\u0275text(84);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "p", 34)(86, "a", 36);
      \u0275\u0275text(87);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.lang.isBangla() ? "EN" : "\u09AC\u09BE\u0982");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.lang.t().registerEyebrow);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.lang.t().registerTitle);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.lang.t().registerLead);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.lang.t().registerNewLearner);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.lang.t().registerStartStrong);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.lang.t().registerF1Title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.lang.t().registerF1Desc);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.lang.t().registerF2Title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.lang.t().registerF2Desc);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.lang.t().registerF3Title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.lang.t().registerF3Desc);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.registerForm);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.lang.t().registerFullName);
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.lang.t().registerFullNamePlaceholder);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.registerForm.controls.fullname.touched && ctx.registerForm.controls.fullname.invalid ? 45 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.lang.t().registerRole);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.lang.t().registerRolePlaceholder);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.lang.t().registerStudent);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.lang.t().registerTeacher);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.registerForm.controls.role.touched && ctx.registerForm.controls.role.invalid ? 56 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.lang.t().loginEmail);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.registerForm.controls.email.touched && ctx.registerForm.controls.email.invalid ? 61 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.lang.t().loginPassword);
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.lang.t().registerPasswordPlaceholder);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.registerForm.controls.password.touched && ctx.registerForm.controls.password.invalid ? 67 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.lang.t().registerConfirmPassword);
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.lang.t().registerRepeatPassword);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.registerForm.controls.confirmPassword.touched && ctx.registerForm.controls.confirmPassword.invalid ? 72 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.lang.t().registerTerms);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSubmitting());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isSubmitting() ? 78 : 79);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.apiMessage() ? 80 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.lang.t().registerHaveAccount, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.lang.t().registerLoginHere);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.lang.t().registerGoHome);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n.register-shell[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  padding: 24px;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at 10% 10%,\n      rgba(43, 130, 255, 0.11) 0%,\n      rgba(43, 130, 255, 0) 36%),\n    radial-gradient(\n      circle at 90% 88%,\n      rgba(25, 155, 255, 0.08) 0%,\n      rgba(25, 155, 255, 0) 38%),\n    #ffffff;\n}\n.register-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: min(1120px, 100%);\n  padding: 34px;\n  border-radius: 28px;\n  background: rgba(255, 255, 255, 0.96);\n  border: 1px solid #e4ecf7;\n  box-shadow: 0 18px 42px rgba(28, 70, 130, 0.12);\n  color: #172334;\n}\n.lang-toggle-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border: 1.5px solid #2563eb;\n  border-radius: 999px;\n  background: transparent;\n  color: #2563eb;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background 0.18s,\n    color 0.18s,\n    transform 0.15s;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.lang-toggle-btn[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  color: #fff;\n  transform: scale(1.04);\n}\n.lang-toggle-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.register-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 999px;\n  filter: blur(18px);\n  pointer-events: none;\n  opacity: 0.7;\n}\n.register-glow-left[_ngcontent-%COMP%] {\n  top: -90px;\n  left: -90px;\n  width: 300px;\n  height: 300px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(26, 97, 255, 0.2) 0%,\n      rgba(26, 97, 255, 0) 72%);\n}\n.register-glow-right[_ngcontent-%COMP%] {\n  right: -70px;\n  bottom: 20px;\n  width: 330px;\n  height: 330px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(78, 182, 255, 0.18) 0%,\n      rgba(78, 182, 255, 0) 72%);\n}\n.register-copy[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.eyebrow[_ngcontent-%COMP%], \n.panel-pill[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: #2e6fd8;\n}\n.register-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 10px 0 12px;\n  font-size: clamp(2rem, 4vw, 3.7rem);\n  line-height: 0.98;\n  letter-spacing: -0.05em;\n  color: #102030;\n}\n.lead[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #4a5f77;\n  line-height: 1.7;\n}\n.register-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 0.92fr) minmax(340px, 1.08fr);\n  gap: 18px;\n}\n.register-panel[_ngcontent-%COMP%], \n.register-form[_ngcontent-%COMP%] {\n  border-radius: 24px;\n  background: #ffffff;\n  border: 1px solid #dce8f8;\n}\n.register-panel[_ngcontent-%COMP%] {\n  padding: 26px;\n}\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  font-size: 1.5rem;\n}\n.feature-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 22px 0 0;\n  padding: 0;\n  display: grid;\n  gap: 14px;\n}\n.feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 18px;\n  background: #f7fbff;\n  border: 1px solid #dce8f8;\n}\n.feature-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  color: #16314f;\n}\n.feature-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #4f647a;\n  line-height: 1.6;\n}\n.register-form[_ngcontent-%COMP%] {\n  padding: 26px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.field-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.terms[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1f3b57;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 52px;\n  padding: 0 16px;\n  border-radius: 16px;\n  border: 1px solid #c9d9ee;\n  background: #ffffff;\n  color: #0f2439;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 52px;\n  padding: 0 16px;\n  border-radius: 16px;\n  border: 1px solid #c9d9ee;\n  background: #ffffff;\n  color: #0f2439;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: rgba(110, 192, 255, 0.8);\n  box-shadow: 0 0 0 4px rgba(26, 97, 255, 0.16);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: rgba(110, 192, 255, 0.8);\n  box-shadow: 0 0 0 4px rgba(26, 97, 255, 0.16);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #7a8fa7;\n}\n.field-error[_ngcontent-%COMP%] {\n  color: #c3324a;\n  font-size: 0.92rem;\n  margin: 0;\n}\n.terms[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: #41566f;\n}\n.terms[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: #4eb6ff;\n}\n.submit-button[_ngcontent-%COMP%] {\n  min-height: 52px;\n  border: 0;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a61ff,\n      #4eb6ff);\n  color: #f8fbff;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n  box-shadow: 0 16px 30px rgba(26, 97, 255, 0.24);\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n}\n.submit-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 18px 34px rgba(26, 97, 255, 0.3);\n}\n.auth-footer[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #4e637b;\n  text-align: center;\n  line-height: 1.6;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1c67d5;\n  text-decoration: none;\n  font-weight: 700;\n}\n@media (max-width: 960px) {\n  .register-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .field-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 720px) {\n  .register-shell[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .register-card[_ngcontent-%COMP%] {\n    padding: 22px;\n  }\n  .submit-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=register.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Register, [{
    type: Component,
    args: [{ selector: "app-register", imports: [ReactiveFormsModule, RouterLink], template: `<main class="register-shell">
	<div class="register-glow register-glow-left"></div>
	<div class="register-glow register-glow-right"></div>

	<div style="position:fixed;top:16px;right:16px;z-index:999;">
		<button type="button" class="lang-toggle-btn" (click)="lang.toggle()">
			<span>\u{1F310}</span>
			<span>{{ lang.isBangla() ? 'EN' : '\u09AC\u09BE\u0982' }}</span>
		</button>
	</div>

	<section class="register-card card-surface">
		<header class="register-copy">
			<p class="eyebrow">{{ lang.t().registerEyebrow }}</p>
			<h1>{{ lang.t().registerTitle }}</h1>
			<p class="lead">{{ lang.t().registerLead }}</p>
		</header>

		<div class="register-layout">
			<aside class="register-panel">
				<div class="panel-header">
					<span class="panel-pill">{{ lang.t().registerNewLearner }}</span>
					<h2>{{ lang.t().registerStartStrong }}</h2>
				</div>
				<ul class="feature-list">
					<li><strong>{{ lang.t().registerF1Title }}</strong><span>{{ lang.t().registerF1Desc }}</span></li>
					<li><strong>{{ lang.t().registerF2Title }}</strong><span>{{ lang.t().registerF2Desc }}</span></li>
					<li><strong>{{ lang.t().registerF3Title }}</strong><span>{{ lang.t().registerF3Desc }}</span></li>
				</ul>
			</aside>

			<form class="register-form" [formGroup]="registerForm" (ngSubmit)="submit()">
				<div class="field">
					<label for="fullname">{{ lang.t().registerFullName }}</label>
					<input id="fullname" type="text" formControlName="fullname" [placeholder]="lang.t().registerFullNamePlaceholder" />
					@if (registerForm.controls.fullname.touched && registerForm.controls.fullname.invalid) {
						<p class="field-error">{{ lang.t().registerFullNameError }}</p>
					}
				</div>
				<div class="field">
					<label for="role">{{ lang.t().registerRole }}</label>
					<select id="role" formControlName="role">
						<option value="" disabled>{{ lang.t().registerRolePlaceholder }}</option>
						<option value="0">{{ lang.t().registerStudent }}</option>
						<option value="1">{{ lang.t().registerTeacher }}</option>
					</select>
					@if (registerForm.controls.role.touched && registerForm.controls.role.invalid) {
						<p class="field-error">{{ lang.t().registerRoleError }}</p>
					}
				</div>
				<div class="field">
					<label for="email">{{ lang.t().loginEmail }}</label>
					<input id="email" type="email" formControlName="email" placeholder="you@example.com" />
					@if (registerForm.controls.email.touched && registerForm.controls.email.invalid) {
						<p class="field-error">{{ lang.t().loginEmailError }}</p>
					}
				</div>
				<div class="field-grid">
					<div class="field">
						<label for="password">{{ lang.t().loginPassword }}</label>
						<input id="password" type="password" formControlName="password" [placeholder]="lang.t().registerPasswordPlaceholder" />
						@if (registerForm.controls.password.touched && registerForm.controls.password.invalid) {
							<p class="field-error">{{ lang.t().loginPasswordError }}</p>
						}
					</div>
					<div class="field">
						<label for="confirmPassword">{{ lang.t().registerConfirmPassword }}</label>
						<input id="confirmPassword" type="password" formControlName="confirmPassword" [placeholder]="lang.t().registerRepeatPassword" />
						@if (registerForm.controls.confirmPassword.touched && registerForm.controls.confirmPassword.invalid) {
							<p class="field-error">{{ lang.t().registerConfirmPasswordError }}</p>
						}
					</div>
				</div>
				<label class="terms"><input type="checkbox" /><span>{{ lang.t().registerTerms }}</span></label>
				<button type="submit" class="submit-button" [disabled]="isSubmitting()">
					@if (isSubmitting()) { {{ lang.t().registerSubmitting }} } @else { {{ lang.t().registerBtn }} }
				</button>
				@if (apiMessage()) { <p class="auth-footer">{{ apiMessage() }}</p> }
				<p class="auth-footer">{{ lang.t().registerHaveAccount }} <a routerLink="/login">{{ lang.t().registerLoginHere }}</a></p>
				<p class="auth-footer"><a routerLink="/homepage">{{ lang.t().registerGoHome }}</a></p>
			</form>
		</div>
	</section>
</main>
`, styles: ["/* src/app/auth/register/register.css */\n.register-shell {\n  position: relative;\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  padding: 24px;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at 10% 10%,\n      rgba(43, 130, 255, 0.11) 0%,\n      rgba(43, 130, 255, 0) 36%),\n    radial-gradient(\n      circle at 90% 88%,\n      rgba(25, 155, 255, 0.08) 0%,\n      rgba(25, 155, 255, 0) 38%),\n    #ffffff;\n}\n.register-card {\n  position: relative;\n  z-index: 1;\n  width: min(1120px, 100%);\n  padding: 34px;\n  border-radius: 28px;\n  background: rgba(255, 255, 255, 0.96);\n  border: 1px solid #e4ecf7;\n  box-shadow: 0 18px 42px rgba(28, 70, 130, 0.12);\n  color: #172334;\n}\n.lang-toggle-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border: 1.5px solid #2563eb;\n  border-radius: 999px;\n  background: transparent;\n  color: #2563eb;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background 0.18s,\n    color 0.18s,\n    transform 0.15s;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.lang-toggle-btn:hover {\n  background: #2563eb;\n  color: #fff;\n  transform: scale(1.04);\n}\n.lang-toggle-btn:active {\n  transform: scale(0.97);\n}\n.register-glow {\n  position: absolute;\n  border-radius: 999px;\n  filter: blur(18px);\n  pointer-events: none;\n  opacity: 0.7;\n}\n.register-glow-left {\n  top: -90px;\n  left: -90px;\n  width: 300px;\n  height: 300px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(26, 97, 255, 0.2) 0%,\n      rgba(26, 97, 255, 0) 72%);\n}\n.register-glow-right {\n  right: -70px;\n  bottom: 20px;\n  width: 330px;\n  height: 330px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(78, 182, 255, 0.18) 0%,\n      rgba(78, 182, 255, 0) 72%);\n}\n.register-copy {\n  margin-bottom: 24px;\n}\n.eyebrow,\n.panel-pill {\n  margin: 0;\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: #2e6fd8;\n}\n.register-copy h1 {\n  margin: 10px 0 12px;\n  font-size: clamp(2rem, 4vw, 3.7rem);\n  line-height: 0.98;\n  letter-spacing: -0.05em;\n  color: #102030;\n}\n.lead {\n  margin: 0;\n  color: #4a5f77;\n  line-height: 1.7;\n}\n.register-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 0.92fr) minmax(340px, 1.08fr);\n  gap: 18px;\n}\n.register-panel,\n.register-form {\n  border-radius: 24px;\n  background: #ffffff;\n  border: 1px solid #dce8f8;\n}\n.register-panel {\n  padding: 26px;\n}\n.panel-header h2 {\n  margin: 10px 0 0;\n  font-size: 1.5rem;\n}\n.feature-list {\n  list-style: none;\n  margin: 22px 0 0;\n  padding: 0;\n  display: grid;\n  gap: 14px;\n}\n.feature-list li {\n  padding: 16px;\n  border-radius: 18px;\n  background: #f7fbff;\n  border: 1px solid #dce8f8;\n}\n.feature-list strong {\n  display: block;\n  margin-bottom: 6px;\n  color: #16314f;\n}\n.feature-list span {\n  color: #4f647a;\n  line-height: 1.6;\n}\n.register-form {\n  padding: 26px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.field-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n}\n.field label,\n.terms {\n  font-weight: 700;\n  color: #1f3b57;\n}\n.field input {\n  width: 100%;\n  min-height: 52px;\n  padding: 0 16px;\n  border-radius: 16px;\n  border: 1px solid #c9d9ee;\n  background: #ffffff;\n  color: #0f2439;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.field select {\n  width: 100%;\n  min-height: 52px;\n  padding: 0 16px;\n  border-radius: 16px;\n  border: 1px solid #c9d9ee;\n  background: #ffffff;\n  color: #0f2439;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.field select:focus {\n  border-color: rgba(110, 192, 255, 0.8);\n  box-shadow: 0 0 0 4px rgba(26, 97, 255, 0.16);\n}\n.field input:focus {\n  border-color: rgba(110, 192, 255, 0.8);\n  box-shadow: 0 0 0 4px rgba(26, 97, 255, 0.16);\n}\n.field input::placeholder {\n  color: #7a8fa7;\n}\n.field-error {\n  color: #c3324a;\n  font-size: 0.92rem;\n  margin: 0;\n}\n.terms {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: #41566f;\n}\n.terms input {\n  accent-color: #4eb6ff;\n}\n.submit-button {\n  min-height: 52px;\n  border: 0;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a61ff,\n      #4eb6ff);\n  color: #f8fbff;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n  box-shadow: 0 16px 30px rgba(26, 97, 255, 0.24);\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n}\n.submit-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 18px 34px rgba(26, 97, 255, 0.3);\n}\n.auth-footer {\n  margin: 0;\n  color: #4e637b;\n  text-align: center;\n  line-height: 1.6;\n}\n.auth-footer a {\n  color: #1c67d5;\n  text-decoration: none;\n  font-weight: 700;\n}\n@media (max-width: 960px) {\n  .register-layout {\n    grid-template-columns: 1fr;\n  }\n  .field-grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 720px) {\n  .register-shell {\n    padding: 16px;\n  }\n  .register-card {\n    padding: 22px;\n  }\n  .submit-button {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=register.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Register, { className: "Register", filePath: "app/auth/register/register.ts", lineNumber: 14 });
})();

// src/app/auth/onboarding-preferences/onboarding-preferences.ts
function OnboardingPreferences_Conditional_9_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 13);
    \u0275\u0275domListener("click", function OnboardingPreferences_Conditional_9_For_7_Template_button_click_0_listener() {
      const option_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectSkillLevel(option_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r2, " ");
  }
}
function OnboardingPreferences_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 7)(1, "h1");
    \u0275\u0275text(2, "\u{1F3AF} Step 1: Skill Level");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "\u0986\u09AA\u09A8\u09BE\u09B0 \u09AC\u09B0\u09CD\u09A4\u09AE\u09BE\u09A8 skill level \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09C1\u09A8\u0964");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 11);
    \u0275\u0275repeaterCreate(6, OnboardingPreferences_Conditional_9_For_7_Template, 2, 1, "button", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r2.skillLevelOptions);
  }
}
function OnboardingPreferences_Conditional_10_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 13);
    \u0275\u0275domListener("click", function OnboardingPreferences_Conditional_10_For_7_Template_button_click_0_listener() {
      const option_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectGoal(option_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r5, " ");
  }
}
function OnboardingPreferences_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 8)(1, "h1");
    \u0275\u0275text(2, "\u{1F3AF} Step 2: Goal");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "\u09B6\u09BF\u0996\u09C7 \u0986\u09AA\u09A8\u09BF \u0995\u09CB\u09A8 goal \u0985\u09B0\u09CD\u099C\u09A8 \u0995\u09B0\u09A4\u09C7 \u099A\u09BE\u09A8?");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 11);
    \u0275\u0275repeaterCreate(6, OnboardingPreferences_Conditional_10_For_7_Template, 2, 1, "button", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r2.goalOptions);
  }
}
function OnboardingPreferences_Conditional_11_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 13);
    \u0275\u0275domListener("click", function OnboardingPreferences_Conditional_11_For_7_Template_button_click_0_listener() {
      const option_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectLanguage(option_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const option_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r7, " ");
  }
}
function OnboardingPreferences_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 9)(1, "h1");
    \u0275\u0275text(2, "\u{1F3AF} Step 3: Language");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "\u0995\u09CB\u09A8 \u09AD\u09BE\u09B7\u09BE\u09DF \u09B6\u09BF\u0996\u09A4\u09C7 \u0995\u09AE\u09AB\u09CB\u09B0\u09CD\u099F\u09C7\u09AC\u09B2?");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 11);
    \u0275\u0275repeaterCreate(6, OnboardingPreferences_Conditional_11_For_7_Template, 2, 1, "button", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r2.languageOptions);
  }
}
function OnboardingPreferences_Conditional_12_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 13);
    \u0275\u0275domListener("click", function OnboardingPreferences_Conditional_12_For_7_Template_button_click_0_listener() {
      const option_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleInterest(option_r10));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const option_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("option-card-active", ctx_r2.isInterestSelected(option_r10));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r10, " ");
  }
}
function OnboardingPreferences_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "section", 10)(1, "h1");
    \u0275\u0275text(2, "\u{1F3AF} Step 4: Interests (Multiple Select)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "\u0986\u09AA\u09A8\u09BE\u09B0 interest \u09AF\u09A4 \u0996\u09C1\u09B6\u09BF \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09C1\u09A8, \u09A4\u09BE\u09B0\u09AA\u09B0 continue \u09A6\u09BF\u09A8\u0964");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 11);
    \u0275\u0275repeaterCreate(6, OnboardingPreferences_Conditional_12_For_7_Template, 2, 3, "button", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "div", 15)(9, "button", 4);
    \u0275\u0275domListener("click", function OnboardingPreferences_Conditional_12_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.skipStep());
    });
    \u0275\u0275text(10, "Skip");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "button", 16);
    \u0275\u0275domListener("click", function OnboardingPreferences_Conditional_12_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.finishOnboarding());
    });
    \u0275\u0275text(12, "Continue");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r2.interestOptions);
  }
}
var OnboardingPreferences = class _OnboardingPreferences {
  router = inject(Router);
  service = inject(Service);
  step = signal(1, ...ngDevMode ? [{ debugName: "step" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedSkillLevel = signal("", ...ngDevMode ? [{ debugName: "selectedSkillLevel" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedGoal = signal("", ...ngDevMode ? [{ debugName: "selectedGoal" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedLanguage = signal("", ...ngDevMode ? [{ debugName: "selectedLanguage" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedInterests = signal([], ...ngDevMode ? [{ debugName: "selectedInterests" }] : (
    /* istanbul ignore next */
    []
  ));
  totalSteps = 4;
  skillLevelOptions = ["Beginner", "Intermediate", "Advanced"];
  goalOptions = ["Get a Job", "Freelancing", "Skill Upgrade", "Personal Interest"];
  languageOptions = ["English", "Bangla", "Both"];
  interestOptions = [
    "Programming",
    "Web Development",
    "Mobile App Development",
    "Data Science",
    "AI / Machine Learning",
    "UI/UX Design",
    "Cyber Security",
    "Business / Marketing"
  ];
  skipStep() {
    if (this.step() >= this.totalSteps) {
      this.finishOnboarding();
      return;
    }
    this.step.update((value) => value + 1);
  }
  selectSkillLevel(value) {
    this.selectedSkillLevel.set(value);
    this.step.update((currentStep) => Math.min(currentStep + 1, this.totalSteps));
  }
  selectGoal(value) {
    this.selectedGoal.set(value);
    this.step.update((currentStep) => Math.min(currentStep + 1, this.totalSteps));
  }
  selectLanguage(value) {
    this.selectedLanguage.set(value);
    this.step.update((currentStep) => Math.min(currentStep + 1, this.totalSteps));
  }
  toggleInterest(value) {
    this.selectedInterests.update((current) => {
      if (current.includes(value)) {
        return current.filter((item) => item !== value);
      }
      return [...current, value];
    });
  }
  isInterestSelected(value) {
    return this.selectedInterests().includes(value);
  }
  finishOnboarding() {
    const Payload = {
      skillLevel: this.selectedSkillLevel(),
      goal: this.selectedGoal(),
      Language: this.selectedLanguage(),
      interests: this.selectedInterests()
    };
    this.service.savePreferences(Payload).subscribe({
      next: () => {
        this.router.navigateByUrl("/home");
      },
      error: (err) => {
        console.error("Error saving preferences:", err);
      }
    });
  }
  static \u0275fac = function OnboardingPreferences_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OnboardingPreferences)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OnboardingPreferences, selectors: [["app-onboarding-preferences"]], decls: 13, vars: 8, consts: [[1, "onboarding-page"], [1, "onboarding-card"], [1, "card-head"], [1, "step-label"], ["type", "button", 1, "skip-button", 3, "click"], ["aria-hidden", "true", 1, "progress-bar"], [1, "progress-fill"], ["aria-label", "Skill level selection", 1, "step-block"], ["aria-label", "Goal selection", 1, "step-block"], ["aria-label", "Language selection", 1, "step-block"], ["aria-label", "Interest selection", 1, "step-block"], [1, "option-grid"], ["type", "button", 1, "option-card"], ["type", "button", 1, "option-card", 3, "click"], ["type", "button", 1, "option-card", 3, "option-card-active"], [1, "footer-actions"], ["type", "button", 1, "next-button", 3, "click"]], template: function OnboardingPreferences_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "main", 0)(1, "section", 1)(2, "header", 2)(3, "p", 3);
      \u0275\u0275text(4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "button", 4);
      \u0275\u0275domListener("click", function OnboardingPreferences_Template_button_click_5_listener() {
        return ctx.skipStep();
      });
      \u0275\u0275text(6, "Skip");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "div", 5);
      \u0275\u0275domElement(8, "span", 6);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(9, OnboardingPreferences_Conditional_9_Template, 8, 0, "section", 7);
      \u0275\u0275conditionalCreate(10, OnboardingPreferences_Conditional_10_Template, 8, 0, "section", 8);
      \u0275\u0275conditionalCreate(11, OnboardingPreferences_Conditional_11_Template, 8, 0, "section", 9);
      \u0275\u0275conditionalCreate(12, OnboardingPreferences_Conditional_12_Template, 13, 0, "section", 10);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2("Step ", ctx.step(), " of ", ctx.totalSteps);
      \u0275\u0275advance(4);
      \u0275\u0275styleProp("width", ctx.step() / ctx.totalSteps * 100, "%");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.step() === 1 ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.step() === 2 ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.step() === 3 ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.step() === 4 ? 12 : -1);
    }
  }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.onboarding-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 24px;\n  display: grid;\n  place-items: center;\n  background:\n    radial-gradient(\n      circle at 10% 10%,\n      rgba(59, 130, 246, 0.18),\n      transparent 28%),\n    radial-gradient(\n      circle at 88% 14%,\n      rgba(14, 165, 233, 0.16),\n      transparent 28%),\n    #f7f8fc;\n}\n.onboarding-card[_ngcontent-%COMP%] {\n  width: min(760px, 100%);\n  background: #ffffff;\n  border: 1px solid rgba(37, 99, 235, 0.16);\n  border-radius: 28px;\n  box-shadow: 0 20px 48px rgba(15, 23, 42, 0.1);\n  padding: 22px;\n}\n.card-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.step-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #334155;\n  font-weight: 700;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 9px;\n  border-radius: 999px;\n  background: #e2e8f0;\n  margin-top: 14px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #0ea5e9);\n  transition: width 0.22s ease;\n}\n.step-block[_ngcontent-%COMP%] {\n  margin-top: 26px;\n}\n.step-block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(1.3rem, 2.4vw, 1.75rem);\n  color: #0f172a;\n}\n.step-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  color: #475569;\n  font-size: 0.96rem;\n}\n.option-grid[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n.option-card[_ngcontent-%COMP%] {\n  border: 1px solid rgba(37, 99, 235, 0.24);\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff,\n      #f8fbff);\n  color: #0f172a;\n  border-radius: 16px;\n  min-height: 56px;\n  padding: 12px 14px;\n  font-weight: 700;\n  font-size: 0.95rem;\n  cursor: pointer;\n  text-align: left;\n  transition:\n    transform 0.16s ease,\n    box-shadow 0.16s ease,\n    border-color 0.16s ease;\n}\n.option-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  border-color: rgba(37, 99, 235, 0.42);\n  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.12);\n}\n.option-card-active[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border-color: transparent;\n  background:\n    linear-gradient(\n      135deg,\n      #1d4ed8,\n      #0ea5e9);\n  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.2);\n}\n.skip-button[_ngcontent-%COMP%], \n.next-button[_ngcontent-%COMP%] {\n  border: 1px solid rgba(37, 99, 235, 0.25);\n  border-radius: 999px;\n  min-height: 40px;\n  padding: 0 16px;\n  font-weight: 700;\n  cursor: pointer;\n}\n.skip-button[_ngcontent-%COMP%] {\n  color: #1d4ed8;\n  background: #ffffff;\n}\n.next-button[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border-color: transparent;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #0ea5e9);\n}\n.footer-actions[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n@media (max-width: 680px) {\n  .onboarding-page[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n  .onboarding-card[_ngcontent-%COMP%] {\n    padding: 16px;\n    border-radius: 20px;\n  }\n  .option-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .footer-actions[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n  .skip-button[_ngcontent-%COMP%], \n   .next-button[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=onboarding-preferences.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OnboardingPreferences, [{
    type: Component,
    args: [{ selector: "app-onboarding-preferences", changeDetection: ChangeDetectionStrategy.OnPush, template: '<main class="onboarding-page">\r\n  <section class="onboarding-card">\r\n    <header class="card-head">\r\n      <p class="step-label">Step {{ step() }} of {{ totalSteps }}</p>\r\n      <button type="button" class="skip-button" (click)="skipStep()">Skip</button>\r\n    </header>\r\n\r\n    <div class="progress-bar" aria-hidden="true">\r\n      <span class="progress-fill" [style.width.%]="(step() / totalSteps) * 100"></span>\r\n    </div>\r\n\r\n    @if (step() === 1) {\r\n      <section class="step-block" aria-label="Skill level selection">\r\n        <h1>\u{1F3AF} Step 1: Skill Level</h1>\r\n        <p>\u0986\u09AA\u09A8\u09BE\u09B0 \u09AC\u09B0\u09CD\u09A4\u09AE\u09BE\u09A8 skill level \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09C1\u09A8\u0964</p>\r\n\r\n        <div class="option-grid">\r\n          @for (option of skillLevelOptions; track option) {\r\n            <button type="button" class="option-card" (click)="selectSkillLevel(option)">\r\n              {{ option }}\r\n            </button>\r\n          }\r\n        </div>\r\n      </section>\r\n    }\r\n\r\n    @if (step() === 2) {\r\n      <section class="step-block" aria-label="Goal selection">\r\n        <h1>\u{1F3AF} Step 2: Goal</h1>\r\n        <p>\u09B6\u09BF\u0996\u09C7 \u0986\u09AA\u09A8\u09BF \u0995\u09CB\u09A8 goal \u0985\u09B0\u09CD\u099C\u09A8 \u0995\u09B0\u09A4\u09C7 \u099A\u09BE\u09A8?</p>\r\n\r\n        <div class="option-grid">\r\n          @for (option of goalOptions; track option) {\r\n            <button type="button" class="option-card" (click)="selectGoal(option)">\r\n              {{ option }}\r\n            </button>\r\n          }\r\n        </div>\r\n      </section>\r\n    }\r\n\r\n    @if (step() === 3) {\r\n      <section class="step-block" aria-label="Language selection">\r\n        <h1>\u{1F3AF} Step 3: Language</h1>\r\n        <p>\u0995\u09CB\u09A8 \u09AD\u09BE\u09B7\u09BE\u09DF \u09B6\u09BF\u0996\u09A4\u09C7 \u0995\u09AE\u09AB\u09CB\u09B0\u09CD\u099F\u09C7\u09AC\u09B2?</p>\r\n\r\n        <div class="option-grid">\r\n          @for (option of languageOptions; track option) {\r\n            <button type="button" class="option-card" (click)="selectLanguage(option)">\r\n              {{ option }}\r\n            </button>\r\n          }\r\n        </div>\r\n      </section>\r\n    }\r\n\r\n    @if (step() === 4) {\r\n      <section class="step-block" aria-label="Interest selection">\r\n        <h1>\u{1F3AF} Step 4: Interests (Multiple Select)</h1>\r\n        <p>\u0986\u09AA\u09A8\u09BE\u09B0 interest \u09AF\u09A4 \u0996\u09C1\u09B6\u09BF \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09C1\u09A8, \u09A4\u09BE\u09B0\u09AA\u09B0 continue \u09A6\u09BF\u09A8\u0964</p>\r\n\r\n        <div class="option-grid">\r\n          @for (option of interestOptions; track option) {\r\n            <button\r\n              type="button"\r\n              class="option-card"\r\n              [class.option-card-active]="isInterestSelected(option)"\r\n              (click)="toggleInterest(option)"\r\n            >\r\n              {{ option }}\r\n            </button>\r\n          }\r\n        </div>\r\n\r\n        <div class="footer-actions">\r\n          <button type="button" class="skip-button" (click)="skipStep()">Skip</button>\r\n          <button type="button" class="next-button" (click)="finishOnboarding()">Continue</button>\r\n        </div>\r\n      </section>\r\n    }\r\n  </section>\r\n</main>\r\n', styles: ["/* src/app/auth/onboarding-preferences/onboarding-preferences.css */\n:host {\n  display: block;\n}\n.onboarding-page {\n  min-height: 100vh;\n  padding: 24px;\n  display: grid;\n  place-items: center;\n  background:\n    radial-gradient(\n      circle at 10% 10%,\n      rgba(59, 130, 246, 0.18),\n      transparent 28%),\n    radial-gradient(\n      circle at 88% 14%,\n      rgba(14, 165, 233, 0.16),\n      transparent 28%),\n    #f7f8fc;\n}\n.onboarding-card {\n  width: min(760px, 100%);\n  background: #ffffff;\n  border: 1px solid rgba(37, 99, 235, 0.16);\n  border-radius: 28px;\n  box-shadow: 0 20px 48px rgba(15, 23, 42, 0.1);\n  padding: 22px;\n}\n.card-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.step-label {\n  font-size: 0.9rem;\n  color: #334155;\n  font-weight: 700;\n}\n.progress-bar {\n  width: 100%;\n  height: 9px;\n  border-radius: 999px;\n  background: #e2e8f0;\n  margin-top: 14px;\n  overflow: hidden;\n}\n.progress-fill {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #0ea5e9);\n  transition: width 0.22s ease;\n}\n.step-block {\n  margin-top: 26px;\n}\n.step-block h1 {\n  margin: 0;\n  font-size: clamp(1.3rem, 2.4vw, 1.75rem);\n  color: #0f172a;\n}\n.step-block p {\n  margin: 10px 0 0;\n  color: #475569;\n  font-size: 0.96rem;\n}\n.option-grid {\n  margin-top: 18px;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n.option-card {\n  border: 1px solid rgba(37, 99, 235, 0.24);\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff,\n      #f8fbff);\n  color: #0f172a;\n  border-radius: 16px;\n  min-height: 56px;\n  padding: 12px 14px;\n  font-weight: 700;\n  font-size: 0.95rem;\n  cursor: pointer;\n  text-align: left;\n  transition:\n    transform 0.16s ease,\n    box-shadow 0.16s ease,\n    border-color 0.16s ease;\n}\n.option-card:hover {\n  transform: translateY(-1px);\n  border-color: rgba(37, 99, 235, 0.42);\n  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.12);\n}\n.option-card-active {\n  color: #ffffff;\n  border-color: transparent;\n  background:\n    linear-gradient(\n      135deg,\n      #1d4ed8,\n      #0ea5e9);\n  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.2);\n}\n.skip-button,\n.next-button {\n  border: 1px solid rgba(37, 99, 235, 0.25);\n  border-radius: 999px;\n  min-height: 40px;\n  padding: 0 16px;\n  font-weight: 700;\n  cursor: pointer;\n}\n.skip-button {\n  color: #1d4ed8;\n  background: #ffffff;\n}\n.next-button {\n  color: #ffffff;\n  border-color: transparent;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #0ea5e9);\n}\n.footer-actions {\n  margin-top: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n@media (max-width: 680px) {\n  .onboarding-page {\n    padding: 14px;\n  }\n  .onboarding-card {\n    padding: 16px;\n    border-radius: 20px;\n  }\n  .option-grid {\n    grid-template-columns: 1fr;\n  }\n  .footer-actions {\n    justify-content: stretch;\n  }\n  .skip-button,\n  .next-button {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=onboarding-preferences.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OnboardingPreferences, { className: "OnboardingPreferences", filePath: "app/auth/onboarding-preferences/onboarding-preferences.ts", lineNumber: 11 });
})();

// src/app/base/home-page/home-page.ts
var _c02 = ["courseTrackViewport"];
var _c1 = (a0) => ["/course-details", a0];
var _c2 = () => ["/payment"];
var _forTrack0 = ($index, $item) => $item.id;
function HomePage_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275text(1, "Video History");
    \u0275\u0275elementEnd();
  }
}
function HomePage_Conditional_18_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 99)(1, "span", 98);
    \u0275\u0275text(2, "\u{1F393}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.lang.t().navTeacher, " ");
  }
}
function HomePage_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "details", 89)(1, "summary", 90)(2, "span", 91);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 92);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 93);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 94);
    \u0275\u0275element(8, "path", 95);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 96)(10, "a", 97)(11, "span", 98);
    \u0275\u0275text(12, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, HomePage_Conditional_18_Conditional_14_Template, 4, 1, "a", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 100);
    \u0275\u0275listener("click", function HomePage_Conditional_18_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.userInitial());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.lang.t().navHi, " ", ctx_r1.userName());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.lang.t().navProfile, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isTeacher() ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().navLogout);
  }
}
function HomePage_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 101);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 102);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.lang.t().navLogin);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().navGetStarted);
  }
}
function HomePage_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 39)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().coursesLoading);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().coursesLoadingDesc);
  }
}
function HomePage_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 39)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().coursesNone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().coursesNoneDesc);
  }
}
function HomePage_Conditional_80_For_6_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 124)(1, "span", 129);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 130);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const course_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2B50 ", course_r5.averageRating == null ? null : course_r5.averageRating.toFixed(1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", course_r5.totalRatings, " ratings)");
  }
}
function HomePage_Conditional_80_For_6_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 126);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c1, course_r5.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.lang.t().courseEnrolled);
  }
}
function HomePage_Conditional_80_For_6_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 127);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c2))("queryParams", ctx_r1.buildPaymentQueryParams(course_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.lang.t().courseEnrollNow);
  }
}
function HomePage_Conditional_80_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 112)(1, "div", 113)(2, "img", 114);
    \u0275\u0275listener("error", function HomePage_Conditional_80_For_6_Template_img_error_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onImageError($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 115);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 116);
    \u0275\u0275element(5, "rect", 117)(6, "path", 118)(7, "path", 119);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 120)(9, "span", 121);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h3");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 122);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ul", 123)(16, "li");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "li");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(22, HomePage_Conditional_80_For_6_Conditional_22_Template, 5, 2, "div", 124);
    \u0275\u0275elementStart(23, "div", 125);
    \u0275\u0275conditionalCreate(24, HomePage_Conditional_80_For_6_Conditional_24_Template, 2, 4, "a", 126)(25, HomePage_Conditional_80_For_6_Conditional_25_Template, 2, 4, "a", 127);
    \u0275\u0275elementStart(26, "a", 128);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const course_r5 = ctx.$implicit;
    const \u0275$index_200_r6 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap("--card-color:" + ctx_r1.getCardColor(\u0275$index_200_r6));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.getImageUrl(course_r5.thumbnailUrl), \u0275\u0275sanitizeUrl)("alt", course_r5.title);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", course_r5.level === "Beginner" ? ctx_r1.lang.t().levelBeginner : course_r5.level === "Intermediate" ? ctx_r1.lang.t().levelIntermediate : ctx_r1.lang.t().levelAdvanced, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r5.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\u{1F4DA} ", course_r5.lessonCount, " ", ctx_r1.lang.t().courseLessons);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("\u23F1 ", course_r5.durationMinutes, " ", ctx_r1.lang.t().courseDurationUnit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4B0} ", ctx_r1.formatPrice(course_r5.price));
    \u0275\u0275advance();
    \u0275\u0275conditional(course_r5.totalRatings && course_r5.totalRatings > 0 ? 22 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(course_r5.isEnrolled ? 24 : 25);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c1, course_r5.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.lang.t().courseStartLearning, " \u2192 ");
  }
}
function HomePage_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "button", 103);
    \u0275\u0275listener("click", function HomePage_Conditional_80_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollCourses("previous"));
    });
    \u0275\u0275text(2, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 104, 0);
    \u0275\u0275repeaterCreate(5, HomePage_Conditional_80_For_6_Template, 28, 18, "article", 105, _forTrack0);
    \u0275\u0275elementStart(7, "article", 106)(8, "a", 107)(9, "div", 108);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 109);
    \u0275\u0275element(11, "path", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "Browse All");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "button", 111);
    \u0275\u0275listener("click", function HomePage_Conditional_80_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollCourses("next"));
    });
    \u0275\u0275text(15, "\u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.courses());
  }
}
var HomePage = class _HomePage {
  authService = inject(AuthService);
  router = inject(Router);
  learningApi = inject(LearningApiService);
  lang = inject(LanguageService);
  courseTrackViewport;
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
  isLoadingCourses = signal(false, ...ngDevMode ? [{ debugName: "isLoadingCourses" }] : (
    /* istanbul ignore next */
    []
  ));
  courses = signal([], ...ngDevMode ? [{ debugName: "courses" }] : (
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
    void this.loadAllCourses();
  }
  ngAfterViewInit() {
    queueMicrotask(() => this.syncCourseCarouselState());
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
  getLevelClass(level) {
    if (level === "Advanced") {
      return "track-badge-adv";
    }
    if (level === "Intermediate") {
      return "track-badge-int";
    }
    return "track-badge-beg";
  }
  getImageClass(level) {
    if (level === "Advanced") {
      return "track-img-adv";
    }
    if (level === "Intermediate") {
      return "track-img-int";
    }
    return "track-img-beg";
  }
  getCardToneClass(index) {
    const tones = ["track-card-tone-1", "track-card-tone-2", "track-card-tone-3", "track-card-tone-4"];
    return tones[index % tones.length];
  }
  getCardColor(index) {
    const colors = [
      "#ec4899",
      // pink
      "#7c3aed",
      // violet
      "#06b6d4",
      // cyan
      "#f97316",
      // orange
      "#10b981",
      // emerald
      "#3b82f6",
      // blue
      "#f59e0b",
      // amber
      "#8b5cf6"
      // purple
    ];
    return colors[index % colors.length];
  }
  buildPaymentQueryParams(course) {
    return {
      courseId: course.id,
      courseTitle: course.title,
      amount: course.price
    };
  }
  formatPrice(price) {
    if (price <= 0) {
      return "Free";
    }
    return `\u09F3${price}`;
  }
  getImageUrl(thumbnailPath) {
    if (!thumbnailPath) {
      return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VlZWUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==";
    }
    return this.learningApi.buildDownloadUrl(thumbnailPath);
  }
  onImageError(event) {
    const img = event.target;
    img.src = this.getImageUrl(null);
  }
  scrollCourses(direction) {
    const viewport = this.courseTrackViewport?.nativeElement;
    if (!viewport) {
      return;
    }
    const cardWidth = viewport.querySelector(".track-card")?.getBoundingClientRect().width ?? 320;
    const gap = 18;
    const scrollAmount = (cardWidth + gap) * 1.05;
    const offset = direction === "next" ? scrollAmount : -scrollAmount;
    viewport.scrollBy({ left: offset, behavior: "smooth" });
  }
  async loadAllCourses() {
    this.isLoadingCourses.set(true);
    try {
      const response = await firstValueFrom(this.learningApi.getAllCourses());
      const responseWithAlternativeShape = response;
      const rawCourses = Array.isArray(response.data) ? response.data : Array.isArray(responseWithAlternativeShape.Data) ? responseWithAlternativeShape.Data : [];
      const mappedCourses = rawCourses.map((course) => this.mapCourseForHome(course));
      let coursesWithEnrollment = await this.attachEnrollmentState(mappedCourses);
      coursesWithEnrollment = await this.attachRatings(coursesWithEnrollment);
      this.courses.set(coursesWithEnrollment);
    } catch {
      this.courses.set([]);
    } finally {
      this.isLoadingCourses.set(false);
      queueMicrotask(() => this.syncCourseCarouselState());
    }
  }
  syncCourseCarouselState() {
    const viewport = this.courseTrackViewport?.nativeElement;
    if (!viewport) {
      return;
    }
    void viewport.scrollLeft;
  }
  mapCourseForHome(dto) {
    return {
      id: dto.id,
      title: dto.title,
      description: dto.description,
      level: this.normalizeLevel(dto.level),
      category: dto.category,
      instructorName: dto.instructorName,
      lessonCount: dto.lessonCount ?? 0,
      durationMinutes: dto.durationMinutes,
      price: dto.price,
      thumbnailUrl: this.learningApi.buildDownloadUrl(dto.thumbnailPath),
      isEnrolled: false
    };
  }
  async attachEnrollmentState(courses) {
    if (!this.authService.isLoggedIn()) {
      return courses;
    }
    return Promise.all(courses.map(async (course) => {
      try {
        const isEnrolled = await firstValueFrom(this.learningApi.checkMyEnrollment(course.id));
        return __spreadProps(__spreadValues({}, course), {
          isEnrolled
        });
      } catch {
        return __spreadProps(__spreadValues({}, course), {
          isEnrolled: false
        });
      }
    }));
  }
  async attachRatings(courses) {
    return Promise.all(courses.map(async (course) => {
      try {
        const response = await firstValueFrom(this.learningApi.getRatingSummary(course.id));
        const data = response?.data ?? response?.Data;
        if (data) {
          return __spreadProps(__spreadValues({}, course), {
            averageRating: parseFloat(data.averageRating) || 0,
            totalRatings: data.totalRatings || 0
          });
        }
      } catch {
      }
      return course;
    }));
  }
  normalizeLevel(level) {
    if (level === "Intermediate" || level === "Advanced") {
      return level;
    }
    return "Beginner";
  }
  static \u0275fac = function HomePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePage, selectors: [["app-home-page"]], viewQuery: function HomePage_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.courseTrackViewport = _t.first);
    }
  }, decls: 208, vars: 27, consts: [["courseTrackViewport", ""], [1, "home-page"], [1, "topbar"], ["routerLink", "/homepage", "aria-label", "Learning platform home", 1, "brand"], ["src", "/Logo2.png", "alt", "Touch & Solve", 1, "brand-logo"], ["aria-label", "Primary navigation", 1, "topbar-nav"], ["href", "#tracks"], ["routerLink", "/courses"], ["href", "#platform-identity"], ["routerLink", "/history"], [1, "topbar-actions"], ["type", "button", 1, "lang-toggle-btn", 3, "click"], [1, "lang-icon"], [1, "lang-label"], [1, "hero"], [1, "hero-copy"], [1, "h1-accent"], [1, "lead"], [1, "actions"], ["href", "#tracks", 1, "primary-action"], [1, "hero-stats"], [1, "hero-stat"], [1, "hero-stat-divider"], ["aria-hidden", "true", 1, "hero-visual"], [1, "hero-blob"], [1, "hero-float-card", "hero-float-card--top"], [1, "hero-float-icon"], ["src", "images/student.png", "alt", "Student", 1, "hero-student-img"], [1, "hero-float-card", "hero-float-card--bottom"], [1, "chart-label"], [1, "mini-chart"], [1, "bar", 2, "height", "28px", "background", "#f472b6"], [1, "bar", 2, "height", "42px", "background", "#60a5fa"], [1, "bar", 2, "height", "36px", "background", "#818cf8"], [1, "bar", 2, "height", "52px", "background", "#fbbf24"], [1, "bar", 2, "height", "44px", "background", "#34d399"], [1, "chart-ticks"], ["id", "tracks", 1, "cats-section"], [1, "cats-title"], [1, "track-empty-state"], [1, "cats-carousel-shell"], ["id", "platform-identity", 1, "feature-layout"], [1, "feature-list"], [1, "feature-card"], ["aria-hidden", "true", 1, "feature-icon-wrap"], [1, "feature-icon"], [1, "feature-body"], [1, "quote-card"], [1, "quote-top"], [1, "quote-label"], ["aria-hidden", "true", 1, "quote-mark"], [1, "quote-footer"], [1, "footer"], [1, "footer-newsletter"], [1, "footer-newsletter-copy"], [1, "footer-kicker"], ["action", "#", "onsubmit", "return false;", 1, "footer-newsletter-form"], ["type", "email", "placeholder", "Enter your email address", "aria-label", "Email address"], ["type", "submit"], [1, "footer-middle"], [1, "footer-shell"], [1, "footer-brand-panel"], ["routerLink", "/homepage", "aria-label", "Touch and Solve home", 1, "footer-logo-link"], ["src", "/Logo2.png", "alt", "Touch and Solve", 1, "footer-logo"], [1, "footer-brand-copy"], [1, "footer-kicker", "footer-kicker--soft"], [1, "footer-title"], [1, "footer-lead"], ["aria-label", "Social links", 1, "footer-social"], ["href", "#", "aria-label", "Facebook", 1, "social", "social-facebook"], ["viewBox", "0 0 24 24", "aria-hidden", "true", "focusable", "false"], ["d", "M14 8.5V7c0-.8.5-1 1-1h2V3h-3c-2.2 0-4 1.8-4 4v1.5H8V12h2v9h4v-9h2.7l.3-3.5H14z"], ["href", "#", "aria-label", "Twitter", 1, "social", "social-twitter"], ["d", "M18.3 7.6c.01.2.01.4.01.6 0 6.1-4.6 13.1-13.1 13.1-2.6 0-5.1-.8-7.1-2.2.4.1.8.1 1.2.1 2.2 0 4.2-.7 5.8-2-2.1 0-3.8-1.4-4.4-3.3.3.1.7.1 1 .1.4 0 .8-.1 1.2-.2-2.2-.4-3.8-2.4-3.8-4.7v-.1c.7.4 1.5.7 2.4.7-1.4-.9-2.2-2.5-2.2-4.2 0-.9.2-1.8.7-2.5 2.4 2.9 6 4.8 10 5-.1-.4-.1-.7-.1-1.1 0-2.5 2-4.5 4.5-4.5 1.3 0 2.5.5 3.3 1.4.9-.2 1.7-.5 2.4-.9-.3 1-1 1.7-1.8 2.2.8-.1 1.5-.3 2.2-.6-.5.8-1.1 1.5-1.9 2.1z"], ["aria-label", "Footer navigation", 1, "footer-links-panel"], [1, "footer-links"], [1, "footer-column"], ["href", "#about"], ["href", "#contact"], ["href", "#privacy"], ["href", "#blog"], ["href", "#help"], ["href", "#faq"], [1, "footer-bottom-dark"], [1, "footer-bottom", "footer-bottom--split"], [1, "footer-copyright"], [1, "footer-strapline"], [1, "footer-nav-small"], ["routerLink", "/"], [1, "user-menu"], ["aria-label", "User menu", 1, "user-chip"], [1, "user-avatar"], [1, "user-name"], ["aria-hidden", "true", 1, "menu-caret"], ["width", "10", "height", "6", "viewBox", "0 0 10 6", "fill", "currentColor"], ["d", "M1 1L5 5L9 1"], ["role", "menu", 1, "user-menu-list"], ["routerLink", "/profile", "role", "menuitem", 1, "user-menu-link"], [1, "menu-icon"], ["routerLink", "/teacher", "role", "menuitem", 1, "user-menu-link"], ["type", "button", 1, "nav-button", "nav-button-ghost", 3, "click"], ["routerLink", "/login", 1, "nav-button", "nav-button-ghost"], ["routerLink", "/register", 1, "nav-button", "nav-button-primary"], ["type", "button", "aria-label", "Scroll left", 1, "cats-arrow", "cats-arrow--prev", 3, "click"], [1, "cats-viewport"], [1, "cat-card", 3, "style"], [1, "cat-card", "cat-card--browse"], ["routerLink", "/courses", 1, "browse-all-link"], [1, "browse-all-circle"], ["width", "28", "height", "28", "viewBox", "0 0 28 28", "fill", "none"], ["d", "M6 14H22M22 14L16 8M22 14L16 20", "stroke", "#6d28d9", "stroke-width", "2.2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["type", "button", "aria-label", "Scroll right", 1, "cats-arrow", "cats-arrow--next", 3, "click"], [1, "cat-card"], [1, "cat-img-wrap"], ["loading", "eager", 1, "cat-thumbnail", 3, "error", "src", "alt"], ["aria-hidden", "true", 1, "cat-icon-fallback"], ["viewBox", "0 0 40 40", "fill", "none", "width", "36", "height", "36"], ["width", "40", "height", "40", "rx", "12", "fill", "rgba(255,255,255,0.2)"], ["d", "M12 28V14l8-4 8 4v14l-8 4-8-4z", "stroke", "white", "stroke-width", "2", "stroke-linejoin", "round"], ["d", "M20 10v18M12 14l8 4 8-4", "stroke", "white", "stroke-width", "2"], [1, "cat-body"], [1, "cat-badge"], [1, "cat-desc"], [1, "cat-meta"], [1, "cat-rating"], [1, "cat-footer"], [1, "cat-btn", "cat-btn--enrolled", 3, "routerLink"], [1, "cat-btn", "cat-btn--enroll", 3, "routerLink", "queryParams"], [1, "cat-link", 3, "routerLink"], [1, "cat-rating-star"], [1, "cat-rating-count"]], template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 1)(1, "header", 2)(2, "a", 3);
      \u0275\u0275element(3, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "nav", 5)(5, "a", 6);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 7);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "a", 8);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(11, HomePage_Conditional_11_Template, 2, 0, "a", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 10)(13, "button", 11);
      \u0275\u0275listener("click", function HomePage_Template_button_click_13_listener() {
        return ctx.lang.toggle();
      });
      \u0275\u0275elementStart(14, "span", 12);
      \u0275\u0275text(15, "\u{1F310}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 13);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(18, HomePage_Conditional_18_Template, 17, 6)(19, HomePage_Conditional_19_Template, 4, 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "section", 14)(21, "div", 15)(22, "h1");
      \u0275\u0275text(23);
      \u0275\u0275element(24, "br");
      \u0275\u0275text(25);
      \u0275\u0275element(26, "br");
      \u0275\u0275elementStart(27, "span", 16);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "p", 17);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 18)(32, "a", 19);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 20)(35, "div", 21)(36, "strong");
      \u0275\u0275text(37, "50+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span");
      \u0275\u0275text(39);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(40, "div", 22);
      \u0275\u0275elementStart(41, "div", 21)(42, "strong");
      \u0275\u0275text(43, "1M+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "span");
      \u0275\u0275text(45);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(46, "div", 23);
      \u0275\u0275element(47, "div", 24);
      \u0275\u0275elementStart(48, "div", 25)(49, "span", 26);
      \u0275\u0275text(50, "\u{1F468}\u200D\u{1F393}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div")(52, "strong");
      \u0275\u0275text(53, "175K");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "span");
      \u0275\u0275text(55, "Assisted Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(56, "img", 27);
      \u0275\u0275elementStart(57, "div", 28)(58, "div", 29);
      \u0275\u0275text(59, "Learning Chart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 30);
      \u0275\u0275element(61, "div", 31)(62, "div", 32)(63, "div", 33)(64, "div", 34)(65, "div", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 36)(67, "span");
      \u0275\u0275text(68, "20k");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "span");
      \u0275\u0275text(70, "10k");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "span");
      \u0275\u0275text(72, "1k");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(73, "section", 37)(74, "h2", 38);
      \u0275\u0275text(75);
      \u0275\u0275element(76, "br");
      \u0275\u0275text(77);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(78, HomePage_Conditional_78_Template, 5, 2, "article", 39)(79, HomePage_Conditional_79_Template, 5, 2, "article", 39)(80, HomePage_Conditional_80_Template, 16, 0, "div", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "section", 41)(82, "div", 42)(83, "article", 43)(84, "div", 44);
      \u0275\u0275element(85, "div", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 46)(87, "h3");
      \u0275\u0275text(88);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "p");
      \u0275\u0275text(90);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(91, "article", 43)(92, "div", 44);
      \u0275\u0275element(93, "div", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div", 46)(95, "h3");
      \u0275\u0275text(96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "p");
      \u0275\u0275text(98);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(99, "article", 43)(100, "div", 44);
      \u0275\u0275element(101, "div", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 46)(103, "h3");
      \u0275\u0275text(104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "p");
      \u0275\u0275text(106);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(107, "aside", 47)(108, "div", 48)(109, "p", 49);
      \u0275\u0275text(110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "div", 50);
      \u0275\u0275text(112, '"');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "blockquote");
      \u0275\u0275text(114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "div", 51)(116, "span");
      \u0275\u0275text(117);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "span");
      \u0275\u0275text(119);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(120, "footer", 52)(121, "section", 53)(122, "div", 54)(123, "p", 55);
      \u0275\u0275text(124, "Touch & Solve Updates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "h2");
      \u0275\u0275text(126, "Stay close to new courses, events, and progress updates.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "p");
      \u0275\u0275text(128, "Fresh learning drops, platform news, and helpful resources from our team.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "form", 56);
      \u0275\u0275element(130, "input", 57);
      \u0275\u0275elementStart(131, "button", 58);
      \u0275\u0275text(132, "Sign me up");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(133, "div", 59)(134, "div", 60)(135, "section", 61)(136, "a", 62);
      \u0275\u0275element(137, "img", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "div", 64)(139, "p", 65);
      \u0275\u0275text(140, "Touch & Solve");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "h3", 66);
      \u0275\u0275text(142, "We solve just in touch.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "p", 67);
      \u0275\u0275text(144, "A learning platform built with a clean structure, stronger outcomes, and a smooth student journey.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "div", 68)(146, "a", 69);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(147, "svg", 70);
      \u0275\u0275element(148, "path", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(149, "a", 72);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(150, "svg", 70);
      \u0275\u0275element(151, "path", 73);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(152, "section", 74)(153, "div", 75)(154, "div", 76)(155, "h5");
      \u0275\u0275text(156, "Explore");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "ul")(158, "li")(159, "a", 7);
      \u0275\u0275text(160, "Courses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "li")(162, "a", 6);
      \u0275\u0275text(163, "Tracks");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(164, "li")(165, "a", 8);
      \u0275\u0275text(166, "Features");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(167, "div", 76)(168, "h5");
      \u0275\u0275text(169, "Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "ul")(171, "li")(172, "a", 77);
      \u0275\u0275text(173, "About Us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(174, "li")(175, "a", 78);
      \u0275\u0275text(176, "Contact");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "li")(178, "a", 79);
      \u0275\u0275text(179, "Privacy Policy");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(180, "div", 76)(181, "h5");
      \u0275\u0275text(182, "Learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "ul")(184, "li")(185, "a", 80);
      \u0275\u0275text(186, "Blog");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(187, "li")(188, "a", 81);
      \u0275\u0275text(189, "Help Center");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(190, "li")(191, "a", 82);
      \u0275\u0275text(192, "FAQ");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(193, "div", 83)(194, "div", 84)(195, "div", 85);
      \u0275\u0275text(196, "\xA9 2024 Touch & Solve Learning Platform. All rights reserved.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "div", 86);
      \u0275\u0275text(198, "We solve just in touch.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "div", 87)(200, "a", 88);
      \u0275\u0275text(201, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "a", 77);
      \u0275\u0275text(203, "About");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "a", 78);
      \u0275\u0275text(205, "Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "a", 80);
      \u0275\u0275text(207, "Blog");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.lang.t().navTracks);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.lang.t().navCourses);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.lang.t().navVision);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoggedIn() ? 11 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", ctx.lang.isBangla() ? "Switch to English" : "\u09AC\u09BE\u0982\u09B2\u09BE\u09AF\u09BC \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09C1\u09A8");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.lang.isBangla() ? "EN" : "\u09AC\u09BE\u0982");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoggedIn() ? 18 : 19);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.lang.t().heroH1Part1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.lang.t().heroH1Part2);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.lang.t().heroH1Accent);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.lang.t().heroLead);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.lang.t().heroExplore);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.lang.t().statLessons);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.lang.t().statLearners);
      \u0275\u0275advance(30);
      \u0275\u0275textInterpolate1(" ", ctx.lang.t().sectionH2Line1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.lang.t().sectionH2Line2, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoadingCourses() ? 78 : ctx.courses().length === 0 ? 79 : 80);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.lang.t().feature1Title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.lang.t().feature1Desc);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.lang.t().feature2Title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.lang.t().feature2Desc);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.lang.t().feature3Title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.lang.t().feature3Desc);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.lang.t().quoteLabel);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.lang.t().quoteText);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.lang.t().quoteFooter1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.lang.t().quoteFooter2);
    }
  }, dependencies: [RouterLink], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&display=swap";\n\n\n[_nghost-%COMP%], \n.home-page[_ngcontent-%COMP%] {\n  --c-bg: #f8f8ff;\n  --c-white: #ffffff;\n  --c-blue: #2563eb;\n  --c-blue-h: #1d4ed8;\n  --c-blue-lt: #eff6ff;\n  --c-violet: #7c3aed;\n  --c-violet-lt: #f5f3ff;\n  --c-orange: #f97316;\n  --c-text: #111827;\n  --c-text-2: rgba(17,24,39,0.60);\n  --c-text-3: rgba(17,24,39,0.36);\n  --c-border: rgba(17,24,39,0.09);\n  --r-sm: 10px;\n  --r-md: 16px;\n  --r-lg: 22px;\n  --r-xl: 30px;\n  --font-d: "Bricolage Grotesque", sans-serif;\n  --font-b: "Inter", sans-serif;\n  --sh-sm: 0 2px 8px rgba(0,0,0,0.07);\n  --sh-md: 0 6px 24px rgba(0,0,0,0.09);\n  --sh-lg: 0 12px 48px rgba(0,0,0,0.11);\n}\n*[_ngcontent-%COMP%], \n*[_ngcontent-%COMP%]::before, \n*[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n  margin: 0;\n}\n.home-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 18px 28px 80px;\n  background: var(--c-bg);\n  color: var(--c-text);\n  font-family: var(--font-b);\n  font-size: 15px;\n  line-height: 1.6;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%] {\n  font-family: var(--font-d);\n  margin: 0;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 20px;\n  margin-bottom: 40px;\n  border-radius: var(--r-xl);\n  border: 1px solid var(--c-border);\n  background: rgba(255, 255, 255, 0.92);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  box-shadow: var(--sh-sm);\n  position: sticky;\n  top: 12px;\n  z-index: 50;\n}\n.brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  height: 38px;\n  width: auto;\n  max-width: 160px;\n  object-fit: contain;\n}\n.topbar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  margin-left: auto;\n}\n.topbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border-radius: 999px;\n  text-decoration: none;\n  font-size: 0.87rem;\n  font-weight: 500;\n  color: var(--c-text-2);\n  transition: background 0.18s, color 0.18s;\n}\n.topbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: var(--c-blue-lt);\n  color: var(--c-blue);\n}\n.topbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.lang-toggle-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border: 1.5px solid var(--c-blue);\n  border-radius: 999px;\n  background: transparent;\n  color: var(--c-blue);\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: var(--font-b);\n  transition:\n    background 0.18s,\n    color 0.18s,\n    transform 0.15s;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.lang-toggle-btn[_ngcontent-%COMP%]:hover {\n  background: var(--c-blue);\n  color: #fff;\n  transform: scale(1.04);\n}\n.lang-toggle-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.lang-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  line-height: 1;\n}\n.lang-label[_ngcontent-%COMP%] {\n  letter-spacing: 0.02em;\n}\n.user-menu[_ngcontent-%COMP%] {\n  position: relative;\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  padding: 5px 12px 5px 5px;\n  border-radius: 999px;\n  border: 1px solid var(--c-border);\n  background: rgba(37, 99, 235, 0.04);\n  color: var(--c-text-2);\n  font-size: 0.87rem;\n  font-weight: 500;\n  list-style: none;\n  transition: border-color 0.18s, background 0.18s;\n}\n.user-chip[_ngcontent-%COMP%]:hover {\n  background: var(--c-blue-lt);\n}\n.user-menu[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.user-menu[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]::-webkit-details-marker {\n  display: none;\n}\n.menu-caret[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n}\n.user-menu[open][_ngcontent-%COMP%]   .menu-caret[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.user-menu-list[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  min-width: 180px;\n  padding: 6px;\n  border-radius: var(--r-md);\n  border: 1px solid var(--c-border);\n  background: white;\n  box-shadow: var(--sh-md);\n  z-index: 60;\n}\n.user-menu-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-radius: var(--r-sm);\n  text-decoration: none;\n  font-size: 0.87rem;\n  font-weight: 500;\n  color: var(--c-text-2);\n  transition: background 0.15s, color 0.15s;\n}\n.user-menu-link[_ngcontent-%COMP%]:hover {\n  background: var(--c-blue-lt);\n  color: var(--c-blue);\n}\n.menu-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--c-blue),\n      #0ea5e9);\n  color: white;\n  font-size: 0.76rem;\n  font-weight: 700;\n  font-family: var(--font-d);\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 0.87rem;\n  font-weight: 600;\n  color: var(--c-text);\n}\n.nav-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  min-height: 38px;\n  padding: 0 18px;\n  border-radius: 999px;\n  font-size: 0.87rem;\n  font-weight: 600;\n  text-decoration: none;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-family: var(--font-b);\n  transition:\n    transform 0.18s,\n    background 0.18s,\n    border-color 0.18s,\n    box-shadow 0.18s;\n}\n.nav-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.nav-button-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: var(--c-border);\n  color: var(--c-text-2);\n}\n.nav-button-ghost[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-blue);\n  color: var(--c-blue);\n  background: var(--c-blue-lt);\n}\n.nav-button-primary[_ngcontent-%COMP%] {\n  background: var(--c-blue);\n  color: white;\n  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.28);\n}\n.nav-button-primary[_ngcontent-%COMP%]:hover {\n  background: var(--c-blue-h);\n}\n.hero[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 40px;\n  align-items: center;\n  min-height: 480px;\n  margin-bottom: 64px;\n}\n.hero-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: clamp(2.6rem, 4.5vw, 4rem);\n  font-weight: 800;\n  line-height: 1.08;\n  letter-spacing: -0.04em;\n  color: var(--c-text);\n}\n.h1-accent[_ngcontent-%COMP%] {\n  color: var(--c-orange);\n}\n.lead[_ngcontent-%COMP%] {\n  color: var(--c-text-2);\n  font-size: 1rem;\n  line-height: 1.75;\n  max-width: 50ch;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 28px;\n}\n.primary-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 50px;\n  padding: 0 32px;\n  border-radius: 12px;\n  background: var(--c-violet);\n  color: white;\n  font-weight: 700;\n  font-size: 0.95rem;\n  text-decoration: none;\n  font-family: var(--font-b);\n  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.35);\n  transition:\n    transform 0.2s,\n    box-shadow 0.2s,\n    background 0.2s;\n}\n.primary-action[_ngcontent-%COMP%]:hover {\n  background: #6d28d9;\n  transform: translateY(-2px);\n  box-shadow: 0 10px 30px rgba(124, 58, 237, 0.40);\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.hero-stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.hero-stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: var(--font-d);\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: var(--c-text);\n  letter-spacing: -0.04em;\n}\n.hero-stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.80rem;\n  color: var(--c-text-3);\n  font-weight: 500;\n}\n.hero-stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: var(--c-border);\n}\n.hero-visual[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 500px;\n  overflow: visible;\n}\n.hero-blob[_ngcontent-%COMP%] {\n  display: none;\n}\n.hero-student-img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 460px;\n  height: auto;\n  object-fit: contain;\n  mix-blend-mode: normal;\n  display: block;\n}\n.hero-float-card[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  border-radius: 14px;\n  background: white;\n  box-shadow: var(--sh-md);\n  border: 1px solid rgba(17, 24, 39, 0.07);\n}\n.hero-float-card--top[_ngcontent-%COMP%] {\n  top: 20px;\n  left: 160px;\n}\n.hero-float-card--bottom[_ngcontent-%COMP%] {\n  bottom: 30px;\n  left: 160px;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 14px 18px;\n  z-index: 4;\n}\n.hero-float-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.hero-float-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-d);\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--c-text);\n}\n.hero-float-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--c-text-3);\n}\n.chart-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--c-text);\n  margin-bottom: 8px;\n}\n.mini-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 5px;\n  height: 60px;\n}\n.bar[_ngcontent-%COMP%] {\n  width: 16px;\n  border-radius: 4px 4px 0 0;\n}\n.chart-ticks[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 4px;\n  margin-top: 6px;\n}\n.chart-ticks[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.70rem;\n  color: var(--c-text-3);\n}\n.cats-section[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n.cats-title[_ngcontent-%COMP%] {\n  font-size: clamp(1.6rem, 2.6vw, 2.2rem);\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  line-height: 1.15;\n  margin-bottom: 28px;\n  color: var(--c-text);\n}\n.cats-carousel-shell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  gap: 10px;\n}\n.cats-viewport[_ngcontent-%COMP%] {\n  flex: 1;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 310px;\n  gap: 18px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding: 6px 4px 20px;\n  scroll-snap-type: x mandatory;\n  scrollbar-width: none;\n}\n.cats-viewport[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.cat-card[_ngcontent-%COMP%] {\n  scroll-snap-align: start;\n  border-radius: var(--r-lg);\n  background: var(--card-color, #7c3aed);\n  padding: 0 0 20px 0;\n  display: flex;\n  flex-direction: column;\n  min-height: 410px;\n  position: relative;\n  overflow: hidden;\n  transition: transform 0.25s, box-shadow 0.25s;\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);\n}\n.cat-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -40px;\n  right: -40px;\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.12);\n  pointer-events: none;\n}\n.cat-card[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -30px;\n  left: -20px;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.07);\n  pointer-events: none;\n}\n.cat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.18);\n}\n.cat-card--browse[_ngcontent-%COMP%] {\n  background: white;\n  border: 1.5px dashed rgba(109, 40, 217, 0.25);\n  box-shadow: none;\n  align-items: center;\n  justify-content: center;\n  min-width: 110px;\n  max-width: 130px;\n}\n.cat-card--browse[_ngcontent-%COMP%]::before, \n.cat-card--browse[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.cat-card--browse[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-violet);\n  transform: translateY(-4px);\n  box-shadow: var(--sh-md);\n}\n.browse-all-link[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  color: var(--c-violet);\n  font-size: 0.88rem;\n  font-weight: 700;\n}\n.browse-all-circle[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: var(--c-violet-lt);\n  display: grid;\n  place-items: center;\n  border: 1.5px solid rgba(109, 40, 217, 0.20);\n  transition: background 0.18s;\n}\n.browse-all-link[_ngcontent-%COMP%]:hover   .browse-all-circle[_ngcontent-%COMP%] {\n  background: #ede9fe;\n}\n.cat-img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 175px;\n  border-radius: var(--r-lg) var(--r-lg) 0 0;\n  overflow: hidden;\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.15);\n}\n.cat-thumbnail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.3s;\n}\n.cat-card[_ngcontent-%COMP%]:hover   .cat-thumbnail[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.cat-thumbnail[_ngcontent-%COMP%]:not([src]), \n.cat-thumbnail[src=""][_ngcontent-%COMP%] {\n  display: none;\n}\n.cat-icon-fallback[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  place-items: center;\n}\n.cat-body[_ngcontent-%COMP%] {\n  padding: 16px 18px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n.cat-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  width: fit-content;\n  padding: 4px 11px;\n  border-radius: 5px;\n  font-size: 0.69rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  background: rgba(255, 255, 255, 0.22);\n  color: white;\n}\n.cat-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.06rem;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n  line-height: 1.3;\n  color: white;\n}\n.cat-desc[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: rgba(255, 255, 255, 0.78);\n  line-height: 1.55;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n}\n.cat-meta[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.cat-meta[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.79rem;\n  color: rgba(255, 255, 255, 0.82);\n}\n.cat-rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin: 8px 0 0;\n  padding: 8px 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.15);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.15);\n}\n.cat-rating-star[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.84rem;\n  color: #fbbf24;\n}\n.cat-rating-count[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgba(255, 255, 255, 0.70);\n}\n.cat-footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding: 10px 18px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  border-top: 1px solid rgba(255, 255, 255, 0.15);\n}\n.cat-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 32px;\n  padding: 0 14px;\n  border-radius: 7px;\n  font-size: 0.79rem;\n  font-weight: 700;\n  text-decoration: none;\n  font-family: var(--font-b);\n  transition: transform 0.18s, background 0.18s;\n}\n.cat-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.cat-btn--enroll[_ngcontent-%COMP%] {\n  background: white;\n  color: var(--c-violet);\n}\n.cat-btn--enroll[_ngcontent-%COMP%]:hover {\n  background: #f5f3ff;\n}\n.cat-btn--enrolled[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.20);\n  color: white;\n  border: 1px solid rgba(255, 255, 255, 0.35);\n}\n.cat-btn--enrolled[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.30);\n}\n.cat-link[_ngcontent-%COMP%] {\n  font-size: 0.79rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.88);\n  text-decoration: none;\n}\n.cat-link[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.cats-arrow[_ngcontent-%COMP%] {\n  align-self: center;\n  display: grid;\n  place-items: center;\n  width: 44px;\n  height: 44px;\n  border: 1px solid var(--c-border);\n  border-radius: 50%;\n  background: white;\n  color: var(--c-text);\n  font-size: 1.6rem;\n  line-height: 1;\n  box-shadow: var(--sh-sm);\n  cursor: pointer;\n  flex-shrink: 0;\n  transition:\n    transform 0.2s,\n    border-color 0.2s,\n    box-shadow 0.2s,\n    color 0.2s;\n}\n.cats-arrow[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  border-color: var(--c-violet);\n  color: var(--c-violet);\n  box-shadow: 0 6px 20px rgba(109, 40, 217, 0.16);\n}\n.cats-arrow--prev[_ngcontent-%COMP%] {\n  margin-left: 2px;\n}\n.cats-arrow--next[_ngcontent-%COMP%] {\n  margin-right: 2px;\n}\n.track-empty-state[_ngcontent-%COMP%] {\n  border-radius: var(--r-lg);\n  border: 1px solid var(--c-border);\n  background: white;\n  padding: 36px;\n  text-align: center;\n  box-shadow: var(--sh-sm);\n}\n.track-empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-bottom: 8px;\n}\n.track-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--c-text-2);\n}\n.feature-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);\n  gap: 18px;\n  margin-top: 56px;\n}\n.feature-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.feature-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  padding: 20px 22px;\n  border-radius: var(--r-md);\n  border: 1px solid var(--c-border);\n  background: white;\n  box-shadow: var(--sh-sm);\n  transition:\n    border-color 0.2s,\n    box-shadow 0.2s,\n    transform 0.2s;\n}\n.feature-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(109, 40, 217, 0.20);\n  box-shadow: var(--sh-md);\n  transform: translateX(4px);\n}\n.feature-icon-wrap[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: var(--c-violet-lt);\n  border: 1px solid rgba(109, 40, 217, 0.15);\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n}\n.feature-icon[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: var(--c-violet);\n  box-shadow: 0 0 8px rgba(109, 40, 217, 0.4);\n}\n.feature-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.97rem;\n  margin-bottom: 4px;\n  color: var(--c-text);\n  font-weight: 700;\n}\n.feature-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.86rem;\n  color: var(--c-text-2);\n  line-height: 1.65;\n}\n.quote-card[_ngcontent-%COMP%] {\n  padding: 28px 30px;\n  border-radius: var(--r-lg);\n  border: 1px solid var(--c-border);\n  background: white;\n  box-shadow: var(--sh-md);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 20px;\n  position: relative;\n  overflow: hidden;\n}\n.quote-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--c-violet),\n      #0ea5e9);\n}\n.quote-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.quote-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--c-violet);\n}\n.quote-mark[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  line-height: 0.7;\n  font-family: Georgia, serif;\n  color: rgba(109, 40, 217, 0.12);\n  font-weight: 900;\n  flex-shrink: 0;\n  margin-top: -8px;\n}\n.quote-card[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.8;\n  color: var(--c-text-2);\n  font-style: italic;\n}\n.quote-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.quote-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 999px;\n  background: var(--c-violet-lt);\n  border: 1px solid rgba(109, 40, 217, 0.14);\n  color: var(--c-violet);\n  font-size: 0.80rem;\n  font-weight: 600;\n}\n@media (max-width: 960px) {\n  .hero[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    min-height: auto;\n  }\n  .hero-visual[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .feature-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .home-page[_ngcontent-%COMP%] {\n    padding: 14px 14px 60px;\n  }\n  .topbar[_ngcontent-%COMP%] {\n    position: static;\n    padding: 12px 14px;\n    flex-wrap: wrap;\n    border-radius: var(--r-lg);\n  }\n  .topbar-nav[_ngcontent-%COMP%] {\n    order: 3;\n    width: 100%;\n    justify-content: center;\n    padding-top: 6px;\n    border-top: 1px solid var(--c-border);\n    margin-top: 4px;\n    margin-left: 0;\n  }\n  .topbar-actions[_ngcontent-%COMP%] {\n    margin-left: auto;\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n  .actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .cats-viewport[_ngcontent-%COMP%] {\n    grid-auto-columns: 240px;\n  }\n}\n@media (max-width: 480px) {\n  .topbar-actions[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    width: 100%;\n  }\n  .nav-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .cats-viewport[_ngcontent-%COMP%] {\n    grid-auto-columns: 88vw;\n  }\n}\n.footer[_ngcontent-%COMP%] {\n  margin-top: 48px;\n  width: 100%;\n  display: block;\n}\n.footer-top[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: var(--c-text);\n  padding: 46px 0 28px;\n  border-top: 1px solid rgba(17, 24, 39, 0.06);\n}\n.footer-newsletter[_ngcontent-%COMP%] {\n  max-width: 1080px;\n  margin: 0 auto;\n  padding: 0 22px 34px;\n  display: grid;\n  grid-template-columns: 1.2fr 1fr;\n  gap: 24px;\n  align-items: center;\n}\n.footer-newsletter-copy[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.footer-newsletter-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10px 0 12px;\n  font-size: clamp(1.7rem, 3vw, 2.8rem);\n  line-height: 1.1;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n}\n.footer-newsletter-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--c-text-2);\n}\n.footer-newsletter-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  justify-content: center;\n  width: 100%;\n  max-width: 480px;\n  margin: 0 auto;\n  border: 1px solid rgba(17, 24, 39, 0.18);\n  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.06);\n}\n.footer-newsletter-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 0;\n  min-height: 54px;\n  padding: 0 18px;\n  font: inherit;\n  color: var(--c-text);\n  background: #f7f7f3;\n  outline: none;\n}\n.footer-newsletter-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 150px;\n  border: 0;\n  background: #1e1e1e;\n  color: #ffffff;\n  font: inherit;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: background 0.2s ease, transform 0.2s ease;\n}\n.footer-newsletter-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #2d2d2d;\n  transform: translateY(-1px);\n}\n.footer-middle[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(124, 58, 237, 0.18),\n      transparent 30%),\n    radial-gradient(\n      circle at bottom right,\n      rgba(14, 165, 233, 0.12),\n      transparent 26%),\n    linear-gradient(\n      180deg,\n      #111111 0%,\n      #171717 100%);\n  padding: 26px 0 24px;\n}\n.footer-shell[_ngcontent-%COMP%] {\n  max-width: 1180px;\n  margin: 0 auto;\n  padding: 0 22px;\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);\n  gap: 22px;\n}\n.footer-brand-panel[_ngcontent-%COMP%], \n.footer-links-panel[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 28px;\n  background: rgba(255, 255, 255, 0.03);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.24);\n}\n.footer-brand-panel[_ngcontent-%COMP%] {\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 18px;\n}\n.footer-links-panel[_ngcontent-%COMP%] {\n  padding: 30px;\n  display: flex;\n  align-items: center;\n}\n.footer-logo-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-shrink: 0;\n  text-decoration: none;\n}\n.footer-logo[_ngcontent-%COMP%] {\n  height: 58px;\n  width: auto;\n  max-width: 220px;\n  object-fit: contain;\n}\n.footer-kicker[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  color: #a78bfa;\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n.footer-kicker--soft[_ngcontent-%COMP%] {\n  color: #7bd34c;\n}\n.footer-title[_ngcontent-%COMP%] {\n  font-size: clamp(1.8rem, 2.6vw, 2.4rem);\n  font-weight: 800;\n  line-height: 1.08;\n  letter-spacing: -0.04em;\n  margin: 0;\n  color: #ffffff;\n}\n.footer-lead[_ngcontent-%COMP%] {\n  max-width: 620px;\n  color: rgba(255, 255, 255, 0.76);\n  margin: 0;\n  font-size: 1rem;\n  line-height: 1.7;\n}\n.footer-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.footer-badges[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border-radius: 999px;\n  background: rgba(123, 211, 76, 0.12);\n  border: 1px solid rgba(123, 211, 76, 0.28);\n  color: #dff5cc;\n  font-size: 0.84rem;\n  font-weight: 600;\n}\n.footer-social[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #ffffff;\n  text-decoration: none;\n  transition: color 0.25s ease, padding-left 0.25s ease;\n  display: inline-block;\n}\n.footer-column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #7bd34c;\n  padding-left: 4px;\n}\n.footer-column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  color: #ffffff;\n  place-items: center;\n  color: #ffffff;\n  text-decoration: none;\n  background:\n    linear-gradient(\n      180deg,\n      #76b83a 0%,\n      #5a9f2f 100%);\n  padding: 16px 0;\n  transition:\n    transform 0.2s ease,\n    background 0.2s ease,\n    border-color 0.2s ease;\n}\n.social[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #f5f5f5;\n  height: 18px;\n  fill: currentColor;\n}\n.social[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .footer-copyright[_ngcontent-%COMP%] {\n  color: #f5f5f5;\n  font-weight: 600;\n}\n.social[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .footer-strapline[_ngcontent-%COMP%] {\n  color: #f5f5f5;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n}\n.social[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .footer-nav-small[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #f5f5f5;\n  margin-left: 18px;\n  text-decoration: none;\n}\n.social[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .footer-nav-small[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.social[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  background: rgba(255, 255, 255, 0.12);\n  border-color: rgba(255, 255, 255, 0.18);\n}\n.social-facebook[_ngcontent-%COMP%]:hover {\n  color: #7bd34c;\n}\n.social-twitter[_ngcontent-%COMP%]:hover {\n  color: #7bd34c;\n}\n.footer-links[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 22px;\n  width: 100%;\n}\n.footer-bottom-dark[_ngcontent-%COMP%] {\n  background: #000000;\n}\n.footer-column[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: #ffffff;\n  margin-bottom: 14px;\n}\n.footer-column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.footer-column[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  padding: 12px 28px;\n}\n.footer-bottom--split[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  max-width: 1180px;\n  margin: 0 auto;\n}\n.footer-copyright[_ngcontent-%COMP%] {\n  color: #9a9a9a;\n}\n.footer-nav-small[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #bdbdbd;\n  margin-left: 18px;\n  text-decoration: none;\n}\n.footer-nav-small[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n.footer-bottom-dark[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #161616 0%,\n      #070707 100%);\n  padding: 16px 0;\n}\n.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: #bdbdbd;\n}\n@media (max-width: 768px) {\n  .footer-top[_ngcontent-%COMP%] {\n    padding: 28px 0 18px;\n  }\n  .footer-newsletter[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 0 14px 26px;\n  }\n  .footer-newsletter-form[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .footer-shell[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 0 14px;\n  }\n  .footer-brand-panel[_ngcontent-%COMP%], \n   .footer-links-panel[_ngcontent-%COMP%] {\n    border-radius: 22px;\n    padding: 22px;\n  }\n  .footer-links[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .footer-social[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .footer-bottom--split[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n    padding: 12px 14px;\n    text-align: center;\n  }\n  .footer-nav-small[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin: 0 10px;\n  }\n}\n@media (max-width: 520px) {\n  .footer-newsletter-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.55rem;\n  }\n  .footer-newsletter-form[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .footer-newsletter-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-height: 50px;\n  }\n}\n/*# sourceMappingURL=home-page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePage, [{
    type: Component,
    args: [{ selector: "app-home-page", imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="home-page">

  <!-- \u2500\u2500\u2500 TOPBAR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <header class="topbar">
    <a class="brand" routerLink="/homepage" aria-label="Learning platform home">
      <img src="/Logo2.png" alt="Touch & Solve" class="brand-logo" />
    </a>
    <nav class="topbar-nav" aria-label="Primary navigation">
      <a href="#tracks">{{ lang.t().navTracks }}</a>
      <a routerLink="/courses">{{ lang.t().navCourses }}</a>
      <a href="#platform-identity">{{ lang.t().navVision }}</a>
      @if(isLoggedIn()) {
        <a routerLink="/history">Video History</a>
      }
    </nav>
    <div class="topbar-actions">
      <button type="button" class="lang-toggle-btn" (click)="lang.toggle()"
        [attr.aria-label]="lang.isBangla() ? 'Switch to English' : '\u09AC\u09BE\u0982\u09B2\u09BE\u09AF\u09BC \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09C1\u09A8'">
        <span class="lang-icon">\u{1F310}</span>
        <span class="lang-label">{{ lang.isBangla() ? 'EN' : '\u09AC\u09BE\u0982' }}</span>
      </button>
      @if (isLoggedIn()) {
      <details class="user-menu">
        <summary class="user-chip" aria-label="User menu">
          <span class="user-avatar">{{ userInitial() }}</span>
          <span class="user-name">{{ lang.t().navHi }} {{ userName() }}</span>
          <span class="menu-caret" aria-hidden="true">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor">
              <path d="M1 1L5 5L9 1" />
            </svg>
          </span>
        </summary>
        <div class="user-menu-list" role="menu">
          <a routerLink="/profile" class="user-menu-link" role="menuitem">
            <span class="menu-icon">\u{1F464}</span> {{ lang.t().navProfile }}
          </a>
          @if (isTeacher()) {
          <a routerLink="/teacher" class="user-menu-link" role="menuitem">
            <span class="menu-icon">\u{1F393}</span> {{ lang.t().navTeacher }}
          </a>
          }
        </div>
      </details>
      <button type="button" class="nav-button nav-button-ghost" (click)="logout()">{{ lang.t().navLogout }}</button>
      } @else {
      <a routerLink="/login" class="nav-button nav-button-ghost">{{ lang.t().navLogin }}</a>
      <a routerLink="/register" class="nav-button nav-button-primary">{{ lang.t().navGetStarted }}</a>
      }
    </div>
  </header>

  <!-- \u2500\u2500\u2500 HERO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <section class="hero">

    <!-- Left: copy -->
    <div class="hero-copy">
      <h1>
        {{ lang.t().heroH1Part1 }}<br>
        {{ lang.t().heroH1Part2 }}<br>
        <span class="h1-accent">{{ lang.t().heroH1Accent }}</span>
      </h1>
      <p class="lead">{{ lang.t().heroLead }}</p>
      <div class="actions">
        <a href="#tracks" class="primary-action">{{ lang.t().heroExplore }}</a>
        <div class="hero-stats">
          <div class="hero-stat">
            <strong>50+</strong>
            <span>{{ lang.t().statLessons }}</span>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <strong>1M+</strong>
            <span>{{ lang.t().statLearners }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Right: visual -->
    <div class="hero-visual" aria-hidden="true">
      <div class="hero-blob"></div>

      <!-- Top floating card -->
      <div class="hero-float-card hero-float-card--top">
        <span class="hero-float-icon">\u{1F468}\u200D\u{1F393}</span>
        <div>
          <strong>175K</strong>
          <span>Assisted Students</span>
        </div>
      </div>

      <!-- Student image -->
      <img src="images/student.png" alt="Student" class="hero-student-img" />
      <!-- Bottom chart card -->
      <div class="hero-float-card hero-float-card--bottom">
        <div class="chart-label">Learning Chart</div>
        <div class="mini-chart">
          <div class="bar" style="height:28px;background:#f472b6"></div>
          <div class="bar" style="height:42px;background:#60a5fa"></div>
          <div class="bar" style="height:36px;background:#818cf8"></div>
          <div class="bar" style="height:52px;background:#fbbf24"></div>
          <div class="bar" style="height:44px;background:#34d399"></div>
        </div>
        <div class="chart-ticks">
          <span>20k</span><span>10k</span><span>1k</span>
        </div>
      </div>
    </div>

  </section>

  <!-- \u2500\u2500\u2500 COURSES \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <section class="cats-section" id="tracks">
    <h2 class="cats-title">
      {{ lang.t().sectionH2Line1 }}<br>
      {{ lang.t().sectionH2Line2 }}
    </h2>

    @if (isLoadingCourses()) {
    <article class="track-empty-state">
      <h3>{{ lang.t().coursesLoading }}</h3>
      <p>{{ lang.t().coursesLoadingDesc }}</p>
    </article>
    } @else if (courses().length === 0) {
    <article class="track-empty-state">
      <h3>{{ lang.t().coursesNone }}</h3>
      <p>{{ lang.t().coursesNoneDesc }}</p>
    </article>
    } @else {
    <div class="cats-carousel-shell">
      <button type="button" class="cats-arrow cats-arrow--prev" (click)="scrollCourses('previous')"
        aria-label="Scroll left">\u2039</button>

      <div #courseTrackViewport class="cats-viewport">

        @for (course of courses(); track course.id; let i = $index) {
        <article class="cat-card" [style]="'--card-color:' + getCardColor(i)">

          <!-- Thumbnail -->
          <div class="cat-img-wrap">
            <img class="cat-thumbnail" [src]="getImageUrl(course.thumbnailUrl)" [alt]="course.title" loading="eager"
              (error)="onImageError($event)" />
            <div class="cat-icon-fallback" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
                <rect width="40" height="40" rx="12" fill="rgba(255,255,255,0.2)" />
                <path d="M12 28V14l8-4 8 4v14l-8 4-8-4z" stroke="white" stroke-width="2" stroke-linejoin="round" />
                <path d="M20 10v18M12 14l8 4 8-4" stroke="white" stroke-width="2" />
              </svg>
            </div>
          </div>

          <!-- Body -->
          <div class="cat-body">
            <span class="cat-badge">
              {{ course.level === 'Beginner' ? lang.t().levelBeginner
              : course.level === 'Intermediate' ? lang.t().levelIntermediate
              : lang.t().levelAdvanced }}
            </span>

            <h3>{{ course.title }}</h3>
            <p class="cat-desc">{{ course.description }}</p>

            <ul class="cat-meta">
              <li>\u{1F4DA} {{ course.lessonCount }} {{ lang.t().courseLessons }}</li>
              <li>\u23F1 {{ course.durationMinutes }} {{ lang.t().courseDurationUnit }}</li>
              <li>\u{1F4B0} {{ formatPrice(course.price) }}</li>
            </ul>

            <!-- Rating Display -->
            @if (course.totalRatings && course.totalRatings > 0) {
              <div class="cat-rating">
                <span class="cat-rating-star">\u2B50 {{ course.averageRating?.toFixed(1) }}</span>
                <span class="cat-rating-count">({{ course.totalRatings }} ratings)</span>
              </div>
            }

            <div class="cat-footer">
              @if (course.isEnrolled) {
              <a [routerLink]="['/course-details', course.id]" class="cat-btn cat-btn--enrolled">{{
                lang.t().courseEnrolled }}</a>
              } @else {
              <a [routerLink]="['/payment']" [queryParams]="buildPaymentQueryParams(course)"
                class="cat-btn cat-btn--enroll">{{ lang.t().courseEnrollNow }}</a>
              }
              <a [routerLink]="['/course-details', course.id]" class="cat-link">
                {{ lang.t().courseStartLearning }} \u2192
              </a>
            </div>
          </div>

        </article>
        }

        <!-- Browse All -->
        <article class="cat-card cat-card--browse">
          <a routerLink="/courses" class="browse-all-link">
            <div class="browse-all-circle">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M6 14H22M22 14L16 8M22 14L16 20" stroke="#6d28d9" stroke-width="2.2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
            <span>Browse All</span>
          </a>
        </article>

      </div>

      <button type="button" class="cats-arrow cats-arrow--next" (click)="scrollCourses('next')"
        aria-label="Scroll right">\u203A</button>
    </div>
    }
  </section>

  <!-- \u2500\u2500\u2500 FEATURES + QUOTE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <section class="feature-layout" id="platform-identity">
    <div class="feature-list">
      <article class="feature-card">
        <div class="feature-icon-wrap" aria-hidden="true">
          <div class="feature-icon"></div>
        </div>
        <div class="feature-body">
          <h3>{{ lang.t().feature1Title }}</h3>
          <p>{{ lang.t().feature1Desc }}</p>
        </div>
      </article>
      <article class="feature-card">
        <div class="feature-icon-wrap" aria-hidden="true">
          <div class="feature-icon"></div>
        </div>
        <div class="feature-body">
          <h3>{{ lang.t().feature2Title }}</h3>
          <p>{{ lang.t().feature2Desc }}</p>
        </div>
      </article>
      <article class="feature-card">
        <div class="feature-icon-wrap" aria-hidden="true">
          <div class="feature-icon"></div>
        </div>
        <div class="feature-body">
          <h3>{{ lang.t().feature3Title }}</h3>
          <p>{{ lang.t().feature3Desc }}</p>
        </div>
      </article>
    </div>

    <aside class="quote-card">
      <div class="quote-top">
        <p class="quote-label">{{ lang.t().quoteLabel }}</p>
        <div class="quote-mark" aria-hidden="true">"</div>
      </div>
      <blockquote>{{ lang.t().quoteText }}</blockquote>
      <div class="quote-footer">
        <span>{{ lang.t().quoteFooter1 }}</span>
        <span>{{ lang.t().quoteFooter2 }}</span>
      </div>
    </aside>
  </section>

  <!-- \u2500\u2500\u2500 FOOTER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <footer class="footer">
    <section class="footer-newsletter">
      <div class="footer-newsletter-copy">
        <p class="footer-kicker">Touch & Solve Updates</p>
        <h2>Stay close to new courses, events, and progress updates.</h2>
        <p>Fresh learning drops, platform news, and helpful resources from our team.</p>
      </div>
      <form class="footer-newsletter-form" action="#" onsubmit="return false;">
        <input type="email" placeholder="Enter your email address" aria-label="Email address" />
        <button type="submit">Sign me up</button>
      </form>
    </section>

    <div class="footer-middle">
      <div class="footer-shell">
        <section class="footer-brand-panel">
          <a class="footer-logo-link" routerLink="/homepage" aria-label="Touch and Solve home">
            <img src="/Logo2.png" alt="Touch and Solve" class="footer-logo" />
          </a>
          <div class="footer-brand-copy">
            <p class="footer-kicker footer-kicker--soft">Touch & Solve</p>
            <h3 class="footer-title">We solve just in touch.</h3>
            <p class="footer-lead">A learning platform built with a clean structure, stronger outcomes, and a smooth student journey.</p>
          </div>
          <div class="footer-social" aria-label="Social links">
            <a href="#" class="social social-facebook" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M14 8.5V7c0-.8.5-1 1-1h2V3h-3c-2.2 0-4 1.8-4 4v1.5H8V12h2v9h4v-9h2.7l.3-3.5H14z" />
              </svg>
            </a>
            <a href="#" class="social social-twitter" aria-label="Twitter">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M18.3 7.6c.01.2.01.4.01.6 0 6.1-4.6 13.1-13.1 13.1-2.6 0-5.1-.8-7.1-2.2.4.1.8.1 1.2.1 2.2 0 4.2-.7 5.8-2-2.1 0-3.8-1.4-4.4-3.3.3.1.7.1 1 .1.4 0 .8-.1 1.2-.2-2.2-.4-3.8-2.4-3.8-4.7v-.1c.7.4 1.5.7 2.4.7-1.4-.9-2.2-2.5-2.2-4.2 0-.9.2-1.8.7-2.5 2.4 2.9 6 4.8 10 5-.1-.4-.1-.7-.1-1.1 0-2.5 2-4.5 4.5-4.5 1.3 0 2.5.5 3.3 1.4.9-.2 1.7-.5 2.4-.9-.3 1-1 1.7-1.8 2.2.8-.1 1.5-.3 2.2-.6-.5.8-1.1 1.5-1.9 2.1z" />
              </svg>
            </a>
          </div>
        </section>

        <section class="footer-links-panel" aria-label="Footer navigation">
          <div class="footer-links">
            <div class="footer-column">
              <h5>Explore</h5>
              <ul>
                <li><a routerLink="/courses">Courses</a></li>
                <li><a href="#tracks">Tracks</a></li>
                <li><a href="#platform-identity">Features</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h5>Company</h5>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h5>Learning</h5>
              <ul>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="footer-bottom-dark">
      <div class="footer-bottom footer-bottom--split">
        <div class="footer-copyright">&copy; 2024 Touch & Solve Learning Platform. All rights reserved.</div>
        <div class="footer-strapline">We solve just in touch.</div>
        <div class="footer-nav-small">
          <a routerLink="/">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#blog">Blog</a>
        </div>
      </div>
    </div>
  </footer>

</main>`, styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&display=swap";\n\n/* src/app/base/home-page/home-page.css */\n:host,\n.home-page {\n  --c-bg: #f8f8ff;\n  --c-white: #ffffff;\n  --c-blue: #2563eb;\n  --c-blue-h: #1d4ed8;\n  --c-blue-lt: #eff6ff;\n  --c-violet: #7c3aed;\n  --c-violet-lt: #f5f3ff;\n  --c-orange: #f97316;\n  --c-text: #111827;\n  --c-text-2: rgba(17,24,39,0.60);\n  --c-text-3: rgba(17,24,39,0.36);\n  --c-border: rgba(17,24,39,0.09);\n  --r-sm: 10px;\n  --r-md: 16px;\n  --r-lg: 22px;\n  --r-xl: 30px;\n  --font-d: "Bricolage Grotesque", sans-serif;\n  --font-b: "Inter", sans-serif;\n  --sh-sm: 0 2px 8px rgba(0,0,0,0.07);\n  --sh-md: 0 6px 24px rgba(0,0,0,0.09);\n  --sh-lg: 0 12px 48px rgba(0,0,0,0.11);\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n}\n.home-page {\n  min-height: 100vh;\n  padding: 18px 28px 80px;\n  background: var(--c-bg);\n  color: var(--c-text);\n  font-family: var(--font-b);\n  font-size: 15px;\n  line-height: 1.6;\n}\nh1,\nh2,\nh3 {\n  font-family: var(--font-d);\n  margin: 0;\n}\np {\n  margin: 0;\n}\n.topbar {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 20px;\n  margin-bottom: 40px;\n  border-radius: var(--r-xl);\n  border: 1px solid var(--c-border);\n  background: rgba(255, 255, 255, 0.92);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  box-shadow: var(--sh-sm);\n  position: sticky;\n  top: 12px;\n  z-index: 50;\n}\n.brand {\n  display: inline-flex;\n  align-items: center;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.brand-logo {\n  height: 38px;\n  width: auto;\n  max-width: 160px;\n  object-fit: contain;\n}\n.topbar-nav {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  margin-left: auto;\n}\n.topbar-nav a {\n  padding: 7px 14px;\n  border-radius: 999px;\n  text-decoration: none;\n  font-size: 0.87rem;\n  font-weight: 500;\n  color: var(--c-text-2);\n  transition: background 0.18s, color 0.18s;\n}\n.topbar-nav a:hover {\n  background: var(--c-blue-lt);\n  color: var(--c-blue);\n}\n.topbar-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.lang-toggle-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border: 1.5px solid var(--c-blue);\n  border-radius: 999px;\n  background: transparent;\n  color: var(--c-blue);\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: var(--font-b);\n  transition:\n    background 0.18s,\n    color 0.18s,\n    transform 0.15s;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.lang-toggle-btn:hover {\n  background: var(--c-blue);\n  color: #fff;\n  transform: scale(1.04);\n}\n.lang-toggle-btn:active {\n  transform: scale(0.97);\n}\n.lang-icon {\n  font-size: 0.95rem;\n  line-height: 1;\n}\n.lang-label {\n  letter-spacing: 0.02em;\n}\n.user-menu {\n  position: relative;\n}\n.user-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  padding: 5px 12px 5px 5px;\n  border-radius: 999px;\n  border: 1px solid var(--c-border);\n  background: rgba(37, 99, 235, 0.04);\n  color: var(--c-text-2);\n  font-size: 0.87rem;\n  font-weight: 500;\n  list-style: none;\n  transition: border-color 0.18s, background 0.18s;\n}\n.user-chip:hover {\n  background: var(--c-blue-lt);\n}\n.user-menu summary {\n  list-style: none;\n}\n.user-menu summary::-webkit-details-marker {\n  display: none;\n}\n.menu-caret svg {\n  transition: transform 0.2s;\n}\n.user-menu[open] .menu-caret svg {\n  transform: rotate(180deg);\n}\n.user-menu-list {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  min-width: 180px;\n  padding: 6px;\n  border-radius: var(--r-md);\n  border: 1px solid var(--c-border);\n  background: white;\n  box-shadow: var(--sh-md);\n  z-index: 60;\n}\n.user-menu-link {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-radius: var(--r-sm);\n  text-decoration: none;\n  font-size: 0.87rem;\n  font-weight: 500;\n  color: var(--c-text-2);\n  transition: background 0.15s, color 0.15s;\n}\n.user-menu-link:hover {\n  background: var(--c-blue-lt);\n  color: var(--c-blue);\n}\n.menu-icon {\n  font-size: 14px;\n}\n.user-avatar {\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--c-blue),\n      #0ea5e9);\n  color: white;\n  font-size: 0.76rem;\n  font-weight: 700;\n  font-family: var(--font-d);\n}\n.user-name {\n  font-size: 0.87rem;\n  font-weight: 600;\n  color: var(--c-text);\n}\n.nav-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  min-height: 38px;\n  padding: 0 18px;\n  border-radius: 999px;\n  font-size: 0.87rem;\n  font-weight: 600;\n  text-decoration: none;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-family: var(--font-b);\n  transition:\n    transform 0.18s,\n    background 0.18s,\n    border-color 0.18s,\n    box-shadow 0.18s;\n}\n.nav-button:hover {\n  transform: translateY(-1px);\n}\n.nav-button-ghost {\n  background: transparent;\n  border-color: var(--c-border);\n  color: var(--c-text-2);\n}\n.nav-button-ghost:hover {\n  border-color: var(--c-blue);\n  color: var(--c-blue);\n  background: var(--c-blue-lt);\n}\n.nav-button-primary {\n  background: var(--c-blue);\n  color: white;\n  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.28);\n}\n.nav-button-primary:hover {\n  background: var(--c-blue-h);\n}\n.hero {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 40px;\n  align-items: center;\n  min-height: 480px;\n  margin-bottom: 64px;\n}\n.hero-copy {\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n}\nh1 {\n  font-size: clamp(2.6rem, 4.5vw, 4rem);\n  font-weight: 800;\n  line-height: 1.08;\n  letter-spacing: -0.04em;\n  color: var(--c-text);\n}\n.h1-accent {\n  color: var(--c-orange);\n}\n.lead {\n  color: var(--c-text-2);\n  font-size: 1rem;\n  line-height: 1.75;\n  max-width: 50ch;\n}\n.actions {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 28px;\n}\n.primary-action {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 50px;\n  padding: 0 32px;\n  border-radius: 12px;\n  background: var(--c-violet);\n  color: white;\n  font-weight: 700;\n  font-size: 0.95rem;\n  text-decoration: none;\n  font-family: var(--font-b);\n  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.35);\n  transition:\n    transform 0.2s,\n    box-shadow 0.2s,\n    background 0.2s;\n}\n.primary-action:hover {\n  background: #6d28d9;\n  transform: translateY(-2px);\n  box-shadow: 0 10px 30px rgba(124, 58, 237, 0.40);\n}\n.hero-stats {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.hero-stat {\n  display: flex;\n  flex-direction: column;\n}\n.hero-stat strong {\n  font-family: var(--font-d);\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: var(--c-text);\n  letter-spacing: -0.04em;\n}\n.hero-stat span {\n  font-size: 0.80rem;\n  color: var(--c-text-3);\n  font-weight: 500;\n}\n.hero-stat-divider {\n  width: 1px;\n  height: 36px;\n  background: var(--c-border);\n}\n.hero-visual {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 500px;\n  overflow: visible;\n}\n.hero-blob {\n  display: none;\n}\n.hero-student-img {\n  position: relative;\n  z-index: 1;\n  width: 460px;\n  height: auto;\n  object-fit: contain;\n  mix-blend-mode: normal;\n  display: block;\n}\n.hero-float-card {\n  position: absolute;\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  border-radius: 14px;\n  background: white;\n  box-shadow: var(--sh-md);\n  border: 1px solid rgba(17, 24, 39, 0.07);\n}\n.hero-float-card--top {\n  top: 20px;\n  left: 160px;\n}\n.hero-float-card--bottom {\n  bottom: 30px;\n  left: 160px;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 14px 18px;\n  z-index: 4;\n}\n.hero-float-icon {\n  font-size: 1.4rem;\n}\n.hero-float-card strong {\n  display: block;\n  font-family: var(--font-d);\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--c-text);\n}\n.hero-float-card span {\n  font-size: 0.78rem;\n  color: var(--c-text-3);\n}\n.chart-label {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--c-text);\n  margin-bottom: 8px;\n}\n.mini-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 5px;\n  height: 60px;\n}\n.bar {\n  width: 16px;\n  border-radius: 4px 4px 0 0;\n}\n.chart-ticks {\n  display: flex;\n  justify-content: space-between;\n  gap: 4px;\n  margin-top: 6px;\n}\n.chart-ticks span {\n  font-size: 0.70rem;\n  color: var(--c-text-3);\n}\n.cats-section {\n  margin-bottom: 60px;\n}\n.cats-title {\n  font-size: clamp(1.6rem, 2.6vw, 2.2rem);\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  line-height: 1.15;\n  margin-bottom: 28px;\n  color: var(--c-text);\n}\n.cats-carousel-shell {\n  display: flex;\n  align-items: stretch;\n  gap: 10px;\n}\n.cats-viewport {\n  flex: 1;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 310px;\n  gap: 18px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding: 6px 4px 20px;\n  scroll-snap-type: x mandatory;\n  scrollbar-width: none;\n}\n.cats-viewport::-webkit-scrollbar {\n  display: none;\n}\n.cat-card {\n  scroll-snap-align: start;\n  border-radius: var(--r-lg);\n  background: var(--card-color, #7c3aed);\n  padding: 0 0 20px 0;\n  display: flex;\n  flex-direction: column;\n  min-height: 410px;\n  position: relative;\n  overflow: hidden;\n  transition: transform 0.25s, box-shadow 0.25s;\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);\n}\n.cat-card::before {\n  content: "";\n  position: absolute;\n  top: -40px;\n  right: -40px;\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.12);\n  pointer-events: none;\n}\n.cat-card::after {\n  content: "";\n  position: absolute;\n  bottom: -30px;\n  left: -20px;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.07);\n  pointer-events: none;\n}\n.cat-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.18);\n}\n.cat-card--browse {\n  background: white;\n  border: 1.5px dashed rgba(109, 40, 217, 0.25);\n  box-shadow: none;\n  align-items: center;\n  justify-content: center;\n  min-width: 110px;\n  max-width: 130px;\n}\n.cat-card--browse::before,\n.cat-card--browse::after {\n  display: none;\n}\n.cat-card--browse:hover {\n  border-color: var(--c-violet);\n  transform: translateY(-4px);\n  box-shadow: var(--sh-md);\n}\n.browse-all-link {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  color: var(--c-violet);\n  font-size: 0.88rem;\n  font-weight: 700;\n}\n.browse-all-circle {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: var(--c-violet-lt);\n  display: grid;\n  place-items: center;\n  border: 1.5px solid rgba(109, 40, 217, 0.20);\n  transition: background 0.18s;\n}\n.browse-all-link:hover .browse-all-circle {\n  background: #ede9fe;\n}\n.cat-img-wrap {\n  position: relative;\n  width: 100%;\n  height: 175px;\n  border-radius: var(--r-lg) var(--r-lg) 0 0;\n  overflow: hidden;\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.15);\n}\n.cat-thumbnail {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.3s;\n}\n.cat-card:hover .cat-thumbnail {\n  transform: scale(1.05);\n}\n.cat-thumbnail:not([src]),\n.cat-thumbnail[src=""] {\n  display: none;\n}\n.cat-icon-fallback {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  place-items: center;\n}\n.cat-body {\n  padding: 16px 18px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n.cat-badge {\n  display: inline-flex;\n  align-items: center;\n  width: fit-content;\n  padding: 4px 11px;\n  border-radius: 5px;\n  font-size: 0.69rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  background: rgba(255, 255, 255, 0.22);\n  color: white;\n}\n.cat-card h3 {\n  font-size: 1.06rem;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n  line-height: 1.3;\n  color: white;\n}\n.cat-desc {\n  font-size: 0.82rem;\n  color: rgba(255, 255, 255, 0.78);\n  line-height: 1.55;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n}\n.cat-meta {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.cat-meta li {\n  font-size: 0.79rem;\n  color: rgba(255, 255, 255, 0.82);\n}\n.cat-rating {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin: 8px 0 0;\n  padding: 8px 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.15);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.15);\n}\n.cat-rating-star {\n  font-weight: 700;\n  font-size: 0.84rem;\n  color: #fbbf24;\n}\n.cat-rating-count {\n  font-size: 0.75rem;\n  color: rgba(255, 255, 255, 0.70);\n}\n.cat-footer {\n  margin-top: auto;\n  padding: 10px 18px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  border-top: 1px solid rgba(255, 255, 255, 0.15);\n}\n.cat-btn {\n  display: inline-flex;\n  align-items: center;\n  min-height: 32px;\n  padding: 0 14px;\n  border-radius: 7px;\n  font-size: 0.79rem;\n  font-weight: 700;\n  text-decoration: none;\n  font-family: var(--font-b);\n  transition: transform 0.18s, background 0.18s;\n}\n.cat-btn:hover {\n  transform: translateY(-1px);\n}\n.cat-btn--enroll {\n  background: white;\n  color: var(--c-violet);\n}\n.cat-btn--enroll:hover {\n  background: #f5f3ff;\n}\n.cat-btn--enrolled {\n  background: rgba(255, 255, 255, 0.20);\n  color: white;\n  border: 1px solid rgba(255, 255, 255, 0.35);\n}\n.cat-btn--enrolled:hover {\n  background: rgba(255, 255, 255, 0.30);\n}\n.cat-link {\n  font-size: 0.79rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.88);\n  text-decoration: none;\n}\n.cat-link:hover {\n  color: white;\n}\n.cats-arrow {\n  align-self: center;\n  display: grid;\n  place-items: center;\n  width: 44px;\n  height: 44px;\n  border: 1px solid var(--c-border);\n  border-radius: 50%;\n  background: white;\n  color: var(--c-text);\n  font-size: 1.6rem;\n  line-height: 1;\n  box-shadow: var(--sh-sm);\n  cursor: pointer;\n  flex-shrink: 0;\n  transition:\n    transform 0.2s,\n    border-color 0.2s,\n    box-shadow 0.2s,\n    color 0.2s;\n}\n.cats-arrow:hover {\n  transform: translateY(-1px);\n  border-color: var(--c-violet);\n  color: var(--c-violet);\n  box-shadow: 0 6px 20px rgba(109, 40, 217, 0.16);\n}\n.cats-arrow--prev {\n  margin-left: 2px;\n}\n.cats-arrow--next {\n  margin-right: 2px;\n}\n.track-empty-state {\n  border-radius: var(--r-lg);\n  border: 1px solid var(--c-border);\n  background: white;\n  padding: 36px;\n  text-align: center;\n  box-shadow: var(--sh-sm);\n}\n.track-empty-state h3 {\n  font-size: 1.1rem;\n  margin-bottom: 8px;\n}\n.track-empty-state p {\n  color: var(--c-text-2);\n}\n.feature-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);\n  gap: 18px;\n  margin-top: 56px;\n}\n.feature-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.feature-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  padding: 20px 22px;\n  border-radius: var(--r-md);\n  border: 1px solid var(--c-border);\n  background: white;\n  box-shadow: var(--sh-sm);\n  transition:\n    border-color 0.2s,\n    box-shadow 0.2s,\n    transform 0.2s;\n}\n.feature-card:hover {\n  border-color: rgba(109, 40, 217, 0.20);\n  box-shadow: var(--sh-md);\n  transform: translateX(4px);\n}\n.feature-icon-wrap {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: var(--c-violet-lt);\n  border: 1px solid rgba(109, 40, 217, 0.15);\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n}\n.feature-icon {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: var(--c-violet);\n  box-shadow: 0 0 8px rgba(109, 40, 217, 0.4);\n}\n.feature-body h3 {\n  font-size: 0.97rem;\n  margin-bottom: 4px;\n  color: var(--c-text);\n  font-weight: 700;\n}\n.feature-body p {\n  font-size: 0.86rem;\n  color: var(--c-text-2);\n  line-height: 1.65;\n}\n.quote-card {\n  padding: 28px 30px;\n  border-radius: var(--r-lg);\n  border: 1px solid var(--c-border);\n  background: white;\n  box-shadow: var(--sh-md);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 20px;\n  position: relative;\n  overflow: hidden;\n}\n.quote-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--c-violet),\n      #0ea5e9);\n}\n.quote-top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.quote-label {\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--c-violet);\n}\n.quote-mark {\n  font-size: 5rem;\n  line-height: 0.7;\n  font-family: Georgia, serif;\n  color: rgba(109, 40, 217, 0.12);\n  font-weight: 900;\n  flex-shrink: 0;\n  margin-top: -8px;\n}\n.quote-card blockquote {\n  font-size: 1rem;\n  line-height: 1.8;\n  color: var(--c-text-2);\n  font-style: italic;\n}\n.quote-footer {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.quote-footer span {\n  padding: 6px 14px;\n  border-radius: 999px;\n  background: var(--c-violet-lt);\n  border: 1px solid rgba(109, 40, 217, 0.14);\n  color: var(--c-violet);\n  font-size: 0.80rem;\n  font-weight: 600;\n}\n@media (max-width: 960px) {\n  .hero {\n    grid-template-columns: 1fr;\n    min-height: auto;\n  }\n  .hero-visual {\n    display: none;\n  }\n  .feature-layout {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .home-page {\n    padding: 14px 14px 60px;\n  }\n  .topbar {\n    position: static;\n    padding: 12px 14px;\n    flex-wrap: wrap;\n    border-radius: var(--r-lg);\n  }\n  .topbar-nav {\n    order: 3;\n    width: 100%;\n    justify-content: center;\n    padding-top: 6px;\n    border-top: 1px solid var(--c-border);\n    margin-top: 4px;\n    margin-left: 0;\n  }\n  .topbar-actions {\n    margin-left: auto;\n  }\n  h1 {\n    font-size: 2.2rem;\n  }\n  .actions {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .cats-viewport {\n    grid-auto-columns: 240px;\n  }\n}\n@media (max-width: 480px) {\n  .topbar-actions {\n    flex-wrap: wrap;\n    width: 100%;\n  }\n  .nav-button {\n    width: 100%;\n  }\n  .cats-viewport {\n    grid-auto-columns: 88vw;\n  }\n}\n.footer {\n  margin-top: 48px;\n  width: 100%;\n  display: block;\n}\n.footer-top {\n  background: #ffffff;\n  color: var(--c-text);\n  padding: 46px 0 28px;\n  border-top: 1px solid rgba(17, 24, 39, 0.06);\n}\n.footer-newsletter {\n  max-width: 1080px;\n  margin: 0 auto;\n  padding: 0 22px 34px;\n  display: grid;\n  grid-template-columns: 1.2fr 1fr;\n  gap: 24px;\n  align-items: center;\n}\n.footer-newsletter-copy {\n  text-align: center;\n}\n.footer-newsletter-copy h2 {\n  margin: 10px 0 12px;\n  font-size: clamp(1.7rem, 3vw, 2.8rem);\n  line-height: 1.1;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n}\n.footer-newsletter-copy p {\n  margin: 0;\n  color: var(--c-text-2);\n}\n.footer-newsletter-form {\n  display: flex;\n  align-items: stretch;\n  justify-content: center;\n  width: 100%;\n  max-width: 480px;\n  margin: 0 auto;\n  border: 1px solid rgba(17, 24, 39, 0.18);\n  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.06);\n}\n.footer-newsletter-form input {\n  flex: 1;\n  border: 0;\n  min-height: 54px;\n  padding: 0 18px;\n  font: inherit;\n  color: var(--c-text);\n  background: #f7f7f3;\n  outline: none;\n}\n.footer-newsletter-form button {\n  min-width: 150px;\n  border: 0;\n  background: #1e1e1e;\n  color: #ffffff;\n  font: inherit;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: background 0.2s ease, transform 0.2s ease;\n}\n.footer-newsletter-form button:hover {\n  background: #2d2d2d;\n  transform: translateY(-1px);\n}\n.footer-middle {\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(124, 58, 237, 0.18),\n      transparent 30%),\n    radial-gradient(\n      circle at bottom right,\n      rgba(14, 165, 233, 0.12),\n      transparent 26%),\n    linear-gradient(\n      180deg,\n      #111111 0%,\n      #171717 100%);\n  padding: 26px 0 24px;\n}\n.footer-shell {\n  max-width: 1180px;\n  margin: 0 auto;\n  padding: 0 22px;\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);\n  gap: 22px;\n}\n.footer-brand-panel,\n.footer-links-panel {\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 28px;\n  background: rgba(255, 255, 255, 0.03);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.24);\n}\n.footer-brand-panel {\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 18px;\n}\n.footer-links-panel {\n  padding: 30px;\n  display: flex;\n  align-items: center;\n}\n.footer-logo-link {\n  display: inline-flex;\n  flex-shrink: 0;\n  text-decoration: none;\n}\n.footer-logo {\n  height: 58px;\n  width: auto;\n  max-width: 220px;\n  object-fit: contain;\n}\n.footer-kicker {\n  margin: 0 0 10px;\n  color: #a78bfa;\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n.footer-kicker--soft {\n  color: #7bd34c;\n}\n.footer-title {\n  font-size: clamp(1.8rem, 2.6vw, 2.4rem);\n  font-weight: 800;\n  line-height: 1.08;\n  letter-spacing: -0.04em;\n  margin: 0;\n  color: #ffffff;\n}\n.footer-lead {\n  max-width: 620px;\n  color: rgba(255, 255, 255, 0.76);\n  margin: 0;\n  font-size: 1rem;\n  line-height: 1.7;\n}\n.footer-badges {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.footer-badges span {\n  padding: 8px 14px;\n  border-radius: 999px;\n  background: rgba(123, 211, 76, 0.12);\n  border: 1px solid rgba(123, 211, 76, 0.28);\n  color: #dff5cc;\n  font-size: 0.84rem;\n  font-weight: 600;\n}\n.footer-social {\n  font-size: 0.88rem;\n  color: #ffffff;\n  text-decoration: none;\n  transition: color 0.25s ease, padding-left 0.25s ease;\n  display: inline-block;\n}\n.footer-column a:hover {\n  color: #7bd34c;\n  padding-left: 4px;\n}\n.footer-column a {\n  display: flex;\n  color: #ffffff;\n  place-items: center;\n  color: #ffffff;\n  text-decoration: none;\n  background:\n    linear-gradient(\n      180deg,\n      #76b83a 0%,\n      #5a9f2f 100%);\n  padding: 16px 0;\n  transition:\n    transform 0.2s ease,\n    background 0.2s ease,\n    border-color 0.2s ease;\n}\n.social svg {\n  color: #f5f5f5;\n  height: 18px;\n  fill: currentColor;\n}\n.social svg .footer-copyright {\n  color: #f5f5f5;\n  font-weight: 600;\n}\n.social svg .footer-strapline {\n  color: #f5f5f5;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n}\n.social svg .footer-nav-small a {\n  color: #f5f5f5;\n  margin-left: 18px;\n  text-decoration: none;\n}\n.social svg .footer-nav-small a:hover {\n  text-decoration: underline;\n}\n.social:hover {\n  transform: translateY(-2px);\n  background: rgba(255, 255, 255, 0.12);\n  border-color: rgba(255, 255, 255, 0.18);\n}\n.social-facebook:hover {\n  color: #7bd34c;\n}\n.social-twitter:hover {\n  color: #7bd34c;\n}\n.footer-links {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 22px;\n  width: 100%;\n}\n.footer-bottom-dark {\n  background: #000000;\n}\n.footer-column h5 {\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: #ffffff;\n  margin-bottom: 14px;\n}\n.footer-column ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.footer-column li {\n  margin-bottom: 12px;\n}\n.footer-bottom {\n  padding: 12px 28px;\n}\n.footer-bottom--split {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  max-width: 1180px;\n  margin: 0 auto;\n}\n.footer-copyright {\n  color: #9a9a9a;\n}\n.footer-nav-small a {\n  color: #bdbdbd;\n  margin-left: 18px;\n  text-decoration: none;\n}\n.footer-nav-small a:hover {\n  color: #ffffff;\n}\n.footer-bottom-dark {\n  background:\n    linear-gradient(\n      180deg,\n      #161616 0%,\n      #070707 100%);\n  padding: 16px 0;\n}\n.footer-bottom p {\n  font-size: 0.83rem;\n  color: #bdbdbd;\n}\n@media (max-width: 768px) {\n  .footer-top {\n    padding: 28px 0 18px;\n  }\n  .footer-newsletter {\n    grid-template-columns: 1fr;\n    padding: 0 14px 26px;\n  }\n  .footer-newsletter-form {\n    max-width: 100%;\n  }\n  .footer-shell {\n    grid-template-columns: 1fr;\n    padding: 0 14px;\n  }\n  .footer-brand-panel,\n  .footer-links-panel {\n    border-radius: 22px;\n    padding: 22px;\n  }\n  .footer-links {\n    grid-template-columns: 1fr;\n  }\n  .footer-social {\n    justify-content: center;\n  }\n  .footer-bottom--split {\n    flex-direction: column;\n    gap: 8px;\n    padding: 12px 14px;\n    text-align: center;\n  }\n  .footer-nav-small a {\n    margin: 0 10px;\n  }\n}\n@media (max-width: 520px) {\n  .footer-newsletter-copy h2 {\n    font-size: 1.55rem;\n  }\n  .footer-newsletter-form {\n    flex-direction: column;\n  }\n  .footer-newsletter-form button {\n    min-height: 50px;\n  }\n}\n/*# sourceMappingURL=home-page.css.map */\n'] }]
  }], null, { courseTrackViewport: [{
    type: ViewChild,
    args: ["courseTrackViewport"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePage, { className: "HomePage", filePath: "app/base/home-page/home-page.ts", lineNumber: 47 });
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
var _c03 = (a0) => ["/course-details", a0];
var _c12 = (a0) => ["/enrolled-course", a0];
var _c22 = () => ["/payment"];
var _c3 = (a0, a1, a2) => ({ courseId: a0, courseTitle: a1, amount: a2 });
var _forTrack02 = ($index, $item) => $item.courseId;
function Profile_Conditional_15_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.lang.t().navTeacher);
  }
}
function Profile_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "details", 44)(1, "summary", 45)(2, "span", 46);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 47);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 48);
    \u0275\u0275text(7, "\u25BE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 49)(9, "a", 50);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, Profile_Conditional_15_Conditional_11_Template, 2, 1, "a", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 52);
    \u0275\u0275listener("click", function Profile_Conditional_15_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.userInitial());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.lang.t().navHi, " ", ctx_r1.userName());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().navProfile);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isTeacher() ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().navLogout);
  }
}
function Profile_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 54);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.lang.t().navLogin);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.lang.t().navGetStarted);
  }
}
function Profile_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.wishlist().length);
  }
}
function Profile_Conditional_101_Template(rf, ctx) {
}
function Profile_Conditional_102_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function Profile_Conditional_102_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 58);
    \u0275\u0275text(2, "\u{1F494}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Wishlist \u0996\u09BE\u09B2\u09BF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "\u0995\u09CB\u09A8\u09CB course wishlist \u098F \u09A8\u09C7\u0987\u0964");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 59);
    \u0275\u0275text(8, "Browse Courses");
    \u0275\u0275elementEnd()();
  }
}
function Profile_Conditional_102_Conditional_3_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 69);
    \u0275\u0275text(1, "Enrolled");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c12, item_r3.courseId));
  }
}
function Profile_Conditional_102_Conditional_3_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 70);
    \u0275\u0275text(1, "Enroll Now");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c22))("queryParams", \u0275\u0275pureFunction3(3, _c3, item_r3.courseId, item_r3.title, item_r3.price));
  }
}
function Profile_Conditional_102_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "img", 62);
    \u0275\u0275listener("error", function Profile_Conditional_102_Conditional_3_For_2_Template_img_error_2_listener($event) {
      return $event.target.style.display = "none";
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 63)(4, "span", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 65)(11, "strong", 66);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 67)(14, "a", 68);
    \u0275\u0275text(15, "View Course");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, Profile_Conditional_102_Conditional_3_For_2_Conditional_16_Template, 2, 3, "a", 69)(17, Profile_Conditional_102_Conditional_3_For_2_Conditional_17_Template, 2, 7, "a", 70);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.getImageUrl(item_r3.thumbnailPath), \u0275\u0275sanitizeUrl)("alt", item_r3.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.level);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.instructorName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatPrice(item_r3.price));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c03, item_r3.courseId));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r3.isEnrolled ? 16 : 17);
  }
}
function Profile_Conditional_102_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275repeaterCreate(1, Profile_Conditional_102_Conditional_3_For_2_Template, 18, 10, "div", 60, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.wishlist());
  }
}
function Profile_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 43);
    \u0275\u0275conditionalCreate(1, Profile_Conditional_102_Conditional_1_Template, 2, 0, "div", 55)(2, Profile_Conditional_102_Conditional_2_Template, 9, 0, "div", 56)(3, Profile_Conditional_102_Conditional_3_Template, 3, 0, "div", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLoadingWishlist() ? 1 : ctx_r1.wishlist().length === 0 ? 2 : 3);
  }
}
var Profile = class _Profile {
  authService = inject(AuthService);
  router = inject(Router);
  learningApi = inject(LearningApiService);
  lang = inject(LanguageService);
  user = signal(null, ...ngDevMode ? [{ debugName: "user" }] : (
    /* istanbul ignore next */
    []
  ));
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
  userRole = computed(() => this.user()?.role === 1 ? "Instructor" : "Student", ...ngDevMode ? [{ debugName: "userRole" }] : (
    /* istanbul ignore next */
    []
  ));
  quizProgress = signal(null, ...ngDevMode ? [{ debugName: "quizProgress" }] : (
    /* istanbul ignore next */
    []
  ));
  percentageScore = computed(() => this.quizProgress()?.percentageScore ?? 0, ...ngDevMode ? [{ debugName: "percentageScore" }] : (
    /* istanbul ignore next */
    []
  ));
  correctAnswers = computed(() => this.quizProgress()?.correctAnswers ?? 0, ...ngDevMode ? [{ debugName: "correctAnswers" }] : (
    /* istanbul ignore next */
    []
  ));
  wrongAnswers = computed(() => this.quizProgress()?.wrongAnswers ?? 0, ...ngDevMode ? [{ debugName: "wrongAnswers" }] : (
    /* istanbul ignore next */
    []
  ));
  wishlist = signal([], ...ngDevMode ? [{ debugName: "wishlist" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoadingWishlist = signal(false, ...ngDevMode ? [{ debugName: "isLoadingWishlist" }] : (
    /* istanbul ignore next */
    []
  ));
  activeTab = signal("profile", ...ngDevMode ? [{ debugName: "activeTab" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.authService.currentUser$.pipe(takeUntilDestroyed()).subscribe((currentUser2) => {
      this.user.set(currentUser2);
      if (currentUser2?.id) {
        void this.loadWishlist();
      }
    });
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.user.set(currentUser);
      void this.loadWishlist();
    }
    void this.loadQuizProgress();
  }
  async loadQuizProgress() {
    try {
      const currentUser = this.authService.getCurrentUser();
      if (!currentUser?.id)
        return;
      const response = await firstValueFrom(this.learningApi.getOverallQuizProgress(currentUser.id));
      const progressData = response?.data ?? null;
      if (progressData) {
        this.quizProgress.set(progressData);
      }
    } catch (err) {
      console.log("Could not load quiz progress:", err);
    }
  }
  async loadWishlist() {
    const userId = this.authService.getCurrentUser()?.id ?? "";
    if (!userId) {
      this.wishlist.set([]);
      return;
    }
    this.isLoadingWishlist.set(true);
    try {
      const res = await firstValueFrom(this.learningApi.getWishlist(userId));
      const response = res;
      const data = response?.data ?? response?.Data ?? response ?? [];
      const wishlistItems = Array.isArray(data) ? data : [];
      const enrichedItems = await Promise.all(wishlistItems.map(async (item) => {
        try {
          const enrolled = await firstValueFrom(this.learningApi.checkMyEnrollment(item.courseId));
          return __spreadProps(__spreadValues({}, item), { isEnrolled: Boolean(enrolled) });
        } catch {
          return __spreadProps(__spreadValues({}, item), { isEnrolled: false });
        }
      }));
      this.wishlist.set(enrichedItems);
    } catch (error) {
      console.error("Error loading wishlist:", error);
      this.wishlist.set([]);
    } finally {
      this.isLoadingWishlist.set(false);
    }
  }
  switchTab(tab) {
    this.activeTab.set(tab);
    if (tab === "wishlist") {
      void this.loadWishlist();
    }
  }
  getImageUrl(path) {
    return this.learningApi.buildDownloadUrl(path);
  }
  formatPrice(price) {
    return price === 0 ? "Free" : `\u09F3${price.toLocaleString()}`;
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Profile, selectors: [["app-profile"]], decls: 103, vars: 41, consts: [[1, "profile-page"], [1, "topbar", "card-surface", "reveal-up"], ["routerLink", "/homepage", "aria-label", "Learning platform home", 1, "brand"], ["src", "/Logo2.png", "alt", "Touch & Solve Learning Platform", 1, "brand-logo"], ["aria-label", "Primary navigation", 1, "topbar-nav"], ["href", "#tracks"], ["href", "#platform-identity"], [1, "topbar-actions"], ["type", "button", 1, "lang-toggle-btn", 3, "click"], [1, "profile-shell"], ["aria-label", "User profile details", 1, "info-card"], ["aria-hidden", "true", 1, "avatar"], [1, "user-info"], [1, "role-badge"], ["aria-label", "Learning dashboard preview", 1, "hero-panel", "profile-panel", "reveal-up"], [1, "panel-header"], [1, "panel-label"], [1, "live-badge"], ["aria-hidden", "true", 1, "live-dot"], [1, "ring-wrap"], [1, "progress-ring"], ["viewBox", "0 0 120 120", 1, "ring-svg"], ["cx", "60", "cy", "60", "r", "50", 1, "ring-track"], ["cx", "60", "cy", "60", "r", "50", 1, "ring-fill"], [1, "ring-core"], [1, "ring-legend"], [1, "legend-item"], ["aria-hidden", "true", 1, "legend-dot", "legend-done"], ["aria-hidden", "true", 1, "legend-dot", "legend-remain"], [1, "dashboard-list"], [1, "dashboard-row"], ["aria-hidden", "true", 1, "row-icon"], [1, "row-value", "row-ok"], [1, "row-value", "row-err"], ["aria-label", "Future learning features", 1, "future-card"], [1, "action-grid"], ["type", "button", "routerLink", "/myClasses", 1, "future-btn"], ["type", "button", "routerLink", "/my-courses", 1, "future-btn"], ["type", "button", "routerLink", "/assignments", 1, "future-btn"], ["type", "button", "routerLink", "/certificates", 1, "future-btn"], [1, "profile-tabs"], ["type", "button", 1, "profile-tab", 3, "click"], [1, "tab-badge"], [1, "wishlist-section"], [1, "user-menu"], [1, "user-chip"], [1, "user-avatar"], [1, "user-name"], ["aria-hidden", "true", 1, "menu-caret"], ["role", "menu", 1, "user-menu-list"], ["routerLink", "/profile", "role", "menuitem", 1, "user-menu-link"], ["routerLink", "/teacher", "role", "menuitem", 1, "user-menu-link"], ["type", "button", 1, "nav-button", "nav-button-ghost", 3, "click"], ["routerLink", "/login", 1, "nav-button", "nav-button-ghost"], ["routerLink", "/register", 1, "nav-button", "nav-button-primary"], [1, "wishlist-loading"], [1, "wishlist-empty"], [1, "wishlist-grid"], [1, "wishlist-empty-icon"], ["routerLink", "/courses", 1, "browse-btn"], [1, "wishlist-card"], [1, "wishlist-thumb"], [3, "error", "src", "alt"], [1, "wishlist-card-body"], [1, "wishlist-level"], [1, "wishlist-card-footer"], [1, "wishlist-price"], [1, "wishlist-actions"], [1, "wishlist-view-btn", 3, "routerLink"], [1, "wishlist-enrolled-btn", 3, "routerLink"], [1, "wishlist-enrolled-btn", "wishlist-enroll-btn", 3, "routerLink", "queryParams"]], template: function Profile_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "header", 1)(2, "a", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "nav", 4)(5, "a", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "button", 8);
      \u0275\u0275listener("click", function Profile_Template_button_click_10_listener() {
        return ctx.lang.toggle();
      });
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "\u{1F310}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span");
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(15, Profile_Conditional_15_Template, 14, 6)(16, Profile_Conditional_16_Template, 4, 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "section", 9)(18, "section", 10)(19, "div", 11);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 12)(22, "h2");
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p");
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span", 13);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "aside", 14)(29, "div", 15)(30, "div")(31, "p", 16);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "h2");
      \u0275\u0275text(34, "Performance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "span", 17);
      \u0275\u0275element(36, "span", 18);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 19)(39, "div", 20);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(40, "svg", 21);
      \u0275\u0275element(41, "circle", 22)(42, "circle", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(43, "div", 24)(44, "strong");
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "span");
      \u0275\u0275text(48);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 25)(50, "div", 26);
      \u0275\u0275element(51, "span", 27);
      \u0275\u0275elementStart(52, "span");
      \u0275\u0275text(53);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 26);
      \u0275\u0275element(55, "span", 28);
      \u0275\u0275elementStart(56, "span");
      \u0275\u0275text(57);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(58, "div", 29)(59, "div", 30)(60, "span", 31);
      \u0275\u0275text(61, "\u2705");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "span");
      \u0275\u0275text(63, "Correct Answers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "strong", 32);
      \u0275\u0275text(65);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 30)(67, "span", 31);
      \u0275\u0275text(68, "\u274C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "span");
      \u0275\u0275text(70, "Wrong Answers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "strong", 33);
      \u0275\u0275text(72);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 30)(74, "span", 31);
      \u0275\u0275text(75, "\u{1F4CA}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "span");
      \u0275\u0275text(77, "Score");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "strong", 32);
      \u0275\u0275text(79);
      \u0275\u0275pipe(80, "number");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(81, "section", 34)(82, "h3");
      \u0275\u0275text(83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "p");
      \u0275\u0275text(85);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 35)(87, "button", 36);
      \u0275\u0275text(88);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "button", 37);
      \u0275\u0275text(90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "button", 38);
      \u0275\u0275text(92);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "button", 39);
      \u0275\u0275text(94);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(95, "div", 40)(96, "button", 41);
      \u0275\u0275listener("click", function Profile_Template_button_click_96_listener() {
        return ctx.switchTab("profile");
      });
      \u0275\u0275text(97, " \u{1F464} Profile ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "button", 41);
      \u0275\u0275listener("click", function Profile_Template_button_click_98_listener() {
        return ctx.switchTab("wishlist");
      });
      \u0275\u0275text(99, " \u2665 Wishlist ");
      \u0275\u0275conditionalCreate(100, Profile_Conditional_100_Template, 2, 1, "span", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(101, Profile_Conditional_101_Template, 0, 0);
      \u0275\u0275conditionalCreate(102, Profile_Conditional_102_Template, 4, 1, "section", 43);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.lang.t().navTracks);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.lang.t().navVision);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.lang.isBangla() ? "EN" : "\u09AC\u09BE\u0982");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoggedIn() ? 15 : 16);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.userName().charAt(0).toUpperCase());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.userName());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.userEmail());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", ctx.lang.t().profileRole, ": ", ctx.userRole());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.lang.t().profileDashboard);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.lang.t().profileLive, " ");
      \u0275\u0275advance(2);
      \u0275\u0275attribute("role", "img")("aria-label", ctx.percentageScore() + "% quiz completion");
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("--percentage", ctx.percentageScore() + "%");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(46, 35, ctx.percentageScore(), "1.0-0"), "%");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.lang.t().profileCompletion);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("Correct (", ctx.correctAnswers(), ")");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Wrong (", ctx.wrongAnswers(), ")");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.correctAnswers());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.wrongAnswers());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(80, 38, ctx.percentageScore(), "1.0-0"), "%");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.lang.t().profileActivity);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.lang.t().profileActivityDesc);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.lang.t().profileMyClasses);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.lang.t().profileMyCourses);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.lang.t().profileAssignments);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.lang.t().profileCertificates);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "profile");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "wishlist");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.wishlist().length > 0 ? 100 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "profile" ? 101 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "wishlist" ? 102 : -1);
    }
  }, dependencies: [RouterLink, CommonModule, DecimalPipe], styles: ['\n.profile-page[_ngcontent-%COMP%] {\n  width: 100vw;\n  margin-left: calc(50% - 50vw);\n  min-height: 100vh;\n  padding: 24px 20px;\n  background:\n    radial-gradient(\n      circle at 5% 10%,\n      rgba(59, 130, 246, 0.14),\n      transparent 30%),\n    radial-gradient(\n      circle at 92% 12%,\n      rgba(14, 165, 233, 0.14),\n      transparent 28%),\n    #f7f8fc;\n  color: #111827;\n}\n.profile-shell[_ngcontent-%COMP%] {\n  max-width: none;\n  width: 100%;\n  margin: 0 auto;\n  display: grid;\n  gap: 18px;\n}\n.lang-toggle-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border: 1.5px solid #2563eb;\n  border-radius: 999px;\n  background: transparent;\n  color: #2563eb;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background 0.18s,\n    color 0.18s,\n    transform 0.15s;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.lang-toggle-btn[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  color: #fff;\n  transform: scale(1.04);\n}\n.lang-toggle-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.hero-panel[_ngcontent-%COMP%] {\n  padding: 22px;\n  border-radius: 20px;\n  border: 1px solid rgba(37, 99, 235, 0.12);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.96),\n      rgba(247, 248, 252, 0.94));\n  box-shadow: 0 10px 28px rgba(37, 99, 235, 0.08);\n}\n.profile-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 24px;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 1.1rem;\n  letter-spacing: -0.02em;\n  color: #111827;\n}\n.panel-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: #2563eb;\n}\n.live-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 11px;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #0f766e;\n  background: rgba(13, 148, 136, 0.08);\n  border: 1px solid rgba(13, 148, 136, 0.22);\n}\n.live-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #0f766e;\n}\n.ring-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.progress-ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(100%, 130px);\n  aspect-ratio: 1;\n  flex-shrink: 0;\n}\n.ring-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.ring-track[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: rgba(37, 99, 235, 0.10);\n  stroke-width: 8;\n}\n.ring-fill[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #2563eb;\n  stroke-width: 8;\n  stroke-linecap: round;\n  stroke-dasharray: 314;\n  stroke-dashoffset: calc(314 * (1 - min(var(--percentage), 100%) / 100));\n  transition: stroke-dashoffset 0.6s ease;\n}\n.ring-core[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.ring-core[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  font-weight: 800;\n  color: #111827;\n}\n.ring-core[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: rgba(17, 24, 39, 0.62);\n}\n.ring-legend[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.88rem;\n  color: rgba(17, 24, 39, 0.68);\n}\n.legend-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.legend-done[_ngcontent-%COMP%] {\n  background: #2563eb;\n}\n.legend-remain[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.18);\n}\n.dashboard-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  padding-top: 4px;\n}\n.dashboard-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border-radius: 14px;\n  background: rgba(37, 99, 235, 0.04);\n  border: 1px solid rgba(37, 99, 235, 0.1);\n}\n.row-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, 0.08);\n}\n.row-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #111827;\n  white-space: nowrap;\n}\n.row-ok[_ngcontent-%COMP%] {\n  color: #0f766e;\n}\n.row-err[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.row-streak[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 12px;\n  z-index: 50;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 18px;\n  margin: 0 auto 28px;\n  max-width: none;\n  width: 100%;\n  border-radius: 32px;\n  border: 1px solid rgba(37, 99, 235, 0.1);\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  box-shadow: 0 2px 24px rgba(37, 99, 235, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 11px;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  width: auto;\n  max-width: 180px;\n  object-fit: contain;\n  flex-shrink: 0;\n}\n.topbar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: auto;\n}\n.topbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border-radius: 999px;\n  text-decoration: none;\n  font-size: 0.88rem;\n  font-weight: 500;\n  color: rgba(17, 24, 39, 0.65);\n  transition: background 0.2s ease, color 0.2s ease;\n}\n.topbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.07);\n  color: #2563eb;\n}\n.topbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.user-menu[_ngcontent-%COMP%] {\n  position: relative;\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  padding: 5px 12px 5px 5px;\n  border-radius: 999px;\n  border: 1px solid rgba(37, 99, 235, 0.1);\n  background: rgba(37, 99, 235, 0.04);\n  color: rgba(17, 24, 39, 0.65);\n  font-size: 0.88rem;\n  font-weight: 500;\n  list-style: none;\n}\n.user-menu[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.user-menu[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]::-webkit-details-marker {\n  display: none;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #0ea5e9);\n  color: #ffffff;\n  font-size: 0.76rem;\n  font-weight: 700;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #111827;\n}\n.menu-caret[_ngcontent-%COMP%] {\n  color: rgba(17, 24, 39, 0.5);\n}\n.user-menu-list[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  min-width: 180px;\n  padding: 6px;\n  border-radius: 16px;\n  border: 1px solid rgba(37, 99, 235, 0.1);\n  background: rgba(255, 255, 255, 0.98);\n  box-shadow: 0 16px 40px rgba(37, 99, 235, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06);\n  z-index: 60;\n}\n.user-menu-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-radius: 10px;\n  text-decoration: none;\n  font-size: 0.88rem;\n  font-weight: 500;\n  color: rgba(17, 24, 39, 0.65);\n  transition: background 0.15s ease, color 0.15s ease;\n}\n.user-menu-link[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.07);\n  color: #2563eb;\n}\n.nav-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  min-height: 38px;\n  padding: 0 16px;\n  border-radius: 999px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  text-decoration: none;\n  border: 1px solid transparent;\n  cursor: pointer;\n  transition:\n    transform 0.2s ease,\n    background 0.2s ease,\n    border-color 0.2s ease;\n}\n.nav-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.nav-button-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: rgba(37, 99, 235, 0.1);\n  color: rgba(17, 24, 39, 0.65);\n}\n.nav-button-ghost[_ngcontent-%COMP%]:hover {\n  border-color: rgba(37, 99, 235, 0.22);\n  color: #2563eb;\n  background: rgba(37, 99, 235, 0.05);\n}\n.nav-button-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #3b82f6 100%);\n  border-color: rgba(37, 99, 235, 0.3);\n  color: #ffffff;\n  box-shadow: 0 4px 18px rgba(37, 99, 235, 0.14);\n}\n.nav-button-primary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 24px rgba(37, 99, 235, 0.28);\n}\n.profile-head[_ngcontent-%COMP%], \n.info-card[_ngcontent-%COMP%], \n.future-card[_ngcontent-%COMP%] {\n  padding: 22px;\n  border-radius: 20px;\n  border: 1px solid rgba(37, 99, 235, 0.12);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.96),\n      rgba(247, 248, 252, 0.94));\n  box-shadow: 0 10px 28px rgba(37, 99, 235, 0.08);\n}\n.profile-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.profile-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.user-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.future-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.future-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.profile-head[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n.back-link[_ngcontent-%COMP%] {\n  width: fit-content;\n  text-decoration: none;\n  padding: 8px 12px;\n  border-radius: 999px;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #1d4ed8;\n  border: 1px solid rgba(37, 99, 235, 0.2);\n  background: rgba(37, 99, 235, 0.05);\n}\n.profile-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.future-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(17, 24, 39, 0.68);\n  line-height: 1.65;\n}\n.info-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  gap: 16px;\n}\n.avatar[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 74px;\n  height: 74px;\n  border-radius: 50%;\n  font-size: 1.55rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #0ea5e9);\n  color: #ffffff;\n  box-shadow: 0 10px 22px rgba(37, 99, 235, 0.24);\n}\n.user-info[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n}\n.role-badge[_ngcontent-%COMP%] {\n  width: fit-content;\n  padding: 8px 12px;\n  border-radius: 999px;\n  font-size: 0.83rem;\n  font-weight: 700;\n  color: #1d4ed8;\n  background: rgba(37, 99, 235, 0.08);\n  border: 1px solid rgba(37, 99, 235, 0.16);\n}\n.future-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n.action-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n}\n.future-btn[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 0 14px;\n  border-radius: 12px;\n  border: 1px solid rgba(37, 99, 235, 0.2);\n  background: rgba(37, 99, 235, 0.04);\n  color: #1f2937;\n  font-size: 0.95rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: transform 0.2s ease, background 0.2s ease;\n}\n.future-btn[_ngcontent-%COMP%]:hover, \n.future-btn[_ngcontent-%COMP%]:focus-visible {\n  transform: translateY(-1px);\n  background: rgba(37, 99, 235, 0.12);\n  outline: none;\n}\n@media (max-width: 720px) {\n  .profile-page[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .panel-header[_ngcontent-%COMP%], \n   .ring-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .dashboard-row[_ngcontent-%COMP%] {\n    justify-items: start;\n  }\n  .topbar[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 10px;\n    padding: 10px 12px;\n    border-radius: 20px;\n  }\n  .topbar-nav[_ngcontent-%COMP%] {\n    order: 3;\n    width: 100%;\n    margin-left: 0;\n    overflow-x: auto;\n  }\n  .info-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n  .avatar[_ngcontent-%COMP%], \n   .role-badge[_ngcontent-%COMP%] {\n    margin-inline: auto;\n  }\n  .action-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.profile-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 24px;\n  border-bottom: 2px solid #e5e7eb;\n  padding-bottom: 0;\n}\n.profile-tab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border: none;\n  background: transparent;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: rgba(17, 24, 39, 0.55);\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: color 0.18s, border-color 0.18s;\n  font-family: "Inter", sans-serif;\n}\n.profile-tab[_ngcontent-%COMP%]:hover {\n  color: #2563eb;\n}\n.profile-tab.active[_ngcontent-%COMP%] {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n}\n.tab-badge[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n  font-size: 0.70rem;\n  font-weight: 800;\n  padding: 2px 7px;\n  border-radius: 999px;\n}\n.wishlist-section[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\n.wishlist-loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px;\n  color: #7c3aed;\n  font-weight: 600;\n}\n.wishlist-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.wishlist-empty-icon[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  margin-bottom: 12px;\n}\n.wishlist-empty[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin-bottom: 6px;\n}\n.wishlist-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(17, 24, 39, 0.55);\n  margin-bottom: 20px;\n}\n.browse-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 10px 24px;\n  border-radius: 10px;\n  background: #2563eb;\n  color: white;\n  font-weight: 700;\n  text-decoration: none;\n  transition: background 0.18s;\n}\n.browse-btn[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.wishlist-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n}\n.wishlist-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  border: 1px solid rgba(17, 24, 39, 0.08);\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.wishlist-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.10);\n}\n.wishlist-thumb[_ngcontent-%COMP%] {\n  height: 110px;\n  overflow: hidden;\n  background: #eff6ff;\n}\n.wishlist-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.wishlist-card-body[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.wishlist-level[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: fit-content;\n  padding: 2px 9px;\n  border-radius: 4px;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.wishlist-card-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n  line-height: 1.3;\n}\n.wishlist-card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: rgba(17, 24, 39, 0.55);\n  margin: 0;\n}\n.wishlist-card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  margin-top: 4px;\n  flex-wrap: wrap;\n}\n.wishlist-price[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #111827;\n}\n.wishlist-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.wishlist-view-btn[_ngcontent-%COMP%], \n.wishlist-enrolled-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 6px 12px;\n  border-radius: 7px;\n  color: white;\n  font-size: 0.76rem;\n  font-weight: 700;\n  text-decoration: none;\n  transition: background 0.18s;\n}\n.wishlist-view-btn[_ngcontent-%COMP%] {\n  background: #2563eb;\n}\n.wishlist-view-btn[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.wishlist-enrolled-btn[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.wishlist-enrolled-btn[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.wishlist-enroll-btn[_ngcontent-%COMP%] {\n  background: #0f766e;\n}\n.wishlist-enroll-btn[_ngcontent-%COMP%]:hover {\n  background: #115e59;\n}\n@media (max-width: 640px) {\n  .wishlist-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=profile.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Profile, [{
    type: Component,
    args: [{ selector: "app-profile", imports: [RouterLink, CommonModule], template: `<main class="profile-page">
	<header class="topbar card-surface reveal-up">
		<a class="brand" routerLink="/homepage" aria-label="Learning platform home">
			<img src="/Logo2.png" alt="Touch & Solve Learning Platform" class="brand-logo" />
		</a>
		<nav class="topbar-nav" aria-label="Primary navigation">
			<a href="#tracks">{{ lang.t().navTracks }}</a>
			<a href="#platform-identity">{{ lang.t().navVision }}</a>
		</nav>
		<div class="topbar-actions">
			<button type="button" class="lang-toggle-btn" (click)="lang.toggle()">
				<span>\u{1F310}</span>
				<span>{{ lang.isBangla() ? 'EN' : '\u09AC\u09BE\u0982' }}</span>
			</button>
			@if (isLoggedIn()) {
				<details class="user-menu">
					<summary class="user-chip">
						<span class="user-avatar">{{ userInitial() }}</span>
						<span class="user-name">{{ lang.t().navHi }} {{ userName() }}</span>
						<span class="menu-caret" aria-hidden="true">\u25BE</span>
					</summary>
					<div class="user-menu-list" role="menu">
						<a routerLink="/profile" class="user-menu-link" role="menuitem">{{ lang.t().navProfile }}</a>
						@if (isTeacher()) {
							<a routerLink="/teacher" class="user-menu-link" role="menuitem">{{ lang.t().navTeacher }}</a>
						}
					</div>
				</details>
				<button type="button" class="nav-button nav-button-ghost" (click)="logout()">{{ lang.t().navLogout }}</button>
			} @else {
				<a routerLink="/login" class="nav-button nav-button-ghost">{{ lang.t().navLogin }}</a>
				<a routerLink="/register" class="nav-button nav-button-primary">{{ lang.t().navGetStarted }}</a>
			}
		</div>
	</header>

	<section class="profile-shell">
		<section class="info-card" aria-label="User profile details">
			<div class="avatar" aria-hidden="true">{{ userName().charAt(0).toUpperCase() }}</div>
			<div class="user-info">
				<h2>{{ userName() }}</h2>
				<p>{{ userEmail() }}</p>
				<span class="role-badge">{{ lang.t().profileRole }}: {{ userRole() }}</span>
			</div>
		</section>

		<aside class="hero-panel profile-panel reveal-up" aria-label="Learning dashboard preview">
			<div class="panel-header">
				<div>
					<p class="panel-label">{{ lang.t().profileDashboard }}</p>
					<h2>Performance</h2>
				</div>
				<span class="live-badge">
					<span class="live-dot" aria-hidden="true"></span>
					{{ lang.t().profileLive }}
				</span>
			</div>
			<div class="ring-wrap">
				<div class="progress-ring" [attr.role]="'img'" [attr.aria-label]="percentageScore() + '% quiz completion'">
					<svg class="ring-svg" viewBox="0 0 120 120">
						<circle cx="60" cy="60" r="50" class="ring-track" />
						<circle cx="60" cy="60" r="50" class="ring-fill" [style.--percentage]="percentageScore() + '%'" />
					</svg>
					<div class="ring-core">
						<strong>{{ percentageScore() | number: '1.0-0' }}%</strong>
						<span>{{ lang.t().profileCompletion }}</span>
					</div>
				</div>
				<div class="ring-legend">
					<div class="legend-item">
						<span class="legend-dot legend-done" aria-hidden="true"></span>
						<span>Correct ({{ correctAnswers() }})</span>
					</div>
					<div class="legend-item">
						<span class="legend-dot legend-remain" aria-hidden="true"></span>
						<span>Wrong ({{ wrongAnswers() }})</span>
					</div>
				</div>
			</div>
			<div class="dashboard-list">
				<div class="dashboard-row">
					<span class="row-icon" aria-hidden="true">\u2705</span>
					<span>Correct Answers</span>
					<strong class="row-value row-ok">{{ correctAnswers() }}</strong>
				</div>
				<div class="dashboard-row">
					<span class="row-icon" aria-hidden="true">\u274C</span>
					<span>Wrong Answers</span>
					<strong class="row-value row-err">{{ wrongAnswers() }}</strong>
				</div>
				<div class="dashboard-row">
					<span class="row-icon" aria-hidden="true">\u{1F4CA}</span>
					<span>Score</span>
					<strong class="row-value row-ok">{{ percentageScore() | number: '1.0-0' }}%</strong>
				</div>
			</div>
		</aside>

		<section class="future-card" aria-label="Future learning features">
			<h3>{{ lang.t().profileActivity }}</h3>
			<p>{{ lang.t().profileActivityDesc }}</p>
			<div class="action-grid">
				<button type="button" routerLink="/myClasses" class="future-btn">{{ lang.t().profileMyClasses }}</button>
				<button type="button" routerLink="/my-courses" class="future-btn">{{ lang.t().profileMyCourses }}</button>
				<button type="button" routerLink="/assignments" class="future-btn">{{ lang.t().profileAssignments }}</button>
				<button type="button" routerLink="/certificates" class="future-btn">{{ lang.t().profileCertificates }}</button>
			</div>
		</section>

		<!-- Tab buttons -->
<div class="profile-tabs">
  <button type="button"
    class="profile-tab"
    [class.active]="activeTab() === 'profile'"
    (click)="switchTab('profile')">
    \u{1F464} Profile
  </button>
  <button type="button"
    class="profile-tab"
    [class.active]="activeTab() === 'wishlist'"
    (click)="switchTab('wishlist')">
    \u2665 Wishlist
    @if (wishlist().length > 0) {
      <span class="tab-badge">{{ wishlist().length }}</span>
    }
  </button>
</div>

<!-- Profile content -->
@if (activeTab() === 'profile') {
  <!-- \u0986\u0997\u09C7\u09B0 profile content \u098F\u0996\u09BE\u09A8\u09C7 -->
}

<!-- Wishlist content -->
@if (activeTab() === 'wishlist') {
  <section class="wishlist-section">

    @if (isLoadingWishlist()) {
      <div class="wishlist-loading">Loading...</div>
    } @else if (wishlist().length === 0) {
      <div class="wishlist-empty">
        <div class="wishlist-empty-icon">\u{1F494}</div>
        <h3>Wishlist \u0996\u09BE\u09B2\u09BF</h3>
        <p>\u0995\u09CB\u09A8\u09CB course wishlist \u098F \u09A8\u09C7\u0987\u0964</p>
        <a routerLink="/courses" class="browse-btn">Browse Courses</a>
      </div>
    } @else {
      <div class="wishlist-grid">
        @for (item of wishlist(); track item.courseId) {
          <div class="wishlist-card">
            <div class="wishlist-thumb">
              <img [src]="getImageUrl(item.thumbnailPath)"
                [alt]="item.title"
                (error)="$any($event.target).style.display='none'" />
            </div>
            <div class="wishlist-card-body">
              <span class="wishlist-level">{{ item.level }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.instructorName }}</p>
              <div class="wishlist-card-footer">
                <strong class="wishlist-price">{{ formatPrice(item.price) }}</strong>
							<div class="wishlist-actions">
								<a [routerLink]="['/course-details', item.courseId]" class="wishlist-view-btn">View Course</a>
								@if (item.isEnrolled) {
									<a [routerLink]="['/enrolled-course', item.courseId]" class="wishlist-enrolled-btn">Enrolled</a>
								} @else {
									<a [routerLink]="['/payment']" [queryParams]="{ courseId: item.courseId, courseTitle: item.title, amount: item.price }" class="wishlist-enrolled-btn wishlist-enroll-btn">Enroll Now</a>
								}
							</div>
              </div>
            </div>
          </div>
        }
      </div>
    }

  </section>
}
	</section>
</main>
`, styles: ['/* src/app/base/profile/profile.css */\n.profile-page {\n  width: 100vw;\n  margin-left: calc(50% - 50vw);\n  min-height: 100vh;\n  padding: 24px 20px;\n  background:\n    radial-gradient(\n      circle at 5% 10%,\n      rgba(59, 130, 246, 0.14),\n      transparent 30%),\n    radial-gradient(\n      circle at 92% 12%,\n      rgba(14, 165, 233, 0.14),\n      transparent 28%),\n    #f7f8fc;\n  color: #111827;\n}\n.profile-shell {\n  max-width: none;\n  width: 100%;\n  margin: 0 auto;\n  display: grid;\n  gap: 18px;\n}\n.lang-toggle-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border: 1.5px solid #2563eb;\n  border-radius: 999px;\n  background: transparent;\n  color: #2563eb;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background 0.18s,\n    color 0.18s,\n    transform 0.15s;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.lang-toggle-btn:hover {\n  background: #2563eb;\n  color: #fff;\n  transform: scale(1.04);\n}\n.lang-toggle-btn:active {\n  transform: scale(0.97);\n}\n.hero-panel {\n  padding: 22px;\n  border-radius: 20px;\n  border: 1px solid rgba(37, 99, 235, 0.12);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.96),\n      rgba(247, 248, 252, 0.94));\n  box-shadow: 0 10px 28px rgba(37, 99, 235, 0.08);\n}\n.profile-panel {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 24px;\n}\n.panel-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.panel-header h2 {\n  margin-top: 5px;\n  font-size: 1.1rem;\n  letter-spacing: -0.02em;\n  color: #111827;\n}\n.panel-label {\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: #2563eb;\n}\n.live-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 11px;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #0f766e;\n  background: rgba(13, 148, 136, 0.08);\n  border: 1px solid rgba(13, 148, 136, 0.22);\n}\n.live-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #0f766e;\n}\n.ring-wrap {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.progress-ring {\n  position: relative;\n  width: min(100%, 130px);\n  aspect-ratio: 1;\n  flex-shrink: 0;\n}\n.ring-svg {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.ring-track {\n  fill: none;\n  stroke: rgba(37, 99, 235, 0.10);\n  stroke-width: 8;\n}\n.ring-fill {\n  fill: none;\n  stroke: #2563eb;\n  stroke-width: 8;\n  stroke-linecap: round;\n  stroke-dasharray: 314;\n  stroke-dashoffset: calc(314 * (1 - min(var(--percentage), 100%) / 100));\n  transition: stroke-dashoffset 0.6s ease;\n}\n.ring-core {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.ring-core strong {\n  font-size: 1.7rem;\n  font-weight: 800;\n  color: #111827;\n}\n.ring-core span {\n  font-size: 0.82rem;\n  color: rgba(17, 24, 39, 0.62);\n}\n.ring-legend {\n  display: grid;\n  gap: 8px;\n}\n.legend-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.88rem;\n  color: rgba(17, 24, 39, 0.68);\n}\n.legend-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.legend-done {\n  background: #2563eb;\n}\n.legend-remain {\n  background: rgba(37, 99, 235, 0.18);\n}\n.dashboard-list {\n  display: grid;\n  gap: 10px;\n  padding-top: 4px;\n}\n.dashboard-row {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border-radius: 14px;\n  background: rgba(37, 99, 235, 0.04);\n  border: 1px solid rgba(37, 99, 235, 0.1);\n}\n.row-icon {\n  display: grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, 0.08);\n}\n.row-value {\n  font-weight: 700;\n  color: #111827;\n  white-space: nowrap;\n}\n.row-ok {\n  color: #0f766e;\n}\n.row-err {\n  color: #dc2626;\n}\n.row-streak {\n  color: #2563eb;\n}\n.topbar {\n  position: sticky;\n  top: 12px;\n  z-index: 50;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 18px;\n  margin: 0 auto 28px;\n  max-width: none;\n  width: 100%;\n  border-radius: 32px;\n  border: 1px solid rgba(37, 99, 235, 0.1);\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  box-shadow: 0 2px 24px rgba(37, 99, 235, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 11px;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.brand-logo {\n  height: 40px;\n  width: auto;\n  max-width: 180px;\n  object-fit: contain;\n  flex-shrink: 0;\n}\n.topbar-nav {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: auto;\n}\n.topbar-nav a {\n  padding: 7px 14px;\n  border-radius: 999px;\n  text-decoration: none;\n  font-size: 0.88rem;\n  font-weight: 500;\n  color: rgba(17, 24, 39, 0.65);\n  transition: background 0.2s ease, color 0.2s ease;\n}\n.topbar-nav a:hover {\n  background: rgba(37, 99, 235, 0.07);\n  color: #2563eb;\n}\n.topbar-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.user-menu {\n  position: relative;\n}\n.user-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  padding: 5px 12px 5px 5px;\n  border-radius: 999px;\n  border: 1px solid rgba(37, 99, 235, 0.1);\n  background: rgba(37, 99, 235, 0.04);\n  color: rgba(17, 24, 39, 0.65);\n  font-size: 0.88rem;\n  font-weight: 500;\n  list-style: none;\n}\n.user-menu summary {\n  list-style: none;\n}\n.user-menu summary::-webkit-details-marker {\n  display: none;\n}\n.user-avatar {\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #0ea5e9);\n  color: #ffffff;\n  font-size: 0.76rem;\n  font-weight: 700;\n}\n.user-name {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #111827;\n}\n.menu-caret {\n  color: rgba(17, 24, 39, 0.5);\n}\n.user-menu-list {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  min-width: 180px;\n  padding: 6px;\n  border-radius: 16px;\n  border: 1px solid rgba(37, 99, 235, 0.1);\n  background: rgba(255, 255, 255, 0.98);\n  box-shadow: 0 16px 40px rgba(37, 99, 235, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06);\n  z-index: 60;\n}\n.user-menu-link {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-radius: 10px;\n  text-decoration: none;\n  font-size: 0.88rem;\n  font-weight: 500;\n  color: rgba(17, 24, 39, 0.65);\n  transition: background 0.15s ease, color 0.15s ease;\n}\n.user-menu-link:hover {\n  background: rgba(37, 99, 235, 0.07);\n  color: #2563eb;\n}\n.nav-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  min-height: 38px;\n  padding: 0 16px;\n  border-radius: 999px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  text-decoration: none;\n  border: 1px solid transparent;\n  cursor: pointer;\n  transition:\n    transform 0.2s ease,\n    background 0.2s ease,\n    border-color 0.2s ease;\n}\n.nav-button:hover {\n  transform: translateY(-1px);\n}\n.nav-button-ghost {\n  background: transparent;\n  border-color: rgba(37, 99, 235, 0.1);\n  color: rgba(17, 24, 39, 0.65);\n}\n.nav-button-ghost:hover {\n  border-color: rgba(37, 99, 235, 0.22);\n  color: #2563eb;\n  background: rgba(37, 99, 235, 0.05);\n}\n.nav-button-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #3b82f6 100%);\n  border-color: rgba(37, 99, 235, 0.3);\n  color: #ffffff;\n  box-shadow: 0 4px 18px rgba(37, 99, 235, 0.14);\n}\n.nav-button-primary:hover {\n  box-shadow: 0 6px 24px rgba(37, 99, 235, 0.28);\n}\n.profile-head,\n.info-card,\n.future-card {\n  padding: 22px;\n  border-radius: 20px;\n  border: 1px solid rgba(37, 99, 235, 0.12);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.96),\n      rgba(247, 248, 252, 0.94));\n  box-shadow: 0 10px 28px rgba(37, 99, 235, 0.08);\n}\n.profile-head h1,\n.profile-head p,\n.user-info h2,\n.user-info p,\n.future-card h3,\n.future-card p {\n  margin: 0;\n}\n.profile-head {\n  display: grid;\n  gap: 10px;\n}\n.back-link {\n  width: fit-content;\n  text-decoration: none;\n  padding: 8px 12px;\n  border-radius: 999px;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #1d4ed8;\n  border: 1px solid rgba(37, 99, 235, 0.2);\n  background: rgba(37, 99, 235, 0.05);\n}\n.profile-head p,\n.user-info p,\n.future-card p {\n  color: rgba(17, 24, 39, 0.68);\n  line-height: 1.65;\n}\n.info-card {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  gap: 16px;\n}\n.avatar {\n  display: grid;\n  place-items: center;\n  width: 74px;\n  height: 74px;\n  border-radius: 50%;\n  font-size: 1.55rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #0ea5e9);\n  color: #ffffff;\n  box-shadow: 0 10px 22px rgba(37, 99, 235, 0.24);\n}\n.user-info {\n  display: grid;\n  gap: 6px;\n}\n.role-badge {\n  width: fit-content;\n  padding: 8px 12px;\n  border-radius: 999px;\n  font-size: 0.83rem;\n  font-weight: 700;\n  color: #1d4ed8;\n  background: rgba(37, 99, 235, 0.08);\n  border: 1px solid rgba(37, 99, 235, 0.16);\n}\n.future-card {\n  display: grid;\n  gap: 14px;\n}\n.action-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n}\n.future-btn {\n  min-height: 44px;\n  padding: 0 14px;\n  border-radius: 12px;\n  border: 1px solid rgba(37, 99, 235, 0.2);\n  background: rgba(37, 99, 235, 0.04);\n  color: #1f2937;\n  font-size: 0.95rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: transform 0.2s ease, background 0.2s ease;\n}\n.future-btn:hover,\n.future-btn:focus-visible {\n  transform: translateY(-1px);\n  background: rgba(37, 99, 235, 0.12);\n  outline: none;\n}\n@media (max-width: 720px) {\n  .profile-page {\n    padding: 16px;\n  }\n  .panel-header,\n  .ring-wrap {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .dashboard-row {\n    justify-items: start;\n  }\n  .topbar {\n    flex-wrap: wrap;\n    gap: 10px;\n    padding: 10px 12px;\n    border-radius: 20px;\n  }\n  .topbar-nav {\n    order: 3;\n    width: 100%;\n    margin-left: 0;\n    overflow-x: auto;\n  }\n  .info-card {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n  .avatar,\n  .role-badge {\n    margin-inline: auto;\n  }\n  .action-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.profile-tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 24px;\n  border-bottom: 2px solid #e5e7eb;\n  padding-bottom: 0;\n}\n.profile-tab {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border: none;\n  background: transparent;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: rgba(17, 24, 39, 0.55);\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: color 0.18s, border-color 0.18s;\n  font-family: "Inter", sans-serif;\n}\n.profile-tab:hover {\n  color: #2563eb;\n}\n.profile-tab.active {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n}\n.tab-badge {\n  background: #ef4444;\n  color: white;\n  font-size: 0.70rem;\n  font-weight: 800;\n  padding: 2px 7px;\n  border-radius: 999px;\n}\n.wishlist-section {\n  padding-top: 8px;\n}\n.wishlist-loading {\n  text-align: center;\n  padding: 48px;\n  color: #7c3aed;\n  font-weight: 600;\n}\n.wishlist-empty {\n  text-align: center;\n  padding: 60px 20px;\n}\n.wishlist-empty-icon {\n  font-size: 3.5rem;\n  margin-bottom: 12px;\n}\n.wishlist-empty h3 {\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin-bottom: 6px;\n}\n.wishlist-empty p {\n  color: rgba(17, 24, 39, 0.55);\n  margin-bottom: 20px;\n}\n.browse-btn {\n  display: inline-flex;\n  padding: 10px 24px;\n  border-radius: 10px;\n  background: #2563eb;\n  color: white;\n  font-weight: 700;\n  text-decoration: none;\n  transition: background 0.18s;\n}\n.browse-btn:hover {\n  background: #1d4ed8;\n}\n.wishlist-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n}\n.wishlist-card {\n  background: white;\n  border-radius: 16px;\n  border: 1px solid rgba(17, 24, 39, 0.08);\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.wishlist-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.10);\n}\n.wishlist-thumb {\n  height: 110px;\n  overflow: hidden;\n  background: #eff6ff;\n}\n.wishlist-thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.wishlist-card-body {\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.wishlist-level {\n  display: inline-flex;\n  width: fit-content;\n  padding: 2px 9px;\n  border-radius: 4px;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.wishlist-card-body h3 {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n  line-height: 1.3;\n}\n.wishlist-card-body p {\n  font-size: 0.78rem;\n  color: rgba(17, 24, 39, 0.55);\n  margin: 0;\n}\n.wishlist-card-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  margin-top: 4px;\n  flex-wrap: wrap;\n}\n.wishlist-price {\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #111827;\n}\n.wishlist-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.wishlist-view-btn,\n.wishlist-enrolled-btn {\n  display: inline-flex;\n  padding: 6px 12px;\n  border-radius: 7px;\n  color: white;\n  font-size: 0.76rem;\n  font-weight: 700;\n  text-decoration: none;\n  transition: background 0.18s;\n}\n.wishlist-view-btn {\n  background: #2563eb;\n}\n.wishlist-view-btn:hover {\n  background: #1d4ed8;\n}\n.wishlist-enrolled-btn {\n  background: #16a34a;\n}\n.wishlist-enrolled-btn:hover {\n  background: #15803d;\n}\n.wishlist-enroll-btn {\n  background: #0f766e;\n}\n.wishlist-enroll-btn:hover {\n  background: #115e59;\n}\n@media (max-width: 640px) {\n  .wishlist-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=profile.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Profile, { className: "Profile", filePath: "app/base/profile/profile.ts", lineNumber: 38 });
})();

// src/app/base/course-details/course-details.ts
var _c04 = (a0) => ["/enrolled-course", a0];
var _c13 = () => ["/payment"];
var _c23 = (a0, a1, a2) => ({ courseId: a0, courseTitle: a1, amount: a2 });
function CourseDetails_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 10)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().cdLoading);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().cdLoadingDesc);
  }
}
function CourseDetails_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().cdUnavailable);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().cdGoBack);
  }
}
function CourseDetails_Conditional_16_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " ... ");
  }
}
function CourseDetails_Conditional_16_Conditional_23_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.lang.t().cdSeeLess, " ");
  }
}
function CourseDetails_Conditional_16_Conditional_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.lang.t().cdSeeMore, " ");
  }
}
function CourseDetails_Conditional_16_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function CourseDetails_Conditional_16_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleDescription());
    });
    \u0275\u0275conditionalCreate(1, CourseDetails_Conditional_16_Conditional_23_Conditional_1_Template, 1, 1)(2, CourseDetails_Conditional_16_Conditional_23_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isDescriptionExpanded() ? 1 : 2);
  }
}
function CourseDetails_Conditional_16_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 40);
    \u0275\u0275listener("error", function CourseDetails_Conditional_16_Conditional_30_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onImageError());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const selectedCourse_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("src", selectedCourse_r5.thumbnailUrl, \u0275\u0275sanitizeUrl)("alt", selectedCourse_r5.title + " thumbnail");
  }
}
function CourseDetails_Conditional_16_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span");
    \u0275\u0275text(2, "No Image");
    \u0275\u0275elementEnd()();
  }
}
function CourseDetails_Conditional_16_Conditional_41_Conditional_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function CourseDetails_Conditional_16_Conditional_41_Conditional_2_For_5_Template_button_click_0_listener() {
      const star_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.setRating(star_r9));
    });
    \u0275\u0275text(1, " \u2605 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const star_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", star_r9 <= ctx_r0.userRating());
    \u0275\u0275attribute("aria-label", "Rate " + star_r9 + " stars");
  }
}
function CourseDetails_Conditional_16_Conditional_41_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.ratingMessage());
  }
}
function CourseDetails_Conditional_16_Conditional_41_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "h4");
    \u0275\u0275text(2, "What do you think about this course?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 43);
    \u0275\u0275repeaterCreate(4, CourseDetails_Conditional_16_Conditional_41_Conditional_2_For_5_Template, 2, 3, "button", 44, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "textarea", 45);
    \u0275\u0275listener("input", function CourseDetails_Conditional_16_Conditional_41_Conditional_2_Template_textarea_input_6_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.userFeedback.set($event.target.value));
    });
    \u0275\u0275text(7, "							");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, CourseDetails_Conditional_16_Conditional_41_Conditional_2_Conditional_8_Template, 2, 1, "p", 46);
    \u0275\u0275elementStart(9, "button", 47);
    \u0275\u0275listener("click", function CourseDetails_Conditional_16_Conditional_41_Conditional_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      const selectedCourse_r5 = \u0275\u0275nextContext(2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitRating(selectedCourse_r5.id));
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.getStarArray());
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r0.userFeedback());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.ratingMessage() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isSubmittingRating());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isSubmittingRating() ? "Saving..." : "Submit Rating", " ");
  }
}
function CourseDetails_Conditional_16_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function CourseDetails_Conditional_16_Conditional_41_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showRatingForm.set(!ctx_r0.showRatingForm()));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, CourseDetails_Conditional_16_Conditional_41_Conditional_2_Template, 11, 4, "div", 42);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.showRatingForm() ? "\u2715 Close" : "\u2B50 Rate Course", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showRatingForm() ? 2 : -1);
  }
}
function CourseDetails_Conditional_16_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", !ctx_r0.isLoggedIn() ? "Login to Rate" : "Enroll to Rate", " ");
  }
}
function CourseDetails_Conditional_16_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.lang.t().cdCoupon);
  }
}
function CourseDetails_Conditional_16_Conditional_44_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.lang.t().cdCheckingEnrollment);
  }
}
function CourseDetails_Conditional_16_Conditional_44_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const selectedCourse_r5 = \u0275\u0275nextContext(2);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c04, selectedCourse_r5.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.lang.t().cdEnrolled);
  }
}
function CourseDetails_Conditional_16_Conditional_44_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const selectedCourse_r5 = \u0275\u0275nextContext(2);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c13))("queryParams", \u0275\u0275pureFunction3(4, _c23, selectedCourse_r5.id, selectedCourse_r5.title, selectedCourse_r5.price));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.lang.t().cdEnrollNow);
  }
}
function CourseDetails_Conditional_16_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CourseDetails_Conditional_16_Conditional_44_Conditional_0_Template, 2, 1, "button", 49)(1, CourseDetails_Conditional_16_Conditional_44_Conditional_1_Template, 2, 4, "a", 50)(2, CourseDetails_Conditional_16_Conditional_44_Conditional_2_Template, 2, 8, "a", 51);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.isCheckingEnrollment() ? 0 : ctx_r0.isEnrolled() ? 1 : 2);
  }
}
function CourseDetails_Conditional_16_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.lang.t().cdLoginToEnroll);
  }
}
function CourseDetails_Conditional_16_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.isTogglingWishlist() ? "Updating..." : "\u2713 In Wishlist", " ");
  }
}
function CourseDetails_Conditional_16_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.isTogglingWishlist() ? "Adding..." : "\u2661 Add to Wishlist", " ");
  }
}
function CourseDetails_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "section", 14)(2, "header", 15)(3, "button", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "article", 17)(6, "h1");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "section", 18)(9, "h2");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 19)(12, "article", 20)(13, "div", 21);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "section", 18)(18, "h2");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 22);
    \u0275\u0275text(21);
    \u0275\u0275conditionalCreate(22, CourseDetails_Conditional_16_Conditional_22_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, CourseDetails_Conditional_16_Conditional_23_Template, 3, 1, "button", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "section", 24)(25, "h3");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "aside", 25);
    \u0275\u0275conditionalCreate(30, CourseDetails_Conditional_16_Conditional_30_Template, 1, 2, "img", 26)(31, CourseDetails_Conditional_16_Conditional_31_Template, 3, 0, "div", 27);
    \u0275\u0275elementStart(32, "div", 28)(33, "div", 29)(34, "div", 30);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p", 31);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 32)(39, "p", 33);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(41, CourseDetails_Conditional_16_Conditional_41_Template, 3, 2)(42, CourseDetails_Conditional_16_Conditional_42_Template, 2, 1, "button", 34);
    \u0275\u0275conditionalCreate(43, CourseDetails_Conditional_16_Conditional_43_Template, 2, 1, "button", 35);
    \u0275\u0275conditionalCreate(44, CourseDetails_Conditional_16_Conditional_44_Template, 3, 1)(45, CourseDetails_Conditional_16_Conditional_45_Template, 2, 1, "a", 36);
    \u0275\u0275elementStart(46, "button", 37);
    \u0275\u0275listener("click", function CourseDetails_Conditional_16_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleWishlist());
    });
    \u0275\u0275conditionalCreate(47, CourseDetails_Conditional_16_Conditional_47_Template, 1, 1)(48, CourseDetails_Conditional_16_Conditional_48_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "ul", 38)(50, "li")(51, "span");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "strong");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "li")(56, "span");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "strong");
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "li")(61, "span");
    \u0275\u0275text(62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "strong");
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "li")(66, "span");
    \u0275\u0275text(67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "strong");
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "li")(71, "span");
    \u0275\u0275text(72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "strong");
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const selectedCourse_r5 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().cdOverview);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(selectedCourse_r5.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().cdInstructor);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getInstructorInitial(selectedCourse_r5.instructorName));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(selectedCourse_r5.instructorName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().cdDescription);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.displayDescription());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.canToggleDescription() && !ctx_r0.isDescriptionExpanded() ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.canToggleDescription() ? 23 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().cdNote);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().cdNoteText);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.imageAvailable() ? 30 : 31);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.averageRating().toFixed(1), " \u2B50 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", ctx_r0.totalRatings(), " ratings)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatPrice(selectedCourse_r5.price));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isLoggedIn() && ctx_r0.isEnrolled() ? 41 : 42);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.isLoggedIn() && !ctx_r0.isEnrolled() ? 43 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isLoggedIn() ? 44 : 45);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("wishlisted", ctx_r0.isWishlisted())("is-toggling", ctx_r0.isTogglingWishlist());
    \u0275\u0275property("disabled", ctx_r0.isTogglingWishlist());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isWishlisted() ? 47 : 48);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().cdCategory);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(selectedCourse_r5.category);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().cdLevel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(selectedCourse_r5.level);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().cdLessonsCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(selectedCourse_r5.lessonCount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().cdDuration);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDuration(selectedCourse_r5.durationMinutes));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().cdStatus);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(selectedCourse_r5.isPublished ? ctx_r0.lang.t().cdPublished : ctx_r0.lang.t().cdDraft);
  }
}
var CourseDetails = class _CourseDetails {
  route = inject(ActivatedRoute, { optional: true });
  learningApi = inject(LearningApiService);
  authService = inject(AuthService);
  router = inject(Router);
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  course = signal(null, ...ngDevMode ? [{ debugName: "course" }] : (
    /* istanbul ignore next */
    []
  ));
  isDescriptionExpanded = signal(false, ...ngDevMode ? [{ debugName: "isDescriptionExpanded" }] : (
    /* istanbul ignore next */
    []
  ));
  isImageBroken = signal(false, ...ngDevMode ? [{ debugName: "isImageBroken" }] : (
    /* istanbul ignore next */
    []
  ));
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
  isEnrolled = signal(false, ...ngDevMode ? [{ debugName: "isEnrolled" }] : (
    /* istanbul ignore next */
    []
  ));
  isCheckingEnrollment = signal(false, ...ngDevMode ? [{ debugName: "isCheckingEnrollment" }] : (
    /* istanbul ignore next */
    []
  ));
  // Rating signals
  averageRating = signal(0, ...ngDevMode ? [{ debugName: "averageRating" }] : (
    /* istanbul ignore next */
    []
  ));
  totalRatings = signal(0, ...ngDevMode ? [{ debugName: "totalRatings" }] : (
    /* istanbul ignore next */
    []
  ));
  userRating = signal(0, ...ngDevMode ? [{ debugName: "userRating" }] : (
    /* istanbul ignore next */
    []
  ));
  userFeedback = signal("", ...ngDevMode ? [{ debugName: "userFeedback" }] : (
    /* istanbul ignore next */
    []
  ));
  isSubmittingRating = signal(false, ...ngDevMode ? [{ debugName: "isSubmittingRating" }] : (
    /* istanbul ignore next */
    []
  ));
  showRatingForm = signal(false, ...ngDevMode ? [{ debugName: "showRatingForm" }] : (
    /* istanbul ignore next */
    []
  ));
  ratingMessage = signal("", ...ngDevMode ? [{ debugName: "ratingMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  isWishlisted = signal(false, ...ngDevMode ? [{ debugName: "isWishlisted" }] : (
    /* istanbul ignore next */
    []
  ));
  isTogglingWishlist = signal(false, ...ngDevMode ? [{ debugName: "isTogglingWishlist" }] : (
    /* istanbul ignore next */
    []
  ));
  lang = inject(LanguageService);
  shortDescriptionLimit = 280;
  imageAvailable = computed(() => {
    const currentCourse = this.course();
    return Boolean(currentCourse?.thumbnailUrl) && !this.isImageBroken();
  }, ...ngDevMode ? [{ debugName: "imageAvailable" }] : (
    /* istanbul ignore next */
    []
  ));
  displayDescription = computed(() => {
    const currentCourse = this.course();
    if (!currentCourse) {
      return "";
    }
    if (this.isDescriptionExpanded()) {
      return currentCourse.description;
    }
    return currentCourse.description.slice(0, this.shortDescriptionLimit);
  }, ...ngDevMode ? [{ debugName: "displayDescription" }] : (
    /* istanbul ignore next */
    []
  ));
  canToggleDescription = computed(() => {
    const currentCourse = this.course();
    if (!currentCourse) {
      return false;
    }
    return currentCourse.description.length > this.shortDescriptionLimit;
  }, ...ngDevMode ? [{ debugName: "canToggleDescription" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.authService.isLoggedIn$.subscribe((v) => this.isLoggedIn.set(v));
    this.authService.currentUser$.subscribe((u) => {
      if (u && u.fullName) {
        this.userName.set(u.fullName);
      }
      this.userRole.set(typeof u?.role === "number" ? u.role : null);
    });
    const user = this.authService.getCurrentUser();
    if (user) {
      this.userName.set(user.fullName || user.email);
      this.userRole.set(typeof user.role === "number" ? user.role : null);
      this.isLoggedIn.set(this.authService.isLoggedIn());
    }
    void this.loadCourseDetails();
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
  toggleDescription() {
    this.isDescriptionExpanded.update((expanded) => !expanded);
  }
  onImageError() {
    this.isImageBroken.set(true);
  }
  formatPrice(price) {
    if (price <= 0) {
      return "Free";
    }
    return `\u09F3${price}`;
  }
  formatDuration(totalMinutes) {
    if (totalMinutes <= 0) {
      return "N/A";
    }
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if (hours === 0) {
      return `${minutes} min`;
    }
    if (minutes === 0) {
      return `${hours} hr`;
    }
    return `${hours} hr ${minutes} min`;
  }
  getInstructorInitial(name) {
    return name.trim().charAt(0).toUpperCase() || "I";
  }
  async loadCourseDetails() {
    this.isLoggedIn.set(this.authService.isLoggedIn());
    const courseId = this.route?.snapshot.paramMap.get("id") ?? this.route?.snapshot.queryParamMap.get("id");
    if (!courseId) {
      this.errorMessage.set("Course ID \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF\u0964 Home page \u09A5\u09C7\u0995\u09C7 \u0986\u09AC\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8\u0964");
      this.isLoading.set(false);
      return;
    }
    this.isLoading.set(true);
    this.errorMessage.set("");
    try {
      const response = await firstValueFrom(this.learningApi.getAllCourses());
      const responseWithAlternativeShape = response;
      const rawCourses = Array.isArray(response.data) ? response.data : Array.isArray(responseWithAlternativeShape.Data) ? responseWithAlternativeShape.Data : [];
      const matchedCourse = rawCourses.find((course) => course.id === courseId);
      if (!matchedCourse) {
        this.errorMessage.set("\u098F\u0987 course \u099F\u09BF \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF \u09AC\u09BE \u098F\u0996\u09A8 available \u09A8\u09BE\u0964");
        this.course.set(null);
        return;
      }
      this.course.set(this.mapCourseForView(matchedCourse));
      this.isImageBroken.set(false);
      const currentUserId = this.authService.getCurrentUser()?.id ?? "";
      if (currentUserId) {
        try {
          const wishRes = await firstValueFrom(this.learningApi.checkWishlist(courseId, currentUserId));
          this.isWishlisted.set(Boolean(wishRes?.data ?? wishRes?.Data));
        } catch {
          this.isWishlisted.set(false);
        }
      }
      await this.loadRatingSummary(courseId);
      if (this.isLoggedIn()) {
        await this.checkEnrollment(courseId);
        await this.loadUserRating(courseId);
      }
    } catch {
      this.errorMessage.set("Course details \u09B2\u09CB\u09A1 \u0995\u09B0\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF\u0964 \u098F\u0995\u099F\u09C1 \u09AA\u09B0\u09C7 \u0986\u09AC\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8\u0964");
      this.course.set(null);
    } finally {
      this.isLoading.set(false);
    }
  }
  mapCourseForView(course) {
    return {
      id: course.id,
      title: course.title,
      description: course.description,
      category: course.category,
      instructorName: course.instructorName,
      level: course.level,
      price: course.price,
      durationMinutes: course.durationMinutes,
      thumbnailUrl: this.learningApi.buildDownloadUrl(course.thumbnailPath),
      isPublished: course.isPublished,
      lessonCount: course.lessonCount ?? 0,
      createdAt: course.createdAt ?? null
    };
  }
  async checkEnrollment(courseId) {
    this.isCheckingEnrollment.set(true);
    try {
      const isEnrolled = await firstValueFrom(this.learningApi.checkMyEnrollment(courseId));
      this.isEnrolled.set(isEnrolled);
    } catch {
      this.isEnrolled.set(false);
    } finally {
      this.isCheckingEnrollment.set(false);
    }
  }
  setRating(stars) {
    this.userRating.set(stars);
  }
  async loadRatingSummary(courseId) {
    try {
      const res = await firstValueFrom(this.learningApi.getRatingSummary(courseId));
      const data = res?.data ?? res?.Data;
      if (data) {
        this.averageRating.set(parseFloat(data.averageRating) || 0);
        this.totalRatings.set(data.totalRatings || 0);
      }
    } catch (error) {
      console.error("Error loading rating summary:", error);
    }
  }
  async loadUserRating(courseId) {
    if (!this.isLoggedIn())
      return;
    const userId = this.authService.getCurrentUser()?.id ?? "";
    if (!userId)
      return;
    try {
      const res = await firstValueFrom(this.learningApi.getMyRatings(userId));
      const list = res?.data ?? res?.Data ?? [];
      const found = Array.isArray(list) ? list.find((item) => item?.courseId === courseId) : null;
      if (found) {
        this.userRating.set(found.rating ?? 0);
        this.userFeedback.set(found.feedback || "");
      } else {
        this.userRating.set(0);
        this.userFeedback.set("");
      }
    } catch {
    }
  }
  async submitRating(courseId) {
    if (!this.isEnrolled()) {
      this.ratingMessage.set("You must be enrolled to rate this course.");
      return;
    }
    if (this.userRating() === 0) {
      this.ratingMessage.set("Please select at least 1 star.");
      return;
    }
    const userId = this.authService.getCurrentUser()?.id ?? "";
    if (!userId) {
      this.ratingMessage.set("Please login to rate.");
      return;
    }
    this.isSubmittingRating.set(true);
    this.ratingMessage.set("");
    try {
      await firstValueFrom(this.learningApi.addOrUpdateRating(courseId, userId, this.userRating(), this.userFeedback()));
      this.ratingMessage.set("\u2705 Your rating has been saved successfully!");
      this.showRatingForm.set(false);
      await this.loadRatingSummary(courseId);
    } catch (error) {
      console.error("Error submitting rating:", error);
      this.ratingMessage.set("\u274C An error occurred while saving your rating.");
    } finally {
      this.isSubmittingRating.set(false);
    }
  }
  getStarArray(count = 5) {
    return Array.from({ length: count }, (_, i) => i + 1);
  }
  async toggleWishlist() {
    const currentCourse = this.course();
    const userId = this.authService.getCurrentUser()?.id ?? "";
    if (!currentCourse || !userId) {
      return;
    }
    this.isTogglingWishlist.set(true);
    try {
      const res = await firstValueFrom(this.learningApi.toggleWishlist(currentCourse.id, userId));
      const nextState = res?.data ?? res?.Data;
      this.isWishlisted.set(Boolean(nextState));
    } catch (error) {
      console.error("Error toggling wishlist:", error);
    } finally {
      this.isTogglingWishlist.set(false);
    }
  }
  static \u0275fac = function CourseDetails_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseDetails)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseDetails, selectors: [["app-course-details"]], decls: 17, vars: 2, consts: [[1, "course-details-page"], [1, "top-navbar", "top-navbar--teacher"], ["routerLink", "/homepage", 1, "brand"], ["src", "/Logo2.png", "alt", "Touch & Solve", 1, "brand-logo"], [1, "topbar-nav"], ["routerLink", "/homepage"], ["routerLink", "/courses"], [1, "topbar-actions"], ["type", "button", "routerLink", "/home-page", 1, "nav-button", "nav-button-ghost"], ["routerLink", "/courses", 1, "back-link"], ["aria-live", "polite", 1, "info-card", "loading-state"], ["aria-live", "assertive", 1, "info-card", "error-state"], [1, "course-layout"], ["routerLink", "/homepage", 1, "action-link"], [1, "course-main-card"], [1, "card-head"], ["type", "button", "aria-current", "page", 1, "tab-button", "tab-button-active"], [1, "card-body"], [1, "details-section"], [1, "instructor-list"], [1, "instructor-item"], ["aria-hidden", "true", 1, "instructor-avatar"], [1, "description-text"], ["type", "button", 1, "see-more-button"], [1, "info-note"], [1, "course-side-card"], [1, "course-image", 3, "src", "alt"], ["role", "img", "aria-label", "No image available", 1, "course-image-placeholder"], [1, "rating-section"], [1, "rating-summary"], [1, "rating-stars"], [1, "rating-count"], [1, "price-wrap"], [1, "current-price"], ["type", "button", "disabled", "", 1, "coupon-button"], ["type", "button", 1, "coupon-button"], ["routerLink", "/login", 1, "enroll-button", "enroll-link"], ["type", "button", 1, "wishlist-button", 3, "click", "disabled"], ["aria-label", "Course meta information", 1, "course-meta"], ["type", "button", 1, "see-more-button", 3, "click"], [1, "course-image", 3, "error", "src", "alt"], ["type", "button", 1, "coupon-button", 3, "click"], [1, "rating-form"], [1, "stars-input"], ["type", "button", 1, "star-btn", 3, "active"], ["placeholder", "Share your feedback (optional)", "rows", "3", 1, "feedback-input", 3, "input", "value"], [1, "rating-message"], ["type", "button", 1, "submit-btn", 3, "click", "disabled"], ["type", "button", 1, "star-btn", 3, "click"], ["type", "button", "disabled", "", 1, "enroll-button", "enroll-button-muted"], [1, "enroll-button", "enroll-button-success", "enroll-link", 3, "routerLink"], [1, "enroll-button", "enroll-link", 3, "routerLink", "queryParams"]], template: function CourseDetails_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "nav", 1)(2, "a", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "a", 5);
      \u0275\u0275text(6, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 6);
      \u0275\u0275text(8, "Courses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "button", 8);
      \u0275\u0275text(11, "\u2190 Back to Site");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "a", 9);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(14, CourseDetails_Conditional_14_Template, 5, 2, "section", 10)(15, CourseDetails_Conditional_15_Template, 7, 3, "section", 11)(16, CourseDetails_Conditional_16_Template, 75, 34, "div", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(ctx.lang.t().cdBack);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 14 : ctx.errorMessage() ? 15 : (tmp_1_0 = ctx.course()) ? 16 : -1, tmp_1_0);
    }
  }, dependencies: [RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 14px;\n  margin-bottom: 20px;\n  border-radius: var(--r-lg);\n  border: 1px solid var(--c-border);\n  background: rgba(255, 255, 255, 0.94);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  box-shadow: var(--sh-sm);\n  position: sticky;\n  top: 12px;\n  z-index: 40;\n}\n.brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  height: 34px;\n  width: auto;\n  max-width: 140px;\n  object-fit: contain;\n}\n.topbar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-left: auto;\n}\n.topbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 999px;\n  text-decoration: none;\n  font-size: 0.84rem;\n  font-weight: 500;\n  color: var(--c-text-2);\n  transition: background 0.18s, color 0.18s;\n}\n.topbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: var(--c-blue-lt);\n  color: var(--c-blue);\n}\n.topbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--c-blue),\n      #0ea5e9);\n  color: white;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--c-text);\n}\n.nav-button[_ngcontent-%COMP%] {\n  min-height: 34px;\n  padding: 0 14px;\n  border-radius: 999px;\n  font-size: 0.84rem;\n}\n.nav-button-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: var(--c-border);\n  color: var(--c-text-2);\n}\n.nav-button-ghost[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-blue);\n  color: var(--c-blue);\n  background: var(--c-blue-lt);\n}\n.top-navbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 18px;\n  margin: 12px 12px 0 12px;\n  border-radius: 28px;\n  border: 1px solid rgba(37, 99, 235, 0.1);\n  background: white;\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  box-shadow: 0 2px 24px rgba(37, 99, 235, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04);\n  position: sticky;\n  top: 12px;\n  z-index: 50;\n}\n.top-navbar--teacher[_ngcontent-%COMP%] {\n  width: calc(100% - 24px);\n}\n.top-navbar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.top-navbar[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  height: 36px;\n  width: auto;\n  max-width: 160px;\n  object-fit: contain;\n}\n.top-navbar[_ngcontent-%COMP%]   .topbar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-left: auto;\n}\n.top-navbar[_ngcontent-%COMP%]   .topbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border-radius: 999px;\n  text-decoration: none;\n  font-size: 0.87rem;\n  font-weight: 500;\n  color: rgba(17, 24, 39, 0.65);\n  transition: background 0.2s ease, color 0.2s ease;\n}\n.top-navbar[_ngcontent-%COMP%]   .topbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.07);\n  color: var(--c-blue);\n}\n.top-navbar[_ngcontent-%COMP%]   .topbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.top-navbar[_ngcontent-%COMP%]   .nav-button[_ngcontent-%COMP%] {\n  min-height: 36px;\n  padding: 0 16px;\n  border-radius: 999px;\n  font-size: 0.87rem;\n  font-weight: 600;\n}\n.top-navbar[_ngcontent-%COMP%]   .nav-button-ghost[_ngcontent-%COMP%] {\n  border-color: rgba(17, 24, 39, 0.1);\n  color: rgba(17, 24, 39, 0.65);\n  background: transparent;\n}\n.top-navbar[_ngcontent-%COMP%]   .nav-button-ghost[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-blue);\n  color: var(--c-blue);\n  background: rgba(37, 99, 235, 0.07);\n  transform: translateY(-1px);\n}\n.course-details-page[_ngcontent-%COMP%] {\n  width: 100vw;\n  margin-left: calc(50% - 50vw);\n  min-height: 100vh;\n  padding: 2rem 1.5rem 2.5rem;\n  background:\n    radial-gradient(\n      circle at 5% 10%,\n      rgba(59, 130, 246, 0.14),\n      transparent 30%),\n    radial-gradient(\n      circle at 92% 12%,\n      rgba(14, 165, 233, 0.14),\n      transparent 28%),\n    #f7f8fc;\n  color: #1f2937;\n}\n.lang-toggle-btn[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 15px;\n  right: 30px;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border: 1.5px solid #2563eb;\n  border-radius: 999px;\n  background: transparent;\n  color: #2563eb;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background 0.18s,\n    color 0.18s,\n    transform 0.15s;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.lang-toggle-btn[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  color: #fff;\n  transform: scale(1.04);\n}\n.lang-toggle-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.lang-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  line-height: 1;\n}\n.lang-label[_ngcontent-%COMP%] {\n  letter-spacing: 0.02em;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-bottom: 1.25rem;\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 700;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.course-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 2.1fr) minmax(260px, 0.9fr);\n  gap: 1.6rem;\n  align-items: start;\n}\n.course-main-card[_ngcontent-%COMP%], \n.course-side-card[_ngcontent-%COMP%], \n.info-card[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  background: #ffffff;\n  border: 1px solid rgba(37, 99, 235, 0.12);\n  box-shadow: 0 10px 28px rgba(37, 99, 235, 0.08);\n}\n.card-head[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dbe3f3;\n}\n.tab-button[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  background: #f1f5f9;\n  color: #2563eb;\n  font-weight: 700;\n  padding: 1rem;\n}\n.tab-button-active[_ngcontent-%COMP%] {\n  box-shadow: inset 0 -3px 0 #2563eb;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 1.7rem;\n}\n.card-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(1.3rem, 1rem + 1vw, 1.9rem);\n  color: #0f172a;\n}\n.details-section[_ngcontent-%COMP%] {\n  margin-top: 1.6rem;\n}\n.details-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.7rem;\n  font-size: 1.35rem;\n  color: #0f172a;\n}\n.instructor-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.85rem;\n}\n.instructor-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n}\n.instructor-avatar[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background: #dbeafe;\n  color: #1d4ed8;\n  font-weight: 800;\n}\n.instructor-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n}\n.description-text[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.75;\n  color: #334155;\n  white-space: pre-wrap;\n}\n.see-more-button[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  border: 0;\n  background: transparent;\n  color: #2563eb;\n  font-weight: 700;\n  cursor: pointer;\n  padding: 0;\n}\n.see-more-button[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.info-note[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  border: 1px solid #bfdbfe;\n  border-radius: 12px;\n  padding: 1rem;\n  background: #eff6ff;\n}\n.info-note[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1d4ed8;\n}\n.info-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.45rem 0 0;\n  line-height: 1.6;\n}\n.course-side-card[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.course-image[_ngcontent-%COMP%], \n.course-image-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 12px;\n  min-height: 210px;\n}\n.course-image[_ngcontent-%COMP%] {\n  display: block;\n  object-fit: cover;\n  border: 1px solid #dbeafe;\n}\n.course-image-placeholder[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  border: 1px dashed #93c5fd;\n  background:\n    linear-gradient(\n      135deg,\n      #eef2ff,\n      #eff6ff);\n}\n.course-image-placeholder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1d4ed8;\n  font-weight: 700;\n}\n.price-wrap[_ngcontent-%COMP%] {\n  margin-top: 0.95rem;\n  text-align: center;\n}\n.current-price[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #2563eb;\n  font-size: 2rem;\n  font-weight: 800;\n}\n.coupon-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0.9rem;\n  border: 1px solid #bfdbfe;\n  background: #ffffff;\n  color: #2563eb;\n  border-radius: 10px;\n  font-weight: 700;\n  padding: 0.8rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.coupon-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #eff6ff;\n  border-color: #2563eb;\n}\n.coupon-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.rating-section[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7,\n      #fde68a);\n  border-radius: 8px;\n  text-align: center;\n}\n.rating-summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.25rem;\n}\n.rating-stars[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #1f2937;\n}\n.rating-count[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #666;\n}\n.rating-form[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 1rem;\n  background: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.rating-form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  color: #1f2937;\n  font-size: 0.95rem;\n  text-align: center;\n}\n.stars-input[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.star-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 2px solid #d1d5db;\n  background: #ffffff;\n  color: #d1d5db;\n  font-size: 1.5rem;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.star-btn[_ngcontent-%COMP%]:hover {\n  border-color: #fbbf24;\n  color: #fbbf24;\n  transform: scale(1.1);\n}\n.star-btn.active[_ngcontent-%COMP%] {\n  background: #fbbf24;\n  color: #ffffff;\n  border-color: #fbbf24;\n}\n.feedback-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  padding: 0.6rem;\n  font-size: 0.9rem;\n  font-family: inherit;\n  resize: vertical;\n  margin-bottom: 0.8rem;\n}\n.feedback-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.rating-message[_ngcontent-%COMP%] {\n  margin: 0.6rem 0;\n  font-size: 0.85rem;\n  color: #047857;\n  font-weight: 500;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #0ea5e9);\n  color: #ffffff;\n  border-radius: 6px;\n  font-weight: 700;\n  padding: 0.7rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 16px rgba(37, 99, 235, 0.3);\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.enroll-button[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: 0.9rem;\n  border: 0;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #0ea5e9);\n  color: #ffffff;\n  font-weight: 800;\n  text-align: center;\n  text-decoration: none;\n  padding: 0.9rem;\n  cursor: pointer;\n}\n.enroll-button-muted[_ngcontent-%COMP%] {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.enroll-button-success[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #15803d,\n      #16a34a);\n  cursor: pointer;\n}\n.wishlist-button[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: 0.75rem;\n  border: 1px solid #86efac;\n  border-radius: 10px;\n  background: #ecfdf3;\n  color: #15803d;\n  font-weight: 700;\n  padding: 0.85rem;\n  cursor: pointer;\n  transition:\n    transform 0.18s ease,\n    background 0.18s ease,\n    color 0.18s ease,\n    border-color 0.18s ease,\n    box-shadow 0.18s ease;\n}\n.wishlist-button[_ngcontent-%COMP%]:hover {\n  background: #dcfce7;\n  border-color: #86efac;\n  transform: translateY(-1px);\n}\n.wishlist-button.wishlisted[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #16a34a,\n      #22c55e);\n  border-color: #15803d;\n  color: #ffffff;\n  box-shadow: 0 8px 18px rgba(22, 163, 74, 0.22);\n  animation: _ngcontent-%COMP%_wishlist-pop 0.35s ease;\n}\n.wishlist-button.wishlisted[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      90deg,\n      #15803d,\n      #16a34a);\n  border-color: #166534;\n  transform: translateY(-1px) scale(1.01);\n}\n.wishlist-button.is-toggling[_ngcontent-%COMP%] {\n  opacity: 0.92;\n  cursor: wait;\n  animation: _ngcontent-%COMP%_wishlist-pulse 0.8s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_wishlist-pop {\n  0% {\n    transform: scale(0.96);\n  }\n  60% {\n    transform: scale(1.03);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_wishlist-pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.25);\n  }\n  50% {\n    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);\n  }\n}\n.course-meta[_ngcontent-%COMP%] {\n  margin: 1rem 0 0;\n  padding: 0;\n  list-style: none;\n  border-top: 1px solid #e5e7eb;\n}\n.course-meta[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.8rem 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.course-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #475569;\n}\n.course-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  text-align: right;\n}\n.info-card[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.info-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0f172a;\n}\n.info-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.6rem 0 0;\n  color: #334155;\n}\n.action-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 0.8rem;\n  color: #2563eb;\n  font-weight: 700;\n}\n@media (max-width: 992px) {\n  .course-details-page[_ngcontent-%COMP%] {\n    padding: 1.2rem;\n  }\n  .course-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=course-details.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CourseDetails, [{
    type: Component,
    args: [{ selector: "app-course-details", imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="course-details-page">

	<nav class="top-navbar top-navbar--teacher">
	  <a class="brand" routerLink="/homepage">
		<img src="/Logo2.png" alt="Touch & Solve" class="brand-logo" />
	  </a>
	  <div class="topbar-nav">
		<a routerLink="/homepage">Home</a>
		<a routerLink="/courses">Courses</a>
	  </div>
	  <div class="topbar-actions">
		<button type="button" class="nav-button nav-button-ghost" routerLink="/home-page">\u2190 Back to Site</button>
	  </div>
	</nav>

	<a routerLink="/courses" class="back-link">{{ lang.t().cdBack }}</a>

	@if (isLoading()) {
		<section class="info-card loading-state" aria-live="polite">
			<h2>{{ lang.t().cdLoading }}</h2>
			<p>{{ lang.t().cdLoadingDesc }}</p>
		</section>
	} @else if (errorMessage()) {
		<section class="info-card error-state" aria-live="assertive">
			<h2>{{ lang.t().cdUnavailable }}</h2>
			<p>{{ errorMessage() }}</p>
			<a routerLink="/homepage" class="action-link">{{ lang.t().cdGoBack }}</a>
			
		</section>
	
	} @else if (course(); as selectedCourse) {
		<div class="course-layout">
			<section class="course-main-card">
				<header class="card-head">
					<button type="button" class="tab-button tab-button-active" aria-current="page">{{ lang.t().cdOverview }}</button>
						
				</header>
				<article class="card-body">
					<h1>{{ selectedCourse.title }}</h1>
					<section class="details-section">
						<h2>{{ lang.t().cdInstructor }}</h2>
						<div class="instructor-list">
							<article class="instructor-item">
								<div class="instructor-avatar" aria-hidden="true">{{ getInstructorInitial(selectedCourse.instructorName) }}</div>
								<p>{{ selectedCourse.instructorName }}</p>
							</article>
						</div>
					</section>
					<section class="details-section">
						<h2>{{ lang.t().cdDescription }}</h2>
						<p class="description-text">
							{{ displayDescription() }}@if (canToggleDescription() && !isDescriptionExpanded()) { ... }
						</p>
						@if (canToggleDescription()) {
							<button type="button" class="see-more-button" (click)="toggleDescription()">
								@if (isDescriptionExpanded()) { {{ lang.t().cdSeeLess }} } @else { {{ lang.t().cdSeeMore }} }
							</button>
						}
					</section>
					<section class="info-note">
						<h3>{{ lang.t().cdNote }}</h3>
						<p>{{ lang.t().cdNoteText }}</p>
					</section>
				</article>
			</section>

			<aside class="course-side-card">
				@if (imageAvailable()) {
					<img class="course-image" [src]="selectedCourse.thumbnailUrl" [alt]="selectedCourse.title + ' thumbnail'" (error)="onImageError()" />
				} @else {
					<div class="course-image-placeholder" role="img" aria-label="No image available"><span>No Image</span></div>
				}
				
				<!-- Rating Section -->
				<div class="rating-section">
					<div class="rating-summary">
						<div class="rating-stars">
							{{ averageRating().toFixed(1) }} \u2B50
						</div>
							<p class="rating-count">({{ totalRatings() }} ratings)</p>
					</div>
				</div>

				<div class="price-wrap">
					<p class="current-price">{{ formatPrice(selectedCourse.price) }}</p>
				</div>
				
				<!-- Rating Form Button -->
				@if (isLoggedIn() && isEnrolled()) {
					<button type="button" class="coupon-button" (click)="showRatingForm.set(!showRatingForm())">
						{{ showRatingForm() ? '\u2715 Close' : '\u2B50 Rate Course' }}
					</button>
					
					<!-- Rating Form -->
					@if (showRatingForm()) {
						<div class="rating-form">
							<h4>What do you think about this course?</h4>
							
							<div class="stars-input">
								@for (star of getStarArray(); track star) {
									<button 
										type="button" 
										class="star-btn" 
										[class.active]="star <= userRating()"
										(click)="setRating(star)"
										[attr.aria-label]="'Rate ' + star + ' stars'">
										\u2605
									</button>
								}
							</div>

							<textarea 
								class="feedback-input"
								placeholder="Share your feedback (optional)"
								[value]="userFeedback()"
								(input)="userFeedback.set($any($event.target).value)"
								rows="3">
							</textarea>

							@if (ratingMessage()) {
								<p class="rating-message">{{ ratingMessage() }}</p>
							}

							<button 
								type="button" 
								class="submit-btn"
								(click)="submitRating(selectedCourse.id)"
								[disabled]="isSubmittingRating()">
								{{ isSubmittingRating() ? 'Saving...' : 'Submit Rating' }}
							</button>
						</div>
					}
				} @else {
					<button type="button" class="coupon-button" disabled>
						{{ !isLoggedIn() ? 'Login to Rate' : 'Enroll to Rate' }}
					</button>
				}
				
				@if (!isLoggedIn() && !isEnrolled()) {
					<button type="button" class="coupon-button">{{ lang.t().cdCoupon }}</button>
				}
				@if (isLoggedIn()) {
					@if (isCheckingEnrollment()) {
						<button type="button" class="enroll-button enroll-button-muted" disabled>{{ lang.t().cdCheckingEnrollment }}</button>
					} @else if (isEnrolled()) {
						<a [routerLink]="['/enrolled-course', selectedCourse.id]" class="enroll-button enroll-button-success enroll-link">{{ lang.t().cdEnrolled }}</a>
					} @else {
						<a [routerLink]="['/payment']" [queryParams]="{ courseId: selectedCourse.id, courseTitle: selectedCourse.title, amount: selectedCourse.price }" class="enroll-button enroll-link">{{ lang.t().cdEnrollNow }}</a>
					}
				} @else {
					<a routerLink="/login" class="enroll-button enroll-link">{{ lang.t().cdLoginToEnroll }}</a>
				}
				<button
					type="button"
					class="wishlist-button"
					[class.wishlisted]="isWishlisted()"
					[class.is-toggling]="isTogglingWishlist()"
					[disabled]="isTogglingWishlist()"
					(click)="toggleWishlist()">
					@if (isWishlisted()) {
						{{ isTogglingWishlist() ? 'Updating...' : '\u2713 In Wishlist' }}
					} @else {
						{{ isTogglingWishlist() ? 'Adding...' : '\u2661 Add to Wishlist' }}
					}
				</button>
				<ul class="course-meta" aria-label="Course meta information">
					<li><span>{{ lang.t().cdCategory }}</span><strong>{{ selectedCourse.category }}</strong></li>
					<li><span>{{ lang.t().cdLevel }}</span><strong>{{ selectedCourse.level }}</strong></li>
					<li><span>{{ lang.t().cdLessonsCount }}</span><strong>{{ selectedCourse.lessonCount }}</strong></li>
					<li><span>{{ lang.t().cdDuration }}</span><strong>{{ formatDuration(selectedCourse.durationMinutes) }}</strong></li>
					<li><span>{{ lang.t().cdStatus }}</span><strong>{{ selectedCourse.isPublished ? lang.t().cdPublished : lang.t().cdDraft }}</strong></li>
				</ul>
			</aside>
		</div>
	}
</main>
`, styles: ["/* src/app/base/course-details/course-details.css */\n:host {\n  display: block;\n}\n.topbar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 14px;\n  margin-bottom: 20px;\n  border-radius: var(--r-lg);\n  border: 1px solid var(--c-border);\n  background: rgba(255, 255, 255, 0.94);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  box-shadow: var(--sh-sm);\n  position: sticky;\n  top: 12px;\n  z-index: 40;\n}\n.brand {\n  display: inline-flex;\n  align-items: center;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.brand-logo {\n  height: 34px;\n  width: auto;\n  max-width: 140px;\n  object-fit: contain;\n}\n.topbar-nav {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-left: auto;\n}\n.topbar-nav a {\n  padding: 6px 12px;\n  border-radius: 999px;\n  text-decoration: none;\n  font-size: 0.84rem;\n  font-weight: 500;\n  color: var(--c-text-2);\n  transition: background 0.18s, color 0.18s;\n}\n.topbar-nav a:hover {\n  background: var(--c-blue-lt);\n  color: var(--c-blue);\n}\n.topbar-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.user-avatar {\n  display: grid;\n  place-items: center;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--c-blue),\n      #0ea5e9);\n  color: white;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.user-name {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--c-text);\n}\n.nav-button {\n  min-height: 34px;\n  padding: 0 14px;\n  border-radius: 999px;\n  font-size: 0.84rem;\n}\n.nav-button-ghost {\n  background: transparent;\n  border-color: var(--c-border);\n  color: var(--c-text-2);\n}\n.nav-button-ghost:hover {\n  border-color: var(--c-blue);\n  color: var(--c-blue);\n  background: var(--c-blue-lt);\n}\n.top-navbar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 18px;\n  margin: 12px 12px 0 12px;\n  border-radius: 28px;\n  border: 1px solid rgba(37, 99, 235, 0.1);\n  background: white;\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  box-shadow: 0 2px 24px rgba(37, 99, 235, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04);\n  position: sticky;\n  top: 12px;\n  z-index: 50;\n}\n.top-navbar--teacher {\n  width: calc(100% - 24px);\n}\n.top-navbar .brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.top-navbar .brand-logo {\n  height: 36px;\n  width: auto;\n  max-width: 160px;\n  object-fit: contain;\n}\n.top-navbar .topbar-nav {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-left: auto;\n}\n.top-navbar .topbar-nav a {\n  padding: 7px 14px;\n  border-radius: 999px;\n  text-decoration: none;\n  font-size: 0.87rem;\n  font-weight: 500;\n  color: rgba(17, 24, 39, 0.65);\n  transition: background 0.2s ease, color 0.2s ease;\n}\n.top-navbar .topbar-nav a:hover {\n  background: rgba(37, 99, 235, 0.07);\n  color: var(--c-blue);\n}\n.top-navbar .topbar-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.top-navbar .nav-button {\n  min-height: 36px;\n  padding: 0 16px;\n  border-radius: 999px;\n  font-size: 0.87rem;\n  font-weight: 600;\n}\n.top-navbar .nav-button-ghost {\n  border-color: rgba(17, 24, 39, 0.1);\n  color: rgba(17, 24, 39, 0.65);\n  background: transparent;\n}\n.top-navbar .nav-button-ghost:hover {\n  border-color: var(--c-blue);\n  color: var(--c-blue);\n  background: rgba(37, 99, 235, 0.07);\n  transform: translateY(-1px);\n}\n.course-details-page {\n  width: 100vw;\n  margin-left: calc(50% - 50vw);\n  min-height: 100vh;\n  padding: 2rem 1.5rem 2.5rem;\n  background:\n    radial-gradient(\n      circle at 5% 10%,\n      rgba(59, 130, 246, 0.14),\n      transparent 30%),\n    radial-gradient(\n      circle at 92% 12%,\n      rgba(14, 165, 233, 0.14),\n      transparent 28%),\n    #f7f8fc;\n  color: #1f2937;\n}\n.lang-toggle-btn {\n  position: fixed;\n  top: 15px;\n  right: 30px;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border: 1.5px solid #2563eb;\n  border-radius: 999px;\n  background: transparent;\n  color: #2563eb;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background 0.18s,\n    color 0.18s,\n    transform 0.15s;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.lang-toggle-btn:hover {\n  background: #2563eb;\n  color: #fff;\n  transform: scale(1.04);\n}\n.lang-toggle-btn:active {\n  transform: scale(0.97);\n}\n.lang-icon {\n  font-size: 0.95rem;\n  line-height: 1;\n}\n.lang-label {\n  letter-spacing: 0.02em;\n}\n.back-link {\n  display: inline-flex;\n  margin-bottom: 1.25rem;\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 700;\n}\n.back-link:hover {\n  text-decoration: underline;\n}\n.course-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 2.1fr) minmax(260px, 0.9fr);\n  gap: 1.6rem;\n  align-items: start;\n}\n.course-main-card,\n.course-side-card,\n.info-card {\n  border-radius: 16px;\n  background: #ffffff;\n  border: 1px solid rgba(37, 99, 235, 0.12);\n  box-shadow: 0 10px 28px rgba(37, 99, 235, 0.08);\n}\n.card-head {\n  border-bottom: 1px solid #dbe3f3;\n}\n.tab-button {\n  width: 100%;\n  border: 0;\n  background: #f1f5f9;\n  color: #2563eb;\n  font-weight: 700;\n  padding: 1rem;\n}\n.tab-button-active {\n  box-shadow: inset 0 -3px 0 #2563eb;\n}\n.card-body {\n  padding: 1.7rem;\n}\n.card-body h1 {\n  margin: 0;\n  font-size: clamp(1.3rem, 1rem + 1vw, 1.9rem);\n  color: #0f172a;\n}\n.details-section {\n  margin-top: 1.6rem;\n}\n.details-section h2 {\n  margin: 0 0 0.7rem;\n  font-size: 1.35rem;\n  color: #0f172a;\n}\n.instructor-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.85rem;\n}\n.instructor-item {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n}\n.instructor-avatar {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background: #dbeafe;\n  color: #1d4ed8;\n  font-weight: 800;\n}\n.instructor-item p {\n  margin: 0;\n  font-weight: 600;\n}\n.description-text {\n  margin: 0;\n  line-height: 1.75;\n  color: #334155;\n  white-space: pre-wrap;\n}\n.see-more-button {\n  margin-top: 0.75rem;\n  border: 0;\n  background: transparent;\n  color: #2563eb;\n  font-weight: 700;\n  cursor: pointer;\n  padding: 0;\n}\n.see-more-button:hover {\n  text-decoration: underline;\n}\n.info-note {\n  margin-top: 1.5rem;\n  border: 1px solid #bfdbfe;\n  border-radius: 12px;\n  padding: 1rem;\n  background: #eff6ff;\n}\n.info-note h3 {\n  margin: 0;\n  color: #1d4ed8;\n}\n.info-note p {\n  margin: 0.45rem 0 0;\n  line-height: 1.6;\n}\n.course-side-card {\n  padding: 1rem;\n}\n.course-image,\n.course-image-placeholder {\n  width: 100%;\n  border-radius: 12px;\n  min-height: 210px;\n}\n.course-image {\n  display: block;\n  object-fit: cover;\n  border: 1px solid #dbeafe;\n}\n.course-image-placeholder {\n  display: grid;\n  place-items: center;\n  border: 1px dashed #93c5fd;\n  background:\n    linear-gradient(\n      135deg,\n      #eef2ff,\n      #eff6ff);\n}\n.course-image-placeholder span {\n  color: #1d4ed8;\n  font-weight: 700;\n}\n.price-wrap {\n  margin-top: 0.95rem;\n  text-align: center;\n}\n.current-price {\n  margin: 0;\n  color: #2563eb;\n  font-size: 2rem;\n  font-weight: 800;\n}\n.coupon-button {\n  width: 100%;\n  margin-top: 0.9rem;\n  border: 1px solid #bfdbfe;\n  background: #ffffff;\n  color: #2563eb;\n  border-radius: 10px;\n  font-weight: 700;\n  padding: 0.8rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.coupon-button:hover:not(:disabled) {\n  background: #eff6ff;\n  border-color: #2563eb;\n}\n.coupon-button:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.rating-section {\n  margin-top: 1rem;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7,\n      #fde68a);\n  border-radius: 8px;\n  text-align: center;\n}\n.rating-summary {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.25rem;\n}\n.rating-stars {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #1f2937;\n}\n.rating-count {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #666;\n}\n.rating-form {\n  margin-top: 1rem;\n  padding: 1rem;\n  background: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.rating-form h4 {\n  margin: 0 0 1rem;\n  color: #1f2937;\n  font-size: 0.95rem;\n  text-align: center;\n}\n.stars-input {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.star-btn {\n  width: 40px;\n  height: 40px;\n  border: 2px solid #d1d5db;\n  background: #ffffff;\n  color: #d1d5db;\n  font-size: 1.5rem;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.star-btn:hover {\n  border-color: #fbbf24;\n  color: #fbbf24;\n  transform: scale(1.1);\n}\n.star-btn.active {\n  background: #fbbf24;\n  color: #ffffff;\n  border-color: #fbbf24;\n}\n.feedback-input {\n  width: 100%;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  padding: 0.6rem;\n  font-size: 0.9rem;\n  font-family: inherit;\n  resize: vertical;\n  margin-bottom: 0.8rem;\n}\n.feedback-input:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.rating-message {\n  margin: 0.6rem 0;\n  font-size: 0.85rem;\n  color: #047857;\n  font-weight: 500;\n}\n.submit-btn {\n  width: 100%;\n  border: 0;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #0ea5e9);\n  color: #ffffff;\n  border-radius: 6px;\n  font-weight: 700;\n  padding: 0.7rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.submit-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 16px rgba(37, 99, 235, 0.3);\n}\n.submit-btn:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.enroll-button {\n  display: block;\n  width: 100%;\n  margin-top: 0.9rem;\n  border: 0;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #0ea5e9);\n  color: #ffffff;\n  font-weight: 800;\n  text-align: center;\n  text-decoration: none;\n  padding: 0.9rem;\n  cursor: pointer;\n}\n.enroll-button-muted {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.enroll-button-success {\n  background:\n    linear-gradient(\n      90deg,\n      #15803d,\n      #16a34a);\n  cursor: pointer;\n}\n.wishlist-button {\n  display: block;\n  width: 100%;\n  margin-top: 0.75rem;\n  border: 1px solid #86efac;\n  border-radius: 10px;\n  background: #ecfdf3;\n  color: #15803d;\n  font-weight: 700;\n  padding: 0.85rem;\n  cursor: pointer;\n  transition:\n    transform 0.18s ease,\n    background 0.18s ease,\n    color 0.18s ease,\n    border-color 0.18s ease,\n    box-shadow 0.18s ease;\n}\n.wishlist-button:hover {\n  background: #dcfce7;\n  border-color: #86efac;\n  transform: translateY(-1px);\n}\n.wishlist-button.wishlisted {\n  background:\n    linear-gradient(\n      90deg,\n      #16a34a,\n      #22c55e);\n  border-color: #15803d;\n  color: #ffffff;\n  box-shadow: 0 8px 18px rgba(22, 163, 74, 0.22);\n  animation: wishlist-pop 0.35s ease;\n}\n.wishlist-button.wishlisted:hover {\n  background:\n    linear-gradient(\n      90deg,\n      #15803d,\n      #16a34a);\n  border-color: #166534;\n  transform: translateY(-1px) scale(1.01);\n}\n.wishlist-button.is-toggling {\n  opacity: 0.92;\n  cursor: wait;\n  animation: wishlist-pulse 0.8s ease-in-out infinite;\n}\n@keyframes wishlist-pop {\n  0% {\n    transform: scale(0.96);\n  }\n  60% {\n    transform: scale(1.03);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes wishlist-pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.25);\n  }\n  50% {\n    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);\n  }\n}\n.course-meta {\n  margin: 1rem 0 0;\n  padding: 0;\n  list-style: none;\n  border-top: 1px solid #e5e7eb;\n}\n.course-meta li {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.8rem 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.course-meta span {\n  color: #475569;\n}\n.course-meta strong {\n  color: #0f172a;\n  text-align: right;\n}\n.info-card {\n  padding: 1.5rem;\n}\n.info-card h2 {\n  margin: 0;\n  color: #0f172a;\n}\n.info-card p {\n  margin: 0.6rem 0 0;\n  color: #334155;\n}\n.action-link {\n  display: inline-block;\n  margin-top: 0.8rem;\n  color: #2563eb;\n  font-weight: 700;\n}\n@media (max-width: 992px) {\n  .course-details-page {\n    padding: 1.2rem;\n  }\n  .course-layout {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=course-details.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseDetails, { className: "CourseDetails", filePath: "app/base/course-details/course-details.ts", lineNumber: 36 });
})();

// src/app/shared/payment/payment.ts
function Payment_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function Payment_For_20_Template_button_click_0_listener() {
      const method_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.chooseMethod(method_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const method_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.selectedMethod() === method_r2 ? "method-btn method-btn-active" : "method-btn");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", method_r2, " ");
  }
}
function Payment_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.successMessage());
  }
}
function Payment_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Valid name required");
    \u0275\u0275elementEnd();
  }
}
function Payment_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Valid email required");
    \u0275\u0275elementEnd();
  }
}
function Payment_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Valid Bangladeshi phone number required");
    \u0275\u0275elementEnd();
  }
}
function Payment_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Card number must be 16 digits");
    \u0275\u0275elementEnd();
  }
}
function Payment_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Format should be MM/YY");
    \u0275\u0275elementEnd();
  }
}
function Payment_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "CVV should be 3 or 4 digits");
    \u0275\u0275elementEnd();
  }
}
function Payment_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 21);
    \u0275\u0275text(1, "Please accept demo payment terms.");
    \u0275\u0275elementEnd();
  }
}
function Payment_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Processing... ");
  }
}
function Payment_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" Pay ", ctx_r2.totalPayableText(), " ");
  }
}
var Payment = class _Payment {
  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);
  router = inject(Router);
  learningApi = inject(LearningApiService);
  isProcessing = signal(false, ...ngDevMode ? [{ debugName: "isProcessing" }] : (
    /* istanbul ignore next */
    []
  ));
  successMessage = signal("", ...ngDevMode ? [{ debugName: "successMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedMethod = signal("Card", ...ngDevMode ? [{ debugName: "selectedMethod" }] : (
    /* istanbul ignore next */
    []
  ));
  courseTitle = signal("Course Enrollment", ...ngDevMode ? [{ debugName: "courseTitle" }] : (
    /* istanbul ignore next */
    []
  ));
  payableAmount = signal(0, ...ngDevMode ? [{ debugName: "payableAmount" }] : (
    /* istanbul ignore next */
    []
  ));
  courseId = signal("", ...ngDevMode ? [{ debugName: "courseId" }] : (
    /* istanbul ignore next */
    []
  ));
  methodOptions = ["Card", "Bkash", "Nagad"];
  paymentForm = this.fb.nonNullable.group({
    payerName: ["", [Validators.required, Validators.minLength(2)]],
    email: ["", [Validators.required, Validators.email]],
    phone: ["", [Validators.required, Validators.pattern("^01[0-9]{9}$")]],
    cardNumber: ["", [Validators.required, Validators.pattern("^[0-9]{16}$")]],
    expiry: ["", [Validators.required, Validators.pattern("^(0[1-9]|1[0-2])\\/[0-9]{2}$")]],
    cvv: ["", [Validators.required, Validators.pattern("^[0-9]{3,4}$")]],
    agree: [false, [Validators.requiredTrue]]
  });
  totalPayableText = computed(() => {
    const amount = this.payableAmount();
    if (amount <= 0) {
      return "Free";
    }
    return `\u09F3${amount}`;
  }, ...ngDevMode ? [{ debugName: "totalPayableText" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    const title = this.route.snapshot.queryParamMap.get("courseTitle")?.trim();
    const amountParam = this.route.snapshot.queryParamMap.get("amount");
    const parsedAmount = Number(amountParam);
    const selectedCourseId = this.route.snapshot.queryParamMap.get("courseId")?.trim();
    if (title) {
      this.courseTitle.set(title);
    }
    if (!Number.isNaN(parsedAmount) && parsedAmount >= 0) {
      this.payableAmount.set(parsedAmount);
    }
    if (selectedCourseId) {
      this.courseId.set(selectedCourseId);
    }
  }
  chooseMethod(method) {
    this.selectedMethod.set(method);
  }
  async submitPayment() {
    if (this.paymentForm.invalid) {
      this.paymentForm.markAllAsTouched();
      return;
    }
    if (!this.courseId()) {
      this.successMessage.set("Course ID \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF\u0964 \u0986\u09AC\u09BE\u09B0 course page \u09A5\u09C7\u0995\u09C7 \u0986\u09B8\u09C1\u09A8\u0964");
      return;
    }
    this.isProcessing.set(true);
    this.successMessage.set("");
    try {
      await new Promise((resolve) => {
        window.setTimeout(() => resolve(), 1200);
      });
      await firstValueFrom(this.learningApi.createEnrollment({ courseId: this.courseId() }));
      this.learningApi.markCourseAsEnrolledLocally(this.courseId());
      this.successMessage.set("Payment successful. You are now enrolled in this course.");
      this.paymentForm.reset({
        payerName: "",
        email: "",
        phone: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
        agree: false
      });
      window.setTimeout(() => {
        void this.router.navigate(["/course-details", this.courseId()]);
      }, 900);
    } catch (error) {
      if (error instanceof HttpErrorResponse && error.status === 409) {
        this.learningApi.markCourseAsEnrolledLocally(this.courseId());
        this.successMessage.set("You are already enrolled in this course.");
        window.setTimeout(() => {
          void this.router.navigate(["/course-details", this.courseId()]);
        }, 700);
        return;
      }
      if (error instanceof HttpErrorResponse && error.status >= 200 && error.status < 300) {
        this.learningApi.markCourseAsEnrolledLocally(this.courseId());
        this.successMessage.set("Payment successful. You are now enrolled in this course.");
        window.setTimeout(() => {
          void this.router.navigate(["/course-details", this.courseId()]);
        }, 900);
        return;
      }
      this.successMessage.set("Enrollment save \u0995\u09B0\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF\u0964 \u0986\u09AC\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8\u0964");
    } finally {
      this.isProcessing.set(false);
    }
  }
  static \u0275fac = function Payment_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Payment)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Payment, selectors: [["app-payment"]], decls: 65, vars: 13, consts: [[1, "payment-page"], ["routerLink", "/homepage", 1, "back-link"], [1, "payment-shell"], [1, "summary-card"], [1, "eyebrow"], [1, "summary-note"], [1, "amount-box"], ["role", "group", "aria-label", "Payment method", 1, "method-list"], ["type", "button", 3, "class"], [1, "form-card"], ["role", "status", "aria-live", "polite", 1, "success-message"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "field-grid"], ["type", "text", "formControlName", "payerName", "placeholder", "Your name"], ["type", "email", "formControlName", "email", "placeholder", "name@mail.com"], ["type", "tel", "formControlName", "phone", "placeholder", "01XXXXXXXXX"], ["type", "text", "formControlName", "cardNumber", "placeholder", "16 digit card number"], ["type", "text", "formControlName", "expiry", "placeholder", "08/28"], ["type", "password", "formControlName", "cvv", "placeholder", "3 or 4 digits"], [1, "terms"], ["type", "checkbox", "formControlName", "agree"], [1, "agree-error"], ["type", "submit", 1, "pay-button", 3, "disabled"], ["type", "button", 3, "click"]], template: function Payment_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "a", 1);
      \u0275\u0275text(2, "\u2190 Back to Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "section", 2)(4, "article", 3)(5, "p", 4);
      \u0275\u0275text(6, "Demo Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1");
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 5);
      \u0275\u0275text(10, "\u098F\u0987 page \u09B6\u09C1\u09A7\u09C1 demo \u098F\u09B0 \u099C\u09A8\u09CD\u09AF\u0964 \u098F\u0996\u09BE\u09A8\u09C7 payment flow \u09A6\u09C7\u0996\u09BE\u09A8\u09CB \u09B9\u09DF\u09C7\u099B\u09C7\u0964");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 6)(12, "span");
      \u0275\u0275text(13, "Payable Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "strong");
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "h2");
      \u0275\u0275text(17, "Select Method");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 7);
      \u0275\u0275repeaterCreate(19, Payment_For_20_Template, 2, 3, "button", 8, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "article", 9)(22, "h2");
      \u0275\u0275text(23, "Payment Information");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(24, Payment_Conditional_24_Template, 2, 1, "p", 10);
      \u0275\u0275elementStart(25, "form", 11);
      \u0275\u0275listener("ngSubmit", function Payment_Template_form_ngSubmit_25_listener() {
        return ctx.submitPayment();
      });
      \u0275\u0275elementStart(26, "div", 12)(27, "label")(28, "span");
      \u0275\u0275text(29, "Full Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "input", 13);
      \u0275\u0275conditionalCreate(31, Payment_Conditional_31_Template, 2, 0, "small");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "label")(33, "span");
      \u0275\u0275text(34, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "input", 14);
      \u0275\u0275conditionalCreate(36, Payment_Conditional_36_Template, 2, 0, "small");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "label")(38, "span");
      \u0275\u0275text(39, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(40, "input", 15);
      \u0275\u0275conditionalCreate(41, Payment_Conditional_41_Template, 2, 0, "small");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "label")(43, "span");
      \u0275\u0275text(44, "Card Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "input", 16);
      \u0275\u0275conditionalCreate(46, Payment_Conditional_46_Template, 2, 0, "small");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "label")(48, "span");
      \u0275\u0275text(49, "Expiry (MM/YY)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(50, "input", 17);
      \u0275\u0275conditionalCreate(51, Payment_Conditional_51_Template, 2, 0, "small");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "label")(53, "span");
      \u0275\u0275text(54, "CVV");
      \u0275\u0275elementEnd();
      \u0275\u0275element(55, "input", 18);
      \u0275\u0275conditionalCreate(56, Payment_Conditional_56_Template, 2, 0, "small");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "label", 19);
      \u0275\u0275element(58, "input", 20);
      \u0275\u0275elementStart(59, "span");
      \u0275\u0275text(60, "I understand this is a demo payment and no real transaction will be processed.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(61, Payment_Conditional_61_Template, 2, 0, "small", 21);
      \u0275\u0275elementStart(62, "button", 22);
      \u0275\u0275conditionalCreate(63, Payment_Conditional_63_Template, 1, 0)(64, Payment_Conditional_64_Template, 1, 1);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.courseTitle());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.totalPayableText());
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.methodOptions);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.successMessage() ? 24 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.paymentForm);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.paymentForm.controls.payerName.touched && ctx.paymentForm.controls.payerName.invalid ? 31 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.paymentForm.controls.email.touched && ctx.paymentForm.controls.email.invalid ? 36 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.paymentForm.controls.phone.touched && ctx.paymentForm.controls.phone.invalid ? 41 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.paymentForm.controls.cardNumber.touched && ctx.paymentForm.controls.cardNumber.invalid ? 46 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.paymentForm.controls.expiry.touched && ctx.paymentForm.controls.expiry.invalid ? 51 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.paymentForm.controls.cvv.touched && ctx.paymentForm.controls.cvv.invalid ? 56 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.paymentForm.controls.agree.touched && ctx.paymentForm.controls.agree.invalid ? 61 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isProcessing());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isProcessing() ? 63 : 64);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.payment-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 2rem;\n  background:\n    radial-gradient(\n      circle at 12% 16%,\n      rgba(56, 189, 248, 0.18),\n      transparent 38%),\n    radial-gradient(\n      circle at 85% 10%,\n      rgba(34, 197, 94, 0.16),\n      transparent 40%),\n    linear-gradient(\n      180deg,\n      #f6fbff,\n      #eff7ff);\n  color: #0f172a;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-bottom: 1rem;\n  color: #0f766e;\n  text-decoration: none;\n  font-weight: 700;\n}\n.payment-shell[_ngcontent-%COMP%] {\n  max-width: 1050px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: minmax(280px, 0.95fr) minmax(0, 1.35fr);\n  gap: 1rem;\n}\n.summary-card[_ngcontent-%COMP%], \n.form-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  border: 1px solid rgba(15, 118, 110, 0.14);\n  border-radius: 16px;\n  padding: 1.2rem;\n  box-shadow: 0 14px 30px rgba(14, 116, 144, 0.1);\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  color: #0f766e;\n  font-weight: 700;\n}\n.summary-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0.55rem 0;\n  font-size: clamp(1.3rem, 1rem + 1vw, 1.8rem);\n}\n.summary-note[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #475569;\n  line-height: 1.6;\n}\n.amount-box[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.9rem;\n  border-radius: 12px;\n  background: #ecfeff;\n  border: 1px solid #99f6e4;\n}\n.amount-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #0f766e;\n  font-size: 0.88rem;\n}\n.amount-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  color: #0f172a;\n}\n.summary-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.form-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 1rem 0 0.7rem;\n  font-size: 1.14rem;\n}\n.method-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.55rem;\n}\n.method-btn[_ngcontent-%COMP%] {\n  min-height: 42px;\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  border-radius: 10px;\n  font-weight: 700;\n  color: #334155;\n  cursor: pointer;\n}\n.method-btn-active[_ngcontent-%COMP%] {\n  border-color: #14b8a6;\n  background: #ccfbf1;\n  color: #115e59;\n}\n.success-message[_ngcontent-%COMP%] {\n  margin: 0 0 0.9rem;\n  padding: 0.7rem 0.8rem;\n  border-radius: 10px;\n  border: 1px solid #86efac;\n  background: #f0fdf4;\n  color: #166534;\n  font-weight: 600;\n}\nform[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.85rem;\n}\n.field-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.8rem;\n}\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.4rem;\n}\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #1e293b;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 44px;\n  border-radius: 10px;\n  border: 1px solid #cbd5e1;\n  padding: 0 0.8rem;\n  background: #ffffff;\n  color: #0f172a;\n}\nsmall[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 0.8rem;\n}\n.terms[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.6rem;\n}\n.terms[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 18px;\n  min-height: 18px;\n  margin-top: 0.15rem;\n}\n.terms[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.86rem;\n  color: #475569;\n  font-weight: 500;\n}\n.agree-error[_ngcontent-%COMP%] {\n  margin-top: -0.35rem;\n}\n.pay-button[_ngcontent-%COMP%] {\n  min-height: 46px;\n  border: 0;\n  border-radius: 11px;\n  background:\n    linear-gradient(\n      135deg,\n      #0f766e,\n      #0ea5e9);\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 800;\n  cursor: pointer;\n}\n.pay-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n@media (max-width: 900px) {\n  .payment-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .payment-shell[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .field-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=payment.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Payment, [{
    type: Component,
    args: [{ selector: "app-payment", imports: [ReactiveFormsModule, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="payment-page">
	<a routerLink="/homepage" class="back-link">&larr; Back to Home</a>

	<section class="payment-shell">
		<article class="summary-card">
			<p class="eyebrow">Demo Payment</p>
			<h1>{{ courseTitle() }}</h1>
			<p class="summary-note">\u098F\u0987 page \u09B6\u09C1\u09A7\u09C1 demo \u098F\u09B0 \u099C\u09A8\u09CD\u09AF\u0964 \u098F\u0996\u09BE\u09A8\u09C7 payment flow \u09A6\u09C7\u0996\u09BE\u09A8\u09CB \u09B9\u09DF\u09C7\u099B\u09C7\u0964</p>

			<div class="amount-box">
				<span>Payable Amount</span>
				<strong>{{ totalPayableText() }}</strong>
			</div>

			<h2>Select Method</h2>
			<div class="method-list" role="group" aria-label="Payment method">
				@for (method of methodOptions; track method) {
					<button
						type="button"
						[class]="selectedMethod() === method ? 'method-btn method-btn-active' : 'method-btn'"
						(click)="chooseMethod(method)"
					>
						{{ method }}
					</button>
				}
			</div>
		</article>

		<article class="form-card">
			<h2>Payment Information</h2>

			@if (successMessage()) {
				<p class="success-message" role="status" aria-live="polite">{{ successMessage() }}</p>
			}

			<form [formGroup]="paymentForm" (ngSubmit)="submitPayment()" novalidate>
				<div class="field-grid">
					<label>
						<span>Full Name</span>
						<input type="text" formControlName="payerName" placeholder="Your name" />
						@if (paymentForm.controls.payerName.touched && paymentForm.controls.payerName.invalid) {
							<small>Valid name required</small>
						}
					</label>

					<label>
						<span>Email</span>
						<input type="email" formControlName="email" placeholder="name@mail.com" />
						@if (paymentForm.controls.email.touched && paymentForm.controls.email.invalid) {
							<small>Valid email required</small>
						}
					</label>

					<label>
						<span>Phone</span>
						<input type="tel" formControlName="phone" placeholder="01XXXXXXXXX" />
						@if (paymentForm.controls.phone.touched && paymentForm.controls.phone.invalid) {
							<small>Valid Bangladeshi phone number required</small>
						}
					</label>

					<label>
						<span>Card Number</span>
						<input type="text" formControlName="cardNumber" placeholder="16 digit card number" />
						@if (paymentForm.controls.cardNumber.touched && paymentForm.controls.cardNumber.invalid) {
							<small>Card number must be 16 digits</small>
						}
					</label>

					<label>
						<span>Expiry (MM/YY)</span>
						<input type="text" formControlName="expiry" placeholder="08/28" />
						@if (paymentForm.controls.expiry.touched && paymentForm.controls.expiry.invalid) {
							<small>Format should be MM/YY</small>
						}
					</label>

					<label>
						<span>CVV</span>
						<input type="password" formControlName="cvv" placeholder="3 or 4 digits" />
						@if (paymentForm.controls.cvv.touched && paymentForm.controls.cvv.invalid) {
							<small>CVV should be 3 or 4 digits</small>
						}
					</label>
				</div>

				<label class="terms">
					<input type="checkbox" formControlName="agree" />
					<span>I understand this is a demo payment and no real transaction will be processed.</span>
				</label>
				@if (paymentForm.controls.agree.touched && paymentForm.controls.agree.invalid) {
					<small class="agree-error">Please accept demo payment terms.</small>
				}

				<button class="pay-button" type="submit" [disabled]="isProcessing()">
					@if (isProcessing()) {
						Processing...
					} @else {
						Pay {{ totalPayableText() }}
					}
				</button>
			</form>
		</article>
	</section>
</main>
`, styles: ["/* src/app/shared/payment/payment.css */\n:host {\n  display: block;\n}\n.payment-page {\n  min-height: 100vh;\n  padding: 2rem;\n  background:\n    radial-gradient(\n      circle at 12% 16%,\n      rgba(56, 189, 248, 0.18),\n      transparent 38%),\n    radial-gradient(\n      circle at 85% 10%,\n      rgba(34, 197, 94, 0.16),\n      transparent 40%),\n    linear-gradient(\n      180deg,\n      #f6fbff,\n      #eff7ff);\n  color: #0f172a;\n}\n.back-link {\n  display: inline-flex;\n  margin-bottom: 1rem;\n  color: #0f766e;\n  text-decoration: none;\n  font-weight: 700;\n}\n.payment-shell {\n  max-width: 1050px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: minmax(280px, 0.95fr) minmax(0, 1.35fr);\n  gap: 1rem;\n}\n.summary-card,\n.form-card {\n  background: rgba(255, 255, 255, 0.9);\n  border: 1px solid rgba(15, 118, 110, 0.14);\n  border-radius: 16px;\n  padding: 1.2rem;\n  box-shadow: 0 14px 30px rgba(14, 116, 144, 0.1);\n}\n.eyebrow {\n  margin: 0;\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  color: #0f766e;\n  font-weight: 700;\n}\n.summary-card h1 {\n  margin: 0.55rem 0;\n  font-size: clamp(1.3rem, 1rem + 1vw, 1.8rem);\n}\n.summary-note {\n  margin: 0;\n  color: #475569;\n  line-height: 1.6;\n}\n.amount-box {\n  margin-top: 1rem;\n  padding: 0.9rem;\n  border-radius: 12px;\n  background: #ecfeff;\n  border: 1px solid #99f6e4;\n}\n.amount-box span {\n  display: block;\n  color: #0f766e;\n  font-size: 0.88rem;\n}\n.amount-box strong {\n  font-size: 1.7rem;\n  color: #0f172a;\n}\n.summary-card h2,\n.form-card h2 {\n  margin: 1rem 0 0.7rem;\n  font-size: 1.14rem;\n}\n.method-list {\n  display: grid;\n  gap: 0.55rem;\n}\n.method-btn {\n  min-height: 42px;\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  border-radius: 10px;\n  font-weight: 700;\n  color: #334155;\n  cursor: pointer;\n}\n.method-btn-active {\n  border-color: #14b8a6;\n  background: #ccfbf1;\n  color: #115e59;\n}\n.success-message {\n  margin: 0 0 0.9rem;\n  padding: 0.7rem 0.8rem;\n  border-radius: 10px;\n  border: 1px solid #86efac;\n  background: #f0fdf4;\n  color: #166534;\n  font-weight: 600;\n}\nform {\n  display: grid;\n  gap: 0.85rem;\n}\n.field-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.8rem;\n}\nlabel {\n  display: grid;\n  gap: 0.4rem;\n}\nlabel span {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #1e293b;\n}\ninput {\n  width: 100%;\n  min-height: 44px;\n  border-radius: 10px;\n  border: 1px solid #cbd5e1;\n  padding: 0 0.8rem;\n  background: #ffffff;\n  color: #0f172a;\n}\nsmall {\n  color: #dc2626;\n  font-size: 0.8rem;\n}\n.terms {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.6rem;\n}\n.terms input {\n  width: 18px;\n  min-height: 18px;\n  margin-top: 0.15rem;\n}\n.terms span {\n  font-size: 0.86rem;\n  color: #475569;\n  font-weight: 500;\n}\n.agree-error {\n  margin-top: -0.35rem;\n}\n.pay-button {\n  min-height: 46px;\n  border: 0;\n  border-radius: 11px;\n  background:\n    linear-gradient(\n      135deg,\n      #0f766e,\n      #0ea5e9);\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 800;\n  cursor: pointer;\n}\n.pay-button:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n@media (max-width: 900px) {\n  .payment-page {\n    padding: 1rem;\n  }\n  .payment-shell {\n    grid-template-columns: 1fr;\n  }\n  .field-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=payment.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Payment, { className: "Payment", filePath: "app/shared/payment/payment.ts", lineNumber: 17 });
})();

// src/app/base/courses/courses.ts
var _c05 = (a0) => ["/course-details", a0];
var _c14 = () => ["/payment"];
var _forTrack03 = ($index, $item) => $item.id;
function Courses_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 15)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().coursesLoading);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().coursesLoadingDesc);
  }
}
function Courses_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 15)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().coursesNone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().coursesNoneDesc);
  }
}
function Courses_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 15)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().coursesNoMatch);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().coursesNoMatchDesc);
  }
}
function Courses_Conditional_26_For_2_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const course_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2B50 ", course_r3.averageRating == null ? null : course_r3.averageRating.toFixed(1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", course_r3.totalRatings, " ratings)");
  }
}
function Courses_Conditional_26_For_2_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c05, course_r3.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.lang.t().courseEnrolled);
  }
}
function Courses_Conditional_26_For_2_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c14))("queryParams", ctx_r0.buildPaymentQueryParams(course_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.lang.t().courseEnrollNow);
  }
}
function Courses_Conditional_26_For_2_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const course_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.wishlistToggleId() === course_r3.id ? "Updating..." : "\u2713 In Wishlist", " ");
  }
}
function Courses_Conditional_26_For_2_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const course_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.wishlistToggleId() === course_r3.id ? "Adding..." : "\u2661 Wishlist", " ");
  }
}
function Courses_Conditional_26_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 18)(1, "div", 19)(2, "img", 20);
    \u0275\u0275listener("error", function Courses_Conditional_26_For_2_Template_img_error_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onImageError($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 21)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 23);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ul", 24)(13, "li")(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "li")(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "li")(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "li")(26, "strong");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "li")(30, "strong");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(33, Courses_Conditional_26_For_2_Conditional_33_Template, 5, 2, "div", 25);
    \u0275\u0275elementStart(34, "div", 26)(35, "div", 27);
    \u0275\u0275conditionalCreate(36, Courses_Conditional_26_For_2_Conditional_36_Template, 2, 4, "a", 28)(37, Courses_Conditional_26_For_2_Conditional_37_Template, 2, 4, "a", 29);
    \u0275\u0275elementStart(38, "button", 30);
    \u0275\u0275listener("click", function Courses_Conditional_26_For_2_Template_button_click_38_listener() {
      const course_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleWishlist(course_r3));
    });
    \u0275\u0275conditionalCreate(39, Courses_Conditional_26_For_2_Conditional_39_Template, 1, 1)(40, Courses_Conditional_26_For_2_Conditional_40_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "a", 31);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const course_r3 = ctx.$implicit;
    const \u0275$index_71_r4 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap("--card-color:" + ctx_r0.getCardColor(\u0275$index_71_r4));
    \u0275\u0275advance();
    \u0275\u0275classMap("track-img " + ctx_r0.getImageClass(course_r3.level));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.getImageUrl(course_r3.thumbnailUrl), \u0275\u0275sanitizeUrl)("alt", course_r3.title + " thumbnail");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("course-badge " + ctx_r0.getLevelClass(course_r3.level));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", course_r3.level === "Beginner" ? ctx_r0.lang.t().levelBeginner : course_r3.level === "Intermediate" ? ctx_r0.lang.t().levelIntermediate : ctx_r0.lang.t().levelAdvanced, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r3.description);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(34, _c05, course_r3.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.lang.t().courseSeeMore);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().courseCategory);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", course_r3.category);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().courseInstructor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", course_r3.instructorName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().courseLessons);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", course_r3.lessonCount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().courseDuration);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", course_r3.durationMinutes, " ", ctx_r0.lang.t().courseDurationUnit);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().coursePrice);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatPrice(course_r3.price));
    \u0275\u0275advance();
    \u0275\u0275conditional(course_r3.totalRatings && course_r3.totalRatings > 0 ? 33 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(course_r3.isEnrolled ? 36 : 37);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("wishlisted", course_r3.isWishlisted)("is-toggling", ctx_r0.wishlistToggleId() === course_r3.id);
    \u0275\u0275property("disabled", ctx_r0.wishlistToggleId() === course_r3.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(course_r3.isWishlisted ? 39 : 40);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(36, _c05, course_r3.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.lang.t().courseStartLearning);
  }
}
function Courses_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 16);
    \u0275\u0275repeaterCreate(1, Courses_Conditional_26_For_2_Template, 43, 38, "article", 17, _forTrack03);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.filteredCourses());
  }
}
var Courses = class _Courses {
  authService = inject(AuthService);
  learningApi = inject(LearningApiService);
  lang = inject(LanguageService);
  isLoadingCourses = signal(false, ...ngDevMode ? [{ debugName: "isLoadingCourses" }] : (
    /* istanbul ignore next */
    []
  ));
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : (
    /* istanbul ignore next */
    []
  ));
  courses = signal([], ...ngDevMode ? [{ debugName: "courses" }] : (
    /* istanbul ignore next */
    []
  ));
  wishlistToggleId = signal(null, ...ngDevMode ? [{ debugName: "wishlistToggleId" }] : (
    /* istanbul ignore next */
    []
  ));
  hasCourses = computed(() => this.courses().length > 0, ...ngDevMode ? [{ debugName: "hasCourses" }] : (
    /* istanbul ignore next */
    []
  ));
  filteredCourses = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    if (!term) {
      return this.courses();
    }
    return this.courses().filter((course) => {
      const searchableText = [
        course.title,
        course.description,
        course.category,
        course.instructorName,
        course.level
      ].join(" ").toLowerCase();
      return searchableText.includes(term);
    });
  }, ...ngDevMode ? [{ debugName: "filteredCourses" }] : (
    /* istanbul ignore next */
    []
  ));
  getCardColor(index) {
    const colors = ["#ec4899", "#7c3aed", "#06b6d4", "#f97316", "#10b981", "#3b82f6", "#f59e0b", "#8b5cf6"];
    return colors[index % colors.length];
  }
  hasFilteredCourses = computed(() => this.filteredCourses().length > 0, ...ngDevMode ? [{ debugName: "hasFilteredCourses" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    void this.loadAllCourses();
  }
  formatPrice(price) {
    if (price <= 0) {
      return "Free";
    }
    return `\u09F3${price}`;
  }
  buildPaymentQueryParams(course) {
    return {
      courseId: course.id,
      courseTitle: course.title,
      amount: course.price
    };
  }
  async toggleWishlist(course) {
    const currentUser = this.authService.getCurrentUser();
    const userId = currentUser?.id != null ? String(currentUser.id) : "";
    if (!userId) {
      return;
    }
    this.wishlistToggleId.set(course.id);
    try {
      const response = await firstValueFrom(this.learningApi.toggleWishlist(course.id, userId));
      const nextState = response?.data ?? response?.Data;
      const updatedState = typeof nextState === "boolean" ? nextState : !course.isWishlisted;
      this.courses.update((items) => items.map((item) => item.id === course.id ? __spreadProps(__spreadValues({}, item), {
        isWishlisted: updatedState
      }) : item));
    } catch (error) {
      console.error("Error toggling wishlist:", error);
    } finally {
      this.wishlistToggleId.set(null);
    }
  }
  updateSearchTerm(term) {
    this.searchTerm.set(term);
  }
  getLevelClass(level) {
    if (level === "Advanced") {
      return "course-badge-adv";
    }
    if (level === "Intermediate") {
      return "course-badge-int";
    }
    return "course-badge-beg";
  }
  getCardToneClass(index) {
    const tones = ["course-card-tone-1", "course-card-tone-2", "course-card-tone-3", "course-card-tone-4"];
    return tones[index % tones.length];
  }
  getImageClass(level) {
    if (level === "Advanced") {
      return "track-img-adv";
    }
    if (level === "Intermediate") {
      return "track-img-int";
    }
    return "track-img-beg";
  }
  getImageUrl(thumbnailPath) {
    if (!thumbnailPath) {
      return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VlZWUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==";
    }
    return this.learningApi.buildDownloadUrl(thumbnailPath);
  }
  onImageError(event) {
    const img = event.target;
    img.src = this.getImageUrl(null);
  }
  async loadAllCourses() {
    this.isLoadingCourses.set(true);
    try {
      const response = await firstValueFrom(this.learningApi.getAllCourses());
      const responseWithAlternativeShape = response;
      const rawCourses = Array.isArray(response.data) ? response.data : Array.isArray(responseWithAlternativeShape.Data) ? responseWithAlternativeShape.Data : [];
      const mappedCourses = rawCourses.map((course) => this.mapCourseForView(course));
      let coursesWithEnrollment = await this.attachEnrollmentState(mappedCourses);
      coursesWithEnrollment = await this.attachWishlistState(coursesWithEnrollment);
      coursesWithEnrollment = await this.attachRatings(coursesWithEnrollment);
      this.courses.set(coursesWithEnrollment);
    } catch {
      this.courses.set([]);
    } finally {
      this.isLoadingCourses.set(false);
    }
  }
  mapCourseForView(dto) {
    return {
      id: dto.id,
      title: dto.title,
      description: dto.description,
      level: this.normalizeLevel(dto.level),
      category: dto.category,
      instructorName: dto.instructorName,
      lessonCount: dto.lessonCount ?? 0,
      durationMinutes: dto.durationMinutes,
      price: dto.price,
      isEnrolled: false,
      isWishlisted: false,
      thumbnailUrl: this.getImageUrl(dto.thumbnailPath)
    };
  }
  async attachEnrollmentState(courses) {
    if (!this.authService.isLoggedIn()) {
      return courses;
    }
    return Promise.all(courses.map(async (course) => {
      try {
        const isEnrolled = await firstValueFrom(this.learningApi.checkMyEnrollment(course.id));
        return __spreadProps(__spreadValues({}, course), {
          isEnrolled
        });
      } catch {
        return __spreadProps(__spreadValues({}, course), {
          isEnrolled: false
        });
      }
    }));
  }
  async attachWishlistState(courses) {
    if (!this.authService.isLoggedIn()) {
      return courses;
    }
    const userId = this.authService.getCurrentUser()?.id;
    if (userId == null) {
      return courses;
    }
    try {
      const response = await firstValueFrom(this.learningApi.getWishlist(String(userId)));
      const payload = response;
      const wishlistItems = payload?.data ?? payload?.Data ?? payload ?? [];
      const wishlistCourseIds = new Set(Array.isArray(wishlistItems) ? wishlistItems.map((item) => String(item?.courseId ?? item?.id ?? "")).filter((id) => id.length > 0) : []);
      return courses.map((course) => __spreadProps(__spreadValues({}, course), {
        isWishlisted: wishlistCourseIds.has(course.id)
      }));
    } catch {
      return courses;
    }
  }
  async attachRatings(courses) {
    return Promise.all(courses.map(async (course) => {
      try {
        const response = await firstValueFrom(this.learningApi.getRatingSummary(course.id));
        const data = response?.data ?? response?.Data;
        if (data) {
          return __spreadProps(__spreadValues({}, course), {
            averageRating: parseFloat(data.averageRating) || 0,
            totalRatings: data.totalRatings || 0
          });
        }
      } catch {
      }
      return course;
    }));
  }
  normalizeLevel(level) {
    if (level === "Intermediate" || level === "Advanced") {
      return level;
    }
    return "Beginner";
  }
  static \u0275fac = function Courses_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Courses)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Courses, selectors: [["app-courses"]], decls: 27, vars: 6, consts: [[1, "courses-page"], [1, "top-navbar"], ["routerLink", "/homepage", 1, "brand"], ["src", "/Logo2.png", "alt", "Touch & Solve", 1, "brand-logo"], [1, "topbar-nav"], ["routerLink", "/homepage"], ["routerLink", "/courses"], [1, "topbar-actions"], ["type", "button", 1, "lang-toggle-btn", 3, "click"], ["href", "/homepage", 1, "nav-button", "nav-button-ghost"], [1, "courses-header"], ["aria-label", "Search courses", 1, "courses-search"], [1, "search-field"], [1, "search-label"], ["type", "search", 1, "search-input", 3, "input", "placeholder", "value"], [1, "courses-empty-state"], ["aria-label", "All courses list", 1, "courses-grid"], [1, "course-card", 3, "style"], [1, "course-card"], ["aria-hidden", "true", 1, "track-img"], ["loading", "lazy", 1, "track-thumbnail", 3, "error", "src", "alt"], [1, "course-card-inner"], [1, "course-description"], [1, "see-more-button", 3, "routerLink"], [1, "course-points"], [1, "course-rating"], [1, "course-footer"], [1, "course-footer-actions"], [1, "enrolled-button", "enrolled-button-success", 3, "routerLink"], [1, "enrolled-button", "enrolled-button-primary", 3, "routerLink", "queryParams"], ["type", "button", 1, "enrolled-button", "wishlist-button", 3, "click", "disabled"], [1, "track-cta", 3, "routerLink"], [1, "rating-star"], [1, "rating-count"]], template: function Courses_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "nav", 1)(2, "a", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "a", 5);
      \u0275\u0275text(6, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 6);
      \u0275\u0275text(8, "Courses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "button", 8);
      \u0275\u0275listener("click", function Courses_Template_button_click_10_listener() {
        return ctx.lang.toggle();
      });
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "\u{1F310}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span");
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "a", 9);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(17, "header", 10);
      \u0275\u0275elementStart(18, "section", 11)(19, "label", 12)(20, "span", 13);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "input", 14);
      \u0275\u0275listener("input", function Courses_Template_input_input_22_listener($event) {
        return ctx.updateSearchTerm($event.target.value);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(23, Courses_Conditional_23_Template, 5, 2, "article", 15)(24, Courses_Conditional_24_Template, 5, 2, "article", 15)(25, Courses_Conditional_25_Template, 5, 2, "article", 15)(26, Courses_Conditional_26_Template, 3, 0, "section", 16);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate(ctx.lang.isBangla() ? "EN" : "\u09AC\u09BE\u0982");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.lang.t().coursesBackHome);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.lang.t().coursesSearchLabel);
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.lang.t().coursesSearchPlaceholder)("value", ctx.searchTerm());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoadingCourses() ? 23 : !ctx.hasCourses() ? 24 : !ctx.hasFilteredCourses() ? 25 : 26);
    }
  }, dependencies: [RouterLink], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&display=swap";\n\n\n.courses-page[_ngcontent-%COMP%] {\n  --c-bg: #f7f8fc;\n  --c-white: #ffffff;\n  --c-blue: #2563eb;\n  --c-blue-h: #1d4ed8;\n  --c-blue-lt: #eff6ff;\n  --c-indigo: #4f46e5;\n  --c-text: #111827;\n  --c-text-2: rgba(17,24,39,0.62);\n  --c-text-3: rgba(17,24,39,0.38);\n  --c-border: rgba(17,24,39,0.09);\n  --r-sm: 8px;\n  --r-md: 14px;\n  --r-lg: 20px;\n  --r-xl: 28px;\n  --font-d: "Bricolage Grotesque", sans-serif;\n  --font-b: "Inter", sans-serif;\n  --sh-sm: 0 1px 4px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04);\n  --sh-md: 0 4px 16px rgba(37,99,235,0.08), 0 1px 4px rgba(0,0,0,0.05);\n  --sh-lg: 0 12px 40px rgba(37,99,235,0.12), 0 2px 8px rgba(0,0,0,0.06);\n}\n*[_ngcontent-%COMP%], \n*[_ngcontent-%COMP%]::before, \n*[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n  margin: 0;\n}\n.courses-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 0 0 80px;\n  background:\n    radial-gradient(\n      circle at 5% 10%,\n      rgba(59, 130, 246, 0.10),\n      transparent 28%),\n    radial-gradient(\n      circle at 92% 8%,\n      rgba(79, 70, 229, 0.08),\n      transparent 26%),\n    var(--c-bg);\n  color: var(--c-text);\n  font-family: var(--font-b);\n  font-size: 15px;\n  line-height: 1.6;\n}\n.top-navbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 28px;\n  margin-bottom: 0;\n  border-radius: 0;\n  border: none;\n  border-bottom: 1px solid var(--c-border);\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  position: sticky;\n  top: 0;\n  z-index: 50;\n}\n.top-navbar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.top-navbar[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  height: 36px;\n  width: auto;\n  max-width: 150px;\n  object-fit: contain;\n}\n.top-navbar[_ngcontent-%COMP%]   .topbar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  margin-left: auto;\n}\n.top-navbar[_ngcontent-%COMP%]   .topbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border-radius: 999px;\n  text-decoration: none;\n  font-size: 0.87rem;\n  font-weight: 500;\n  color: var(--c-text-2);\n  transition: background 0.18s, color 0.18s;\n}\n.top-navbar[_ngcontent-%COMP%]   .topbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: var(--c-blue-lt);\n  color: var(--c-blue);\n}\n.top-navbar[_ngcontent-%COMP%]   .topbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.top-navbar[_ngcontent-%COMP%]   .nav-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 36px;\n  padding: 0 16px;\n  border-radius: 999px;\n  font-size: 0.87rem;\n  font-weight: 600;\n  text-decoration: none;\n  border: 1px solid transparent;\n  cursor: pointer;\n  transition: transform 0.18s, background 0.18s;\n  font-family: var(--font-b);\n}\n.top-navbar[_ngcontent-%COMP%]   .nav-button-ghost[_ngcontent-%COMP%] {\n  border-color: var(--c-border);\n  color: var(--c-text-2);\n  background: transparent;\n}\n.top-navbar[_ngcontent-%COMP%]   .nav-button-ghost[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-blue);\n  color: var(--c-blue);\n  background: var(--c-blue-lt);\n}\n.lang-toggle-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border: 1.5px solid var(--c-blue);\n  border-radius: 999px;\n  background: transparent;\n  color: var(--c-blue);\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: var(--font-b);\n  transition:\n    background 0.18s,\n    color 0.18s,\n    transform 0.15s;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.lang-toggle-btn[_ngcontent-%COMP%]:hover {\n  background: var(--c-blue);\n  color: #fff;\n  transform: scale(1.04);\n}\n.lang-toggle-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.courses-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  padding: 48px 28px 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #1e1b4b 0%,\n      #312e81 40%,\n      #1d4ed8 100%);\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 0;\n}\n.courses-header[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -60px;\n  right: -60px;\n  width: 280px;\n  height: 280px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.05);\n  pointer-events: none;\n}\n.courses-header[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -40px;\n  left: 20%;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.04);\n  pointer-events: none;\n}\n.courses-eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.18em;\n  color: rgba(165, 180, 252, 0.90);\n  font-weight: 700;\n}\n.courses-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: clamp(1.8rem, 3vw, 2.6rem);\n  font-family: var(--font-d);\n  font-weight: 800;\n  color: white;\n  letter-spacing: -0.03em;\n  line-height: 1.1;\n}\n.courses-subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  color: rgba(255, 255, 255, 0.65);\n  font-size: 1rem;\n  line-height: 1.7;\n  max-width: 48ch;\n}\n.back-home-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  text-decoration: none;\n  color: white;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  background: rgba(255, 255, 255, 0.10);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border-radius: 999px;\n  padding: 9px 18px;\n  font-weight: 600;\n  font-size: 0.87rem;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition: background 0.18s, border-color 0.18s;\n}\n.back-home-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.18);\n  border-color: rgba(255, 255, 255, 0.40);\n}\n.courses-search[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 20px 28px;\n  background: white;\n  border-bottom: 1px solid var(--c-border);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  position: sticky;\n  top: 57px;\n  z-index: 40;\n}\n.search-field[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n.search-label[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: var(--c-indigo);\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 46px;\n  padding: 0 16px;\n  border-radius: 10px;\n  border: 1.5px solid #e0e7ff;\n  background: #fafafa;\n  color: var(--c-text);\n  font-size: 0.95rem;\n  font-family: var(--font-b);\n  outline: none;\n  transition:\n    border-color 0.18s,\n    box-shadow 0.18s,\n    background 0.18s;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--c-text-3);\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--c-blue);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);\n  background: white;\n}\n.courses-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 20px;\n  padding: 28px 28px 0;\n}\n.courses-empty-state[_ngcontent-%COMP%] {\n  margin: 28px 28px 0;\n  border: 1px solid var(--c-border);\n  background: white;\n  border-radius: var(--r-lg);\n  padding: 36px;\n  text-align: center;\n  box-shadow: var(--sh-sm);\n}\n.courses-empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-family: var(--font-d);\n  margin-bottom: 8px;\n}\n.courses-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--c-text-2);\n}\n.course-card[_ngcontent-%COMP%] {\n  border-radius: var(--r-lg);\n  background: white;\n  padding: 0 0 18px 0;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.28s;\n  box-shadow: var(--sh-sm);\n  border: 1px solid rgba(17, 24, 39, 0.07);\n  position: relative;\n}\n.course-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--card-color, #4f46e5);\n  opacity: 0;\n  transition: opacity 0.25s;\n}\n.course-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--sh-lg);\n}\n.course-card[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.course-card-tone-1[_ngcontent-%COMP%], \n.course-card-tone-2[_ngcontent-%COMP%], \n.course-card-tone-3[_ngcontent-%COMP%], \n.course-card-tone-4[_ngcontent-%COMP%] {\n  background: white;\n}\n.track-img[_ngcontent-%COMP%] {\n  height: 190px;\n  width: 100%;\n  flex-shrink: 0;\n  overflow: hidden;\n  position: relative;\n  background: #e0e7ff;\n}\n.track-img[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      transparent 50%,\n      rgba(0, 0, 0, 0.08) 100%);\n  pointer-events: none;\n}\n.track-thumbnail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.course-card[_ngcontent-%COMP%]:hover   .track-thumbnail[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.track-img-beg[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e0e7ff,\n      #c7d2fe);\n}\n.track-img-int[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ede9fe,\n      #ddd6fe);\n}\n.track-img-adv[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d1fae5,\n      #a7f3d0);\n}\n.course-card-inner[_ngcontent-%COMP%] {\n  padding: 18px 20px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  flex: 1;\n}\n.course-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  width: fit-content;\n  padding: 4px 12px;\n  border-radius: 6px;\n  font-size: 0.68rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.course-badge-beg[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.course-badge-int[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.course-badge-adv[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.course-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 800;\n  font-family: var(--font-d);\n  color: var(--c-text);\n  line-height: 1.3;\n  letter-spacing: -0.02em;\n}\n.course-description[_ngcontent-%COMP%] {\n  color: var(--c-text-2);\n  font-size: 0.84rem;\n  line-height: 1.65;\n  line-clamp: 2;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n}\n.see-more-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  text-decoration: none;\n  color: var(--c-blue);\n  font-weight: 700;\n  font-size: 0.84rem;\n  transition: gap 0.18s, color 0.18s;\n  width: fit-content;\n}\n.see-more-button[_ngcontent-%COMP%]:hover {\n  gap: 8px;\n  color: var(--c-blue-h);\n}\n.course-points[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  padding: 12px 0 0;\n  border-top: 1px solid rgba(17, 24, 39, 0.06);\n  color: var(--c-text-2);\n  font-size: 0.80rem;\n  line-height: 1;\n  list-style: none;\n  display: grid;\n  gap: 7px;\n}\n.course-points[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0;\n}\n.course-points[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: var(--c-indigo);\n  flex-shrink: 0;\n}\n.course-points[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--c-text-3);\n  font-weight: 600;\n  margin-right: 2px;\n}\n.course-rating[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  padding: 10px 0;\n  border-top: 1px solid rgba(17, 24, 39, 0.06);\n  border-bottom: 1px solid rgba(17, 24, 39, 0.06);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.82rem;\n}\n.rating-star[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #f59e0b;\n}\n.rating-count[_ngcontent-%COMP%] {\n  color: var(--c-text-3);\n  font-size: 0.77rem;\n}\n.course-footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding: 14px 20px 0;\n  border-top: 1px solid rgba(17, 24, 39, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.course-footer-actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.enrolled-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  min-height: 36px;\n  padding: 0 16px;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 700;\n  border: none;\n  cursor: pointer;\n  font-family: var(--font-b);\n  transition:\n    transform 0.18s,\n    box-shadow 0.18s,\n    background 0.18s;\n}\n.enrolled-button-primary[_ngcontent-%COMP%] {\n  background: var(--c-blue);\n  color: white;\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);\n}\n.enrolled-button-primary[_ngcontent-%COMP%]:hover {\n  background: var(--c-blue-h);\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(37, 99, 235, 0.35);\n}\n.enrolled-button-success[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: var(--c-indigo);\n  border: 1px solid #ddd6fe;\n}\n.enrolled-button-success[_ngcontent-%COMP%]:hover {\n  background: #ddd6fe;\n  transform: translateY(-1px);\n}\n.wishlist-button[_ngcontent-%COMP%] {\n  background: #ecfdf3;\n  color: #15803d;\n  border: 1px solid #86efac;\n}\n.wishlist-button[_ngcontent-%COMP%]:hover {\n  background: #dcfce7;\n  transform: translateY(-1px);\n}\n.wishlist-button.wishlisted[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #16a34a,\n      #22c55e);\n  color: #ffffff;\n  border-color: #15803d;\n  box-shadow: 0 8px 18px rgba(22, 163, 74, 0.20);\n  animation: _ngcontent-%COMP%_wishlist-pop 0.35s ease;\n}\n.wishlist-button.wishlisted[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      90deg,\n      #15803d,\n      #16a34a);\n}\n.wishlist-button.is-toggling[_ngcontent-%COMP%] {\n  cursor: wait;\n  opacity: 0.9;\n  animation: _ngcontent-%COMP%_wishlist-pulse 0.8s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_wishlist-pop {\n  0% {\n    transform: scale(0.96);\n  }\n  60% {\n    transform: scale(1.03);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_wishlist-pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.24);\n  }\n  50% {\n    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);\n  }\n}\n.track-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--c-indigo);\n  font-size: 0.82rem;\n  font-weight: 700;\n  text-decoration: none;\n  transition: gap 0.18s, color 0.18s;\n}\n.track-cta[_ngcontent-%COMP%]:hover {\n  gap: 8px;\n  color: var(--c-blue-h);\n}\n@media (max-width: 1080px) {\n  .courses-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 720px) {\n  .courses-header[_ngcontent-%COMP%] {\n    padding: 32px 18px;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .courses-search[_ngcontent-%COMP%] {\n    padding: 16px 18px;\n    top: 53px;\n  }\n  .courses-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 20px 18px 0;\n    gap: 16px;\n  }\n  .courses-empty-state[_ngcontent-%COMP%] {\n    margin: 20px 18px 0;\n  }\n  .top-navbar[_ngcontent-%COMP%] {\n    padding: 10px 18px;\n  }\n}\n/*# sourceMappingURL=courses.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Courses, [{
    type: Component,
    args: [{ selector: "app-courses", imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="courses-page">
		<nav class="top-navbar">
  <a class="brand" routerLink="/homepage">
    <img src="/Logo2.png" alt="Touch & Solve" class="brand-logo" />
  </a>
  <div class="topbar-nav">
    <a routerLink="/homepage">Home</a>
    <a routerLink="/courses">Courses</a>
  </div>
  <div class="topbar-actions">
    <button type="button" class="lang-toggle-btn" (click)="lang.toggle()">
      <span>\u{1F310}</span>
      <span>{{ lang.isBangla() ? 'EN' : '\u09AC\u09BE\u0982' }}</span>
    </button>
    <a href="/homepage" class="nav-button nav-button-ghost">{{ lang.t().coursesBackHome }}</a>
  </div>
</nav>
	<header class="courses-header">
	
		
	</header>

	<section class="courses-search" aria-label="Search courses">
		<label class="search-field">
			<span class="search-label">{{ lang.t().coursesSearchLabel }}</span>
			<input
				type="search"
				class="search-input"
				[placeholder]="lang.t().coursesSearchPlaceholder"
				[value]="searchTerm()"
				(input)="updateSearchTerm($any($event.target).value)"
			/>
		</label>
	</section>

	@if (isLoadingCourses()) {
		<article class="courses-empty-state">
			<h3>{{ lang.t().coursesLoading }}</h3>
			<p>{{ lang.t().coursesLoadingDesc }}</p>
		</article>
	} @else if (!hasCourses()) {
		<article class="courses-empty-state">
			<h3>{{ lang.t().coursesNone }}</h3>
			<p>{{ lang.t().coursesNoneDesc }}</p>
		</article>
	} @else if (!hasFilteredCourses()) {
		<article class="courses-empty-state">
			<h3>{{ lang.t().coursesNoMatch }}</h3>
			<p>{{ lang.t().coursesNoMatchDesc }}</p>
		</article>
	} @else {
		<section class="courses-grid" aria-label="All courses list">
			@for (course of filteredCourses(); track course.id; let i = $index) {
				<article class="course-card" [style]="'--card-color:' + getCardColor(i)">
					<div class="track-img" [class]="'track-img ' + getImageClass(course.level)" aria-hidden="true">
						<img class="track-thumbnail" [src]="getImageUrl(course.thumbnailUrl)" [alt]="course.title + ' thumbnail'" loading="lazy" (error)="onImageError($event)" />
					</div>
					<div class="course-card-inner">
						<span [class]="'course-badge ' + getLevelClass(course.level)">
							{{ course.level === 'Beginner' ? lang.t().levelBeginner : course.level === 'Intermediate' ? lang.t().levelIntermediate : lang.t().levelAdvanced }}
						</span>
						<h3>{{ course.title }}</h3>
						<p class="course-description">{{ course.description }}</p>
						<a [routerLink]="['/course-details', course.id]" class="see-more-button">{{ lang.t().courseSeeMore }}</a>
						<ul class="course-points">
							<li><strong>{{ lang.t().courseCategory }}</strong> {{ course.category }}</li>
							<li><strong>{{ lang.t().courseInstructor }}</strong> {{ course.instructorName }}</li>
							<li><strong>{{ lang.t().courseLessons }}</strong> {{ course.lessonCount }}</li>
							<li><strong>{{ lang.t().courseDuration }}</strong> {{ course.durationMinutes }} {{ lang.t().courseDurationUnit }}</li>
							<li><strong>{{ lang.t().coursePrice }}</strong> {{ formatPrice(course.price) }}</li>
						</ul>
						
						<!-- Rating Display -->
						@if (course.totalRatings && course.totalRatings > 0) {
							<div class="course-rating">
								<span class="rating-star">\u2B50 {{ course.averageRating?.toFixed(1) }}</span>
								<span class="rating-count">({{ course.totalRatings }} ratings)</span>
							</div>
						}
						
						<div class="course-footer">
							<div class="course-footer-actions">
								@if (course.isEnrolled) {
									<a [routerLink]="['/course-details', course.id]" class="enrolled-button enrolled-button-success">{{ lang.t().courseEnrolled }}</a>
								} @else {
									<a [routerLink]="['/payment']" [queryParams]="buildPaymentQueryParams(course)" class="enrolled-button enrolled-button-primary">{{ lang.t().courseEnrollNow }}</a>
								}
								<button
									type="button"
									class="enrolled-button wishlist-button"
									[class.wishlisted]="course.isWishlisted"
									[class.is-toggling]="wishlistToggleId() === course.id"
									[disabled]="wishlistToggleId() === course.id"
									(click)="toggleWishlist(course)">
									@if (course.isWishlisted) {
										{{ wishlistToggleId() === course.id ? 'Updating...' : '\u2713 In Wishlist' }}
									} @else {
										{{ wishlistToggleId() === course.id ? 'Adding...' : '\u2661 Wishlist' }}
									}
								</button>
							</div>
							<a [routerLink]="['/course-details', course.id]" class="track-cta">{{ lang.t().courseStartLearning }}</a>
						</div>
					</div>
				</article>
			}
		</section>
	}
</main>
`, styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&display=swap";\n\n/* src/app/base/courses/courses.css */\n.courses-page {\n  --c-bg: #f7f8fc;\n  --c-white: #ffffff;\n  --c-blue: #2563eb;\n  --c-blue-h: #1d4ed8;\n  --c-blue-lt: #eff6ff;\n  --c-indigo: #4f46e5;\n  --c-text: #111827;\n  --c-text-2: rgba(17,24,39,0.62);\n  --c-text-3: rgba(17,24,39,0.38);\n  --c-border: rgba(17,24,39,0.09);\n  --r-sm: 8px;\n  --r-md: 14px;\n  --r-lg: 20px;\n  --r-xl: 28px;\n  --font-d: "Bricolage Grotesque", sans-serif;\n  --font-b: "Inter", sans-serif;\n  --sh-sm: 0 1px 4px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04);\n  --sh-md: 0 4px 16px rgba(37,99,235,0.08), 0 1px 4px rgba(0,0,0,0.05);\n  --sh-lg: 0 12px 40px rgba(37,99,235,0.12), 0 2px 8px rgba(0,0,0,0.06);\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n}\n.courses-page {\n  min-height: 100vh;\n  padding: 0 0 80px;\n  background:\n    radial-gradient(\n      circle at 5% 10%,\n      rgba(59, 130, 246, 0.10),\n      transparent 28%),\n    radial-gradient(\n      circle at 92% 8%,\n      rgba(79, 70, 229, 0.08),\n      transparent 26%),\n    var(--c-bg);\n  color: var(--c-text);\n  font-family: var(--font-b);\n  font-size: 15px;\n  line-height: 1.6;\n}\n.top-navbar {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 28px;\n  margin-bottom: 0;\n  border-radius: 0;\n  border: none;\n  border-bottom: 1px solid var(--c-border);\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  position: sticky;\n  top: 0;\n  z-index: 50;\n}\n.top-navbar .brand {\n  display: inline-flex;\n  align-items: center;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.top-navbar .brand-logo {\n  height: 36px;\n  width: auto;\n  max-width: 150px;\n  object-fit: contain;\n}\n.top-navbar .topbar-nav {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  margin-left: auto;\n}\n.top-navbar .topbar-nav a {\n  padding: 7px 14px;\n  border-radius: 999px;\n  text-decoration: none;\n  font-size: 0.87rem;\n  font-weight: 500;\n  color: var(--c-text-2);\n  transition: background 0.18s, color 0.18s;\n}\n.top-navbar .topbar-nav a:hover {\n  background: var(--c-blue-lt);\n  color: var(--c-blue);\n}\n.top-navbar .topbar-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.top-navbar .nav-button {\n  display: inline-flex;\n  align-items: center;\n  min-height: 36px;\n  padding: 0 16px;\n  border-radius: 999px;\n  font-size: 0.87rem;\n  font-weight: 600;\n  text-decoration: none;\n  border: 1px solid transparent;\n  cursor: pointer;\n  transition: transform 0.18s, background 0.18s;\n  font-family: var(--font-b);\n}\n.top-navbar .nav-button-ghost {\n  border-color: var(--c-border);\n  color: var(--c-text-2);\n  background: transparent;\n}\n.top-navbar .nav-button-ghost:hover {\n  border-color: var(--c-blue);\n  color: var(--c-blue);\n  background: var(--c-blue-lt);\n}\n.lang-toggle-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border: 1.5px solid var(--c-blue);\n  border-radius: 999px;\n  background: transparent;\n  color: var(--c-blue);\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: var(--font-b);\n  transition:\n    background 0.18s,\n    color 0.18s,\n    transform 0.15s;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.lang-toggle-btn:hover {\n  background: var(--c-blue);\n  color: #fff;\n  transform: scale(1.04);\n}\n.lang-toggle-btn:active {\n  transform: scale(0.97);\n}\n.courses-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  padding: 48px 28px 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #1e1b4b 0%,\n      #312e81 40%,\n      #1d4ed8 100%);\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 0;\n}\n.courses-header::before {\n  content: "";\n  position: absolute;\n  top: -60px;\n  right: -60px;\n  width: 280px;\n  height: 280px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.05);\n  pointer-events: none;\n}\n.courses-header::after {\n  content: "";\n  position: absolute;\n  bottom: -40px;\n  left: 20%;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.04);\n  pointer-events: none;\n}\n.courses-eyebrow {\n  margin: 0 0 10px;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.18em;\n  color: rgba(165, 180, 252, 0.90);\n  font-weight: 700;\n}\n.courses-header h1 {\n  margin: 0 0 10px;\n  font-size: clamp(1.8rem, 3vw, 2.6rem);\n  font-family: var(--font-d);\n  font-weight: 800;\n  color: white;\n  letter-spacing: -0.03em;\n  line-height: 1.1;\n}\n.courses-subtitle {\n  margin: 0;\n  color: rgba(255, 255, 255, 0.65);\n  font-size: 1rem;\n  line-height: 1.7;\n  max-width: 48ch;\n}\n.back-home-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  text-decoration: none;\n  color: white;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  background: rgba(255, 255, 255, 0.10);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border-radius: 999px;\n  padding: 9px 18px;\n  font-weight: 600;\n  font-size: 0.87rem;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition: background 0.18s, border-color 0.18s;\n}\n.back-home-link:hover {\n  background: rgba(255, 255, 255, 0.18);\n  border-color: rgba(255, 255, 255, 0.40);\n}\n.courses-search {\n  margin: 0;\n  padding: 20px 28px;\n  background: white;\n  border-bottom: 1px solid var(--c-border);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  position: sticky;\n  top: 57px;\n  z-index: 40;\n}\n.search-field {\n  display: grid;\n  gap: 8px;\n}\n.search-label {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: var(--c-indigo);\n}\n.search-input {\n  width: 100%;\n  min-height: 46px;\n  padding: 0 16px;\n  border-radius: 10px;\n  border: 1.5px solid #e0e7ff;\n  background: #fafafa;\n  color: var(--c-text);\n  font-size: 0.95rem;\n  font-family: var(--font-b);\n  outline: none;\n  transition:\n    border-color 0.18s,\n    box-shadow 0.18s,\n    background 0.18s;\n}\n.search-input::placeholder {\n  color: var(--c-text-3);\n}\n.search-input:focus {\n  border-color: var(--c-blue);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);\n  background: white;\n}\n.courses-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 20px;\n  padding: 28px 28px 0;\n}\n.courses-empty-state {\n  margin: 28px 28px 0;\n  border: 1px solid var(--c-border);\n  background: white;\n  border-radius: var(--r-lg);\n  padding: 36px;\n  text-align: center;\n  box-shadow: var(--sh-sm);\n}\n.courses-empty-state h3 {\n  font-size: 1.1rem;\n  font-family: var(--font-d);\n  margin-bottom: 8px;\n}\n.courses-empty-state p {\n  color: var(--c-text-2);\n}\n.course-card {\n  border-radius: var(--r-lg);\n  background: white;\n  padding: 0 0 18px 0;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.28s;\n  box-shadow: var(--sh-sm);\n  border: 1px solid rgba(17, 24, 39, 0.07);\n  position: relative;\n}\n.course-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--card-color, #4f46e5);\n  opacity: 0;\n  transition: opacity 0.25s;\n}\n.course-card:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--sh-lg);\n}\n.course-card:hover::before {\n  opacity: 1;\n}\n.course-card-tone-1,\n.course-card-tone-2,\n.course-card-tone-3,\n.course-card-tone-4 {\n  background: white;\n}\n.track-img {\n  height: 190px;\n  width: 100%;\n  flex-shrink: 0;\n  overflow: hidden;\n  position: relative;\n  background: #e0e7ff;\n}\n.track-img::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      transparent 50%,\n      rgba(0, 0, 0, 0.08) 100%);\n  pointer-events: none;\n}\n.track-thumbnail {\n  width: 100%;\n  height: 100%;\n  display: block;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.course-card:hover .track-thumbnail {\n  transform: scale(1.04);\n}\n.track-img-beg {\n  background:\n    linear-gradient(\n      135deg,\n      #e0e7ff,\n      #c7d2fe);\n}\n.track-img-int {\n  background:\n    linear-gradient(\n      135deg,\n      #ede9fe,\n      #ddd6fe);\n}\n.track-img-adv {\n  background:\n    linear-gradient(\n      135deg,\n      #d1fae5,\n      #a7f3d0);\n}\n.course-card-inner {\n  padding: 18px 20px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  flex: 1;\n}\n.course-badge {\n  display: inline-flex;\n  align-items: center;\n  width: fit-content;\n  padding: 4px 12px;\n  border-radius: 6px;\n  font-size: 0.68rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.course-badge-beg {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.course-badge-int {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.course-badge-adv {\n  background: #d1fae5;\n  color: #065f46;\n}\n.course-card h3 {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 800;\n  font-family: var(--font-d);\n  color: var(--c-text);\n  line-height: 1.3;\n  letter-spacing: -0.02em;\n}\n.course-description {\n  color: var(--c-text-2);\n  font-size: 0.84rem;\n  line-height: 1.65;\n  line-clamp: 2;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n}\n.see-more-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  text-decoration: none;\n  color: var(--c-blue);\n  font-weight: 700;\n  font-size: 0.84rem;\n  transition: gap 0.18s, color 0.18s;\n  width: fit-content;\n}\n.see-more-button:hover {\n  gap: 8px;\n  color: var(--c-blue-h);\n}\n.course-points {\n  margin: 4px 0 0;\n  padding: 12px 0 0;\n  border-top: 1px solid rgba(17, 24, 39, 0.06);\n  color: var(--c-text-2);\n  font-size: 0.80rem;\n  line-height: 1;\n  list-style: none;\n  display: grid;\n  gap: 7px;\n}\n.course-points li {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0;\n}\n.course-points li::before {\n  content: "";\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: var(--c-indigo);\n  flex-shrink: 0;\n}\n.course-points strong {\n  color: var(--c-text-3);\n  font-weight: 600;\n  margin-right: 2px;\n}\n.course-rating {\n  margin: 8px 0 0;\n  padding: 10px 0;\n  border-top: 1px solid rgba(17, 24, 39, 0.06);\n  border-bottom: 1px solid rgba(17, 24, 39, 0.06);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.82rem;\n}\n.rating-star {\n  font-weight: 700;\n  color: #f59e0b;\n}\n.rating-count {\n  color: var(--c-text-3);\n  font-size: 0.77rem;\n}\n.course-footer {\n  margin-top: auto;\n  padding: 14px 20px 0;\n  border-top: 1px solid rgba(17, 24, 39, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.course-footer-actions {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.enrolled-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  min-height: 36px;\n  padding: 0 16px;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 700;\n  border: none;\n  cursor: pointer;\n  font-family: var(--font-b);\n  transition:\n    transform 0.18s,\n    box-shadow 0.18s,\n    background 0.18s;\n}\n.enrolled-button-primary {\n  background: var(--c-blue);\n  color: white;\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);\n}\n.enrolled-button-primary:hover {\n  background: var(--c-blue-h);\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(37, 99, 235, 0.35);\n}\n.enrolled-button-success {\n  background: #ede9fe;\n  color: var(--c-indigo);\n  border: 1px solid #ddd6fe;\n}\n.enrolled-button-success:hover {\n  background: #ddd6fe;\n  transform: translateY(-1px);\n}\n.wishlist-button {\n  background: #ecfdf3;\n  color: #15803d;\n  border: 1px solid #86efac;\n}\n.wishlist-button:hover {\n  background: #dcfce7;\n  transform: translateY(-1px);\n}\n.wishlist-button.wishlisted {\n  background:\n    linear-gradient(\n      90deg,\n      #16a34a,\n      #22c55e);\n  color: #ffffff;\n  border-color: #15803d;\n  box-shadow: 0 8px 18px rgba(22, 163, 74, 0.20);\n  animation: wishlist-pop 0.35s ease;\n}\n.wishlist-button.wishlisted:hover {\n  background:\n    linear-gradient(\n      90deg,\n      #15803d,\n      #16a34a);\n}\n.wishlist-button.is-toggling {\n  cursor: wait;\n  opacity: 0.9;\n  animation: wishlist-pulse 0.8s ease-in-out infinite;\n}\n@keyframes wishlist-pop {\n  0% {\n    transform: scale(0.96);\n  }\n  60% {\n    transform: scale(1.03);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes wishlist-pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.24);\n  }\n  50% {\n    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);\n  }\n}\n.track-cta {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--c-indigo);\n  font-size: 0.82rem;\n  font-weight: 700;\n  text-decoration: none;\n  transition: gap 0.18s, color 0.18s;\n}\n.track-cta:hover {\n  gap: 8px;\n  color: var(--c-blue-h);\n}\n@media (max-width: 1080px) {\n  .courses-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 720px) {\n  .courses-header {\n    padding: 32px 18px;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .courses-search {\n    padding: 16px 18px;\n    top: 53px;\n  }\n  .courses-grid {\n    grid-template-columns: 1fr;\n    padding: 20px 18px 0;\n    gap: 16px;\n  }\n  .courses-empty-state {\n    margin: 20px 18px 0;\n  }\n  .top-navbar {\n    padding: 10px 18px;\n  }\n}\n/*# sourceMappingURL=courses.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Courses, { className: "Courses", filePath: "app/base/courses/courses.ts", lineNumber: 32 });
})();

// src/app/base/enrolled-course/enrolled-course.ts
var _c06 = ["videoPlayer"];
var _c15 = (a0) => ["/course-details", a0];
var _c24 = () => ["/courses"];
var _c32 = (a0) => ["/quiz", a0];
var _c4 = (a0, a1) => ({ title: a0, courseId: a1 });
var _forTrack04 = ($index, $item) => $item.id;
function EnrolledCourse_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 3)(1, "h1");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.lang.t().ecLessons, " ", ctx_r0.lang.t().profileDashboard);
  }
}
function EnrolledCourse_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 26);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.getSafeYoutubeUrl(ctx_r0.selectedVideoUrl()), \u0275\u0275sanitizeResourceUrl);
  }
}
function EnrolledCourse_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "video", 29);
    \u0275\u0275listener("loadedmetadata", function EnrolledCourse_Conditional_7_Conditional_1_Template_video_loadedmetadata_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onVideoLoaded($event, ctx_r0.selectedLesson().id));
    })("ended", function EnrolledCourse_Conditional_7_Conditional_1_Template_video_ended_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onVideoEnded($event, ctx_r0.selectedLesson().id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.selectedVideoUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("data-lesson-id", ctx_r0.selectedLesson().id);
  }
}
function EnrolledCourse_Conditional_7_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275text(1, " \u{1F512} Quiz Completed ");
    \u0275\u0275elementEnd();
  }
}
function EnrolledCourse_Conditional_7_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 31);
    \u0275\u0275text(1, " \u{1F4DD} Start Quiz ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c32, (tmp_4_0 = ctx_r0.selectedLesson()) == null ? null : tmp_4_0.id))("queryParams", \u0275\u0275pureFunction2(4, _c4, (tmp_5_0 = ctx_r0.selectedLesson()) == null ? null : tmp_5_0.title, ctx_r0.courseId()));
  }
}
function EnrolledCourse_Conditional_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EnrolledCourse_Conditional_7_Conditional_7_Conditional_0_Template, 2, 0, "button", 30)(1, EnrolledCourse_Conditional_7_Conditional_7_Conditional_1_Template, 2, 7, "a", 31);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(((tmp_3_0 = ctx_r0.selectedLesson()) == null ? null : tmp_3_0.QuizAttempted) ? 0 : 1);
  }
}
function EnrolledCourse_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EnrolledCourse_Conditional_7_Conditional_0_Template, 1, 1, "iframe", 26)(1, EnrolledCourse_Conditional_7_Conditional_1_Template, 1, 2, "video", 27);
    \u0275\u0275elementStart(2, "div", 28)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, EnrolledCourse_Conditional_7_Conditional_7_Template, 2, 1);
  }
  if (rf & 2) {
    let tmp_5_0;
    const currentLesson_r3 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.isYoutube(ctx_r0.selectedVideoUrl()) ? 0 : 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(currentLesson_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(currentLesson_r3.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_5_0 = ctx_r0.selectedLesson()) == null ? null : tmp_5_0.hasQuiz) ? 7 : -1);
  }
}
function EnrolledCourse_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.lang.t().ecNoLesson);
  }
}
function EnrolledCourse_For_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 34);
  }
  if (rf & 2) {
    const lesson_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", lesson_r5.thumbnailUrl, \u0275\u0275sanitizeUrl)("alt", lesson_r5.title);
  }
}
function EnrolledCourse_For_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u25B6 ");
  }
}
function EnrolledCourse_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function EnrolledCourse_For_11_Template_button_click_0_listener() {
      const lesson_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectLesson(lesson_r5.id));
    });
    \u0275\u0275elementStart(1, "div", 33);
    \u0275\u0275conditionalCreate(2, EnrolledCourse_For_11_Conditional_2_Template, 1, 2, "img", 34)(3, EnrolledCourse_For_11_Conditional_3_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lesson_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", lesson_r5.id === ctx_r0.selectedLessonId());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(lesson_r5.thumbnailUrl ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(lesson_r5.title);
  }
}
function EnrolledCourse_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function EnrolledCourse_For_16_Template_button_click_0_listener() {
      const lesson_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectLesson(lesson_r7.id));
    });
    \u0275\u0275elementStart(1, "span", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 38)(4, "span", 39)(5, "strong", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small", 41);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 42);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lesson_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("lesson-item-active", lesson_r7.id === ctx_r0.selectedLessonId());
    \u0275\u0275attribute("title", lesson_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lesson_r7.orderIndex);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(lesson_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDuration(lesson_r7.durationMinutes));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lesson_r7.description || "No description available");
  }
}
function EnrolledCourse_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.commentError());
  }
}
function EnrolledCourse_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.commentMessage());
  }
}
function EnrolledCourse_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 43);
    \u0275\u0275listener("input", function EnrolledCourse_Conditional_37_Template_textarea_input_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.commentText.set($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "button", 44);
    \u0275\u0275listener("click", function EnrolledCourse_Conditional_37_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitComment());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r0.commentText());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isSubmittingComment());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isSubmittingComment() ? "Posting..." : "Post Comment", " ");
  }
}
function EnrolledCourse_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1, " Please login to comment. ");
    \u0275\u0275elementEnd();
  }
}
function EnrolledCourse_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, "Loading comments...");
    \u0275\u0275elementEnd();
  }
}
function EnrolledCourse_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, "No comments yet. Be the first to share your thoughts.");
    \u0275\u0275elementEnd();
  }
}
function EnrolledCourse_Conditional_42_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "button", 50);
    \u0275\u0275listener("click", function EnrolledCourse_Conditional_42_For_1_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const comment_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.beginEditComment(comment_r10));
    });
    \u0275\u0275text(2, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 51);
    \u0275\u0275listener("click", function EnrolledCourse_Conditional_42_For_1_Conditional_7_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r9);
      const comment_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteComment(comment_r10.id));
    });
    \u0275\u0275text(4, "Delete");
    \u0275\u0275elementEnd()();
  }
}
function EnrolledCourse_Conditional_42_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 52);
    \u0275\u0275listener("input", function EnrolledCourse_Conditional_42_For_1_Conditional_8_Template_textarea_input_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.editingCommentText.set($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 53)(2, "button", 44);
    \u0275\u0275listener("click", function EnrolledCourse_Conditional_42_For_1_Conditional_8_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const comment_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveComment(comment_r10));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 54);
    \u0275\u0275listener("click", function EnrolledCourse_Conditional_42_For_1_Conditional_8_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.cancelEditComment());
    });
    \u0275\u0275text(5, "Cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", ctx_r0.editingCommentText());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isSubmittingComment());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isSubmittingComment() ? "Saving..." : "Save", " ");
  }
}
function EnrolledCourse_Conditional_42_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(comment_r10.content);
  }
}
function EnrolledCourse_Conditional_42_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 45)(1, "div", 46)(2, "div", 47)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, EnrolledCourse_Conditional_42_For_1_Conditional_7_Template, 5, 0, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, EnrolledCourse_Conditional_42_For_1_Conditional_8_Template, 6, 3)(9, EnrolledCourse_Conditional_42_For_1_Conditional_9_Template, 2, 1, "p", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(comment_r10.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatCommentDate(comment_r10.createdAt));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isMyComment(comment_r10) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.editingCommentId() === comment_r10.id ? 8 : 9);
  }
}
function EnrolledCourse_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, EnrolledCourse_Conditional_42_For_1_Template, 10, 4, "article", 45, _forTrack04);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.comments());
  }
}
var EnrolledCourse = class _EnrolledCourse {
  sanitizer;
  route = inject(ActivatedRoute, { optional: true });
  learningApi = inject(LearningApiService);
  authService = inject(AuthService);
  lang = inject(LanguageService);
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  courseId = signal("", ...ngDevMode ? [{ debugName: "courseId" }] : (
    /* istanbul ignore next */
    []
  ));
  lessons = signal([], ...ngDevMode ? [{ debugName: "lessons" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedLessonId = signal("", ...ngDevMode ? [{ debugName: "selectedLessonId" }] : (
    /* istanbul ignore next */
    []
  ));
  courseMeta = signal(null, ...ngDevMode ? [{ debugName: "courseMeta" }] : (
    /* istanbul ignore next */
    []
  ));
  canComment = computed(() => this.authService.isLoggedIn(), ...ngDevMode ? [{ debugName: "canComment" }] : (
    /* istanbul ignore next */
    []
  ));
  comments = signal([], ...ngDevMode ? [{ debugName: "comments" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoadingComments = signal(false, ...ngDevMode ? [{ debugName: "isLoadingComments" }] : (
    /* istanbul ignore next */
    []
  ));
  commentText = signal("", ...ngDevMode ? [{ debugName: "commentText" }] : (
    /* istanbul ignore next */
    []
  ));
  editingCommentId = signal("", ...ngDevMode ? [{ debugName: "editingCommentId" }] : (
    /* istanbul ignore next */
    []
  ));
  editingCommentText = signal("", ...ngDevMode ? [{ debugName: "editingCommentText" }] : (
    /* istanbul ignore next */
    []
  ));
  isSubmittingComment = signal(false, ...ngDevMode ? [{ debugName: "isSubmittingComment" }] : (
    /* istanbul ignore next */
    []
  ));
  commentMessage = signal("", ...ngDevMode ? [{ debugName: "commentMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  commentError = signal("", ...ngDevMode ? [{ debugName: "commentError" }] : (
    /* istanbul ignore next */
    []
  ));
  saveProgressInterval;
  selectedLesson = computed(() => {
    const currentSelectedId = this.selectedLessonId();
    return this.lessons().find((lesson) => lesson.id === currentSelectedId) ?? null;
  }, ...ngDevMode ? [{ debugName: "selectedLesson" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedVideoUrl = computed(() => this.selectedLesson()?.videoUrl ?? "", ...ngDevMode ? [{ debugName: "selectedVideoUrl" }] : (
    /* istanbul ignore next */
    []
  ));
  instructorInitial = computed(() => {
    const name = this.courseMeta()?.instructorName ?? "";
    return name.trim().charAt(0).toUpperCase() || "I";
  }, ...ngDevMode ? [{ debugName: "instructorInitial" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    void this.loadLessons();
  }
  ngOnDestroy() {
    clearInterval(this.saveProgressInterval);
  }
  selectLesson(lessonId) {
    clearInterval(this.saveProgressInterval);
    this.selectedLessonId.set(lessonId);
  }
  formatDuration(totalMinutes) {
    if (totalMinutes <= 0) {
      return "N/A";
    }
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if (hours === 0) {
      return `${minutes} min`;
    }
    if (minutes === 0) {
      return `${hours} hr`;
    }
    return `${hours} hr ${minutes} min`;
  }
  async loadLessons() {
    if (!this.authService.isLoggedIn()) {
      this.errorMessage.set("Please login first.");
      this.isLoading.set(false);
      return;
    }
    const id = this.route?.snapshot.paramMap.get("id") ?? this.route?.snapshot.queryParamMap.get("id") ?? "";
    if (!id) {
      this.errorMessage.set("Course ID \u09AA\u09BE\u0993\u09AF\u09BC\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF\u0964");
      this.isLoading.set(false);
      return;
    }
    this.courseId.set(id);
    this.isLoading.set(true);
    this.errorMessage.set("");
    try {
      const isEnrolled = await firstValueFrom(this.learningApi.checkMyEnrollment(id));
      if (!isEnrolled) {
        this.errorMessage.set("You are not enrolled in this course yet.");
        this.lessons.set([]);
        return;
      }
      this.courseMeta.set(await this.loadCourseMeta(id));
      await this.loadComments(id);
      const response = await firstValueFrom(this.learningApi.getLessonsByCourse(id));
      const anyRes = response;
      const rawLessons = Array.isArray(anyRes?.data) ? anyRes.data : Array.isArray(anyRes?.Data) ? anyRes.Data : [];
      const orderedLessons = [...rawLessons].sort((a, b) => a.orderIndex - b.orderIndex);
      const mappedLessons = orderedLessons.map((lesson) => this.mapLessonForView(lesson));
      const userId = this.authService.getCurrentUser()?.id ?? "";
      const lessonsWithQuizInfo = await Promise.all(mappedLessons.map(async (lesson) => {
        try {
          const quizRes = await firstValueFrom(this.learningApi.getQuizzesByLesson(lesson.id));
          const quizData = quizRes?.Data ?? quizRes?.data ?? [];
          const hasQuiz = Array.isArray(quizData) && quizData.length > 0;
          let quizAttempted = false;
          if (hasQuiz && userId) {
            const attemptRes = await firstValueFrom(this.learningApi.hasAttemptedQuiz(lesson.id, userId));
            quizAttempted = attemptRes?.Data ?? false;
          }
          return __spreadProps(__spreadValues({}, lesson), { hasQuiz, QuizAttempted: quizAttempted });
        } catch {
          return __spreadProps(__spreadValues({}, lesson), { hasQuiz: false, QuizAttempted: false });
        }
      }));
      this.lessons.set(lessonsWithQuizInfo);
      const resumeLessonId = this.route?.snapshot.queryParamMap.get("lessonId") ?? "";
      if (resumeLessonId && lessonsWithQuizInfo.some((l) => l.id === resumeLessonId)) {
        this.selectedLessonId.set(resumeLessonId);
      } else {
        this.selectedLessonId.set(lessonsWithQuizInfo[0]?.id ?? "");
      }
    } catch {
      this.errorMessage.set("Lessons \u09B2\u09CB\u09A1 \u0995\u09B0\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF\u0964");
      this.lessons.set([]);
    } finally {
      this.isLoading.set(false);
    }
  }
  async loadCourseMeta(id) {
    try {
      const response = await firstValueFrom(this.learningApi.getAllCourses());
      const responseWithAlternativeShape = response;
      const rawCourses = Array.isArray(response.data) ? response.data : Array.isArray(responseWithAlternativeShape.Data) ? responseWithAlternativeShape.Data : [];
      const matchedCourse = rawCourses.find((course) => course.id === id);
      if (!matchedCourse) {
        return null;
      }
      return {
        title: matchedCourse.title,
        instructorName: matchedCourse.instructorName
      };
    } catch {
      return null;
    }
  }
  normalizeComment(comment) {
    return {
      id: String(comment?.id ?? comment?.Id ?? ""),
      courseId: String(comment?.courseId ?? comment?.CourseId ?? this.courseId() ?? ""),
      userId: String(comment?.userId ?? comment?.UserId ?? ""),
      userName: String(comment?.userName ?? comment?.UserName ?? comment?.fullName ?? comment?.FullName ?? "User"),
      content: String(comment?.content ?? comment?.Content ?? ""),
      createdAt: comment?.createdAt ?? comment?.CreatedAt ?? null,
      updatedAt: comment?.updatedAt ?? comment?.UpdatedAt ?? null
    };
  }
  async loadComments(courseId) {
    this.isLoadingComments.set(true);
    this.commentError.set("");
    try {
      const response = await firstValueFrom(this.learningApi.getCourseComments(courseId));
      const payload = response;
      const rawComments = Array.isArray(payload?.data) ? payload.data : Array.isArray(payload?.Data) ? payload.Data : Array.isArray(payload) ? payload : [];
      this.comments.set(rawComments.map((comment) => this.normalizeComment(comment)));
    } catch (error) {
      console.error("Error loading comments:", error);
      this.comments.set([]);
      this.commentError.set("Comments \u09B2\u09CB\u09A1 \u0995\u09B0\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF\u0964");
    } finally {
      this.isLoadingComments.set(false);
    }
    console.log("FINAL COMMENTS:", this.comments());
  }
  beginEditComment(comment) {
    this.editingCommentId.set(comment.id);
    this.editingCommentText.set(comment.content);
    this.commentMessage.set("");
    this.commentError.set("");
  }
  cancelEditComment() {
    this.editingCommentId.set("");
    this.editingCommentText.set("");
  }
  async submitComment() {
    const userId = this.authService.getCurrentUser()?.id ?? "";
    const currentCourseId = this.courseId();
    const content = this.commentText().trim();
    if (!userId) {
      this.commentError.set("Comment \u0995\u09B0\u09A4\u09C7 login \u0995\u09B0\u09C1\u09A8\u0964");
      return;
    }
    if (!content) {
      this.commentError.set("Comment text \u09A6\u09BF\u09A8\u0964");
      return;
    }
    if (!currentCourseId) {
      this.commentError.set("Course \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF\u0964");
      return;
    }
    this.isSubmittingComment.set(true);
    this.commentError.set("");
    try {
      await firstValueFrom(this.learningApi.addCourseComment({
        courseId: currentCourseId,
        userId: String(userId),
        content
      }));
      this.commentText.set("");
      this.commentMessage.set("Comment added successfully.");
      await this.loadComments(currentCourseId);
    } catch (error) {
      console.error("Error adding comment:", error);
      this.commentError.set("Comment add \u0995\u09B0\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF\u0964");
    } finally {
      this.isSubmittingComment.set(false);
    }
  }
  async saveComment(comment) {
    const userId = this.authService.getCurrentUser()?.id ?? "";
    const content = this.editingCommentText().trim();
    if (!userId || !content) {
      this.commentError.set("Comment text \u09A6\u09BF\u09A8\u0964");
      return;
    }
    this.isSubmittingComment.set(true);
    this.commentError.set("");
    try {
      await firstValueFrom(this.learningApi.updateCourseComment(comment.id, { content, userId: String(userId) }));
      this.editingCommentId.set("");
      this.editingCommentText.set("");
      this.commentMessage.set("Comment updated successfully.");
      await this.loadComments(this.courseId());
    } catch (error) {
      console.error("Error updating comment:", error);
      this.commentError.set("Comment update \u0995\u09B0\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF\u0964");
    } finally {
      this.isSubmittingComment.set(false);
    }
  }
  async deleteComment(commentId) {
    if (!globalThis.confirm("Delete this comment?")) {
      return;
    }
    try {
      await firstValueFrom(this.learningApi.deleteCourseComment(commentId));
      await this.loadComments(this.courseId());
    } catch (error) {
      console.error("Error deleting comment:", error);
      this.commentError.set("Comment delete \u0995\u09B0\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF\u0964");
    }
  }
  isMyComment(comment) {
    const userId = this.authService.getCurrentUser()?.id;
    return userId != null && String(userId) === comment.userId;
  }
  formatCommentDate(value) {
    if (!value) {
      return "Just now";
    }
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) {
      return "Just now";
    }
    return parsed.toLocaleString();
  }
  mapLessonForView(lesson) {
    const videoPath = lesson.videoPath ?? lesson.VideoPath ?? null;
    const videoUrl = lesson.videoUrl ?? lesson.VideoUrl ?? null;
    const thumbnailPath = lesson.thumbnailPath ?? lesson.ThumbnailPath ?? null;
    const hasUploadedVideo = typeof videoPath === "string" && videoPath.length > 0;
    const hasExternalVideo = typeof videoUrl === "string" && videoUrl.length > 0 && (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be") || videoUrl.startsWith("http"));
    return {
      id: lesson.id ?? lesson.Id,
      title: lesson.title ?? lesson.Title,
      description: lesson.description ?? lesson.Description ?? "",
      orderIndex: lesson.orderIndex ?? lesson.OrderIndex ?? 0,
      durationMinutes: lesson.durationMinutes ?? lesson.DurationMinutes ?? 0,
      videoUrl: hasUploadedVideo ? this.learningApi.buildDownloadUrl(videoPath) : hasExternalVideo ? videoUrl : "",
      thumbnailUrl: this.learningApi.buildDownloadUrl(thumbnailPath),
      hasQuiz: false,
      QuizAttempted: false
    };
  }
  isYoutube(url) {
    return url?.includes("youtube.com") || url?.includes("youtu.be");
  }
  getSafeYoutubeUrl(url) {
    const videoId = this.extractVideoId(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }
  extractVideoId(url) {
    const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regExp);
    return match ? match[1] : "";
  }
  videoPlayer;
  // Video load হলে saved position থেকে শুরু
  async onVideoLoaded(event, lessonId) {
    const video = event.target;
    const userId = this.authService.getCurrentUser()?.id ?? "";
    if (!userId)
      return;
    clearInterval(this.saveProgressInterval);
    try {
      const resumeAtParam = this.route?.snapshot.queryParamMap.get("resumeAt");
      let resumeSeconds = resumeAtParam ? parseFloat(resumeAtParam) : null;
      if (resumeSeconds === null || isNaN(resumeSeconds)) {
        const res = await firstValueFrom(this.learningApi.getVideoProgress(lessonId, userId));
        const progress = res?.Data;
        resumeSeconds = progress?.watchedSeconds ?? null;
      }
      if (resumeSeconds !== null && resumeSeconds > 5) {
        const trySetTime = () => {
          if (video.readyState >= 2) {
            video.currentTime = resumeSeconds;
          } else {
            video.addEventListener("canplay", () => {
              video.currentTime = resumeSeconds;
            }, { once: true });
          }
        };
        trySetTime();
      }
    } catch {
    }
    this.saveProgressInterval = setInterval(async () => {
      if (video.paused || video.ended)
        return;
      const uid = this.authService.getCurrentUser()?.id ?? "";
      if (!uid)
        return;
      await firstValueFrom(this.learningApi.saveVideoProgress(lessonId, {
        userId: uid,
        watchedSeconds: video.currentTime,
        totalSeconds: video.duration || 0
      })).catch(() => {
      });
    }, 5e3);
  }
  // Video শেষ হলে complete mark করো
  async onVideoEnded(event, lessonId) {
    const video = event.target;
    const userId = this.authService.getCurrentUser()?.id ?? "";
    if (!userId)
      return;
    await firstValueFrom(this.learningApi.saveVideoProgress(lessonId, {
      userId,
      watchedSeconds: video.duration,
      totalSeconds: video.duration
    })).catch(() => {
    });
    clearInterval(this.saveProgressInterval);
  }
  static \u0275fac = function EnrolledCourse_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EnrolledCourse)(\u0275\u0275directiveInject(DomSanitizer));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnrolledCourse, selectors: [["app-enrolled-course"]], viewQuery: function EnrolledCourse_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c06, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.videoPlayer = _t.first);
    }
  }, decls: 43, vars: 17, consts: [[1, "enrolled-shell"], [1, "enrolled-page"], [1, "back-link", 3, "routerLink"], [1, "page-head"], [1, "lesson-layout"], [1, "video-panel"], [1, "video-fallback"], [1, "lesson-slider"], ["type", "button", 1, "slide-card", 3, "active"], [1, "lesson-sidebar"], [1, "lesson-sidebar-Header"], ["type", "button", 1, "lesson-item", 3, "lesson-item-active"], [1, "teacher-card"], [1, "teacher-avatar"], [1, "teacher-name"], [1, "teacher-role"], [1, "comments-card"], [1, "comments-header"], [1, "comments-label"], [1, "comments-count"], [1, "comment-alert", "comment-alert-error"], [1, "comment-alert", "comment-alert-success"], [1, "comment-form"], [1, "comment-login-note"], [1, "comments-list"], [1, "comments-empty"], ["frameborder", "0", "allowfullscreen", "", 1, "lesson-player", 3, "src"], ["controls", "", 1, "lesson-player", 3, "src"], [1, "lesson-details"], ["controls", "", 1, "lesson-player", 3, "loadedmetadata", "ended", "src"], ["type", "button", "disabled", "", 1, "start-quiz-btn", "disabled"], [1, "start-quiz-btn", 3, "routerLink", "queryParams"], ["type", "button", 1, "slide-card", 3, "click"], [1, "slide-thumb"], [1, "slide-thumb-img", 3, "src", "alt"], [1, "slide-title"], ["type", "button", 1, "lesson-item", 3, "click"], [1, "lesson-order"], [1, "lesson-content"], [1, "lesson-head-row"], [1, "lesson-title"], [1, "lesson-duration"], [1, "lesson-desc"], ["rows", "3", "placeholder", "Write a comment...", 1, "comment-input", 3, "input", "value"], ["type", "button", 1, "comment-submit-btn", 3, "click", "disabled"], [1, "comment-item"], [1, "comment-top"], [1, "comment-meta"], [1, "comment-actions"], [1, "comment-content"], ["type", "button", 1, "comment-link-btn", 3, "click"], ["type", "button", 1, "comment-link-btn", "comment-link-danger", 3, "click"], ["rows", "3", 1, "comment-input", "comment-edit-input", 3, "input", "value"], [1, "comment-edit-actions"], ["type", "button", 1, "comment-cancel-btn", 3, "click"]], template: function EnrolledCourse_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "main", 1)(2, "a", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, EnrolledCourse_Conditional_4_Template, 5, 3, "header", 3);
      \u0275\u0275elementStart(5, "div", 4)(6, "section", 5);
      \u0275\u0275conditionalCreate(7, EnrolledCourse_Conditional_7_Template, 8, 4)(8, EnrolledCourse_Conditional_8_Template, 3, 1, "div", 6);
      \u0275\u0275elementStart(9, "div", 7);
      \u0275\u0275repeaterCreate(10, EnrolledCourse_For_11_Template, 6, 4, "button", 8, _forTrack04);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "aside", 9)(13, "h3", 10);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(15, EnrolledCourse_For_16_Template, 11, 7, "button", 11, _forTrack04);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "section", 12)(18, "div", 13);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div")(21, "p", 14);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "p", 15);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "section", 16)(26, "div", 17)(27, "div")(28, "p", 18);
      \u0275\u0275text(29, "Comment System");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "h2");
      \u0275\u0275text(31, "Course Comments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "span", 19);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(34, EnrolledCourse_Conditional_34_Template, 2, 1, "div", 20);
      \u0275\u0275conditionalCreate(35, EnrolledCourse_Conditional_35_Template, 2, 1, "div", 21);
      \u0275\u0275elementStart(36, "div", 22);
      \u0275\u0275conditionalCreate(37, EnrolledCourse_Conditional_37_Template, 3, 3)(38, EnrolledCourse_Conditional_38_Template, 2, 0, "div", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 24);
      \u0275\u0275conditionalCreate(40, EnrolledCourse_Conditional_40_Template, 2, 0, "div", 25)(41, EnrolledCourse_Conditional_41_Template, 2, 0, "div", 25)(42, EnrolledCourse_Conditional_42_Template, 2, 0);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      let tmp_8_0;
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.courseId() ? \u0275\u0275pureFunction1(14, _c15, ctx.courseId()) : \u0275\u0275pureFunction0(16, _c24));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.lang.t().ecBack);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_2_0 = ctx.courseMeta()) ? 4 : -1, tmp_2_0);
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_3_0 = ctx.selectedLesson()) ? 7 : 8, tmp_3_0);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.lessons());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2("", ctx.lang.t().ecLessons, " (", ctx.lessons().length, ")");
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.lessons());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.instructorInitial());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate((tmp_8_0 = ctx.courseMeta()) == null ? null : tmp_8_0.instructorName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.lang.t().ecInstructor);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("", ctx.comments().length, " comments");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.commentError() ? 34 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.commentMessage() ? 35 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.canComment() ? 37 : 38);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isLoadingComments() ? 40 : ctx.comments().length === 0 ? 41 : 42);
    }
  }, dependencies: [RouterLink], styles: ["\n.top-navbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 28px;\n  margin-bottom: 24px;\n  border-radius: 0;\n  border: none;\n  border-bottom: 1px solid rgba(17, 24, 39, 0.09);\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  position: sticky;\n  top: 0;\n  z-index: 50;\n}\n.top-navbar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.top-navbar[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  height: 36px;\n  width: auto;\n  max-width: 150px;\n  object-fit: contain;\n}\n.top-navbar[_ngcontent-%COMP%]   .topbar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  margin-left: auto;\n}\n.top-navbar[_ngcontent-%COMP%]   .topbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border-radius: 999px;\n  text-decoration: none;\n  font-size: 0.87rem;\n  font-weight: 500;\n  color: rgba(17, 24, 39, 0.62);\n  transition: background 0.18s, color 0.18s;\n}\n.top-navbar[_ngcontent-%COMP%]   .topbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.top-navbar[_ngcontent-%COMP%]   .topbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.top-navbar[_ngcontent-%COMP%]   .lang-toggle-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border: 1.5px solid #2563eb;\n  border-radius: 999px;\n  background: transparent;\n  color: #2563eb;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.18s, color 0.18s;\n  white-space: nowrap;\n}\n.top-navbar[_ngcontent-%COMP%]   .lang-toggle-btn[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  color: white;\n}\n.top-navbar[_ngcontent-%COMP%]   .nav-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 36px;\n  padding: 0 16px;\n  border-radius: 999px;\n  font-size: 0.87rem;\n  font-weight: 600;\n  text-decoration: none;\n  border: 1px solid transparent;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.top-navbar[_ngcontent-%COMP%]   .nav-button-ghost[_ngcontent-%COMP%] {\n  border-color: rgba(17, 24, 39, 0.09);\n  color: rgba(17, 24, 39, 0.6);\n  background: transparent;\n}\n.top-navbar[_ngcontent-%COMP%]   .nav-button-ghost[_ngcontent-%COMP%]:hover {\n  border-color: #2563eb;\n  color: #2563eb;\n  background: #eff6ff;\n}\n.enrolled-shell[_ngcontent-%COMP%] {\n  width: 100vw;\n  margin-left: calc(50% - 50vw);\n  background:\n    radial-gradient(\n      circle at 5% 10%,\n      rgba(59, 130, 246, 0.14),\n      transparent 30%),\n    radial-gradient(\n      circle at 92% 12%,\n      rgba(14, 165, 233, 0.14),\n      transparent 28%),\n    #f7f8fc;\n  min-height: 100vh;\n  padding: 0 0 2rem;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-weight: 600;\n  text-decoration: none;\n  color: #1d4ed8;\n  transition: all 0.2s ease;\n  margin-left: 1.5rem;\n  margin-top: 0.5rem;\n}\n.enrolled-page[_ngcontent-%COMP%] {\n  max-width: none;\n  width: 100%;\n  margin: auto;\n  padding: 0 1.5rem;\n}\n.slide-thumb-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 4px;\n}\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 80px;\n  padding: 1rem 1rem;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #1d4ed8,\n      #0ea5e9);\n  color: white;\n  margin-bottom: 0.5rem;\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin: 0;\n}\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  margin-top: 0.3rem;\n}\n.lesson-slider[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  overflow-x: auto;\n  overflow-y: hidden;\n  margin-top: 1.5rem;\n  padding: 0.5rem 0;\n  scroll-behavior: smooth;\n  -webkit-overflow-scrolling: touch;\n  width: 100%;\n  min-width: 0;\n  flex-wrap: nowrap;\n}\n.lesson-slider[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 6px;\n}\n.lesson-slider[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.lesson-slider[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 3px;\n}\n.lesson-slider[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n.slide-card[_ngcontent-%COMP%] {\n  min-width: 160px;\n  width: 160px;\n  padding: 0;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #e0f2fe,\n      #ecf9ff);\n  cursor: pointer;\n  transition: 0.3s ease;\n  border: 2px solid #cbd5e1;\n  overflow: hidden;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);\n}\n.slide-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);\n}\n.slide-card.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1d4ed8,\n      #0ea5e9);\n  color: white;\n  box-shadow: 0 8px 20px rgba(29, 78, 216, 0.3);\n}\n.slide-thumb[_ngcontent-%COMP%] {\n  height: 90px;\n  background: #1f2937;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 2rem;\n}\n.slide-card.active[_ngcontent-%COMP%]   .slide-thumb[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #06b6d4);\n}\n.slide-title[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.6rem;\n  font-size: 0.85rem;\n  font-weight: 600;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n  color: #1f2937;\n}\n.slide-card.active[_ngcontent-%COMP%]   .slide-title[_ngcontent-%COMP%] {\n  color: white;\n}\n.lesson-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 1rem;\n}\n.video-panel[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1rem;\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.lesson-player[_ngcontent-%COMP%] {\n  width: 90%;\n  aspect-ratio: 16 / 9;\n  border-radius: 12px;\n  background: #000;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  display: block;\n}\n.lesson-details[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff,\n      #f0f4ff);\n  padding: 1.2rem;\n  border-radius: 10px;\n  border-left: 4px solid #1d4ed8;\n  box-shadow: 0 2px 8px rgba(29, 78, 216, 0.08);\n}\n.lesson-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #0f172a;\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n.lesson-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #475569;\n  margin: 0;\n  line-height: 1.6;\n}\n.start-quiz-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 28px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #ee0404,\n      #cf5f5f);\n  color: white;\n  font-weight: 700;\n  font-size: 0.95rem;\n  text-decoration: none;\n  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.30);\n  transition:\n    transform 0.2s,\n    box-shadow 0.2s,\n    background 0.2s;\n  margin-top: 16px;\n  border: none;\n  cursor: pointer;\n  font-family: inherit;\n}\n.start-quiz-btn[_ngcontent-%COMP%]:hover:not(:disabled):not(.disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 28px rgba(124, 58, 237, 0.38);\n}\n.start-quiz-btn.disabled[_ngcontent-%COMP%], \n.start-quiz-btn[_ngcontent-%COMP%]:disabled {\n  background:\n    linear-gradient(\n      135deg,\n      #d1d5db,\n      #b4b8bf) !important;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  cursor: not-allowed;\n  opacity: 0.7;\n  transform: none;\n  color: #6b7280;\n}\n.lesson-sidebar-Header[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.lesson-sidebar[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1rem;\n  border-radius: 16px;\n  max-height: calc(100vh - 300px);\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #dbeafe;\n}\n.lesson-sidebar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0.8rem;\n  padding-bottom: 0.6rem;\n  border-bottom: 2px solid #e2e8f0;\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 10;\n}\n.lesson-item[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border-radius: 12px;\n  border: 1px solid #dbeafe;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fbff,\n      #f0f7ff);\n  margin-bottom: 0.55rem;\n  cursor: pointer;\n  text-align: left;\n  transition: 0.2s ease;\n  display: grid;\n  grid-template-columns: 36px minmax(0, 1fr);\n  gap: 0.65rem;\n  align-items: start;\n}\n.lesson-item[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #eaf2ff,\n      #e1efff);\n  border-color: #93c5fd;\n  transform: translateX(3px);\n}\n.lesson-order[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: #dbeafe;\n  color: #1d4ed8;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.84rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.lesson-content[_ngcontent-%COMP%] {\n  min-width: 0;\n  display: grid;\n  gap: 0.3rem;\n}\n.lesson-head-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 0.45rem;\n  align-items: center;\n  min-width: 0;\n}\n.lesson-title[_ngcontent-%COMP%] {\n  min-width: 0;\n  font-size: 0.92rem;\n  color: #0f172a;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.lesson-duration[_ngcontent-%COMP%] {\n  color: #1e40af;\n  font-size: 0.74rem;\n  font-weight: 700;\n  padding: 0.18rem 0.42rem;\n  border-radius: 999px;\n  background: #e0e7ff;\n  white-space: nowrap;\n}\n.lesson-desc[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 0.8rem;\n  line-height: 1.35;\n  line-clamp: 2;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-height: 2.7em;\n}\n.lesson-item-active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1d4ed8,\n      #0ea5e9);\n  border-color: #1d4ed8;\n  box-shadow: 0 4px 12px rgba(29, 78, 216, 0.25);\n}\n.lesson-item-active[_ngcontent-%COMP%]   .lesson-order[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.18);\n  color: #ffffff;\n}\n.lesson-item-active[_ngcontent-%COMP%]   .lesson-title[_ngcontent-%COMP%], \n.lesson-item-active[_ngcontent-%COMP%]   .lesson-desc[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.lesson-item-active[_ngcontent-%COMP%]   .lesson-duration[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.18);\n  color: #ffffff;\n}\n.teacher-card[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 1rem;\n  border-radius: 16px;\n  background: #0f172a;\n  color: white;\n  display: flex;\n  gap: 1rem;\n}\n.teacher-avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background: #0ea5e9;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.comments-card[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 1rem;\n  border-radius: 16px;\n  background: #ffffff;\n  border: 1px solid #dbeafe;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.comments-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.comments-label[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: #2563eb;\n}\n.comments-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 1.1rem;\n  color: #0f172a;\n}\n.comments-count[_ngcontent-%COMP%] {\n  align-self: center;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: #eff6ff;\n  color: #1d4ed8;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n.comment-alert[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 10px 12px;\n  border-radius: 10px;\n  font-size: 0.88rem;\n  font-weight: 600;\n}\n.comment-alert-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n}\n.comment-alert-success[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #166534;\n  border: 1px solid #bbf7d0;\n}\n.comment-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.comment-login-note[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-radius: 12px;\n  background: #eff6ff;\n  color: #1d4ed8;\n  font-weight: 600;\n}\n.comment-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #cbd5e1;\n  border-radius: 12px;\n  padding: 0.85rem 0.95rem;\n  font-family: inherit;\n  font-size: 0.95rem;\n  resize: vertical;\n  outline: none;\n  background: #ffffff;\n}\n.comment-input[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);\n}\n.comment-submit-btn[_ngcontent-%COMP%], \n.comment-cancel-btn[_ngcontent-%COMP%], \n.comment-link-btn[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 10px;\n  cursor: pointer;\n  font-weight: 700;\n  transition:\n    transform 0.18s ease,\n    background 0.18s ease,\n    box-shadow 0.18s ease;\n}\n.comment-submit-btn[_ngcontent-%COMP%] {\n  width: fit-content;\n  padding: 0.75rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #0ea5e9);\n  color: #ffffff;\n  box-shadow: 0 6px 18px rgba(37, 99, 235, 0.24);\n}\n.comment-submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n}\n.comment-submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.72;\n  cursor: not-allowed;\n}\n.comment-edit-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.comment-cancel-btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  background: #e5e7eb;\n  color: #111827;\n}\n.comment-link-btn[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.65rem;\n  background: #eff6ff;\n  color: #1d4ed8;\n  font-size: 0.8rem;\n}\n.comment-link-danger[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #b91c1c;\n}\n.comments-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.comments-empty[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 12px;\n  background: #f8fafc;\n  color: #475569;\n  text-align: center;\n}\n.comment-item[_ngcontent-%COMP%] {\n  padding: 14px 15px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff,\n      #f8fbff);\n  border: 1px solid #dbeafe;\n}\n.comment-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.comment-meta[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2px;\n}\n.comment-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 0.95rem;\n}\n.comment-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.8rem;\n}\n.comment-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.comment-content[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #334155;\n  line-height: 1.7;\n  white-space: pre-wrap;\n}\n@media (max-width: 900px) {\n  .enrolled-page[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  .lesson-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .comment-top[_ngcontent-%COMP%], \n   .comments-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .comment-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=enrolled-course.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnrolledCourse, [{
    type: Component,
    args: [{ selector: "app-enrolled-course", imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<section class="enrolled-shell">
  <main class="enrolled-page">
    <a [routerLink]="courseId() ? ['/course-details', courseId()] : ['/courses']" class="back-link">{{ lang.t().ecBack
      }}</a>

    @if (courseMeta(); as meta) {
    <header class="page-head">
      <h1>{{ meta.title }}</h1>
      <p>{{ lang.t().ecLessons }} {{ lang.t().profileDashboard }}</p>
    </header>
    }

    <div class="lesson-layout">
      <section class="video-panel">
  @if (selectedLesson(); as currentLesson) {
    
    @if (isYoutube(selectedVideoUrl())) {
      <iframe class="lesson-player" [src]="getSafeYoutubeUrl(selectedVideoUrl())" 
        frameborder="0" allowfullscreen></iframe>
    } @else {
<video
  class="lesson-player"
  [src]="selectedVideoUrl()"
  [attr.data-lesson-id]="selectedLesson()!.id"
  controls
  (loadedmetadata)="onVideoLoaded($event, selectedLesson()!.id)"
  (ended)="onVideoEnded($event, selectedLesson()!.id)">
</video>
    }

    <!-- Lesson title & description -->
    <div class="lesson-details">
      <h3>{{ currentLesson.title }}</h3>
      <p>{{ currentLesson.description }}</p>
    </div>

    <!-- \u2705 Quiz button \u2014 lesson details \u098F\u09B0 \u09A0\u09BF\u0995 \u09A8\u09BF\u099A\u09C7 -->
@if (selectedLesson()?.hasQuiz) {
  @if (selectedLesson()?.QuizAttempted) {
    <button type="button" class="start-quiz-btn disabled" disabled>
      \u{1F512} Quiz Completed
    </button>
  } @else {
    <a [routerLink]="['/quiz', selectedLesson()?.id]"
       [queryParams]="{ title: selectedLesson()?.title, courseId: courseId() }"
       class="start-quiz-btn">
      \u{1F4DD} Start Quiz
    </a>
  }
}
  } @else {
    <div class="video-fallback">
      <h2>{{ lang.t().ecNoLesson }}</h2>
    </div>
  }

  <!-- Lesson slider \u2014 \u09B8\u09AC\u09BE\u09B0 \u09A8\u09BF\u099A\u09C7 -->
  <div class="lesson-slider">
    @for (lesson of lessons(); track lesson.id) {
      <button class="slide-card" 
        [class.active]="lesson.id === selectedLessonId()" 
        (click)="selectLesson(lesson.id)" 
        type="button">
        <div class="slide-thumb">
          @if (lesson.thumbnailUrl) {
            <img [src]="lesson.thumbnailUrl" [alt]="lesson.title" class="slide-thumb-img" />
          } @else {
            \u25B6
          }
        </div>
        <p class="slide-title">{{ lesson.title }}</p>
      </button>
    }
  </div>

</section>

      <aside class="lesson-sidebar">
        <h3 class="lesson-sidebar-Header">{{ lang.t().ecLessons }} ({{ lessons().length }})</h3>
        @for (lesson of lessons(); track lesson.id) {
        <button class="lesson-item" [class.lesson-item-active]="lesson.id === selectedLessonId()"
          (click)="selectLesson(lesson.id)" [attr.title]="lesson.title" type="button">
          <span class="lesson-order">{{ lesson.orderIndex }}</span>
          <span class="lesson-content">
            <span class="lesson-head-row">
              <strong class="lesson-title">{{ lesson.title }}</strong>
              <small class="lesson-duration">{{ formatDuration(lesson.durationMinutes) }}</small>
            </span>
            <span class="lesson-desc">{{ lesson.description || 'No description available' }}</span>
          </span>
        </button>
        }
      </aside>
    </div>

    <section class="teacher-card">
      <div class="teacher-avatar">{{ instructorInitial() }}</div>
      <div>
        <p class="teacher-name">{{ courseMeta()?.instructorName }}</p>
        <p class="teacher-role">{{ lang.t().ecInstructor }}</p>
      </div>
    </section>

    <section class="comments-card">
      <div class="comments-header">
        <div>
          <p class="comments-label">Comment System</p>
          <h2>Course Comments</h2>
        </div>
        <span class="comments-count">{{ comments().length }} comments</span>
      </div>

      @if (commentError()) {
        <div class="comment-alert comment-alert-error">{{ commentError() }}</div>
      }

      @if (commentMessage()) {
        <div class="comment-alert comment-alert-success">{{ commentMessage() }}</div>
      }

      <div class="comment-form">
        @if (canComment()) {
          <textarea
            class="comment-input"
            rows="3"
            placeholder="Write a comment..."
            [value]="commentText()"
            (input)="commentText.set($any($event.target).value)"></textarea>
          <button
            type="button"
            class="comment-submit-btn"
            [disabled]="isSubmittingComment()"
            (click)="submitComment()">
            {{ isSubmittingComment() ? 'Posting...' : 'Post Comment' }}
          </button>
        } @else {
          <div class="comment-login-note">
            Please login to comment.
          </div>
        }
      </div>

      <div class="comments-list">
        @if (isLoadingComments()) {
          <div class="comments-empty">Loading comments...</div>
        } @else if (comments().length === 0) {
          <div class="comments-empty">No comments yet. Be the first to share your thoughts.</div>
        } @else {
          @for (comment of comments(); track comment.id) {
            <article class="comment-item">
              <div class="comment-top">
                <div class="comment-meta">
                  <strong>{{ comment.userName }}</strong>
                  <span>{{ formatCommentDate(comment.createdAt) }}</span>
                </div>
                @if (isMyComment(comment)) {
                  <div class="comment-actions">
                    <button type="button" class="comment-link-btn" (click)="beginEditComment(comment)">Edit</button>
                    <button type="button" class="comment-link-btn comment-link-danger" (click)="deleteComment(comment.id)">Delete</button>
                  </div>
                }
              </div>

              @if (editingCommentId() === comment.id) {
                <textarea
                  class="comment-input comment-edit-input"
                  rows="3"
                  [value]="editingCommentText()"
                  (input)="editingCommentText.set($any($event.target).value)"></textarea>
                <div class="comment-edit-actions">
                  <button type="button" class="comment-submit-btn" (click)="saveComment(comment)" [disabled]="isSubmittingComment()">
                    {{ isSubmittingComment() ? 'Saving...' : 'Save' }}
                  </button>
                  <button type="button" class="comment-cancel-btn" (click)="cancelEditComment()">Cancel</button>
                </div>
              } @else {
                <p class="comment-content">{{ comment.content }}</p>
              }
            </article>
          }
        }
      </div>
    </section>
  </main>
</section>`, styles: ["/* src/app/base/enrolled-course/enrolled-course.css */\n.top-navbar {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 28px;\n  margin-bottom: 24px;\n  border-radius: 0;\n  border: none;\n  border-bottom: 1px solid rgba(17, 24, 39, 0.09);\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  position: sticky;\n  top: 0;\n  z-index: 50;\n}\n.top-navbar .brand {\n  display: inline-flex;\n  align-items: center;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.top-navbar .brand-logo {\n  height: 36px;\n  width: auto;\n  max-width: 150px;\n  object-fit: contain;\n}\n.top-navbar .topbar-nav {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  margin-left: auto;\n}\n.top-navbar .topbar-nav a {\n  padding: 7px 14px;\n  border-radius: 999px;\n  text-decoration: none;\n  font-size: 0.87rem;\n  font-weight: 500;\n  color: rgba(17, 24, 39, 0.62);\n  transition: background 0.18s, color 0.18s;\n}\n.top-navbar .topbar-nav a:hover {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.top-navbar .topbar-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.top-navbar .lang-toggle-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border: 1.5px solid #2563eb;\n  border-radius: 999px;\n  background: transparent;\n  color: #2563eb;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.18s, color 0.18s;\n  white-space: nowrap;\n}\n.top-navbar .lang-toggle-btn:hover {\n  background: #2563eb;\n  color: white;\n}\n.top-navbar .nav-button {\n  display: inline-flex;\n  align-items: center;\n  min-height: 36px;\n  padding: 0 16px;\n  border-radius: 999px;\n  font-size: 0.87rem;\n  font-weight: 600;\n  text-decoration: none;\n  border: 1px solid transparent;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.top-navbar .nav-button-ghost {\n  border-color: rgba(17, 24, 39, 0.09);\n  color: rgba(17, 24, 39, 0.6);\n  background: transparent;\n}\n.top-navbar .nav-button-ghost:hover {\n  border-color: #2563eb;\n  color: #2563eb;\n  background: #eff6ff;\n}\n.enrolled-shell {\n  width: 100vw;\n  margin-left: calc(50% - 50vw);\n  background:\n    radial-gradient(\n      circle at 5% 10%,\n      rgba(59, 130, 246, 0.14),\n      transparent 30%),\n    radial-gradient(\n      circle at 92% 12%,\n      rgba(14, 165, 233, 0.14),\n      transparent 28%),\n    #f7f8fc;\n  min-height: 100vh;\n  padding: 0 0 2rem;\n}\n.back-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-weight: 600;\n  text-decoration: none;\n  color: #1d4ed8;\n  transition: all 0.2s ease;\n  margin-left: 1.5rem;\n  margin-top: 0.5rem;\n}\n.enrolled-page {\n  max-width: none;\n  width: 100%;\n  margin: auto;\n  padding: 0 1.5rem;\n}\n.slide-thumb-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 4px;\n}\n.page-head {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 80px;\n  padding: 1rem 1rem;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #1d4ed8,\n      #0ea5e9);\n  color: white;\n  margin-bottom: 0.5rem;\n}\n.page-head h1 {\n  font-size: 1.2rem;\n  margin: 0;\n}\n.page-head p {\n  font-size: 0.85rem;\n  margin-top: 0.3rem;\n}\n.lesson-slider {\n  display: flex;\n  gap: 1rem;\n  overflow-x: auto;\n  overflow-y: hidden;\n  margin-top: 1.5rem;\n  padding: 0.5rem 0;\n  scroll-behavior: smooth;\n  -webkit-overflow-scrolling: touch;\n  width: 100%;\n  min-width: 0;\n  flex-wrap: nowrap;\n}\n.lesson-slider::-webkit-scrollbar {\n  height: 6px;\n}\n.lesson-slider::-webkit-scrollbar-track {\n  background: transparent;\n}\n.lesson-slider::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 3px;\n}\n.lesson-slider::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n.slide-card {\n  min-width: 160px;\n  width: 160px;\n  padding: 0;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #e0f2fe,\n      #ecf9ff);\n  cursor: pointer;\n  transition: 0.3s ease;\n  border: 2px solid #cbd5e1;\n  overflow: hidden;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);\n}\n.slide-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);\n}\n.slide-card.active {\n  background:\n    linear-gradient(\n      135deg,\n      #1d4ed8,\n      #0ea5e9);\n  color: white;\n  box-shadow: 0 8px 20px rgba(29, 78, 216, 0.3);\n}\n.slide-thumb {\n  height: 90px;\n  background: #1f2937;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 2rem;\n}\n.slide-card.active .slide-thumb {\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #06b6d4);\n}\n.slide-title {\n  margin: 0;\n  padding: 0.6rem;\n  font-size: 0.85rem;\n  font-weight: 600;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n  color: #1f2937;\n}\n.slide-card.active .slide-title {\n  color: white;\n}\n.lesson-layout {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 1rem;\n}\n.video-panel {\n  background: white;\n  padding: 1rem;\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.lesson-player {\n  width: 90%;\n  aspect-ratio: 16 / 9;\n  border-radius: 12px;\n  background: #000;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  display: block;\n}\n.lesson-details {\n  margin-top: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff,\n      #f0f4ff);\n  padding: 1.2rem;\n  border-radius: 10px;\n  border-left: 4px solid #1d4ed8;\n  box-shadow: 0 2px 8px rgba(29, 78, 216, 0.08);\n}\n.lesson-details h3 {\n  color: #0f172a;\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n.lesson-details p {\n  color: #475569;\n  margin: 0;\n  line-height: 1.6;\n}\n.start-quiz-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 28px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #ee0404,\n      #cf5f5f);\n  color: white;\n  font-weight: 700;\n  font-size: 0.95rem;\n  text-decoration: none;\n  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.30);\n  transition:\n    transform 0.2s,\n    box-shadow 0.2s,\n    background 0.2s;\n  margin-top: 16px;\n  border: none;\n  cursor: pointer;\n  font-family: inherit;\n}\n.start-quiz-btn:hover:not(:disabled):not(.disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 28px rgba(124, 58, 237, 0.38);\n}\n.start-quiz-btn.disabled,\n.start-quiz-btn:disabled {\n  background:\n    linear-gradient(\n      135deg,\n      #d1d5db,\n      #b4b8bf) !important;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  cursor: not-allowed;\n  opacity: 0.7;\n  transform: none;\n  color: #6b7280;\n}\n.lesson-sidebar-Header {\n  color: #0f172a;\n}\n.lesson-sidebar {\n  background: white;\n  padding: 1rem;\n  border-radius: 16px;\n  max-height: calc(100vh - 300px);\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #dbeafe;\n}\n.lesson-sidebar h3 {\n  margin-top: 0;\n  margin-bottom: 0.8rem;\n  padding-bottom: 0.6rem;\n  border-bottom: 2px solid #e2e8f0;\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 10;\n}\n.lesson-item {\n  width: 100%;\n  padding: 0.75rem;\n  border-radius: 12px;\n  border: 1px solid #dbeafe;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fbff,\n      #f0f7ff);\n  margin-bottom: 0.55rem;\n  cursor: pointer;\n  text-align: left;\n  transition: 0.2s ease;\n  display: grid;\n  grid-template-columns: 36px minmax(0, 1fr);\n  gap: 0.65rem;\n  align-items: start;\n}\n.lesson-item:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #eaf2ff,\n      #e1efff);\n  border-color: #93c5fd;\n  transform: translateX(3px);\n}\n.lesson-order {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: #dbeafe;\n  color: #1d4ed8;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.84rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.lesson-content {\n  min-width: 0;\n  display: grid;\n  gap: 0.3rem;\n}\n.lesson-head-row {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 0.45rem;\n  align-items: center;\n  min-width: 0;\n}\n.lesson-title {\n  min-width: 0;\n  font-size: 0.92rem;\n  color: #0f172a;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.lesson-duration {\n  color: #1e40af;\n  font-size: 0.74rem;\n  font-weight: 700;\n  padding: 0.18rem 0.42rem;\n  border-radius: 999px;\n  background: #e0e7ff;\n  white-space: nowrap;\n}\n.lesson-desc {\n  color: #475569;\n  font-size: 0.8rem;\n  line-height: 1.35;\n  line-clamp: 2;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-height: 2.7em;\n}\n.lesson-item-active {\n  background:\n    linear-gradient(\n      135deg,\n      #1d4ed8,\n      #0ea5e9);\n  border-color: #1d4ed8;\n  box-shadow: 0 4px 12px rgba(29, 78, 216, 0.25);\n}\n.lesson-item-active .lesson-order {\n  background: rgba(255, 255, 255, 0.18);\n  color: #ffffff;\n}\n.lesson-item-active .lesson-title,\n.lesson-item-active .lesson-desc {\n  color: #ffffff;\n}\n.lesson-item-active .lesson-duration {\n  background: rgba(255, 255, 255, 0.18);\n  color: #ffffff;\n}\n.teacher-card {\n  margin-top: 1rem;\n  padding: 1rem;\n  border-radius: 16px;\n  background: #0f172a;\n  color: white;\n  display: flex;\n  gap: 1rem;\n}\n.teacher-avatar {\n  width: 50px;\n  height: 50px;\n  background: #0ea5e9;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.comments-card {\n  margin-top: 1rem;\n  padding: 1rem;\n  border-radius: 16px;\n  background: #ffffff;\n  border: 1px solid #dbeafe;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.comments-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.comments-label {\n  margin: 0;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: #2563eb;\n}\n.comments-header h2 {\n  margin: 4px 0 0;\n  font-size: 1.1rem;\n  color: #0f172a;\n}\n.comments-count {\n  align-self: center;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: #eff6ff;\n  color: #1d4ed8;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n.comment-alert {\n  margin-bottom: 10px;\n  padding: 10px 12px;\n  border-radius: 10px;\n  font-size: 0.88rem;\n  font-weight: 600;\n}\n.comment-alert-error {\n  background: #fef2f2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n}\n.comment-alert-success {\n  background: #ecfdf5;\n  color: #166534;\n  border: 1px solid #bbf7d0;\n}\n.comment-form {\n  display: grid;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.comment-login-note {\n  padding: 12px 14px;\n  border-radius: 12px;\n  background: #eff6ff;\n  color: #1d4ed8;\n  font-weight: 600;\n}\n.comment-input {\n  width: 100%;\n  border: 1px solid #cbd5e1;\n  border-radius: 12px;\n  padding: 0.85rem 0.95rem;\n  font-family: inherit;\n  font-size: 0.95rem;\n  resize: vertical;\n  outline: none;\n  background: #ffffff;\n}\n.comment-input:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);\n}\n.comment-submit-btn,\n.comment-cancel-btn,\n.comment-link-btn {\n  border: 0;\n  border-radius: 10px;\n  cursor: pointer;\n  font-weight: 700;\n  transition:\n    transform 0.18s ease,\n    background 0.18s ease,\n    box-shadow 0.18s ease;\n}\n.comment-submit-btn {\n  width: fit-content;\n  padding: 0.75rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #0ea5e9);\n  color: #ffffff;\n  box-shadow: 0 6px 18px rgba(37, 99, 235, 0.24);\n}\n.comment-submit-btn:hover:not(:disabled) {\n  transform: translateY(-1px);\n}\n.comment-submit-btn:disabled {\n  opacity: 0.72;\n  cursor: not-allowed;\n}\n.comment-edit-actions {\n  display: flex;\n  gap: 8px;\n}\n.comment-cancel-btn {\n  padding: 0.75rem 1rem;\n  background: #e5e7eb;\n  color: #111827;\n}\n.comment-link-btn {\n  padding: 0.35rem 0.65rem;\n  background: #eff6ff;\n  color: #1d4ed8;\n  font-size: 0.8rem;\n}\n.comment-link-danger {\n  background: #fef2f2;\n  color: #b91c1c;\n}\n.comments-list {\n  display: grid;\n  gap: 12px;\n}\n.comments-empty {\n  padding: 16px;\n  border-radius: 12px;\n  background: #f8fafc;\n  color: #475569;\n  text-align: center;\n}\n.comment-item {\n  padding: 14px 15px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff,\n      #f8fbff);\n  border: 1px solid #dbeafe;\n}\n.comment-top {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.comment-meta {\n  display: grid;\n  gap: 2px;\n}\n.comment-meta strong {\n  color: #0f172a;\n  font-size: 0.95rem;\n}\n.comment-meta span {\n  color: #64748b;\n  font-size: 0.8rem;\n}\n.comment-actions {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.comment-content {\n  margin: 0;\n  color: #334155;\n  line-height: 1.7;\n  white-space: pre-wrap;\n}\n@media (max-width: 900px) {\n  .enrolled-page {\n    padding: 0 1rem;\n  }\n  .lesson-layout {\n    grid-template-columns: 1fr;\n  }\n  .comment-top,\n  .comments-header {\n    flex-direction: column;\n  }\n  .comment-actions {\n    width: 100%;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=enrolled-course.css.map */\n"] }]
  }], () => [{ type: DomSanitizer }], { videoPlayer: [{
    type: ViewChild,
    args: ["videoPlayer"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnrolledCourse, { className: "EnrolledCourse", filePath: "app/base/enrolled-course/enrolled-course.ts", lineNumber: 43 });
})();

// src/app/user/my-courses/my-courses.ts
var _c07 = () => ["/courses"];
var _c16 = () => ["/profile"];
var _c25 = () => ["/login"];
var _c33 = (a0) => ["/enrolled-course", a0];
var _c42 = (a0) => ["/course-details", a0];
var _forTrack05 = ($index, $item) => $item.id;
function MyCourses_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 16)(1, "article", 24)(2, "p");
    \u0275\u0275text(3, "Total Courses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "article", 24)(7, "p");
    \u0275\u0275text(8, "Total Lessons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "article", 24)(12, "p");
    \u0275\u0275text(13, "Total Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h3");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.myCourses().length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalLessons());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatDuration(ctx_r0.totalMinutes()));
  }
}
function MyCourses_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 21)(1, "h2");
    \u0275\u0275text(2, "Loading your courses...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u098F\u0995\u099F\u09C1 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09CB, enrolled course list \u0986\u09A8\u09BE \u09B9\u099A\u09CD\u099B\u09C7\u0964");
    \u0275\u0275elementEnd()();
  }
}
function MyCourses_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 22)(1, "h2");
    \u0275\u0275text(2, "Something went wrong");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 15);
    \u0275\u0275text(6, "Go to Login");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c25));
  }
}
function MyCourses_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 21)(1, "h2");
    \u0275\u0275text(2, "No enrolled course yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u098F\u0996\u09A8\u0993 \u0995\u09CB\u09A8\u09CB \u0995\u09CB\u09B0\u09CD\u09B8\u09C7 enrollment \u0995\u09B0\u09BE \u09B9\u09DF\u09A8\u09BF\u0964 \u09A8\u09A4\u09C1\u09A8 \u0995\u09CB\u09B0\u09CD\u09B8 \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09CB\u0964");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 15);
    \u0275\u0275text(6, "Explore Courses");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c07));
  }
}
function MyCourses_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 21)(1, "h2");
    \u0275\u0275text(2, "No match found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Search term \u0985\u09A8\u09C1\u09AF\u09BE\u09DF\u09C0 \u0995\u09CB\u09A8\u09CB enrolled course \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF\u0964");
    \u0275\u0275elementEnd()();
  }
}
function MyCourses_Conditional_40_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 25)(1, "div", 26)(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ul", 30)(11, "li")(12, "strong");
    \u0275\u0275text(13, "Instructor:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li")(16, "strong");
    \u0275\u0275text(17, "Lessons:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "li")(20, "strong");
    \u0275\u0275text(21, "Duration:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "li")(24, "strong");
    \u0275\u0275text(25, "Price:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 31)(28, "a", 15);
    \u0275\u0275text(29, "Continue Learning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "a", 14);
    \u0275\u0275text(31, "Course Details");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const course_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r2.level);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r2.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r2.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", course_r2.instructorName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", course_r2.lessonCount);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDuration(course_r2.durationMinutes));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatPrice(course_r2.price));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c33, course_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c42, course_r2.id));
  }
}
function MyCourses_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 23);
    \u0275\u0275repeaterCreate(1, MyCourses_Conditional_40_For_2_Template, 32, 14, "article", 25, _forTrack05);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.filteredCourses());
  }
}
var MyCourses = class _MyCourses {
  learningApi = inject(LearningApiService);
  authService = inject(AuthService);
  lang = inject(LanguageService);
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : (
    /* istanbul ignore next */
    []
  ));
  myCourses = signal([], ...ngDevMode ? [{ debugName: "myCourses" }] : (
    /* istanbul ignore next */
    []
  ));
  filteredCourses = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    if (!term) {
      return this.myCourses();
    }
    return this.myCourses().filter((course) => {
      const searchable = [
        course.title,
        course.description,
        course.category,
        course.instructorName,
        course.level
      ].join(" ").toLowerCase();
      return searchable.includes(term);
    });
  }, ...ngDevMode ? [{ debugName: "filteredCourses" }] : (
    /* istanbul ignore next */
    []
  ));
  hasCourses = computed(() => this.myCourses().length > 0, ...ngDevMode ? [{ debugName: "hasCourses" }] : (
    /* istanbul ignore next */
    []
  ));
  hasFilteredCourses = computed(() => this.filteredCourses().length > 0, ...ngDevMode ? [{ debugName: "hasFilteredCourses" }] : (
    /* istanbul ignore next */
    []
  ));
  totalLessons = computed(() => this.myCourses().reduce((sum, course) => sum + course.lessonCount, 0), ...ngDevMode ? [{ debugName: "totalLessons" }] : (
    /* istanbul ignore next */
    []
  ));
  totalMinutes = computed(() => this.myCourses().reduce((sum, course) => sum + course.durationMinutes, 0), ...ngDevMode ? [{ debugName: "totalMinutes" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    void this.loadMyCourses();
  }
  updateSearchTerm(term) {
    this.searchTerm.set(term);
  }
  formatPrice(price) {
    if (price <= 0) {
      return "Free";
    }
    return `\u09F3${price}`;
  }
  formatDuration(totalMinutes) {
    if (totalMinutes <= 0) {
      return "N/A";
    }
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if (hours === 0) {
      return `${minutes} min`;
    }
    if (minutes === 0) {
      return `${hours} hr`;
    }
    return `${hours} hr ${minutes} min`;
  }
  async loadMyCourses() {
    this.isLoading.set(true);
    this.errorMessage.set("");
    if (!this.authService.isLoggedIn()) {
      this.errorMessage.set("My Courses \u09A6\u09C7\u0996\u09A4\u09C7 \u09B9\u09B2\u09C7 \u0986\u0997\u09C7 login \u0995\u09B0\u09A4\u09C7 \u09B9\u09AC\u09C7\u0964");
      this.isLoading.set(false);
      return;
    }
    try {
      const response = await firstValueFrom(this.learningApi.getAllCourses());
      const alternative = response;
      const rawCourses = Array.isArray(response.data) ? response.data : Array.isArray(alternative.Data) ? alternative.Data : [];
      const enrollmentChecks = await Promise.all(rawCourses.map(async (course) => {
        try {
          const isEnrolled = await firstValueFrom(this.learningApi.checkMyEnrollment(course.id));
          return {
            course,
            isEnrolled
          };
        } catch {
          return {
            course,
            isEnrolled: false
          };
        }
      }));
      const enrolledOnly = enrollmentChecks.filter((item) => item.isEnrolled).map((item) => this.mapToView(item.course));
      this.myCourses.set(enrolledOnly);
    } catch {
      this.errorMessage.set("Enrolled courses \u09B2\u09CB\u09A1 \u0995\u09B0\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF\u0964 \u098F\u0995\u099F\u09C1 \u09AA\u09B0\u09C7 \u0986\u09AC\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8\u0964");
      this.myCourses.set([]);
    } finally {
      this.isLoading.set(false);
    }
  }
  mapToView(dto) {
    return {
      id: dto.id,
      title: dto.title,
      description: dto.description,
      instructorName: dto.instructorName,
      category: dto.category,
      level: this.normalizeLevel(dto.level),
      lessonCount: dto.lessonCount ?? 0,
      durationMinutes: dto.durationMinutes,
      price: dto.price
    };
  }
  normalizeLevel(level) {
    if (level === "Intermediate" || level === "Advanced") {
      return level;
    }
    return "Beginner";
  }
  static \u0275fac = function MyCourses_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyCourses)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyCourses, selectors: [["app-my-courses"]], decls: 41, vars: 8, consts: [[1, "my-courses-page"], [1, "top-navbar"], ["routerLink", "/homepage", 1, "brand"], ["src", "/Logo2.png", "alt", "Touch & Solve", 1, "brand-logo"], [1, "topbar-nav"], ["routerLink", "/homepage"], ["routerLink", "/courses"], [1, "topbar-actions"], ["type", "button", 1, "lang-toggle-btn", 3, "click"], ["routerLink", "/profile", 1, "nav-button", "nav-button-ghost"], [1, "hero"], [1, "eyebrow"], [1, "subtitle"], [1, "hero-actions"], [1, "btn", "ghost", 3, "routerLink"], [1, "btn", "solid", 3, "routerLink"], ["aria-label", "Course overview", 1, "stats"], ["aria-label", "Search enrolled courses", 1, "search-wrap"], [1, "search-field"], [1, "search-label"], ["type", "search", "placeholder", "Type title, category, instructor...", 3, "input", "value"], ["aria-live", "polite", 1, "state-block"], ["aria-live", "assertive", 1, "state-block", "error"], ["aria-label", "Enrolled courses list", 1, "course-grid"], [1, "stat-card"], [1, "course-card"], [1, "course-top-row"], [1, "badge"], [1, "tag"], [1, "desc"], ["aria-label", "Course details", 1, "meta"], [1, "card-actions"]], template: function MyCourses_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "nav", 1)(2, "a", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "a", 5);
      \u0275\u0275text(6, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 6);
      \u0275\u0275text(8, "Courses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "button", 8);
      \u0275\u0275listener("click", function MyCourses_Template_button_click_10_listener() {
        return ctx.lang.toggle();
      });
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "\u{1F310}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span");
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "a", 9);
      \u0275\u0275text(16, "\u2190 Back");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "header", 10)(18, "div")(19, "p", 11);
      \u0275\u0275text(20, "Student Space");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "h1");
      \u0275\u0275text(22, "My Enrolled Courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "p", 12);
      \u0275\u0275text(24, "\u09A4\u09C1\u09AE\u09BF \u09AF\u09C7\u09B8\u09AC \u0995\u09CB\u09B0\u09CD\u09B8\u09C7 enrolled \u0986\u099B\u09CB, \u09B8\u09AC\u0997\u09C1\u09B2\u09CB \u098F\u0996\u09BE\u09A8\u09C7 \u09A5\u09BE\u0995\u09AC\u09C7\u0964");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 13)(26, "a", 14);
      \u0275\u0275text(27, "Browse Courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "a", 15);
      \u0275\u0275text(29, "Back");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(30, MyCourses_Conditional_30_Template, 16, 3, "section", 16);
      \u0275\u0275elementStart(31, "section", 17)(32, "label", 18)(33, "span", 19);
      \u0275\u0275text(34, "Search inside my courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "input", 20);
      \u0275\u0275listener("input", function MyCourses_Template_input_input_35_listener($event) {
        return ctx.updateSearchTerm($event.target.value);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(36, MyCourses_Conditional_36_Template, 5, 0, "section", 21)(37, MyCourses_Conditional_37_Template, 7, 3, "section", 22)(38, MyCourses_Conditional_38_Template, 7, 2, "section", 21)(39, MyCourses_Conditional_39_Template, 5, 0, "section", 21)(40, MyCourses_Conditional_40_Template, 3, 0, "section", 23);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate(ctx.lang.isBangla() ? "EN" : "\u09AC\u09BE\u0982");
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c07));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c16));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.errorMessage() && ctx.hasCourses() ? 30 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.searchTerm());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 36 : ctx.errorMessage() ? 37 : !ctx.hasCourses() ? 38 : !ctx.hasFilteredCourses() ? 39 : 40);
    }
  }, dependencies: [RouterLink], styles: ["\n.top-navbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 28px;\n  margin-bottom: 24px;\n  border-radius: 0;\n  border: none;\n  border-bottom: 1px solid rgba(17, 24, 39, 0.09);\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  position: sticky;\n  top: 0;\n  z-index: 50;\n}\n.top-navbar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.top-navbar[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  height: 36px;\n  width: auto;\n  max-width: 150px;\n  object-fit: contain;\n}\n.top-navbar[_ngcontent-%COMP%]   .topbar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  margin-left: auto;\n}\n.top-navbar[_ngcontent-%COMP%]   .topbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border-radius: 999px;\n  text-decoration: none;\n  font-size: 0.87rem;\n  font-weight: 500;\n  color: rgba(17, 24, 39, 0.62);\n  transition: background 0.18s, color 0.18s;\n}\n.top-navbar[_ngcontent-%COMP%]   .topbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.top-navbar[_ngcontent-%COMP%]   .topbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.top-navbar[_ngcontent-%COMP%]   .lang-toggle-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border: 1.5px solid #2563eb;\n  border-radius: 999px;\n  background: transparent;\n  color: #2563eb;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.18s, color 0.18s;\n  white-space: nowrap;\n}\n.top-navbar[_ngcontent-%COMP%]   .lang-toggle-btn[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  color: white;\n}\n.top-navbar[_ngcontent-%COMP%]   .nav-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 36px;\n  padding: 0 16px;\n  border-radius: 999px;\n  font-size: 0.87rem;\n  font-weight: 600;\n  text-decoration: none;\n  border: 1px solid transparent;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.top-navbar[_ngcontent-%COMP%]   .nav-button-ghost[_ngcontent-%COMP%] {\n  border-color: rgba(17, 24, 39, 0.09);\n  color: rgba(17, 24, 39, 0.6);\n  background: transparent;\n}\n.top-navbar[_ngcontent-%COMP%]   .nav-button-ghost[_ngcontent-%COMP%]:hover {\n  border-color: #2563eb;\n  color: #2563eb;\n  background: #eff6ff;\n}\n.my-courses-page[_ngcontent-%COMP%] {\n  --bg: #f4f8ff;\n  --surface: #ffffff;\n  --line: #d9e5f6;\n  --text: #11243a;\n  --muted: #566a82;\n  --primary: #1e6cf4;\n  --primary-strong: #1455c8;\n  min-height: 100vh;\n  padding: 0 28px 28px;\n  background:\n    radial-gradient(\n      circle at 0% 0%,\n      rgba(30, 108, 244, 0.1),\n      transparent 34%),\n    radial-gradient(\n      circle at 100% 100%,\n      rgba(36, 167, 255, 0.1),\n      transparent 38%),\n    var(--bg);\n  color: var(--text);\n}\n.hero[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.78rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #2b62bd;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  font-size: clamp(1.8rem, 4vw, 2.6rem);\n  line-height: 1.05;\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--muted);\n  max-width: 62ch;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 0 16px;\n  border-radius: 12px;\n  border: 1px solid transparent;\n  text-decoration: none;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    background-color 0.2s ease;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.btn.solid[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #ffffff;\n  box-shadow: 0 8px 18px rgba(24, 90, 204, 0.28);\n}\n.btn.solid[_ngcontent-%COMP%]:hover {\n  background: var(--primary-strong);\n}\n.btn.ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #21456f;\n  border-color: var(--line);\n}\n.stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 14px;\n  box-shadow: 0 12px 24px rgba(25, 64, 122, 0.08);\n}\n.stat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--muted);\n}\n.stat-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  font-size: 1.5rem;\n  line-height: 1;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.search-field[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n.search-label[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #2a4563;\n}\n.search-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-height: 48px;\n  border-radius: 12px;\n  border: 1px solid var(--line);\n  padding: 0 14px;\n  background: #ffffff;\n  color: #172d45;\n  outline: none;\n}\n.search-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #5ca2ff;\n  box-shadow: 0 0 0 4px rgba(51, 128, 255, 0.14);\n}\n.state-block[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 22px;\n  box-shadow: 0 14px 30px rgba(25, 64, 122, 0.08);\n  display: grid;\n  gap: 8px;\n  justify-items: start;\n}\n.state-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.state-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.state-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--muted);\n}\n.state-block.error[_ngcontent-%COMP%] {\n  border-color: #f1c4cb;\n  background: #fffafb;\n}\n.course-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 14px;\n}\n.course-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 16px;\n  box-shadow: 0 14px 28px rgba(25, 64, 122, 0.1);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.course-top-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.badge[_ngcontent-%COMP%], \n.tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 10px;\n  border-radius: 999px;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n.badge[_ngcontent-%COMP%] {\n  background: #e8f0ff;\n  color: #1f4e9c;\n}\n.tag[_ngcontent-%COMP%] {\n  background: #eef8ff;\n  color: #186087;\n}\n.course-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.24rem;\n  line-height: 1.2;\n}\n.desc[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--muted);\n  line-height: 1.55;\n}\n.meta[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 2px 0 0;\n  padding: 0;\n  display: grid;\n  gap: 6px;\n  color: #38506d;\n  font-size: 0.95rem;\n}\n.card-actions[_ngcontent-%COMP%] {\n  margin-top: auto;\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n@media (max-width: 900px) {\n  .my-courses-page[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n  .hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=my-courses.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyCourses, [{
    type: Component,
    args: [{ selector: "app-my-courses", imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="my-courses-page">
	<!-- \u2500\u2500\u2500 TOP NAVBAR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
	<nav class="top-navbar">
		<a class="brand" routerLink="/homepage">
			<img src="/Logo2.png" alt="Touch & Solve" class="brand-logo" />
		</a>
		<div class="topbar-nav">
			<a routerLink="/homepage">Home</a>
			<a routerLink="/courses">Courses</a>
		</div>
		<div class="topbar-actions">
			<button type="button" class="lang-toggle-btn" (click)="lang.toggle()">
				<span>\u{1F310}</span>
				<span>{{ lang.isBangla() ? 'EN' : '\u09AC\u09BE\u0982' }}</span>
			</button>
			<a routerLink="/profile" class="nav-button nav-button-ghost">\u2190 Back</a>
		</div>
	</nav>

	<header class="hero">
		<div>
			<p class="eyebrow">Student Space</p>
			<h1>My Enrolled Courses</h1>
			<p class="subtitle">\u09A4\u09C1\u09AE\u09BF \u09AF\u09C7\u09B8\u09AC \u0995\u09CB\u09B0\u09CD\u09B8\u09C7 enrolled \u0986\u099B\u09CB, \u09B8\u09AC\u0997\u09C1\u09B2\u09CB \u098F\u0996\u09BE\u09A8\u09C7 \u09A5\u09BE\u0995\u09AC\u09C7\u0964</p>
		</div>

		<div class="hero-actions">
			<a class="btn ghost" [routerLink]="['/courses']">Browse Courses</a>
			<a class="btn solid" [routerLink]="['/profile']">Back</a>
		</div>
	</header>

	@if (!errorMessage() && hasCourses()) {
		<section class="stats" aria-label="Course overview">
			<article class="stat-card">
				<p>Total Courses</p>
				<h3>{{ myCourses().length }}</h3>
			</article>
			<article class="stat-card">
				<p>Total Lessons</p>
				<h3>{{ totalLessons() }}</h3>
			</article>
			<article class="stat-card">
				<p>Total Duration</p>
				<h3>{{ formatDuration(totalMinutes()) }}</h3>
			</article>
		</section>
	}

	<section class="search-wrap" aria-label="Search enrolled courses">
		<label class="search-field">
			<span class="search-label">Search inside my courses</span>
			<input
				type="search"
				placeholder="Type title, category, instructor..."
				[value]="searchTerm()"
				(input)="updateSearchTerm($any($event.target).value)"
			/>
		</label>
	</section>

	@if (isLoading()) {
		<section class="state-block" aria-live="polite">
			<h2>Loading your courses...</h2>
			<p>\u098F\u0995\u099F\u09C1 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09CB, enrolled course list \u0986\u09A8\u09BE \u09B9\u099A\u09CD\u099B\u09C7\u0964</p>
		</section>
	} @else if (errorMessage()) {
		<section class="state-block error" aria-live="assertive">
			<h2>Something went wrong</h2>
			<p>{{ errorMessage() }}</p>
			<a class="btn solid" [routerLink]="['/login']">Go to Login</a>
		</section>
	} @else if (!hasCourses()) {
		<section class="state-block" aria-live="polite">
			<h2>No enrolled course yet</h2>
			<p>\u098F\u0996\u09A8\u0993 \u0995\u09CB\u09A8\u09CB \u0995\u09CB\u09B0\u09CD\u09B8\u09C7 enrollment \u0995\u09B0\u09BE \u09B9\u09DF\u09A8\u09BF\u0964 \u09A8\u09A4\u09C1\u09A8 \u0995\u09CB\u09B0\u09CD\u09B8 \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09CB\u0964</p>
			<a class="btn solid" [routerLink]="['/courses']">Explore Courses</a>
		</section>
	} @else if (!hasFilteredCourses()) {
		<section class="state-block" aria-live="polite">
			<h2>No match found</h2>
			<p>Search term \u0985\u09A8\u09C1\u09AF\u09BE\u09DF\u09C0 \u0995\u09CB\u09A8\u09CB enrolled course \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF\u0964</p>
		</section>
	} @else {
		<section class="course-grid" aria-label="Enrolled courses list">
			@for (course of filteredCourses(); track course.id) {
				
				<article class="course-card">
					<div class="course-top-row">
						<span class="badge">{{ course.level }}</span>
						<span class="tag">{{ course.category }}</span>
					</div>

					<h3>{{ course.title }}</h3>
					<p class="desc">{{ course.description }}</p>

					<ul class="meta" aria-label="Course details">
						<li><strong>Instructor:</strong> {{ course.instructorName }}</li>
						<li><strong>Lessons:</strong> {{ course.lessonCount }}</li>
						<li><strong>Duration:</strong> {{ formatDuration(course.durationMinutes) }}</li>
						<li><strong>Price:</strong> {{ formatPrice(course.price) }}</li>
					</ul>

					<div class="card-actions">
						<a class="btn solid" [routerLink]="['/enrolled-course', course.id]">Continue Learning</a>
						<a class="btn ghost" [routerLink]="['/course-details', course.id]">Course Details</a>
					</div>
				</article>
			}
		</section>
	}
</main>
`, styles: ["/* src/app/user/my-courses/my-courses.css */\n.top-navbar {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 28px;\n  margin-bottom: 24px;\n  border-radius: 0;\n  border: none;\n  border-bottom: 1px solid rgba(17, 24, 39, 0.09);\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  position: sticky;\n  top: 0;\n  z-index: 50;\n}\n.top-navbar .brand {\n  display: inline-flex;\n  align-items: center;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.top-navbar .brand-logo {\n  height: 36px;\n  width: auto;\n  max-width: 150px;\n  object-fit: contain;\n}\n.top-navbar .topbar-nav {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  margin-left: auto;\n}\n.top-navbar .topbar-nav a {\n  padding: 7px 14px;\n  border-radius: 999px;\n  text-decoration: none;\n  font-size: 0.87rem;\n  font-weight: 500;\n  color: rgba(17, 24, 39, 0.62);\n  transition: background 0.18s, color 0.18s;\n}\n.top-navbar .topbar-nav a:hover {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.top-navbar .topbar-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.top-navbar .lang-toggle-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border: 1.5px solid #2563eb;\n  border-radius: 999px;\n  background: transparent;\n  color: #2563eb;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.18s, color 0.18s;\n  white-space: nowrap;\n}\n.top-navbar .lang-toggle-btn:hover {\n  background: #2563eb;\n  color: white;\n}\n.top-navbar .nav-button {\n  display: inline-flex;\n  align-items: center;\n  min-height: 36px;\n  padding: 0 16px;\n  border-radius: 999px;\n  font-size: 0.87rem;\n  font-weight: 600;\n  text-decoration: none;\n  border: 1px solid transparent;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.top-navbar .nav-button-ghost {\n  border-color: rgba(17, 24, 39, 0.09);\n  color: rgba(17, 24, 39, 0.6);\n  background: transparent;\n}\n.top-navbar .nav-button-ghost:hover {\n  border-color: #2563eb;\n  color: #2563eb;\n  background: #eff6ff;\n}\n.my-courses-page {\n  --bg: #f4f8ff;\n  --surface: #ffffff;\n  --line: #d9e5f6;\n  --text: #11243a;\n  --muted: #566a82;\n  --primary: #1e6cf4;\n  --primary-strong: #1455c8;\n  min-height: 100vh;\n  padding: 0 28px 28px;\n  background:\n    radial-gradient(\n      circle at 0% 0%,\n      rgba(30, 108, 244, 0.1),\n      transparent 34%),\n    radial-gradient(\n      circle at 100% 100%,\n      rgba(36, 167, 255, 0.1),\n      transparent 38%),\n    var(--bg);\n  color: var(--text);\n}\n.hero {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.eyebrow {\n  margin: 0;\n  font-size: 0.78rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #2b62bd;\n}\n.hero h1 {\n  margin: 10px 0;\n  font-size: clamp(1.8rem, 4vw, 2.6rem);\n  line-height: 1.05;\n}\n.subtitle {\n  margin: 0;\n  color: var(--muted);\n  max-width: 62ch;\n}\n.hero-actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  min-height: 44px;\n  padding: 0 16px;\n  border-radius: 12px;\n  border: 1px solid transparent;\n  text-decoration: none;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    background-color 0.2s ease;\n}\n.btn:hover {\n  transform: translateY(-1px);\n}\n.btn.solid {\n  background: var(--primary);\n  color: #ffffff;\n  box-shadow: 0 8px 18px rgba(24, 90, 204, 0.28);\n}\n.btn.solid:hover {\n  background: var(--primary-strong);\n}\n.btn.ghost {\n  background: #ffffff;\n  color: #21456f;\n  border-color: var(--line);\n}\n.stats {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.stat-card {\n  background: var(--surface);\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 14px;\n  box-shadow: 0 12px 24px rgba(25, 64, 122, 0.08);\n}\n.stat-card p {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--muted);\n}\n.stat-card h3 {\n  margin: 10px 0 0;\n  font-size: 1.5rem;\n  line-height: 1;\n}\n.search-wrap {\n  margin-bottom: 16px;\n}\n.search-field {\n  display: grid;\n  gap: 8px;\n}\n.search-label {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #2a4563;\n}\n.search-field input {\n  min-height: 48px;\n  border-radius: 12px;\n  border: 1px solid var(--line);\n  padding: 0 14px;\n  background: #ffffff;\n  color: #172d45;\n  outline: none;\n}\n.search-field input:focus {\n  border-color: #5ca2ff;\n  box-shadow: 0 0 0 4px rgba(51, 128, 255, 0.14);\n}\n.state-block {\n  background: #ffffff;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 22px;\n  box-shadow: 0 14px 30px rgba(25, 64, 122, 0.08);\n  display: grid;\n  gap: 8px;\n  justify-items: start;\n}\n.state-block h2,\n.state-block p {\n  margin: 0;\n}\n.state-block p {\n  color: var(--muted);\n}\n.state-block.error {\n  border-color: #f1c4cb;\n  background: #fffafb;\n}\n.course-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 14px;\n}\n.course-card {\n  background: #ffffff;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 16px;\n  box-shadow: 0 14px 28px rgba(25, 64, 122, 0.1);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.course-top-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.badge,\n.tag {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 10px;\n  border-radius: 999px;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n.badge {\n  background: #e8f0ff;\n  color: #1f4e9c;\n}\n.tag {\n  background: #eef8ff;\n  color: #186087;\n}\n.course-card h3 {\n  margin: 0;\n  font-size: 1.24rem;\n  line-height: 1.2;\n}\n.desc {\n  margin: 0;\n  color: var(--muted);\n  line-height: 1.55;\n}\n.meta {\n  list-style: none;\n  margin: 2px 0 0;\n  padding: 0;\n  display: grid;\n  gap: 6px;\n  color: #38506d;\n  font-size: 0.95rem;\n}\n.card-actions {\n  margin-top: auto;\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n@media (max-width: 900px) {\n  .my-courses-page {\n    padding: 18px;\n  }\n  .hero {\n    flex-direction: column;\n  }\n  .stats {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=my-courses.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyCourses, { className: "MyCourses", filePath: "app/user/my-courses/my-courses.ts", lineNumber: 27 });
})();

// src/app/user/assignment/assignment.ts
var Assignment = class _Assignment {
  static \u0275fac = function Assignment_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Assignment)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Assignment, selectors: [["app-assignment"]], decls: 24, vars: 0, consts: [[1, "assignment-page"], [1, "assign-header"], [1, "assign-list"], [1, "assign-card"], [1, "assign-icon"], [1, "assign-info"], [1, "assign-status"], ["disabled", "", 1, "assign-btn"], [1, "assign-empty"]], template: function Assignment_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "main", 0)(1, "header", 1)(2, "h1");
      \u0275\u0275text(3, "My Assignments");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "p");
      \u0275\u0275text(5, "\u09A4\u09CB\u09AE\u09BE\u09B0 \u09B8\u09AC assignment \u098F\u0996\u09BE\u09A8\u09C7 \u09A5\u09BE\u0995\u09AC\u09C7\u0964 \u09B8\u09AE\u09DF\u09AE\u09A4\u09CB \u099C\u09AE\u09BE \u09A6\u09BE\u0993!");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "section", 2)(7, "article", 3)(8, "div", 4);
      \u0275\u0275text(9, "\u{1F4DD}");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "div", 5)(11, "h2");
      \u0275\u0275text(12, "Module 1: HTML Basics");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "p");
      \u0275\u0275text(14, "Due: \u09E9\u09E6 \u098F\u09AA\u09CD\u09B0\u09BF\u09B2 \u09E8\u09E6\u09E8\u09EC");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "span", 6);
      \u0275\u0275text(16, "Status: Pending");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(17, "button", 7);
      \u0275\u0275text(18, "Submit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(19, "div", 8)(20, "h3");
      \u0275\u0275text(21, "\u0995\u09CB\u09A8\u09CB assignment \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "p");
      \u0275\u0275text(23, "\u09A8\u09A4\u09C1\u09A8 assignment \u098F\u09B2\u09C7 \u098F\u0996\u09BE\u09A8\u09C7 \u09A6\u09C7\u0996\u09A4\u09C7 \u09AA\u09BE\u09AC\u09C7\u0964");
      \u0275\u0275domElementEnd()()()();
    }
  }, styles: ["\n.assignment-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 32px 12px;\n  background:\n    linear-gradient(\n      120deg,\n      #f7faff 60%,\n      #eaf1fb 100%);\n  color: #1a2a3a;\n}\n.assign-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.assign-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.1rem;\n  margin: 0 0 8px;\n}\n.assign-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4a6a8a;\n  margin: 0;\n}\n.assign-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n  align-items: center;\n}\n.assign-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 6px 24px rgba(30, 108, 244, 0.08);\n  padding: 18px 28px;\n  min-width: 320px;\n  max-width: 420px;\n  width: 100%;\n  border: 1px solid #e3eaf5;\n}\n.assign-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  background: #eaf1fb;\n  border-radius: 50%;\n  width: 54px;\n  height: 54px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.assign-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.assign-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1.18rem;\n}\n.assign-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 2px;\n  color: #3a4a5a;\n  font-size: 0.98rem;\n}\n.assign-status[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #e67e22;\n  font-weight: 700;\n}\n.assign-btn[_ngcontent-%COMP%] {\n  background: #1e6cf4;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 8px 18px;\n  font-weight: 700;\n  font-size: 1rem;\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.assign-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 18px;\n  color: #6a7a8a;\n}\n.assign-empty[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1.1rem;\n}\n.assign-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.98rem;\n}\n@media (max-width: 600px) {\n  .assign-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 14px 10px;\n    min-width: 0;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=assignment.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Assignment, [{
    type: Component,
    args: [{ selector: "app-assignment", imports: [], template: '<main class="assignment-page">\n	<header class="assign-header">\n		<h1>My Assignments</h1>\n		<p>\u09A4\u09CB\u09AE\u09BE\u09B0 \u09B8\u09AC assignment \u098F\u0996\u09BE\u09A8\u09C7 \u09A5\u09BE\u0995\u09AC\u09C7\u0964 \u09B8\u09AE\u09DF\u09AE\u09A4\u09CB \u099C\u09AE\u09BE \u09A6\u09BE\u0993!</p>\n	</header>\n\n	<section class="assign-list">\n		<!-- Demo assignment card, later will be looped -->\n		<article class="assign-card">\n			<div class="assign-icon">\u{1F4DD}</div>\n			<div class="assign-info">\n				<h2>Module 1: HTML Basics</h2>\n				<p>Due: \u09E9\u09E6 \u098F\u09AA\u09CD\u09B0\u09BF\u09B2 \u09E8\u09E6\u09E8\u09EC</p>\n				<span class="assign-status">Status: Pending</span>\n			</div>\n			<button class="assign-btn" disabled>Submit</button>\n		</article>\n\n		<!-- Empty state -->\n		<div class="assign-empty">\n			<h3>\u0995\u09CB\u09A8\u09CB assignment \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF</h3>\n			<p>\u09A8\u09A4\u09C1\u09A8 assignment \u098F\u09B2\u09C7 \u098F\u0996\u09BE\u09A8\u09C7 \u09A6\u09C7\u0996\u09A4\u09C7 \u09AA\u09BE\u09AC\u09C7\u0964</p>\n		</div>\n	</section>\n</main>\n', styles: ["/* src/app/user/assignment/assignment.css */\n.assignment-page {\n  min-height: 100vh;\n  padding: 32px 12px;\n  background:\n    linear-gradient(\n      120deg,\n      #f7faff 60%,\n      #eaf1fb 100%);\n  color: #1a2a3a;\n}\n.assign-header {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.assign-header h1 {\n  font-size: 2.1rem;\n  margin: 0 0 8px;\n}\n.assign-header p {\n  color: #4a6a8a;\n  margin: 0;\n}\n.assign-list {\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n  align-items: center;\n}\n.assign-card {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 6px 24px rgba(30, 108, 244, 0.08);\n  padding: 18px 28px;\n  min-width: 320px;\n  max-width: 420px;\n  width: 100%;\n  border: 1px solid #e3eaf5;\n}\n.assign-icon {\n  font-size: 2.5rem;\n  background: #eaf1fb;\n  border-radius: 50%;\n  width: 54px;\n  height: 54px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.assign-info {\n  flex: 1;\n}\n.assign-info h2 {\n  margin: 0 0 4px;\n  font-size: 1.18rem;\n}\n.assign-info p {\n  margin: 0 0 2px;\n  color: #3a4a5a;\n  font-size: 0.98rem;\n}\n.assign-status {\n  font-size: 0.85rem;\n  color: #e67e22;\n  font-weight: 700;\n}\n.assign-btn {\n  background: #1e6cf4;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 8px 18px;\n  font-weight: 700;\n  font-size: 1rem;\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.assign-empty {\n  text-align: center;\n  margin-top: 18px;\n  color: #6a7a8a;\n}\n.assign-empty h3 {\n  margin: 0 0 4px;\n  font-size: 1.1rem;\n}\n.assign-empty p {\n  margin: 0;\n  font-size: 0.98rem;\n}\n@media (max-width: 600px) {\n  .assign-card {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 14px 10px;\n    min-width: 0;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=assignment.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Assignment, { className: "Assignment", filePath: "app/user/assignment/assignment.ts", lineNumber: 9 });
})();

// src/app/user/my-classes/my-classes.ts
var MyClasses = class _MyClasses {
  static \u0275fac = function MyClasses_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyClasses)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyClasses, selectors: [["app-my-classes"]], decls: 24, vars: 0, consts: [[1, "my-classes-page"], [1, "class-header"], [1, "class-list"], [1, "class-card"], [1, "class-icon"], [1, "class-info"], [1, "class-status"], ["disabled", "", 1, "class-btn"], [1, "class-empty"]], template: function MyClasses_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "main", 0)(1, "header", 1)(2, "h1");
      \u0275\u0275text(3, "My Classes");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "p");
      \u0275\u0275text(5, "\u09A4\u09C1\u09AE\u09BF \u09AF\u09C7\u09B8\u09AC \u0995\u09CD\u09B2\u09BE\u09B8\u09C7 enrolled, \u09B8\u09C7\u0997\u09C1\u09B2\u09CB \u098F\u0996\u09BE\u09A8\u09C7 \u09A5\u09BE\u0995\u09AC\u09C7\u0964");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "section", 2)(7, "article", 3)(8, "div", 4);
      \u0275\u0275text(9, "\u{1F4DA}");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "div", 5)(11, "h2");
      \u0275\u0275text(12, "Web Development Batch 2026");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "p");
      \u0275\u0275text(14, "Instructor: \u099C\u09A8\u09BE\u09AC \u09B0\u09BE\u0995\u09BF\u09AC\u09C1\u09B2 \u0987\u09B8\u09B2\u09BE\u09AE");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "span", 6);
      \u0275\u0275text(16, "Status: Running");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(17, "button", 7);
      \u0275\u0275text(18, "Join");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(19, "div", 8)(20, "h3");
      \u0275\u0275text(21, "\u0995\u09CB\u09A8\u09CB \u0995\u09CD\u09B2\u09BE\u09B8 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "p");
      \u0275\u0275text(23, "\u0995\u09CD\u09B2\u09BE\u09B8\u09C7 join \u0995\u09B0\u09B2\u09C7 \u098F\u0996\u09BE\u09A8\u09C7 \u09A6\u09C7\u0996\u09A4\u09C7 \u09AA\u09BE\u09AC\u09C7\u0964");
      \u0275\u0275domElementEnd()()()();
    }
  }, styles: ["\n.my-classes-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 32px 12px;\n  background:\n    linear-gradient(\n      120deg,\n      #f7faff 60%,\n      #eaf1fb 100%);\n  color: #1a2a3a;\n}\n.class-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.class-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.1rem;\n  margin: 0 0 8px;\n}\n.class-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4a6a8a;\n  margin: 0;\n}\n.class-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n  align-items: center;\n}\n.class-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 6px 24px rgba(30, 108, 244, 0.08);\n  padding: 18px 28px;\n  min-width: 320px;\n  max-width: 420px;\n  width: 100%;\n  border: 1px solid #e3eaf5;\n}\n.class-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  background: #eaf1fb;\n  border-radius: 50%;\n  width: 54px;\n  height: 54px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.class-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.class-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1.18rem;\n}\n.class-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 2px;\n  color: #3a4a5a;\n  font-size: 0.98rem;\n}\n.class-status[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #1e6cf4;\n  font-weight: 700;\n}\n.class-btn[_ngcontent-%COMP%] {\n  background: #1e6cf4;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 8px 18px;\n  font-weight: 700;\n  font-size: 1rem;\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.class-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 18px;\n  color: #6a7a8a;\n}\n.class-empty[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1.1rem;\n}\n.class-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.98rem;\n}\n@media (max-width: 600px) {\n  .class-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 14px 10px;\n    min-width: 0;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=my-classes.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyClasses, [{
    type: Component,
    args: [{ selector: "app-my-classes", imports: [], template: '<main class="my-classes-page">\n	<header class="class-header">\n		<h1>My Classes</h1>\n		<p>\u09A4\u09C1\u09AE\u09BF \u09AF\u09C7\u09B8\u09AC \u0995\u09CD\u09B2\u09BE\u09B8\u09C7 enrolled, \u09B8\u09C7\u0997\u09C1\u09B2\u09CB \u098F\u0996\u09BE\u09A8\u09C7 \u09A5\u09BE\u0995\u09AC\u09C7\u0964</p>\n	</header>\n\n	<section class="class-list">\n		<!-- Demo class card, later will be looped -->\n		<article class="class-card">\n			<div class="class-icon">\u{1F4DA}</div>\n			<div class="class-info">\n				<h2>Web Development Batch 2026</h2>\n				<p>Instructor: \u099C\u09A8\u09BE\u09AC \u09B0\u09BE\u0995\u09BF\u09AC\u09C1\u09B2 \u0987\u09B8\u09B2\u09BE\u09AE</p>\n				<span class="class-status">Status: Running</span>\n			</div>\n			<button class="class-btn" disabled>Join</button>\n		</article>\n\n		<!-- Empty state -->\n		<div class="class-empty">\n			<h3>\u0995\u09CB\u09A8\u09CB \u0995\u09CD\u09B2\u09BE\u09B8 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF</h3>\n			<p>\u0995\u09CD\u09B2\u09BE\u09B8\u09C7 join \u0995\u09B0\u09B2\u09C7 \u098F\u0996\u09BE\u09A8\u09C7 \u09A6\u09C7\u0996\u09A4\u09C7 \u09AA\u09BE\u09AC\u09C7\u0964</p>\n		</div>\n	</section>\n</main>\n', styles: ["/* src/app/user/my-classes/my-classes.css */\n.my-classes-page {\n  min-height: 100vh;\n  padding: 32px 12px;\n  background:\n    linear-gradient(\n      120deg,\n      #f7faff 60%,\n      #eaf1fb 100%);\n  color: #1a2a3a;\n}\n.class-header {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.class-header h1 {\n  font-size: 2.1rem;\n  margin: 0 0 8px;\n}\n.class-header p {\n  color: #4a6a8a;\n  margin: 0;\n}\n.class-list {\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n  align-items: center;\n}\n.class-card {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 6px 24px rgba(30, 108, 244, 0.08);\n  padding: 18px 28px;\n  min-width: 320px;\n  max-width: 420px;\n  width: 100%;\n  border: 1px solid #e3eaf5;\n}\n.class-icon {\n  font-size: 2.5rem;\n  background: #eaf1fb;\n  border-radius: 50%;\n  width: 54px;\n  height: 54px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.class-info {\n  flex: 1;\n}\n.class-info h2 {\n  margin: 0 0 4px;\n  font-size: 1.18rem;\n}\n.class-info p {\n  margin: 0 0 2px;\n  color: #3a4a5a;\n  font-size: 0.98rem;\n}\n.class-status {\n  font-size: 0.85rem;\n  color: #1e6cf4;\n  font-weight: 700;\n}\n.class-btn {\n  background: #1e6cf4;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 8px 18px;\n  font-weight: 700;\n  font-size: 1rem;\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.class-empty {\n  text-align: center;\n  margin-top: 18px;\n  color: #6a7a8a;\n}\n.class-empty h3 {\n  margin: 0 0 4px;\n  font-size: 1.1rem;\n}\n.class-empty p {\n  margin: 0;\n  font-size: 0.98rem;\n}\n@media (max-width: 600px) {\n  .class-card {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 14px 10px;\n    min-width: 0;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=my-classes.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyClasses, { className: "MyClasses", filePath: "app/user/my-classes/my-classes.ts", lineNumber: 9 });
})();

// src/app/user/certificates/certificates.ts
var Certificates = class _Certificates {
  static \u0275fac = function Certificates_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Certificates)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Certificates, selectors: [["app-certificates"]], decls: 24, vars: 0, consts: [[1, "certificates-page"], [1, "cert-header"], [1, "cert-list"], [1, "cert-card"], [1, "cert-icon"], [1, "cert-info"], [1, "cert-id"], ["disabled", "", 1, "cert-btn"], [1, "cert-empty"]], template: function Certificates_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "main", 0)(1, "header", 1)(2, "h1");
      \u0275\u0275text(3, "My Certificates");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "p");
      \u0275\u0275text(5, "\u09A4\u09C1\u09AE\u09BF \u09AF\u09C7\u09B8\u09AC \u0995\u09CB\u09B0\u09CD\u09B8\u09C7 \u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u09AA\u09BE\u09B6 \u0995\u09B0\u09C7\u099B\u09CB, \u09B8\u09C7\u0997\u09C1\u09B2\u09CB\u09B0 certificate \u098F\u0996\u09BE\u09A8\u09C7 \u09A5\u09BE\u0995\u09AC\u09C7\u0964");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "section", 2)(7, "article", 3)(8, "div", 4);
      \u0275\u0275text(9, "\u{1F393}");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "div", 5)(11, "h2");
      \u0275\u0275text(12, "Angular Basics");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "p");
      \u0275\u0275text(14, "Completion Date: \u09E8\u09E6\u09E8\u09EC-\u09E6\u09EA-\u09E8\u09ED");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "span", 6);
      \u0275\u0275text(16, "Certificate ID: DEMO12345");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(17, "button", 7);
      \u0275\u0275text(18, "Download");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(19, "div", 8)(20, "h3");
      \u0275\u0275text(21, "\u0995\u09CB\u09A8\u09CB certificate \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "p");
      \u0275\u0275text(23, "\u0995\u09CB\u09B0\u09CD\u09B8 \u09B6\u09C7\u09B7 \u0995\u09B0\u09B2\u09C7 \u098F\u0996\u09BE\u09A8\u09C7 certificate \u09A6\u09C7\u0996\u09A4\u09C7 \u09AA\u09BE\u09AC\u09C7\u0964");
      \u0275\u0275domElementEnd()()()();
    }
  }, styles: ["\n.certificates-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 32px 12px;\n  background:\n    linear-gradient(\n      120deg,\n      #f7faff 60%,\n      #eaf1fb 100%);\n  color: #1a2a3a;\n}\n.cert-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.cert-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.1rem;\n  margin: 0 0 8px;\n}\n.cert-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4a6a8a;\n  margin: 0;\n}\n.cert-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n  align-items: center;\n}\n.cert-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 6px 24px rgba(30, 108, 244, 0.08);\n  padding: 18px 28px;\n  min-width: 320px;\n  max-width: 420px;\n  width: 100%;\n  border: 1px solid #e3eaf5;\n}\n.cert-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  background: #eaf1fb;\n  border-radius: 50%;\n  width: 54px;\n  height: 54px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cert-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.cert-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1.18rem;\n}\n.cert-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 2px;\n  color: #3a4a5a;\n  font-size: 0.98rem;\n}\n.cert-id[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #6a7a8a;\n}\n.cert-btn[_ngcontent-%COMP%] {\n  background: #1e6cf4;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 8px 18px;\n  font-weight: 700;\n  font-size: 1rem;\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.cert-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 18px;\n  color: #6a7a8a;\n}\n.cert-empty[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1.1rem;\n}\n.cert-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.98rem;\n}\n@media (max-width: 600px) {\n  .cert-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 14px 10px;\n    min-width: 0;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=certificates.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Certificates, [{
    type: Component,
    args: [{ selector: "app-certificates", imports: [], template: '<main class="certificates-page">\n	<header class="cert-header">\n		<h1>My Certificates</h1>\n		<p>\u09A4\u09C1\u09AE\u09BF \u09AF\u09C7\u09B8\u09AC \u0995\u09CB\u09B0\u09CD\u09B8\u09C7 \u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u09AA\u09BE\u09B6 \u0995\u09B0\u09C7\u099B\u09CB, \u09B8\u09C7\u0997\u09C1\u09B2\u09CB\u09B0 certificate \u098F\u0996\u09BE\u09A8\u09C7 \u09A5\u09BE\u0995\u09AC\u09C7\u0964</p>\n	</header>\n\n	<section class="cert-list">\n		<!-- Demo certificate card, later will be looped -->\n		<article class="cert-card">\n			<div class="cert-icon">\u{1F393}</div>\n			<div class="cert-info">\n				<h2>Angular Basics</h2>\n				<p>Completion Date: \u09E8\u09E6\u09E8\u09EC-\u09E6\u09EA-\u09E8\u09ED</p>\n				<span class="cert-id">Certificate ID: DEMO12345</span>\n			</div>\n			<button class="cert-btn" disabled>Download</button>\n		</article>\n\n		<!-- Empty state -->\n		<div class="cert-empty">\n			<h3>\u0995\u09CB\u09A8\u09CB certificate \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF</h3>\n			<p>\u0995\u09CB\u09B0\u09CD\u09B8 \u09B6\u09C7\u09B7 \u0995\u09B0\u09B2\u09C7 \u098F\u0996\u09BE\u09A8\u09C7 certificate \u09A6\u09C7\u0996\u09A4\u09C7 \u09AA\u09BE\u09AC\u09C7\u0964</p>\n		</div>\n	</section>\n</main>\n', styles: ["/* src/app/user/certificates/certificates.css */\n.certificates-page {\n  min-height: 100vh;\n  padding: 32px 12px;\n  background:\n    linear-gradient(\n      120deg,\n      #f7faff 60%,\n      #eaf1fb 100%);\n  color: #1a2a3a;\n}\n.cert-header {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.cert-header h1 {\n  font-size: 2.1rem;\n  margin: 0 0 8px;\n}\n.cert-header p {\n  color: #4a6a8a;\n  margin: 0;\n}\n.cert-list {\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n  align-items: center;\n}\n.cert-card {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 6px 24px rgba(30, 108, 244, 0.08);\n  padding: 18px 28px;\n  min-width: 320px;\n  max-width: 420px;\n  width: 100%;\n  border: 1px solid #e3eaf5;\n}\n.cert-icon {\n  font-size: 2.5rem;\n  background: #eaf1fb;\n  border-radius: 50%;\n  width: 54px;\n  height: 54px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cert-info {\n  flex: 1;\n}\n.cert-info h2 {\n  margin: 0 0 4px;\n  font-size: 1.18rem;\n}\n.cert-info p {\n  margin: 0 0 2px;\n  color: #3a4a5a;\n  font-size: 0.98rem;\n}\n.cert-id {\n  font-size: 0.85rem;\n  color: #6a7a8a;\n}\n.cert-btn {\n  background: #1e6cf4;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 8px 18px;\n  font-weight: 700;\n  font-size: 1rem;\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.cert-empty {\n  text-align: center;\n  margin-top: 18px;\n  color: #6a7a8a;\n}\n.cert-empty h3 {\n  margin: 0 0 4px;\n  font-size: 1.1rem;\n}\n.cert-empty p {\n  margin: 0;\n  font-size: 0.98rem;\n}\n@media (max-width: 600px) {\n  .cert-card {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 14px 10px;\n    min-width: 0;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=certificates.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Certificates, { className: "Certificates", filePath: "app/user/certificates/certificates.ts", lineNumber: 9 });
})();

// src/app/base/quiz-editor/quiz-editor.ts
var _c08 = () => ["A", "B", "C", "D"];
var _forTrack06 = ($index, $item) => $item.id;
function QuizEditorComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("notice-error", ctx_r0.noticeType() === "error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.notice());
  }
}
function QuizEditorComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function QuizEditorComponent_For_17_Template_button_click_0_listener() {
      const n_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setQuizCount(n_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.quizCount() === n_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r3);
  }
}
function QuizEditorComponent_For_20_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "label")(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 22);
    \u0275\u0275listener("change", function QuizEditorComponent_For_20_For_9_Template_input_change_4_listener() {
      const opt_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const \u0275$index_36_r5 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateForm(\u0275$index_36_r5, "correctAnswer", opt_r7));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 23);
    \u0275\u0275text(6, "\u2713 Correct");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "input", 24);
    \u0275\u0275listener("input", function QuizEditorComponent_For_20_For_9_Template_input_input_7_listener($event) {
      const opt_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const \u0275$index_36_r5 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateForm(\u0275$index_36_r5, opt_r7 === "A" ? "optionA" : opt_r7 === "B" ? "optionB" : opt_r7 === "C" ? "optionC" : "optionD", $event.target.value));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r7 = ctx.$implicit;
    const ctx_r7 = \u0275\u0275nextContext();
    const form_r9 = ctx_r7.$implicit;
    const \u0275$index_36_r5 = ctx_r7.$index;
    \u0275\u0275classProp("correct", form_r9.correctAnswer === opt_r7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(opt_r7);
    \u0275\u0275advance();
    \u0275\u0275property("name", "correct_" + \u0275$index_36_r5)("value", opt_r7)("checked", form_r9.correctAnswer === opt_r7);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", opt_r7 === "A" ? form_r9.optionA : opt_r7 === "B" ? form_r9.optionB : opt_r7 === "C" ? form_r9.optionC : form_r9.optionD)("placeholder", "Option " + opt_r7);
  }
}
function QuizEditorComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16)(4, "label");
    \u0275\u0275text(5, "Question");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "textarea", 17);
    \u0275\u0275listener("input", function QuizEditorComponent_For_20_Template_textarea_input_6_listener($event) {
      const \u0275$index_36_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateForm(\u0275$index_36_r5, "question", $event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 18);
    \u0275\u0275repeaterCreate(8, QuizEditorComponent_For_20_For_9_Template, 8, 8, "div", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const form_r9 = ctx.$implicit;
    const \u0275$index_36_r5 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Q", \u0275$index_36_r5 + 1);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", form_r9.question);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(2, _c08));
  }
}
function QuizEditorComponent_Conditional_23_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 28);
    \u0275\u0275listener("click", function QuizEditorComponent_Conditional_23_For_4_Template_button_click_6_listener() {
      const q_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteQuiz(q_r11.id));
    });
    \u0275\u0275text(7, "\u{1F5D1}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 29)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const q_r11 = ctx.$implicit;
    const \u0275$index_75_r12 = ctx.$index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q", \u0275$index_75_r12 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r11.question);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("correct-opt", q_r11.correctAnswer === "A");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("A: ", q_r11.optionA);
    \u0275\u0275advance();
    \u0275\u0275classProp("correct-opt", q_r11.correctAnswer === "B");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("B: ", q_r11.optionB);
    \u0275\u0275advance();
    \u0275\u0275classProp("correct-opt", q_r11.correctAnswer === "C");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("C: ", q_r11.optionC);
    \u0275\u0275advance();
    \u0275\u0275classProp("correct-opt", q_r11.correctAnswer === "D");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("D: ", q_r11.optionD);
  }
}
function QuizEditorComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 12)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, QuizEditorComponent_Conditional_23_For_4_Template, 17, 14, "div", 25, _forTrack06);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Saved Quizzes (", ctx_r0.quizzes().length, ")");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.quizzes());
  }
}
var QuizEditorComponent = class _QuizEditorComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  api = inject(LearningApiService);
  lessonId = signal("", ...ngDevMode ? [{ debugName: "lessonId" }] : (
    /* istanbul ignore next */
    []
  ));
  lessonTitle = signal("", ...ngDevMode ? [{ debugName: "lessonTitle" }] : (
    /* istanbul ignore next */
    []
  ));
  quizzes = signal([], ...ngDevMode ? [{ debugName: "quizzes" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  isSaving = signal(false, ...ngDevMode ? [{ debugName: "isSaving" }] : (
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
  // কতটা quiz field দেখাবে
  quizCount = signal(1, ...ngDevMode ? [{ debugName: "quizCount" }] : (
    /* istanbul ignore next */
    []
  ));
  maxQuiz = 20;
  forms = signal([this.emptyForm(1)], ...ngDevMode ? [{ debugName: "forms" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("lessonId") ?? "";
    const title = this.route.snapshot.queryParamMap.get("title") ?? "";
    this.lessonId.set(id);
    this.lessonTitle.set(title);
    this.loadQuizzes();
  }
  emptyForm(order) {
    return {
      question: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      correctAnswer: "",
      orderIndex: order
    };
  }
  setQuizCount(count) {
    this.quizCount.set(count);
    const current = this.forms();
    const newForms = [];
    for (let i = 0; i < count; i++) {
      newForms.push(current[i] ?? this.emptyForm(i + 1));
    }
    this.forms.set(newForms);
  }
  updateForm(index, field, value) {
    const updated = [...this.forms()];
    updated[index][field] = value;
    this.forms.set(updated);
  }
  async loadQuizzes() {
    this.isLoading.set(true);
    try {
      const res = await firstValueFrom(this.api.getQuizzesByLesson(this.lessonId()));
      const data = res?.Data ?? res?.data ?? [];
      this.quizzes.set(Array.isArray(data) ? data : []);
    } catch {
      this.quizzes.set([]);
    } finally {
      this.isLoading.set(false);
    }
  }
  async saveAll() {
    const forms = this.forms();
    for (const form of forms) {
      if (!form.question.trim() || !form.correctAnswer)
        continue;
      await firstValueFrom(this.api.addQuiz(this.lessonId(), {
        question: form.question,
        optionA: form.optionA,
        optionB: form.optionB,
        optionC: form.optionC,
        optionD: form.optionD,
        correctAnswer: form.correctAnswer,
        orderIndex: form.orderIndex
      }));
    }
    this.showNotice("Quiz saved successfully!", "success");
    await this.loadQuizzes();
    this.forms.set([this.emptyForm(1)]);
    this.quizCount.set(1);
  }
  async deleteQuiz(id) {
    const confirmDelete = confirm("DO you want to delete this quiz?");
    if (confirmDelete) {
      await firstValueFrom(this.api.deleteQuiz(id));
      this.showNotice("Quiz Deleted Successfully", "success");
      await this.loadQuizzes();
    } else {
      return;
    }
  }
  showNotice(msg, type) {
    this.notice.set(msg);
    this.noticeType.set(type);
    setTimeout(() => this.notice.set(""), 3e3);
  }
  goBack() {
    this.router.navigate(["/teacher"]);
  }
  get quizCountOptions() {
    return Array.from({ length: this.maxQuiz }, (_, i) => i + 1);
  }
  static \u0275fac = function QuizEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizEditorComponent, selectors: [["app-quiz-editor"]], decls: 24, vars: 5, consts: [[1, "quiz-page"], [1, "quiz-header"], ["type", "button", 1, "back-btn", 3, "click"], [1, "quiz-subtitle"], [1, "notice", 3, "notice-error"], [1, "quiz-count-section"], [1, "count-label"], [1, "count-pills"], ["type", "button", 1, "count-pill", 3, "active"], [1, "quiz-forms", 3, "ngSubmit"], [1, "quiz-form-card"], ["type", "submit", 1, "save-btn", 3, "disabled"], [1, "existing-quizzes"], [1, "notice"], ["type", "button", 1, "count-pill", 3, "click"], [1, "quiz-form-number"], [1, "form-field"], ["rows", "2", "placeholder", "Enter question...", 3, "input", "value"], [1, "options-grid"], [1, "form-field", "option-field", 3, "correct"], [1, "form-field", "option-field"], [1, "opt-label"], ["type", "radio", 3, "change", "name", "value", "checked"], [1, "correct-tag"], ["type", "text", 3, "input", "value", "placeholder"], [1, "existing-card"], [1, "existing-header"], [1, "existing-num"], ["type", "button", 1, "delete-btn", 3, "click"], [1, "existing-options"]], template: function QuizEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "button", 2);
      \u0275\u0275listener("click", function QuizEditorComponent_Template_button_click_2_listener() {
        return ctx.goBack();
      });
      \u0275\u0275text(3, "\u2190 Back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "h1");
      \u0275\u0275text(6, "Quiz Editor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 3);
      \u0275\u0275text(8, "Lesson: ");
      \u0275\u0275elementStart(9, "strong");
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(11, QuizEditorComponent_Conditional_11_Template, 2, 3, "div", 4);
      \u0275\u0275elementStart(12, "section", 5)(13, "label", 6);
      \u0275\u0275text(14, "How many quizzes do you want to add?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 7);
      \u0275\u0275repeaterCreate(16, QuizEditorComponent_For_17_Template, 2, 3, "button", 8, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "form", 9);
      \u0275\u0275listener("ngSubmit", function QuizEditorComponent_Template_form_ngSubmit_18_listener() {
        return ctx.saveAll();
      });
      \u0275\u0275repeaterCreate(19, QuizEditorComponent_For_20_Template, 10, 3, "div", 10, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementStart(21, "button", 11);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(23, QuizEditorComponent_Conditional_23_Template, 5, 1, "section", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.lessonTitle());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.notice() ? 11 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.quizCountOptions);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.forms());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isSaving());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isSaving() ? "Saving..." : "\u{1F4BE} Save All Quiz", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.quizzes().length > 0 ? 23 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm, RouterModule], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background: #f8f8ff;\n}\n.quiz-page[_ngcontent-%COMP%] {\n  max-width: 860px;\n  margin: 0 auto;\n  padding: 32px 24px 80px;\n  font-family: "Inter", sans-serif;\n  background: #f8f8ff;\n  min-height: 100vh;\n  color: #111827;\n}\n.quiz-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px 16px;\n  border-radius: 999px;\n  border: 1px solid rgba(17, 24, 39, 0.12);\n  background: white;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.87rem;\n  transition: background 0.18s;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.quiz-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  margin: 0 0 4px;\n  color: #111827;\n}\n.quiz-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: rgba(17, 24, 39, 0.55);\n  margin: 0;\n}\n.notice[_ngcontent-%COMP%] {\n  padding: 12px 18px;\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 0.9rem;\n  margin-bottom: 20px;\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #6ee7b7;\n}\n.notice-error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.quiz-count-section[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.count-label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  font-size: 0.95rem;\n  margin-bottom: 12px;\n  color: #111827;\n}\n.count-pills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.count-pill[_ngcontent-%COMP%] {\n  color: #111827;\n  min-width: 42px;\n  min-height: 42px;\n  border-radius: 10px;\n  border: 1.5px solid rgba(17, 24, 39, 0.12);\n  background: white;\n  font-weight: 700;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.count-pill[_ngcontent-%COMP%]:hover {\n  border-color: #7c3aed;\n  color: #7c3aed;\n}\n.count-pill.active[_ngcontent-%COMP%] {\n  background: #7c3aed;\n  color: white;\n  border-color: #7c3aed;\n  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.30);\n}\n.quiz-forms[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.quiz-form-card[_ngcontent-%COMP%] {\n  color: #111827;\n  background: white;\n  border: 1px solid rgba(17, 24, 39, 0.10);\n  border-radius: 18px;\n  padding: 24px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n  position: relative;\n}\n.quiz-form-number[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -14px;\n  left: 20px;\n  background: #7c3aed;\n  color: white;\n  font-weight: 800;\n  font-size: 0.85rem;\n  padding: 4px 14px;\n  border-radius: 999px;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 14px;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #374151;\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: rgba(17, 24, 39, 0.65);\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  color: #111827;\n  width: 100%;\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 1.5px solid rgba(17, 24, 39, 0.12);\n  font-size: 0.92rem;\n  font-family: "Inter", sans-serif;\n  outline: none;\n  transition: border-color 0.18s, box-shadow 0.18s;\n  resize: none;\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #7c3aed;\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.12);\n}\n.options-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.option-field[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  padding: 12px;\n  border: 1.5px solid rgba(17, 24, 39, 0.10);\n  background: #f9fafb;\n  transition: border-color 0.18s, background 0.18s;\n}\n.option-field.correct[_ngcontent-%COMP%] {\n  border-color: #10b981;\n  background: #f0fdf4;\n}\n.option-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n  cursor: pointer;\n}\n.opt-label[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 26px;\n  height: 26px;\n  border-radius: 6px;\n  background: rgba(124, 58, 237, 0.10);\n  color: #7c3aed;\n  font-weight: 800;\n  font-size: 0.82rem;\n}\n.correct-tag[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: #10b981;\n  margin-left: auto;\n  opacity: 0;\n  transition: opacity 0.18s;\n}\n.option-field.correct[_ngcontent-%COMP%]   .correct-tag[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.option-field[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  accent-color: #7c3aed;\n  width: 16px;\n  height: 16px;\n}\n.option-field[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  background: white;\n}\n.save-btn[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: 24px;\n  min-height: 52px;\n  border-radius: 12px;\n  background: #7c3aed;\n  color: white;\n  font-size: 1rem;\n  font-weight: 700;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.30);\n  transition:\n    transform 0.2s,\n    box-shadow 0.2s,\n    background 0.2s;\n  font-family: "Inter", sans-serif;\n}\n.save-btn[_ngcontent-%COMP%]:hover {\n  background: #6d28d9;\n  transform: translateY(-2px);\n  box-shadow: 0 10px 28px rgba(124, 58, 237, 0.38);\n}\n.save-btn[_ngcontent-%COMP%]:disabled {\n  background: #d1d5db;\n  box-shadow: none;\n  cursor: not-allowed;\n  transform: none;\n}\n.existing-quizzes[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.existing-quizzes[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #111827;\n  font-size: 1.2rem;\n  font-weight: 800;\n  margin-bottom: 16px;\n}\n.existing-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid rgba(17, 24, 39, 0.10);\n  border-radius: 14px;\n  padding: 16px 18px;\n  margin-bottom: 10px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);\n}\n.existing-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.existing-num[_ngcontent-%COMP%] {\n  background: #7c3aed;\n  color: white;\n  font-weight: 800;\n  font-size: 0.78rem;\n  padding: 3px 10px;\n  border-radius: 999px;\n  flex-shrink: 0;\n}\n.existing-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #111827;\n  flex: 1;\n  font-size: 0.95rem;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1.1rem;\n  padding: 4px;\n  border-radius: 6px;\n  transition: background 0.18s;\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n.existing-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.existing-options[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  background: #f3f4f6;\n  color: rgba(17, 24, 39, 0.65);\n  font-weight: 500;\n}\n.existing-options[_ngcontent-%COMP%]   .correct-opt[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n  font-weight: 700;\n}\n/*# sourceMappingURL=quiz-editor.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuizEditorComponent, [{
    type: Component,
    args: [{ selector: "app-quiz-editor", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="quiz-page">

  <header class="quiz-header">
    <button type="button" class="back-btn" (click)="goBack()">\u2190 Back</button>
    <div>
      <h1>Quiz Editor</h1>
      <p class="quiz-subtitle">Lesson: <strong>{{ lessonTitle() }}</strong></p>
    </div>
  </header>

  @if (notice()) {
    <div class="notice" [class.notice-error]="noticeType() === 'error'">{{ notice() }}</div>
  }

  <!-- \u0995\u09A4\u099F\u09BE quiz \u09AF\u09CB\u0997 \u0995\u09B0\u09AC\u09C7 -->
  <section class="quiz-count-section">
    <label class="count-label">How many quizzes do you want to add?</label>
    <div class="count-pills">
      @for (n of quizCountOptions; track n) {
        <button type="button"
          class="count-pill"
          [class.active]="quizCount() === n"
          (click)="setQuizCount(n)">{{ n }}</button>
      }
    </div>
  </section>

  <!-- Quiz forms -->
  <form class="quiz-forms" (ngSubmit)="saveAll()">
    @for (form of forms(); track $index; let i = $index) {
      <div class="quiz-form-card">
        <div class="quiz-form-number">Q{{ i + 1 }}</div>

        <div class="form-field">
          <label>Question</label>
          <textarea
            rows="2"
            [value]="form.question"
            (input)="updateForm(i, 'question', $any($event.target).value)"
            placeholder="Enter question..."
          ></textarea>
        </div>

        <div class="options-grid">
          @for (opt of ['A','B','C','D']; track opt) {
            <div class="form-field option-field"
              [class.correct]="form.correctAnswer === opt">
              <label>
                <span class="opt-label">{{ opt }}</span>
                <input type="radio"
                  [name]="'correct_' + i"
                  [value]="opt"
                  [checked]="form.correctAnswer === opt"
                  (change)="updateForm(i, 'correctAnswer', opt)"
                />
                <span class="correct-tag">\u2713 Correct</span>
              </label>
              <input type="text"
                [value]="opt === 'A' ? form.optionA : opt === 'B' ? form.optionB : opt === 'C' ? form.optionC : form.optionD"
                (input)="updateForm(i, opt === 'A' ? 'optionA' : opt === 'B' ? 'optionB' : opt === 'C' ? 'optionC' : 'optionD', $any($event.target).value)"
                [placeholder]="'Option ' + opt"
              />
            </div>
          }
        </div>
      </div>
    }

    <button type="submit" class="save-btn" [disabled]="isSaving()">
      {{ isSaving() ? 'Saving...' : '\u{1F4BE} Save All Quiz' }}
    </button>
  </form>

  <!-- Existing quizzes -->
  @if (quizzes().length > 0) {
    <section class="existing-quizzes">
      <h2>Saved Quizzes ({{ quizzes().length }})</h2>
      @for (q of quizzes(); track q.id; let i = $index) {
        <div class="existing-card">
          <div class="existing-header">
            <span class="existing-num">Q{{ i + 1 }}</span>
            <strong>{{ q.question }}</strong>
            <button type="button" class="delete-btn" (click)="deleteQuiz(q.id)">\u{1F5D1}</button>
          </div>
          <div class="existing-options">
            <span [class.correct-opt]="q.correctAnswer === 'A'">A: {{ q.optionA }}</span>
            <span [class.correct-opt]="q.correctAnswer === 'B'">B: {{ q.optionB }}</span>
            <span [class.correct-opt]="q.correctAnswer === 'C'">C: {{ q.optionC }}</span>
            <span [class.correct-opt]="q.correctAnswer === 'D'">D: {{ q.optionD }}</span>
          </div>
        </div>
      }
    </section>
  }

</div>`, styles: ['/* src/app/base/quiz-editor/quiz-editor.css */\n:host {\n  display: block;\n  min-height: 100vh;\n  background: #f8f8ff;\n}\n.quiz-page {\n  max-width: 860px;\n  margin: 0 auto;\n  padding: 32px 24px 80px;\n  font-family: "Inter", sans-serif;\n  background: #f8f8ff;\n  min-height: 100vh;\n  color: #111827;\n}\n.quiz-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.back-btn {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px 16px;\n  border-radius: 999px;\n  border: 1px solid rgba(17, 24, 39, 0.12);\n  background: white;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.87rem;\n  transition: background 0.18s;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.back-btn:hover {\n  background: #f3f4f6;\n}\n.quiz-header h1 {\n  font-size: 1.8rem;\n  font-weight: 800;\n  margin: 0 0 4px;\n  color: #111827;\n}\n.quiz-subtitle {\n  font-size: 0.9rem;\n  color: rgba(17, 24, 39, 0.55);\n  margin: 0;\n}\n.notice {\n  padding: 12px 18px;\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 0.9rem;\n  margin-bottom: 20px;\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #6ee7b7;\n}\n.notice-error {\n  background: #fee2e2;\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.quiz-count-section {\n  margin-bottom: 28px;\n}\n.count-label {\n  display: block;\n  font-weight: 700;\n  font-size: 0.95rem;\n  margin-bottom: 12px;\n  color: #111827;\n}\n.count-pills {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.count-pill {\n  color: #111827;\n  min-width: 42px;\n  min-height: 42px;\n  border-radius: 10px;\n  border: 1.5px solid rgba(17, 24, 39, 0.12);\n  background: white;\n  font-weight: 700;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.count-pill:hover {\n  border-color: #7c3aed;\n  color: #7c3aed;\n}\n.count-pill.active {\n  background: #7c3aed;\n  color: white;\n  border-color: #7c3aed;\n  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.30);\n}\n.quiz-forms {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.quiz-form-card {\n  color: #111827;\n  background: white;\n  border: 1px solid rgba(17, 24, 39, 0.10);\n  border-radius: 18px;\n  padding: 24px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n  position: relative;\n}\n.quiz-form-number {\n  position: absolute;\n  top: -14px;\n  left: 20px;\n  background: #7c3aed;\n  color: white;\n  font-weight: 800;\n  font-size: 0.85rem;\n  padding: 4px 14px;\n  border-radius: 999px;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 14px;\n}\n.form-field label {\n  color: #374151;\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: rgba(17, 24, 39, 0.65);\n}\n.form-field input,\n.form-field textarea {\n  color: #111827;\n  width: 100%;\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 1.5px solid rgba(17, 24, 39, 0.12);\n  font-size: 0.92rem;\n  font-family: "Inter", sans-serif;\n  outline: none;\n  transition: border-color 0.18s, box-shadow 0.18s;\n  resize: none;\n}\n.form-field input:focus,\n.form-field textarea:focus {\n  border-color: #7c3aed;\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.12);\n}\n.options-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.option-field {\n  border-radius: 12px;\n  padding: 12px;\n  border: 1.5px solid rgba(17, 24, 39, 0.10);\n  background: #f9fafb;\n  transition: border-color 0.18s, background 0.18s;\n}\n.option-field.correct {\n  border-color: #10b981;\n  background: #f0fdf4;\n}\n.option-field label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n  cursor: pointer;\n}\n.opt-label {\n  display: grid;\n  place-items: center;\n  width: 26px;\n  height: 26px;\n  border-radius: 6px;\n  background: rgba(124, 58, 237, 0.10);\n  color: #7c3aed;\n  font-weight: 800;\n  font-size: 0.82rem;\n}\n.correct-tag {\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: #10b981;\n  margin-left: auto;\n  opacity: 0;\n  transition: opacity 0.18s;\n}\n.option-field.correct .correct-tag {\n  opacity: 1;\n}\n.option-field input[type=radio] {\n  accent-color: #7c3aed;\n  width: 16px;\n  height: 16px;\n}\n.option-field input[type=text] {\n  background: white;\n}\n.save-btn {\n  display: block;\n  width: 100%;\n  margin-top: 24px;\n  min-height: 52px;\n  border-radius: 12px;\n  background: #7c3aed;\n  color: white;\n  font-size: 1rem;\n  font-weight: 700;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.30);\n  transition:\n    transform 0.2s,\n    box-shadow 0.2s,\n    background 0.2s;\n  font-family: "Inter", sans-serif;\n}\n.save-btn:hover {\n  background: #6d28d9;\n  transform: translateY(-2px);\n  box-shadow: 0 10px 28px rgba(124, 58, 237, 0.38);\n}\n.save-btn:disabled {\n  background: #d1d5db;\n  box-shadow: none;\n  cursor: not-allowed;\n  transform: none;\n}\n.existing-quizzes {\n  margin-top: 40px;\n}\n.existing-quizzes h2 {\n  color: #111827;\n  font-size: 1.2rem;\n  font-weight: 800;\n  margin-bottom: 16px;\n}\n.existing-card {\n  background: white;\n  border: 1px solid rgba(17, 24, 39, 0.10);\n  border-radius: 14px;\n  padding: 16px 18px;\n  margin-bottom: 10px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);\n}\n.existing-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.existing-num {\n  background: #7c3aed;\n  color: white;\n  font-weight: 800;\n  font-size: 0.78rem;\n  padding: 3px 10px;\n  border-radius: 999px;\n  flex-shrink: 0;\n}\n.existing-header strong {\n  color: #111827;\n  flex: 1;\n  font-size: 0.95rem;\n}\n.delete-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1.1rem;\n  padding: 4px;\n  border-radius: 6px;\n  transition: background 0.18s;\n}\n.delete-btn:hover {\n  background: #fee2e2;\n}\n.existing-options {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.existing-options span {\n  padding: 5px 12px;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  background: #f3f4f6;\n  color: rgba(17, 24, 39, 0.65);\n  font-weight: 500;\n}\n.existing-options .correct-opt {\n  background: #d1fae5;\n  color: #065f46;\n  font-weight: 700;\n}\n/*# sourceMappingURL=quiz-editor.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizEditorComponent, { className: "QuizEditorComponent", filePath: "app/base/quiz-editor/quiz-editor.ts", lineNumber: 26 });
})();

// src/app/base/quiz-attempt/quiz-attempt.ts
var _c09 = () => ["A", "B", "C", "D"];
var _forTrack07 = ($index, $item) => $item.quizId;
var _forTrack1 = ($index, $item) => $item.id;
function QuizAttemptComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275domElementEnd();
  }
}
function QuizAttemptComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 2)(1, "div", 4);
    \u0275\u0275text(2, "\u{1F512}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "h2");
    \u0275\u0275text(4, "Quiz \u0987\u09A4\u09BF\u09AE\u09A7\u09CD\u09AF\u09C7 \u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p");
    \u0275\u0275text(6, "\u098F\u0987 lesson \u098F\u09B0 quiz \u0986\u09AA\u09A8\u09BF \u0986\u0997\u09C7\u0987 \u09A6\u09BF\u09AF\u09BC\u09C7\u099B\u09C7\u09A8\u0964 \u0986\u09AC\u09BE\u09B0 attempt \u0995\u09B0\u09BE \u09AF\u09BE\u09AC\u09C7 \u09A8\u09BE\u0964");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "button", 5);
    \u0275\u0275domListener("click", function QuizAttemptComponent_Conditional_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(8, "\u2190 Back to Lesson");
    \u0275\u0275domElementEnd()();
  }
}
function QuizAttemptComponent_Conditional_3_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6)(1, "p");
    \u0275\u0275text(2, "\u{1F4CB} \u0986\u09AA\u09A8\u09BE\u09B0 \u09B8\u09CD\u0995\u09CB\u09B0");
    \u0275\u0275domElementEnd()();
  }
}
function QuizAttemptComponent_Conditional_3_Conditional_1_For_12_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 17);
    \u0275\u0275text(1, "\u09B8\u09A0\u09BF\u0995 \u0989\u09A4\u09CD\u09A4\u09B0: ");
    \u0275\u0275domElementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r4.correctAnswer);
  }
}
function QuizAttemptComponent_Conditional_3_Conditional_1_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11)(1, "div", 12)(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "p", 15);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "div", 16)(9, "span");
    \u0275\u0275text(10, "\u09A4\u09CB\u09AE\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0: ");
    \u0275\u0275domElementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(13, QuizAttemptComponent_Conditional_3_Conditional_1_For_12_Conditional_13_Template, 4, 1, "span", 17);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const \u0275$index_48_r5 = ctx.$index;
    \u0275\u0275classProp("correct", r_r4.isCorrect)("wrong", !r_r4.isCorrect);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q", \u0275$index_48_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.isCorrect ? "\u2713" : "\u2717");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.question);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r4.selectedAnswer || "\u09A6\u09C7\u0993\u09AF\u09BC\u09BE \u09B9\u09AF\u09BC\u09A8\u09BF");
    \u0275\u0275advance();
    \u0275\u0275conditional(!r_r4.isCorrect ? 13 : -1);
  }
}
function QuizAttemptComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, QuizAttemptComponent_Conditional_3_Conditional_1_Conditional_0_Template, 3, 0, "div", 6);
    \u0275\u0275domElementStart(1, "div", 7)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "h2");
    \u0275\u0275text(7, "Quiz \u09B6\u09C7\u09B7!");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "p", 8);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "div", 9);
    \u0275\u0275repeaterCreate(11, QuizAttemptComponent_Conditional_3_Conditional_1_For_12_Template, 14, 9, "div", 10, _forTrack07);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.result().alreadyAttempted ? 0 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.result().score);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", ctx_r1.result().totalQuestions);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r1.result().score, " \u099F\u09BF \u09B8\u09A0\u09BF\u0995, ", ctx_r1.result().totalQuestions - ctx_r1.result().score, " \u099F\u09BF \u09AD\u09C1\u09B2 ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.result().results);
  }
}
function QuizAttemptComponent_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h2");
    \u0275\u0275text(1, "Quiz \u099C\u09AE\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09C7!");
    \u0275\u0275domElementEnd();
  }
}
function QuizAttemptComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 3);
    \u0275\u0275conditionalCreate(1, QuizAttemptComponent_Conditional_3_Conditional_1_Template, 13, 5)(2, QuizAttemptComponent_Conditional_3_Conditional_2_Template, 2, 0, "h2");
    \u0275\u0275domElementStart(3, "button", 5);
    \u0275\u0275domListener("click", function QuizAttemptComponent_Conditional_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(4, "\u2190 Back to Lesson");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.result() ? 1 : 2);
  }
}
function QuizAttemptComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 2)(1, "h2");
    \u0275\u0275text(2, "\u098F\u0987 lesson \u098F \u0995\u09CB\u09A8\u09CB quiz \u09A8\u09C7\u0987");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "button", 5);
    \u0275\u0275domListener("click", function QuizAttemptComponent_Conditional_4_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(4, "\u2190 Back");
    \u0275\u0275domElementEnd()();
  }
}
function QuizAttemptComponent_Conditional_5_For_16_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 34);
    \u0275\u0275domListener("click", function QuizAttemptComponent_Conditional_5_For_16_For_7_Template_button_click_0_listener() {
      const opt_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const quiz_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectAnswer(quiz_r10.id, opt_r9));
    });
    \u0275\u0275domElementStart(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const opt_r9 = ctx.$implicit;
    const quiz_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.userAnswers()[quiz_r10.id] === opt_r9);
    \u0275\u0275domProperty("disabled", ctx_r1.isSubmitted());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r9);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r9 === "A" ? quiz_r10.optionA : opt_r9 === "B" ? quiz_r10.optionB : opt_r9 === "C" ? quiz_r10.optionC : quiz_r10.optionD);
  }
}
function QuizAttemptComponent_Conditional_5_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 31);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 32);
    \u0275\u0275repeaterCreate(6, QuizAttemptComponent_Conditional_5_For_16_For_7_Template, 5, 5, "button", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const quiz_r10 = ctx.$implicit;
    const \u0275$index_121_r11 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("answered", ctx_r1.userAnswers()[quiz_r10.id]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Q", \u0275$index_121_r11 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(quiz_r10.question);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(4, _c09));
  }
}
function QuizAttemptComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 18)(1, "div")(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(7, "svg", 20);
    \u0275\u0275domElement(8, "circle", 21)(9, "circle", 22);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(10, "span", 23);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(12, "div", 24);
    \u0275\u0275domElement(13, "div", 25);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "div", 26);
    \u0275\u0275repeaterCreate(15, QuizAttemptComponent_Conditional_5_For_16_Template, 8, 5, "div", 27, _forTrack1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "button", 28);
    \u0275\u0275domListener("click", function QuizAttemptComponent_Conditional_5_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitQuiz());
    });
    \u0275\u0275text(18);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.lessonTitle());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.answeredCount, " / ", ctx_r1.quizzes().length, " answered");
    \u0275\u0275advance();
    \u0275\u0275classProp("danger", ctx_r1.timeLeft() < 30);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("stroke", ctx_r1.timerColor)("stroke-dasharray", 163.4)("stroke-dashoffset", 163.4 * (1 - ctx_r1.timerPercent / 100));
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.timerColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatTime(ctx_r1.timeLeft()));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.timerPercent, "%")("background", ctx_r1.timerColor);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.quizzes());
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r1.isSubmitted() || ctx_r1.timeLeft() === 0 || ctx_r1.alreadyAttempted());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSubmitted() ? "\u2713 Submitted" : ctx_r1.alreadyAttempted() ? "\u{1F512} Already Completed" : "\u{1F4E4} Submit Quiz", " ");
  }
}
var QuizAttemptComponent = class _QuizAttemptComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  api = inject(LearningApiService);
  authService = inject(AuthService);
  toastr = inject(ToastrService);
  lessonId = signal("", ...ngDevMode ? [{ debugName: "lessonId" }] : (
    /* istanbul ignore next */
    []
  ));
  courseId = signal("", ...ngDevMode ? [{ debugName: "courseId" }] : (
    /* istanbul ignore next */
    []
  ));
  lessonTitle = signal("", ...ngDevMode ? [{ debugName: "lessonTitle" }] : (
    /* istanbul ignore next */
    []
  ));
  userId = signal("", ...ngDevMode ? [{ debugName: "userId" }] : (
    /* istanbul ignore next */
    []
  ));
  quizzes = signal([], ...ngDevMode ? [{ debugName: "quizzes" }] : (
    /* istanbul ignore next */
    []
  ));
  userAnswers = signal({}, ...ngDevMode ? [{ debugName: "userAnswers" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  isSubmitted = signal(false, ...ngDevMode ? [{ debugName: "isSubmitted" }] : (
    /* istanbul ignore next */
    []
  ));
  alreadyAttempted = signal(false, ...ngDevMode ? [{ debugName: "alreadyAttempted" }] : (
    /* istanbul ignore next */
    []
  ));
  result = signal(null, ...ngDevMode ? [{ debugName: "result" }] : (
    /* istanbul ignore next */
    []
  ));
  // Timer — প্রতি quiz এ 30 সেকেন্ড
  timeLeft = signal(0, ...ngDevMode ? [{ debugName: "timeLeft" }] : (
    /* istanbul ignore next */
    []
  ));
  totalTime = signal(0, ...ngDevMode ? [{ debugName: "totalTime" }] : (
    /* istanbul ignore next */
    []
  ));
  timerInterval;
  ngOnInit() {
    const lessonId = this.route.snapshot.paramMap.get("lessonId") ?? "";
    const title = this.route.snapshot.queryParamMap.get("title") ?? "";
    const courseId = this.route.snapshot.queryParamMap.get("courseId") ?? "";
    this.lessonId.set(lessonId);
    this.lessonTitle.set(title);
    this.courseId.set(courseId);
    const userId = this.authService.getCurrentUser()?.id ?? "";
    this.userId.set(String(userId));
    this.init();
  }
  async init() {
    this.isLoading.set(true);
    try {
      const attemptRes = await firstValueFrom(this.api.hasAttemptedQuiz(this.lessonId(), this.userId()));
      const attempted = attemptRes?.data ?? false;
      if (attempted) {
        this.alreadyAttempted.set(true);
        this.isLoading.set(false);
        this.toastr.warning("\u098F\u0987 \u09AA\u09BE\u09A0 \u098F\u09B0 quiz \u0986\u09AA\u09A8\u09BF \u0987\u09A4\u09BF\u09AE\u09A7\u09CD\u09AF\u09C7 \u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8 \u0995\u09B0\u09C7\u099B\u09C7\u09A8\u0964");
        return;
      }
      const res = await firstValueFrom(this.api.getQuizzesByLesson(this.lessonId()));
      const data = res?.Data ?? res?.data ?? [];
      const normalized = Array.isArray(data) ? data.map((rawQuiz) => this.normalizeQuiz(rawQuiz)).filter((quiz) => !!quiz.id) : [];
      this.quizzes.set(normalized);
      console.log("Quizzes loaded: " + normalized.length);
      const total = this.quizzes().length * 30;
      this.timeLeft.set(total);
      this.totalTime.set(total);
      this.startTimer();
    } catch (err) {
      console.error("Error loading quiz:", err);
      this.toastr.error("Quiz load \u0995\u09B0\u09A4\u09C7 \u09A4\u09CD\u09B0\u09C1\u099F\u09BF \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u0964");
    } finally {
      this.isLoading.set(false);
    }
  }
  startTimer() {
    this.timerInterval = setInterval(() => {
      const left = this.timeLeft() - 1;
      if (left <= 0) {
        this.timeLeft.set(0);
        clearInterval(this.timerInterval);
        if (!this.isSubmitted()) {
          this.submitQuiz();
        }
      } else {
        this.timeLeft.set(left);
      }
    }, 1e3);
  }
  selectAnswer(quizId, answer) {
    if (this.isSubmitted())
      return;
    this.userAnswers.update((prev) => __spreadProps(__spreadValues({}, prev), { [quizId]: answer.toUpperCase() }));
  }
  get answeredCount() {
    return Object.keys(this.userAnswers()).length;
  }
  get timerPercent() {
    return this.timeLeft() / this.totalTime() * 100;
  }
  get timerColor() {
    const pct = this.timerPercent;
    if (pct > 50)
      return "#10b981";
    if (pct > 25)
      return "#f59e0b";
    return "#ef4444";
  }
  formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  }
  async submitQuiz() {
    if (this.isSubmitted() || this.alreadyAttempted()) {
      return;
    }
    this.isSubmitted.set(true);
    clearInterval(this.timerInterval);
    const quizCount = this.quizzes().length;
    const answers = this.quizzes().map((quiz) => {
      const selectedKey = (this.userAnswers()[quiz.id] ?? "").toUpperCase() || "";
      return {
        quizId: quiz.id,
        selectedAnswer: selectedKey
      };
    });
    const payload = { userId: this.userId(), answers };
    console.log("Submitting quiz answers...");
    try {
      const res = await firstValueFrom(this.api.submitQuiz(this.lessonId(), payload));
      const data = res?.data ?? null;
      if (data?.alreadyAttempted) {
        this.result.set({
          score: data.score,
          totalQuestions: data.totalQuestions,
          results: data.results,
          alreadyAttempted: true
        });
        this.toastr.info(`\u0986\u09AA\u09A8\u09BE\u09B0 \u0986\u0997\u09C7\u09B0 \u09B8\u09CD\u0995\u09CB\u09B0: ${data.score}/${data.totalQuestions}`);
        return;
      }
      const correctCount = this.quizzes().reduce((count, quiz) => {
        const userAnswer = (this.userAnswers()[quiz.id] ?? "").toUpperCase();
        const correctAnswer = (quiz.correctAnswer ?? "").toUpperCase();
        return userAnswer === correctAnswer ? count + 1 : count;
      }, 0);
      const clientResults = this.quizzes().map((quiz) => {
        const userAnswer = (this.userAnswers()[quiz.id] ?? "").toUpperCase();
        const correctAnswer = (quiz.correctAnswer ?? "").toUpperCase();
        const isCorrect = userAnswer === correctAnswer;
        return {
          quizId: quiz.id,
          question: quiz.question,
          selectedAnswer: userAnswer,
          correctAnswer,
          isCorrect
        };
      });
      const finalScore = data?.score && data.score > 0 ? data.score : correctCount;
      const finalResults = data?.results && data.results.length > 0 ? data.results : clientResults;
      const resultToSet = {
        score: finalScore,
        totalQuestions: quizCount,
        results: finalResults,
        alreadyAttempted: false
      };
      this.result.set(resultToSet);
    } catch (err) {
      console.error("Error during submit:", err);
      this.toastr.error("Quiz \u099C\u09AE\u09BE \u0995\u09B0\u09A4\u09C7 \u09A4\u09CD\u09B0\u09C1\u099F\u09BF \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u0964 \u09AA\u09C1\u09A8\u09B0\u09BE\u09AF\u09BC \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8\u0964");
      const correctCount = this.quizzes().reduce((count, quiz) => {
        const userAnswer = (this.userAnswers()[quiz.id] ?? "").toUpperCase();
        const correctAnswer = (quiz.correctAnswer ?? "").toUpperCase();
        return userAnswer === correctAnswer ? count + 1 : count;
      }, 0);
      const clientResults = this.quizzes().map((quiz) => {
        const userAnswer = (this.userAnswers()[quiz.id] ?? "").toUpperCase();
        const correctAnswer = (quiz.correctAnswer ?? "").toUpperCase();
        return {
          quizId: quiz.id,
          question: quiz.question,
          selectedAnswer: userAnswer,
          correctAnswer,
          isCorrect: userAnswer === correctAnswer
        };
      });
      this.result.set({
        score: correctCount,
        totalQuestions: quizCount,
        results: clientResults,
        alreadyAttempted: false
      });
    }
  }
  goBack() {
    clearInterval(this.timerInterval);
    if (this.courseId()) {
      this.router.navigate(["/enrolled-course", this.courseId()]);
      return;
    }
    this.router.navigate(["/courses"]);
  }
  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }
  normalizeQuiz(rawQuiz) {
    return {
      id: String(rawQuiz?.id ?? rawQuiz?.Id ?? rawQuiz?.quizId ?? rawQuiz?.QuizId ?? ""),
      question: String(rawQuiz?.question ?? rawQuiz?.Question ?? ""),
      optionA: String(rawQuiz?.optionA ?? rawQuiz?.OptionA ?? ""),
      optionB: String(rawQuiz?.optionB ?? rawQuiz?.OptionB ?? ""),
      optionC: String(rawQuiz?.optionC ?? rawQuiz?.OptionC ?? ""),
      optionD: String(rawQuiz?.optionD ?? rawQuiz?.OptionD ?? ""),
      correctAnswer: String(rawQuiz?.correctAnswer ?? rawQuiz?.CorrectAnswer ?? "")
    };
  }
  getOptionText(quiz, optionKey) {
    if (optionKey === "A")
      return quiz.optionA;
    if (optionKey === "B")
      return quiz.optionB;
    if (optionKey === "C")
      return quiz.optionC;
    if (optionKey === "D")
      return quiz.optionD;
    return "";
  }
  shouldSubmitAsText(correctAnswer) {
    const normalized = (correctAnswer ?? "").trim().toUpperCase();
    return normalized !== "A" && normalized !== "B" && normalized !== "C" && normalized !== "D";
  }
  static \u0275fac = function QuizAttemptComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizAttemptComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizAttemptComponent, selectors: [["app-quiz-attempt"]], decls: 6, vars: 1, consts: [[1, "qa-page"], [1, "qa-loading"], [1, "qa-done"], [1, "qa-result"], [1, "qa-done-icon"], ["type", "button", 1, "qa-back-btn", 3, "click"], [1, "qa-previous-attempt-banner"], [1, "qa-score-circle"], [1, "qa-score-label"], [1, "qa-results-list"], [1, "qa-result-card", 3, "correct", "wrong"], [1, "qa-result-card"], [1, "qa-result-header"], [1, "qa-result-num"], [1, "qa-result-icon"], [1, "qa-result-q"], [1, "qa-result-ans"], [1, "correct-ans"], [1, "qa-header"], [1, "qa-timer"], ["viewBox", "0 0 60 60", 1, "timer-ring"], ["cx", "30", "cy", "30", "r", "26", "fill", "none", "stroke", "#e5e7eb", "stroke-width", "4"], ["cx", "30", "cy", "30", "r", "26", "fill", "none", "stroke-width", "4", "stroke-linecap", "round", "transform", "rotate(-90 30 30)", 2, "transition", "stroke-dashoffset 1s linear, stroke 0.5s"], [1, "timer-text"], [1, "qa-progress-wrap"], [1, "qa-progress-bar"], [1, "qa-questions"], [1, "qa-card", 3, "answered"], ["type", "button", 1, "qa-submit-btn", 3, "click", "disabled"], [1, "qa-card"], [1, "qa-q-num"], [1, "qa-q-text"], [1, "qa-options"], ["type", "button", 1, "qa-option", 3, "selected", "disabled"], ["type", "button", 1, "qa-option", 3, "click", "disabled"], [1, "qa-opt-label"]], template: function QuizAttemptComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, QuizAttemptComponent_Conditional_1_Template, 2, 0, "div", 1)(2, QuizAttemptComponent_Conditional_2_Template, 9, 0, "div", 2)(3, QuizAttemptComponent_Conditional_3_Template, 5, 1, "div", 3)(4, QuizAttemptComponent_Conditional_4_Template, 5, 0, "div", 2)(5, QuizAttemptComponent_Conditional_5_Template, 19, 17);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 1 : ctx.alreadyAttempted() ? 2 : ctx.isSubmitted() ? 3 : ctx.quizzes().length === 0 ? 4 : 5);
    }
  }, dependencies: [CommonModule, RouterModule], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background: #f8f8ff;\n}\n.qa-page[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0 auto;\n  padding: 32px 20px 80px;\n  font-family: "Inter", sans-serif;\n  color: #111827;\n  min-height: 100vh;\n  background: #f8f8ff;\n}\n.qa-loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 0;\n  color: #7c3aed;\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n.qa-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.qa-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #111827;\n  margin: 0 0 4px;\n}\n.qa-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.87rem;\n  color: rgba(17, 24, 39, 0.55);\n  margin: 0;\n}\n.qa-timer[_ngcontent-%COMP%] {\n  position: relative;\n  width: 64px;\n  height: 64px;\n  flex-shrink: 0;\n}\n.timer-ring[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n}\n.timer-text[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  place-items: center;\n  font-size: 0.82rem;\n  font-weight: 800;\n}\n.qa-timer.danger[_ngcontent-%COMP%]   .timer-text[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_blink 1s step-end infinite;\n}\n@keyframes _ngcontent-%COMP%_blink {\n  50% {\n    opacity: 0.3;\n  }\n}\n.qa-progress-wrap[_ngcontent-%COMP%] {\n  height: 5px;\n  background: #e5e7eb;\n  border-radius: 999px;\n  margin-bottom: 28px;\n  overflow: hidden;\n}\n.qa-progress-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  transition: width 1s linear, background 0.5s;\n}\n.qa-questions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.qa-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1.5px solid rgba(17, 24, 39, 0.10);\n  border-radius: 18px;\n  padding: 22px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n  transition: border-color 0.2s;\n}\n.qa-card.answered[_ngcontent-%COMP%] {\n  border-color: #7c3aed;\n}\n.qa-q-num[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #7c3aed;\n  color: white;\n  font-size: 0.78rem;\n  font-weight: 800;\n  padding: 3px 12px;\n  border-radius: 999px;\n  margin-bottom: 10px;\n}\n.qa-q-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 16px;\n  line-height: 1.5;\n}\n.qa-options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.qa-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 14px;\n  border-radius: 12px;\n  border: 1.5px solid rgba(17, 24, 39, 0.10);\n  background: #f9fafb;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #111827;\n  font-family: "Inter", sans-serif;\n  text-align: left;\n  transition: all 0.18s;\n}\n.qa-option[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #7c3aed;\n  background: #f5f3ff;\n}\n.qa-option.selected[_ngcontent-%COMP%] {\n  border-color: #7c3aed;\n  background: #f5f3ff;\n  color: #6d28d9;\n  font-weight: 700;\n}\n.qa-option[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.qa-opt-label[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  background: rgba(124, 58, 237, 0.10);\n  color: #7c3aed;\n  font-weight: 800;\n  font-size: 0.82rem;\n  flex-shrink: 0;\n}\n.qa-option.selected[_ngcontent-%COMP%]   .qa-opt-label[_ngcontent-%COMP%] {\n  background: #7c3aed;\n  color: white;\n}\n.qa-submit-btn[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: 28px;\n  min-height: 54px;\n  border-radius: 14px;\n  background: #7c3aed;\n  color: white;\n  font-size: 1rem;\n  font-weight: 700;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.30);\n  transition:\n    transform 0.2s,\n    box-shadow 0.2s,\n    background 0.2s;\n  font-family: "Inter", sans-serif;\n}\n.qa-submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #6d28d9;\n  transform: translateY(-2px);\n  box-shadow: 0 10px 28px rgba(124, 58, 237, 0.38);\n}\n.qa-submit-btn[_ngcontent-%COMP%]:disabled {\n  background: #d1d5db;\n  box-shadow: none;\n  cursor: not-allowed;\n  transform: none;\n}\n.qa-done[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 20px;\n}\n.qa-done-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 16px;\n}\n.qa-done[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: #111827;\n  margin-bottom: 8px;\n}\n.qa-done[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(17, 24, 39, 0.55);\n  margin-bottom: 24px;\n}\n.qa-result[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n.qa-score-circle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #6d28d9);\n  color: white;\n  margin: 0 auto 16px;\n  box-shadow: 0 8px 28px rgba(124, 58, 237, 0.35);\n}\n.qa-score-circle[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  font-weight: 900;\n  line-height: 1;\n}\n.qa-score-circle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  opacity: 0.85;\n}\n.qa-result[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.6rem;\n  font-weight: 800;\n  margin-bottom: 6px;\n}\n.qa-score-label[_ngcontent-%COMP%] {\n  text-align: center;\n  color: rgba(17, 24, 39, 0.55);\n  margin-bottom: 28px;\n}\n.qa-previous-attempt-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fbbf24,\n      #f59e0b);\n  padding: 14px 16px;\n  border-radius: 12px;\n  margin-bottom: 20px;\n  text-align: center;\n  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.20);\n}\n.qa-previous-attempt-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 700;\n  margin: 0;\n  font-size: 0.95rem;\n}\n.qa-results-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 28px;\n}\n.qa-result-card[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n  border-radius: 14px;\n  border: 1.5px solid rgba(17, 24, 39, 0.10);\n  background: white;\n}\n.qa-result-card.correct[_ngcontent-%COMP%] {\n  border-color: #10b981;\n  background: #f0fdf4;\n}\n.qa-result-card.wrong[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  background: #fef2f2;\n}\n.qa-result-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.qa-result-num[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 800;\n  padding: 2px 10px;\n  border-radius: 999px;\n  background: rgba(124, 58, 237, 0.10);\n  color: #7c3aed;\n}\n.qa-result-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 900;\n}\n.qa-result-card.correct[_ngcontent-%COMP%]   .qa-result-icon[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.qa-result-card.wrong[_ngcontent-%COMP%]   .qa-result-icon[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.qa-result-q[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 8px;\n}\n.qa-result-ans[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 0.85rem;\n  color: rgba(17, 24, 39, 0.65);\n}\n.correct-ans[_ngcontent-%COMP%] {\n  color: #059669;\n  font-weight: 600;\n}\n.qa-back-btn[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 50px;\n  border-radius: 12px;\n  background: white;\n  border: 1.5px solid rgba(17, 24, 39, 0.12);\n  color: #111827;\n  font-size: 0.95rem;\n  font-weight: 700;\n  cursor: pointer;\n  font-family: "Inter", sans-serif;\n  transition: background 0.18s;\n  margin-top: 16px;\n}\n.qa-back-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n/*# sourceMappingURL=quiz-attempt.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuizAttemptComponent, [{
    type: Component,
    args: [{ selector: "app-quiz-attempt", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="qa-page">

  @if (isLoading()) {
    <div class="qa-loading">Loading...</div>
  }

  @else if (alreadyAttempted()) {
    <!-- Already attempted screen -->
    <div class="qa-done">
      <div class="qa-done-icon">\u{1F512}</div>
      <h2>Quiz \u0987\u09A4\u09BF\u09AE\u09A7\u09CD\u09AF\u09C7 \u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7</h2>
      <p>\u098F\u0987 lesson \u098F\u09B0 quiz \u0986\u09AA\u09A8\u09BF \u0986\u0997\u09C7\u0987 \u09A6\u09BF\u09AF\u09BC\u09C7\u099B\u09C7\u09A8\u0964 \u0986\u09AC\u09BE\u09B0 attempt \u0995\u09B0\u09BE \u09AF\u09BE\u09AC\u09C7 \u09A8\u09BE\u0964</p>
      <button type="button" class="qa-back-btn" (click)="goBack()">\u2190 Back to Lesson</button>
    </div>
  }

  @else if (isSubmitted()) {
    <div class="qa-result">
      @if (result()) {
        @if (result().alreadyAttempted) {
          <div class="qa-previous-attempt-banner">
            <p>\u{1F4CB} \u0986\u09AA\u09A8\u09BE\u09B0 \u09B8\u09CD\u0995\u09CB\u09B0</p>
          </div>
        }
        <div class="qa-score-circle">
          <strong>{{ result().score }}</strong>
          <span>/ {{ result().totalQuestions }}</span>
        </div>
        <h2>Quiz \u09B6\u09C7\u09B7!</h2>
        <p class="qa-score-label">
          {{ result().score }} \u099F\u09BF \u09B8\u09A0\u09BF\u0995, {{ result().totalQuestions - result().score }} \u099F\u09BF \u09AD\u09C1\u09B2
        </p>
        <div class="qa-results-list">
          @for (r of result().results; track r.quizId; let i = $index) {
            <div class="qa-result-card" [class.correct]="r.isCorrect" [class.wrong]="!r.isCorrect">
              <div class="qa-result-header">
                <span class="qa-result-num">Q{{ i + 1 }}</span>
                <span class="qa-result-icon">{{ r.isCorrect ? '\u2713' : '\u2717' }}</span>
              </div>
              <p class="qa-result-q">{{ r.question }}</p>
              <div class="qa-result-ans">
                <span>\u09A4\u09CB\u09AE\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0: <strong>{{ r.selectedAnswer || '\u09A6\u09C7\u0993\u09AF\u09BC\u09BE \u09B9\u09AF\u09BC\u09A8\u09BF' }}</strong></span>
                @if (!r.isCorrect) {
                  <span class="correct-ans">\u09B8\u09A0\u09BF\u0995 \u0989\u09A4\u09CD\u09A4\u09B0: <strong>{{ r.correctAnswer }}</strong></span>
                }
              </div>
            </div>
          }
        </div>
      } @else {
        <h2>Quiz \u099C\u09AE\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09C7!</h2>
      }
      <!-- Back button -->
      <button type="button" (click)="goBack()" class="qa-back-btn">\u2190 Back to Lesson</button>
    </div>
  }

  @else if (quizzes().length === 0) {
    <div class="qa-done">
      <h2>\u098F\u0987 lesson \u098F \u0995\u09CB\u09A8\u09CB quiz \u09A8\u09C7\u0987</h2>
      <button type="button" class="qa-back-btn" (click)="goBack()">\u2190 Back</button>
    </div>
  }

  @else {
    <!-- Quiz screen -->
    <div class="qa-header">
      <div>
        <h1>{{ lessonTitle() }}</h1>
        <p>{{ answeredCount }} / {{ quizzes().length }} answered</p>
      </div>

      <!-- Timer -->
      <div class="qa-timer" [class.danger]="timeLeft() < 30">
        <svg class="timer-ring" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="26" fill="none" stroke="#e5e7eb" stroke-width="4"/>
          <circle cx="30" cy="30" r="26" fill="none"
            [attr.stroke]="timerColor"
            stroke-width="4"
            stroke-linecap="round"
            [attr.stroke-dasharray]="163.4"
            [attr.stroke-dashoffset]="163.4 * (1 - timerPercent / 100)"
            transform="rotate(-90 30 30)"
            style="transition: stroke-dashoffset 1s linear, stroke 0.5s"/>
        </svg>
        <span class="timer-text" [style.color]="timerColor">{{ formatTime(timeLeft()) }}</span>
      </div>
    </div>

    <!-- Progress bar -->
    <div class="qa-progress-wrap">
      <div class="qa-progress-bar"
        [style.width.%]="timerPercent"
        [style.background]="timerColor">
      </div>
    </div>

    <!-- Questions -->
    <div class="qa-questions">
      @for (quiz of quizzes(); track quiz.id; let i = $index) {
        <div class="qa-card" [class.answered]="userAnswers()[quiz.id]">
          <div class="qa-q-num">Q{{ i + 1 }}</div>
          <p class="qa-q-text">{{ quiz.question }}</p>

          <div class="qa-options">
            @for (opt of ['A','B','C','D']; track opt) {
              <button
                type="button"
                class="qa-option"
                [class.selected]="userAnswers()[quiz.id] === opt"
                [disabled]="isSubmitted()"
                (click)="selectAnswer(quiz.id, opt)">
                <span class="qa-opt-label">{{ opt }}</span>
                <span>{{ opt === 'A' ? quiz.optionA : opt === 'B' ? quiz.optionB : opt === 'C' ? quiz.optionC : quiz.optionD }}</span>
              </button>
            }
          </div>
        </div>
      }
    </div>

    <!-- Submit -->
    <button
      type="button"
      class="qa-submit-btn"
      [disabled]="isSubmitted() || timeLeft() === 0 || alreadyAttempted()"
      (click)="submitQuiz()">
      {{ isSubmitted() ? '\u2713 Submitted' : alreadyAttempted() ? '\u{1F512} Already Completed' : '\u{1F4E4} Submit Quiz' }}
    </button>
  }

</div>`, styles: ['/* src/app/base/quiz-attempt/quiz-attempt.css */\n:host {\n  display: block;\n  min-height: 100vh;\n  background: #f8f8ff;\n}\n.qa-page {\n  max-width: 760px;\n  margin: 0 auto;\n  padding: 32px 20px 80px;\n  font-family: "Inter", sans-serif;\n  color: #111827;\n  min-height: 100vh;\n  background: #f8f8ff;\n}\n.qa-loading {\n  text-align: center;\n  padding: 80px 0;\n  color: #7c3aed;\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n.qa-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.qa-header h1 {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #111827;\n  margin: 0 0 4px;\n}\n.qa-header p {\n  font-size: 0.87rem;\n  color: rgba(17, 24, 39, 0.55);\n  margin: 0;\n}\n.qa-timer {\n  position: relative;\n  width: 64px;\n  height: 64px;\n  flex-shrink: 0;\n}\n.timer-ring {\n  width: 64px;\n  height: 64px;\n}\n.timer-text {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  place-items: center;\n  font-size: 0.82rem;\n  font-weight: 800;\n}\n.qa-timer.danger .timer-text {\n  animation: blink 1s step-end infinite;\n}\n@keyframes blink {\n  50% {\n    opacity: 0.3;\n  }\n}\n.qa-progress-wrap {\n  height: 5px;\n  background: #e5e7eb;\n  border-radius: 999px;\n  margin-bottom: 28px;\n  overflow: hidden;\n}\n.qa-progress-bar {\n  height: 100%;\n  border-radius: 999px;\n  transition: width 1s linear, background 0.5s;\n}\n.qa-questions {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.qa-card {\n  background: white;\n  border: 1.5px solid rgba(17, 24, 39, 0.10);\n  border-radius: 18px;\n  padding: 22px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n  transition: border-color 0.2s;\n}\n.qa-card.answered {\n  border-color: #7c3aed;\n}\n.qa-q-num {\n  display: inline-block;\n  background: #7c3aed;\n  color: white;\n  font-size: 0.78rem;\n  font-weight: 800;\n  padding: 3px 12px;\n  border-radius: 999px;\n  margin-bottom: 10px;\n}\n.qa-q-text {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 16px;\n  line-height: 1.5;\n}\n.qa-options {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.qa-option {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 14px;\n  border-radius: 12px;\n  border: 1.5px solid rgba(17, 24, 39, 0.10);\n  background: #f9fafb;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #111827;\n  font-family: "Inter", sans-serif;\n  text-align: left;\n  transition: all 0.18s;\n}\n.qa-option:hover:not(:disabled) {\n  border-color: #7c3aed;\n  background: #f5f3ff;\n}\n.qa-option.selected {\n  border-color: #7c3aed;\n  background: #f5f3ff;\n  color: #6d28d9;\n  font-weight: 700;\n}\n.qa-option:disabled {\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.qa-opt-label {\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  background: rgba(124, 58, 237, 0.10);\n  color: #7c3aed;\n  font-weight: 800;\n  font-size: 0.82rem;\n  flex-shrink: 0;\n}\n.qa-option.selected .qa-opt-label {\n  background: #7c3aed;\n  color: white;\n}\n.qa-submit-btn {\n  display: block;\n  width: 100%;\n  margin-top: 28px;\n  min-height: 54px;\n  border-radius: 14px;\n  background: #7c3aed;\n  color: white;\n  font-size: 1rem;\n  font-weight: 700;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.30);\n  transition:\n    transform 0.2s,\n    box-shadow 0.2s,\n    background 0.2s;\n  font-family: "Inter", sans-serif;\n}\n.qa-submit-btn:hover:not(:disabled) {\n  background: #6d28d9;\n  transform: translateY(-2px);\n  box-shadow: 0 10px 28px rgba(124, 58, 237, 0.38);\n}\n.qa-submit-btn:disabled {\n  background: #d1d5db;\n  box-shadow: none;\n  cursor: not-allowed;\n  transform: none;\n}\n.qa-done {\n  text-align: center;\n  padding: 80px 20px;\n}\n.qa-done-icon {\n  font-size: 4rem;\n  margin-bottom: 16px;\n}\n.qa-done h2 {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: #111827;\n  margin-bottom: 8px;\n}\n.qa-done p {\n  color: rgba(17, 24, 39, 0.55);\n  margin-bottom: 24px;\n}\n.qa-result {\n  padding: 20px 0;\n}\n.qa-score-circle {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #6d28d9);\n  color: white;\n  margin: 0 auto 16px;\n  box-shadow: 0 8px 28px rgba(124, 58, 237, 0.35);\n}\n.qa-score-circle strong {\n  font-size: 2.4rem;\n  font-weight: 900;\n  line-height: 1;\n}\n.qa-score-circle span {\n  font-size: 0.9rem;\n  opacity: 0.85;\n}\n.qa-result h2 {\n  text-align: center;\n  font-size: 1.6rem;\n  font-weight: 800;\n  margin-bottom: 6px;\n}\n.qa-score-label {\n  text-align: center;\n  color: rgba(17, 24, 39, 0.55);\n  margin-bottom: 28px;\n}\n.qa-previous-attempt-banner {\n  background:\n    linear-gradient(\n      135deg,\n      #fbbf24,\n      #f59e0b);\n  padding: 14px 16px;\n  border-radius: 12px;\n  margin-bottom: 20px;\n  text-align: center;\n  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.20);\n}\n.qa-previous-attempt-banner p {\n  color: white;\n  font-weight: 700;\n  margin: 0;\n  font-size: 0.95rem;\n}\n.qa-results-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 28px;\n}\n.qa-result-card {\n  padding: 16px 18px;\n  border-radius: 14px;\n  border: 1.5px solid rgba(17, 24, 39, 0.10);\n  background: white;\n}\n.qa-result-card.correct {\n  border-color: #10b981;\n  background: #f0fdf4;\n}\n.qa-result-card.wrong {\n  border-color: #ef4444;\n  background: #fef2f2;\n}\n.qa-result-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.qa-result-num {\n  font-size: 0.78rem;\n  font-weight: 800;\n  padding: 2px 10px;\n  border-radius: 999px;\n  background: rgba(124, 58, 237, 0.10);\n  color: #7c3aed;\n}\n.qa-result-icon {\n  font-size: 1.1rem;\n  font-weight: 900;\n}\n.qa-result-card.correct .qa-result-icon {\n  color: #10b981;\n}\n.qa-result-card.wrong .qa-result-icon {\n  color: #ef4444;\n}\n.qa-result-q {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 8px;\n}\n.qa-result-ans {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 0.85rem;\n  color: rgba(17, 24, 39, 0.65);\n}\n.correct-ans {\n  color: #059669;\n  font-weight: 600;\n}\n.qa-back-btn {\n  display: block;\n  width: 100%;\n  min-height: 50px;\n  border-radius: 12px;\n  background: white;\n  border: 1.5px solid rgba(17, 24, 39, 0.12);\n  color: #111827;\n  font-size: 0.95rem;\n  font-weight: 700;\n  cursor: pointer;\n  font-family: "Inter", sans-serif;\n  transition: background 0.18s;\n  margin-top: 16px;\n}\n.qa-back-btn:hover {\n  background: #f3f4f6;\n}\n/*# sourceMappingURL=quiz-attempt.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizAttemptComponent, { className: "QuizAttemptComponent", filePath: "app/base/quiz-attempt/quiz-attempt.ts", lineNumber: 26 });
})();

// src/app/base/video-history/video-history.ts
var _c010 = (a0) => ["/enrolled-course", a0];
var _c17 = (a0, a1) => ({ lessonId: a0, resumeAt: a1 });
var _forTrack08 = ($index, $item) => $item.lessonId;
function VideoHistoryComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()();
  }
}
function VideoHistoryComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 7);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "\u0995\u09CB\u09A8\u09CB history \u09A8\u09C7\u0987");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "\u09A4\u09C1\u09AE\u09BF \u098F\u0996\u09A8\u09CB \u0995\u09CB\u09A8\u09CB video \u09A6\u09C7\u0996\u09A8\u09BF\u0964");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 8);
    \u0275\u0275text(8, "Browse Courses");
    \u0275\u0275elementEnd()();
  }
}
function VideoHistoryComponent_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275element(2, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "div", 13)(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 16)(15, "div", 17)(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "a", 18);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", item_r1.progressPercent, "%");
    \u0275\u0275classProp("completed", item_r1.isCompleted);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("completed", item_r1.isCompleted);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.isCompleted ? "\u2705 \u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8" : "\u25B6 \u099A\u09B2\u099B\u09C7", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.lessonTitle);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\u23F1 ", ctx_r1.formatTime(item_r1.watchedSeconds), " / ", ctx_r1.formatTime(item_r1.totalSeconds));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4C5} ", ctx_r1.formatDate(item_r1.lastWatchedAt));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("done", item_r1.isCompleted);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r1.progressPercent, "%");
    \u0275\u0275advance();
    \u0275\u0275classProp("completed", item_r1.isCompleted);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c010, item_r1.courseId))("queryParams", \u0275\u0275pureFunction2(21, _c17, item_r1.lessonId, item_r1.watchedSeconds));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.isCompleted ? "\u{1F504} Rewatch" : "\u25B6 Resume", " ");
  }
}
function VideoHistoryComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, VideoHistoryComponent_Conditional_11_For_2_Template, 20, 24, "div", 9, _forTrack08);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.history());
  }
}
var VideoHistoryComponent = class _VideoHistoryComponent {
  api = inject(LearningApiService);
  authService = inject(AuthService);
  router = inject(Router);
  history = signal([], ...ngDevMode ? [{ debugName: "history" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.loadHistory();
  }
  async loadHistory() {
    this.isLoading.set(true);
    try {
      const userId = this.authService.getCurrentUser()?.id ?? "";
      if (!userId) {
        this.router.navigate(["/login"]);
        return;
      }
      const res = await firstValueFrom(this.api.getVideoHistory(userId));
      const data = res?.Data ?? res?.data ?? [];
      this.history.set(Array.isArray(data) ? data : []);
    } catch {
      this.history.set([]);
    } finally {
      this.isLoading.set(false);
    }
  }
  formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  }
  formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString("bn-BD", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  goBack() {
    this.router.navigate(["/homepage"]);
  }
  static \u0275fac = function VideoHistoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VideoHistoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VideoHistoryComponent, selectors: [["app-video-history"]], decls: 12, vars: 1, consts: [[1, "vh-page"], [1, "vh-header"], ["type", "button", 1, "vh-back-btn", 3, "click"], [1, "vh-loading"], [1, "vh-empty"], [1, "vh-list"], [1, "vh-spinner"], [1, "vh-empty-icon"], ["routerLink", "/courses", 1, "vh-browse-btn"], [1, "vh-card"], [1, "vh-progress-wrap"], [1, "vh-progress-bar"], [1, "vh-card-body"], [1, "vh-info"], [1, "vh-status-badge"], [1, "vh-meta"], [1, "vh-right"], [1, "vh-percent-circle"], [1, "vh-resume-btn", 3, "routerLink", "queryParams"]], template: function VideoHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "button", 2);
      \u0275\u0275listener("click", function VideoHistoryComponent_Template_button_click_2_listener() {
        return ctx.goBack();
      });
      \u0275\u0275text(3, "\u2190 Back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "h1");
      \u0275\u0275text(6, "\u{1F4FA} Watch History");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "\u09A4\u09C1\u09AE\u09BF \u09AF\u09C7\u09B8\u09AC lesson \u09A6\u09C7\u0996\u09C7\u099B");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(9, VideoHistoryComponent_Conditional_9_Template, 4, 0, "div", 3)(10, VideoHistoryComponent_Conditional_10_Template, 9, 0, "div", 4)(11, VideoHistoryComponent_Conditional_11_Template, 3, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.isLoading() ? 9 : ctx.history().length === 0 ? 10 : 11);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background: #f8f8ff;\n}\n.vh-page[_ngcontent-%COMP%] {\n  max-width: 860px;\n  margin: 0 auto;\n  padding: 32px 24px 80px;\n  font-family: "Inter", sans-serif;\n  color: #111827;\n  min-height: 100vh;\n  background: #f8f8ff;\n}\n.vh-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 32px;\n}\n.vh-back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px 16px;\n  border-radius: 999px;\n  border: 1px solid rgba(17, 24, 39, 0.12);\n  background: white;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.87rem;\n  transition: background 0.18s;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.vh-back-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.vh-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  margin: 0 0 4px;\n  font-family: "Bricolage Grotesque", sans-serif;\n}\n.vh-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: rgba(17, 24, 39, 0.55);\n  margin: 0;\n}\n.vh-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 80px 0;\n}\n.vh-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #7c3aed;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.vh-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 20px;\n}\n.vh-empty-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 16px;\n}\n.vh-empty[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  margin-bottom: 8px;\n}\n.vh-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(17, 24, 39, 0.55);\n  margin-bottom: 24px;\n}\n.vh-browse-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 12px 28px;\n  border-radius: 12px;\n  background: rgb(98, 98, 235);\n  color: black;\n  font-weight: 700;\n  text-decoration: none;\n  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.30);\n  transition: transform 0.2s;\n}\n.vh-browse-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.vh-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.vh-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 18px;\n  border: 1px solid rgba(17, 24, 39, 0.08);\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.vh-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.10);\n}\n.vh-progress-wrap[_ngcontent-%COMP%] {\n  height: 5px;\n  background: #e5e7eb;\n}\n.vh-progress-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #7c3aed;\n  border-radius: 0 999px 999px 0;\n  transition: width 0.5s;\n}\n.vh-progress-bar.completed[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.vh-card-body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 20px 22px;\n}\n.vh-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.vh-status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  width: fit-content;\n  padding: 3px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  background: rgba(124, 58, 237, 0.10);\n  color: #7c3aed;\n}\n.vh-status-badge.completed[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.10);\n  color: #10b981;\n}\n.vh-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n  line-height: 1.3;\n}\n.vh-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  font-size: 0.82rem;\n  color: rgba(17, 24, 39, 0.55);\n}\n.vh-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.vh-percent-circle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border: 3px solid #7c3aed;\n  background: rgba(124, 58, 237, 0.06);\n}\n.vh-percent-circle[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 800;\n  color: #7c3aed;\n}\n.vh-percent-circle.done[_ngcontent-%COMP%] {\n  border-color: #10b981;\n  background: rgba(16, 185, 129, 0.06);\n}\n.vh-percent-circle.done[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.vh-resume-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px 16px;\n  border-radius: 8px;\n  background: #7c3aed;\n  color: white;\n  font-size: 0.82rem;\n  font-weight: 700;\n  text-decoration: none;\n  transition:\n    transform 0.18s,\n    box-shadow 0.18s,\n    background 0.18s;\n  white-space: nowrap;\n}\n.vh-resume-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.30);\n}\n.vh-resume-btn.completed[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.vh-resume-btn.completed[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.30);\n}\n/*# sourceMappingURL=video-history.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VideoHistoryComponent, [{
    type: Component,
    args: [{ selector: "app-video-history", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="vh-page">

  <header class="vh-header">
    <button type="button" class="vh-back-btn" (click)="goBack()">\u2190 Back</button>
    <div>
      <h1>\u{1F4FA} Watch History</h1>
      <p>\u09A4\u09C1\u09AE\u09BF \u09AF\u09C7\u09B8\u09AC lesson \u09A6\u09C7\u0996\u09C7\u099B</p>
    </div>
  </header>

  @if (isLoading()) {
    <div class="vh-loading">
      <div class="vh-spinner"></div>
      <p>Loading...</p>
    </div>
  }

  @else if (history().length === 0) {
    <div class="vh-empty">
      <div class="vh-empty-icon">\u{1F4ED}</div>
      <h2>\u0995\u09CB\u09A8\u09CB history \u09A8\u09C7\u0987</h2>
      <p>\u09A4\u09C1\u09AE\u09BF \u098F\u0996\u09A8\u09CB \u0995\u09CB\u09A8\u09CB video \u09A6\u09C7\u0996\u09A8\u09BF\u0964</p>
      <a routerLink="/courses" class="vh-browse-btn">Browse Courses</a>
    </div>
  }

  @else {
    <div class="vh-list">
      @for (item of history(); track item.lessonId) {
        <div class="vh-card">

          <!-- Progress bar -->
          <div class="vh-progress-wrap">
            <div class="vh-progress-bar"
              [style.width.%]="item.progressPercent"
              [class.completed]="item.isCompleted">
            </div>
          </div>

          <div class="vh-card-body">
            <!-- Left: info -->
            <div class="vh-info">
              <div class="vh-status-badge" [class.completed]="item.isCompleted">
                {{ item.isCompleted ? '\u2705 \u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8' : '\u25B6 \u099A\u09B2\u099B\u09C7' }}
              </div>
              <h3>{{ item.lessonTitle }}</h3>
              <div class="vh-meta">
                <span>\u23F1 {{ formatTime(item.watchedSeconds) }} / {{ formatTime(item.totalSeconds) }}</span>
                <span>\u{1F4C5} {{ formatDate(item.lastWatchedAt) }}</span>
              </div>
            </div>

            <!-- Right: percent + button -->
            <div class="vh-right">
              <div class="vh-percent-circle" [class.done]="item.isCompleted">
                <strong>{{ item.progressPercent }}%</strong>
              </div>
              <a
                [routerLink]="['/enrolled-course', item.courseId]"
                [queryParams]="{ lessonId: item.lessonId, resumeAt: item.watchedSeconds }"
                class="vh-resume-btn"
                [class.completed]="item.isCompleted">
                {{ item.isCompleted ? '\u{1F504} Rewatch' : '\u25B6 Resume' }}
              </a>
            </div>
          </div>

        </div>
      }
    </div>
  }

</div>`, styles: ['/* src/app/base/video-history/video-history.css */\n:host {\n  display: block;\n  min-height: 100vh;\n  background: #f8f8ff;\n}\n.vh-page {\n  max-width: 860px;\n  margin: 0 auto;\n  padding: 32px 24px 80px;\n  font-family: "Inter", sans-serif;\n  color: #111827;\n  min-height: 100vh;\n  background: #f8f8ff;\n}\n.vh-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 32px;\n}\n.vh-back-btn {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px 16px;\n  border-radius: 999px;\n  border: 1px solid rgba(17, 24, 39, 0.12);\n  background: white;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.87rem;\n  transition: background 0.18s;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.vh-back-btn:hover {\n  background: #f3f4f6;\n}\n.vh-header h1 {\n  font-size: 1.8rem;\n  font-weight: 800;\n  margin: 0 0 4px;\n  font-family: "Bricolage Grotesque", sans-serif;\n}\n.vh-header p {\n  font-size: 0.9rem;\n  color: rgba(17, 24, 39, 0.55);\n  margin: 0;\n}\n.vh-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 80px 0;\n}\n.vh-spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #7c3aed;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.vh-empty {\n  text-align: center;\n  padding: 80px 20px;\n}\n.vh-empty-icon {\n  font-size: 4rem;\n  margin-bottom: 16px;\n}\n.vh-empty h2 {\n  font-size: 1.5rem;\n  font-weight: 800;\n  margin-bottom: 8px;\n}\n.vh-empty p {\n  color: rgba(17, 24, 39, 0.55);\n  margin-bottom: 24px;\n}\n.vh-browse-btn {\n  display: inline-flex;\n  align-items: center;\n  padding: 12px 28px;\n  border-radius: 12px;\n  background: rgb(98, 98, 235);\n  color: black;\n  font-weight: 700;\n  text-decoration: none;\n  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.30);\n  transition: transform 0.2s;\n}\n.vh-browse-btn:hover {\n  transform: translateY(-2px);\n}\n.vh-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.vh-card {\n  background: white;\n  border-radius: 18px;\n  border: 1px solid rgba(17, 24, 39, 0.08);\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.vh-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.10);\n}\n.vh-progress-wrap {\n  height: 5px;\n  background: #e5e7eb;\n}\n.vh-progress-bar {\n  height: 100%;\n  background: #7c3aed;\n  border-radius: 0 999px 999px 0;\n  transition: width 0.5s;\n}\n.vh-progress-bar.completed {\n  background: #10b981;\n}\n.vh-card-body {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 20px 22px;\n}\n.vh-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.vh-status-badge {\n  display: inline-flex;\n  align-items: center;\n  width: fit-content;\n  padding: 3px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  background: rgba(124, 58, 237, 0.10);\n  color: #7c3aed;\n}\n.vh-status-badge.completed {\n  background: rgba(16, 185, 129, 0.10);\n  color: #10b981;\n}\n.vh-info h3 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n  line-height: 1.3;\n}\n.vh-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  font-size: 0.82rem;\n  color: rgba(17, 24, 39, 0.55);\n}\n.vh-right {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.vh-percent-circle {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border: 3px solid #7c3aed;\n  background: rgba(124, 58, 237, 0.06);\n}\n.vh-percent-circle strong {\n  font-size: 0.85rem;\n  font-weight: 800;\n  color: #7c3aed;\n}\n.vh-percent-circle.done {\n  border-color: #10b981;\n  background: rgba(16, 185, 129, 0.06);\n}\n.vh-percent-circle.done strong {\n  color: #10b981;\n}\n.vh-resume-btn {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px 16px;\n  border-radius: 8px;\n  background: #7c3aed;\n  color: white;\n  font-size: 0.82rem;\n  font-weight: 700;\n  text-decoration: none;\n  transition:\n    transform 0.18s,\n    box-shadow 0.18s,\n    background 0.18s;\n  white-space: nowrap;\n}\n.vh-resume-btn:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.30);\n}\n.vh-resume-btn.completed {\n  background: #10b981;\n}\n.vh-resume-btn.completed:hover {\n  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.30);\n}\n/*# sourceMappingURL=video-history.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VideoHistoryComponent, { className: "VideoHistoryComponent", filePath: "app/base/video-history/video-history.ts", lineNumber: 15 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "homepage", pathMatch: "full" },
  { path: "login", component: Login },
  { path: "register", component: Register },
  { path: "onboarding-preferences", component: OnboardingPreferences, canActivate: [authGuard] },
  { path: "homepage", component: HomePage },
  { path: "profile", component: Profile, canActivate: [authGuard] },
  {
    path: "teacher",
    loadComponent: () => import("./chunk-ZOIWKCB6.js").then((m) => m.Teacher),
    canActivate: [authGuard, teacherGuard]
  },
  { path: "courses", component: Courses },
  { path: "course-details/:id", component: CourseDetails },
  { path: "enrolled-course/:id", component: EnrolledCourse, canActivate: [authGuard] },
  { path: "payment", component: Payment, canActivate: [authGuard] },
  { path: "my-courses", component: MyCourses, canActivate: [authGuard] },
  { path: "assignments", component: Assignment, canActivate: [authGuard] },
  { path: "myClasses", component: MyClasses, canActivate: [authGuard] },
  { path: "certificates", component: Certificates, canActivate: [authGuard] },
  { path: "quiz-editor/:lessonId", component: QuizEditorComponent, canActivate: [authGuard, teacherGuard] },
  { path: "quiz/:lessonId", component: QuizAttemptComponent, canActivate: [authGuard] },
  { path: "history", component: VideoHistoryComponent, canActivate: [authGuard] },
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
    provideRouter(routes),
    provideAnimations(),
    provideToastr()
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
