import { StartFunc as StartFuncFromOnPostBody } from "./OnPostBody/EntryFile.js";
import { StartFunc as StartFuncFromOnPostFooter } from "./OnPostFooter/EntryFile.js";
import { StartFunc as StartFuncFromOnClickRow } from "./OnClickRow/entryFile.js";

const StartFunc = () => {
    // debugger
    var $table = $('#table');

    let LocalConfig = {};
    LocalConfig.onPostBody = StartFuncFromOnPostBody;
    LocalConfig.onPostFooter = StartFuncFromOnPostFooter;
    LocalConfig.onClickRow = StartFuncFromOnClickRow;

    $table.bootstrapTable(LocalConfig);
};

export { StartFunc };
