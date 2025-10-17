import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/entryFile.js";
import ConfigJson from "../../../../../../../../../../Config.json" with { type: "json" };
import UrlJson from "./url.json" with { type: "json" };

let StartFunc = async ({ inResponseAsJson }) => {
    const LocalStartRoute = ConfigJson.StartUrl;
    let LocalroutePath = UrlJson.PostUrl;

    let jVarLocalFetchHeaders = StartFuncFetchHeaders({ inDataAsArray: inResponseAsJson });
    let jVarLocalFetchUrl = `${LocalStartRoute}/${LocalroutePath}`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

