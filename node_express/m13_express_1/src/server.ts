import app from "./app";
import config from "./config";
const { port: serverPort } = config;

app.listen(serverPort, (ser) => {
  console.log(`Example app listening on port ${serverPort}`);
});
