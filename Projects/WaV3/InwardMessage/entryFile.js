import { JSONFilePreset } from 'lowdb/node'

import { StartFunc as StartFuncFromIfInMobiles } from "./ifInMobiles.js";
import { StartFunc as StartFuncFromIfNotInMobiles } from "./ifNotInMobiles.js";
import { StartFunc as StartFuncFromInsertToFile } from "../insertToFile.js";
import { CheckLastEntry, InsertFunc as InsertFuncFromForWA } from "../../../CommonExpose/forWA.js";
const CommonSendMessage = process.env.WASendMessageTF || true;

const StartFunc = async msg => {
    const defaultData = [];
    const LocalFromNumber = msg.from;
    const timestamp = msg.timestamp;
    console.log("aaaaaaaaaaaaa  : ", msg.body);

    await StartFuncFromInsertToFile({
        inFrom: LocalFromNumber,
        inMessage: msg.body,
        inTimeStamp: timestamp
    });

    const LocalTimeLapseTF = CheckLastEntry();
    console.log("LocalTimeLapseTF : ", LocalTimeLapseTF);

    if (LocalTimeLapseTF && CommonSendMessage) {
        InsertFuncFromForWA({ inValueToInsert: msg.body });

        const LocalNumbersData = await JSONFilePreset('Data/mobiles.json', defaultData);
        console.log("LocalFromNumber : ", LocalFromNumber);
        if (LocalFromNumber in LocalNumbersData.data) {
            // User found in database  
            StartFuncFromIfInMobiles(msg)
        } else {
            StartFuncFromIfNotInMobiles(msg);
        }
    }
};

export { StartFunc };
