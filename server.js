const express = require("express");

const app = express();
// app.use("/encrption", express.static("encrption"));
// app.use("/static", express.static("encryption"));
app.use(express.static("public"));

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
