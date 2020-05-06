(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-list-item-list-module"],{

/***/ "./src/app/pages/filter-modal/filter-modal.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/filter-modal/filter-modal.module.ts ***!
  \***********************************************************/
/*! exports provided: FilterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageModule", function() { return FilterPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _filter_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-modal.page */ "./src/app/pages/filter-modal/filter-modal.page.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");







class FilterPageModule {
}
FilterPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FilterPageModule });
FilterPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FilterPageModule_Factory(t) { return new (t || FilterPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FilterPageModule, { declarations: [_filter_modal_page__WEBPACK_IMPORTED_MODULE_4__["FilterPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        src_app_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    src_app_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                ],
                declarations: [_filter_modal_page__WEBPACK_IMPORTED_MODULE_4__["FilterPage"]],
                entryComponents: [_filter_modal_page__WEBPACK_IMPORTED_MODULE_4__["FilterPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/filter-modal/filter-modal.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/filter-modal/filter-modal.page.ts ***!
  \*********************************************************/
/*! exports provided: FilterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPage", function() { return FilterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/category */ "./src/app/services/category.ts");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var src_app_services_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/item */ "./src/app/services/item.ts");
/* harmony import */ var src_app_services_brand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/brand */ "./src/app/services/brand.ts");
/* harmony import */ var src_app_utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/utils */ "./src/app/utils/utils.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/accordion/accordion.component */ "./src/app/components/accordion/accordion.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
















function FilterPage_ion_item_35_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-checkbox", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function FilterPage_ion_item_35_Template_ion_checkbox_ionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r98.onCategoryChanged($event); })("ngModelChange", function FilterPage_ion_item_35_Template_ion_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const category_r97 = ctx.$implicit; return category_r97.isChecked = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r97 = ctx.$implicit;
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", category_r97.isChecked)("disabled", ctx_r93.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r97.name, " ");
} }
function FilterPage_ion_item_38_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-checkbox", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function FilterPage_ion_item_38_Template_ion_checkbox_ionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r103); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r102.onBrandChanged($event); })("ngModelChange", function FilterPage_ion_item_38_Template_ion_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r103); const brand_r101 = ctx.$implicit; return brand_r101.isChecked = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const brand_r101 = ctx.$implicit;
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", brand_r101.isChecked)("disabled", ctx_r94.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", brand_r101.name, " ");
} }
function FilterPage_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "SEE_THE_RESULTS"), " (", ctx_r95.count, ") ");
} }
function FilterPage_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-spinner", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class FilterPage extends _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"] {
    constructor(injector, itemService, brandService, categoryService) {
        super(injector);
        this.itemService = itemService;
        this.brandService = brandService;
        this.categoryService = categoryService;
        this.params = {};
        this.categories = [];
        this.brands = [];
        this.query = {
            priceRange: { lower: 10, upper: 10000 },
            rating: { lower: 0, upper: 5 },
        };
        this.minPrice = 10;
        this.maxPrice = 10000;
        this.minRating = 0;
        this.maxRating = 5;
        this.count = 0;
    }
    enableMenuSwipe() {
        return false;
    }
    ngOnInit() {
        this.query.isFeatured = this.params.featured === '1' ? true : false;
        this.query.isOnSale = this.params.sale === '1' ? true : false;
        if (this.params.ratingMin) {
            this.query.rating.lower = Number(this.params.ratingMin);
        }
        if (this.params.ratingMax) {
            this.query.rating.upper = Number(this.params.ratingMax);
        }
        if (this.params.priceMin) {
            this.query.priceRange.lower = Number(this.params.priceMin);
        }
        if (this.params.priceMax) {
            this.query.priceRange.upper = Number(this.params.priceMax);
        }
        this.loadData();
    }
    onDismiss(query = null) {
        this.modalCtrl.dismiss(query);
    }
    loadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const promise1 = this.categoryService.load();
                const promise2 = this.brandService.load({
                    categories: this.params.cat
                });
                const [categories, brands] = yield Promise.all([promise1, promise2]);
                this.categories = categories.map(category => {
                    let isChecked = false;
                    if (this.params.cat) {
                        if (Array.isArray(this.params.cat)) {
                            isChecked = this.params.cat.includes(category.id);
                        }
                        else {
                            isChecked = this.params.cat === category.id;
                        }
                    }
                    const option = {
                        id: category.id,
                        name: category.name,
                        isChecked: isChecked,
                    };
                    return option;
                });
                this.brands = brands.map(brand => {
                    let isChecked = false;
                    if (this.params.brand) {
                        if (Array.isArray(this.params.brand)) {
                            isChecked = this.params.brand.includes(brand.id);
                        }
                        else {
                            isChecked = this.params.brand === brand.id;
                        }
                    }
                    const option = {
                        id: brand.id,
                        name: brand.name,
                        isChecked: isChecked,
                    };
                    return option;
                });
                this.loadCount();
            }
            catch (error) {
                console.log(error.message);
            }
        });
    }
    loadBrands(params = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const brands = yield this.brandService.load(params);
            this.brands = brands.map(brand => {
                const option = {
                    id: brand.id,
                    name: brand.name,
                    isChecked: false
                };
                return option;
            });
        });
    }
    onCategoryChanged(event = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (event.target.className.includes('interactive')) {
                const categories = this.categories
                    .filter(category => category.isChecked)
                    .map(category => category.id);
                this.query.cat = categories;
                delete this.query.brand;
                this.loadBrands({ categories });
                this.loadCount();
            }
        });
    }
    onBrandChanged(event = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (event.target.className.includes('interactive')) {
                const brands = this.brands
                    .filter(brand => brand.isChecked)
                    .map(brand => brand.id);
                this.query.brand = brands;
                this.loadCount();
            }
        });
    }
    onQueryChanged(event = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (event.target.className.includes('interactive')) {
                this.loadCount();
            }
        });
    }
    onRangeChanged(event = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadCount();
        });
    }
    loadCount() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.isLoading = true;
                yield src_app_utils_utils__WEBPACK_IMPORTED_MODULE_6__["default"].sleep(1500);
                this.count = yield this.itemService.count(this.query);
                this.isLoading = false;
            }
            catch (error) {
                this.isLoading = false;
            }
        });
    }
    onApplyButtonTouched() {
        const params = {};
        params.featured = this.query.isFeatured ? '1' : '0';
        params.sale = this.query.isOnSale ? '1' : '0';
        params.ratingMin = this.query.rating.lower.toString();
        params.ratingMax = this.query.rating.upper.toString();
        params.priceMin = this.query.priceRange.lower.toString();
        params.priceMax = this.query.priceRange.upper.toString();
        params.cat = this.query.cat;
        params.brand = this.query.brand;
        this.onDismiss(params);
    }
    trackByFn(index, item) {
        if (!item)
            return null;
        return item.id;
    }
}
FilterPage.ɵfac = function FilterPage_Factory(t) { return new (t || FilterPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_item__WEBPACK_IMPORTED_MODULE_4__["Item"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_brand__WEBPACK_IMPORTED_MODULE_5__["Brand"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_category__WEBPACK_IMPORTED_MODULE_2__["Category"])); };
FilterPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FilterPage, selectors: [["app-filter"]], inputs: { params: "params" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 44, vars: 44, consts: [[1, "ion-no-border"], ["slot", "end"], [3, "click"], ["slot", "start", "name", "close"], [1, "ion-text-center"], ["hidden", "", 1, "ion-margin-top"], [3, "ngModel", "disabled", "ionChange", "ngModelChange"], ["color", "medium", 1, "ion-margin-horizontal"], ["hidden", "", "lines", "none"], ["hidden", ""], ["color", "medium"], [1, "text-normal", "bold"], [1, "ion-padding-bottom"], ["debounce", "1500", "color", "dark", "step", "1", "dualKnobs", "true", "pin", "true", 3, "min", "max", "disabled", "ngModel", "ngModelChange", "ionChange"], [1, "ion-margin-bottom"], [1, "text-normal", "bold", "ion-no-margin"], [1, "text-medium", "bold"], ["debounce", "1500", "color", "dark", "step", "10", "dualKnobs", "true", "pin", "true", 3, "min", "max", "disabled", "ngModel", "ngModelChange", "ionChange"], [3, "name"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["hidden", "", 3, "name"], [1, "ion-padding", "ion-text-center"], ["strong", "", "color", "dark", 3, "disabled", "click"], [4, "ngIf"], ["name", "dots", "color", "light"]], template: function FilterPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilterPage_Template_ion_button_click_4_listener() { return ctx.onDismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-checkbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function FilterPage_Template_ion_checkbox_ionChange_8_listener($event) { return ctx.onQueryChanged($event); })("ngModelChange", function FilterPage_Template_ion_checkbox_ngModelChange_8_listener($event) { return ctx.query.isFeatured = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-checkbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function FilterPage_Template_ion_checkbox_ionChange_13_listener($event) { return ctx.onQueryChanged($event); })("ngModelChange", function FilterPage_Template_ion_checkbox_ngModelChange_13_listener($event) { return ctx.query.isOnSale = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-text", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-range", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FilterPage_Template_ion_range_ngModelChange_23_listener($event) { return ctx.query.rating = $event; })("ionChange", function FilterPage_Template_ion_range_ionChange_23_listener($event) { return ctx.onRangeChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-text", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " PRECIO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-range", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FilterPage_Template_ion_range_ngModelChange_33_listener($event) { return ctx.query.priceRange = $event; })("ionChange", function FilterPage_Template_ion_range_ionChange_33_listener($event) { return ctx.onRangeChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "app-accordion", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, FilterPage_ion_item_35_Template, 4, 3, "ion-item", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "app-accordion", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, FilterPage_ion_item_38_Template, 4, 3, "ion-item", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-footer", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilterPage_Template_ion_button_click_40_listener() { return ctx.onApplyButtonTouched(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, FilterPage_span_41_Template, 3, 4, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, FilterPage_span_43_Template, 2, 0, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.query.isFeatured)("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 26, "FEATURED"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.query.isOnSale)("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 28, "ON_SALE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 30, "RATING"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx.minRating)("max", ctx.maxRating)("disabled", ctx.isLoading)("ngModel", ctx.query.rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](30, 32, ctx.query.priceRange.lower, "USD", "symbol", "1.0-0"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](31, 37, ctx.query.priceRange.upper, "USD", "symbol", "1.0-0"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx.minPrice)("max", ctx.maxPrice)("disabled", ctx.isLoading)("ngModel", ctx.query.priceRange);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "CATEGORIAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories)("ngForTrackBy", ctx.trackByFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 42, "BRANDS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.brands)("ngForTrackBy", ctx.trackByFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRange"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["SelectValueAccessor"], _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_9__["AccordionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonFooter"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonSpinner"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CurrencyPipe"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light);\n}\n\nion-list[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\nion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: var(--ion-item-light);\n  --detail-icon-color: var(--ion-color-dark);\n}\n\nion-list[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light-shade);\n}\n\nion-footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmlsdGVyLW1vZGFsL0M6XFxVc2Vyc1xcc21va2VcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxFbGV2ZW5uXFxhcHBzXFxzaG9wXFxpb25zaG9wLWFwcC9zcmNcXGFwcFxccGFnZXNcXGZpbHRlci1tb2RhbFxcZmlsdGVyLW1vZGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmlsdGVyLW1vZGFsL2ZpbHRlci1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURDRTtFQUNFLG1DQUFBO0VBQ0EsMENBQUE7QUNDSjs7QURDSTtFQUNFLDBDQUFBO0FDQ047O0FES0U7RUFDRSxnQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmlsdGVyLW1vZGFsL2ZpbHRlci1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICBpb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1saWdodCk7XG4gICAgLS1kZXRhaWwtaWNvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuXG4gICAgJi5zZWxlY3RlZCB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgfVxuICB9XG59XG5cbmlvbi1mb290ZXIge1xuICBpb24tYnV0dG9uIHtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICB9XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5pb24tbGlzdCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tbGlnaHQpO1xuICAtLWRldGFpbC1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5pb24tbGlzdCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cblxuaW9uLWZvb3RlciBpb24tYnV0dG9uIHtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FilterPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-filter',
                templateUrl: './filter-modal.page.html',
                styleUrls: ['./filter-modal.page.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: src_app_services_item__WEBPACK_IMPORTED_MODULE_4__["Item"] }, { type: src_app_services_brand__WEBPACK_IMPORTED_MODULE_5__["Brand"] }, { type: _services_category__WEBPACK_IMPORTED_MODULE_2__["Category"] }]; }, { params: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/item-list/item-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/item-list/item-list.module.ts ***!
  \*****************************************************/
/*! exports provided: ItemListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListPageModule", function() { return ItemListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _item_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-list */ "./src/app/pages/item-list/item-list.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _filter_modal_filter_modal_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filter-modal/filter-modal.module */ "./src/app/pages/filter-modal/filter-modal.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








class ItemListPageModule {
}
ItemListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ItemListPageModule });
ItemListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ItemListPageModule_Factory(t) { return new (t || ItemListPageModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                {
                    path: '',
                    component: _item_list__WEBPACK_IMPORTED_MODULE_2__["ItemListPage"]
                }
            ]),
            _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _filter_modal_filter_modal_module__WEBPACK_IMPORTED_MODULE_4__["FilterPageModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ItemListPageModule, { declarations: [_item_list__WEBPACK_IMPORTED_MODULE_2__["ItemListPage"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _filter_modal_filter_modal_module__WEBPACK_IMPORTED_MODULE_4__["FilterPageModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemListPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _item_list__WEBPACK_IMPORTED_MODULE_2__["ItemListPage"],
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _item_list__WEBPACK_IMPORTED_MODULE_2__["ItemListPage"]
                        }
                    ]),
                    _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _filter_modal_filter_modal_module__WEBPACK_IMPORTED_MODULE_4__["FilterPageModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/item-list/item-list.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/item-list/item-list.ts ***!
  \**********************************************/
/*! exports provided: ItemListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListPage", function() { return ItemListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/item */ "./src/app/services/item.ts");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _filter_modal_filter_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../filter-modal/filter-modal.page */ "./src/app/pages/filter-modal/filter-modal.page.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_empty_view_empty_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/empty-view/empty-view */ "./src/app/components/empty-view/empty-view.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_shop_item_shop_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/shop-item/shop-item.component */ "./src/app/components/shop-item/shop-item.component.ts");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-skeleton-loader */ "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm2015/ngx-skeleton-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");


















const _c0 = function (a0) { return [a0]; };
function ItemListPage_ion_grid_16_ion_list_1_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemListPage_ion_grid_16_ion_list_1_ion_item_1_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r116); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r115.suggestions = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-text", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const suggestion_r114 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, "./" + suggestion_r114.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", suggestion_r114.name, " ");
} }
function ItemListPage_ion_grid_16_ion_list_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ItemListPage_ion_grid_16_ion_list_1_ion_item_1_Template, 5, 4, "ion-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@staggerIn", ctx_r112.suggestions.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r112.suggestions)("ngForTrackBy", ctx_r112.trackByFn);
} }
function ItemListPage_ion_grid_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-grid", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ItemListPage_ion_grid_16_ion_list_1_Template, 2, 3, "ion-list", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r106.suggestions.length);
} }
function ItemListPage_empty_view_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "empty-view", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "ERROR_DATA"));
} }
function ItemListPage_empty_view_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "empty-view", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "EMPTY_DATA"));
} }
function ItemListPage_div_20_ion_select_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r118 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, option_r118.sortByField + "_" + option_r118.sortBy)), " ");
} }
function ItemListPage_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-text", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " ORDENAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemListPage_div_20_Template_ion_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r120); const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r119.selectedSortOption = $event; })("ionChange", function ItemListPage_div_20_Template_ion_select_ionChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r120); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r121.onSortOptionTouched($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ItemListPage_div_20_ion_select_option_6_Template, 4, 6, "ion-select-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r109.selectedSortOption)("compareWith", ctx_r109.compareSortOption)("interfaceOptions", ctx_r109.customPopoverOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r109.sortOptions);
} }
function ItemListPage_ion_list_21_ion_col_2_Template(rf, ctx) { if (rf & 1) {
    const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-shop-item", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemListPage_ion_list_21_ion_col_2_Template_app_shop_item_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r125); const item_r123 = ctx.$implicit; const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r124.onItemTouched(item_r123); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r123 = ctx.$implicit;
    const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", item_r123)("customObservable", ctx_r122.loadAndScroll);
} }
function ItemListPage_ion_list_21_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ItemListPage_ion_list_21_ion_col_2_Template, 2, 2, "ion-col", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-infinite-scroll", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionInfinite", function ItemListPage_ion_list_21_Template_ion_infinite_scroll_ionInfinite_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r127); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r126.onLoadMore($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-infinite-scroll-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@staggerIn", ctx_r110.items.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r110.items)("ngForTrackBy", ctx_r110.trackByFn);
} }
const _c1 = function () { return { width: "100%", height: "240px", "border-radius": "0" }; };
function ItemListPage_ion_row_22_ion_col_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-skeleton-loader", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
} }
function ItemListPage_ion_row_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ItemListPage_ion_row_22_ion_col_1_Template, 2, 2, "ion-col", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r111.skeletonArray);
} }
class ItemListPage extends _base_page_base_page__WEBPACK_IMPORTED_MODULE_4__["BasePage"] {
    constructor(injector, itemService) {
        super(injector);
        this.itemService = itemService;
        this.items = [];
        this.skeletonArray = Array(32);
        this.params = {
            page: 0,
            limit: 20
        };
        this.suggestions = [];
        this.customPopoverOptions = {};
    }
    ngOnInit() {
        this.buildSortOptions();
        this.setupObservables();
        this.setupQueryParams();
    }
    setupObservables() {
        this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.content.ionScroll, this.contentLoaded);
    }
    setupQueryParams() {
        this.params.sale = this.getQueryParams().sale;
        this.params.new = this.getQueryParams().new;
        this.params.featured = this.getQueryParams().featured;
        this.params.ratingMin = this.getQueryParams().ratingMin;
        this.params.ratingMax = this.getQueryParams().ratingMax;
        this.params.priceMin = this.getQueryParams().priceMin;
        this.params.priceMax = this.getQueryParams().priceMax;
        this.params.cat = this.getQueryParams().cat;
        this.params.subcat = this.getQueryParams().subcat;
        this.params.brand = this.getQueryParams().brand;
    }
    enableMenuSwipe() {
        return false;
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.items.length) {
                this.showLoadingView({ showOverlay: false });
                this.loadData();
            }
            const title = yield this.getTrans('ITEMS');
            this.setPageTitle(title);
            this.setMetaTags({
                title: title
            });
        });
    }
    buildSortOptions() {
        this.sortOptions = [{
                sortBy: 'desc', sortByField: 'createdAt',
            }, {
                sortBy: 'asc', sortByField: 'netPrice',
            }, {
                sortBy: 'desc', sortByField: 'netPrice',
            }];
        const sortBy = this.getQueryParams().sortBy;
        const sortByField = this.getQueryParams().sortByField;
        if (sortBy && sortByField) {
            this.selectedSortOption = { sortBy, sortByField };
        }
        else {
            this.selectedSortOption = this.sortOptions[0];
        }
    }
    onSortOptionTouched(event = {}) {
        const option = Object.assign({}, event.detail.value);
        delete option.id;
        this.params = Object.assign(Object.assign({}, this.params), option);
        this.onRefresh();
        this.navigateToRelative('.', option);
    }
    compareSortOption(o1, o2) {
        return o1 && o2 ? (o1.sortBy === o2.sortBy && o1.sortByField === o2.sortByField) : o1 === o2;
    }
    ;
    onRefresh(event = {}) {
        this.refresher = event.target;
        this.items = [];
        this.params.page = 0;
        this.loadData();
    }
    onContentLoaded() {
        setTimeout(() => {
            this.contentLoaded.next();
        }, 400);
    }
    loadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let items = yield this.itemService.load(this.params);
                for (const item of items) {
                    this.items.push(item);
                }
                if (this.items.length) {
                    this.showContentView();
                }
                else {
                    this.showEmptyView();
                }
                this.onRefreshComplete(items);
                this.onContentLoaded();
            }
            catch (error) {
                if (this.items.length) {
                    this.showContentView();
                }
                else {
                    this.showErrorView();
                }
                this.onRefreshComplete();
                this.translate.get('ERROR_NETWORK').subscribe((str) => this.showToast(str));
            }
        });
    }
    onSearch(event = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const searchTerm = event.target.value;
            if (searchTerm) {
                try {
                    this.suggestions = yield this.itemService.load({
                        tag: searchTerm.toLowerCase(),
                        limit: 10,
                    });
                }
                catch (error) {
                    console.log(error.message);
                }
            }
        });
    }
    onClearSearch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.suggestions = [];
        });
    }
    onLoadMore(event = {}) {
        this.infiniteScroll = event.target;
        this.params.page++;
        this.loadData();
    }
    onPresentFilterModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.showLoadingView({ showOverlay: true });
            const params = Object.assign({}, this.params);
            const allowed = [
                'sale',
                'featured',
                'ratingMin',
                'ratingMax',
                'priceMin',
                'priceMax',
                'cat',
                'brand',
            ];
            const filteredParams = Object.keys(params)
                .filter(key => allowed.includes(key))
                .reduce((obj, key) => {
                obj[key] = params[key];
                return obj;
            }, {});
            const modal = yield this.modalCtrl.create({
                component: _filter_modal_filter_modal_page__WEBPACK_IMPORTED_MODULE_6__["FilterPage"],
                componentProps: { params: filteredParams }
            });
            yield modal.present();
            this.dismissLoadingView();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                const params = Object.assign(Object.assign({}, this.params), data);
                this.params = params;
                this.showLoadingView({ showOverlay: false });
                this.onRefresh();
                this.navigateToRelative('.', data);
            }
        });
    }
    onItemTouched(item) {
        // for some reason the relative navigation isn't working
        // after updating the query params in the filter modal
        // so absolute nav is the workaround for now...
        // Get current url without params
        const url = this.router.url.split('?')[0];
        this.navigateTo(url + '/' + item.slug);
    }
    trackByFn(index, item) {
        if (!item)
            return null;
        return item.id;
    }
}
ItemListPage.ɵfac = function ItemListPage_Factory(t) { return new (t || ItemListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_item__WEBPACK_IMPORTED_MODULE_3__["Item"])); };
ItemListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ItemListPage, selectors: [["page-item-list"]], viewQuery: function ItemListPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 23, vars: 9, consts: [[1, "ion-no-border"], ["fixed", ""], ["slot", "start"], ["mode", "ios", 3, "placeholder", "ionInput", "ionClear"], ["slot", "end"], ["color", "dark", "size", "small", 1, "ion-text-uppercase", 3, "click"], ["slot", "start", "name", "funnel"], [1, "text-small"], ["scrollEvents", "true"], ["container", ""], ["slot", "fixed", 3, "ionRefresh"], ["pullingText", "Desliza para actualizar", "refreshingText", "Actualizando"], ["slot", "fixed", 2, "left", "16px", "right", "16px"], ["class", "relative", "fixed", "", 4, "ngIf"], ["icon", "alert-circle-outline", 3, "text", 4, "ngIf"], ["image", "./assets/imgs/price-tag.svg", "imageWidth", "150", 3, "text", 4, "ngIf"], ["class", "custom-select ion-margin-vertical", 4, "ngIf"], [4, "ngIf"], ["class", "ion-justify-content-center", 4, "ngIf"], ["fixed", "", 1, "relative"], ["lines", "none", "class", "ion-no-margin", "class", "shadow autocomplete", 4, "ngIf"], ["lines", "none", 1, "shadow", "autocomplete"], ["class", "hover", "button", "", "detail", "false", "style", "--min-height: 70px;", 3, "routerLink", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["button", "", "detail", "false", 1, "hover", 2, "--min-height", "70px", 3, "routerLink", "click"], ["color", "dark"], [1, "link", "bold", "text-medium"], ["icon", "alert-circle-outline", 3, "text"], ["image", "./assets/imgs/price-tag.svg", "imageWidth", "150", 3, "text"], [1, "custom-select", "ion-margin-vertical"], ["lines", "none"], ["color", "medium", 1, "bold"], ["interface", "popover", 3, "ngModel", "compareWith", "interfaceOptions", "ngModelChange", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["size-xs", "6", "size-sm", "4", "size-md", "4", "size-lg", "3", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ionInfinite"], ["size-xs", "6", "size-sm", "4", "size-md", "4", "size-lg", "3"], [3, "item", "customObservable", "click"], [1, "ion-justify-content-center"], ["class", "ion-text-center", "size-xs", "6", "size-sm", "4", "size-md", "4", "size-lg", "3", 4, "ngFor", "ngForOf"], ["size-xs", "6", "size-sm", "4", "size-md", "4", "size-lg", "3", 1, "ion-text-center"], ["count", "1", "appearance", "circle", 3, "theme"]], template: function ItemListPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-searchbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionInput", function ItemListPage_Template_ion_searchbar_ionInput_4_listener($event) { return ctx.onSearch($event); })("ionClear", function ItemListPage_Template_ion_searchbar_ionClear_4_listener() { return ctx.onClearSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-buttons", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemListPage_Template_ion_button_click_7_listener() { return ctx.onPresentFilterModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "FILTRAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-content", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-refresher", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function ItemListPage_Template_ion_refresher_ionRefresh_13_listener($event) { return ctx.onRefresh($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ion-refresher-content", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ItemListPage_ion_grid_16_Template, 2, 1, "ion-grid", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ItemListPage_empty_view_18_Template, 2, 3, "empty-view", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ItemListPage_empty_view_19_Template, 2, 3, "empty-view", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ItemListPage_div_20_Template, 7, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ItemListPage_ion_list_21_Template, 5, 3, "ion-list", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ItemListPage_ion_row_22_Template, 2, 1, "ion-row", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 7, "SEARCH_PLACEHOLDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.suggestions.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isErrorViewVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEmptyViewVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isContentViewVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isContentViewVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoadingViewVisible);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["RouterLinkDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonText"], _components_empty_view_empty_view__WEBPACK_IMPORTED_MODULE_10__["EmptyView"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScrollContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _components_shop_item_shop_item_component__WEBPACK_IMPORTED_MODULE_12__["ShopItemComponent"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_13__["NgxSkeletonLoaderComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light);\n}\n\nion-grid[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\nion-searchbar[_ngcontent-%COMP%] {\n  padding: 0 8px !important;\n}\n\nion-buttons[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.custom-select[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.custom-select[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.custom-select[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaXRlbS1saXN0L0M6XFxVc2Vyc1xcc21va2VcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxFbGV2ZW5uXFxhcHBzXFxzaG9wXFxpb25zaG9wLWFwcC9zcmNcXGFwcFxccGFnZXNcXGl0ZW0tbGlzdFxcaXRlbS1saXN0LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2l0ZW0tbGlzdC9pdGVtLWxpc3Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FER0U7RUFDRSxxQkFBQTtBQ0FKOztBREVJO0VBQ0UsZUFBQTtBQ0FOOztBREdJO0VBQ0UsZUFBQTtBQ0ROIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaXRlbS1saXN0L2l0ZW0tbGlzdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbmlvbi1ncmlkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIHBhZGRpbmc6IDAgOHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b25zIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uY3VzdG9tLXNlbGVjdCB7XG4gIGlvbi1pdGVtIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIH1cblxuICAgIGlvbi1zZWxlY3Qge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlXG4gICAgfVxuICB9XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbmlvbi1ncmlkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIHBhZGRpbmc6IDAgOHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b25zIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uY3VzdG9tLXNlbGVjdCBpb24taXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jdXN0b20tc2VsZWN0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbi5jdXN0b20tc2VsZWN0IGlvbi1pdGVtIGlvbi1zZWxlY3Qge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('staggerIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ItemListPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'page-item-list',
                templateUrl: 'item-list.html',
                styleUrls: ['item-list.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('staggerIn', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _services_item__WEBPACK_IMPORTED_MODULE_3__["Item"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/utils/utils.ts":
/*!********************************!*\
  !*** ./src/app/utils/utils.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Utils; });
class Utils {
    static shuffle(arr) {
        return arr.map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]);
    }
    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    static chunk(array, size) {
        const chunked_arr = [];
        for (let i = 0; i < array.length; i++) {
            const last = chunked_arr[chunked_arr.length - 1];
            if (!last || last.length === size) {
                chunked_arr.push([array[i]]);
            }
            else {
                last.push(array[i]);
            }
        }
        return chunked_arr;
    }
}


/***/ })

}]);
//# sourceMappingURL=pages-item-list-item-list-module-es2015.js.map