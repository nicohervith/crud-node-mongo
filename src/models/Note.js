const { Schema, model } = require("mongoose");

// Para detallar que es lo que voy a guardar en la base de datos
const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    //Esto me permite almacenar cuando fue creado y cuando fue actualizado por ultima vez
    timestamps: true,
  }
);

//A partir del esquema creo el modelo

module.exports = model("Note", noteSchema);
