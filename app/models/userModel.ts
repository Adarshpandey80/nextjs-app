import mongoose, { Schema } from "mongoose";


const userSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        
    },
    phone: {
        type: Number,
    }
})

const User = mongoose.models.userModel || mongoose.model("userModel", userSchema);


export default User;