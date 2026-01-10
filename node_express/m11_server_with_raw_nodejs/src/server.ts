import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config/index";
import sendJson from "./helpers/sendJson";
import { RouteHandler, routes } from "./helpers/RouteHandler";
import "./routes/index";

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log("Server hit on URL=>", req.url);

    const path = req.url || "";
    const method = req.method?.toUpperCase() || "";
    // console.log('total available routes->',routes);
    const methodMap = routes.get(method);
    const handler: RouteHandler | undefined = methodMap?.get(path);

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
