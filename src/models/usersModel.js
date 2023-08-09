const dbpool = require("../config/database");

const getAllUsers = () => {
  const sqlQuery = "SELECT * FROM users;";

  return dbpool.execute(sqlQuery);
  //query lama
  //   dbpool.execute(sqlQuery, (err, rows) => {
  //     if (err) {
  //       return res.json({ message: "connection failed" });
  //     }
  //     res.json({
  //       message: "connection succesfull",
  //       data: rows,
  //     });
  //   });
};

const createNewUser = (body) => {
  const sqlQuery = `INSERT INTO users (name, email, addres) 
                    VALUES ('${body.name}', '${body.email}', '${body.addres}');`;
  return dbpool.execute(sqlQuery);
};

const updateUser = (body, idUser) => {
  const sqlQuery = `UPDATE users 
                SET name='${body.name}',email='${body.email}', addres='${body.addres}' 
                WHERE id=${idUser}`;
  return dbpool.execute(sqlQuery);
};

const deleteUser = (idUser) => {
  const sqlQuery = `DELETE FROM users WHERE id=${idUser}`;
  return dbpool.execute(sqlQuery);
};

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser };
