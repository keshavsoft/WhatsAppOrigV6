const StartFunc = ({ inResponseAsJson }) => {
    const jVarLocalAmountArray = inResponseAsJson.map(element => {
        const jVarLocalAmount = parseInt(((element.Rate * element.Qty) * ((100 - (element.DiscPer === undefined ? 0 : element.DiscPer)) / 100)).toFixed(0));

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