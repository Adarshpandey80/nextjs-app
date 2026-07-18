
import mongoose , {Schema} from "mongoose";


const registerSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const RegisterModel = mongoose.models.Register || mongoose.model("Register",registerSchema);

export default RegisterModel;