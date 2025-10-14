import { StartFunc as StartFuncFuncToRun } from "./buttonClickFunc.js";

let StartFunc = () => {
    const arrClass = document.querySelectorAll(".RefreshBSTableYesterdayClass");
    console.log("arrClass : ", arrClass);

    for (let i of arrClass) {
        i.addEventListener("click", StartFuncFuncToRun);
    };
};

export { StartFunc };