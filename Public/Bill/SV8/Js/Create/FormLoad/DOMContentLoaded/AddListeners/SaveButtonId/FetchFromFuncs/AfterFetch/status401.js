import ConfigJson from "../../../../../../../../Config.json" with {type: 'json'};
const jVarCommonFolderName = ConfigJson.PublicFolder.BillFolderName;

let StartFunc = ({ inResponse }) => {
    jFLocalAddUrlParams({ inSuccessUrl: `../../Bill/${jVarCommonFolderName}/create.html` });
};

const jFLocalAddUrlParams = ({ inSuccessUrl }) => {
    const jVarLocalRedirectUrl = ConfigJson.Protected.RedirectUrl;

    const url = new URL(window.location.href);
    let NewURl = new URL(jVarLocalRedirectUrl, url);

    NewURl.searchParams.append('SuccessUrl', inSuccessUrl);
    NewURl.searchParams.append('BuyerName', jFLocalinputValueReturn({ inputId: 'HtmlId-BuyerName' }));
    NewURl.searchParams.append('BuyerMobile', jFLocalinputValueReturn({ inputId: 'HtmlId-BuyerMobile' }));
    NewURl.searchParams.append('BuyerAddress', jFLocalinputValueReturn({ inputId: 'HtmlId-BuyerAddress' }));
    NewURl.searchParams.append('BuyerGST', jFLocalinputValueReturn({ inputId: 'HtmlId-BuyerGST' }));

    window.location.href = NewURl.href;
};

let jFLocalinputValueReturn = ({ inputId }) => {
    let jVarLocalBuyerName = inputId
    let jVarLocalHtmlId = document.getElementById(jVarLocalBuyerName);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };