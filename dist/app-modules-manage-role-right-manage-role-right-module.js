(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-manage-role-right-manage-role-right-module"],{

/***/ "./node_modules/ng2-ckeditor/fesm5/ng2-ckeditor.js":
/*!*********************************************************!*\
  !*** ./node_modules/ng2-ckeditor/fesm5/ng2-ckeditor.js ***!
  \*********************************************************/
/*! exports provided: CKEditorModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CKEditorModule", function() { return CKEditorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CKEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CKButtonDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CKGroupDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/ng2-ckeditor/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckbutton [name]="'SaveButton'" [command]="'saveCommand'" (click)="save($event)"
 *                [icon]="'/save.png'" [toolbar]="'customGroup,1'" [label]="'Save'">
 *      </ckbutton>
 *   </ckeditor>
 */
var CKButtonDirective = /** @class */ (function () {
    function CKButtonDirective() {
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CKButtonDirective.prototype.initialize = function (editor) {
        var _this = this;
        editor.instance.addCommand(this.command, {
            exec: function (evt) {
                _this.click.emit(evt);
            },
        });
        editor.instance.ui.addButton(this.name, {
            label: this.label,
            command: this.command,
            toolbar: this.toolbar,
            icon: this.icon,
        });
    };
    CKButtonDirective.prototype.ngOnInit = function () {
        if (!this.name)
            throw new Error('Attribute "name" is required on <ckbutton>');
        if (!this.command)
            throw new Error('Attribute "command" is required on <ckbutton>');
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CKButtonDirective.prototype, "click", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CKButtonDirective.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CKButtonDirective.prototype, "command", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CKButtonDirective.prototype, "toolbar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CKButtonDirective.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CKButtonDirective.prototype, "icon", void 0);
    CKButtonDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'ckbutton',
        })
    ], CKButtonDirective);
    return CKButtonDirective;
}());

/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckgroup [name]="'exampleGroup2'" [previous]="'1'" [subgroupOf]="'exampleGroup1'">
 *          .
 *          .
 *      </ckgroup>
 *   </ckeditor>
 */
var CKGroupDirective = /** @class */ (function () {
    function CKGroupDirective() {
    }
    CKGroupDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Reconfigure each button's toolbar property within ckgroup to hold its parent's name
        this.toolbarButtons.forEach(function (button) { return (button.toolbar = _this.name); });
    };
    CKGroupDirective.prototype.initialize = function (editor) {
        editor.instance.ui.addToolbarGroup(this.name, this.previous, this.subgroupOf);
        // Initialize each button within ckgroup
        this.toolbarButtons.forEach(function (button) {
            button.initialize(editor);
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CKGroupDirective.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CKGroupDirective.prototype, "previous", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CKGroupDirective.prototype, "subgroupOf", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(CKButtonDirective),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], CKGroupDirective.prototype, "toolbarButtons", void 0);
    CKGroupDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'ckgroup',
        })
    ], CKGroupDirective);
    return CKGroupDirective;
}());

/**
 * CKEditor component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500"></ckeditor>
 */
var CKEditorComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function CKEditorComponent(zone) {
        this.zone = zone;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.contentDom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fileUploadRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fileUploadResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.paste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._value = '';
    }
    CKEditorComponent_1 = CKEditorComponent;
    Object.defineProperty(CKEditorComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    CKEditorComponent.prototype.ngOnChanges = function (changes) {
        if (changes.readonly && this.instance) {
            this.instance.setReadOnly(changes.readonly.currentValue);
        }
    };
    /**
     * On component destroy
     */
    CKEditorComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.instance) {
            setTimeout(function () {
                if (_this.instance) {
                    _this.instance.removeAllListeners();
                    CKEDITOR.instances[_this.instance.name].destroy();
                    _this.instance.destroy();
                    _this.instance = null;
                }
            });
        }
    };
    /**
     * On component view init
     */
    CKEditorComponent.prototype.ngAfterViewInit = function () {
        this.ckeditorInit(this.config || {});
    };
    /**
     * On component view checked
     */
    CKEditorComponent.prototype.ngAfterViewChecked = function () {
        this.ckeditorInit(this.config || {});
    };
    /**
     * Value update process
     */
    CKEditorComponent.prototype.updateValue = function (value) {
        var _this = this;
        this.zone.run(function () {
            _this.value = value;
            _this.onChange(value);
            _this.onTouched();
            _this.change.emit(value);
        });
    };
    /**
     * CKEditor init
     */
    CKEditorComponent.prototype.ckeditorInit = function (config) {
        var _this = this;
        if (typeof CKEDITOR === 'undefined') {
            console.warn('CKEditor 4.x is missing (http://ckeditor.com/)');
        }
        else {
            // Check textarea exists
            if (this.instance || !this.documentContains(this.host.nativeElement)) {
                return;
            }
            if (this.readonly) {
                config.readOnly = this.readonly;
            }
            // CKEditor replace textarea
            this.instance = CKEDITOR.replace(this.host.nativeElement, config);
            // Set initial value
            this.instance.setData(this.value);
            // listen for instanceReady event
            this.instance.on('instanceReady', function (evt) {
                // if value has changed while instance loading
                // update instance with current component value
                if (_this.instance.getData() !== _this.value) {
                    _this.instance.setData(_this.value);
                }
                // send the evt to the EventEmitter
                _this.ready.emit(evt);
            });
            // CKEditor change event
            this.instance.on('change', function (evt) {
                _this.onTouched();
                var value = _this.instance.getData();
                if (_this.value !== value) {
                    // Debounce update
                    if (_this.debounce) {
                        if (_this.debounceTimeout)
                            clearTimeout(_this.debounceTimeout);
                        _this.debounceTimeout = setTimeout(function () {
                            _this.updateValue(value);
                            _this.debounceTimeout = null;
                        }, parseInt(_this.debounce));
                        // Live update
                    }
                    else {
                        _this.updateValue(value);
                    }
                }
                // Original ckeditor event dispatch
                _this.editorChange.emit(evt);
            });
            // CKEditor blur event
            this.instance.on('blur', function (evt) {
                _this.blur.emit(evt);
            });
            // CKEditor focus event
            this.instance.on('focus', function (evt) {
                _this.focus.emit(evt);
            });
            // CKEditor contentDom event
            this.instance.on('contentDom', function (evt) {
                _this.contentDom.emit(evt);
            });
            // CKEditor fileUploadRequest event
            this.instance.on('fileUploadRequest', function (evt) {
                _this.fileUploadRequest.emit(evt);
            });
            // CKEditor fileUploadResponse event
            this.instance.on('fileUploadResponse', function (evt) {
                _this.fileUploadResponse.emit(evt);
            });
            // CKEditor paste event
            this.instance.on('paste', function (evt) {
                _this.paste.emit(evt);
            });
            // CKEditor drop event
            this.instance.on('drop', function (evt) {
                _this.drop.emit(evt);
            });
            // Add Toolbar Groups to Editor. This will also add Buttons within groups.
            this.toolbarGroups.forEach(function (group) {
                group.initialize(_this);
            });
            // Add Toolbar Buttons to Editor.
            this.toolbarButtons.forEach(function (button) {
                button.initialize(_this);
            });
        }
    };
    /**
     * Implements ControlValueAccessor
     */
    CKEditorComponent.prototype.writeValue = function (value) {
        this._value = value;
        if (this.instance)
            this.instance.setData(value);
    };
    CKEditorComponent.prototype.onChange = function (_) { };
    CKEditorComponent.prototype.onTouched = function () { };
    CKEditorComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    CKEditorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    CKEditorComponent.prototype.documentContains = function (node) {
        return document.contains ? document.contains(node) : document.body.contains(node);
    };
    var CKEditorComponent_1;
    CKEditorComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CKEditorComponent.prototype, "config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CKEditorComponent.prototype, "readonly", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CKEditorComponent.prototype, "debounce", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CKEditorComponent.prototype, "change", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CKEditorComponent.prototype, "editorChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CKEditorComponent.prototype, "ready", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CKEditorComponent.prototype, "blur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CKEditorComponent.prototype, "focus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CKEditorComponent.prototype, "contentDom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CKEditorComponent.prototype, "fileUploadRequest", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CKEditorComponent.prototype, "fileUploadResponse", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CKEditorComponent.prototype, "paste", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CKEditorComponent.prototype, "drop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('host', { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CKEditorComponent.prototype, "host", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(CKButtonDirective),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], CKEditorComponent.prototype, "toolbarButtons", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(CKGroupDirective),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], CKEditorComponent.prototype, "toolbarGroups", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], CKEditorComponent.prototype, "value", null);
    CKEditorComponent = CKEditorComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ckeditor',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return CKEditorComponent_1; }),
                    multi: true,
                },
            ],
            template: "\n    <textarea #host></textarea>\n  "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], CKEditorComponent);
    return CKEditorComponent;
}());

