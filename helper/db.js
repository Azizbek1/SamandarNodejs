const mongoose = require("mongoose");

module.exports = start = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((data) => {
      console.log(`Mongodb Local ulandik!`);
    })
    .catch((err) => {
      console.log(err);
    });
};
