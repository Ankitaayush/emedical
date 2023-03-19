const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const userSchema= new Schema({
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String
    }
}
);

const User=new mongoose.model('User', userSchema);

module.exports=User;