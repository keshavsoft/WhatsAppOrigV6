import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/entryFiles.js";

let StartFunc = async ({ inCurrentTarget }) => {
    let jVarLocalFromFetch = await StartFuncFetchFuncs({ inCurrentTarget });

    await StartFuncAfterFetch({ inResponse: jVarLocalFromFetch });
};

export { StartFunc }