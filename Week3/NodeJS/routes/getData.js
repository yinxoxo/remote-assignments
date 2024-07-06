//Assignment2
const express = require("express");
const router = express.Router();

router.get("/getData", (req, res) => {
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

module.exports = router;
