import mongoose from "mongoose";

// Para detallar que es lo que voy a guardar en la base de datos
const NoteSchema = new mongoose.Schema(
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

//Mongoose va a ser que mi db se llame Note
export default mongoose.model("Note", NoteSchema);
