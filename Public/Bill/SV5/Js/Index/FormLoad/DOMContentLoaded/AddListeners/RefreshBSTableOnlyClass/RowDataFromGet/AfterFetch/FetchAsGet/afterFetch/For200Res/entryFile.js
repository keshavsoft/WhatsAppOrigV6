import { StartFunc as StartFuncFromForTotalAmount } from "./forTotalAmount.js";

let StartFunc = ({ inResponseAsJson }) => {
    var $table = $('#table');

    $table.bootstrapTable("load", inResponseAsJson);
    // console.log("aaaaaaaa : ", inResponseAsJson);

    StartFuncFromForTotalAmount({ inResponseAsJson });
};

const jFLocalTotalAmount = ({ inResponseAsJson }) => {
    const jVarLocalAmountArray = inResponseAsJson.map(element => {
        const jVarLocalAmount = parseInt(((element.Rate * element.Qty) * ((100 - element.DiscPer) / 100)).toFixed(0));
        // return element.Rate * element.Qty;
        return jVarLocalAmount;
    });

    const sum = jVarLocalAmountArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    jFLocalToInputTotalBillAmountId(`₹ ${sum}`);
};

let jFLocalToInputTotalBillAmountId = (inValue) => {
    let jVarLocalHtmlId = 'TotalBillAmountId';
    let jVarLocalTotalBillAmountId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTotalBillAmountId === null === false) {
        jVarLocalTotalBillAmountId.innerHTML = inValue;
    };
};

export { StartFunc };