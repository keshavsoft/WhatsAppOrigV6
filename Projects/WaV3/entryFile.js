import express from 'express';
import { StartFunc as StartFuncFromStartWA } from "./startWA.js";
import { StartFunc as StartFuncFromSendMessage } from "./SendMessage/entryFile.js";

var router = express.Router();

router.get('/Start', async (req, res) => {
    await StartFuncFromStartWA({ inReponse: res });

    await res.end();
});

router.get('/SendMessage/:Pk', async (req, res) => {
    const LocalPk = req.params.Pk;

    const LocalFromSend = await StartFuncFromSendMessage({ inPk: LocalPk });

    if (LocalFromSend) {
        res.status(200).send("Sent successfully");
        
        return;
    };
  
    res.status(404).send("Error");
});

export { router };