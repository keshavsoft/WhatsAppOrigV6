import { StartFunc as StartFuncFromForTotalAmount } from "./forTotalAmount.js";

let StartFunc = ({ inResponseAsJson }) => {
    var $table = $('#table');

    $table.bootstrapTable("load", inResponseAsJson);
    // console.log("aaaaaaaa : ", inResponseAsJson);

    StartFuncFromForTotalAmount({ inResponseAsJson });
};

let jFLocalToInputTotalBillAmountId = (inValue) => {
    let jVarLocalHtmlId = 'TotalBillAmountId';
    let jVarLocalTotalBillAmountId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTotalBillAmountId === null === false) {
        jVarLocalTotalBillAmountId.innerHTML = inValue;
    };
};

export { StartFunc };