"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
const config_1 = require("../config");
// Express app initialization
const app = express_1.default();
//workaround to frontend path
const myPath = path_1.default.join(__dirname, "public/frontend").replace((config_1.SERVER_ENVIRONMENT !== "LOCAL" ? "/backend" : "\\backend"), "");
// Template configuration
app.set("view engine", "ejs");
app.set("views", "public");
// Static files configuration
app.use("/assets", express_1.default.static(myPath));
// Controllers
app.get("/", (req, res) => {
    console.log("Webapp endpoint called");
    res.render("index");
});
app.get("/api", (req, res) => {
    console.log("Apis enpoint triggered");
    let myPath = path_1.default.join(__dirname, "public/frontend").replace("/backend", "");
    console.log(" ::::::: ", myPath);
    res.json({ message: "Backend listening Welcome to [ MERN Stack]" });
});
// Start function
exports.start = (port) => {
    const server = http_1.default.createServer(app);
    return new Promise((resolve, reject) => {
        server.listen(port, resolve);
    });
};
//# sourceMappingURL=server.js.map