import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnBuyerName,LocalCoumnBuyerAddress,LocalCoumnBuyerGST,LocalCoumnInvoiceNo,LocalCoumnInvoiceDate,LocalCoumnInvoiceStateCode}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnBuyerName,LocalCoumnBuyerAddress,LocalCoumnBuyerGST,LocalCoumnInvoiceNo,LocalCoumnInvoiceDate,LocalCoumnInvoiceStateCode});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};