import { getClientInfo as getClientInfoFromClientInfo } from "../../CommonExpose/clientInfo.js";

const StartFunc = (req, res) => {
    const LocalFromClientInfo = getClientInfoFromClientInfo();

    if (LocalFromClientInfo) {
        res.status(200).send("WA is logged");

        return;
    };

    res.status(404).send("Error");
};

export { StartFunc };