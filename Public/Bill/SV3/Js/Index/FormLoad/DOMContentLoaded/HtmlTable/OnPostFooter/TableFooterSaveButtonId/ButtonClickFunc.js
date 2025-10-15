import { StartFunc as StartFuncCheckFunc } from "./CheckFuncs/entryFile.js";
import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/EntryFile.js";

const StartFunc = (event) => {
    const jVarLocalCurrentTarget = event.currentTarget;

    const jVarLocalFromCheck = StartFuncCheckFunc();

    if (jVarLocalFromCheck === false) {
        return false;
    };

    jVarLocalCurrentTarget.disabled = true;

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