// import { StartFunc as StartFuncFetchAsGet } from "./FetchAsGet/entryFile.js";
import { StartFunc as StartFuncRowDataFromGet } from "./RowDataFromGet/Entry.js";

let StartFunc = async () => {
    StartFuncRowDataFromGet().then((inData) => { });
};

export { StartFunc };