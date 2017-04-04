"use strict";
var ReplaySubject_1 = require('rxjs/ReplaySubject');
var SelectedItemService = (function () {
    function SelectedItemService() {
        this._selectedItem = new ReplaySubject_1.ReplaySubject(1); // buffer size 1
        this.selectedItem$ = this._selectedItem.asObservable();
    }
    Object.defineProperty(SelectedItemService.prototype, "selectedItem", {
        set: function (item) {
            this._selectedItem.next(item);
        },
        enumerable: true,
        configurable: true
    });
    return SelectedItemService;
}());
exports.SelectedItemService = SelectedItemService;
//# sourceMappingURL=selecteditem.service.js.map