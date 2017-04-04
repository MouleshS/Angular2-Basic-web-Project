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
var core_1 = require('@angular/core');
var selecteditem_service_1 = require('./selecteditem.service');
var SecondComponent = (function () {
    function SecondComponent(mservice) {
        var _this = this;
        this.mservice = mservice;
        this.mservice = mservice;
        mservice.selectedItem$.subscribe(function (item) { _this.UiSelectedItem = item; }, function (err) { return console.error(err); }, function () { return console.log('clicked item done'); });
    }
    SecondComponent = __decorate([
        core_1.Component({
            selector: 'secondcomponent',
            template: "<h1> This is second new Component</h1>\n    <h1>{{UiSelectedItem | json}}</h1>\n   "
        }), 
        __metadata('design:paramtypes', [selecteditem_service_1.SelectedItemService])
    ], SecondComponent);
    return SecondComponent;
}());
exports.SecondComponent = SecondComponent;
//# sourceMappingURL=second.component.js.map