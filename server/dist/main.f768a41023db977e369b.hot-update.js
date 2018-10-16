exports.id = "main";
exports.modules = {

/***/ "./src/modules/auth/auth.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/auth/auth.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst jwt_1 = __webpack_require__(/*! @nestjs/jwt */ \"@nestjs/jwt\");\nconst auth_service_1 = __webpack_require__(/*! ./auth.service */ \"./src/modules/auth/auth.service.ts\");\nconst jwt_strategy_1 = __webpack_require__(/*! ./passport/jwt.strategy */ \"./src/modules/auth/passport/jwt.strategy.ts\");\nconst local_strategy_1 = __webpack_require__(/*! ./passport/local.strategy */ \"./src/modules/auth/passport/local.strategy.ts\");\nconst user_module_1 = __webpack_require__(/*! ../user/user.module */ \"./src/modules/user/user.module.ts\");\nconst passport_1 = __webpack_require__(/*! @nestjs/passport */ \"@nestjs/passport\");\nconst auth_controller_1 = __webpack_require__(/*! ./auth.controller */ \"./src/modules/auth/auth.controller.ts\");\nlet AuthModule = class AuthModule {\n};\nAuthModule = __decorate([\n    common_1.Module({\n        imports: [\n            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),\n            jwt_1.JwtModule.register({\n                secretOrPrivateKey: 'secretkey',\n                signOptions: {\n                    expiresIn: 3600,\n                },\n            }),\n            user_module_1.UserModule,\n        ],\n        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy, local_strategy_1.LocalStrategy],\n        controllers: [auth_controller_1.AuthController],\n    })\n], AuthModule);\nexports.AuthModule = AuthModule;\n\n\n//# sourceURL=webpack:///./src/modules/auth/auth.module.ts?");

/***/ })

};