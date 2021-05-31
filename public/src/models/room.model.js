const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    code : {type:String,required : true,trim:true},
    amount :{type:Number,required:true},
    wing :{type:String,required:true,trim:true},
    pax:{type:Number,required:true},
    categories:[{type:mongoose.Schema.Types.ObjectId,ref:'catogories',required:false}]
});

const Room = mongoose.model('rooms',roomSchema);

module.exports = Room;