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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * 功能描述:
 *
 * @className ShellController
 * @projectName papio
 * @author yanshaowen
 * @date 2018/12/21 22:00
 */
const papio_1 = require("papio");
const ShellService_1 = require("../service/ShellService");
const ReturnGenericsProperty_1 = require("papio/lib/annotation/bean/ReturnGenericsProperty");
var Property = papio_1.annotation.Property;
const { RestController, RequestMapping, RequestParam, NotNull, Valid, Autowired } = papio_1.annotation;
const { RequestMethod } = papio_1.enums;
const { HttpContent } = papio_1.context;
class Member {
}
__decorate([
    Property,
    __metadata("design:type", Number)
], Member.prototype, "id", void 0);
__decorate([
    Property,
    __metadata("design:type", String)
], Member.prototype, "name", void 0);
class Standard {
}
__decorate([
    Property,
    __metadata("design:type", Number)
], Standard.prototype, "code", void 0);
__decorate([
    Property,
    __metadata("design:type", String)
], Standard.prototype, "message", void 0);
__decorate([
    Property,
    __metadata("design:type", Object)
], Standard.prototype, "data", void 0);
let ShellController = class ShellController {
    async getBonuses(numberId) {
        papio_1.ApplicationLog.info("numberId = " + numberId + HttpContent.getHeader("host"));
        await this.shellService.test();
        return "111";
    }
    test() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("111");
            }, 4000);
        });
    }
    async memberInfo() {
        const member = new Member();
        member.id = 1;
        member.name = "1";
        const standard = new Standard();
        standard.data = member;
        return standard;
    }
};
__decorate([
    Autowired,
    __metadata("design:type", ShellService_1.ShellService)
], ShellController.prototype, "shellService", void 0);
__decorate([
    RequestMapping({ path: "/bonuses", method: RequestMethod.GET }),
    Valid,
    __param(0, RequestParam("number_id")), __param(0, NotNull),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ShellController.prototype, "getBonuses", null);
__decorate([
    RequestMapping({ path: "/test", method: RequestMethod.GET }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShellController.prototype, "test", null);
__decorate([
    RequestMapping({ path: "/member/info", method: RequestMethod.GET }),
    ReturnGenericsProperty_1.ReturnGenericsProperty(new Map().set("Standard.data", Member)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShellController.prototype, "memberInfo", null);
ShellController = __decorate([
    RequestMapping("/my"),
    RestController
], ShellController);
