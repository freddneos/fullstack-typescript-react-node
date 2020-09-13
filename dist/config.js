"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER_API_BASE_URL = exports.SERVER_ENVIRONMENT = exports.SERVER_PORT = void 0;
exports.SERVER_PORT = parseInt(process.env.SERVER_PORT || process.env.PORT || "3000");
exports.SERVER_ENVIRONMENT = process.env.SERVER_ENVIRONMENT || process.env.ENVIRONMENT || "LOCAL";
exports.SERVER_API_BASE_URL = process.env.API_URL ||
    process.env.SERVER_API_URL ||
    `http://127.0.0.1:${exports.SERVER_PORT}/api`;
//# sourceMappingURL=config.js.map