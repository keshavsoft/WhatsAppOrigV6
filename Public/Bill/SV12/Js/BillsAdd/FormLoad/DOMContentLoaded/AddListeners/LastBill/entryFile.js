import { StartFunc as StartFuncFuncToRun } from "./buttonClickFunc.js";

let StartFunc = () => {
    const arrClass = document.getElementById("BillNumberId");

    arrClass.addEventListener("click", StartFuncFuncToRun);
};

export { StartFunc };