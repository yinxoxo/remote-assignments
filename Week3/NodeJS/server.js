const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const port = 3000 || process.env.PORT;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const indexRoutes = require("./routes/index");
const getDataRoutes = require("./routes/getData");
const myNameRoutes = require("./routes/myName");

app.use("/", indexRoutes);
app.use("/", getDataRoutes);
app.use("/", myNameRoutes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
