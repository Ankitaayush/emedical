const mongoose=require('mongoose');
const customerSchema= new schema({
name:{
    type:String,
},
dob:{
    type:String,
},
age:{
    type:Number,
},
gender:{
    type:String,
},
mobile:{
    type:String,
}
})
    const customer=new mongoose.model('customer', customerSchema);

module.exports=customer;