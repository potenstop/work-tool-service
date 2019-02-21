import { expect } from "chai";
import ModelGen from "papio/lib/gen/ModelGen";
import GenConfig from "papio/lib/model/GenConfig";

const genConfig = new GenConfig();
genConfig.spaceLength = 4;
genConfig.isEndSemicolon = false;
genConfig.tableName = "shell_template";
genConfig.modelName = "ShellTemplate";

const modelGen = new ModelGen({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "work_help_root",
    password: "123456",
    database: "work_help",
    synchronize: false,
    logging: true,
    entities: [
        "src/model/dto/work-help/*.ts",
    ],
    cli: {
        entitiesDir: "src/model/dto/work-help",
    },
});
describe("测试 ModelGen", () => {
    it("gen()", async () => {
        expect(await modelGen.gen(genConfig)).to.equal(true);
    });
});