/**
 * CKEditorModule
 */
var CKEditorModule = /** @class */ (function () {
    function CKEditorModule() {
    }
    CKEditorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [CKEditorComponent, CKButtonDirective, CKGroupDirective],
            exports: [CKEditorComponent, CKButtonDirective, CKGroupDirective],
        })
    ], CKEditorModule);
    return CKEditorModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng2-ckeditor.js.map


/***/ }),

/***/ "./node_modules/ng2-ckeditor/node_modules/tslib/tslib.es6.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ng2-ckeditor/node_modules/tslib/tslib.es6.js ***!
  \*******************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/modules/manage-role-right/manage-role-right-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/manage-role-right/manage-role-right-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ManageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageRoutingModule", function() { return ManageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _module_module_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/module.component */ "./src/app/modules/manage-role-right/module/module.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./role/role.component */ "./src/app/modules/manage-role-right/role/role.component.ts");
/* harmony import */ var _right_right_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./right/right.component */ "./src/app/modules/manage-role-right/right/right.component.ts");
/* harmony import */ var _page_information_page_information_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-information/page-information.component */ "./src/app/modules/manage-role-right/page-information/page-information.component.ts");







var routes = [
    {
        path: 'module',
        component: _module_module_component__WEBPACK_IMPORTED_MODULE_3__["ModuleComponent"],
        data: { title: 'module' }
    },
    {
        path: 'role',
        component: _role_role_component__WEBPACK_IMPORTED_MODULE_4__["RoleComponent"],
        data: { title: 'Role' }
    },
    {
        path: 'right',
        component: _right_right_component__WEBPACK_IMPORTED_MODULE_5__["RightComponent"],
        data: { title: 'Right' }
    },
    {
        path: 'page-information',
        component: _page_information_page_information_component__WEBPACK_IMPORTED_MODULE_6__["PageInformationComponent"],
        data: { title: 'Page Information' }
    }
];
var ManageRoutingModule = /** @class */ (function () {
    function ManageRoutingModule() {
    }
    ManageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], ManageRoutingModule);
    return ManageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/manage-role-right/manage-role-right.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/manage-role-right/manage-role-right.module.ts ***!
  \***********************************************************************/
/*! exports provided: ManageRoleRightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageRoleRightModule", function() { return ManageRoleRightModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var _module_module_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./module/module.component */ "./src/app/modules/manage-role-right/module/module.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./role/role.component */ "./src/app/modules/manage-role-right/role/role.component.ts");
/* harmony import */ var _right_right_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./right/right.component */ "./src/app/modules/manage-role-right/right/right.component.ts");
/* harmony import */ var _manage_role_right_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manage-role-right-routing.module */ "./src/app/modules/manage-role-right/manage-role-right-routing.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-http-loader */ "./node_modules/ng-http-loader/fesm5/ng-http-loader.js");
/* harmony import */ var _page_information_page_information_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./page-information/page-information.component */ "./src/app/modules/manage-role-right/page-information/page-information.component.ts");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/fesm5/ng2-ckeditor.js");

















var ManageRoleRightModule = /** @class */ (function () {
    function ManageRoleRightModule() {
    }
    ManageRoleRightModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_12__["FuseSharedModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedManagementModule"],
                app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_13__["MatcomponentsModule"],
                _manage_role_right_routing_module__WEBPACK_IMPORTED_MODULE_11__["ManageRoutingModule"],
                ng_http_loader__WEBPACK_IMPORTED_MODULE_14__["NgHttpLoaderModule"].forRoot(),
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_16__["CKEditorModule"]
            ],
            declarations: [
                _module_module_component__WEBPACK_IMPORTED_MODULE_8__["ModuleComponent"],
                _role_role_component__WEBPACK_IMPORTED_MODULE_9__["RoleComponent"],
                _right_right_component__WEBPACK_IMPORTED_MODULE_10__["RightComponent"],
                _page_information_page_information_component__WEBPACK_IMPORTED_MODULE_15__["PageInformationComponent"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_7__["TokenInterceptor"],
                    multi: true,
                },
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], ManageRoleRightModule);
    return ManageRoleRightModule;
}());



/***/ }),

/***/ "./src/app/modules/manage-role-right/module/module.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/manage-role-right/module/module.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table  [settings]=\"tableSettings\" [closeRowForm]=closeForm \n[templateRef]=\"newModule\" (getTableData)='tableData($event)'\n(openAddForm)='openForm()' (rowBasedAction)='actions($event)'>\n</app-table>\n\n<ng-template #newModule>\n  <form [formGroup]=\"moduleForm\" (ngSubmit)=\"createOrUpdateClass(moduleForm.value)\" #module=\"ngForm\">\n\n    <div fxFlexFill fxLayout=\"column\" fxLayout.gt-xs=\"row\" class=\"pt-24\" fxLayoutAlign=\"center center\">\n      <mat-form-field appearance=\"outline\"  class=\" mr-sm-20\" fxLayout=\"column\" fxFlex.gt-xs=\"35\"\n        fxFlex=\"100\">\n        <mat-label #moduleName translate>Module Name</mat-label>\n        <input required matInput autocomplete=\"off\" (keyup)=\"preventSpace($event,'moduleForm','name')\" (blur)=\"trimTextBoxSpaces('moduleForm','name')\" formControlName=\"name\">\n        <mat-error>\n          <app-validation [labelName]=\"moduleName.innerText\" [validationControl]=\"moduleForm.controls.name\"\n            [doValidate]=\"isFormSubmitted\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n      <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\"  (click)=\"onCancel()\">Cancel</button>\n      <button *ngIf=\"showCreateBtn\" mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\">Create</button>\n      <button *ngIf=\"!showCreateBtn\" mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\">Update</button>\n    </div>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/manage-role-right/module/module.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/manage-role-right/module/module.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlLXJvbGUtcmlnaHQvbW9kdWxlL21vZHVsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/manage-role-right/module/module.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/manage-role-right/module/module.component.ts ***!
  \**********************************************************************/
