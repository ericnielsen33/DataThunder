exports.id = "main";
exports.modules = {

/***/ "./src/modules/user/user.controller.ts":
/*!*********************************************!*\
  !*** ./src/modules/user/user.controller.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst common_2 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst passport_1 = __webpack_require__(/*! @nestjs/passport */ \"@nestjs/passport\");\nconst user_service_1 = __webpack_require__(/*! ./user.service */ \"./src/modules/user/user.service.ts\");\nlet UserController = class UserController {\n    constructor(userService) {\n        this.userService = userService;\n    }\n    findAll() {\n        console.log('Getting all users');\n        return this.userService.findAll();\n    }\n    createNewUser(user) {\n        const newUser = this.userService.createUser(user);\n        return newUser;\n    }\n};\n__decorate([\n    common_2.Get(),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", []),\n    __metadata(\"design:returntype\", void 0)\n], UserController.prototype, \"findAll\", null);\n__decorate([\n    common_2.Post(),\n    __param(0, common_2.Body('user')),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", void 0)\n], UserController.prototype, \"createNewUser\", null);\nUserController = __decorate([\n    common_2.Controller('users'),\n    common_2.UseGuards(passport_1.AuthGuard('jwt')),\n    __param(0, common_1.Inject(user_service_1.UserService)),\n    __metadata(\"design:paramtypes\", [user_service_1.UserService])\n], UserController);\nexports.UserController = UserController;\n\n\n//# sourceURL=webpack:///./src/modules/user/user.controller.ts?");

/***/ })

};