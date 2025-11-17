let StartFunc = ({ inResponseAsJson }) => {
    const jVarLocalMaxPk = inResponseAsJson.pk;
    
    jFLocalToInputBillNumberId(jVarLocalMaxPk);
};

let jFLocalToInputBillNumberId = (inValue) => {
    let jVarLocalHtmlId = 'BillNumberId';
    let jVarLocalBillNumberId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalBillNumberId === null === false) {
        jVarLocalBillNumberId.innerHTML = inValue;
    };
};

export { StartFunc };