const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/bmi-calculator.html", function (request, response) {
  response.sendFile(__dirname + "/bmi-calculator.html");
});

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/");
});

app.post("/", function (request, response) {
  const result = +request.body.num1 + +request.body.num2;
  response.send(`  
    <h1>Calculator</h1>
    <form action="/" method="post">
      <input type="text" name="num1" />
      <input type="text" name="num2" id="" />
      <button type="submit">calc</button>
    </form>
    <h2>The result is ${result}</h2>`);
});

app.post("/bmi-calculator.html", function (request, response) {
  const height = +request.body.height;
  const weight = +request.body.weight;
  const result = (weight / (height * height)).toFixed(0);

  response.send(`     
  <h1>Bmi-calculator</h1>
  <form action="/bmi-calculator.html" method="POST">
    <input type="text" name="weight" placeholder="weight" />
    <input type="text" name="height" placeholder="heigt" />
    <button type="submit">calc</button>
  </form>
  <h2>Your bmi is : ${result}</h2>`);
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
