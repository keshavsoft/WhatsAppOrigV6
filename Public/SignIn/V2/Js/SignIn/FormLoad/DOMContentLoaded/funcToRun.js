import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";
import { StartFunc as StartFuncParams } from "./Params/enterFile.js";

const StartFunc = async () => {
    StartFuncParams();
    StartFuncAddListeners();
};

export { StartFunc };
