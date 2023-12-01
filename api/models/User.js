const mongoose=require('mongoose');
const {Schema}=mongoose;

const userSchema=new Schema({
    name:String,
    email:{type:String,unique:true}, 
    password:String,
    userType: { type: String, enum: ['donor', 'receiver'], default: 'donor' }, // userType field added
});

const UserModel=mongoose.model('User',userSchema);



module.exports=UserModel; 