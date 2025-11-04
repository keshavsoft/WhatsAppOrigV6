let StartFunc = () => {
    const jVarLocalBuyerName = jFLocalHtmlIdBuyerName();
    const jVarLocalBuyerDetails = localStorage.getItem("BuyerDetails");
    const jVarLocalBuyerDetailsAsJson = JSON.parse(jVarLocalBuyerDetails);

    const jVarLocalFindBuyer = jVarLocalBuyerDetailsAsJson.find(element => {
        return element[0] === jVarLocalBuyerName;
    });
    console.log("jVarLocalFindBuyer : ", jVarLocalFindBuyer);

    jFLocalToInputHtmlIdBuyerMobile(jVarLocalFindBuyer[1]);
};

let jFLocalToInputHtmlIdBuyerMobile = (inValue) => {
    let jVarLocalHtmlId = 'HtmlId-BuyerMobile';
    let jVarLocalHtmlIdBuyerMobile = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalHtmlIdBuyerMobile === null === false) {
        jVarLocalHtmlIdBuyerMobile.value = inValue;
    };
};

let jFLocalHtmlIdBuyerName = () => {
    let jVarLocalHtmlIdBuyerName = 'HtmlId-BuyerName'
    let jVarLocalHtmlId = document.getElementById(jVarLocalHtmlIdBuyerName);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

export { StartFunc }