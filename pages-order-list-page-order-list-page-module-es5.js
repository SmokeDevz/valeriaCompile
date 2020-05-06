function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-list-page-order-list-page-module"], {
  /***/
  "./src/app/pages/order-list-page/order-list-page.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/order-list-page/order-list-page.module.ts ***!
    \*****************************************************************/

  /*! exports provided: OrderListPageModule */

  /***/
  function srcAppPagesOrderListPageOrderListPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderListPageModule", function () {
      return OrderListPageModule;
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


    var _order_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./order-list-page */
    "./src/app/pages/order-list-page/order-list-page.ts");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared.module */
    "./src/app/shared.module.ts");

    var OrderListPageModule = function OrderListPageModule() {
      _classCallCheck(this, OrderListPageModule);
    };

    OrderListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OrderListPageModule
    });
    OrderListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function OrderListPageModule_Factory(t) {
        return new (t || OrderListPageModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: '',
        component: _order_list_page__WEBPACK_IMPORTED_MODULE_2__["OrderListPage"]
      }]), _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderListPageModule, {
        declarations: [_order_list_page__WEBPACK_IMPORTED_MODULE_2__["OrderListPage"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderListPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_order_list_page__WEBPACK_IMPORTED_MODULE_2__["OrderListPage"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _order_list_page__WEBPACK_IMPORTED_MODULE_2__["OrderListPage"]
          }]), _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/order-list-page/order-list-page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/order-list-page/order-list-page.ts ***!
    \**********************************************************/

  /*! exports provided: OrderListPage */

  /***/
  function srcAppPagesOrderListPageOrderListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderListPage", function () {
      return OrderListPage;
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


    var _services_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/order */
    "./src/app/services/order.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_empty_view_empty_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/empty-view/empty-view */
    "./src/app/components/empty-view/empty-view.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-lazyload-image */
    "./node_modules/ng-lazyload-image/__ivy_ngcc__/fesm2015/ng-lazyload-image.js");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-skeleton-loader */
    "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm2015/ngx-skeleton-loader.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _pipes_date_global__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../pipes/date-global */
    "./src/app/pipes/date-global.ts");

    function OrderListPage_empty_view_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "empty-view", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "ERROR_DATA"));
      }
    }

    function OrderListPage_empty_view_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "empty-view", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "EMPTY_DATA"));
      }
    }

    function OrderListPage_ion_row_17_ion_item_3_ion_label_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "SIN PAGAR");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function OrderListPage_ion_row_17_ion_item_3_ion_label_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "PAGADO");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function OrderListPage_ion_row_17_ion_item_3_ion_label_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "EMPACANDO");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function OrderListPage_ion_row_17_ion_item_3_ion_label_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "DESPACHADO");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function OrderListPage_ion_row_17_ion_item_3_ion_label_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "ENTREGADO");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function OrderListPage_ion_row_17_ion_item_3_ion_label_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "CANCELADO");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function OrderListPage_ion_row_17_ion_item_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-thumbnail", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-row", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-col", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "dateGlobal");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-row", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-label", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-row", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-row", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, OrderListPage_ion_row_17_ion_item_3_ion_label_16_Template, 2, 0, "ion-label", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, OrderListPage_ion_row_17_ion_item_3_ion_label_17_Template, 2, 0, "ion-label", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, OrderListPage_ion_row_17_ion_item_3_ion_label_18_Template, 2, 0, "ion-label", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, OrderListPage_ion_row_17_ion_item_3_ion_label_19_Template, 2, 0, "ion-label", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, OrderListPage_ion_row_17_ion_item_3_ion_label_20_Template, 2, 0, "ion-label", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, OrderListPage_ion_row_17_ion_item_3_ion_label_21_Template, 2, 0, "ion-label", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-col", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " DETALLE ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "ion-icon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r406 = ctx.$implicit;

        var ctx_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, "./" + order_r406.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", order_r406.firstItem.featuredImageThumb == null ? null : order_r406.firstItem.featuredImageThumb.url())("customObservable", ctx_r405.loadAndScroll);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 12, order_r406.createdAt, "mediumDate"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Pedido: #", order_r406.number, " | ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (order_r406 == null ? null : order_r406.status) === "Unpaid");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (order_r406 == null ? null : order_r406.status) === "Paid");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (order_r406 == null ? null : order_r406.status) === "Packed");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (order_r406 == null ? null : order_r406.status) === "Shipped Out");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (order_r406 == null ? null : order_r406.status) === "Delivered");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (order_r406 == null ? null : order_r406.status) === "Cancelled");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", order_r406.prettyItems(), " ");
      }
    }

    function OrderListPage_ion_row_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-list", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OrderListPage_ion_row_17_ion_item_3_Template, 28, 17, "ion-item", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r403 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r403.orders)("ngForTrackBy", ctx_r403.trackByFn);
      }
    }

    var _c1 = function _c1() {
      return {
        "border-radius": "0",
        height: "100px"
      };
    };

    function OrderListPage_ion_row_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ngx-skeleton-loader", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
      }
    }

    var OrderListPage =
    /*#__PURE__*/
    function (_base_page_base_page_) {
      _inherits(OrderListPage, _base_page_base_page_);

      function OrderListPage(injector, orderService) {
        var _this;

        _classCallCheck(this, OrderListPage);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(OrderListPage).call(this, injector));
        _this.orderService = orderService;
        _this.orders = [];
        return _this;
      }

      _createClass(OrderListPage, [{
        key: "enableMenuSwipe",
        value: function enableMenuSwipe() {
          return false;
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
                    if (!this.orders.length) {
                      this.showLoadingView({
                        showOverlay: false
                      });
                      this.loadData();
                    }

                    _context.next = 3;
                    return this.getTrans('MY_ORDERS');

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
          var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    this.refresher = event.target;
                    _context2.next = 4;
                    return this.orderService.load();

                  case 4:
                    this.orders = _context2.sent;

                    if (this.orders.length) {
                      this.showContentView();
                    } else {
                      this.showEmptyView();
                    }

                    this.onRefreshComplete(this.orders);
                    setTimeout(function () {
                      _this2.contentLoaded.next();
                    }, 400);
                    _context2.next = 14;
                    break;

                  case 10:
                    _context2.prev = 10;
                    _context2.t0 = _context2["catch"](0);
                    this.translate.get('ERROR_NETWORK').subscribe(function (str) {
                      return _this2.showToast(str);
                    });
                    this.showErrorView();

                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[0, 10]]);
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
          return never.replace('http://localhost:1337/api/', _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].serverUrl);
        }
      }]);

      return OrderListPage;
    }(_base_page_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]);

    OrderListPage.ɵfac = function OrderListPage_Factory(t) {
      return new (t || OrderListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_order__WEBPACK_IMPORTED_MODULE_3__["Order"]));
    };

    OrderListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: OrderListPage,
      selectors: [["page-order-list-page"]],
      viewQuery: function OrderListPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 19,
      vars: 10,
      consts: [[1, "ion-no-border"], ["fixed", ""], ["slot", "start"], ["text", ""], [1, "show-sm-up", 2, "display", "flex", "flex-direction", "column", "padding-bottom", "8px"], [1, "logo", 2, "display", "flex"], ["scrollEvents", "true"], ["container", ""], ["slot", "fixed", 3, "ionRefresh"], [3, "pullingText", "refreshingText"], ["icon", "alert-circle-outline", 3, "text", 4, "ngIf"], ["image", "./assets/imgs/undraw_no_data_qbuo.svg", "imageWidth", "200", 3, "text", 4, "ngIf"], ["class", "ion-justify-content-center", 4, "ngIf"], ["class", "ion-margin-vertical ion-justify-content-center", 4, "ngIf"], ["icon", "alert-circle-outline", 3, "text"], ["image", "./assets/imgs/undraw_no_data_qbuo.svg", "imageWidth", "200", 3, "text"], [1, "ion-justify-content-center"], ["size-xs", "12", "size-lg", "10"], ["lines", "none"], ["class", "radius ion-margin-vertical", "color", "light", "detail", "false", 3, "routerLink", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["color", "light", "detail", "false", 1, "radius", "ion-margin-vertical", 3, "routerLink"], ["src", "./assets/imgs/placeholder.png", 3, "lazyLoad", "customObservable"], [1, "full-width"], [1, "ion-align-items-center"], ["size-xs", "12", "size-md", "9"], [1, "ion-text-wrap", 2, "margin-top", "6px"], [1, "text-small"], [2, "padding", "0", "margin", "0", "display", "flex", "flex-direction", "column"], ["color", "primary", 2, "font-weight", "bold", "margin-right", "4px"], [2, "padding", "0", "margin", "0"], [2, "font-weight", "bold"], ["color", "danger", 4, "ngIf"], ["style", "", "color", "primary", 4, "ngIf"], [4, "ngIf"], ["color", "alert", 4, "ngIf"], [1, "link", "ellipsis", "text-normal", 2, "margin-top", "6px", "margin-bottom", "6px"], ["size-xs", "12", "size-md", "3"], ["shape", "round", "color", "dark"], ["slot", "end", "name", "chevron-forward"], ["color", "danger"], ["color", "primary"], ["color", "alert"], [1, "ion-margin-vertical", "ion-justify-content-center"], ["count", "12", 3, "theme"]],
      template: function OrderListPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "ULTIMOS PEDIDOS");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-content", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-refresher", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function OrderListPage_Template_ion_refresher_ionRefresh_10_listener($event) {
            return ctx.loadData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ion-refresher-content", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-grid", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, OrderListPage_empty_view_15_Template, 2, 3, "empty-view", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, OrderListPage_empty_view_16_Template, 2, 3, "empty-view", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, OrderListPage_ion_row_17_Template, 4, 2, "ion-row", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, OrderListPage_ion_row_18_Template, 3, 2, "ion-row", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("pullingText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 6, "PULL_TO_REFRESH"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("refreshingText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 8, "REFRESHING"));

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
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonGrid"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_empty_view_empty_view__WEBPACK_IMPORTED_MODULE_8__["EmptyView"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["RouterLinkDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonThumbnail"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__["LazyLoadImageDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__["NgxSkeletonLoaderComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"], _pipes_date_global__WEBPACK_IMPORTED_MODULE_13__["DateGlobalPipe"]],
      styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light);\n}\n\nion-grid[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --min-height: 120px;\n}\n\nion-item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXItbGlzdC1wYWdlL0M6XFxVc2Vyc1xcc21va2VcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxFbGV2ZW5uXFxhcHBzXFxzaG9wXFxpb25zaG9wLWFwcC9zcmNcXGFwcFxccGFnZXNcXG9yZGVyLWxpc3QtcGFnZVxcb3JkZXItbGlzdC1wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL29yZGVyLWxpc3QtcGFnZS9vcmRlci1saXN0LXBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlci1saXN0LXBhZ2Uvb3JkZXItbGlzdC1wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuaW9uLWdyaWQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5pb24taXRlbSB7XG4gIC0tbWluLWhlaWdodDogMTIwcHg7XG5cbiAgaW9uLXRodW1ibmFpbCB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuaW9uLWdyaWQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5pb24taXRlbSB7XG4gIC0tbWluLWhlaWdodDogMTIwcHg7XG59XG5pb24taXRlbSBpb24tdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderListPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'page-order-list-page',
          templateUrl: 'order-list-page.html',
          styleUrls: ['order-list-page.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _services_order__WEBPACK_IMPORTED_MODULE_3__["Order"]
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
//# sourceMappingURL=pages-order-list-page-order-list-page-module-es5.js.map