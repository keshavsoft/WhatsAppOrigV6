import { StartFunc as StartFuncFuncToRun } from "./buttonClickFunc.js";

let StartFunc = () => {
    const arrClass = document.getElementById("SendWAid");

    arrClass.addEventListener("click", StartFuncFuncToRun);
};

export { StartFunc };