/*! exports provided: ModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleComponent", function() { return ModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _service_module_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/module.service */ "./src/app/modules/manage-role-right/service/module.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");










var ModuleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ModuleComponent, _super);
    function ModuleComponent(moduleService, dialogRef, commonService) {
        var _this = _super.call(this) || this;
        _this.moduleService = moduleService;
        _this.dialogRef = dialogRef;
        _this.commonService = commonService;
        _this.currentComponent = 'ModuleComponent';
        _this.isFormSubmitted = true;
        _this.showCreateBtn = true;
        _this.initializeFilterView();
        _this.initializeTableSettings();
        _this.setColumnHeaders();
        _this.initializeForm();
        return _this;
    }
    ModuleComponent.prototype.ngOnInit = function () {
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.gridView = modelTableComponent;
        }
        this.getModuleGrid();
    };
    ModuleComponent.prototype.initializeForm = function () {
        this.moduleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(15)]),
        });
    };
    ModuleComponent.prototype.setColumnHeaders = function () {
        this.columns = [
            { field: 'name', header: 'Module Name', sort: true },
            { field: 'actions', header: 'Actions ', sort: false }
        ];
    };
    ModuleComponent.prototype.initializeTableSettings = function () {
        this.tableSettings = {
            rows: [],
            columns: this.columns,
            tablename: 'Modules',
            componentName: this.currentComponent,
            model: this.gridView
        };
    };
    ModuleComponent.prototype.initializeFilterView = function () {
        this.gridView = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].PAGESIZE,
        };
    };
    ModuleComponent.prototype.getModuleGrid = function () {
        var _this = this;
        this.moduleService.modulesGrid(this.gridView.sortOrder, this.gridView.sortBy, this.gridView.pageNumber, this.gridView.pageSize).subscribe(function (res) {
            if (res) {
                _this.bindResult(res);
            }
        });
    };
    ModuleComponent.prototype.bindResult = function (data) {
        if (!data.pagedModuleViewModels) {
            this.rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
        }
        else {
            this.rows = data.pagedModuleViewModels.list;
            this.totalRowsCount = data.pagedModuleViewModels.totalItems;
            this.pageCnt = data.pagedModuleViewModels.totalPages;
            this.rows.forEach(function (e) {
                e.operations = [
                    {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].EDIT_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].EDIT,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].EDIT
                    }
                ];
            });
        }
        if (data.pagedModuleViewModels) {
            this.gridView.pageNumber = data.pagedModuleViewModels.pageNumber;
        }
        this.tableSettings = {
            model: this.gridView,
            rows: this.rows,
            columns: this.columns,
            totalRowsCount: this.totalRowsCount,
            pageCnt: this.pageCnt,
            tablename: 'Modules',
            componentName: this.currentComponent,
            filtersList: [],
            isPaginationRequired: true,
            headerOperations: {
                addingForm: {
                    required: true,
                    btnName: 'Add Module'
                }
            }
        };
    };
    ModuleComponent.prototype.tableData = function (_event) {
        this.gridView = _event;
        this.getModuleGrid();
    };
    ModuleComponent.prototype.openForm = function () {
        this.initializeForm();
        this.closeForm = false;
    };
    ModuleComponent.prototype.onCancel = function () {
        this.closeForm = true;
        this.showCreateBtn = true;
        this.myModuleForm.resetForm();
        this.initializeForm();
    };
    ModuleComponent.prototype.createOrUpdateClass = function (form) {
        var _this = this;
        if (!form.id && this.moduleForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].VALID) {
            this.moduleService.createModule(form)
                .subscribe(function (res) {
                if (res.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_6__["OK"]) {
                    _this.dialogMethod(res.messages.ResultMessage, true, app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].OK);
                    _this.getModuleGrid();
                    _this.onCancel();
                }
                else {
                    _this.dialogMethod(res.messages.ResultMessage, true, app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].OK);
                    _this.closeForm = false;
                }
            });
        }
        else if (this.moduleForm.valid) {
            this.moduleService.updateModule(form)
                .subscribe(function (res) {
                if (res.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_6__["OK"]) {
                    _this.dialogMethod(res.messages.ResultMessage, true, app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].OK);
                    _this.getModuleGrid();
                    _this.onCancel();
                }
                else {
                    _this.dialogMethod(res.messages.ResultMessage, true, app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].OK);
                    _this.closeForm = false;
                }
            });
        }
    };
    ModuleComponent.prototype.actions = function (operationData) {
        if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].EDIT.toLowerCase()) {
            this.showCreateBtn = false;
            this.closeForm = false;
            this.moduleForm.patchValue(operationData.clickedRow);
        }
    };
    ModuleComponent.prototype.dialogMethod = function (dialogData, disableClose, button1Text, button2Text) {
        return this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CustomDialogComponent"], {
            disableClose: disableClose,
            data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('module'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModuleComponent.prototype, "myModuleForm", void 0);
    ModuleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-module',
            template: __webpack_require__(/*! ./module.component.html */ "./src/app/modules/manage-role-right/module/module.component.html"),
            providers: [_service_module_service__WEBPACK_IMPORTED_MODULE_3__["ModuleService"]],
            styles: [__webpack_require__(/*! ./module.component.scss */ "./src/app/modules/manage-role-right/module/module.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_module_service__WEBPACK_IMPORTED_MODULE_3__["ModuleService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], app_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
    ], ModuleComponent);
    return ModuleComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_9__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/manage-role-right/page-information/page-information.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/manage-role-right/page-information/page-information.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tableSettings\" [closeRowForm]=closeForm [templateRef]=\"addPageInfo\"\n  (getTableData)='tableData($event)' (openAddForm)='openForm()' (rowBasedAction)='actions($event)'>\n</app-table>\n\n<ng-template #addPageInfo>\n  <form [formGroup]=\"pageInfoForm\" (ngSubmit)=\"savePageInfoForm(pageInfoForm.value)\" #pageInfo=\"ngForm\">\n    \n    <div fxFlexFill fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"center center\" class=\"pt-24\">\n      <mat-form-field appearance=\"outline\" class=\" mr-sm-20\" fxLayout=\"column\" fxFlex.gt-xs=\"35\" fxFlex=\"100\">\n        <mat-label translate #key>Key</mat-label>\n        <input matInput formControlName=\"key\" autocomplete=\"off\" (keyup)=\"preventSpace($event,'pageInfoForm','key')\" (blur)=\"trimTextBoxSpaces('pageInfoForm','key')\" required>\n        <mat-error>\n          <app-validation [labelName]=\"key.innerText\" [validationControl]=\"pageInfoForm.controls.key\"\n            [doValidate]=\"isFormSubmitted\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\" mr-sm-20\" fxLayout=\"column\" fxFlex.gt-xs=\"35\" fxFlex=\"100\">\n        <mat-label translate #culture>Calture/Language</mat-label>\n        <mat-select required formControlName=\"culture\" >\n          <mat-option *ngFor=\"let language of languages\" [value]=\"language.value\" >\n            {{language.label}}\n          </mat-option>\n        </mat-select>\n        <mat-error>\n          <app-validation [labelName]=\"culture.innerText\" [validationControl]=\"pageInfoForm.controls.culture\"\n            [doValidate]=\"isFormSubmitted\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n    </div>\n\n    <div fxFlexFill fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"center center\">\n      \n      \n      <ckeditor required formControlName=\"value\"\n      [(ngModel)]=\"value\"\n      [readonly]=\"false\"\n      (change)=\"onChange($event)\"\n      (editorChange)=\"onEditorChange($event)\"\n      debounce=\"500\">\n  </ckeditor>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-32 pt-24\">\n      <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"reset\" (click)=\"onCancel()\">Cancel</button>\n      <button *ngIf=\"showCreateBtn\" mat-raised-button type=\"submit\" class=\"text-uppercase\"\n        color=\"accent\">Create</button>\n      <button *ngIf=\"!showCreateBtn\" mat-raised-button type=\"submit\" class=\"text-uppercase\"\n        color=\"accent\">Update</button>\n    </div>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/manage-role-right/page-information/page-information.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/manage-role-right/page-information/page-information.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlLXJvbGUtcmlnaHQvcGFnZS1pbmZvcm1hdGlvbi9wYWdlLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/manage-role-right/page-information/page-information.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/manage-role-right/page-information/page-information.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PageInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageInformationComponent", function() { return PageInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _service_localization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/localization.service */ "./src/app/modules/manage-role-right/service/localization.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var PageInformationComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PageInformationComponent, _super);
    function PageInformationComponent(dialogRef, commonService, localizationService, snackBar) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.commonService = commonService;
        _this.localizationService = localizationService;
        _this.snackBar = snackBar;
        _this.currentComponent = 'PageInformationComponent';
        _this.isFormSubmitted = true;
        _this.showCreateBtn = true;
        _this.languages = [];
        _this.initializeFilterView();
        _this.initializeTableSettings();
        _this.setColumnHeaders();
        _this.initializeForm();
        return _this;
    }
    PageInformationComponent.prototype.ngOnInit = function () {
        this.loadlanguages();
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.gridView = modelTableComponent;
        }
        this.getTableData();
    };
    PageInformationComponent.prototype.setColumnHeaders = function () {
        this.columns = [
            { field: 'key', header: 'Key', sort: true },
            { field: 'value', header: 'Value', sort: true, innerHTML: true },
            { field: 'culture', header: 'Culture/Language', sort: true },
            { field: 'actions', header: 'Actions ', sort: false }
        ];
    };
    PageInformationComponent.prototype.initializeFilterView = function () {
        this.gridView = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].PAGESIZE,
        };
    };
    PageInformationComponent.prototype.initializeTableSettings = function () {
        this.tableSettings = {
            rows: [],
            columns: this.columns,
            tablename: 'Page Information',
            componentName: this.currentComponent,
            model: this.gridView
        };
    };
    PageInformationComponent.prototype.initializeForm = function () {
        this.pageInfoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            key: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(45)]),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(4500)]),
            culture: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3)]),
        });
    };
    PageInformationComponent.prototype.tableData = function (_event) {
        this.gridView = _event;
        this.getTableData();
    };
    PageInformationComponent.prototype.getTableData = function () {
        var _this = this;
        this.localizationService.FetchPageInformationList(this.gridView.key, this.gridView.value, this.gridView.culture, this.gridView.sortBy, this.gridView.sortOrder, this.gridView.pageNumber, this.gridView.pageSize).subscribe(function (res) {
            if (res) {
                _this.bindResult(res);
            }
        });
    };
    PageInformationComponent.prototype.bindResult = function (data) {
        if (!data.pageInformationList) {
            this.rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
        }
        else {
            this.rows = data.pageInformationList.list;
            this.totalRowsCount = data.pageInformationList.totalItems;
            this.pageCnt = data.pageInformationList.totalPages;
            this.rows.forEach(function (e) {
                e.operations = [
                    {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].EDIT_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].EDIT,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].EDIT
                    },
                    {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].DELETE_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].DELETE,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].DELETE
                    },
                    {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].VIEW_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].DETAILS_ICON,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].VIEW
                    }
                ];
            });
        }
        if (data.pageInformationList) {
            this.gridView.pageNumber = data.pageInformationList.pageNumber;
        }
        this.tableSettings = {
            model: this.gridView,
            rows: this.rows,
            columns: this.columns,
            totalRowsCount: this.totalRowsCount,
            pageCnt: this.pageCnt,
            tablename: 'Page Information',
            componentName: this.currentComponent,
            filtersList: data.filters,
            rowGroupingColumns: ['key'],
            isPaginationRequired: true,
            headerOperations: {
                infoButton: {
                    required: true,
                    text: 'Page Information'
                },
                addingForm: {
                    required: true,
                    btnName: 'Add'
                }
            }
        };
    };
    PageInformationComponent.prototype.openForm = function () {
        this.initializeForm();
        // this.isFormSubmitted = false;
        this.closeForm = false;
    };
    PageInformationComponent.prototype.onCancel = function () {
        this.closeForm = true;
        // this.isFormSubmitted = false;
        this.showCreateBtn = true;
        this._pageInformationForm.resetForm();
        this._pageInformationForm.submitted = false;
        this.pageInfoForm.reset();
        this.initializeForm();
    };
    PageInformationComponent.prototype.actions = function (operationData) {
        var _this = this;
        if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].EDIT.toLowerCase()) {
            this.isFormSubmitted = false;
            this.showCreateBtn = false;
            this.closeForm = false;
            this.pageInfoForm.patchValue(operationData.clickedRow);
        }
        else if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].DELETE.toLocaleLowerCase()) {
            var dialogValue = this.commonService.dialog(app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].WARNING_ON_SINGLE_DELETE, true, app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].NO, app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].YES);
            dialogValue.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].YES) {
                    var infoId = operationData.clickedRow.id;
                    _this.localizationService.deletePageInformation(infoId).subscribe(function (response) {
                        _this.commonService.dialog(response.messages.ResultMessage, true, app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].OK);
                        _this.getTableData();
                    }, function (error) {
                        _this.errorResponse(error);
                    });
                }
            });
        }
        else if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].VIEW_OPERATION.toLocaleLowerCase()) {
            this.getPageInformation(operationData.clickedRow.id);
        }
    };
    PageInformationComponent.prototype.dialogMethod = function (dialogData, disableClose, button1Text, button2Text) {
        return this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CustomDialogComponent"], {
            disableClose: disableClose,
            data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
        });
    };
    PageInformationComponent.prototype.getPageInformation = function (event) {
        var _this = this;
        this.localizationService.getPageInformationById(event).subscribe(function (res) {
            _this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CustomDialogComponent"], {
                width: '400px',
                data: {
                    title: res.pageInformationViewModel.key,
                    tableInformation: _this.commonService.getTranslation(res.pageInformationViewModel.value), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].Ok
                },
            });
        });
    };
    PageInformationComponent.prototype.savePageInfoForm = function (form) {
        var _this = this;
        this.isFormSubmitted = true;
        if (!form.id && this.pageInfoForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].VALID) {
            this.localizationService.createPageinformation(form)
                .subscribe(function (res) {
                if (res.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_3__["OK"]) {
                    _this.dialogMethod(res.messages.ResultMessage, true, app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].OK);
                    _this.getTableData();
                    _this.onCancel();
                }
                else {
                    _this.dialogMethod(res.messages.ResultMessage, true, app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].OK);
                    _this.closeForm = false;
                }
            });
        }
        else if (this.pageInfoForm.valid) {
            this.localizationService.updatePageInformation(form)
                .subscribe(function (res) {
                if (res.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_3__["OK"]) {
                    _this.dialogMethod(res.messages.ResultMessage, true, app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].OK);
                    _this.getTableData();
                    _this.onCancel();
                }
                else {
                    _this.dialogMethod(res.messages.ResultMessage, true, app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].OK);
                    _this.closeForm = false;
                }
            });
        }
    };
    PageInformationComponent.prototype.onChange = function (event) {
        this.ckeditorContent = event;
    };
    PageInformationComponent.prototype.onEditorChange = function (event) {
        this.ckeditorContent = event;
    };
    PageInformationComponent.prototype.loadlanguages = function () {
        var _this = this;
        // read list of launguages from json file
        this.commonService.getLaunguage().subscribe(function (res) {
            if (res !== undefined && res.languages) {
                res.languages.forEach(function (element) {
                    _this.languages.push({
                        label: element.title,
                        value: element.id
                    });
                });
            }
        });
    };
    PageInformationComponent.prototype.getHelpText = function (event) {
        var helptext;
        this.selectedLanguage = localStorage.getItem('_l');
        if (this.selectedLanguage === null || this.selectedLanguage === undefined) {
            this.selectedLanguage = 'en';
        }
        this.localizationService.getPageInformationByKeyandCulture('event', this.selectedLanguage).subscribe(function (res) {
            if (res.pageInformationViewModel !== null) {
                helptext = res.pageInformationViewModel.value;
            }
            else {
                helptext = res.pageInformationViewModel;
            }
        });
        return helptext;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pageInfo'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PageInformationComponent.prototype, "_pageInformationForm", void 0);
    PageInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-information',
            template: __webpack_require__(/*! ./page-information.component.html */ "./src/app/modules/manage-role-right/page-information/page-information.component.html"),
            providers: [_service_localization_service__WEBPACK_IMPORTED_MODULE_6__["LocalizationService"]],
            styles: [__webpack_require__(/*! ./page-information.component.scss */ "./src/app/modules/manage-role-right/page-information/page-information.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], _service_localization_service__WEBPACK_IMPORTED_MODULE_6__["LocalizationService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], PageInformationComponent);
    return PageInformationComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/manage-role-right/right/right.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/manage-role-right/right/right.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tableSettings\" [closeRowForm]=closeForm [templateRef]=\"newRight\"\n  (getTableData)='tableData($event)' (openAddForm)='openForm()' (rowBasedAction)='actions($event)'>\n</app-table>\n\n\n<ng-template #newRight>\n  <form [formGroup]=\"rightForm\" (ngSubmit)=\"createOrUpdateRight(rightForm.value)\" #right=\"ngForm\">\n\n    <div fxFlexFill fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24\" fxLayoutAlign=\"center center\">\n      <mat-form-field appearance=\"outline\" fxFlex.gt-sm=\"35\" fxLayout=\"column\" fxFlex=\"100\" class=\"pr-sm-20\"\n        fxLayout=\"column\">\n        <mat-label translate #module>Module</mat-label>\n        <mat-select required placeholder=\"Module\" formControlName=\"moduleId\">\n          <mat-option *ngFor=\"let module of modules\" [value]=\"module.value\">\n            {{ module.label }}</mat-option>\n        </mat-select>\n        <mat-error>\n          <app-validation [labelName]=\"module.innerText\" [validationControl]=\"rightForm.controls.moduleId\"\n            [doValidate]=\"isFormSubmitted\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" fxFlex.gt-sm=\"35\" fxLayout=\"column\" fxFlex=\"100\" class=\"pr-sm-20\"\n        fxLayout=\"column\">\n        <mat-label translate #role>Role</mat-label>\n        <mat-select required placeholder=\"Role\" formControlName=\"roleId\">\n          <mat-option *ngFor=\"let role of roles\" [value]=\"role.value\">\n            {{ role.label }}</mat-option>\n        </mat-select>\n        <mat-error>\n          <app-validation [labelName]=\"role.innerText\" [validationControl]=\"rightForm.controls.roleId\"\n            [doValidate]=\"isFormSubmitted\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n    </div>\n    <div fxFlexFill fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"center center\">\n      <mat-form-field appearance=\"outline\" fxFlex.gt-sm=\"35\" fxLayout=\"column\" fxFlex=\"100\" class=\"pr-sm-20\"\n        fxLayout=\"column\">\n        <mat-label translate #parentRight>Parent Right</mat-label>\n        <mat-select required placeholder=\"Parent Right\" formControlName=\"parentRightId\">\n          <mat-option *ngFor=\"let parentRight of parentRights\" [value]=\"parentRight.value\">\n            {{ parentRight.label }}</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex.gt-sm=\"35\" fxFlex=\"100\">\n        <mat-label translate #menuName>Menu Name</mat-label>\n        <input required matInput formControlName=\"name\" autocomplete=\"off\" (keyup)=\"preventSpace($event,'rightForm','name')\" (blur)=\"trimTextBoxSpaces('rightForm','name')\">\n        <mat-error>\n          <app-validation [labelName]=\"menuName.innerText\" [validationControl]=\"rightForm.controls.name\"\n            [doValidate]=\"isFormSubmitted\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n    </div>\n\n    <div fxFlexFill fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"center center\">\n      <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex.gt-sm=\"35\" fxFlex=\"100\">\n        <mat-label translate #url>Url</mat-label>\n        <input matInput formControlName=\"url\" autocomplete=\"off\" (keyup)=\"preventSpace($event,'rightForm','url')\" (blur)=\"trimTextBoxSpaces('rightForm','url')\">\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"pr-sm-20\" fxLayout=\"column\" fxFlex.gt-sm=\"35\" fxFlex=\"100\">\n        <mat-label translate #displayOrder>Display Order</mat-label>\n        <input required matInput formControlName=\"displayOrder\" autocomplete=\"off\" (keyup)=\"preventSpace($event,'rightForm','displayOrder')\" (blur)=\"trimTextBoxSpaces('rightForm','displayOrder')\">\n        <mat-error>\n          <app-validation [labelName]=\"displayOrder.innerText\" [validationControl]=\"rightForm.controls.displayOrder\"\n            [doValidate]=\"isFormSubmitted\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n    </div>\n\n    <div fxFlexFill fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"center center\">\n      <mat-form-field appearance=\"outline\" fxFlex.gt-sm=\"35\" fxLayout=\"column\" fxFlex=\"100\" class=\"pr-sm-20\"\n        fxLayout=\"column\">\n        <mat-label translate #isMenu>Is Menu</mat-label>\n        <mat-select placeholder=\"IsMenu\" formControlName=\"isMenu\">\n          <mat-option *ngFor=\"let isMenu of isMenus\" [value]=\"isMenu.value\">\n            {{ isMenu.label }}</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\" pr-sm-20\" fxLayout=\"column\" fxFlex.gt-sm=\"35\" fxFlex=\"100\">\n        <mat-label translate #icon>Icon</mat-label>\n        <input matInput formControlName=\"icon\" autocomplete=\"off\" (keyup)=\"preventSpace($event,'rightForm','icon')\" (blur)=\"trimTextBoxSpaces('rightForm','icon')\">\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n      <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\" (click)=\"onCancel()\">Cancel</button>\n      <button *ngIf=\"showCreateBtn\" mat-raised-button type=\"submit\" class=\"text-uppercase\"\n        color=\"accent\">Create</button>\n      <button *ngIf=\"!showCreateBtn\" mat-raised-button type=\"submit\" class=\"text-uppercase\"\n        color=\"accent\">Update</button>\n    </div>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/manage-role-right/right/right.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/manage-role-right/right/right.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlLXJvbGUtcmlnaHQvcmlnaHQvcmlnaHQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/manage-role-right/right/right.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/manage-role-right/right/right.component.ts ***!
  \********************************************************************/
/*! exports provided: RightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightComponent", function() { return RightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _service_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/api */ "./src/app/modules/manage-role-right/service/api.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_9__);










var RightComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RightComponent, _super);
    function RightComponent(rightService, dialogRef, commonService, roleService, moduleService, snackBar) {
        var _this = _super.call(this) || this;
        _this.rightService = rightService;
        _this.dialogRef = dialogRef;
        _this.commonService = commonService;
        _this.roleService = roleService;
        _this.moduleService = moduleService;
        _this.snackBar = snackBar;
        _this.currentComponent = 'RightComponent';
        _this.isFormSubmitted = true;
        _this.showCreateBtn = true;
        _this.modules = [];
        _this.roles = [];
        _this.parentRights = [];
        _this.isMenus = [];
        return _this;
    }
    RightComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeFilterView();
        this.setColumnHeaders();
        this.initializeForm();
        this.initializeTableSettings();
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.gridView = modelTableComponent;
        }
        this.roleService.roles().subscribe(function (data) {
            data.roleView.forEach(function (element) {
                return _this.roles.push({ label: element.roleName, value: element.id });
            });
        });
        this.moduleService.modules().subscribe(function (data) {
            data.forEach(function (element) {
                return _this.modules.push({ label: element.name, value: element.id });
            });
        });
        this.getRights();
        this.isMenus = [{ label: 'Yes', value: 1 }, { label: 'No', value: 0 }];
        this.getModuleGrid();
    };
    RightComponent.prototype.getRights = function () {
        var _this = this;
        this.rightService.rights().subscribe(function (data) {
            data.forEach(function (element) {
                return _this.parentRights.push({ label: element.name, value: element.id });
            });
        });
    };
    RightComponent.prototype.initializeForm = function () {
        this.rightForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            moduleId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            roleId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            isMenu: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            displayOrder: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["Pattern"].NUMBER_PATTERN)]),
            parentRightId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            icon: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(30)]),
        });
    };
    RightComponent.prototype.setColumnHeaders = function () {
        this.columns = [
            { field: 'name', header: 'Right Name', sort: true },
            { field: 'parentRightName', header: 'Parent Right Name', sort: true },
            { field: 'moduleName', header: 'Module Name', sort: true },
            { field: 'roleName', header: 'Role Name', sort: true },
            { field: 'url', header: 'Url', sort: true },
            { field: 'isMenu', header: 'IsMenu', sort: true },
            { field: 'displayOrder', header: 'Display Order', sort: true },
            { field: 'icon', header: 'Icon', sort: true },
            { field: 'actions', header: 'Actions ', sort: false }
        ];
    };
    RightComponent.prototype.initializeTableSettings = function () {
        this.tableSettings = {
            rows: [],
            columns: this.columns,
            tablename: 'Rights',
            componentName: this.currentComponent,
            model: this.gridView
        };
    };
    RightComponent.prototype.initializeFilterView = function () {
        this.gridView = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].PAGESIZE,
        };
    };
    RightComponent.prototype.getModuleGrid = function () {
        var _this = this;
        this.rightService.rightGrid(this.gridView.sortOrder, this.gridView.sortBy, this.gridView.pageNumber, this.gridView.pageSize).subscribe(function (res) {
            if (res) {
                _this.bindResult(res);
            }
        });
    };
    RightComponent.prototype.bindResult = function (data) {
        var _this = this;
        if (!data.pagedRightViewModels) {
            this.rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
        }
        else {
            this.rows = data.pagedRightViewModels.list;
            this.totalRowsCount = data.pagedRightViewModels.totalItems;
            this.pageCnt = data.pagedRightViewModels.totalPages;
            this.rows.forEach(function (e) {
                if (e.isMenu === 1) {
                    e.isMenu = _this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].Yes);
                }
                else if (e.isMenu === 0) {
                    e.isMenu = _this.commonService.getTranslation(app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].No);
                }
                e.operations = [
                    {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].EDIT_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].EDIT,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].EDIT
                    }
                ];
            });
        }
        if (data.pagedRightViewModels) {
            this.gridView.pageNumber = data.pagedRightViewModels.pageNumber;
        }
        this.tableSettings = {
            model: this.gridView,
            rows: this.rows,
            columns: this.columns,
            totalRowsCount: this.totalRowsCount,
            pageCnt: this.pageCnt,
            tablename: 'Rights',
            componentName: this.currentComponent,
            isPaginationRequired: true,
            filtersList: [],
            headerOperations: {
                infoButton: {
                    required: true,
                    text: 'Page Information'
                },
                addingForm: {
                    required: true,
                    btnName: 'Add'
                }
            }
        };
    };
    RightComponent.prototype.tableData = function (_event) {
        this.gridView = _event;
        this.getModuleGrid();
    };
    RightComponent.prototype.openForm = function () {
        this.initializeForm();
        this.closeForm = false;
    };
    RightComponent.prototype.onCancel = function () {
        this.closeForm = true;
        this.showCreateBtn = true;
        this.myRightForm.resetForm();
        this.initializeForm();
    };
    RightComponent.prototype.createOrUpdateRight = function (form) {
        var _this = this;
        if (!form.id && this.rightForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].VALID) {
            this.rightService.createMenuRight(form)
                .subscribe(function (res) {
                if (res.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_9__["OK"]) {
                    _this.dialogMethod(res.messages.ResultMessage, true, app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].OK);
                    _this.getModuleGrid();
                    _this.getRights();
                    _this.onCancel();
                }
                else {
                    _this.dialogMethod(res.messages.ResultMessage, true, app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].OK);
                    _this.closeForm = false;
                }
            });
        }
        else if (this.rightForm.valid) {
            this.rightService.updateRight(form)
                .subscribe(function (res) {
                if (res.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_9__["OK"]) {
                    _this.openSnackBar(res.messages.ResultMessage);
                    _this.getModuleGrid();
                    _this.getRights();
                    _this.onCancel();
                }
                else {
                    _this.openSnackBar(res.messages.ResultMessage, true);
                    _this.closeForm = false;
                }
            });
        }
    };
    RightComponent.prototype.actions = function (operationData) {
        if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].EDIT.toLowerCase()) {
            if (operationData.clickedRow.isMenu === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].YES) {
                operationData.clickedRow.isMenu = 1;
            }
            else if (operationData.clickedRow.isMenu === app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].NO) {
                operationData.clickedRow.isMenu = 0;
            }
            this.isFormSubmitted = false;
            this.showCreateBtn = false;
            this.closeForm = false;
            this.rightForm.patchValue(operationData.clickedRow);
        }
    };
    RightComponent.prototype.dialogMethod = function (dialogData, disableClose, button1Text, button2Text) {
        return this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_3__["CustomDialogComponent"], {
            disableClose: disableClose,
            data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('right'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RightComponent.prototype, "myRightForm", void 0);
    RightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-right',
            template: __webpack_require__(/*! ./right.component.html */ "./src/app/modules/manage-role-right/right/right.component.html"),
            providers: [_service_api__WEBPACK_IMPORTED_MODULE_5__["RightService"], _service_api__WEBPACK_IMPORTED_MODULE_5__["RoleService"], _service_api__WEBPACK_IMPORTED_MODULE_5__["ModuleService"]],
            styles: [__webpack_require__(/*! ./right.component.scss */ "./src/app/modules/manage-role-right/right/right.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api__WEBPACK_IMPORTED_MODULE_5__["RightService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], _service_api__WEBPACK_IMPORTED_MODULE_5__["RoleService"], _service_api__WEBPACK_IMPORTED_MODULE_5__["ModuleService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], RightComponent);
    return RightComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/manage-role-right/role/role.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/manage-role-right/role/role.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table  [settings]=\"tableSettings\" [closeRowForm]=closeForm \n[templateRef]=\"newRole\" (getTableData)='tableData($event)'\n(openAddForm)='openForm()' (rowBasedAction)='actions($event)'>\n</app-table>\n\n<ng-template #newRole>\n  <form [formGroup]=\"roleForm\" (ngSubmit)=\"createOrUpdateClass(roleForm.value)\" #role=\"ngForm\">\n\n    <div fxFlexFill fxLayout=\"column\" fxLayout.gt-xs=\"row\" class=\"pt-24\" fxLayoutAlign=\"center center\">\n      <mat-form-field appearance=\"outline\"  class=\" mr-sm-20\" fxLayout=\"column\" fxFlex.gt-xs=\"35\"\n        fxFlex=\"100\">\n        <mat-label #roleName translate>Role Name</mat-label>\n        <input required matInput autocomplete=\"off\" (keyup)=\"preventSpace($event,'roleForm','roleName')\" (blur)=\"trimTextBoxSpaces('roleForm','roleName')\" formControlName=\"roleName\">\n        <mat-error>\n          <app-validation [labelName]=\"roleName.innerText\" [validationControl]=\"roleForm.controls.roleName\"\n            [doValidate]=\"isFormSubmitted\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n      <button class=\"mr-12 text-uppercase\" mat-raised-button type=\"button\"  (click)=\"onCancel()\">Cancel</button>\n      <button *ngIf=\"showCreateBtn\" mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\">Create</button>\n      <button *ngIf=\"!showCreateBtn\" mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\">Update</button>\n    </div>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/manage-role-right/role/role.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/manage-role-right/role/role.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlLXJvbGUtcmlnaHQvcm9sZS9yb2xlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/manage-role-right/role/role.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/manage-role-right/role/role.component.ts ***!
  \******************************************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api */ "./src/app/modules/manage-role-right/service/api.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_9__);










var RoleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RoleComponent, _super);
    function RoleComponent(roleService, dialogRef, commonService, commonComponent, snackBar) {
        var _this = _super.call(this) || this;
        _this.roleService = roleService;
        _this.dialogRef = dialogRef;
        _this.commonService = commonService;
        _this.commonComponent = commonComponent;
        _this.snackBar = snackBar;
        _this.currentComponent = 'RoleComponent';
        _this.isFormSubmitted = true;
        _this.showCreateBtn = true;
        _this.initializeFilterView();
        _this.initializeTableSettings();
        _this.setColumnHeaders();
        _this.initializeForm();
        return _this;
    }
    RoleComponent.prototype.ngOnInit = function () {
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.gridView = modelTableComponent;
        }
        this.getRoleGrid();
    };
    RoleComponent.prototype.initializeForm = function () {
        this.roleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            roleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15)]),
        });
    };
    RoleComponent.prototype.setColumnHeaders = function () {
        this.columns = [
            { field: 'roleName', header: 'Role Name', sort: true },
            { field: 'actions', header: 'Actions ', sort: false }
        ];
    };
    RoleComponent.prototype.initializeTableSettings = function () {
        this.tableSettings = {
            rows: [],
            columns: this.columns,
            tablename: 'Roles',
            componentName: this.currentComponent,
            model: this.gridView
        };
    };
    RoleComponent.prototype.initializeFilterView = function () {
        this.gridView = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].PAGESIZE,
        };
    };
    RoleComponent.prototype.getRoleGrid = function () {
        var _this = this;
        this.roleService.roleGrid(this.gridView.sortOrder, this.gridView.sortBy, this.gridView.pageNumber, this.gridView.pageSize).subscribe(function (res) {
            if (res) {
                _this.bindResult(res);
            }
        });
    };
    RoleComponent.prototype.bindResult = function (data) {
        if (!data.pagedRoleViewModels) {
            this.rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
        }
        else {
            this.rows = data.pagedRoleViewModels.list;
            this.totalRowsCount = data.pagedRoleViewModels.totalItems;
            this.pageCnt = data.pagedRoleViewModels.totalPages;
            this.rows.forEach(function (e) {
                e.operations = [
                    {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].EDIT_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].EDIT,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].EDIT
                    }
                ];
            });
        }
        if (data.pagedRoleViewModels) {
            this.gridView.pageNumber = data.pagedRoleViewModels.pageNumber;
        }
        this.tableSettings = {
            model: this.gridView,
            rows: this.rows,
            columns: this.columns,
            totalRowsCount: this.totalRowsCount,
            pageCnt: this.pageCnt,
            tablename: 'Roles',
            componentName: this.currentComponent,
            filtersList: [],
            isPaginationRequired: true,
            headerOperations: {
                addingForm: {
                    required: true,
                    btnName: 'Add Role'
                }
            }
        };
    };
    RoleComponent.prototype.tableData = function (_event) {
        this.gridView = _event;
        this.getRoleGrid();
    };
    RoleComponent.prototype.openForm = function () {
        this.initializeForm();
        this.closeForm = false;
    };
    RoleComponent.prototype.onCancel = function () {
        this.closeForm = true;
        this.showCreateBtn = true;
        this.myRoleForm.resetForm();
        this.initializeForm();
    };
    RoleComponent.prototype.createOrUpdateClass = function (form) {
        var _this = this;
        if (!form.id && this.roleForm.status === app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].VALID) {
            this.roleService.createRole(form)
                .subscribe(function (res) {
                if (res.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_9__["OK"]) {
                    _this.openSnackBar(res.messages.ResultMessage);
                    _this.getRoleGrid();
                    _this.onCancel();
                }
                else {
                    _this.openSnackBar(res.messages.ResultMessage, true);
                    _this.closeForm = false;
                }
            });
        }
        else if (this.roleForm.valid) {
            this.roleService.updateRole(form)
                .subscribe(function (res) {
                if (res.statusCode === http_status_codes__WEBPACK_IMPORTED_MODULE_9__["OK"]) {
                    _this.openSnackBar(res.messages.ResultMessage);
                    _this.getRoleGrid();
                    _this.onCancel();
                }
                else {
                    _this.openSnackBar(res.messages.ResultMessage, true);
                    _this.closeForm = false;
                }
            });
        }
    };
    RoleComponent.prototype.actions = function (operationData) {
        if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].EDIT.toLowerCase()) {
            this.showCreateBtn = false;
            this.closeForm = false;
            this.roleForm.patchValue(operationData.clickedRow);
        }
    };
    RoleComponent.prototype.dialogMethod = function (dialogData, disableClose, button1Text, button2Text) {
        return this.dialogRef.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CustomDialogComponent"], {
            disableClose: disableClose,
            data: { text: this.commonService.getTranslation(dialogData), action: true, btn1Text: button1Text, btn2Text: button2Text },
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('role'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoleComponent.prototype, "myRoleForm", void 0);
    RoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role',
            template: __webpack_require__(/*! ./role.component.html */ "./src/app/modules/manage-role-right/role/role.component.html"),
            providers: [_service_api__WEBPACK_IMPORTED_MODULE_2__["RoleService"]],
            styles: [__webpack_require__(/*! ./role.component.scss */ "./src/app/modules/manage-role-right/role/role.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api__WEBPACK_IMPORTED_MODULE_2__["RoleService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], app_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], RoleComponent);
    return RoleComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/manage-role-right/service/api.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/manage-role-right/service/api.ts ***!
  \**********************************************************/
