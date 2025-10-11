import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import pug from 'pug';
import fs from 'fs';

import { StartFunc as StartFuncFromPullDataNeeded } from "./pullDataNeeded.js";

// Launch the browser and open a new blank page.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CommonToPath = 'Data/Output';

const compiledFunction = pug.compileFile("Data/Input/template.pug");

const StartFunc = async ({ inPk }) => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'], // --disable-setuid-sandbox is often used in conjunction
        // You might also need to specify the executablePath if Chromium is not in a standard location
        // executablePath: '/usr/bin/chromium-browser' 
    });

    const page = await browser.newPage();
    const LocalData = StartFuncFromPullDataNeeded({ inPk });
    console.log("LocalData : ", LocalData);

    const CommonFolderPath = path.join(__dirname, "..", "..", "..", "Data", "Input", `${inPk}.html`);
    fs.writeFileSync(CommonFolderPath, compiledFunction(LocalData));

    const filePath = `file://${CommonFolderPath}`;
    await page.goto(filePath, { waitUntil: 'networkidle0' });

    await page.pdf({ path: `${CommonToPath}/${inPk}.pdf`, format: 'A4' })

    await browser.close();

    return await LocalData.Head.BuyerMobile;
};

export { StartFunc };