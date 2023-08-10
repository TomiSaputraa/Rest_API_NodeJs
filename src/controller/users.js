const usersModel = require("../models/usersModel");

const getAllUsers = async (req, res) => {
  // trycatch digunakan untuk menangkap error di database
  try {
    // [data] sebenarnya berisi [rows, field] karna kita cuma butuh data maka kita cuma butuh rows
    const [data] = await usersModel.getAllUsers();

    res.json({
      message: "get all user from controller succes",
      data: data,
    });
  } catch (error) {
    res.status(500).json({ message: "server error", serverMesage: error });
  }
  // // dummy data
  // const data = {
  //   id: "1",
  //   name: "romass",
  //   email: "tomas@gmal.com",
  // };
};

const createNewUsers = async (req, res) => {
  const { body } = req;
  // response untuk bad request
  if (!body.email || !body.name || !body.addres) {
    return res.status(400).json({
      message: "Anda mengirimkan data yang salah",
      // data: null,
    });
  }

  try {
    await usersModel.createNewUser(body);
    res.status(201).json({
      message: "create new user succes",
      data: body,
    });
  } catch (error) {
    res.status(500).json({ message: "server error", serverMesage: error });
  }
};

// update
const updateUser = async (req, res) => {
  // id di dapatkan dari blueprint router jika blueprint route berubah id dibawah juga harus berubah
  const { idUser } = req.params;
  const { body } = req;
  try {
    await usersModel.updateUser(body, idUser);
    console.log("id User : ", idUser);
    res.json({
      message: "update user succes form controller",
      data: {
        idUser: idUser,
        body: body,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "server error", serverMesage: error });
  }
};

const deleteUser = async (req, res) => {
  const { idUser } = req.params;
  try {
    await usersModel.deleteUser(idUser);
    res.json({
      message: "Delete user succes",
    });
  } catch (error) {
    res.status(500).json({ message: "server error", serverMesage: error });
  }
};

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUser,
  deleteUser,
};
