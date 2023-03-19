const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const customerSchema= new Schema({
name:{
    type:String,
    required:true
},
dob:{
    type:String,
    required:true
},
age:{
    type:Number,
    required:true
},
gender:{
    type:String,
    required:true
},
mobile:{
    type:String,
    required:true
}
})
    const customer=new mongoose.model('Customer', customerSchema);

module.exports=customer;