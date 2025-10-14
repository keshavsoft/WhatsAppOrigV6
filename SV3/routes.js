import express from 'express';

const router = express.Router();

import { router as routerFromwaAckSent } from "./waAckSent/routes.js";
import { router as routerFromwaAckRead } from "./waAckRead/routes.js";
import { router as routerFromwaAck } from "./waAck/routes.js";
import { router as routerFromBillItemsTable } from "./BillItemsTable/routes.js";
import { router as routerFromBillsTable } from "./BillsTable/routes.js";
import { router as routerFrommessages } from "./messages/routes.js";
import { router as routerFromStudentNames } from "./StudentNames/routes.js";
import { router as routerFrommobiles } from "./mobiles/routes.js";

router.use("/waAckSent", routerFromwaAckSent);
router.use("/waAckRead", routerFromwaAckRead);
router.use("/waAck", routerFromwaAck);
router.use("/BillItemsTable", routerFromBillItemsTable);
router.use("/BillsTable", routerFromBillsTable);
router.use("/messages", routerFrommessages);
router.use("/StudentNames", routerFromStudentNames);
router.use("/mobiles", routerFrommobiles);

export { router };