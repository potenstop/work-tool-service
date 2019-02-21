"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleApp_1;
/**
 *
 * 功能描述:
 *
 * @className App
 * @projectName papio
 * @author yanshaowen
 * @date 2018/12/21 14:29
 */
const papio_1 = require("papio");
const papio_2 = require("papio");
const { EnableAutoConfiguration, ComponentScan } = papio_2.annotation;
let SimpleApp = SimpleApp_1 = class SimpleApp {
    static async main() {
        papio_1.ApplicationLog.info("start staring");
        await papio_1.app.PapioApplication.run(SimpleApp_1, process.env);
        papio_1.ApplicationLog.info("start suc");
    }
};
SimpleApp = SimpleApp_1 = __decorate([
    EnableAutoConfiguration,
    ComponentScan("@service"),
    ComponentScan("@controller"),
    ComponentScan("@config"),
    ComponentScan("@model")
], SimpleApp);
exports.SimpleApp = SimpleApp;
/*
import * as fs from "fs";
import * as async_hooks from "async_hooks";

let indent = 0;
async_hooks.createHook({
    init(asyncId, type, triggerAsyncId, resource) {
        const eid = async_hooks.executionAsyncId();
        const indentStr = " ".repeat(indent);
        fs.writeSync(
            1,
            `${indentStr}${type}(${asyncId}):` +
            ` trigger: ${triggerAsyncId} execution: ${eid}\n`);
    },
    before(asyncId) {
        const indentStr = " ".repeat(indent);
        fs.writeSync(1, `${indentStr}before:  ${asyncId}\n`);
        indent += 2;
    },
    after(asyncId) {
        indent -= 2;
        const indentStr = " ".repeat(indent);
        fs.writeSync(1, `${indentStr}after:   ${asyncId}\n`);
    },
    destroy(asyncId) {
        const indentStr = " ".repeat(indent);
        fs.writeSync(1, `${indentStr}destroy: ${asyncId}\n`);
    },
}).enable();*/
