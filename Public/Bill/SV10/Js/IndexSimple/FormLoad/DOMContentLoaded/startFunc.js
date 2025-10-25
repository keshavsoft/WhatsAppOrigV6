import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";
import { StartFunc as StartFuncFromHtmlTable } from "./HtmlTable/EntryFile.js";
import { StartFunc as StartFuncFromShowOnDom } from "./showOnDom.js";
import { StartFunc as StartFuncFromAddListenersForHeading } from "./AddListenersForHeading/entryFile.js";
import { StartFunc as StartFuncFromToDataList } from "./ToDataList/entryFile.js";

const StartFunc = () => {
    StartFuncFromHtmlTable();
    StartFuncAddListeners();
    StartFuncFromShowOnDom();
    StartFuncFromAddListenersForHeading();
    StartFuncFromToDataList();
};

export { StartFunc };
