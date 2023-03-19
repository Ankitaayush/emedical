const mongoose=require('mongoose');

const Schema = mongoose.Schema

const addressSchema= new Schema({
pincode:{
    type:String,
    required:true
},
city:{
    type:String,
    required:true
},
state:{
    type:String,
    required:true
},
firstname:{
    type:String,
    required:true
},
lastname:{
    type:String,
    required:true
},
address:{
    type:String,
    required:true
},
landmark:{
    type:String,
    required:true
}
})
    const address=new mongoose.model('Address', addressSchema);

module.exports=address;