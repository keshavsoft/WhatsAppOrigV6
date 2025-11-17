import ConfigJson from '../../../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    const jVarLocalPk = getUrlQueryParams({ inGetKey: "pk" });
    const jVarLocalStartUrl = ConfigJson.StartUrl;

    let jVarLocalFetchUrl = `/${jVarLocalStartUrl}/waAck/Read/ValueByKey/${jVarLocalPk}`;

    // GET http://localhost:9010/1
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };