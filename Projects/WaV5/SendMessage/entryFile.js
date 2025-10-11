import { StartFunc as StartFuncFromGeneratePdf } from "./generatePdf.js";
import { StartFunc as StartFuncFromSendWA } from "./sendToWA.js";
import { StartFunc as StartFuncFromInsertAckToFile } from "./insertAckToFile.js";

const StartFunc = async ({ inPk }) => {
    const LocalToMobile = await StartFuncFromGeneratePdf({ inPk });
    // console.log("lllllllllll : ", LocalToMobile);

    const LocalFromSendWa = await StartFuncFromSendWA({ inPk, inToMobile: LocalToMobile });

    // const LocalFromSendWa = undefined;

    if (LocalFromSendWa === undefined) {
        return false;
    };

    return StartFuncFromInsertAckToFile({ inPk, inAckId: LocalFromSendWa });
};

export { StartFunc };