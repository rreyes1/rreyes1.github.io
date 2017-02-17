"use strict";
var router_1 = require("@angular/router");
var page_component_1 = require("./page/page.component");
var auth_guard_1 = require("./_guards/auth.guard");
exports.appRoutes = [
    { path: '', component: page_component_1.PageComponent },
    { path: 'page', component: page_component_1.PageComponent, canActivate: [auth_guard_1.AuthGuard] },
];
exports.routing = router_1.RouterModule.forRoot(exports.appRoutes);
//# sourceMappingURL=app.routing.js.map