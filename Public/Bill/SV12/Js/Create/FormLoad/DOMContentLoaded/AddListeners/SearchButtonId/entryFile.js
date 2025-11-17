import { StartFunc as StartFuncFromButtonClickFunc } from "./buttonClickFunc.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("SearchButtonId");

    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("click", StartFuncFromButtonClickFunc);
    };
};

export { StartFunc };