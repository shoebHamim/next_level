import app from "./app";
import config from "./config";
const { port: serverPort } = config;

app.listen(serverPort, () => {
  console.log(`Example app listening on port ${serverPort}`);
});
