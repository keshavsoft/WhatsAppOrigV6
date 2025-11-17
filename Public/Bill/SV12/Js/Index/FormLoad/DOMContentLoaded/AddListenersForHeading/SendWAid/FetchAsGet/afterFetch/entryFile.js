import { StartFunc as Status200 } from "./status200.js";
import { StartFunc as Status409 } from "./status409.js";
import { StartFunc as StartFuncFromFor500Res } from "./For500Res/entryFile.js";

let StartFunc = async ({ inResponse }) => {
    let jVarLocalResponse = await inResponse;

    if (jVarLocalResponse.status === 200) {
        let jVarLocalDataAsJson = await jVarLocalResponse.text();

        Status200({ inResponseAsJson: jVarLocalDataAsJson });
    };

    if (jVarLocalResponse.status === 409) {
        let jVarLocalSavedPk = await jVarLocalResponse.text();
        Status409({ inResponse: jVarLocalSavedPk });
    };

    if (jVarLocalResponse.status === 500) {
        StartFuncFromFor500Res();
    };
};

export { StartFunc };