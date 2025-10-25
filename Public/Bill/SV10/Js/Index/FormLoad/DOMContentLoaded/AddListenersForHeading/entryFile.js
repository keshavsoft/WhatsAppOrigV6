import { StartFunc as StartFuncFromPrintButtonid } from "./PrintButtonid/entryFile.js";
import { StartFunc as StartFuncFromSendWAid } from "./SendWAid/entryFile.js";

let StartFunc = () => {
    StartFuncFromPrintButtonid();
    StartFuncFromSendWAid();
};

export { StartFunc };