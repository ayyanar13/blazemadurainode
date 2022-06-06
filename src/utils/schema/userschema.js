import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    username: { type: String, trim: true },
    email: { type: String, lowercase: true, index: { unique: true }, trim: true },    
    phone: {
        code: String,
        number: String
    },  
    name: {
        first_name: String,
        last_name: String
    },    
    status: { type: Number, default: 1 }  
  
}, {
    timestamps: true,
    versionKey: false
})



export default mongoose.model('users', userSchema, 'users');