import { StartFunc as Status200 } from "./status200.js";
import { StartFunc as Status500 } from "./status500.js";

let StartFunc = async ({ inResponse, inBody }) => {
    let jVarLocalResponse = await inResponse;

    if (jVarLocalResponse.status === 200) {
        let jVarLocalSavedPk = await jVarLocalResponse.text();

        Status200({ inRowPk: jVarLocalSavedPk, inBody });
    };
};

export { StartFunc }