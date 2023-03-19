const mongoose=require('mongoose');
const clinicSchema= new schema({
name:{
    type:String,
},
price:{
    type:String,
},
distance:{
  type:Number,
}
})
    const clinic=new mongoose.model('clinic', clinicSchema);

module.exports=clinic;