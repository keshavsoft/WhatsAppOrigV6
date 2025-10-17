import UrlJson from './url.json' with {type: 'json'};

const StartFunc = ({ inRowPk, inBody }) => {
    jFLocalAddUrlParams();
};

const jFLocalAddUrlParams = () => {
    const jVarLocalRedirectUrl = UrlJson.RedirectToUrl;

    const jVarLocalSuccessUrl = getUrlQueryParams({ inGetKey: "SuccessUrl" });
    const jVarLocalBuyerName = getUrlQueryParams({ inGetKey: "BuyerName" });
    const jVarLocalBuyerMobile = getUrlQueryParams({ inGetKey: "BuyerMobile" });
    // const jVarLocalNewUrl = `${jVarLocalSuccessUrl}?BuyerName=${jVarLocalBuyerName}&BuyerMobile=${jVarLocalBuyerMobile}`;
    let jVarLocalNewUrl = jVarLocalSuccessUrl;

    if (jVarLocalBuyerName === null === false) {
        jVarLocalNewUrl = `${jVarLocalNewUrl}?BuyerName=${jVarLocalBuyerName}`;
    };

    if (jVarLocalBuyerMobile === null === false) {
        jVarLocalNewUrl = `${jVarLocalNewUrl}&BuyerMobile=${jVarLocalBuyerMobile}`;
    };
    console.log("aaaaaaaaaa : ", jVarLocalBuyerName, jVarLocalNewUrl);

    if (jVarLocalSuccessUrl === null) {
        window.location.href = jVarLocalRedirectUrl;
    } else {
        window.location.href = jVarLocalNewUrl;
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };