/**
 *
 * 功能描述:
 *
 * @className App
 * @projectName papio
 * @author yanshaowen
 * @date 2018/12/21 14:29
 */
import {ApplicationLog, Bean, ComponentScan, EnableAutoConfiguration, PapioApplication} from "papio";
import {CommonConstant} from "papio/lib/constants/CommonConstant";

@EnableAutoConfiguration
@ComponentScan("@service")
@ComponentScan("@controller")
@ComponentScan("@config")
@ComponentScan("@model")
export class WorkToolApp {
    public static async main(): Promise<void> {
        ApplicationLog.info("start staring");
        await PapioApplication.run(WorkToolApp, process.env);
        ApplicationLog.info("start suc");
    }
    @Bean(CommonConstant.START_ARGS)
    public startArgs(): object {
        return {port: 3001};
    }
}

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
