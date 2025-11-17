import { StartFunc as StartFuncFromCheckWA } from "./CheckWA/entryFile.js";
import { StartFunc as StartFuncFromCheckWASent } from "./CheckWASent/entryFile.js";

let StartFunc = () => {
    StartFuncFromCheckWA();
    StartFuncFromCheckWASent();

    let jVarLocalRefreshBSTableId = document.querySelector(`.RefreshBSTableClass`);

    jVarLocalRefreshBSTableId.click();
};

export { StartFunc };