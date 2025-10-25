import { StartFunc as SaveButtonId } from "./SaveButtonId/entryFile.js";
import { StartFunc as StartFuncFromSearchButtonId } from "./SearchButtonId/entryFile.js";

let StartFunc = () => {
    SaveButtonId();
    StartFuncFromSearchButtonId();
};

export { StartFunc };