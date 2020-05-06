function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
  /***/
  "./src/app/pages/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home */
    "./src/app/pages/home/home.ts");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared.module */
    "./src/app/shared.module.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomePageModule
    });
    HomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomePageModule_Factory(t) {
        return new (t || HomePageModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: '',
        component: _home__WEBPACK_IMPORTED_MODULE_2__["HomePage"]
      }]), _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomePageModule, {
        declarations: [_home__WEBPACK_IMPORTED_MODULE_2__["HomePage"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_home__WEBPACK_IMPORTED_MODULE_2__["HomePage"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _home__WEBPACK_IMPORTED_MODULE_2__["HomePage"]
          }]), _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/home/home.ts":
  /*!************************************!*\
    !*** ./src/app/pages/home/home.ts ***!
    \************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppPagesHomeHomeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base-page/base-page */
    "./src/app/pages/base-page/base-page.ts");
    /* harmony import */


    var _services_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/item */
    "./src/app/services/item.ts");
    /* harmony import */


    var parse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! parse */
    "./node_modules/parse/index.js");
    /* harmony import */


    var parse__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _services_sub_category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/sub-category */
    "./src/app/services/sub-category.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_empty_view_empty_view__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../components/empty-view/empty-view */
    "./src/app/components/empty-view/empty-view.ts");
    /* harmony import */


    var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ng-lazyload-image */
    "./node_modules/ng-lazyload-image/__ivy_ngcc__/fesm2015/ng-lazyload-image.js");
    /* harmony import */


    var _components_shop_item_shop_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../components/shop-item/shop-item.component */
    "./src/app/components/shop-item/shop-item.component.ts");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-skeleton-loader */
    "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm2015/ngx-skeleton-loader.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function HomePage_ion_grid_14_ion_item_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_ion_grid_14_ion_item_2_Template_ion_item_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r12.suggestions = [];
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-text", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var suggestion_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, "./items/" + suggestion_r11.slug));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", suggestion_r11.name, " ");
      }
    }

    function HomePage_ion_grid_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-grid", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-list", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomePage_ion_grid_14_ion_item_2_Template, 5, 4, "ion-item", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@staggerIn", ctx_r5.suggestions.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.suggestions)("ngForTrackBy", ctx_r5.trackByFn);
      }
    }

    function HomePage_empty_view_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "empty-view", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "ERROR_DATA"));
      }
    }

    function HomePage_empty_view_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "empty-view", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "EMPTY_DATA"));
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "background-image": a0
      };
    };

    function HomePage_div_18_ion_slide_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slide", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_div_18_ion_slide_3_Template_ion_slide_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

          var slide_r21 = ctx.$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r22.onSlideTouched(slide_r21);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c1, "url(" + (slide_r21.image == null ? null : slide_r21.image.url()) + ")"));
      }
    }

    function HomePage_div_18_div_4_ion_col_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_div_18_div_4_ion_col_9_Template_ion_col_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);

          var category_r25 = ctx.$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r26.onCategoryTouched(category_r25);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-text", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r25 = ctx.$implicit;

        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("offset", 300)("lazyLoad", category_r25.imageThumb == null ? null : category_r25.imageThumb.url())("customObservable", ctx_r24.loadAndScroll);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r25.name, " ");
      }
    }

    var _c2 = function _c2() {
      return ["./categories"];
    };

    function HomePage_div_18_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " CATEGORIAS ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-col", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-label", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " MAS ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-row", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HomePage_div_18_div_4_ion_col_9_Template, 5, 4, "ion-col", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@staggerIn", ctx_r15.categories.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r15.categories)("ngForTrackBy", ctx_r15.trackByFn);
      }
    }

    var _c3 = function _c3() {
      return ["./items"];
    };

    var _c4 = function _c4(a0) {
      return {
        brand: a0
      };
    };

    function HomePage_div_18_div_5_ion_slide_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slide");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-text", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var brand_r30 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c3))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c4, brand_r30.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-image", "url(" + (brand_r30.image == null ? null : brand_r30.image.url()) + ")", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", brand_r30.name, " ");
      }
    }

    function HomePage_div_18_div_5_ion_col_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-text", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var brand_r31 = ctx.$implicit;

        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c3))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c4, brand_r31.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("offset", 300)("lazyLoad", brand_r31.image == null ? null : brand_r31.image.url())("customObservable", ctx_r29.loadAndScroll);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", brand_r31.name, " ");
      }
    }

    var _c5 = function _c5() {
      return ["./brands"];
    };

    function HomePage_div_18_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " MARCAS ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-col", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-label", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " MAS ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-slides", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionSlidesDidLoad", function HomePage_div_18_div_5_Template_ion_slides_ionSlidesDidLoad_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r32.onSlidesBrandsLoaded();
        })("ionSlideWillChange", function HomePage_div_18_div_5_Template_ion_slides_ionSlideWillChange_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r34.onSlidesBrandsChange();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HomePage_div_18_div_5_ion_slide_9_Template, 6, 8, "ion-slide", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-row", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HomePage_div_18_div_5_ion_col_12_Template, 6, 9, "ion-col", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c5));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r16.slidesBrandsConfig);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r16.brands)("ngForTrackBy", ctx_r16.trackByFn);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@staggerIn", ctx_r16.brands.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r16.brands)("ngForTrackBy", ctx_r16.trackByFn);
      }
    }

    function HomePage_div_18_section_6_ion_slide_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slide");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-shop-item", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r37 = ctx.$implicit;

        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", item_r37)("customObservable", ctx_r35.slidesItemsOnSaleObservable);
      }
    }

    function HomePage_div_18_section_6_ion_col_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-shop-item", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r38 = ctx.$implicit;

        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", item_r38)("customObservable", ctx_r36.loadAndScroll);
      }
    }

    var _c6 = function _c6() {
      return {
        sale: "1"
      };
    };

    function HomePage_div_18_section_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-label", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " MAS ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-slides", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionSlideWillChange", function HomePage_div_18_section_6_Template_ion_slides_ionSlideWillChange_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r39.onSlidesItemsOnSaleChange();
        })("ionSlidesDidLoad", function HomePage_div_18_section_6_Template_ion_slides_ionSlidesDidLoad_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r41.onSlidesItemsOnSaleLoaded();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomePage_div_18_section_6_ion_slide_11_Template, 2, 2, "ion-slide", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HomePage_div_18_section_6_ion_col_14_Template, 2, 2, "ion-col", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 8, "ON_SALE"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c3))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c6));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r17.slidesItemsConfig);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r17.itemsOnSale)("ngForTrackBy", ctx_r17.trackByFn);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r17.itemsOnSale)("ngForTrackBy", ctx_r17.trackByFn);
      }
    }

    function HomePage_div_18_section_7_ion_slide_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slide");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-shop-item", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r44 = ctx.$implicit;

        var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", item_r44)("customObservable", ctx_r42.slidesItemsNewArrivalObservable);
      }
    }

    function HomePage_div_18_section_7_ion_col_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-shop-item", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r45 = ctx.$implicit;

        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", item_r45)("customObservable", ctx_r43.loadAndScroll);
      }
    }

    var _c7 = function _c7() {
      return {
        new: "1"
      };
    };

    function HomePage_div_18_section_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " LO MAS NUEVO ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-col", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-label", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " MAS ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-slides", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionSlideWillChange", function HomePage_div_18_section_7_Template_ion_slides_ionSlideWillChange_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r46.onSlidesItemsNewArrivalChange();
        })("ionSlidesDidLoad", function HomePage_div_18_section_7_Template_ion_slides_ionSlidesDidLoad_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r48.onSlidesItemsNewArrivalLoaded();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HomePage_div_18_section_7_ion_slide_10_Template, 2, 2, "ion-slide", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HomePage_div_18_section_7_ion_col_13_Template, 2, 2, "ion-col", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c3))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c7));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r18.slidesItemsConfig);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r18.itemsNewArrival)("ngForTrackBy", ctx_r18.trackByFn);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r18.itemsNewArrival)("ngForTrackBy", ctx_r18.trackByFn);
      }
    }

    function HomePage_div_18_section_8_ion_slide_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slide");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-shop-item", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r51 = ctx.$implicit;

        var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", item_r51)("customObservable", ctx_r49.slidesItemsFeaturedObservable);
      }
    }

    function HomePage_div_18_section_8_ion_col_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-shop-item", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r52 = ctx.$implicit;

        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", item_r52)("customObservable", ctx_r50.loadAndScroll);
      }
    }

    var _c8 = function _c8() {
      return {
        featured: "1"
      };
    };

    function HomePage_div_18_section_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-label", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " MAS ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-slides", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionSlideWillChange", function HomePage_div_18_section_8_Template_ion_slides_ionSlideWillChange_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54);

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r53.onSlidesItemsFeaturedChange();
        })("ionSlidesDidLoad", function HomePage_div_18_section_8_Template_ion_slides_ionSlidesDidLoad_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54);

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r55.onSlidesItemsFeaturedLoaded();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomePage_div_18_section_8_ion_slide_11_Template, 2, 2, "ion-slide", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HomePage_div_18_section_8_ion_col_14_Template, 2, 2, "ion-col", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 8, "FEATURED"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c3))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c8));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r19.slidesItemsConfig);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r19.itemsFeatured)("ngForTrackBy", ctx_r19.trackByFn);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r19.itemsFeatured)("ngForTrackBy", ctx_r19.trackByFn);
      }
    }

    function HomePage_div_18_ion_col_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-shop-item", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r56 = ctx.$implicit;

        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", item_r56)("customObservable", ctx_r20.loadAndScroll);
      }
    }

    function HomePage_div_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-slides", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionSlidesDidLoad", function HomePage_div_18_Template_ion_slides_ionSlidesDidLoad_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58);

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r57.onSlidesDidLoad();
        })("ionSlideWillChange", function HomePage_div_18_Template_ion_slides_ionSlideWillChange_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58);

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r59.onSlidesDidChange();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HomePage_div_18_ion_slide_3_Template, 2, 3, "ion-slide", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomePage_div_18_div_4_Template, 10, 5, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomePage_div_18_div_5_Template, 13, 8, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomePage_div_18_section_6_Template, 15, 12, "section", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomePage_div_18_section_7_Template, 14, 9, "section", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HomePage_div_18_section_8_Template, 15, 12, "section", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-row", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " TODOS ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-col", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " MAS ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, HomePage_div_18_ion_col_18_Template, 2, 2, "ion-col", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-infinite-scroll", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionInfinite", function HomePage_div_18_Template_ion_infinite_scroll_ionInfinite_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58);

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r60.onLoadMore($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ion-infinite-scroll-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r8.slidesConfig);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.slides)("ngForTrackBy", ctx_r8.trackByFn);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.categories.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.brands.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.itemsOnSale.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.itemsNewArrival.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.itemsFeatured.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.items);
      }
    }

    var _c9 = function _c9() {
      return {
        width: "60px",
        height: "60px"
      };
    };

    function HomePage_section_19_ion_col_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-skeleton-loader", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c9));
      }
    }

    function HomePage_section_19_ion_col_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-skeleton-loader", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c9));
      }
    }

    var _c10 = function _c10() {
      return {
        width: "100%",
        height: "230px",
        "border-radius": "4px",
        margin: "0"
      };
    };

    function HomePage_section_19_ion_col_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-skeleton-loader", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c10));
      }
    }

    function HomePage_section_19_ion_col_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-skeleton-loader", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c10));
      }
    }

    function HomePage_section_19_ion_col_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-skeleton-loader", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c10));
      }
    }

    var _c11 = function _c11() {
      return {
        width: "100%",
        height: "250px",
        "border-radius": "4px"
      };
    };

    function HomePage_section_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ngx-skeleton-loader", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-row", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomePage_section_19_ion_col_5_Template, 2, 2, "ion-col", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-row", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomePage_section_19_ion_col_7_Template, 2, 2, "ion-col", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-row", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HomePage_section_19_ion_col_9_Template, 2, 2, "ion-col", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-row", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomePage_section_19_ion_col_11_Template, 2, 2, "ion-col", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-row", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HomePage_section_19_ion_col_13_Template, 2, 2, "ion-col", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c11));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.skeletonArray);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.skeletonArray);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.skeletonArray);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.skeletonArray);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.skeletonArray);
      }
    }

    var HomePage =
    /*#__PURE__*/
    function (_base_page_base_page_) {
      _inherits(HomePage, _base_page_base_page_);

      function HomePage(injector, subCategoryService, itemService) {
        var _this;

        _classCallCheck(this, HomePage);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(HomePage).call(this, injector));
        _this.subCategoryService = subCategoryService;
        _this.itemService = itemService;
        _this.slidesConfig = {
          centeredSlides: true,
          slidesPerView: 1.2,
          spaceBetween: 10,
          grabCursor: true,
          initialSlide: 1,
          breakpointsInverse: true,
          loop: true,
          breakpoints: {
            992: {
              slidesPerView: 1.5,
              spaceBetween: 30
            }
          }
        };
        _this.slidesBrandsConfig = {
          slidesOffsetBefore: 16,
          slidesOffsetAfter: 16,
          slidesPerView: 3.4,
          spaceBetween: 8,
          grabCursor: true
        };
        _this.slidesItemsConfig = {
          slidesOffsetBefore: 16,
          slidesOffsetAfter: 16,
          slidesPerView: 2.4,
          spaceBetween: 16,
          grabCursor: true
        };
        _this.skeletonArray = Array(6);
        _this.slides = [];
        _this.categories = [];
        _this.itemsOnSale = [];
        _this.itemsNewArrival = [];
        _this.itemsFeatured = [];
        _this.items = [];
        _this.brands = [];
        _this.suggestions = [];
        _this.queryItems = {};
        return _this;
      }

      _createClass(HomePage, [{
        key: "enableMenuSwipe",
        value: function enableMenuSwipe() {
          return false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setupObservable();
          this.showLoadingView({
            showOverlay: false
          });
          this.loadData();
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
                    _context.next = 2;
                    return this.getTrans('APP_NAME');

                  case 2:
                    title = _context.sent;
                    this.setPageTitle(title);
                    this.setMetaTags({
                      title: title
                    });

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onSlidesDidLoad",
        value: function onSlidesDidLoad() {
          this.isSlidesLoaded = true;
          this.ionSlides.startAutoplay();
        }
      }, {
        key: "onSlidesDidChange",
        value: function onSlidesDidChange() {
          this.contentLoaded.next();
        }
      }, {
        key: "onSlidesBrandsChange",
        value: function onSlidesBrandsChange() {
          this.slidesBrandsEvent.next();
        }
      }, {
        key: "onSlidesBrandsLoaded",
        value: function onSlidesBrandsLoaded() {
          this.isSlidesBrandsLoaded = true;
        }
      }, {
        key: "onSlidesItemsOnSaleLoaded",
        value: function onSlidesItemsOnSaleLoaded() {
          this.isSlidesItemsOnSaleLoaded = true;
        }
      }, {
        key: "onSlidesItemsNewArrivalLoaded",
        value: function onSlidesItemsNewArrivalLoaded() {
          this.isSlidesItemsNewArrivalLoaded = true;
        }
      }, {
        key: "onSlidesItemsFeaturedLoaded",
        value: function onSlidesItemsFeaturedLoaded() {
          this.isSlidesItemsFeaturedLoaded = true;
        }
      }, {
        key: "onSlidesItemsOnSaleChange",
        value: function onSlidesItemsOnSaleChange() {
          this.slidesItemsOnSaleEvent.next();
        }
      }, {
        key: "onSlidesItemsNewArrivalChange",
        value: function onSlidesItemsNewArrivalChange() {
          this.slidesItemsNewArrivalEvent.next();
        }
      }, {
        key: "onSlidesItemsFeaturedChange",
        value: function onSlidesItemsFeaturedChange() {
          this.slidesItemsFeaturedEvent.next();
        }
      }, {
        key: "setupObservable",
        value: function setupObservable() {
          this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this.content.ionScroll, this.contentLoaded);
          this.slidesBrandsEvent = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          this.slidesBrandsObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this.content.ionScroll, this.slidesBrandsEvent);
          this.slidesItemsOnSaleEvent = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          this.slidesItemsOnSaleObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this.content.ionScroll, this.slidesItemsOnSaleEvent);
          this.slidesItemsNewArrivalEvent = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          this.slidesItemsNewArrivalObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this.content.ionScroll, this.slidesItemsNewArrivalEvent);
          this.slidesItemsFeaturedEvent = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          this.slidesItemsFeaturedObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this.content.ionScroll, this.slidesItemsFeaturedEvent);
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
        key: "onSlideTouched",
        value: function onSlideTouched(slide) {
          if (slide.item) {
            this.navigateToRelative('./items/' + slide.item.slug);
          } else if (slide.url) {
            this.openUrl(slide.url);
          } else {// no action required
          }
        }
      }, {
        key: "onCategoryTouched",
        value: function onCategoryTouched(category) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var count;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;

                    if (!(category.subCategoryCount > 0)) {
                      _context2.next = 5;
                      break;
                    }

                    this.navigateToRelative('./subcategories', {
                      categoryId: category.id
                    });
                    _context2.next = 16;
                    break;

                  case 5:
                    if (!(category.subCategoryCount === 0)) {
                      _context2.next = 9;
                      break;
                    }

                    this.navigateToRelative('./items', {
                      cat: category.id
                    });
                    _context2.next = 16;
                    break;

                  case 9:
                    _context2.next = 11;
                    return this.showLoadingView({
                      showOverlay: false
                    });

                  case 11:
                    _context2.next = 13;
                    return this.subCategoryService.count({
                      category: category
                    });

                  case 13:
                    count = _context2.sent;

                    if (count) {
                      this.navigateToRelative('./subcategories', {
                        categoryId: category.id
                      });
                    } else {
                      this.navigateToRelative('./items', {
                        cat: category.id
                      });
                    }

                    this.showContentView();

                  case 16:
                    _context2.next = 22;
                    break;

                  case 18:
                    _context2.prev = 18;
                    _context2.t0 = _context2["catch"](0);
                    this.showContentView();
                    this.translate.get('ERROR_NETWORK').subscribe(function (str) {
                      return _this3.showToast(str);
                    });

                  case 22:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[0, 18]]);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this4 = this;

          var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.refresher = event.target;
          parse__WEBPACK_IMPORTED_MODULE_5__["Cloud"].run('getHomePageData').then(function (data) {
            _this4.slides = data.slides;
            _this4.categories = data.categories;
            _this4.itemsOnSale = data.itemsOnSale;
            _this4.itemsNewArrival = data.itemsNewArrival;
            _this4.itemsFeatured = data.itemsFeatured;
            _this4.brands = data.brands;

            _this4.onRefreshComplete();

            _this4.showContentView();

            _this4.onContentLoaded();
          }, function () {
            _this4.onRefreshComplete();

            _this4.showErrorView();
          });
        }
      }, {
        key: "onLoadMore",
        value: function onLoadMore() {
          var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.infiniteScroll = event.target;
          this.queryItems.page++;
          this.loadItems();
        }
      }, {
        key: "loadItems",
        value: function loadItems() {
          var _this5 = this;

          this.itemService.loadInCloud(this.queryItems).then(function (items) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var item = _step.value;

                _this5.items.push(item);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            _this5.onRefreshComplete(items);
          }).catch(function (error) {
            console.warn(error);
          });
        }
      }, {
        key: "onClearSearch",
        value: function onClearSearch() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.suggestions = [];

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
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
                      _context4.next = 13;
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
                    _context4.next = 14;
                    break;

                  case 13:
                    this.suggestions = [];

                  case 14:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this, [[2, 8]]);
          }));
        }
      }, {
        key: "onSubmitSearch",
        value: function onSubmitSearch() {
          var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          if (event.key === "Enter") {
            var searchTerm = event.target.value;

            if (searchTerm) {
              this.suggestions = [];
              this.navigateToRelative('./search', {
                q: searchTerm
              });
            }
          }
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
          console.log(never);
          var urlCacheString = never;

          if (urlCacheString) {
            var cacheUrlString = urlCacheString.replace('http://localhost:1337/api/', _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].serverUrl);
            console.log(cacheUrlString);
            return cacheUrlString;
          } else {
            return '';
          }
        }
      }]);

      return HomePage;
    }(_base_page_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"]);

    HomePage.ɵfac = function HomePage_Factory(t) {
      return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_sub_category__WEBPACK_IMPORTED_MODULE_6__["SubCategory"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_item__WEBPACK_IMPORTED_MODULE_4__["Item"]));
    };

    HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HomePage,
      selectors: [["page-home"]],
      viewQuery: function HomePage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ionSlides = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 20,
      vars: 6,
      consts: [[1, "ion-no-border"], ["fixed", "", 2, "display", "flex", "flex-direction", "column", "justify-content", "center", "align-items", "center", "padding-bottom", "8px"], [1, "show-sm-up"], [1, "logo", 2, "justify-content", "center", "align-items", "center", "display", "flex"], ["src", "https://image.flaticon.com/icons/png/512/116/116356.png"], [2, "margin-bottom", "6px", "margin-top", "8px"], ["mode", "ios", "showCancelButton", "never", 3, "placeholder", "ionClear", "ionInput", "keyup"], ["scrollEvents", "true"], ["container", ""], ["slot", "fixed", 3, "ionRefresh"], ["pullingText", "Desliza para actualizar", "refreshingText", "Actualizando"], ["slot", "fixed", 2, "left", "16px", "right", "16px"], ["class", "relative", "fixed", "", 4, "ngIf"], ["fixed", "", 1, "ion-no-padding"], ["icon", "alert-circle-outline", 3, "text", 4, "ngIf"], [4, "ngIf"], ["fixed", "", 1, "relative"], ["lines", "none", "no-margin", "", 1, "shadow", "autocomplete"], ["class", "hover", "button", "", "detail", "false", "style", "--min-height: 70px;", 3, "routerLink", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["button", "", "detail", "false", 1, "hover", 2, "--min-height", "70px", 3, "routerLink", "click"], ["color", "dark"], [1, "link", "bold", "text-medium"], ["icon", "alert-circle-outline", 3, "text"], [1, "ion-padding-vertical"], [3, "options", "ionSlidesDidLoad", "ionSlideWillChange"], [3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ion-margin-vertical", 4, "ngIf"], [1, "ion-padding", "ion-align-items-center", "backOficial"], [1, "ion-no-margin", 2, "text-transform", "uppercase", "font-weight", "bold", "margin-right", "16px", "font-size", "22px", "letter-spacing", "2px", "color", "white"], ["size", "6", 1, "ion-text-end"], ["round", "", 1, "bold", "no-shadow", 2, "text-transform", "uppercase", "font-weight", "bold", "margin-right", "16px", "letter-spacing", "2px", "color", "white", 3, "routerLink"], [1, "ion-padding-horizontal", "ion-margin-vertical"], ["size-xs", "6", "size-sm", "4", "size-md", "3", 4, "ngFor", "ngForOf"], [3, "ionInfinite"], [3, "click"], [1, "slide-img", 3, "ngStyle"], [1, "ion-text-end"], ["round", "", "color", "medium", 1, "bold", "no-shadow", 2, "text-transform", "uppercase", "font-weight", "bold", "margin-right", "16px", "letter-spacing", "2px", "color", "white", 3, "routerLink"], [1, "ion-padding"], ["class", "ion-text-center", "size-xs", "3", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["size-xs", "3", 1, "ion-text-center", 3, "click"], ["defaultImage", "./assets/imgs/placeholder.png", 1, "circle", "bg-img", 3, "offset", "lazyLoad", "customObservable"], [1, "link", 2, "font-size", "12px", "text-transform", "uppercase"], [1, "show-xs-only", "show-sm-only", "hide-md-up", "ion-margin-vertical", 3, "options", "ionSlidesDidLoad", "ionSlideWillChange"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "hide-xs-only", "hide-sm-only", "show-md-up"], ["class", "ion-text-center", "size-xs", "4", "size-md", "3", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "full-width", 3, "routerLink", "queryParams"], [1, "brand-img"], [1, "link"], ["size-xs", "4", "size-md", "3", 1, "ion-text-center"], [3, "routerLink", "queryParams"], ["defaultImage", "./assets/imgs/placeholder.png", 1, "brand-img", 3, "offset", "lazyLoad", "customObservable"], [1, "ion-margin-vertical"], ["round", "", "color", "medium", 1, "bold", "no-shadow", "ion-text-capitalize", 2, "text-transform", "uppercase", "font-weight", "bold", "margin-right", "16px", "letter-spacing", "2px", "color", "white", 3, "routerLink", "queryParams"], [1, "show-xs-only", "hide-sm-up", "ion-margin-vertical", 3, "options", "ionSlideWillChange", "ionSlidesDidLoad"], [1, "ion-padding", "hide-xs-only", "show-sm-up"], ["size-sm", "4", "size-md", "3", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "item", "customObservable"], ["size-sm", "4", "size-md", "3"], ["round", "", "color", "medium", 1, "bold", "no-shadow", 2, "text-transform", "uppercase", "font-weight", "bold", "margin-right", "16px", "letter-spacing", "2px", "color", "black", 3, "routerLink", "queryParams"], ["size-xs", "6", "size-sm", "4", "size-md", "3"], ["count", "1", 3, "theme"], [1, "ion-nowrap", "ion-text-center"], ["size-xs", "3", 4, "ngFor", "ngForOf"], [1, "ion-nowrap", "ion-margin-top"], ["class", "ion-text-center", "size-xs", "6", "size-sm", "6", "size-md", "6", "size-lg", "3", 4, "ngFor", "ngForOf"], [1, "ion-nowrap"], ["size-xs", "3"], ["count", "1", "appearance", "circle", 3, "theme"], ["size-xs", "6", "size-sm", "6", "size-md", "6", "size-lg", "3", 1, "ion-text-center"]],
      template: function HomePage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "SUPERMERCADO VALERIA");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-searchbar", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionClear", function HomePage_Template_ion_searchbar_ionClear_8_listener() {
            return ctx.onClearSearch();
          })("ionInput", function HomePage_Template_ion_searchbar_ionInput_8_listener($event) {
            return ctx.onSearch($event);
          })("keyup", function HomePage_Template_ion_searchbar_keyup_8_listener($event) {
            return ctx.onSubmitSearch($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-content", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-refresher", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function HomePage_Template_ion_refresher_ionRefresh_11_listener($event) {
            return ctx.loadData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ion-refresher-content", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HomePage_ion_grid_14_Template, 3, 3, "ion-grid", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-grid", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, HomePage_empty_view_16_Template, 2, 3, "empty-view", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HomePage_empty_view_17_Template, 2, 3, "empty-view", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, HomePage_div_18_Template, 21, 11, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, HomePage_section_19_Template, 14, 7, "section", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", "Buscar producto");

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
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["RouterLinkDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonText"], _components_empty_view_empty_view__WEBPACK_IMPORTED_MODULE_12__["EmptyView"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScrollContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_13__["LazyLoadImageDirective"], _components_shop_item_shop_item_component__WEBPACK_IMPORTED_MODULE_14__["ShopItemComponent"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_15__["NgxSkeletonLoaderComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslatePipe"]],
      styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light);\n}\n\nion-grid[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\nion-searchbar[_ngcontent-%COMP%] {\n  padding: 0 8px !important;\n}\n\nion-slides[_ngcontent-%COMP%] {\n  --bullet-background: var(--ion-color-light);\n  --bullet-background-active: var(--ion-color-primary);\n}\n\nion-slides[_ngcontent-%COMP%]   .slide-img[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-white);\n  background-size: cover;\n  background-position: center center;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 100%;\n  height: 200px;\n}\n\nion-row.ion-nowrap[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.brand-img[_ngcontent-%COMP%] {\n  background: #fff;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border: 1px solid var(--ion-color-light-shade);\n  border-radius: 16px;\n  background-position: center;\n  height: 180px;\n}\n\n@media (min-width: 992px) {\n  .circle[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n  }\n\n  ion-slides[_ngcontent-%COMP%]   .slide-img[_ngcontent-%COMP%] {\n    height: 270px;\n  }\n\n  .brand-img[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n}\n\n@media (min-width: 768px) {\n  .brand-img[_ngcontent-%COMP%] {\n    margin: 8px;\n    height: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXHNtb2tlXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcRWxldmVublxcYXBwc1xcc2hvcFxcaW9uc2hvcC1hcHAvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBRUUsMkNBQUE7RUFDQSxvREFBQTtBQ0FGOztBREVFO0VBQ0Usd0NBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNBSjs7QURJQTtFQUNFLGdCQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FDREY7O0FESUE7RUFFRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VDRkY7O0VES0E7SUFDRSxhQUFBO0VDRkY7O0VES0E7SUFDRSxhQUFBO0VDRkY7QUFDRjs7QURLQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUNIRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuaW9uLWdyaWQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgcGFkZGluZzogMCA4cHggIWltcG9ydGFudDtcbn1cblxuaW9uLXNsaWRlcyB7XG5cbiAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblxuICAuc2xpZGUtaW1nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG59XG5cbmlvbi1yb3cuaW9uLW5vd3JhcCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5icmFuZC1pbWcge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMTgwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuXG4gIC5jaXJjbGUge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG5cbiAgaW9uLXNsaWRlcyAuc2xpZGUtaW1nIHtcbiAgICBoZWlnaHQ6IDI3MHB4O1xuICB9XG5cbiAgLmJyYW5kLWltZyB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmJyYW5kLWltZyB7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgfVxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG5pb24tZ3JpZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICBwYWRkaW5nOiAwIDhweCAhaW1wb3J0YW50O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbmlvbi1zbGlkZXMgLnNsaWRlLWltZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbmlvbi1yb3cuaW9uLW5vd3JhcCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5icmFuZC1pbWcge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMTgwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY2lyY2xlIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuXG4gIGlvbi1zbGlkZXMgLnNsaWRlLWltZyB7XG4gICAgaGVpZ2h0OiAyNzBweDtcbiAgfVxuXG4gIC5icmFuZC1pbWcge1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuYnJhbmQtaW1nIHtcbiAgICBtYXJnaW46IDhweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICB9XG59Il19 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('staggerIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 0,
          transform: "translate3d(0,10px,0)"
        }), {
          optional: true
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["stagger"])('70ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 1,
          transform: "translate3d(0,0,0)"
        }))]), {
          optional: true
        })])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'page-home',
          templateUrl: 'home.html',
          styleUrls: ['home.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('staggerIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            opacity: 0,
            transform: "translate3d(0,10px,0)"
          }), {
            optional: true
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["stagger"])('70ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
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
          type: _services_sub_category__WEBPACK_IMPORTED_MODULE_6__["SubCategory"]
        }, {
          type: _services_item__WEBPACK_IMPORTED_MODULE_4__["Item"]
        }];
      }, {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], {
            static: true
          }]
        }],
        ionSlides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"]]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map