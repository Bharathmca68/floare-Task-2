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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = exports.UserType = void 0;
const graphql_1 = require("@nestjs/graphql");
let UserType = class UserType {
};
__decorate([
    graphql_1.Field(type => graphql_1.ID),
    __metadata("design:type", String)
], UserType.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], UserType.prototype, "email", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], UserType.prototype, "user_name", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], UserType.prototype, "password", void 0);
UserType = __decorate([
    graphql_1.ObjectType('User')
], UserType);
exports.UserType = UserType;
let Response = class Response {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], Response.prototype, "accessToken", void 0);
Response = __decorate([
    graphql_1.ObjectType('Response')
], Response);
exports.Response = Response;
//# sourceMappingURL=user.type.js.map