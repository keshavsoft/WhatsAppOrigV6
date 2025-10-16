import { StartFunc as StartFuncValidateToken } from "../../../../Token/MiddleWares/entryFile.js";

let StartFunc = (req, res, next) => {
    let localClientToken = req.cookies.KSToken;
    console.log("localClientToken : ", localClientToken);

    let localResult = StartFuncValidateToken({ inToken: localClientToken });

    if (localResult === false) {
        res.status(401).send({ message: 'Unauthorized' });
        return;
    };

    req.locals = {};
    req.locals.KeshavSoft = {}
    req.locals.KeshavSoft.DataPk = localResult;

    next();
};

export { StartFunc };