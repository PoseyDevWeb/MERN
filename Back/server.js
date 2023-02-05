const app = require("./App");

require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is listen in port ${port}`);
});
