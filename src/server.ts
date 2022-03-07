import express from "express";
import routes from "./routes";

const app = express();

app.use(routes);

app.listen(8001, () => console.log("Connected to port 8001"));
