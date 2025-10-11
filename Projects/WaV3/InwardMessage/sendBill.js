import puppeteer from 'puppeteer';
// Or import puppeteer from 'puppeteer-core';
import Whatsapp from 'whatsapp-web.js';
const { MessageMedia } = Whatsapp;

import pug from 'pug';

import { getClientInfo } from "../../../CommonExpose/clientInfo.js";
const CommonToNumber = "919848163021@c.us";

const StartFunc = async () => {
    // Launch the browser and open a new blank page.
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const compiledFunction = pug.compileFile("p1.html");

    await page.setContent(compiledFunction({ BillNumber: "10:49" })); // Load the HTML string into the page

    // setContent
    // Set screen size.
    await page.pdf({ path: 'output.pdf', format: 'A4' })
    // await page.setViewport({ width: 1080, height: 1024 });

    await browser.close();

    return await LocalFuncSendFromWA();
};

const LocalFuncSendFromWA = async () => {
    const LocalClientInfo = getClientInfo();
    // console.log("msg.from : ", msg.from);
    const media = MessageMedia.fromFilePath('./output.pdf');
    // await msg.reply(media);
    // return await LocalClientInfo.sendMessage("919848163021@c.us", media);
    return await LocalClientInfo.sendMessage(CommonToNumber, media);
};

export { StartFunc };