const StartFunc = ({ inCurrentTarget }) => {
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