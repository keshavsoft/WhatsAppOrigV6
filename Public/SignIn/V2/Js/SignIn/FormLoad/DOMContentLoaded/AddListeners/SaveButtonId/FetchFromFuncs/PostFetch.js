import UrlJson from "../../../../../config.json" with { type: "json" };

let StartFunc = async ({ inBody }) => {
    let jVarLocalFetchHeaders = inBody;
    let LocalroutePath = UrlJson.PostendPoint;

    let jVarLocalFetchUrl = `${LocalroutePath}`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

