// import { StartFunc as StartFuncTableFooterSaveButtonId } from "./TableFooterSaveButtonId/EntryFile.js";

let StartFunc = (inData, inOptions) => {

    // // const jVarLocalHeader = inOptions.$header[0].querySelector("tr th[data-field='Amount'] div.th-inner");
    const jVarLocalHeader = inOptions.$header[0].querySelector("tr th[data-field='Amount'] div.th-inner");

    const jVarLocalAmountArray = inData.map(element => {
        return parseInt(element.Amount);
    });

    const sum = jVarLocalAmountArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    jVarLocalHeader.innerHTML = `Amount ( ${sum} )`
    console.log("----------- : ", inData, inOptions, sum, jVarLocalHeader.innerHTML);

    // StartFuncTableFooterSaveButtonId();
};

export { StartFunc };