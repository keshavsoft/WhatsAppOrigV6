import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/entryFile.js";
import { StartFunc as StartFuncFromOnPostBody } from "./OnPostBody/entryFile.js";

const CommonTableId = "tableLastWeek";

const StartFunc = () => {
    var $table = $(`#${CommonTableId}`);

    const finalOptions = {
        onClickRow: StartFuncOnClickRowFunc,
        onPostBody: StartFuncFromOnPostBody
    };

    $table.bootstrapTable(finalOptions);
};

export { StartFunc };
