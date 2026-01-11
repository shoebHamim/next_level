"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newLog = `${new Date().toISOString()} -> ${req.method} =>${req.path}\n`;
    console.log(newLog);
    // commented out the saving to a file as when deployed to vercel it doesn't support disk write 
    // const logDir = path.join(process.cwd(), "logs");
    // const filePath = path.join(logDir, "serverHitLogs.txt");
    // if (!fs.existsSync(logDir)) {
    //   fs.mkdirSync(logDir, { recursive: true });
    // }
    // fs.appendFileSync(filePath, newLog);
    next();
});
exports.default = logger;
