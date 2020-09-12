import express from "express";
import http from "http";
import path from "path";

// Express app initialization
const app = express();

// Template configuration
app.set("view engine", "ejs");
app.set("views", "public");

// Static files configuration
app.use("/assets", () => {
  let myPath = path.join(__dirname, "frontend");
  myPath = myPath.replace("\\backend", "");
  express.static(myPath);
});

// Controllers
app.get("/*", (req, res) => {
  console.log("GET HERE ::: ");
  res.render("index");
});

// Start function
export const start = (port: number): Promise<void> => {
  const server = http.createServer(app);

  return new Promise<void>((resolve, reject) => {
    server.listen(port, resolve);
  });
};