/*! exports provided: LocalizationService, APIS, ModuleService, RightService, RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return APIS; });
/* harmony import */ var _module_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module.service */ "./src/app/modules/manage-role-right/service/module.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModuleService", function() { return _module_service__WEBPACK_IMPORTED_MODULE_0__["ModuleService"]; });

/* harmony import */ var _right_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./right.service */ "./src/app/modules/manage-role-right/service/right.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RightService", function() { return _right_service__WEBPACK_IMPORTED_MODULE_1__["RightService"]; });

/* harmony import */ var _role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role.service */ "./src/app/modules/manage-role-right/service/role.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return _role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"]; });

/* harmony import */ var _localization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localization.service */ "./src/app/modules/manage-role-right/service/localization.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalizationService", function() { return _localization_service__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"]; });









var APIS = [_module_service__WEBPACK_IMPORTED_MODULE_0__["ModuleService"], _right_service__WEBPACK_IMPORTED_MODULE_1__["RightService"], _role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"], _localization_service__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"]];


/***/ }),

/***/ "./src/app/modules/manage-role-right/service/module.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/manage-role-right/service/module.service.ts ***!
  \*********************************************************************/
/*! exports provided: ModuleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleService", function() { return ModuleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_service_base_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var app_service_base_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/**
 * UserManagement
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */








