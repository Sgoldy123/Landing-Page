const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    amount:{type:String,required:true},
    loantype:{type:String,required:true},
    phone:{type:String,required:true},
})

mongoose.model('User',userSchema);