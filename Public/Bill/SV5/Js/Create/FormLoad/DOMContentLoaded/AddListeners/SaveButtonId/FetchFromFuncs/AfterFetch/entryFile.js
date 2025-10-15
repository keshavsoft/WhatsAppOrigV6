import { StartFunc as Status200 } from "./status200.js";
import { StartFunc as Status500 } from "./status500.js";
import { StartFunc as Status401 } from "./status401.js";

let StartFunc = async ({ inResponse }) => {
    let jVarLocalResponse = await inResponse;

    if (jVarLocalResponse.status === 200) {
        let jVarLocalSavedPk = await jVarLocalResponse.text();

        Status200({ inRowPk: jVarLocalSavedPk });
    };

    if (jVarLocalResponse.status === 500) {
        let jVarLocalSavedPk = await jVarLocalResponse.text();
        Status500({ inResponse: jVarLocalSavedPk });
    };

    if (jVarLocalResponse.status === 401) {
        let jVarLocalSavedPk = await jVarLocalResponse.text();
        
        Status401({ inResponse: jVarLocalSavedPk });
    };
};

export { StartFunc }