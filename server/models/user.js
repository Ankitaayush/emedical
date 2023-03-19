const mongoose=require('mongoose');
const schema=mongoose.Schema;

const userSchema= new schema({
    phone:{
        type:String
    },
    email:{
        type:String
    }
}
);
const User=new mongoose.model('User', userSchema);

module.exports=User;