import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: [80, "name can't exceed 80 characters"]
    },
    email: {
        type: String,
        required: true,
        maxLength: [100, "email can't exceed 500 characters"]
    },
    otpSpin: {
        type: String,
        required: true,
        
    },
})

export default mongoose.model('User', userSchema, 'userOtp')