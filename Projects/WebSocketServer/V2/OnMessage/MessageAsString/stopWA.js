import { StartFunc as StartFuncFromWA } from "../../../../WaV5/signOut.js";

let StartFunc = ({ inws }) => {
    StartFuncFromWA();
    inws.send("StopWADone");
};

export { StartFunc };