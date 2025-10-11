import { StartFunc as StartFuncFromDelivered } from "./delivered.js";
import { StartFunc as StartFuncFromRead } from "./read.js";

const StartFunc = (msg, ack) => {
    // ack values:
    // - -1: Error
    // - 0: Sent
    // - 1: Received
    // - 2: Read
    // - 3: Played (for voice notes)
    console.log(`iiiiiiiiii ${msg.id.id}`);
    if (ack === 0) {
        console.log(`Message "${msg.body}" to ${msg.to} was sent successfully.`);
    } else if (ack === 1) {
        StartFuncFromDelivered({ inMsg: msg });
    } else if (ack === 2) {
        StartFuncFromRead({ inMsg: msg });
    } else if (ack === -1) {
        console.error(`Error sending message "${msg.body}" to ${msg.to}.`);
    };
};

export { StartFunc };
