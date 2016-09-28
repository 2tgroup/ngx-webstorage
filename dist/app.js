"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var index_1 = require('./services/index');
__export(require('./decorators/index'));
__export(require('./services/index'));
__export(require('./helpers/keyStorage'));
var Ng2Webstorage = (function () {
    function Ng2Webstorage() {
    }
    Ng2Webstorage = __decorate([
        core_1.NgModule({
            declarations: [],
            providers: [index_1.SessionStorageService, index_1.LocalStorageService],
            imports: [platform_browser_1.BrowserModule]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2Webstorage);
    return Ng2Webstorage;
}());
exports.Ng2Webstorage = Ng2Webstorage;
//# sourceMappingURL=app.js.map