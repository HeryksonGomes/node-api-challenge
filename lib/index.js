import {} from "dotenv/config";
import express from "express";
import router from "./router";

/**
 * Create Express App
 */
const app = express();
const port = process.env.PORT || 3232;
app.use(router);
app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
