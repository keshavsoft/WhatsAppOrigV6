let StartFunc = (inData, inOptions) => {
    const jVarLocalHeader = inOptions.$header[0].querySelector("tr th[data-field='Amount'] div.th-inner");

    const jVarLocalAmountArray = inData.map(element => {
        return parseInt(element.Amount);
    });

    const sum = jVarLocalAmountArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    jVarLocalHeader.innerHTML = `Amt ₹ ${new Intl.NumberFormat('en-IN').format(sum)}`;
};

export { StartFunc };