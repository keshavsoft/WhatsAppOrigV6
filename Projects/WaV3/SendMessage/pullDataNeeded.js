import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const CommonEnvPath = process.env.DataPath;

// Launch the browser and open a new blank page.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CommonFilesPath = path.join(__dirname, "..", "..", "..", CommonEnvPath);

const StartFunc = ({ inPk }) => {
    // console.log("__dirname L ", __dirname);

    const LocalHeadData = LocalFuncPullFromJsonForHead({ inPk });
    const LocalItemsData = LocalFuncPullFromJsonForBillItems({ inPk });

    const LocalItemsForThisPk = LocalItemsData.filter(element => {
        return element.FK === inPk;
    });

    return {
        Head: LocalHeadData,
        items: LocalItemsForThisPk,
        ...LocalFuncForTotal({ inItemsArray: LocalItemsData })
    };
};

const LocalFuncPullFromJsonForHead = ({ inPk }) => {
    const LocalDataPath = path.join(CommonFilesPath, "BillsTable.json");

    const LocalBillsData = fs.readFileSync(LocalDataPath);
    const LocalBillsDataAsJson = JSON.parse(LocalBillsData);
    console.log("insdfsd: ", inPk);

    const LocalArray = LocalBillsDataAsJson.find(element => {
        return element.pk === parseInt(inPk);
    });

    return LocalArray;
};

// const LocalFuncPullFromJsonForBillItems = ({ inPk }) => {
//     const LocalDataPath = path.join(CommonFilesPath, "BillItemsTable.json");
//     const LocalBillsData = fs.readFileSync(LocalDataPath);
//     const LocalBillsDataAsJson = JSON.parse(LocalBillsData);

//     console.log("111111111 L ", CommonFilesPath);
//     console.log("222222222222 L ", LocalDataPath, LocalBillsDataAsJson);

//     const LocalArray = LocalBillsDataAsJson.find(element => {
//         return element.FK === inPk;
//     });

//     return LocalArray;
// };

const LocalFuncPullFromJsonForBillItems = ({ inPk }) => {
    const LocalDataPath = path.join(CommonFilesPath, "BillItemsTable.json");
    const LocalBillsData = fs.readFileSync(LocalDataPath);
    const LocalBillsDataAsJson = JSON.parse(LocalBillsData);

    const LocalArray = LocalBillsDataAsJson.filter(element => {
        return element.FK === inPk;
    });

    return LocalArray;
};

const LocalFuncForTotal = ({ inItemsArray }) => {
    const jVarLocalAmountArray = inItemsArray.map(element => {
        const LoopInsideValue = (100 - ((element.DiscPer === undefined || element.DiscPer === null) ? 0 : element.DiscPer)) / 100;
        // return parseInt(((element.Rate * element.Qty) * ((100 - ((element.DiscPer === undefined || element.DiscPer === null) ? 0 : element.DiscPer)) / 100)).toFixed(0));
        return parseInt(((element.Rate * element.Qty) * LoopInsideValue).toFixed(0));
    });
    // console.log("jVarLocalAmountArray : ", jVarLocalAmountArray);

    const sum = jVarLocalAmountArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const jVarLocalTaxableValue = sum * 100 / 118;
    const jVarLocalTaxString = `(CGST ₹${((sum - jVarLocalTaxableValue) / 2).toFixed(2)} + SGST ₹${((sum - jVarLocalTaxableValue) / 2).toFixed(2)})`;

    return {
        TaxableValue: jVarLocalTaxableValue.toFixed(2),
        TaxString: jVarLocalTaxString,
        TotalAmount: ` ₹ ${sum.toFixed(0)}`
    };
};

export { StartFunc };