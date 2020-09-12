import express from "express";
import http from "http";
import path from "path";

// Express app initialization
const app = express();

//workaround to frontend path
const myPath = path.join(__dirname, "frontend").replace("\\backend", "");

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
  res.json({ message: "Backend listening Welcome to [ MERN Stack ]" });
});

// Start function
export const start = (port: number): Promise<void> => {
  const server = http.createServer(app);

  return new Promise<void>((resolve, reject) => {
    server.listen(port, resolve);
  });
};