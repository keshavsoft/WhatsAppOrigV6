let StartFunc = ({ inResponseAsJson }) => {
    var $table = $('#table');

    $table.bootstrapTable("load", inResponseAsJson);
    console.log("aaaaaaaa : ", inResponseAsJson);

    jFLocalTotalAmount({ inResponseAsJson });
};

const jFLocalTotalAmount = ({ inResponseAsJson }) => {
    const jVarLocalAmountArray = inResponseAsJson.map(element => {
        return element.Rate * element.Qty;
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