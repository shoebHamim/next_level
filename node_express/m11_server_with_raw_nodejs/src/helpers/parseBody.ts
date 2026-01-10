import { IncomingMessage } from "node:http";


async function parseBody(req:IncomingMessage){
  let body: Buffer[] = [];

  req.on("data", (chunk) => {
    body.push(chunk);
  });

  req.on("end", () => {
    console.log("buffer received", body.length);
    const fullBody = Buffer.concat(body);
    const receivedText = fullBody.toString("utf-8");
    return JSON.parse(receivedText)
  });

}