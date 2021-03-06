const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");
const { routes } = require("./src/routes");
const path = require("path");
const fs = require("fs");

const PORT = 3000;
//подключение к бд

try {
  mongoose.connect("mongodb://localhost:27017/etutorial", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
} catch (err) {
  console.log("ошибка сервера");
}

//инициализация приложения

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/', (_, res) => res.sendFile(join(__dirname + '/index.html')));

app.use(`/api/v1/users`, require(`./src/routes/users`));
app.use(`/api/v1/tutorials`, require(`./src/routes/tutorials`));
app.use(`/api/v1/sections`, require(`./src/routes/sections`));
app.use(`/api/v1/quiz`, require(`./src/routes/quiz`));

// объявим наши  роуты

http.createServer({}, app).listen(PORT);

console.log(`Server running at ${PORT}`);
