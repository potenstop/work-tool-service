import {ApplicationLog} from "papio";
import {WorkToolApp} from "../../src/WorkToolApp";

describe("test simpleApp", () => {
    it("main", () => {
        ApplicationLog.debug("starting");
        WorkToolApp.main();
    });
});
