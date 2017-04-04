"use strict";
var router_1 = require('@angular/router');
var new_component_1 = require('./new.component');
var second_component_1 = require('./second.component');
var appRoutes = [
    {
        path: 'newCom',
        component: new_component_1.NewComponent
    },
    {
        path: 'SecondNewCom',
        component: second_component_1.SecondComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map