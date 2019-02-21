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
/**
 *
 * 功能描述:
 *
 * @className ShellService
 * @projectName papio
 * @author yanshaowen
 * @date 2018/12/22 11:48
 */
const papio_1 = require("papio");
var Service = papio_1.annotation.Service;
var Autowired = papio_1.annotation.Autowired;
const ShellTask_1 = require("../model/dto/common-util/ShellTask");
const ShellTaskRepository_1 = require("../dao/common-util/ShellTaskRepository");
const ShellTaskRepository1_1 = require("../dao/common-util/ShellTaskRepository1");
var Primary = papio_1.annotation.Primary;
var Transaction = papio_1.annotation.Transaction;
let ShellService = class ShellService {
    async test() {
        const shellTask = new ShellTask_1.ShellTask();
        shellTask.createTime = new Date();
        shellTask.updateTime = new Date();
        shellTask.shellTemplateId = 1;
        const shellTask1 = new ShellTask_1.ShellTask();
        shellTask1.createTime = new Date();
        shellTask1.updateTime = new Date();
        shellTask1.shellTemplateId = 1;
        papio_1.ApplicationLog.info("===========start");
        const result = await this.shellTaskRepository.insert(shellTask);
        const result1 = await this.shellTaskRepository1.insert(shellTask1);
        papio_1.ApplicationLog.info("===========end");
    }
};
__decorate([
    Autowired,
    __metadata("design:type", ShellTaskRepository_1.ShellTaskRepository)
], ShellService.prototype, "shellTaskRepository", void 0);
__decorate([
    Autowired,
    __metadata("design:type", ShellTaskRepository1_1.ShellTaskRepository1)
], ShellService.prototype, "shellTaskRepository1", void 0);
__decorate([
    Primary,
    Transaction,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShellService.prototype, "test", null);
ShellService = __decorate([
    Service
], ShellService);
exports.ShellService = ShellService;
