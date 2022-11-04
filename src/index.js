const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = 8000;

//built in middleware

const staticPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//to set the view engine
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//template engine route
app.get("/", (req, res) => {
  res.render("index.hbs", { channelName: "jayant" });
});

// app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Hello from the express server");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
