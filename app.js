const Express = require("express");
const router = require("./router");

const app = Express();
const port = process.env.PORT || 5000;

app.use(router);

app.use('/',(req,res)=> {
    res.status(202).send("Enter country code in URL");
})

app.listen(port, () => {
  console.log("Server is listening");
});
