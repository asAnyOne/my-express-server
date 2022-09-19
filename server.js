const express = require("express");
const bodyParser = require("body-parser"); //formDataBodyParser

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function (request, response) {
  response.send(
    ` <h1>Thank you for message , your result is  
      ${+request.body.num1 + +request.body.num2}</h1>`
  );

  console.log(request.body);
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
