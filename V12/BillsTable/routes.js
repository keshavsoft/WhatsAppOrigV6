import express from 'express';

const router = express.Router();

import { router as routerFromRead } from "./Read/routes.js"
import { router as routerFromInsert } from "./Insert/routes.js"
import { router as routerFromFilter } from "./Filter/routes.js"

router.use("/Read", routerFromRead);
router.use("/Insert", routerFromInsert);
router.use("/Filter", routerFromFilter);

export { router };