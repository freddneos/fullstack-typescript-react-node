import express from "express";
import http from "http";
import path from "path";

import {SERVER_ENVIRONMENT} from "../config";


// Express app initialization
const app = express();

//workaround to frontend path
const myPath = path.join(__dirname, "public/frontend").replace((SERVER_ENVIRONMENT !== "LOCAL" ? "/backend" : "\\backend"), "");

// Template configuration
app.set("view engine", "ejs");
app.set("views", "public");

// Static files configuration
app.use("/assets", express.static(myPath));


// Controllers
app.get("/", (req, res) => {
  console.log("Webapp endpoint called");
  res.render("index");
});

app.get("/api", (req, res) => {
  console.log("Apis enpoint triggered");
  let myPath = path.join(__dirname, "public/frontend").replace("/backend", "");
  console.log(" ::::::: ",myPath);
  res.json({ message: "Backend listening Welcome to [ MERN Stack]" });
});

// Start function
export const start = (port: number): Promise<void> => {
  const server = http.createServer(app);

  return new Promise<void>((resolve, reject) => {
    server.listen(port, resolve);
  });
};
