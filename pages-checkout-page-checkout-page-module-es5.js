function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkout-page-checkout-page-module"], {
  /***/
  "./src/app/pages/address-list-modal/address-list.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/address-list-modal/address-list.module.ts ***!
    \*****************************************************************/

  /*! exports provided: AddressListModalPageModule */

  /***/
  function srcAppPagesAddressListModalAddressListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressListModalPageModule", function () {
      return AddressListModalPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _address_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./address-list */
    "./src/app/pages/address-list-modal/address-list.ts");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared.module */
    "./src/app/shared.module.ts");
    /* harmony import */


    var _address_add_address_add_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../address-add/address-add.module */
    "./src/app/pages/address-add/address-add.module.ts");

    var AddressListModalPageModule = function AddressListModalPageModule() {
      _classCallCheck(this, AddressListModalPageModule);
    };

    AddressListModalPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AddressListModalPageModule
    });
    AddressListModalPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AddressListModalPageModule_Factory(t) {
        return new (t || AddressListModalPageModule)();
      },
      imports: [[_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _address_add_address_add_module__WEBPACK_IMPORTED_MODULE_3__["AddressAddPageModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddressListModalPageModule, {
        declarations: [_address_list__WEBPACK_IMPORTED_MODULE_1__["AddressListModalPage"]],
        imports: [_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _address_add_address_add_module__WEBPACK_IMPORTED_MODULE_3__["AddressAddPageModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddressListModalPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_address_list__WEBPACK_IMPORTED_MODULE_1__["AddressListModalPage"]],
          imports: [_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _address_add_address_add_module__WEBPACK_IMPORTED_MODULE_3__["AddressAddPageModule"]],
          entryComponents: [_address_list__WEBPACK_IMPORTED_MODULE_1__["AddressListModalPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/address-list-modal/address-list.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/address-list-modal/address-list.ts ***!
    \**********************************************************/

  /*! exports provided: AddressListModalPage */

  /***/
  function srcAppPagesAddressListModalAddressListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressListModalPage", function () {
      return AddressListModalPage;
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


    var _services_customer_address__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/customer-address */
    "./src/app/services/customer-address.ts");
    /* harmony import */


    var _address_add_address_add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../address-add/address-add */
    "./src/app/pages/address-add/address-add.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_empty_view_empty_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/empty-view/empty-view */
    "./src/app/components/empty-view/empty-view.ts");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-skeleton-loader */
    "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm2015/ngx-skeleton-loader.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function AddressListModalPage_empty_view_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "empty-view", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "ERROR_DATA"));
      }
    }

    function AddressListModalPage_empty_view_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "empty-view", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "EMPTY_ADDRESSES"));
      }
    }

    function AddressListModalPage_ion_list_15_ion_item_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r281 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddressListModalPage_ion_list_15_ion_item_1_Template_ion_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r281);

          var address_r279 = ctx.$implicit;

          var ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r280.onAddressTouched(address_r279);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " SELECCIONAR ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var address_r279 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](address_r279.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](address_r279.address);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Telefono: ", address_r279.phone, "");
      }
    }

    function AddressListModalPage_ion_list_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddressListModalPage_ion_list_15_ion_item_1_Template, 11, 3, "ion-item", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r276.addresses);
      }
    }

    var _c0 = function _c0() {
      return {
        "border-radius": "0",
        height: "60px"
      };
    };

    function AddressListModalPage_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-skeleton-loader", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var AddressListModalPage =
    /*#__PURE__*/
    function (_base_page_base_page_) {
      _inherits(AddressListModalPage, _base_page_base_page_);

      function AddressListModalPage(injector, customerAddressService) {
        var _this;

        _classCallCheck(this, AddressListModalPage);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(AddressListModalPage).call(this, injector));
        _this.customerAddressService = customerAddressService;
        _this.addresses = [];
        return _this;
      }

      _createClass(AddressListModalPage, [{
        key: "enableMenuSwipe",
        value: function enableMenuSwipe() {
          return false;
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          if (!this.addresses.length) {
            this.showLoadingView({
              showOverlay: false
            });
            this.loadData();
          }
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    this.refresher = event.target;
                    _context.next = 4;
                    return this.customerAddressService.load();

                  case 4:
                    this.addresses = _context.sent;

                    if (this.addresses.length) {
                      this.showContentView();
                    } else {
                      this.showEmptyView();
                    }

                    this.onRefreshComplete();
                    _context.next = 14;
                    break;

                  case 9:
                    _context.prev = 9;
                    _context.t0 = _context["catch"](0);
                    this.showErrorView();
                    this.onRefreshComplete();
                    this.translate.get('ERROR_NETWORK').subscribe(function (str) {
                      return _this2.showToast(str);
                    });

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 9]]);
          }));
        }
      }, {
        key: "onAddressTouched",
        value: function onAddressTouched(address) {
          this.onDismiss(address);
        }
      }, {
        key: "onDismiss",
        value: function onDismiss() {
          var address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          this.modalCtrl.dismiss(address);
        }
      }, {
        key: "onAddButtonTouched",
        value: function onAddButtonTouched() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var modal, _ref, data;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.showLoadingView({
                      showOverlay: true
                    });

                  case 2:
                    _context2.next = 4;
                    return this.modalCtrl.create({
                      component: _address_add_address_add__WEBPACK_IMPORTED_MODULE_4__["AddressAddPage"]
                    });

                  case 4:
                    modal = _context2.sent;
                    _context2.next = 7;
                    return modal.present();

                  case 7:
                    this.showContentView();
                    _context2.next = 10;
                    return modal.onWillDismiss();

                  case 10:
                    _ref = _context2.sent;
                    data = _ref.data;

                    if (data) {
                      this.addresses.unshift(data);
                      this.showContentView();
                    }

                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return AddressListModalPage;
    }(_base_page_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]);

    AddressListModalPage.ɵfac = function AddressListModalPage_Factory(t) {
      return new (t || AddressListModalPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_customer_address__WEBPACK_IMPORTED_MODULE_3__["CustomerAddress"]));
    };

    AddressListModalPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AddressListModalPage,
      selectors: [["page-address-list"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 17,
      vars: 4,
      consts: [[1, "ion-no-border"], ["slot", "start"], [3, "click"], ["name", "close"], ["slot", "end"], ["name", "add", "slot", "icon-only"], ["slot", "fixed", 3, "ionRefresh"], ["pullingText", "Desliza para actualizar", "refreshingText", "Actualizando"], ["icon", "alert-circle-outline", 3, "text", 4, "ngIf"], ["image", "./assets/imgs/undraw_address_udes.svg", "imageWidth", "200", 3, "text", 4, "ngIf"], ["lines", "none", "class", "ion-margin-top", 4, "ngIf"], ["class", "ion-margin-vertical", 4, "ngIf"], ["icon", "alert-circle-outline", 3, "text"], ["image", "./assets/imgs/undraw_address_udes.svg", "imageWidth", "200", 3, "text"], ["lines", "none", 1, "ion-margin-top"], ["class", "ion-text-wrap ion-margin-bottom", "color", "light", 4, "ngFor", "ngForOf"], ["color", "light", 1, "ion-text-wrap", "ion-margin-bottom"], ["name", "pin", "color", "primary", "slot", "start"], [1, "bold"], ["strong", "", "color", "primary", "slot", "end", 3, "click"], [1, "ion-margin-vertical"], ["count", "12", 3, "theme"]],
      template: function AddressListModalPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddressListModalPage_Template_ion_button_click_3_listener() {
            return ctx.onDismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "DIRECCIONES");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-buttons", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddressListModalPage_Template_ion_button_click_8_listener() {
            return ctx.onAddButtonTouched();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-refresher", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function AddressListModalPage_Template_ion_refresher_ionRefresh_11_listener($event) {
            return ctx.loadData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ion-refresher-content", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AddressListModalPage_empty_view_13_Template, 2, 3, "empty-view", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AddressListModalPage_empty_view_14_Template, 2, 3, "empty-view", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AddressListModalPage_ion_list_15_Template, 2, 1, "ion-list", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AddressListModalPage_div_16_Template, 2, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isErrorViewVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEmptyViewVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isContentViewVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoadingViewVisible);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_empty_view_empty_view__WEBPACK_IMPORTED_MODULE_7__["EmptyView"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_8__["NgxSkeletonLoaderComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZHJlc3MtbGlzdC1tb2RhbC9hZGRyZXNzLWxpc3Quc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddressListModalPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'page-address-list',
          templateUrl: 'address-list.html',
          styleUrls: ['address-list.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _services_customer_address__WEBPACK_IMPORTED_MODULE_3__["CustomerAddress"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/card-list-modal/card-list.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/card-list-modal/card-list.module.ts ***!
    \***********************************************************/

  /*! exports provided: CardListModalPageModule */

  /***/
  function srcAppPagesCardListModalCardListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardListModalPageModule", function () {
      return CardListModalPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _card_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./card-list */
    "./src/app/pages/card-list-modal/card-list.ts");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared.module */
    "./src/app/shared.module.ts");
    /* harmony import */


    var _card_add_card_add_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../card-add/card-add.module */
    "./src/app/pages/card-add/card-add.module.ts");

    var CardListModalPageModule = function CardListModalPageModule() {
      _classCallCheck(this, CardListModalPageModule);
    };

    CardListModalPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CardListModalPageModule
    });
    CardListModalPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CardListModalPageModule_Factory(t) {
        return new (t || CardListModalPageModule)();
      },
      imports: [[_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _card_add_card_add_module__WEBPACK_IMPORTED_MODULE_3__["CardAddPageModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CardListModalPageModule, {
        declarations: [_card_list__WEBPACK_IMPORTED_MODULE_1__["CardListModalPage"]],
        imports: [_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _card_add_card_add_module__WEBPACK_IMPORTED_MODULE_3__["CardAddPageModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardListModalPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_card_list__WEBPACK_IMPORTED_MODULE_1__["CardListModalPage"]],
          imports: [_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _card_add_card_add_module__WEBPACK_IMPORTED_MODULE_3__["CardAddPageModule"]],
          entryComponents: [_card_list__WEBPACK_IMPORTED_MODULE_1__["CardListModalPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/card-list-modal/card-list.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/card-list-modal/card-list.ts ***!
    \****************************************************/

  /*! exports provided: CardListModalPage */

  /***/
  function srcAppPagesCardListModalCardListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardListModalPage", function () {
      return CardListModalPage;
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


    var _services_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/card */
    "./src/app/services/card.ts");
    /* harmony import */


    var _card_add_card_add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../card-add/card-add */
    "./src/app/pages/card-add/card-add.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_empty_view_empty_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/empty-view/empty-view */
    "./src/app/components/empty-view/empty-view.ts");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-skeleton-loader */
    "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm2015/ngx-skeleton-loader.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function CardListModalPage_empty_view_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "empty-view", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "ERROR_DATA"));
      }
    }

    function CardListModalPage_empty_view_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "empty-view", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "EMPTY_CARDS"));
      }
    }

    function CardListModalPage_ion_list_18_ion_item_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r292 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardListModalPage_ion_list_18_ion_item_1_Template_ion_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r292);

          var card_r290 = ctx.$implicit;

          var ctx_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r291.onCardTouched(card_r290);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r290 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "./assets/imgs/", card_r290.formatBrand(), ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u2022\u2022\u2022\u2022 ", card_r290.last4, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 3, "CHOOSE_THIS_PAYMENT_METHOD"), " ");
      }
    }

    function CardListModalPage_ion_list_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CardListModalPage_ion_list_18_ion_item_1_Template, 8, 5, "ion-item", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r287 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r287.cards);
      }
    }

    var _c0 = function _c0() {
      return {
        "border-radius": "0",
        height: "70px"
      };
    };

    function CardListModalPage_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-skeleton-loader", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var CardListModalPage =
    /*#__PURE__*/
    function (_base_page_base_page_2) {
      _inherits(CardListModalPage, _base_page_base_page_2);

      function CardListModalPage(injector, creditCardService) {
        var _this3;

        _classCallCheck(this, CardListModalPage);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(CardListModalPage).call(this, injector));
        _this3.creditCardService = creditCardService;
        _this3.cards = [];
        return _this3;
      }

      _createClass(CardListModalPage, [{
        key: "enableMenuSwipe",
        value: function enableMenuSwipe() {
          return false;
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          if (!this.cards.length) {
            this.showLoadingView({
              showOverlay: false
            });
            this.loadData();
          }
        }
      }, {
        key: "onCardTouched",
        value: function onCardTouched(card) {
          this.onDismiss(card);
        }
      }, {
        key: "onDismiss",
        value: function onDismiss() {
          var card = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          this.modalCtrl.dismiss(card);
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    this.refresher = event.target;
                    _context3.next = 4;
                    return this.creditCardService.load();

                  case 4:
                    this.cards = _context3.sent;

                    if (this.cards.length) {
                      this.showContentView();
                    } else {
                      this.showEmptyView();
                    }

                    this.onRefreshComplete();
                    _context3.next = 14;
                    break;

                  case 9:
                    _context3.prev = 9;
                    _context3.t0 = _context3["catch"](0);
                    this.showErrorView();
                    this.onRefreshComplete();
                    this.translate.get('ERROR_NETWORK').subscribe(function (str) {
                      return _this4.showToast(str);
                    });

                  case 14:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[0, 9]]);
          }));
        }
      }, {
        key: "onAddButtonTouched",
        value: function onAddButtonTouched() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var modal, _ref2, data;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.showLoadingView({
                      showOverlay: true
                    });

                  case 2:
                    _context4.next = 4;
                    return this.modalCtrl.create({
                      component: _card_add_card_add__WEBPACK_IMPORTED_MODULE_4__["CardAddPage"]
                    });

                  case 4:
                    modal = _context4.sent;
                    _context4.next = 7;
                    return modal.present();

                  case 7:
                    this.showContentView();
                    _context4.next = 10;
                    return modal.onWillDismiss();

                  case 10:
                    _ref2 = _context4.sent;
                    data = _ref2.data;

                    if (data) {
                      this.cards.unshift(data);
                      this.showContentView();
                    }

                  case 13:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return CardListModalPage;
    }(_base_page_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]);

    CardListModalPage.ɵfac = function CardListModalPage_Factory(t) {
      return new (t || CardListModalPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_card__WEBPACK_IMPORTED_MODULE_3__["Card"]));
    };

    CardListModalPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CardListModalPage,
      selectors: [["page-card-list"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 20,
      vars: 13,
      consts: [[1, "ion-no-border"], ["slot", "start"], [3, "click"], ["name", "close"], ["slot", "end"], ["name", "add", "slot", "icon-only"], ["slot", "fixed", 3, "ionRefresh"], [3, "pullingText", "refreshingText"], ["icon", "alert-circle-outline", 3, "text", 4, "ngIf"], ["image", "./assets/imgs/undraw_credit_card_df1m.svg", "imageWidth", "200", 3, "text", 4, "ngIf"], ["lines", "none", "margin-top", "", 4, "ngIf"], ["margin-vertical", "", 4, "ngIf"], ["icon", "alert-circle-outline", 3, "text"], ["image", "./assets/imgs/undraw_credit_card_df1m.svg", "imageWidth", "200", 3, "text"], ["lines", "none", "margin-top", ""], ["color", "light", "margin-bottom", "", 4, "ngFor", "ngForOf"], ["color", "light", "margin-bottom", ""], ["width", "40", "slot", "start", 3, "src"], ["strong", "", "size", "small", "color", "primary", "slot", "end", 3, "click"], ["margin-vertical", ""], ["count", "12", 3, "theme"]],
      template: function CardListModalPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardListModalPage_Template_ion_button_click_3_listener() {
            return ctx.onDismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-buttons", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardListModalPage_Template_ion_button_click_9_listener() {
            return ctx.onAddButtonTouched();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ion-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-refresher", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function CardListModalPage_Template_ion_refresher_ionRefresh_12_listener($event) {
            return ctx.loadData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "ion-refresher-content", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CardListModalPage_empty_view_16_Template, 2, 3, "empty-view", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CardListModalPage_empty_view_17_Template, 2, 3, "empty-view", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CardListModalPage_ion_list_18_Template, 2, 1, "ion-list", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, CardListModalPage_div_19_Template, 2, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 7, "PAYMENT"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("pullingText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 9, "PULL_TO_REFRESH"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("refreshingText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 11, "REFRESHING"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isErrorViewVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEmptyViewVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isContentViewVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoadingViewVisible);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_empty_view_empty_view__WEBPACK_IMPORTED_MODULE_7__["EmptyView"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_8__["NgxSkeletonLoaderComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]],
      styles: ["ion-item[_ngcontent-%COMP%] {\n  --min-height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FyZC1saXN0LW1vZGFsL0M6XFxVc2Vyc1xcc21va2VcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxFbGV2ZW5uXFxhcHBzXFxzaG9wXFxpb25zaG9wLWFwcC9zcmNcXGFwcFxccGFnZXNcXGNhcmQtbGlzdC1tb2RhbFxcY2FyZC1saXN0LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhcmQtbGlzdC1tb2RhbC9jYXJkLWxpc3Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXJkLWxpc3QtbW9kYWwvY2FyZC1saXN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gICAgLS1taW4taGVpZ2h0OiA4MHB4O1xufSIsImlvbi1pdGVtIHtcbiAgLS1taW4taGVpZ2h0OiA4MHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CardListModalPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'page-card-list',
          templateUrl: 'card-list.html',
          styleUrls: ['card-list.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _services_card__WEBPACK_IMPORTED_MODULE_3__["Card"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/checkout-page/checkout-page.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/checkout-page/checkout-page.module.ts ***!
    \*************************************************************/

  /*! exports provided: CheckoutPageModule */

  /***/
  function srcAppPagesCheckoutPageCheckoutPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function () {
      return CheckoutPageModule;
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


    var _checkout_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./checkout-page */
    "./src/app/pages/checkout-page/checkout-page.ts");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared.module */
    "./src/app/shared.module.ts");
    /* harmony import */


    var _card_list_modal_card_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../card-list-modal/card-list.module */
    "./src/app/pages/card-list-modal/card-list.module.ts");
    /* harmony import */


    var _address_list_modal_address_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../address-list-modal/address-list.module */
    "./src/app/pages/address-list-modal/address-list.module.ts");
    /* harmony import */


    var _address_add_address_add_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../address-add/address-add.module */
    "./src/app/pages/address-add/address-add.module.ts");
    /* harmony import */


    var _card_add_card_add_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../card-add/card-add.module */
    "./src/app/pages/card-add/card-add.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var CheckoutPageModule = function CheckoutPageModule() {
      _classCallCheck(this, CheckoutPageModule);
    };

    CheckoutPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CheckoutPageModule
    });
    CheckoutPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CheckoutPageModule_Factory(t) {
        return new (t || CheckoutPageModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_2__["CheckoutPage"]
      }]), _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _address_list_modal_address_list_module__WEBPACK_IMPORTED_MODULE_5__["AddressListModalPageModule"], _address_add_address_add_module__WEBPACK_IMPORTED_MODULE_6__["AddressAddPageModule"], _card_list_modal_card_list_module__WEBPACK_IMPORTED_MODULE_4__["CardListModalPageModule"], _card_add_card_add_module__WEBPACK_IMPORTED_MODULE_7__["CardAddPageModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CheckoutPageModule, {
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_2__["CheckoutPage"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _address_list_modal_address_list_module__WEBPACK_IMPORTED_MODULE_5__["AddressListModalPageModule"], _address_add_address_add_module__WEBPACK_IMPORTED_MODULE_6__["AddressAddPageModule"], _card_list_modal_card_list_module__WEBPACK_IMPORTED_MODULE_4__["CardListModalPageModule"], _card_add_card_add_module__WEBPACK_IMPORTED_MODULE_7__["CardAddPageModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_2__["CheckoutPage"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _checkout_page__WEBPACK_IMPORTED_MODULE_2__["CheckoutPage"]
          }]), _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _address_list_modal_address_list_module__WEBPACK_IMPORTED_MODULE_5__["AddressListModalPageModule"], _address_add_address_add_module__WEBPACK_IMPORTED_MODULE_6__["AddressAddPageModule"], _card_list_modal_card_list_module__WEBPACK_IMPORTED_MODULE_4__["CardListModalPageModule"], _card_add_card_add_module__WEBPACK_IMPORTED_MODULE_7__["CardAddPageModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/checkout-page/checkout-page.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/checkout-page/checkout-page.ts ***!
    \******************************************************/

  /*! exports provided: CheckoutPage */

  /***/
  function srcAppPagesCheckoutPageCheckoutPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutPage", function () {
      return CheckoutPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base-page/base-page */
    "./src/app/pages/base-page/base-page.ts");
    /* harmony import */


    var _services_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/cart */
    "./src/app/services/cart.ts");
    /* harmony import */


    var _services_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/order */
    "./src/app/services/order.ts");
    /* harmony import */


    var _services_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/user */
    "./src/app/services/user.ts");
    /* harmony import */


    var _services_customer_address__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/customer-address */
    "./src/app/services/customer-address.ts");
    /* harmony import */


    var _services_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/card */
    "./src/app/services/card.ts");
    /* harmony import */


    var _address_list_modal_address_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../address-list-modal/address-list */
    "./src/app/pages/address-list-modal/address-list.ts");
    /* harmony import */


    var _card_list_modal_card_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../card-list-modal/card-list */
    "./src/app/pages/card-list-modal/card-list.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_empty_view_empty_view__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../components/empty-view/empty-view */
    "./src/app/components/empty-view/empty-view.ts");
    /* harmony import */


    var ngx_img_fallback__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-img-fallback */
    "./node_modules/ngx-img-fallback/__ivy_ngcc__/fesm2015/ngx-img-fallback.js");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-skeleton-loader */
    "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm2015/ngx-skeleton-loader.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function CheckoutPage_empty_view_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "empty-view", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "ERROR_DATA"));
      }
    }

    function CheckoutPage_empty_view_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "empty-view", 8);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", "El carrito se encuentra vacio");
      }
    }

    function CheckoutPage_form_10_ion_row_2_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-text");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email invalido");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CheckoutPage_form_10_ion_row_2_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-text");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email requerido");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CheckoutPage_form_10_ion_row_2_span_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "TARJETAS");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CheckoutPage_form_10_ion_row_2_img_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 43);
      }

      if (rf & 2) {
        var ctx_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "./assets/imgs/", ctx_r302.card.formatBrand(), ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function CheckoutPage_form_10_ion_row_2_span_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 44);
      }

      if (rf & 2) {
        var ctx_r303 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r303.card, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function CheckoutPage_form_10_ion_row_2_ion_spinner_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-spinner");
      }
    }

    function CheckoutPage_form_10_ion_row_2_ion_button_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r314 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CheckoutPage_form_10_ion_row_2_ion_button_29_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r314);

          var ctx_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r313.onChangeCard();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " CAMBIAR ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CheckoutPage_form_10_ion_row_2_span_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "SIN DIRECCION");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CheckoutPage_form_10_ion_row_2_span_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "CAMBIAR DIRECCION");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CheckoutPage_form_10_ion_row_2_span_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "NUEVA DIRECCION");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CheckoutPage_form_10_ion_row_2_span_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "CAMBIAR");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CheckoutPage_form_10_ion_row_2_ion_item_56_p_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "OPCION:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r315.variation.name, " ");
      }
    }

    function CheckoutPage_form_10_ion_row_2_ion_item_56_p_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-text", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "s");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", item_r315.salePrice, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", item_r315.price, "");
      }
    }

    function CheckoutPage_form_10_ion_row_2_ion_item_56_p_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" $", item_r315.price, " ");
      }
    }

    function CheckoutPage_form_10_ion_row_2_ion_item_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-thumbnail", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-row", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CheckoutPage_form_10_ion_row_2_ion_item_56_p_8_Template, 4, 1, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-text", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CheckoutPage_form_10_ion_row_2_ion_item_56_p_10_Template, 6, 2, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CheckoutPage_form_10_ion_row_2_ion_item_56_p_11_Template, 2, 1, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-text", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r315 = ctx.$implicit;
        var last_r316 = ctx.last;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lines", last_r316 ? "none" : "full");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r315.featuredImageThumb == null ? null : item_r315.featuredImageThumb.url(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r315.qty, " x ", item_r315.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r315.variation);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r315.salePrice);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r315.salePrice);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" $ ", item_r315.amount, " ");
      }
    }

    function CheckoutPage_form_10_ion_row_2_ion_spinner_74_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-spinner", 57);
      }
    }

    function CheckoutPage_form_10_ion_row_2_span_75_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "HACER PEDIDO");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CheckoutPage_form_10_ion_row_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r324 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item-group", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-list-header", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "INFORMACION DE CONTACTO");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CheckoutPage_form_10_ion_row_2_div_8_Template, 4, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CheckoutPage_form_10_ion_row_2_div_9_Template, 4, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-item-group", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-list-header", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "MEDIO DE PAGO");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-list", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-radio-group", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function CheckoutPage_form_10_ion_row_2_Template_ion_radio_group_ionChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r324);

          var ctx_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r323.onChangePaymentMethod($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "EFECTIVO");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ion-radio", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-item", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, CheckoutPage_form_10_ion_row_2_span_24_Template, 2, 0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, CheckoutPage_form_10_ion_row_2_img_25_Template, 1, 1, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, CheckoutPage_form_10_ion_row_2_span_26_Template, 1, 1, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, CheckoutPage_form_10_ion_row_2_ion_spinner_27_Template, 1, 0, "ion-spinner", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "ion-radio", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, CheckoutPage_form_10_ion_row_2_ion_button_29_Template, 2, 0, "ion-button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-list-header", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "ENVIO");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-list", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-item", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h2", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-item", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CheckoutPage_form_10_ion_row_2_Template_ion_item_click_42_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r324);

          var ctx_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r325.onChangeAddress();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, CheckoutPage_form_10_ion_row_2_span_45_Template, 2, 0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, CheckoutPage_form_10_ion_row_2_span_46_Template, 2, 0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ion-button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, CheckoutPage_form_10_ion_row_2_span_48_Template, 2, 0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, CheckoutPage_form_10_ion_row_2_span_49_Template, 2, 0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "ion-col", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-list-header", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "RESUMEN");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ion-item-group", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, CheckoutPage_form_10_ion_row_2_ion_item_56_Template, 16, 8, "ion-item", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "SUBTOTAL");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "COSTO DE ENVIO");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "TOTAL");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "ion-col", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "ion-button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, CheckoutPage_form_10_ion_row_2_ion_spinner_74_Template, 1, 0, "ion-spinner", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, CheckoutPage_form_10_ion_row_2_span_75_Template, 2, 0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Detalle transaccion");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r297 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

        var ctx_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", "Email de contacto");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r298.contactEmailField.errors == null ? null : ctx_r298.contactEmailField.errors.email) && _r297.submitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r298.contactEmailField.errors == null ? null : ctx_r298.contactEmailField.errors.required) && _r297.submitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r298.card);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r298.card);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r298.card);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r298.isLoadingCards);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r298.card);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r298.address);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r298.address == null ? null : ctx_r298.address.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r298.address == null ? null : ctx_r298.address.address);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Telefono: ", ctx_r298.address == null ? null : ctx_r298.address.phone, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r298.address);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r298.address);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r298.address);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r298.address);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r298.cart == null ? null : ctx_r298.cart.items);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", ctx_r298.cart == null ? null : ctx_r298.cart.subtotal, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", (ctx_r298.cart == null ? null : ctx_r298.cart.shipping == null ? null : ctx_r298.cart.shipping.subzone == null ? null : ctx_r298.cart.shipping.subzone.fee) || 0, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", ctx_r298.cart == null ? null : ctx_r298.cart.total, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r298.isCreatingOrder);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r298.isCreatingOrder);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r298.isCreatingOrder);
      }
    }

    function CheckoutPage_form_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r327 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 9, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CheckoutPage_form_10_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r327);

          var ctx_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r326.onPlaceOrder();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CheckoutPage_form_10_ion_row_2_Template, 79, 23, "ion-row", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r295.form);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r295.isContentViewVisible);
      }
    }

    var _c0 = function _c0() {
      return {
        "border-radius": "0",
        height: "120px",
        width: "100%"
      };
    };

    var _c1 = function _c1() {
      return {
        "border-radius": "0",
        height: "240px",
        width: "100%"
      };
    };

    var _c2 = function _c2() {
      return {
        "border-radius": "0",
        height: "270px",
        width: "100%"
      };
    };

    function CheckoutPage_ion_row_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ngx-skeleton-loader", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ngx-skeleton-loader", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ngx-skeleton-loader", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-col", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ngx-skeleton-loader", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c2));
      }
    }

    var CheckoutPage =
    /*#__PURE__*/
    function (_base_page_base_page_3) {
      _inherits(CheckoutPage, _base_page_base_page_3);

      function CheckoutPage(injector, cardService, cartService, customerAddressService) {
        var _this5;

        _classCallCheck(this, CheckoutPage);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(CheckoutPage).call(this, injector));
        _this5.cardService = cardService;
        _this5.cartService = cartService;
        _this5.customerAddressService = customerAddressService;
        return _this5;
      }

      _createClass(CheckoutPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setupForm();
        }
      }, {
        key: "enableMenuSwipe",
        value: function enableMenuSwipe() {
          return false;
        }
      }, {
        key: "setupForm",
        value: function setupForm() {
          var user = _services_user__WEBPACK_IMPORTED_MODULE_6__["User"].getCurrent();

          var contactEmail = user.attributes.email;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            shipping: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            contactEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](contactEmail, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            card: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            paymentMethod: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Cash', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var title;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (_services_user__WEBPACK_IMPORTED_MODULE_6__["User"].getCurrent()) {
                      this.showLoadingView({
                        showOverlay: false
                      });
                      this.loadCart();
                    } else {
                      this.showEmptyView();
                    }

                    _context5.next = 3;
                    return this.getTrans('CHECKOUT');

                  case 3:
                    title = _context5.sent;
                    this.setPageTitle(title);
                    this.setMetaTags({
                      title: title
                    });

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "loadCart",
        value: function loadCart() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var _this6 = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.prev = 0;
                    _context6.next = 3;
                    return this.cartService.getOne();

                  case 3:
                    this.cart = _context6.sent;

                    if (!(this.cart && this.cart.status === 'expired')) {
                      _context6.next = 7;
                      break;
                    }

                    window.dispatchEvent(new CustomEvent('cart:expired', {
                      detail: this.cart
                    }));
                    return _context6.abrupt("return", this.goBack());

                  case 7:
                    if (this.cart && !this.cart.empty()) {
                      this.loadAddresses();
                    } else {
                      this.showEmptyView();
                    }

                    _context6.next = 14;
                    break;

                  case 10:
                    _context6.prev = 10;
                    _context6.t0 = _context6["catch"](0);
                    this.showErrorView();
                    this.translate.get('ERROR_NETWORK').subscribe(function (str) {
                      return _this6.showToast(str);
                    });

                  case 14:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this, [[0, 10]]);
          }));
        }
      }, {
        key: "loadAddresses",
        value: function loadAddresses() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var _this7 = this;

            var addresses;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.prev = 0;
                    _context7.next = 3;
                    return this.customerAddressService.load();

                  case 3:
                    addresses = _context7.sent;

                    if (addresses.length) {
                      this.address = addresses[0];
                      console.log(this.address);
                      this.cart.shipping = this.address;
                      this.form.controls.shipping.setValue(this.address);
                      this.cart.calculateTotal();
                    }

                    this.showContentView();
                    _context7.next = 12;
                    break;

                  case 8:
                    _context7.prev = 8;
                    _context7.t0 = _context7["catch"](0);
                    this.showErrorView();
                    this.translate.get('ERROR_NETWORK').subscribe(function (str) {
                      return _this7.showToast(str);
                    });

                  case 12:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this, [[0, 8]]);
          }));
        }
      }, {
        key: "loadCards",
        value: function loadCards() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var _this8 = this;

            var cards;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.prev = 0;
                    this.isLoadingCards = true;
                    _context8.next = 4;
                    return this.cardService.load();

                  case 4:
                    cards = _context8.sent;

                    if (cards.length) {
                      this.card = cards[0];
                      this.form.controls.card.setValue(this.card);
                    } else {
                      this.onChangeCard();
                    }

                    this.isLoadingCards = false;
                    _context8.next = 13;
                    break;

                  case 9:
                    _context8.prev = 9;
                    _context8.t0 = _context8["catch"](0);
                    this.translate.get('ERROR_NETWORK').subscribe(function (str) {
                      return _this8.showToast(str);
                    });
                    this.isLoadingCards = false;

                  case 13:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this, [[0, 9]]);
          }));
        }
      }, {
        key: "onChangeAddress",
        value: function onChangeAddress() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var modal, _ref3, data;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.showLoadingView({
                      showOverlay: true
                    });

                  case 2:
                    _context9.next = 4;
                    return this.modalCtrl.create({
                      component: _address_list_modal_address_list__WEBPACK_IMPORTED_MODULE_9__["AddressListModalPage"]
                    });

                  case 4:
                    modal = _context9.sent;
                    _context9.next = 7;
                    return modal.present();

                  case 7:
                    this.showContentView();
                    _context9.next = 10;
                    return modal.onWillDismiss();

                  case 10:
                    _ref3 = _context9.sent;
                    data = _ref3.data;

                    if (data) {
                      this.address = data;
                      this.cart.shipping = this.address;
                      this.form.controls.shipping.setValue(this.address);
                      this.cart.calculateTotal();
                    }

                  case 13:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "onChangeCard",
        value: function onChangeCard() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var modal, _ref4, data;

            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.showLoadingView({
                      showOverlay: true
                    });

                  case 2:
                    _context10.next = 4;
                    return this.modalCtrl.create({
                      component: _card_list_modal_card_list__WEBPACK_IMPORTED_MODULE_10__["CardListModalPage"]
                    });

                  case 4:
                    modal = _context10.sent;
                    _context10.next = 7;
                    return modal.present();

                  case 7:
                    this.showContentView();
                    _context10.next = 10;
                    return modal.onWillDismiss();

                  case 10:
                    _ref4 = _context10.sent;
                    data = _ref4.data;

                    if (data) {
                      this.card = data;
                      this.form.controls.card.setValue(data);
                    } else if (!data && !this.card) {
                      this.form.controls.paymentMethod.setValue('Cash');
                      this.form.controls.card.setValue(null);
                    }

                  case 13:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "onChangePaymentMethod",
        value: function onChangePaymentMethod() {
          var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var paymentMethod = event.target.value;

          if (paymentMethod === 'Cash') {
            this.form.controls.card.clearValidators();
            this.form.controls.card.setValue(null);
            this.form.controls.card.updateValueAndValidity();
          } else if (paymentMethod === 'Card') {
            this.form.controls.card.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
            this.form.controls.card.updateValueAndValidity();
            this.form.controls.card.setValue(this.card);
            if (!this.card) this.loadCards();
          } else {// no match
          }
        }
      }, {
        key: "prepareOrderData",
        value: function prepareOrderData() {
          var formData = Object.assign({}, this.form.value);
          var order = new _services_order__WEBPACK_IMPORTED_MODULE_5__["Order"]();
          order.items = this.cart.items;
          order.paymentMethod = formData.paymentMethod;
          order.card = formData.card;
          order.shipping = formData.shipping;
          order.contact = {
            email: formData.contactEmail
          };
          return order;
        }
      }, {
        key: "onPlaceOrder",
        value: function onPlaceOrder() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var _this9 = this;

            var order;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.prev = 0;

                    if (!this.form.invalid) {
                      _context11.next = 3;
                      break;
                    }

                    return _context11.abrupt("return", this.translate.get('INVALID_FORM').subscribe(function (str) {
                      return _this9.showToast(str);
                    }));

                  case 3:
                    this.isCreatingOrder = true;
                    order = this.prepareOrderData();
                    _context11.next = 7;
                    return order.save();

                  case 7:
                    this.isCreatingOrder = false;
                    window.dispatchEvent(new CustomEvent('cart:updated', {
                      detail: new _services_cart__WEBPACK_IMPORTED_MODULE_4__["Cart"]()
                    }));
                    this.setRelativeRoot('./thanks/' + order.id);
                    _context11.next = 16;
                    break;

                  case 12:
                    _context11.prev = 12;
                    _context11.t0 = _context11["catch"](0);

                    if (_context11.t0.code === 1001) {
                      this.translate.get('ACCOUNT_BLOCKED').subscribe(function (str) {
                        return _this9.showToast(str);
                      });
                    } else if (_context11.t0.code === 1002) {
                      {
                        this.translate.get('CARD_DECLINED').subscribe(function (str) {
                          return _this9.showToast(str);
                        });
                      }
                    } else {
                      this.translate.get('ERROR_NETWORK').subscribe(function (str) {
                        return _this9.showToast(str);
                      });
                    }

                    this.isCreatingOrder = false;

                  case 16:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this, [[0, 12]]);
          }));
        }
      }, {
        key: "replaceUrl",
        value: function replaceUrl(never) {
          return never.replace('http://localhost:1337/api/', _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].serverUrl);
        }
      }, {
        key: "contactEmailField",
        get: function get() {
          return this.form.get('contactEmail');
        }
      }]);

      return CheckoutPage;
    }(_base_page_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"]);

    CheckoutPage.ɵfac = function CheckoutPage_Factory(t) {
      return new (t || CheckoutPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_card__WEBPACK_IMPORTED_MODULE_8__["Card"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cart__WEBPACK_IMPORTED_MODULE_4__["Cart"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_customer_address__WEBPACK_IMPORTED_MODULE_7__["CustomerAddress"]));
    };

    CheckoutPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CheckoutPage,
      selectors: [["page-checkout-page"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 12,
      vars: 4,
      consts: [[1, "ion-no-border"], ["fixed", ""], ["slot", "start"], ["icon", "alert-circle-outline", 3, "text", 4, "ngIf"], ["image", "./assets/imgs/undraw_add_to_cart_vkjp.svg", "imageWidth", "200", 3, "text", 4, "ngIf"], ["novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "ion-margin", 4, "ngIf"], ["icon", "alert-circle-outline", 3, "text"], ["image", "./assets/imgs/undraw_add_to_cart_vkjp.svg", "imageWidth", "200", 3, "text"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["ngForm", "ngForm"], [4, "ngIf"], ["size-xs", "12", "size-lg", "7"], [1, "ion-margin-vertical"], [1, "ion-margin-bottom", "bold"], ["lines", "none", 1, "text-medium", "item-input", "ion-margin-horizontal"], ["type", "email", "formControlName", "contactEmail", 3, "placeholder"], ["class", "alert alert-warning ion-padding-horizontal", 4, "ngIf"], ["lines", "none", 1, "ion-no-padding", "ion-no-margin"], ["formControlName", "paymentMethod", 3, "ionChange"], ["value", "Cash"], ["lines", "none", "hidden", ""], [1, "flex", "align-items-center"], ["width", "40", 3, "src", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], ["value", "Card"], ["class", "z-index-10 ion-text-capitalize", "type", "button", "size", "small", "color", "light", "slot", "end", 3, "click", 4, "ngIf"], [1, "ion-no-padding", "ion-no-margin"], [3, "hidden"], [1, "bold"], ["lines", "none", 3, "click"], [1, "link"], ["color", "light", "size", "medium", "slot", "end", 1, "ion-text-capitalize"], ["size-xs", "12", "size-lg", "5"], [1, "bold", "ion-margin-top"], [1, "bg-light", "radius", "ion-padding", "ion-margin-top"], ["style", "--padding-start:0", "color", "light", 3, "lines", 4, "ngFor", "ngForOf"], [1, "ion-text-end"], [1, "ion-text-center"], ["type", "submit", "strong", "", "shape", "round", "color", "primary", 1, "ion-text-uppercase", 3, "disabled"], ["color", "light", 4, "ngIf"], [1, "alert", "alert-warning", "ion-padding-horizontal"], [1, "bold", "text-medium"], ["width", "40", 3, "src"], [3, "innerHTML"], ["type", "button", "size", "small", "color", "light", "slot", "end", 1, "z-index-10", "ion-text-capitalize", 3, "click"], ["color", "light", 2, "--padding-start", "0", 3, "lines"], ["src-fallback", "./assets/imgs/placeholder.png", 3, "src"], [1, "full-width"], [1, "ion-text-nowrap"], [1, "text-normal", "mb-8"], ["color", "dark"], ["class", "text-medium mb-8 ion-no-margin", 4, "ngIf"], ["slot", "end"], [1, "text-normal"], [1, "text-medium", "mb-8", "ion-no-margin"], ["color", "medium"], ["color", "light"], [1, "ion-margin"], ["size-xs", "12", "size-lg", "8"], ["count", "1", 3, "theme"], ["size-xs", "12", "size-lg", "4"]],
      template: function CheckoutPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Resumen de compra");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-grid", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CheckoutPage_empty_view_8_Template, 2, 3, "empty-view", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CheckoutPage_empty_view_9_Template, 1, 1, "empty-view", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CheckoutPage_form_10_Template, 3, 2, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CheckoutPage_ion_row_11_Template, 7, 8, "ion-row", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isErrorViewVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEmptyViewVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isContentViewVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoadingViewVisible);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonGrid"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _components_empty_view_empty_view__WEBPACK_IMPORTED_MODULE_14__["EmptyView"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonItemGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonListHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["RadioValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonButton"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonThumbnail"], ngx_img_fallback__WEBPACK_IMPORTED_MODULE_15__["ImgFallbackDirective"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_16__["NgxSkeletonLoaderComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"]],
      styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light);\n}\n\nion-grid[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\n.item-input[_ngcontent-%COMP%] {\n  --border-color: var(--ion-color-medium);\n  --border-style: solid;\n  --border-width: 1px !important;\n}\n\n@media (max-width: 991px) {\n  ion-grid[_ngcontent-%COMP%], ion-grid[_ngcontent-%COMP%]    > ion-row[_ngcontent-%COMP%]    > ion-col[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlY2tvdXQtcGFnZS9DOlxcVXNlcnNcXHNtb2tlXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcRWxldmVublxcYXBwc1xcc2hvcFxcaW9uc2hvcC1hcHAvc3JjXFxhcHBcXHBhZ2VzXFxjaGVja291dC1wYWdlXFxjaGVja291dC1wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoZWNrb3V0LXBhZ2UvY2hlY2tvdXQtcGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUVFOztJQUVFLHFCQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNrb3V0LXBhZ2UvY2hlY2tvdXQtcGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbmlvbi1ncmlkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLml0ZW0taW5wdXQge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcblxuICBpb24tZ3JpZCxcbiAgaW9uLWdyaWQ+aW9uLXJvdz5pb24tY29sIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuaW9uLWdyaWQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uaXRlbS1pbnB1dCB7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICBpb24tZ3JpZCxcbmlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CheckoutPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'page-checkout-page',
          templateUrl: 'checkout-page.html',
          styleUrls: ['checkout-page.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _services_card__WEBPACK_IMPORTED_MODULE_8__["Card"]
        }, {
          type: _services_cart__WEBPACK_IMPORTED_MODULE_4__["Cart"]
        }, {
          type: _services_customer_address__WEBPACK_IMPORTED_MODULE_7__["CustomerAddress"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-checkout-page-checkout-page-module-es5.js.map