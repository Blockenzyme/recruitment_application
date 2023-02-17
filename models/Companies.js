import mongoose from 'mongoose';
const {Schema} = mongoose;

const companyuserSchema = new Schema({
    name: {
       type: String,
       required:[true,'Please Provide name']
    },
    email: {
        type:String,
        required:[true,'Please Provide email'],
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
        type:Number,
        required:true
    }
    
});

const model = mongoose.model('User', companyuserSchema);

// export const schema = model.schema;
export default model;