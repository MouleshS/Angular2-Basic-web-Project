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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var selecteditem_service_1 = require('./selecteditem.service');
var router_1 = require('@angular/router');
var NewComponent = (function () {
    function NewComponent(http, myservice, router) {
        var _this = this;
        this.http = http;
        this.myservice = myservice;
        this.router = router;
        this.myservice = myservice;
        this.nameValue = "declaredName";
        this.url = "http://test-trykaro-vm.cloudapp.net/Trymeagain/rest/fragrance/";
        this.lists = ['abc', 'xyz', 'lol'];
        this.router = router;
        this.http.get(this.url).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.dataServer = data;
            _this.length = Object.keys(_this.dataServer).length;
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    }
    NewComponent.prototype.onSelect = function (data) {
        this.selectedItem = data;
        this.myservice.selectedItem = data;
        this.router.navigate(['/SecondNewCom']);
    };
    NewComponent = __decorate([
        core_1.Component({
            selector: 'newcomponent',
            templateUrl: "./app/mydoc.html",
            styleUrls: ["./app/mydoc.css"]
        }), 
        __metadata('design:paramtypes', [http_1.Http, selecteditem_service_1.SelectedItemService, router_1.Router])
    ], NewComponent);
    return NewComponent;
}());
exports.NewComponent = NewComponent;
//# sourceMappingURL=new.component.js.map