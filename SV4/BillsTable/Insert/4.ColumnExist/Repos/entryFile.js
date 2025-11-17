import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnBuyerName,LocalCoumnBuyerAddress,LocalCoumnBuyerGST,LocalCoumnInvoiceNo,LocalCoumnInvoiceDate,LocalCoumnInvoiceStateCode}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnBuyerName,LocalCoumnBuyerAddress,LocalCoumnBuyerGST,LocalCoumnInvoiceNo,LocalCoumnInvoiceDate,LocalCoumnInvoiceStateCode});

    return LocalFromDal;
};

export {
    postDefaultFunc
};