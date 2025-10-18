import { StartFunc as StartFuncFetchAsPost } from "./FetchAsPost/entryFile.js";

let StartFunc = async () => {
    StartFuncFetchAsPost().then((inData) => { });
};

export { StartFunc };