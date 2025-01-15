// Core Modules
const path = require("path");

// External Module
const express = require("express");
const bodyParser = require("body-parser");

// Local Module
const { hostRouter } = require("./routers/hostRouter");
const storeRouter = require("./routers/storeRouter");
const rootDir = require("./util/path-util");
const errController = require("./controllers/errorController");

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", storeRouter);
app.use("/host", hostRouter);

app.use(errController.get404);

const PORT = 5173;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});