import ConfigJson from "../../../../../../../../Config.json" with {type: 'json'};

let StartFunc = ({ inResponse }) => {
    // debugger;
    // jFLocalAddUrlParams({ inSuccessUrl: "../ShowAll/AsIs.html" });
    jFLocalAddUrlParams({ inSuccessUrl: "../../SignIn/V1/" });
};

const jFLocalAddUrlParams = ({ inSuccessUrl }) => {
    const jVarLocalRedirectUrl = ConfigJson.Protected.RedirectUrl;

    const url = new URL(window.location.href);

    let NewURl = new URL(jVarLocalRedirectUrl, url);

    NewURl.searchParams.append('SuccessUrl', inSuccessUrl);
    window.location.href = NewURl.href;
};


export { StartFunc };