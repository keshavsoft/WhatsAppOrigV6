import ConfigJson from "../../../../../../../../Config.json" with {type: 'json'};
const jVarCommonFolderName = ConfigJson.PublicFolder.BillFolderName;

let StartFunc = ({ inResponse }) => {
    jFLocalAddUrlParams({ inSuccessUrl: `../../Bill/${jVarCommonFolderName}/create.html` });
};

const jFLocalAddUrlParams = ({ inSuccessUrl }) => {
    const jVarLocalRedirectUrl = ConfigJson.Protected.RedirectUrl;

    const url = new URL(window.location.href);

    let NewURl = new URL(jVarLocalRedirectUrl, url);

    // NewURl.searchParams.append('SuccessUrl', inSuccessUrl);
    NewURl.searchParams.append('UserName', localStorage.getItem("UserName"));
    NewURl.searchParams.append('Password', localStorage.getItem("Password"));
    window.location.href = NewURl.href;
};

export { StartFunc };