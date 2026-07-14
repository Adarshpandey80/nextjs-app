import mongoose, { Schema } from "mongoose";


const userSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        
    },
    
})

const User = mongoose.models.userModel || mongoose.model("userModel", userSchema);
//"If userModel already exists, use it. Otherwise, create it."


export default User;