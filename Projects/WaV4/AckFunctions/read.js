import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const CommonEnvPath = process.env.DataPath;

// Launch the browser and open a new blank page.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CommonFilesPath = path.join(__dirname, "..", "..", "..", CommonEnvPath);
const CommonTableName = "waAckRead.json";

const StartFunc = ({ inMsg }) => {
    const LocalDataPath = path.join(CommonFilesPath, CommonTableName);

    const LocalBillsData = fs.readFileSync(LocalDataPath);
    const LocalBillsDataAsJson = JSON.parse(LocalBillsData);

    let LocalFindObject = LocalBillsDataAsJson.find(element => {
        return element.WAAckId === inMsg.id.id;
    });

    if (LocalFindObject) {
        return false;
    };

    let LocalInsertObject = {};

    LocalInsertObject.WAAckId = inMsg.id.id;
    LocalInsertObject.ReadTS = new Date();

    LocalBillsDataAsJson.push(LocalInsertObject);

    fs.writeFileSync(LocalDataPath, JSON.stringify(LocalBillsDataAsJson));

    return true;
};

export { StartFunc };
