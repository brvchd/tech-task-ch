const Express = require("express");
const router = require("./router");

const app = Express();

app.use(router);

app.listen(5000, () => {
  console.log("Server is listening on localhost:5000");
});
