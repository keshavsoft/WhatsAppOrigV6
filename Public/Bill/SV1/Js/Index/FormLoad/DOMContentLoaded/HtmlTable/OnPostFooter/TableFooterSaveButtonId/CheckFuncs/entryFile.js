import { StartFunc as StartFuncFromForItemName } from "./forItemName.js";
import { StartFunc as StartFuncFromForItemRate } from "./forItemRate.js";

let StartFunc = () => {
    const jVarLocalFromItemName = StartFuncFromForItemName();

    if (jVarLocalFromItemName === false) {
        return false;
    }

    const jVarLocalFromItemRate = StartFuncFromForItemRate();

    if (jVarLocalFromItemRate === false) { return false; }

    return true;
};

export { StartFunc }