var ModuleService = /** @class */ (function () {
    function ModuleService(httpClient, basePath, configuration, commonComponent) {
        this.httpClient = httpClient;
        this.commonComponent = commonComponent;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["ModuleConfig"].UserManagment;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new app_service_base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    ModuleService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    ModuleService.prototype.createModule = function (nameViewModel, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/Module/create-module", nameViewModel, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ModuleService.prototype.modules = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/Module/get-all-modules", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ModuleService.prototype.modulesGrid = function (sortOrder, sortBy, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageNumber, 'PageNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageSize, 'PageSize', queryParameters);
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/Module/module-grid", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ModuleService.prototype.updateModule = function (model, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/Module/module", model, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ModuleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(app_service_base_variables__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, app_service_base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"], app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_7__["CommonComponent"]])
    ], ModuleService);
    return ModuleService;
}());



/***/ }),

/***/ "./src/app/modules/manage-role-right/service/right.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/manage-role-right/service/right.service.ts ***!
  \********************************************************************/
/*! exports provided: RightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightService", function() { return RightService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_service_base_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var app_service_base_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/**
 * UserManagement
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */








var RightService = /** @class */ (function () {
    function RightService(httpClient, basePath, configuration, commonComponent) {
        this.httpClient = httpClient;
        this.commonComponent = commonComponent;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["ModuleConfig"].UserManagment;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new app_service_base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    RightService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    RightService.prototype.allRights = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        return this.httpClient.get(this.basePath + "/Right/all-rights", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    RightService.prototype.createMenuRight = function (rightsView, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/Right/create-right", rightsView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    RightService.prototype.menus = function (userAccessId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(userAccessId, 'userAccessId', queryParameters);
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/Right/user-menus", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    RightService.prototype.rightGrid = function (sortOrder, sortBy, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageNumber, 'PageNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageSize, 'PageSize', queryParameters);
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        return this.httpClient.get(this.basePath + "/Right/right-grid", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    RightService.prototype.rights = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/Right/get-all-rights", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    RightService.prototype.updateRight = function (rightDetailsView, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/Right/right", rightDetailsView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    RightService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(app_service_base_variables__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, app_service_base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"], app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_7__["CommonComponent"]])
    ], RightService);
    return RightService;
}());



/***/ }),

/***/ "./src/app/modules/manage-role-right/service/role.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/manage-role-right/service/role.service.ts ***!
  \*******************************************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_service_base_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var app_service_base_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/**
 * UserManagement
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */








var RoleService = /** @class */ (function () {
    function RoleService(httpClient, basePath, configuration, commonComponent) {
        this.httpClient = httpClient;
        this.commonComponent = commonComponent;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["ModuleConfig"].UserManagment;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new app_service_base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    RoleService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    RoleService.prototype.createRole = function (roleViewModel, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/Role/create-role", roleViewModel, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    RoleService.prototype.roleGrid = function (sortOrder, sortBy, pageNumber, pageSize, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        queryParameters = this.commonComponent.setQueryParams(sortOrder, 'SortOrder', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(sortBy, 'SortBy', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageNumber, 'PageNumber', queryParameters);
        queryParameters = this.commonComponent.setQueryParams(pageSize, 'PageSize', queryParameters);
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/Role/role-grid", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    RoleService.prototype.roles = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', id);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/Role/get-all-roles", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    RoleService.prototype.updateRole = function (model, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/Role/role", model, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    RoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(app_service_base_variables__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, app_service_base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"], app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_7__["CommonComponent"]])
    ], RoleService);
    return RoleService;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-manage-role-right-manage-role-right-module.js.map