import UrlJson from './url.json' with {type: 'json'};

const StartFunc = ({ inRowPk, inBody }) => {
    jFLocalAddUrlParams();
};

const jFLocalAddUrlParams = () => {
    const jVarLocalRedirectUrl = UrlJson.RedirectToUrl;
    const jVarLocalSuccessUrl = getUrlQueryParams({ inGetKey: "SuccessUrl" });

    if (jVarLocalSuccessUrl === null) {
        window.location.href = jVarLocalRedirectUrl;
        return;
    }

    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);

    parameters.delete("SuccessUrl");

    const jVarLocalNewUrl = `${jVarLocalSuccessUrl}?${parameters.toString()}`;
    window.location.href = jVarLocalNewUrl;
};

const getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    return parameters.get(inGetKey);
};

export { StartFunc };
