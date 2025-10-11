import { LowSync } from "lowdb";
import { JSONFileSync } from "lowdb/node";
import { StartFunc as StartFuncFromSendBill } from "./sendBill.js";

const StartFunc = async (msg) => {
    const messageBody = msg.body;

    const response = responser(messageBody);

    if (response === false) {
        // Send the response
        return false;
    };

    msg.reply(response);
};

const responser = (messageBody) => {
    // Path is relative to this file: Projects/WA/SendMessage/ifNotInMobiles.js
    const db = new LowSync(new JSONFileSync("Data/messages.json"), {});
    db.read();
    const key = messageBody.trim();
    const responses = db.data || {};

    // if (key in responses) {

    // };

    if (responses[key]) {
        return responses[key];
    } else {
        switch (key) {
            case "SendBill":
                StartFuncFromSendBill().then();

                break;
            default:
                break;
        }
    };

    // return "What else can I help you with?";
    return false;
};

export { StartFunc };