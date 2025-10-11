import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/Entry.js";

const StartFunc = (event) => {
    const jVarLocalCurrentTarget = event.currentTarget;

    const jVarLocalFromCheck = StartFuncCheckFunc();
    // console.log("aaaaaaaaaaaa : ", jVarLocalFromCheck);
    if (jVarLocalFromCheck === false) {
        return false;
    };
  
    jVarLocalCurrentTarget.disabled = true;
    // document.querySelector("span");
    jFLocalShowProcess({ inCurrentTarget: jVarLocalCurrentTarget });

    StartFuncFetchFromFuncs({ inCurrentTarget: jVarLocalCurrentTarget });
};


const jFLocalShowProcess = ({ inCurrentTarget }) => {
    const jVarLocalCurrentTarget = inCurrentTarget;
    // console.log("aaaaaaaaaaaa : ", jVarLocalCurrentTarget);
    const jVarLocalSpan = jVarLocalCurrentTarget.querySelector("span");
    jVarLocalSpan.classList.remove("d-none");
};
// TableFooterSaveButtonId

export { StartFunc }