exports.id = "main";
exports.modules = {

/***/ "./src/modules/auth/auth.controller.ts":
/*!*********************************************!*\
  !*** ./src/modules/auth/auth.controller.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst passport_1 = __webpack_require__(/*! @nestjs/passport */ \"@nestjs/passport\");\nconst auth_service_1 = __webpack_require__(/*! ./auth.service */ \"./src/modules/auth/auth.service.ts\");\nlet AuthController = class AuthController {\n    constructor(authService) {\n        this.authService = authService;\n    }\n    login(request, response) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const payload = { email: request.user.email };\n                const token = yield this.authService.createToken(payload);\n                response.setHeader('Authorization', token);\n                return response.send({ user: request.user });\n            }\n            catch (error) {\n                return response.send(error);\n            }\n        });\n    }\n    register(request) {\n        return __awaiter(this, void 0, void 0, function* () { });\n    }\n    test(response) {\n        return __awaiter(this, void 0, void 0, function* () {\n            response.send('success');\n        });\n    }\n};\n__decorate([\n    common_1.Post('login'),\n    common_1.UseGuards(passport_1.AuthGuard('local')),\n    __param(0, common_1.Req()), __param(1, common_1.Res()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object, Object]),\n    __metadata(\"design:returntype\", Promise)\n], AuthController.prototype, \"login\", null);\n__decorate([\n    common_1.Post('register'),\n    __param(0, common_1.Req()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", Promise)\n], AuthController.prototype, \"register\", null);\n__decorate([\n    common_1.Get(),\n    common_1.UseGuards(passport_1.AuthGuard('jwt')),\n    __param(0, common_1.Res()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", Promise)\n], AuthController.prototype, \"test\", null);\nAuthController = __decorate([\n    common_1.Controller('auth'),\n    __metadata(\"design:paramtypes\", [auth_service_1.AuthService])\n], AuthController);\nexports.AuthController = AuthController;\n\n\n//# sourceURL=webpack:///./src/modules/auth/auth.controller.ts?");

/***/ })

};