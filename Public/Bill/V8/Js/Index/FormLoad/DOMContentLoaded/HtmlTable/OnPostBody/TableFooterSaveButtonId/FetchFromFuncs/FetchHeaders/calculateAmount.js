const StartFunc = () => {
    const jVarLocalRate = jFLocalHtmlIdRate();
    const jVarLocalQty = jFLocalHtmlIdQty();
    const jVarLocalDiscPer = jFLocalHtmlIdDisc();

    const jVarLocalAmount = ((jVarLocalRate * jVarLocalQty) * ((100 - jVarLocalDiscPer) / 100)).toFixed(0);

    jFLocalToInputHtmlIdAmount(jVarLocalAmount);
};

let jFLocalHtmlIdDisc = () => {
    let jVarLocalHtmlIdDisc = 'HtmlId-Disc%'
    let jVarLocalHtmlId = document.getElementById(jVarLocalHtmlIdDisc);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalToInputHtmlIdAmount = (inValue) => {
    let jVarLocalHtmlId = 'HtmlId-Amount';
    let jVarLocalHtmlIdAmount = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalHtmlIdAmount === null === false) {
        jVarLocalHtmlIdAmount.value = inValue;
    };
};

let jFLocalHtmlIdRate = () => {
    let jVarLocalHtmlIdRate = 'HtmlId-Rate'
    let jVarLocalHtmlId = document.getElementById(jVarLocalHtmlIdRate);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalHtmlIdQty = () => {
    let jVarLocalHtmlIdQty = 'HtmlId-Qty'
    let jVarLocalHtmlId = document.getElementById(jVarLocalHtmlIdQty);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

const jFLocalPreparePostBody = ({ inQuerySelectorAll }) => {
    let jVarLocalReturnObject = {};

    inQuerySelectorAll.forEach(LoopItem => {
        if (LoopItem.type === "number") {
            jVarLocalReturnObject[LoopItem.name] = parseFloat(LoopItem.value, 2);
        } else {
            jVarLocalReturnObject[LoopItem.name] = LoopItem.value;
        }

    });

    // return JSON.stringify(jVarLocalReturnObject);

    return jVarLocalReturnObject;
};

export { StartFunc }