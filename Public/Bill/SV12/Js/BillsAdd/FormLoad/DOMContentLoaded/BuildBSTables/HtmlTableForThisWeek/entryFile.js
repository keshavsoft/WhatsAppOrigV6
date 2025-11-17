import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/entryFile.js";
import { StartFunc as StartFuncFromOnPostBody } from "./OnPostBody/entryFile.js";

const StartFunc = () => {
    var $table = $('#tableThisWeek');

    const finalOptions = {
        onClickRow: StartFuncOnClickRowFunc,
        onPostBody: StartFuncFromOnPostBody
    };

    $table.bootstrapTable(finalOptions);
};

export { StartFunc };
