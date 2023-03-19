const mongoose=require('mongoose');

const Schema = mongoose.Schema

const clinicSchema= new Schema({
name:{
    type:String,
    required:true
},
price:{
    type:String,
    requierd:true
},
distance:{
  type:Number,
  required:true
}
})
    const clinic=new mongoose.model('Clinic', clinicSchema);

module.exports=clinic;