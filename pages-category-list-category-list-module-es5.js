function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-list-category-list-module"], {
  /***/
  "./src/app/pages/category-list/category-list.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/category-list/category-list.module.ts ***!
    \*************************************************************/

  /*! exports provided: CategoryListPageModule */

  /***/
  function srcAppPagesCategoryListCategoryListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryListPageModule", function () {
      return CategoryListPageModule;
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


    var _category_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./category-list */
    "./src/app/pages/category-list/category-list.ts");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared.module */
    "./src/app/shared.module.ts");

    var CategoryListPageModule = function CategoryListPageModule() {
      _classCallCheck(this, CategoryListPageModule);
    };

    CategoryListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CategoryListPageModule
    });
    CategoryListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CategoryListPageModule_Factory(t) {
        return new (t || CategoryListPageModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: '',
        component: _category_list__WEBPACK_IMPORTED_MODULE_2__["CategoryListPage"]
      }]), _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CategoryListPageModule, {
        declarations: [_category_list__WEBPACK_IMPORTED_MODULE_2__["CategoryListPage"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryListPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_category_list__WEBPACK_IMPORTED_MODULE_2__["CategoryListPage"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _category_list__WEBPACK_IMPORTED_MODULE_2__["CategoryListPage"]
          }]), _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/category-list/category-list.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/category-list/category-list.ts ***!
    \******************************************************/

  /*! exports provided: CategoryListPage */

  /***/
  function srcAppPagesCategoryListCategoryListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryListPage", function () {
      return CategoryListPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/category */
    "./src/app/services/category.ts");
    /* harmony import */


    var _base_page_base_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../base-page/base-page */
    "./src/app/pages/base-page/base-page.ts");
    /* harmony import */


    var _services_sub_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/sub-category */
    "./src/app/services/sub-category.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/item */
    "./src/app/services/item.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_empty_view_empty_view__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../components/empty-view/empty-view */
    "./src/app/components/empty-view/empty-view.ts");
    /* harmony import */


    var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ng-lazyload-image */
    "./node_modules/ng-lazyload-image/__ivy_ngcc__/fesm2015/ng-lazyload-image.js");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-skeleton-loader */
    "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm2015/ngx-skeleton-loader.js");

    function CategoryListPage_ion_grid_12_ion_list_1_ion_item_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryListPage_ion_grid_12_ion_list_1_ion_item_1_Template_ion_item_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r147);

          var suggestion_r145 = ctx.$implicit;

          var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r146.onSuggestionTouched(suggestion_r145);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-text", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var suggestion_r145 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", suggestion_r145.name, " ");
      }
    }

    function CategoryListPage_ion_grid_12_ion_list_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CategoryListPage_ion_grid_12_ion_list_1_ion_item_1_Template, 5, 1, "ion-item", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@staggerIn", ctx_r143.suggestions.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r143.suggestions);
      }
    }

    function CategoryListPage_ion_grid_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-grid", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CategoryListPage_ion_grid_12_ion_list_1_Template, 2, 2, "ion-list", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r138.suggestions.length);
      }
    }

    function CategoryListPage_empty_view_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "empty-view", 23);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", "ERROR DE CONEXION");
      }
    }

    function CategoryListPage_empty_view_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "empty-view", 23);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", "SIN PRODUCTOS DISPONIBLES");
      }
    }

    function CategoryListPage_ion_row_16_ion_col_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryListPage_ion_row_16_ion_col_6_Template_ion_col_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r151);

          var category_r149 = ctx.$implicit;

          var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r150.goToSubCategoryPage(category_r149);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-text", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r149 = ctx.$implicit;

        var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", category_r149.imageThumb == null ? null : category_r149.imageThumb.url())("customObservable", ctx_r148.loadAndScroll);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r149.name, " ");
      }
    }

    function CategoryListPage_ion_row_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryListPage_ion_row_16_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r153);

          var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r152.onViewAll();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "VER TODO");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CategoryListPage_ion_row_16_ion_col_6_Template, 5, 3, "ion-col", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@staggerIn", ctx_r141.categories.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r141.categories)("ngForTrackBy", ctx_r141.trackByFn);
      }
    }

    var _c0 = function _c0() {
      return {
        width: "60px",
        height: "60px"
      };
    };

    function CategoryListPage_section_17_ion_col_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-skeleton-loader", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function CategoryListPage_section_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CategoryListPage_section_17_ion_col_2_Template, 2, 2, "ion-col", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r142.skeletonArray);
      }
    }

    var CategoryListPage =
    /*#__PURE__*/
    function (_base_page_base_page_) {
      _inherits(CategoryListPage, _base_page_base_page_);

      function CategoryListPage(injector, categoryService, itemService, subCategoryService) {
        var _this;

        _classCallCheck(this, CategoryListPage);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(CategoryListPage).call(this, injector));
        _this.categoryService = categoryService;
        _this.itemService = itemService;
        _this.subCategoryService = subCategoryService;
        _this.categories = [];
        _this.params = {};
        _this.skeletonArray = Array(32);
        _this.suggestions = [];
        _this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        return _this;
      }

      _createClass(CategoryListPage, [{
        key: "enableMenuSwipe",
        value: function enableMenuSwipe() {
          return false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setupObservable();
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
                    if (this.categories.length) {
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
        key: "setupObservable",
        value: function setupObservable() {
          this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this.container.ionScroll, this.contentLoaded);
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
                    return this.categoryService.load(this.params);

                  case 4:
                    this.categories = _context2.sent;

                    if (this.categories.length) {
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
        key: "isPathFromHome",
        value: function isPathFromHome() {
          return this.router.url === '/1/home/categories';
        }
      }, {
        key: "onViewAll",
        value: function onViewAll() {
          var path = this.isPathFromHome() ? '../' : './';
          this.navigateToRelative(path + 'items');
        }
      }, {
        key: "onSuggestionTouched",
        value: function onSuggestionTouched(suggestion) {
          this.suggestions = [];
          var path = this.isPathFromHome() ? '../' : './';
          this.navigateToRelative(path + 'items/' + suggestion.slug);
        }
      }, {
        key: "goToSubCategoryPage",
        value: function goToSubCategoryPage(category) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var path, count;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    path = this.isPathFromHome() ? '../' : './';
                    _context3.prev = 1;

                    if (!(category.subCategoryCount > 0)) {
                      _context3.next = 6;
                      break;
                    }

                    this.navigateToRelative(path + 'subcategories', {
                      categoryId: category.id
                    });
                    _context3.next = 17;
                    break;

                  case 6:
                    if (!(category.subCategoryCount === 0)) {
                      _context3.next = 10;
                      break;
                    }

                    this.navigateToRelative(path + 'items', {
                      cat: category.id
                    });
                    _context3.next = 17;
                    break;

                  case 10:
                    _context3.next = 12;
                    return this.showLoadingView({
                      showOverlay: false
                    });

                  case 12:
                    _context3.next = 14;
                    return this.subCategoryService.count({
                      category: category
                    });

                  case 14:
                    count = _context3.sent;

                    if (count) {
                      this.navigateToRelative(path + 'subcategories', {
                        categoryId: category.id
                      });
                    } else {
                      this.navigateToRelative(path + 'items', {
                        cat: category.id
                      });
                    }

                    this.showContentView();

                  case 17:
                    _context3.next = 23;
                    break;

                  case 19:
                    _context3.prev = 19;
                    _context3.t0 = _context3["catch"](1);
                    this.showContentView();
                    this.translate.get('ERROR_NETWORK').subscribe(function (str) {
                      return _this4.showToast(str);
                    });

                  case 23:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[1, 19]]);
          }));
        }
      }, {
        key: "onSearch",
        value: function onSearch() {
          var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var searchTerm;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    searchTerm = event.target.value;

                    if (!searchTerm) {
                      _context4.next = 11;
                      break;
                    }

                    _context4.prev = 2;
                    _context4.next = 5;
                    return this.itemService.load({
                      tag: searchTerm.toLowerCase(),
                      limit: 10
                    });

                  case 5:
                    this.suggestions = _context4.sent;
                    _context4.next = 11;
                    break;

                  case 8:
                    _context4.prev = 8;
                    _context4.t0 = _context4["catch"](2);
                    console.log(_context4.t0.message);

                  case 11:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this, [[2, 8]]);
          }));
        }
      }, {
        key: "onClearSearch",
        value: function onClearSearch() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.suggestions = [];

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
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
          return never.replace('http://localhost:1337/api/', _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].serverUrl);
        }
      }]);

      return CategoryListPage;
    }(_base_page_base_page__WEBPACK_IMPORTED_MODULE_4__["BasePage"]);

    CategoryListPage.ɵfac = function CategoryListPage_Factory(t) {
      return new (t || CategoryListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_category__WEBPACK_IMPORTED_MODULE_3__["Category"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_item__WEBPACK_IMPORTED_MODULE_7__["Item"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_sub_category__WEBPACK_IMPORTED_MODULE_5__["SubCategory"]));
    };

    CategoryListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CategoryListPage,
      selectors: [["page-category-list"]],
      viewQuery: function CategoryListPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 18,
      vars: 6,
      consts: [[1, "ion-no-border"], ["fixed", "", 2, "display", "flex", "flex-direction", "column", "justify-content", "center", "align-items", "center", "padding-bottom", "8px"], [1, "show-sm-up"], [1, "logo", 2, "justify-content", "center", "align-items", "center", "display", "flex"], ["mode", "ios", 3, "placeholder", "ionClear", "ionChange"], ["scrollEvents", "true"], ["container", ""], ["slot", "fixed", 3, "ionRefresh"], ["pullingText", "Deslizar para actualizar", "refreshingText", "Actualizar"], ["slot", "fixed", 2, "left", "16px", "right", "16px"], ["class", "relative", "fixed", "", 4, "ngIf"], ["fixed", ""], ["icon", "alert-circle-outline", 3, "text", 4, "ngIf"], ["class", "ion-margin-vertical", 4, "ngIf"], [4, "ngIf"], ["fixed", "", 1, "relative"], ["lines", "none", "class", "ion-no-margin", "class", "shadow autocomplete", 4, "ngIf"], ["lines", "none", 1, "shadow", "autocomplete"], ["class", "hover", "button", "", "detail", "false", "style", "--min-height: 70px;", 3, "click", 4, "ngFor", "ngForOf"], ["button", "", "detail", "false", 1, "hover", 2, "--min-height", "70px", 3, "click"], [1, "hide-xs-only"], ["color", "dark"], [1, "link", "bold", "text-medium"], ["icon", "alert-circle-outline", 3, "text"], [1, "ion-margin-vertical"], ["size-xs", "3", 1, "ion-text-center"], [1, "circle", "dark-bg", 3, "click"], [1, "circle-inner"], [1, "bold", "link"], ["size-xs", "3", "class", "ion-text-center", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["size-xs", "3", 1, "ion-text-center", 3, "click"], ["defaultImage", "./assets/imgs/placeholder.png", 1, "circle", "bg-img", 3, "lazyLoad", "customObservable"], [1, "link", "margin-6", "text-medium"], [1, "ion-text-center"], ["size-xs", "3", 4, "ngFor", "ngForOf"], ["size-xs", "3"], ["count", "1", "appearance", "circle", 3, "theme"]],
      template: function CategoryListPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "CATEGORIAS");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-searchbar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionClear", function CategoryListPage_Template_ion_searchbar_ionClear_6_listener() {
            return ctx.onClearSearch();
          })("ionChange", function CategoryListPage_Template_ion_searchbar_ionChange_6_listener($event) {
            return ctx.onSearch($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-refresher", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function CategoryListPage_Template_ion_refresher_ionRefresh_9_listener($event) {
            return ctx.loadData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ion-refresher-content", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CategoryListPage_ion_grid_12_Template, 2, 1, "ion-grid", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-grid", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CategoryListPage_empty_view_14_Template, 1, 1, "empty-view", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CategoryListPage_empty_view_15_Template, 1, 1, "empty-view", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CategoryListPage_ion_row_16_Template, 7, 3, "ion-row", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CategoryListPage_section_17_Template, 3, 1, "section", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", "Buscar productos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.suggestions.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isErrorViewVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEmptyViewVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isContentViewVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoadingViewVisible);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonText"], _components_empty_view_empty_view__WEBPACK_IMPORTED_MODULE_11__["EmptyView"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_12__["LazyLoadImageDirective"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_13__["NgxSkeletonLoaderComponent"]],
      styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light);\n}\n\nion-grid[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\nion-searchbar[_ngcontent-%COMP%] {\n  padding: 0 8px !important;\n}\n\nion-buttons[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n@media (min-width: 992px) {\n  ion-col[_ngcontent-%COMP%] {\n    margin: 16px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnktbGlzdC9DOlxcVXNlcnNcXHNtb2tlXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcRWxldmVublxcYXBwc1xcc2hvcFxcaW9uc2hvcC1hcHAvc3JjXFxhcHBcXHBhZ2VzXFxjYXRlZ29yeS1saXN0XFxjYXRlZ29yeS1saXN0LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5LWxpc3QvY2F0ZWdvcnktbGlzdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUVFO0lBQ0UsY0FBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXRlZ29yeS1saXN0L2NhdGVnb3J5LWxpc3Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG5pb24tZ3JpZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICBwYWRkaW5nOiAwIDhweCAhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9ucyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG5cbiAgaW9uLWNvbCB7XG4gICAgbWFyZ2luOiAxNnB4IDA7XG4gIH1cblxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG5pb24tZ3JpZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICBwYWRkaW5nOiAwIDhweCAhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9ucyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIGlvbi1jb2wge1xuICAgIG1hcmdpbjogMTZweCAwO1xuICB9XG59Il19 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('staggerIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 0,
          transform: "translate3d(0,10px,0)"
        }), {
          optional: true
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["stagger"])('40ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 1,
          transform: "translate3d(0,0,0)"
        }))]), {
          optional: true
        })])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CategoryListPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'page-category-list',
          templateUrl: 'category-list.html',
          styleUrls: ['category-list.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('staggerIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            opacity: 0,
            transform: "translate3d(0,10px,0)"
          }), {
            optional: true
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["stagger"])('40ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
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
          type: _services_category__WEBPACK_IMPORTED_MODULE_3__["Category"]
        }, {
          type: src_app_services_item__WEBPACK_IMPORTED_MODULE_7__["Item"]
        }, {
          type: _services_sub_category__WEBPACK_IMPORTED_MODULE_5__["SubCategory"]
        }];
      }, {
        container: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], {
            static: true
          }]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-category-list-category-list-module-es5.js.map