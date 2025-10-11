const StartFunc = ({ inCurrentTarget }) => {
    LocalFuncCalculateAmount();

    const jVarLocalCurrentTarget = inCurrentTarget;
    const jVarLocalClosestTr = jVarLocalCurrentTarget.closest("tr");
    const jVarLocalInputs = jVarLocalClosestTr.querySelectorAll("input");
    // debugger
    let jVarLocalPostObject = jFLocalPreparePostBody({ inQuerySelectorAll: jVarLocalInputs });
    jVarLocalPostObject.FK = getUrlQueryParams({ inGetKey: "pk" });

    return JSON.stringify(jVarLocalPostObject);
};

const getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

const LocalFuncCalculateAmount = () => {
    const jVarLocalRate = jFLocalHtmlIdRate();
    const jVarLocalQty = jFLocalHtmlIdQty();
    const jVarLocalAmount = jVarLocalRate * jVarLocalQty;
    jFLocalToInputHtmlIdAmount(jVarLocalAmount);
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