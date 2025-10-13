import { StartFunc as StartFuncFromRefreshBSTableClass } from "./RefreshBSTableClass/entryFile.js";
import { StartFunc as RefreshBSTableOnlyClass } from "./RefreshBSTableOnlyClass/entryFile.js";

let StartFunc = () => {
    RefreshBSTableOnlyClass();
    StartFuncFromRefreshBSTableClass();
};

export { StartFunc };