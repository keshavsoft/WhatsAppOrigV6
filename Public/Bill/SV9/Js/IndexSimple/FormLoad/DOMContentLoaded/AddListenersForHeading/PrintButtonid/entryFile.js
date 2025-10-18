import { StartFunc as StartFuncFuncToRun } from "./buttonClickFunc.js";

let StartFunc = () => {
    const arrClass = document.getElementById("PrintButtonid");

    arrClass.addEventListener("click", StartFuncFuncToRun);
};

export { StartFunc };