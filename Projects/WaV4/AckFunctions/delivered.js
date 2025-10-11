import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

if (!process.env.DataPath) {
    throw new Error("Environment variable 'DataPath' is not defined.");
};

const CommonEnvPath = process.env.DataPath;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CommonFilesPath = path.join(__dirname, "..", "..", "..", CommonEnvPath);

const StartFunc = ({ inMsg }) => {
    try {
        const LocalDataPath = path.join(CommonFilesPath, "waAckSent.json");

        // Read and parse the JSON file
        const LocalBillsData = fs.readFileSync(LocalDataPath, 'utf-8');
        const LocalBillsDataAsJson = JSON.parse(LocalBillsData);

        // Check if the message ID already exists
        const LocalFindObject = LocalBillsDataAsJson.find(element => {
            return element.WAAckId === inMsg.id.id;
        });

        if (LocalFindObject) {
            return false;
        }

        // Insert new object
        const LocalInsertObject = {
            WAAckId: inMsg.id.id,
            DeliveredTS: new Date()
        };

        LocalBillsDataAsJson.push(LocalInsertObject);

        // Write updated data back to the file
        fs.writeFileSync(LocalDataPath, JSON.stringify(LocalBillsDataAsJson, null, 2));

        return true;
    } catch (error) {
        console.error("Error in StartFunc:", error);
        return false;
    }
};

export { StartFunc };
