import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as CheckFunc } from "./checkFunc.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/entryFile.js";
import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/entryFile.js";

let StartFunc = async () => {
    let jVarLocalFromCheck = CheckFunc();

    if (jVarLocalFromCheck) {
        let jVarLocalFetchHeaders = StartFuncFetchHeaders();

        let jVarLocalResponse = await StartFuncFetchFuncs({ inBody: jVarLocalFetchHeaders });

        StartFuncAfterFetch({ inResponse: jVarLocalResponse, inBody: JSON.parse(jVarLocalFetchHeaders.body) });
    };
};

export { StartFunc }