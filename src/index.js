const express = require("express");
const app = express();
const morgan = require("morgan"); // para gerar log no console
const cors = require("cors");

const routes = require("./routes");

app.use(express.json()); // lida com o body
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(routes);

const port = 3333;

app.listen(port, () => console.log(`Server are listen to port ${port}`));
