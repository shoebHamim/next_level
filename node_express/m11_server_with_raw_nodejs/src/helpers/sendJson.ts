import { ServerResponse } from "node:http";

function sendJson(res: ServerResponse, statusCode: number, data: any) {
  res.writeHead(statusCode, { "content-type": "application/json" });
  res.end(JSON.stringify({status:statusCode,data:data}))
}

export default sendJson
