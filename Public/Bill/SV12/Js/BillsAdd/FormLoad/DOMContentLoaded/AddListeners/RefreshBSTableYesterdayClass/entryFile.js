import { StartFunc as StartFuncFuncToRun } from "./buttonClickFunc.js";
import OptionsJson from './options.json' with {type: 'json'};
const CommonClassName = OptionsJson.HtmlIds.BSTableClass;

let StartFunc = () => {
    const arrClass = document.querySelectorAll(`.${CommonClassName}`);

    for (let i of arrClass) {
        i.addEventListener("click", StartFuncFuncToRun);
    };
};

export { StartFunc };