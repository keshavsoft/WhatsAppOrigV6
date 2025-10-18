let StartFunc = () => {
    jFLocalToInput({ inId: "HtmlId-BuyerMobile", inValue: getUrlQueryParams({ inGetKey: "BuyerMobile" }) });
    jFLocalToInput({ inId: "HtmlId-BuyerName", inValue: getUrlQueryParams({ inGetKey: "BuyerName" }) });
    jFLocalToInput({ inId: "HtmlId-BuyerAddress", inValue: getUrlQueryParams({ inGetKey: "BuyerAddress" }) });
    jFLocalToInput({ inId: "HtmlId-BuyerGST", inValue: getUrlQueryParams({ inGetKey: "BuyerGST" }) });
};

let jFLocalToInput = ({ inId, inValue }) => {
    let jVarLocalHtmlId = inId;
    let jVarLocalBuyerMobile = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalBuyerMobile === null === false) {
        jVarLocalBuyerMobile.value = inValue;
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };