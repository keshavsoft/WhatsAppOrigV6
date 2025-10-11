import path from 'path';
import { fileURLToPath } from 'url';
import Whatsapp from 'whatsapp-web.js';

const { MessageMedia } = Whatsapp;

import { getClientInfo } from "../../../CommonExpose/clientInfo.js";

// Launch the browser and open a new blank page.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CommonToNumber = "919848163021@c.us";

const StartFunc = async ({ inPk }) => {
    const LocalClientInfo = getClientInfo();
    // console.log("msg.from : ", msg.from);
    const LocalToPath = path.join(__dirname, "..", "..", "..", "Data", "Output", `${inPk}.pdf`);

    const media = MessageMedia.fromFilePath(LocalToPath);

    const LocalFromWA = await LocalClientInfo.sendMessage(CommonToNumber, media);

    return LocalFromWA.id.id;
    // console.log("msg.from : ", LocalFromWA.id.id);
};



export { StartFunc };