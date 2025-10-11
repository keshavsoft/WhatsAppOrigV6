import { StartFunc as StartFuncFromGeneratePdf } from "./generatePdf.js";
import { StartFunc as StartFuncFromSendWA } from "./sendToWA.js";
import { StartFunc as StartFuncFromInsertAckToFile } from "./insertAckToFile.js";

const StartFunc = async ({ inPk }) => {
    const LocalFromGeneratePdf = await StartFuncFromGeneratePdf({ inPk });
    // const LocalFromSendWa = await StartFuncFromSendWA({ inPk });

    if (LocalFromGeneratePdf === undefined) {
        return false;
    };

    // return StartFuncFromInsertAckToFile({ inPk, inAckId: LocalFromSendWa });

    return true;
};

export { StartFunc };