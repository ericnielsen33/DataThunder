exports.id = "main";
exports.modules = {

/***/ "./src/modules/auth/passport/jwt.strategy.ts":
/*!***************************************************!*\
  !*** ./src/modules/auth/passport/jwt.strategy.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst passport_1 = __webpack_require__(/*! @nestjs/passport */ \"@nestjs/passport\");\nconst passport_jwt_1 = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst user_service_1 = __webpack_require__(/*! ../../user/user.service */ \"./src/modules/user/user.service.ts\");\nlet JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy, 'jwt') {\n    constructor(userService) {\n        super({\n            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),\n            passReqToCallback: false,\n            secretOrKey: 'secretKey',\n        });\n        this.userService = userService;\n    }\n    validateUser(payload, done) {\n        return __awaiter(this, void 0, void 0, function* () {\n            console.log(payload);\n            yield this.userService.findOneByEmail(payload.email)\n                .then(user => {\n                console.log(user);\n                done(null, user);\n            })\n                .catch(err => done(err, false));\n        });\n    }\n};\nJwtStrategy = __decorate([\n    common_1.Injectable(),\n    __metadata(\"design:paramtypes\", [user_service_1.UserService])\n], JwtStrategy);\nexports.JwtStrategy = JwtStrategy;\n\n\n//# sourceURL=webpack:///./src/modules/auth/passport/jwt.strategy.ts?");

/***/ })

};