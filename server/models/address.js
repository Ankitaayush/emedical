const mongoose=require('mongoose');
const addressSchema= new schema({
pincode:{
    type:String,
},
city:{
    type:String,
},
state:{
    type:String,
},
firstname:{
    type:String,
},
lastname:{
    type:String,
},
address:{
    type:String,
},
landmark:{
    type:String,
}
})
    const address=new mongoose.model('address', addressSchema);

module.exports=address;