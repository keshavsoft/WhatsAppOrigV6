// import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";
import { StartFunc as StartFuncRowDataFromGet } from "./RowDataFromGet/Entry.js";
import { StartFunc as StartFuncFromHtmlTable } from "./HtmlTable/EntryFile.js";

const StartFunc = async () => {
    StartFuncFromHtmlTable();
    // StartFuncAddListeners();
    StartFuncRowDataFromGet();
};

export { StartFunc };
