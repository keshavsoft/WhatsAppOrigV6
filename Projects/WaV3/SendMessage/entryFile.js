import { StartFunc as StartFuncFromGeneratePdf } from "./generatePdf.js";
import { StartFunc as StartFuncFromSendWA } from "./sendToWA.js";
import { StartFunc as StartFuncFromInsertAckToFile } from "./insertAckToFile.js";

const StartFunc = async ({ inPk }) => {
    await StartFuncFromGeneratePdf({ inPk });
    // const LocalFromSendWa = await StartFuncFromSendWA({ inPk });
    const LocalFromSendWa = undefined;

    if (LocalFromSendWa === undefined) {
        return false;
    };

    return StartFuncFromInsertAckToFile({ inPk, inAckId: LocalFromSendWa });
};

export { StartFunc };