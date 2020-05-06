function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-thanks-page-thanks-page-module"], {
  /***/
  "./src/app/pages/thanks-page/thanks-page.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/thanks-page/thanks-page.module.ts ***!
    \*********************************************************/

  /*! exports provided: ThanksPageModule */

  /***/
  function srcAppPagesThanksPageThanksPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThanksPageModule", function () {
      return ThanksPageModule;
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


    var _thanks_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./thanks-page */
    "./src/app/pages/thanks-page/thanks-page.ts");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared.module */
    "./src/app/shared.module.ts");

    var ThanksPageModule = function ThanksPageModule() {
      _classCallCheck(this, ThanksPageModule);
    };

    ThanksPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ThanksPageModule
    });
    ThanksPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ThanksPageModule_Factory(t) {
        return new (t || ThanksPageModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: '',
        component: _thanks_page__WEBPACK_IMPORTED_MODULE_2__["ThanksPage"]
      }]), _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ThanksPageModule, {
        declarations: [_thanks_page__WEBPACK_IMPORTED_MODULE_2__["ThanksPage"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThanksPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_thanks_page__WEBPACK_IMPORTED_MODULE_2__["ThanksPage"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _thanks_page__WEBPACK_IMPORTED_MODULE_2__["ThanksPage"]
          }]), _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/thanks-page/thanks-page.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/thanks-page/thanks-page.ts ***!
    \**************************************************/

  /*! exports provided: ThanksPage */

  /***/
  function srcAppPagesThanksPageThanksPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThanksPage", function () {
      return ThanksPage;
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


    var _services_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/order */
    "./src/app/services/order.ts");
    /* harmony import */


    var _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base-page/base-page */
    "./src/app/pages/base-page/base-page.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ThanksPage_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r330 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-text", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Hemos recibido tu pedido correctamente ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Tu numero de pedido es ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Procesaremos tu pedido lo antes posible");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ThanksPage_div_7_Template_ion_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r330);

          var ctx_r329 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r329.goToHome();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " CONTINUAR COMPRANDO ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", ctx_r328.order.number, "");
      }
    }

    var ThanksPage =
    /*#__PURE__*/
    function (_base_page_base_page_) {
      _inherits(ThanksPage, _base_page_base_page_);

      function ThanksPage(injector, orderService) {
        var _this;

        _classCallCheck(this, ThanksPage);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(ThanksPage).call(this, injector));
        _this.orderService = orderService;
        return _this;
      }

      _createClass(ThanksPage, [{
        key: "enableMenuSwipe",
        value: function enableMenuSwipe() {
          return true;
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var orderId, title;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return this.showLoadingView({
                      showOverlay: false
                    });

                  case 3:
                    _context.next = 5;
                    return this.getParams().orderId;

                  case 5:
                    orderId = _context.sent;
                    _context.next = 8;
                    return this.orderService.loadOne(orderId);

                  case 8:
                    this.order = _context.sent;
                    this.showContentView();
                    _context.next = 15;
                    break;

                  case 12:
                    _context.prev = 12;
                    _context.t0 = _context["catch"](0);
                    this.showErrorView();

                  case 15:
                    _context.next = 17;
                    return this.getTrans('APP_NAME');

                  case 17:
                    title = _context.sent;
                    this.setPageTitle(title);
                    this.setMetaTags({
                      title: title
                    });

                  case 20:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 12]]);
          }));
        }
      }, {
        key: "goToHome",
        value: function goToHome() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.setRoot('/1/cart');

                  case 2:
                    this.navigateTo('/');

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return ThanksPage;
    }(_base_page_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"]);

    ThanksPage.ɵfac = function ThanksPage_Factory(t) {
      return new (t || ThanksPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_order__WEBPACK_IMPORTED_MODULE_2__["Order"]));
    };

    ThanksPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ThanksPage,
      selectors: [["page-thanks-page"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 8,
      vars: 1,
      consts: [[1, "ion-no-border"], ["fixed", "", 1, "center"], [1, "ion-justify-content-center"], ["size-xs", "12", "size-lg", "10"], ["class", "ion-text-center", 4, "ngIf"], [1, "ion-text-center"], ["name", "checkmark-circle", "color", "success"], [1, "ion-padding"], ["color", "dark"], [1, "bold"], [2, "font-weight", "bold"], ["size", "large", "shape", "round", "color", "primary", 3, "click"]],
      template: function ThanksPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-grid", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-row", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ThanksPage_div_7_Template, 14, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.order);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"]],
      styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light);\n}\n\nion-grid[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\nh2.text[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  font-size: 6em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGhhbmtzLXBhZ2UvQzpcXFVzZXJzXFxzbW9rZVxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXEVsZXZlbm5cXGFwcHNcXHNob3BcXGlvbnNob3AtYXBwL3NyY1xcYXBwXFxwYWdlc1xcdGhhbmtzLXBhZ2VcXHRoYW5rcy1wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RoYW5rcy1wYWdlL3RoYW5rcy1wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90aGFua3MtcGFnZS90aGFua3MtcGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbmlvbi1ncmlkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuaDIudGV4dCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDZlbTtcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuaW9uLWdyaWQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5oMi50ZXh0IHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ThanksPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'page-thanks-page',
          templateUrl: 'thanks-page.html',
          styleUrls: ['thanks-page.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _services_order__WEBPACK_IMPORTED_MODULE_2__["Order"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-thanks-page-thanks-page-module-es5.js.map