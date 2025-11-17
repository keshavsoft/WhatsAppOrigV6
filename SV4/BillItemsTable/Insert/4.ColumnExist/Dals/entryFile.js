import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnItemName,LocalCoumnRate,LocalCoumnQty,LocalCoumnAmount,LocalCoumnFK}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnItemName,LocalCoumnRate,LocalCoumnQty,LocalCoumnAmount,LocalCoumnFK});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};