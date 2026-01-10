import addRoutes from "../helpers/RouteHandler";
import sendJson from "../helpers/sendJson";

addRoutes("GET", "/", (req, res) => {
  sendJson(res, 200, {
    success: true,
    message: "The server is up and running!",
    path: req.url,
  });
});

addRoutes("POST", "/users", (req, res) => {
  let body: Buffer[] = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });

  req.on("end", () => {
    console.log("buffer received", body.length);
    const fullBody = Buffer.concat(body);
    const receivedText = fullBody.toString("utf-8");
    sendJson(res, 200, JSON.parse(receivedText));
  });
});

addRoutes("GET", "/users", (req, res) => {
  sendJson(res, 200, [
    { id: 1, name: "Hamim" },
    { id: 2, name: "Shoeb" },
  ]);
});
