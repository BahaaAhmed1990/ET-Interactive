const path = require("path");
const express = require("express");
const app = express();

console.log(__dirname);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// serve frontend
app.use(express.static(path.join(__dirname, "front")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "front", "index.html"));
});

app.get("/heyazah-gate", (req, res) => {
  res.sendFile(path.resolve(__dirname, "front", "heyazah.html"));
});

app.get("/lex", (req, res) => {
  res.sendFile(path.resolve(__dirname, "front", "lex.html"));
});

app.get("/sigma", (req, res) => {
  res.sendFile(path.resolve(__dirname, "front", "wave.html"));
});

app.get("/business-yard", (req, res) => {
  res.sendFile(path.resolve(__dirname, "front", "yard.html"));
});

app.get("/sky-line", (req, res) => {
  res.sendFile(path.resolve(__dirname, "front", "skyline.html"));
});
// app.use(notFound);
// app.use(errHandler);

app.listen(5533, () => console.log(`server is running`));
