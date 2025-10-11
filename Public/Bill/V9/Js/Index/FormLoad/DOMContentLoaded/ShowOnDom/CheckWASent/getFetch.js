let StartFunc = async () => {
    const jVarLocalPk = getUrlQueryParams({ inGetKey: "pk" });

    let jVarLocalFetchUrl = `/V11/waAck/Read/ValueByKey/${jVarLocalPk}`;

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