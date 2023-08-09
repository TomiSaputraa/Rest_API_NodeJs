const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const userRoutes = require("./routes/users");
const usersMidlleware = require("./middleware/usersMiddleware");

const app = express();

// express.use bisa menggunakan semua method HTPP CRUD
// express.use biasanya digunakan sebagai middleware
// fungsi ini digunakan untuk middleware
app.use("/", usersMidlleware);
app.use(express.json()); //agar bisa request body dalam bentu json
app.use("/asset", express.static("public/img")); //agar folder public bisa di akses oleh client

// jadi semua api yang memanggil path "/users" akan masuk kesini
// jadi kita sudah punya grup sebuah path users
app.use("/users", userRoutes);

// app.get("/", (req, res) => {
//   res.send(`hello GET method`);
// });

//check connection mysql

app.listen(PORT, () => {
  console.log(`server berhasil di running di port ${PORT}`);
});
