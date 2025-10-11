import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import pug from 'pug';
import fs from 'fs';
import Whatsapp from 'whatsapp-web.js';

const { MessageMedia } = Whatsapp;

import { getClientInfo } from "../../CommonExpose/clientInfo.js";

import HeadJson from './head.json' with {type: 'json'};
import ItemsJson from './items.json' with {type: 'json'};

// Launch the browser and open a new blank page.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CommonFolderPath = path.join(__dirname, "..", "..", "Data", "Input", 'index.html');
const filePath = `file://${CommonFolderPath}`;
const CommonToNumber = "919848163021@c.us";

const compiledFunction = pug.compileFile("Data/Input/template.pug");

const StartFunc = async ({ inPk }) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    console.log("__dirname : ", __dirname);

    fs.writeFileSync(CommonFolderPath, compiledFunction({
        Head: HeadJson,
        items: ItemsJson,
        ...LocalFuncForTotal()
    }));

    await page.goto(filePath, { waitUntil: 'networkidle0' });

    await page.pdf({ path: 'Data/Output/bill.pdf', format: 'A4' })

    await browser.close();

    const LocalClientInfo = getClientInfo();
    // console.log("msg.from : ", msg.from);
    const LocalToPath = path.join(__dirname, "..", "..", "Data", "Output", 'bill.pdf');

    const media = MessageMedia.fromFilePath(LocalToPath);
    // await msg.reply(media);

    // LocalClientInfo.sendMessage(CommonToNumber, "Send Button").then(PromiseData => {
    // });

    await LocalClientInfo.sendMessage(CommonToNumber, media);
};

const StartFunc_Keshav_FixedPdf = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    console.log("__dirname : ", __dirname);

    fs.writeFileSync(CommonFolderPath, compiledFunction({
        Head: HeadJson,
        items: ItemsJson,
        ...LocalFuncForTotal()
    }));

    await page.goto(filePath, { waitUntil: 'networkidle0' });

    await page.pdf({ path: 'Data/Output/bill.pdf', format: 'A4' })

    await browser.close();

    const LocalClientInfo = getClientInfo();
    // console.log("msg.from : ", msg.from);
    const LocalToPath = path.join(__dirname, "..", "..", "Data", "Output", 'bill.pdf');

    const media = MessageMedia.fromFilePath(LocalToPath);
    // await msg.reply(media);

    // LocalClientInfo.sendMessage(CommonToNumber, "Send Button").then(PromiseData => {
    // });

    await LocalClientInfo.sendMessage(CommonToNumber, media);
};

const LocalFuncForTotal = () => {
    const jVarLocalAmountArray = ItemsJson.map(element => {
        return parseInt(((element.Rate * element.Qty) * ((100 - (element.DiscPer === undefined ? 0 : element.DiscPer)) / 100)).toFixed(0));
    });

    const sum = jVarLocalAmountArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const jVarLocalTaxableValue = sum * 100 / 118;
    const jVarLocalTaxString = `(CGST ₹${((sum - jVarLocalTaxableValue) / 2).toFixed(2)} + SGST ₹${((sum - jVarLocalTaxableValue) / 2).toFixed(2)})`;

    return {
        TaxableValue: jVarLocalTaxableValue.toFixed(2),
        TaxString: jVarLocalTaxString,
        TotalAmount: ` ₹ ${sum.toFixed(0)}`
    }
};

export { StartFunc };