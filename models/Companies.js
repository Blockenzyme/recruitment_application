import mongoose from 'mongoose';
const {Schema} = mongoose;

const companyuserSchema = new Schema({
    name: {
       type: String,
       requiredd:true,
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    ats:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    fund:{
        type:int,
        required:true
    },
    validation:{
        type:String,
        required:true
    }
});

const model = mongoose.model('User', companyuserSchema);

// export const schema = model.schema;
export default model;