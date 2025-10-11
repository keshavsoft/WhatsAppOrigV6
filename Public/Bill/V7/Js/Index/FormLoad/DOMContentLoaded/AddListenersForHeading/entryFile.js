import { StartFunc as StartFuncFromRefreshBSTableClass } from "./PrintButtonid/entryFile.js";
import { StartFunc as StartFuncFromSendWAid } from "./SendWAid/entryFile.js";

let StartFunc = () => {
    StartFuncFromRefreshBSTableClass();
    StartFuncFromSendWAid();
};

export { StartFunc };