"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var core_1 = require("@overnightjs/core");
var Users_1 = require("./controllers/Users");
var Auth_1 = require("./controllers/Auth");
require("./config/db");
var xnxServer = /** @class */ (function (_super) {
    __extends(xnxServer, _super);
    function xnxServer() {
        var _this = _super.call(this) || this;
        _this.app.use(bodyParser.json());
        _this.app.use(bodyParser.urlencoded({ extended: true }));
        var userController = new Users_1.UserController();
        var authController = new Auth_1.AuthController();
        _super.prototype.addControllers.call(_this, [userController, authController]);
        return _this;
    }
    xnxServer.prototype.start = function (port) {
        this.app.listen(port, function () {
            console.log("Run on port: " + port);
        });
    };
    return xnxServer;
}(core_1.Server));
exports.xnxServer = xnxServer;
var xnx = new xnxServer();
xnx.start(process.env.PORT);
//# sourceMappingURL=index.js.map