import ConfigJson from "../../../../../../../../Config.json" with {type: 'json'};
const jVarCommonFolderName = ConfigJson.PublicFolder.BillFolderName;

let StartFunc = ({ inResponse }) => {
    jFLocalAddUrlParams({ inSuccessUrl: `../../Bill/${jVarCommonFolderName}/create.html` });
};

const jFLocalAddUrlParams = ({ inSuccessUrl }) => {
    const jVarLocalRedirectUrl = ConfigJson.Protected.RedirectUrl;

    const url = new URL(window.location.href);
    // url.searchParams.append('BuyerName', jFLocalBuyerName());
    // url.searchParams.append('BuyerMobile', jFLocalBuyerMobile());

    let NewURl = new URL(jVarLocalRedirectUrl, url);

    NewURl.searchParams.append('SuccessUrl', inSuccessUrl);
    NewURl.searchParams.append('BuyerName', jFLocalBuyerName());
    NewURl.searchParams.append('BuyerMobile', jFLocalBuyerMobile());

    // NewURl.searchParams.append('UserName', localStorage.getItem("UserName"));
    // NewURl.searchParams.Fappend('Password', localStorage.getItem("Password"));
    window.location.href = NewURl.href;
};

let jFLocalBuyerName = () => {
    let jVarLocalBuyerName = 'HtmlId-BuyerName'
    let jVarLocalHtmlId = document.getElementById(jVarLocalBuyerName);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalBuyerMobile = () => {
    let jVarLocalBuyerMobile = 'HtmlId-BuyerMobile'
    let jVarLocalHtmlId = document.getElementById(jVarLocalBuyerMobile);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };