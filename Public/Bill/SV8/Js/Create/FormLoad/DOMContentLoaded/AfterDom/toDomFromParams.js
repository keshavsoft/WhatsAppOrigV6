let StartFunc = () => {
    const jVarLocalBuyerMobile = getUrlQueryParams({ inGetKey: "BuyerMobile" });
    const jVarLocalBuyerName = getUrlQueryParams({ inGetKey: "BuyerName" });

    jFLocalToInputBuyerMobile(jVarLocalBuyerMobile);
    jFLocalToInputBuyerName(jVarLocalBuyerName);
};

let jFLocalToInputBuyerMobile = (inValue) => {
    let jVarLocalHtmlId = 'HtmlId-BuyerMobile';
    let jVarLocalBuyerMobile = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalBuyerMobile === null === false) {
        jVarLocalBuyerMobile.value = inValue;
    };
};

let jFLocalToInputBuyerName = (inValue) => {
    let jVarLocalHtmlId = 'HtmlId-BuyerName';
    let jVarLocalBuyerName = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalBuyerName === null === false) {
        jVarLocalBuyerName.value = inValue;
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };