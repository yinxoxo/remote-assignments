const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("<h1>Hello, My Server!</h1>");
});

//Assignment 2
app.get("/getData", (req, res) => {
  const number = req.query.number;

  if (number === undefined) {
    res.send("Lack of Parameter");
  } else if (
    //不是數字、整數、正數
    !Number.isInteger(Number(number) || number <= 0 || isNaN(number))
  ) {
    res.send("Wrong Parameter");
  } else {
    const num = parseInt(number);
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    res.send(`Sum is ${sum}`);
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

//Assignment 3
app.use(express.static("public"));
