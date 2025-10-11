import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";
// import { StartFunc as StartFuncRowDataFromGet } from "./RowDataFromGet/Entry.js";
import { StartFunc as StartFuncFromHtmlTable } from "./HtmlTable/EntryFile.js";
import { StartFunc as StartFuncFromShowOnDom } from "./showOnDom.js";

const StartFunc = () => {
    StartFuncFromHtmlTable();
    StartFuncAddListeners();
    StartFuncFromShowOnDom();
    // StartFuncRowDataFromGet();
};

export { StartFunc };
