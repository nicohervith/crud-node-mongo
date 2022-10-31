//Datos relacionados con los usuarios

const { Schema, model } = require("mongoose");

const bcrypt = require("bcrypt.js");

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.encryptPassword = async (password) => {
  // Para cifrar las contraseñas y que nadie pueda acceder a estos datos
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

//Debo crear un método para comparar las contrasñeas que ingresa el usuario con la cifrada

UserSchema.methods.matchPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = model("User", UserSchema);
