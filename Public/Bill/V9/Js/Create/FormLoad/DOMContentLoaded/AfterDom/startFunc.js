import { StartFunc as StartFuncFromToDataList } from "./ToDataList/entryFile.js";

let StartFunc = () => {
    jFLocalDateInsert();
    StartFuncFromToDataList();
};

const jFLocalDateInsert = () => {
    let jVarLocalFormId = document.getElementById('FormId');

    const jVarLocalDateCells = jVarLocalFormId.querySelectorAll('input[type="date"]');

    jVarLocalDateCells.forEach((element, LoopIndex) => {
        const date = new Date();

        element.value = date.toISOString().split("T")[0];
    });
};

export { StartFunc };