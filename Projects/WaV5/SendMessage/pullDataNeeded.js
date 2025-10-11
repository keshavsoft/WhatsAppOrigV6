import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const CommonEnvPath = process.env.DataPath;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CommonFilesPath = path.join(__dirname, "..", "..", "..", CommonEnvPath);

const StartFunc = ({ inPk }) => {
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

    const LocalArray = LocalBillsDataAsJson.find(element => {
        return element.pk === parseInt(inPk);
    });

    return LocalArray;
};

const LocalFuncPullFromJsonForBillItems = ({ inPk }) => {
    const LocalDataPath = path.join(CommonFilesPath, "BillItemsTable.json");
    const LocalBillsData = fs.readFileSync(LocalDataPath);
    const LocalBillsDataAsJson = JSON.parse(LocalBillsData);

    const LocalArray = LocalBillsDataAsJson.filter(element => {
        return element.FK === inPk;
    });

    return LocalArray;
};

const LocalFuncInWords = ({ inputNumber }) => {
    // Handle the case of zero
    if (inputNumber === 0) {
        return "Zero";
    }

    const ones = ['', ' One', ' Two', ' Three', ' Four', ' Five', ' Six', ' Seven', ' Eight', ' Nine'];
    const teens = [' Ten', ' Eleven', ' Twelve', ' Thirteen', ' Fourteen', ' Fifteen', ' Sixteen', ' Seventeen', ' Eighteen', ' Nineteen'];
    const tens = ['', '', ' Twenty', ' Thirty', ' Forty', ' Fifty', ' Sixty', ' Seventy', ' Eighty', ' Ninety'];

    const getHundreds = (numStr) => {
        let result = '';
        if (numStr.length === 3) {
            if (numStr[0] !== '0') {
                result += ones[parseInt(numStr[0])] + ' Hundred';
            }
            numStr = numStr.substring(1);
            if (numStr !== '00') {
                result += ' and';
            }
        }
        if (numStr.length === 2) {
            const tenDigit = parseInt(numStr[0]);
            const oneDigit = parseInt(numStr[1]);
            if (tenDigit === 1) {
                result += teens[oneDigit];
            } else if (tenDigit > 1) {
                result += tens[tenDigit];
                if (oneDigit > 0) {
                    result += ones[oneDigit];
                }
            } else if (oneDigit > 0) {
                result += ones[oneDigit];
            }
        } else if (numStr.length === 1 && parseInt(numStr) > 0) {
            result += ones[parseInt(numStr)];
        }
        return result.trim();
    };

    let number = String(inputNumber);
    let out = '';

    // Group the digits according to the Indian numbering system
    let crore = '';
    let lakh = '';
    let thousand = '';
    let lastThree = '';

    if (number.length > 7) {
        crore = number.substring(0, number.length - 7);
        number = number.substring(number.length - 7);
    }
    if (number.length > 5) {
        lakh = number.substring(0, number.length - 5);
        number = number.substring(number.length - 5);
    }
    if (number.length > 3) {
        thousand = number.substring(0, number.length - 3);
        number = number.substring(number.length - 3);
    }
    lastThree = number;

    if (crore) {
        out += getHundreds(crore) + ' Crore';
    }
    if (lakh) {
        out += (out ? ' ' : '') + getHundreds(lakh) + ' Lakh';
    }
    if (thousand) {
        out += (out ? ' ' : '') + getHundreds(thousand) + ' Thousand';
    }
    if (lastThree) {
        out += (out ? ' ' : '') + getHundreds(lastThree);
    }

    return out.trim();
};

const LocalFuncForTotal = ({ inItemsArray }) => {
    const jVarLocalAmountArray = inItemsArray.map(element => {
        const LoopInsideValue = (100 - ((element.DiscPer === undefined || element.DiscPer === null) ? 0 : element.DiscPer)) / 100;
        return parseInt(((element.Rate * element.Qty) * LoopInsideValue).toFixed(0));
    });

    const sum = jVarLocalAmountArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const LocalInWords = LocalFuncInWords({ inputNumber: sum });

    const jVarLocalTaxableValue = sum * 100 / 118;
    const jVarLocalTaxString = `(CGST ₹${((sum - jVarLocalTaxableValue) / 2).toFixed(2)} + SGST ₹${((sum - jVarLocalTaxableValue) / 2).toFixed(2)})`;

    return {
        TaxableValue: jVarLocalTaxableValue.toFixed(2),
        TaxString: jVarLocalTaxString,
        TotalAmount: ` ₹ ${sum.toFixed(0)}`,
        InWords: `( in words : ${LocalInWords} rupees only)`
    };
};

export { StartFunc };