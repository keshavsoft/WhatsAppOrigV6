import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as CheckFunc } from "./checkFunc.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/entryFile.js";

let StartFunc = async ({ inResponseAsJson }) => {
    let jVarLocalFromCheck = CheckFunc();

    if (jVarLocalFromCheck) {
        let jVarLocalResponse = await StartFuncFetchFuncs({ inResponseAsJson });

        StartFuncAfterFetch({
            inHeadArray: inResponseAsJson,
            inResponse: jVarLocalResponse
        });
    };
};

export { StartFunc }