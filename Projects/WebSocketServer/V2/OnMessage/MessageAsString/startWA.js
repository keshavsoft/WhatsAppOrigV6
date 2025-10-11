import { StartFunc as StartFuncFromWA } from "../../../../WaV5/StartWA/entryFile.js";

let StartFunc = async () => {
    await StartFuncFromWA();
};

export { StartFunc };