import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnItemName,LocalCoumnRate,LocalCoumnQty,LocalCoumnAmount,LocalCoumnFK}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnItemName,LocalCoumnRate,LocalCoumnQty,LocalCoumnAmount,LocalCoumnFK});

    return LocalFromDal;
};

export {
    postDefaultFunc
};