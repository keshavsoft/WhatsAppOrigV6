import { StartFunc as StartFuncFetchAsGet } from "./FetchAsGet/entryFile.js";
// import { StartFunc as StartFuncRowDataFromGet } from "./RowDataFromGet/Entry.js";

let StartFunc = async () => {
    StartFuncFetchAsGet().then((inData) => { });
};

export { StartFunc };