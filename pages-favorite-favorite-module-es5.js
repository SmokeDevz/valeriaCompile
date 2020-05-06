function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-favorite-favorite-module"], {
  /***/
  "./src/app/pages/favorite/favorite.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/favorite/favorite.module.ts ***!
    \***************************************************/

  /*! exports provided: FavoritePageModule */

  /***/
  function srcAppPagesFavoriteFavoriteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritePageModule", function () {
      return FavoritePageModule;
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


    var _favorite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./favorite */
    "./src/app/pages/favorite/favorite.ts");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared.module */
    "./src/app/shared.module.ts");

    var FavoritePageModule = function FavoritePageModule() {
      _classCallCheck(this, FavoritePageModule);
    };

    FavoritePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FavoritePageModule
    });
    FavoritePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FavoritePageModule_Factory(t) {
        return new (t || FavoritePageModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: '',
        component: _favorite__WEBPACK_IMPORTED_MODULE_2__["FavoritePage"]
      }]), _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FavoritePageModule, {
        declarations: [_favorite__WEBPACK_IMPORTED_MODULE_2__["FavoritePage"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_favorite__WEBPACK_IMPORTED_MODULE_2__["FavoritePage"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _favorite__WEBPACK_IMPORTED_MODULE_2__["FavoritePage"]
          }]), _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/favorite/favorite.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/favorite/favorite.ts ***!
    \********************************************/

  /*! exports provided: FavoritePage */

  /***/
  function srcAppPagesFavoriteFavoriteTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritePage", function () {
      return FavoritePage;
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


    var _services_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/item */
    "./src/app/services/item.ts");
    /* harmony import */


    var _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base-page/base-page */
    "./src/app/pages/base-page/base-page.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_empty_view_empty_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/empty-view/empty-view */
    "./src/app/components/empty-view/empty-view.ts");
    /* harmony import */


    var _components_shop_item_shop_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/shop-item/shop-item.component */
    "./src/app/components/shop-item/shop-item.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-skeleton-loader */
    "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm2015/ngx-skeleton-loader.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function FavoritePage_empty_view_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "empty-view", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "ERROR_DATA"));
      }
    }

    function FavoritePage_empty_view_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "empty-view", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "EMPTY_DATA"));
      }
    }

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function FavoritePage_div_12_ion_col_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-shop-item", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r395 = ctx.$implicit;

        var ctx_r394 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", item_r395)("customObservable", ctx_r394.loadAndScroll)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, "./" + item_r395.slug));
      }
    }

    function FavoritePage_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r397 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FavoritePage_div_12_ion_col_3_Template, 2, 5, "ion-col", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-infinite-scroll", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionInfinite", function FavoritePage_div_12_Template_ion_infinite_scroll_ionInfinite_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r397);

          var ctx_r396 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r396.onLoadMore($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-infinite-scroll-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r392 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@staggerIn", ctx_r392.items.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r392.items)("ngForTrackBy", ctx_r392.trackByFn);
      }
    }

    var _c1 = function _c1() {
      return {
        width: "100%",
        height: "240px",
        "border-radius": "0"
      };
    };

    function FavoritePage_ion_row_13_ion_col_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-skeleton-loader", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
      }
    }

    function FavoritePage_ion_row_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FavoritePage_ion_row_13_ion_col_1_Template, 2, 2, "ion-col", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r393.skeletonArray);
      }
    }

    var FavoritePage =
    /*#__PURE__*/
    function (_base_page_base_page_) {
      _inherits(FavoritePage, _base_page_base_page_);

      function FavoritePage(injector, itemService) {
        var _this;

        _classCallCheck(this, FavoritePage);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(FavoritePage).call(this, injector));
        _this.itemService = itemService;
        _this.params = {
          likes: true,
          page: 0,
          limit: 40
        };
        _this.items = [];
        _this.skeletonArray = Array(12);
        return _this;
      }

      _createClass(FavoritePage, [{
        key: "enableMenuSwipe",
        value: function enableMenuSwipe() {
          return true;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.content.ionScroll, this.contentLoaded);
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
                    if (!this.items.length) {
                      this.showLoadingView({
                        showOverlay: false
                      });
                      this.loadData();
                    }

                    _context.next = 3;
                    return this.getTrans('FAVORITES');

                  case 3:
                    title = _context.sent;
                    this.setPageTitle(title);
                    this.setMetaTags({
                      title: title
                    });

                  case 6:
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var items, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return this.itemService.load(this.params);

                  case 3:
                    items = _context2.sent;
                    _iteratorNormalCompletion = true;
                    _didIteratorError = false;
                    _iteratorError = undefined;
                    _context2.prev = 7;

                    for (_iterator = items[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      item = _step.value;
                      this.items.push(item);
                    }

                    _context2.next = 15;
                    break;

                  case 11:
                    _context2.prev = 11;
                    _context2.t0 = _context2["catch"](7);
                    _didIteratorError = true;
                    _iteratorError = _context2.t0;

                  case 15:
                    _context2.prev = 15;
                    _context2.prev = 16;

                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                      _iterator.return();
                    }

                  case 18:
                    _context2.prev = 18;

                    if (!_didIteratorError) {
                      _context2.next = 21;
                      break;
                    }

                    throw _iteratorError;

                  case 21:
                    return _context2.finish(18);

                  case 22:
                    return _context2.finish(15);

                  case 23:
                    if (this.items.length) {
                      this.showContentView();
                    } else {
                      this.showEmptyView();
                    }

                    this.onRefreshComplete(items);
                    setTimeout(function () {
                      _this2.contentLoaded.next();
                    }, 400);
                    _context2.next = 33;
                    break;

                  case 28:
                    _context2.prev = 28;
                    _context2.t1 = _context2["catch"](0);

                    if (this.items.length) {
                      this.showContentView();
                    } else {
                      this.showErrorView();
                    }

                    this.onRefreshComplete();
                    this.translate.get('ERROR_NETWORK').subscribe(function (str) {
                      return _this2.showToast(str);
                    });

                  case 33:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[0, 28], [7, 11, 15, 23], [16,, 18, 22]]);
          }));
        }
      }, {
        key: "onSearch",
        value: function onSearch() {
          var ev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var val = ev.target.value;
          var canonical = val && val.trim() != '' ? val.toLowerCase() : null;
          this.params.tag = canonical;
          this.params.page = 0;
          this.items = [];
          this.showLoadingView({
            showOverlay: false
          });
          this.loadData();
        }
      }, {
        key: "onSearchCleared",
        value: function onSearchCleared() {
          this.params.canonical = '';
          this.params.page = 0;
          this.items = [];
          this.showLoadingView({
            showOverlay: false
          });
          this.loadData();
        }
      }, {
        key: "onRefresh",
        value: function onRefresh() {
          var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.refresher = event.target;
          this.items = [];
          this.params.page = 0;
          this.loadData();
        }
      }, {
        key: "onLoadMore",
        value: function onLoadMore() {
          var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.infiniteScroll = event.target;
          this.params.page++;
          this.loadData();
        }
      }, {
        key: "trackByFn",
        value: function trackByFn(index, item) {
          if (!item) return null;
          return item.id;
        }
      }]);

      return FavoritePage;
    }(_base_page_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"]);

    FavoritePage.ɵfac = function FavoritePage_Factory(t) {
      return new (t || FavoritePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_item__WEBPACK_IMPORTED_MODULE_2__["Item"]));
    };

    FavoritePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FavoritePage,
      selectors: [["page-favorite"]],
      viewQuery: function FavoritePage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 14,
      vars: 4,
      consts: [[1, "ion-no-border"], ["fixed", ""], ["slot", "start"], ["text", ""], ["mode", "ios", "placeholder", "", 3, "ionClear", "keyup.enter"], ["scrollEvents", "true"], ["container", ""], ["slot", "fixed", 3, "ionRefresh"], ["pullingText", "Desliza para actualizar", "refreshingText", "Actualizando"], ["icon", "alert-circle-outline", 3, "text", 4, "ngIf"], ["image", "./assets/imgs/price-tag.svg", "imageWidth", "150", 3, "text", 4, "ngIf"], [4, "ngIf"], ["class", "ion-justify-content-center", 4, "ngIf"], ["icon", "alert-circle-outline", 3, "text"], ["image", "./assets/imgs/price-tag.svg", "imageWidth", "150", 3, "text"], ["size-xs", "6", "size-sm", "4", "size-md", "4", "size-lg", "3", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ionInfinite"], ["size-xs", "6", "size-sm", "4", "size-md", "4", "size-lg", "3"], [3, "item", "customObservable", "routerLink"], [1, "ion-justify-content-center"], ["class", "ion-text-center", "size-xs", "6", "size-sm", "4", "size-md", "4", "size-lg", "3", 4, "ngFor", "ngForOf"], ["size-xs", "6", "size-sm", "4", "size-md", "4", "size-lg", "3", 1, "ion-text-center"], ["count", "1", "appearance", "circle", 3, "theme"]],
      template: function FavoritePage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-searchbar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionClear", function FavoritePage_Template_ion_searchbar_ionClear_4_listener() {
            return ctx.onSearchCleared();
          })("keyup.enter", function FavoritePage_Template_ion_searchbar_keyup_enter_4_listener($event) {
            return ctx.onSearch($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-refresher", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function FavoritePage_Template_ion_refresher_ionRefresh_7_listener($event) {
            return ctx.onRefresh($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-refresher-content", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-grid", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, FavoritePage_empty_view_10_Template, 2, 3, "empty-view", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, FavoritePage_empty_view_11_Template, 2, 3, "empty-view", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, FavoritePage_div_12_Template, 6, 3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, FavoritePage_ion_row_13_Template, 2, 1, "ion-row", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isErrorViewVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEmptyViewVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isContentViewVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoadingViewVisible);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonGrid"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_empty_view_empty_view__WEBPACK_IMPORTED_MODULE_8__["EmptyView"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScrollContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], _components_shop_item_shop_item_component__WEBPACK_IMPORTED_MODULE_9__["ShopItemComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["RouterLinkDelegate"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__["NgxSkeletonLoaderComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]],
      styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light);\n}\n\nion-grid[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\nion-searchbar[_ngcontent-%COMP%] {\n  padding: 0 8px !important;\n}\n\nion-buttons[_ngcontent-%COMP%] {\n  align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmF2b3JpdGUvQzpcXFVzZXJzXFxzbW9rZVxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXEVsZXZlbm5cXGFwcHNcXHNob3BcXGlvbnNob3AtYXBwL3NyY1xcYXBwXFxwYWdlc1xcZmF2b3JpdGVcXGZhdm9yaXRlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Zhdm9yaXRlL2Zhdm9yaXRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmF2b3JpdGUvZmF2b3JpdGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG5pb24tZ3JpZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICBwYWRkaW5nOiAwIDhweCAhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9ucyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuaW9uLWdyaWQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgcGFkZGluZzogMCA4cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWJ1dHRvbnMge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59Il19 */"],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FavoritePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'page-favorite',
          templateUrl: 'favorite.html',
          styleUrls: ['favorite.scss'],
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
          type: _services_item__WEBPACK_IMPORTED_MODULE_2__["Item"]
        }];
      }, {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            static: true
          }]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-favorite-favorite-module-es5.js.map