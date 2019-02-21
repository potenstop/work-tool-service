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
 * @className ShellTaskRepository
 * @projectName papio
 * @author yanshaowen
 * @date 2019/1/22 18:44
 */
const papio_1 = require("papio");
var TypeDataBeansRepository = papio_1.data.TypeDataBeansRepository;
const typeorm_1 = require("typeorm");
const ShellTask_1 = require("../../model/dto/common-util/ShellTask");
let ShellTaskRepository1 = class ShellTaskRepository1 extends TypeDataBeansRepository {
    constructor() {
        super(__dirname);
    }
};
ShellTaskRepository1 = __decorate([
    typeorm_1.EntityRepository(ShellTask_1.ShellTask),
    __metadata("design:paramtypes", [])
], ShellTaskRepository1);
exports.ShellTaskRepository1 = ShellTaskRepository1;
