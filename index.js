const User = require("./user");
const sequelize = require("./db");

const app = require("express")();

const port = 3040;

(async () => {
  await sequelize.authenticate();
})();

app.get("/", (req, res) => {
  res.send("Welcome to connection pool poc");
});

let requstNum = 0;

app.get("/users", async (req, res) => {
  console.log("Request Received", ++requstNum);
  const users = await User.findAll();

  res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
