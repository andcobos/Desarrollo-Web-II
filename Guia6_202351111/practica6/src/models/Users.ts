import mongoose, { Schema } from "mongoose";

//Define la interfaz para el usuario, asegurando el tipado de TypeScript
interface IUser {
    name:string;
    email:string;
    password:string;
    username:string; 
}

//Define el esquema del usuario en la base de datos
const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true, //El nombre es obligatorio
        trim: true, //Elimina espacios en blanco al inicio y al final
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true, //Garantiza que el correo sea unico
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true, //debe ser unico para evitar duplicados
        trim: true,
        lowercase: true, //Convierte el valor a minúsculas
    },
});

//crea el modelo de usuario basasdo en el esquema
const User = mongoose.model("User", userSchema);

export default User;