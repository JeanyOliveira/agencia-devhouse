const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (request, response) => {
    response.redirect("/home");
});

app.get("/home", (request, response) => {
    response.sendFile(path.join(__dirname, "views", "home.html"));
});
app.get("/news", (request, response) => {
    response.redirect("/blog");
});
app.get("/blog", (request, response) => {
    response.sendFile(path.join(__dirname, "views", "blog.html"));
});
app.get("/manutencao", (request, response) => {
    response.sendFile(path.join(__dirname, "views", "manutencao.html"));
});
app.listen(13000, () => {
    console.log("O servidor está rodando na porta 13000");
});