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
const typeorm_1 = require("typeorm");
let ShellTask = class ShellTask {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: "shell_task_id" }),
    __metadata("design:type", Number)
], ShellTask.prototype, "shellTaskId", void 0);
__decorate([
    typeorm_1.Column({ name: "create_time" }),
    __metadata("design:type", Date)
], ShellTask.prototype, "createTime", void 0);
__decorate([
    typeorm_1.Column({ name: "update_time" }),
    __metadata("design:type", Date)
], ShellTask.prototype, "updateTime", void 0);
__decorate([
    typeorm_1.Column({ name: "shell_template_id" }),
    __metadata("design:type", Number)
], ShellTask.prototype, "shellTemplateId", void 0);
__decorate([
    typeorm_1.Column({ name: "hz_year" }),
    __metadata("design:type", String)
], ShellTask.prototype, "hzYear", void 0);
__decorate([
    typeorm_1.Column({ name: "hz_month" }),
    __metadata("design:type", String)
], ShellTask.prototype, "hzMonth", void 0);
__decorate([
    typeorm_1.Column({ name: "hz_day" }),
    __metadata("design:type", String)
], ShellTask.prototype, "hzDay", void 0);
__decorate([
    typeorm_1.Column({ name: "hz_hour" }),
    __metadata("design:type", String)
], ShellTask.prototype, "hzHour", void 0);
__decorate([
    typeorm_1.Column({ name: "hz_minute" }),
    __metadata("design:type", String)
], ShellTask.prototype, "hzMinute", void 0);
__decorate([
    typeorm_1.Column({ name: "hz_second" }),
    __metadata("design:type", String)
], ShellTask.prototype, "hzSecond", void 0);
ShellTask = __decorate([
    typeorm_1.Entity("shell_task")
], ShellTask);
exports.ShellTask = ShellTask;
