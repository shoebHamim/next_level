import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config/index";
import sendJson from "./helpers/sendJson";
import { getHandler } from "./helpers/RouteHandler";
import "./routes/index";

export interface CustomRequest extends IncomingMessage {
  params?: Record<string, string>;
}

const server: Server = http.createServer(
  (req: CustomRequest, res: ServerResponse) => {
    console.log("Server hit on URL=>", req.url);

    const path = req.url || "";
    const method = req.method?.toUpperCase() || "";

    const handler = getHandler(method, path);

    if (handler) {
      handler(req, res);
    } else {
      sendJson(res, 404, { success: false, message: "Route not found!" });
    }
  }
);

server.listen(config.port, () => {
  console.log("server is running on port", config.port);
});
