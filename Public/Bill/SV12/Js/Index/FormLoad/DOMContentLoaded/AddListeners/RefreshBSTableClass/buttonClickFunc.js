import { StartFunc as StartFuncRowDataFromGet } from "./RowDataFromGet/Entry.js";

let StartFunc = async () => {
    StartFuncRowDataFromGet().then((inData) => { });
};

export { StartFunc };