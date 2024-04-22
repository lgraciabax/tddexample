const mongoose= require("mongoose");

const TodoSchema= new mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        required: true
    }
});

const TodoModel= mongoose.model("Todo", TodoSchema);

module.exports=TodoModel;