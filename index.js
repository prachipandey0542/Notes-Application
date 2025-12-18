const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  fs.readdir("./files", function (err, files) {
    res.render("index", { files: files });
  });
});

app.post("/create", function (req, res) {
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.details,
    function (err) {
      res.redirect("/");
    }
  );
});

app.get("/files/:file", function (req, res) {
  fs.readFile(`./files/${req.params.file}`, "utf-8", function (err, data) {
    res.render("showData", { filename: req.params.file, filedata: data });
  });
});

app.get("/delete/:filename", function (req, res) {
  fs.unlink(`./files/${req.params.filename}`, function (err) {
    res.redirect("/");
    console.log(`${req.params.filename} Delete Successfully..!`);
  });
});

app.get("/edit/:filename", function (req, res) {
  res.render("editFile", { filename: req.params.filename });
});

app.post("/edit", function (req, res) {
  fs.rename(
    `./files/${req.body.previous}`,
    `./files/${req.body.new}`,
    function (err) {
      res.redirect("/");
    }
  );
});

app.listen(3000, function () {
  console.log("Server Running...");
});
