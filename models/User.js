import mongoose from 'mongoose';
const {Schema} = mongoose;

const userSchema = new Schema({
    name: {
       type: String,
<<<<<<< Updated upstream
       required: [true, 'Please provide name'],
       minlength: 3,
       maxlength: 20,
       trim: true,
    },
    email: {
        type:String,
        required: [true, 'Please provide email'],
=======
       required:[true,'Please provide name'],
       minlength:3,
       maxlength:20,
       trim:true,
    },
    email: {
        type:String,
        required:[true,'Please provide email'],
>>>>>>> Stashed changes
        unique:true
    },
    password:{
        type:String,
<<<<<<< Updated upstream
        required: [true, 'Please provide password'],
        minlength: 6,
=======
        required:true,
        minlength:6
>>>>>>> Stashed changes
    },
    role:{
        type:String,
        required:true
    },
});

const model = mongoose.model('User', userSchema);

// export const schema = model.schema;
export default model;
