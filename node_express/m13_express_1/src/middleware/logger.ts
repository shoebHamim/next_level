import fs from "fs";
import { NextFunction, Request, Response } from "express";
import path from "path";

const logger = async (req: Request, res: Response, next: NextFunction) => {
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
};

export default logger;
