function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sub-category-list-sub-category-list-module"], {
  /***/
  "./src/app/pages/sub-category-list/sub-category-list.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/sub-category-list/sub-category-list.module.ts ***!
    \*********************************************************************/

  /*! exports provided: SubCategoryListPageModule */

  /***/
  function srcAppPagesSubCategoryListSubCategoryListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubCategoryListPageModule", function () {
      return SubCategoryListPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _sub_category_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sub-category-list */
    "./src/app/pages/sub-category-list/sub-category-list.ts");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared.module */
    "./src/app/shared.module.ts");

    var SubCategoryListPageModule = function SubCategoryListPageModule() {
      _classCallCheck(this, SubCategoryListPageModule);
    };

    SubCategoryListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SubCategoryListPageModule
    });
    SubCategoryListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SubCategoryListPageModule_Factory(t) {
        return new (t || SubCategoryListPageModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: '',
        component: _sub_category_list__WEBPACK_IMPORTED_MODULE_2__["SubCategoryListPage"]
      }]), _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SubCategoryListPageModule, {
        declarations: [_sub_category_list__WEBPACK_IMPORTED_MODULE_2__["SubCategoryListPage"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubCategoryListPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_sub_category_list__WEBPACK_IMPORTED_MODULE_2__["SubCategoryListPage"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _sub_category_list__WEBPACK_IMPORTED_MODULE_2__["SubCategoryListPage"]
          }]), _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/sub-category-list/sub-category-list.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/sub-category-list/sub-category-list.ts ***!
    \**************************************************************/

  /*! exports provided: SubCategoryListPage */

  /***/
  function srcAppPagesSubCategoryListSubCategoryListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubCategoryListPage", function () {
      return SubCategoryListPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-page/base-page */
    "./src/app/pages/base-page/base-page.ts");
    /* harmony import */


    var _services_sub_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/sub-category */
    "./src/app/services/sub-category.ts");
    /* harmony import */


    var src_app_services_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/category */
    "./src/app/services/category.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_empty_view_empty_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../components/empty-view/empty-view */
    "./src/app/components/empty-view/empty-view.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ng-lazyload-image */
    "./node_modules/ng-lazyload-image/__ivy_ngcc__/fesm2015/ng-lazyload-image.js");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-skeleton-loader */
    "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm2015/ngx-skeleton-loader.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function SubCategoryListPage_empty_view_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "empty-view", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "ERROR_DATA"));
      }
    }

    function SubCategoryListPage_empty_view_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "empty-view", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "EMPTY_DATA"));
      }
    }

    var _c0 = function _c0() {
      return ["../items"];
    };

    var _c1 = function _c1(a0) {
      return {
        subcat: a0
      };
    };

    function SubCategoryListPage_ion_row_13_ion_col_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-text", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r162 = ctx.$implicit;

        var ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, category_r162.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", category_r162.imageThumb == null ? null : category_r162.imageThumb.url())("customObservable", ctx_r161.loadAndScroll);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r162.name, " ");
      }
    }

    var _c2 = function _c2(a0) {
      return {
        cat: a0
      };
    };

    function SubCategoryListPage_ion_row_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SubCategoryListPage_ion_row_13_ion_col_7_Template, 5, 8, "ion-col", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@staggerIn", ctx_r159.subcategories.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c2, ctx_r159.params == null ? null : ctx_r159.params.category == null ? null : ctx_r159.params.category.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 6, "VIEW_ALL"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r159.subcategories)("ngForTrackBy", ctx_r159.trackByFn);
      }
    }

    var _c3 = function _c3() {
      return {
        width: "60px",
        height: "60px"
      };
    };

    function SubCategoryListPage_section_14_ion_col_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-skeleton-loader", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c3));
      }
    }

    function SubCategoryListPage_section_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SubCategoryListPage_section_14_ion_col_2_Template, 2, 2, "ion-col", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r160.skeletonArray);
      }
    }

    var SubCategoryListPage =
    /*#__PURE__*/
    function (_base_page_base_page_) {
      _inherits(SubCategoryListPage, _base_page_base_page_);

      function SubCategoryListPage(injector, subCategoryService) {
        var _this;

        _classCallCheck(this, SubCategoryListPage);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(SubCategoryListPage).call(this, injector));
        _this.subCategoryService = subCategoryService;
        _this.subcategories = [];
        _this.params = {};
        _this.skeletonArray = Array(32);
        _this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        return _this;
      }

      _createClass(SubCategoryListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var category = new src_app_services_category__WEBPACK_IMPORTED_MODULE_4__["Category"]();
          category.id = this.getQueryParams().categoryId;
          this.params.category = category;
          this.setupObservable();
        }
      }, {
        key: "enableMenuSwipe",
        value: function enableMenuSwipe() {
          return false;
        }
      }, {
        key: "setupObservable",
        value: function setupObservable() {
          this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.container.ionScroll, this.contentLoaded);
        }
      }, {
        key: "onContentLoaded",
        value: function onContentLoaded() {
          var _this2 = this;

          setTimeout(function () {
            _this2.contentLoaded.next();
          }, 400);
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var title;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.subcategories.length) {
                      _context.next = 6;
                      break;
                    }

                    _context.next = 3;
                    return this.showLoadingView({
                      showOverlay: false
                    });

                  case 3:
                    this.loadData();
                    _context.next = 7;
                    break;

                  case 6:
                    this.onContentLoaded();

                  case 7:
                    _context.next = 9;
                    return this.getTrans('CATEGORIES');

                  case 9:
                    title = _context.sent;
                    this.setPageTitle(title);
                    this.setMetaTags({
                      title: title
                    });

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.refresher = event.target;
                    _context2.prev = 1;
                    _context2.next = 4;
                    return this.subCategoryService.load(this.params);

                  case 4:
                    this.subcategories = _context2.sent;

                    if (this.subcategories.length) {
                      this.showContentView();
                    } else {
                      this.showEmptyView();
                    }

                    this.onRefreshComplete();
                    this.onContentLoaded();
                    _context2.next = 15;
                    break;

                  case 10:
                    _context2.prev = 10;
                    _context2.t0 = _context2["catch"](1);
                    this.translate.get('ERROR_NETWORK').subscribe(function (str) {
                      return _this3.showToast(str);
                    });
                    this.onRefreshComplete();
                    this.showErrorView();

                  case 15:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[1, 10]]);
          }));
        }
      }, {
        key: "trackByFn",
        value: function trackByFn(index, item) {
          if (!item) return null;
          return item.id;
        }
      }, {
        key: "replaceUrl",
        value: function replaceUrl(never) {
          return never.replace('http://localhost:1337/api/', _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].serverUrl);
        }
      }]);

      return SubCategoryListPage;
    }(_base_page_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]);

    SubCategoryListPage.ɵfac = function SubCategoryListPage_Factory(t) {
      return new (t || SubCategoryListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_sub_category__WEBPACK_IMPORTED_MODULE_3__["SubCategory"]));
    };

    SubCategoryListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SubCategoryListPage,
      selectors: [["page-sub-category-list"]],
      viewQuery: function SubCategoryListPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 15,
      vars: 10,
      consts: [[1, "ion-no-border"], ["fixed", ""], ["text", "", "slot", "start"], ["scrollEvents", "true"], ["container", ""], ["slot", "fixed", 3, "ionRefresh"], [3, "pullingText", "refreshingText"], ["icon", "alert-circle-outline", 3, "text", 4, "ngIf"], ["class", "ion-margin-vertical", 4, "ngIf"], [4, "ngIf"], ["icon", "alert-circle-outline", 3, "text"], [1, "ion-margin-vertical"], ["size-xs", "3", 1, "ion-text-center"], [1, "circle", "dark-bg", 3, "routerLink", "queryParams"], [1, "circle-inner"], [1, "bold", "link"], ["size-xs", "3", "class", "ion-text-center", 3, "routerLink", "queryParams", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["size-xs", "3", 1, "ion-text-center", 3, "routerLink", "queryParams"], ["defaultImage", "./assets/imgs/placeholder.png", 1, "circle", "bg-img", 3, "lazyLoad", "customObservable"], ["color", "dark"], [1, "link", "margin-6", "text-medium"], [1, "ion-nowrap", "text-center"], ["size-xs", "4", "size-sm", "6", "size-md", "6", "size-lg", "2", 4, "ngFor", "ngForOf"], ["size-xs", "4", "size-sm", "6", "size-md", "6", "size-lg", "2"], ["count", "1", "appearance", "circle", 3, "theme"]],
      template: function SubCategoryListPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-content", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-refresher", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function SubCategoryListPage_Template_ion_refresher_ionRefresh_6_listener($event) {
            return ctx.loadData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-refresher-content", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-grid", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SubCategoryListPage_empty_view_11_Template, 2, 3, "empty-view", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SubCategoryListPage_empty_view_12_Template, 2, 3, "empty-view", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SubCategoryListPage_ion_row_13_Template, 8, 11, "ion-row", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SubCategoryListPage_section_14_Template, 3, 1, "section", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("pullingText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 6, "PULL_TO_REFRESH"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("refreshingText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 8, "REFRESHING"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isErrorViewVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEmptyViewVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isContentViewVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoadingViewVisible);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonGrid"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _components_empty_view_empty_view__WEBPACK_IMPORTED_MODULE_10__["EmptyView"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonCol"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["RouterLinkDelegate"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_12__["LazyLoadImageDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonText"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_13__["NgxSkeletonLoaderComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]],
      styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light);\n}\n\nion-grid[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\n@media (min-width: 992px) {\n  ion-col[_ngcontent-%COMP%] {\n    margin: 16px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3ViLWNhdGVnb3J5LWxpc3QvQzpcXFVzZXJzXFxzbW9rZVxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXEVsZXZlbm5cXGFwcHNcXHNob3BcXGlvbnNob3AtYXBwL3NyY1xcYXBwXFxwYWdlc1xcc3ViLWNhdGVnb3J5LWxpc3RcXHN1Yi1jYXRlZ29yeS1saXN0LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N1Yi1jYXRlZ29yeS1saXN0L3N1Yi1jYXRlZ29yeS1saXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUVFO0lBQ0UsY0FBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdWItY2F0ZWdvcnktbGlzdC9zdWItY2F0ZWdvcnktbGlzdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbmlvbi1ncmlkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG5cbiAgaW9uLWNvbCB7XG4gICAgbWFyZ2luOiAxNnB4IDA7XG4gIH1cblxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG5pb24tZ3JpZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICBpb24tY29sIHtcbiAgICBtYXJnaW46IDE2cHggMDtcbiAgfVxufSJdfQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('staggerIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 0,
          transform: "translate3d(0,10px,0)"
        }), {
          optional: true
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 1,
          transform: "translate3d(0,0,0)"
        }))]), {
          optional: true
        })])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SubCategoryListPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'page-sub-category-list',
          templateUrl: 'sub-category-list.html',
          styleUrls: ['sub-category-list.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('staggerIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            opacity: 0,
            transform: "translate3d(0,10px,0)"
          }), {
            optional: true
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            opacity: 1,
            transform: "translate3d(0,0,0)"
          }))]), {
            optional: true
          })])])]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _services_sub_category__WEBPACK_IMPORTED_MODULE_3__["SubCategory"]
        }];
      }, {
        container: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], {
            static: true
          }]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-sub-category-list-sub-category-list-module-es5.js.map