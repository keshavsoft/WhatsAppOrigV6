import express from 'express';
import http from 'http';

import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const server = http.createServer(app);
// const port = 3000;

var port = normalizePort(process.env.PORT || 3000);

import { StartFunc as StartFuncFromMiddleware } from "./Token/MiddleWares/entryFile.js";

import { StartFunc as StartFuncFromWebSocketServer } from "./Projects/WebSocketServer/V2/entryFile.js";
import { router as routerFromWA } from "./Projects/WaV5/entryFile.js";

import { router as routerFromSecret } from "./Secret/routes.js";
import { router as routerFromUsers } from "./Users/routes.js";
import { router as routerFromV11 } from "./V11/routes.js";
import { router as routerFromV12 } from "./V12/routes.js";

app.use(express.static('Public'));
app.use(cookieParser());

app.use("/WA", routerFromWA);

app.use("/Secret", routerFromSecret);
app.use("/Users", routerFromUsers);
app.use("/V11", routerFromV11);
app.use("/V12", routerFromV12);

StartFuncFromWebSocketServer(server);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Open here http://localhost:${port}`);
});