import getUrlJson from './getUrl.json' with {type: 'json'};

let StartFunc = async () => {
    const jVarLocalPkFromUrlParams = getUrlQueryParams({ inGetKey: "pk" });
    let jVarLocalGetEndPoint = getUrlJson.GetEndPoint.replace("${Pk}", jVarLocalPkFromUrlParams);

    let response = await fetch(jVarLocalGetEndPoint);

    return await response;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };

