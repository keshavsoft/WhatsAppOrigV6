import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnInvoiceStateCode = LocalRequestBody.InvoiceStateCode;
	let LocalCoumnInvoiceDate = LocalRequestBody.InvoiceDate;
	let LocalCoumnInvoiceNo = LocalRequestBody.InvoiceNo;
	let LocalCoumnBuyerGST = LocalRequestBody.BuyerGST;
	let LocalCoumnBuyerAddress = LocalRequestBody.BuyerAddress;
	let LocalCoumnBuyerName = LocalRequestBody.BuyerName;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnBuyerName,LocalCoumnBuyerAddress,LocalCoumnBuyerGST,LocalCoumnInvoiceNo,LocalCoumnInvoiceDate,LocalCoumnInvoiceStateCode});

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.set('Content-Type', 'text/plain');
    res.send(LocalFromRepo.SuccessText);
};

export {
    postFilterDataFromBodyFunc
};