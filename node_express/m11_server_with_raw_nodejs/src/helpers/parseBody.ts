import { CustomRequest } from "../server";

async function parseBody(req: CustomRequest): Promise<any> {
  return new Promise((resolve, reject) => {
    let body: Buffer[] = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      try {
        console.log("buffer received", body.length);
        const fullBody = Buffer.concat(body);
        const receivedText = fullBody.toString("utf-8");
        resolve(JSON.parse(receivedText));
      } catch (err) {
        reject(err);
      }
    });
    req.on("error", reject);
  });
}

export default parseBody;
