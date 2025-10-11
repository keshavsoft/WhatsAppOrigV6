import { StartFunc as StartFuncFromWA } from "../../../../WaV5/readAllChats.js";

let StartFunc = ({ inws }) => {
    StartFuncFromWA().then();
    inws.send("WAReadAllChats");
};

export { StartFunc };