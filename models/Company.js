import mongoose from "mongoose";
import validator from "validator";
import passportLocalMongoose from "passport-local-mongoose";

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  username:{
    type: String,
    required: [true, "Please provide username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
    unique: true,
  },
  password: {
    type: String,
    // required: [true, "Please provide password"],
    minlength: 6,
    select: false,
  },
  ats: {
    type: String,
    required: true,
  },
  role: {
    type: [String],
    required: true,
  },
  fund: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
});

companySchema.plugin(passportLocalMongoose);
export default mongoose.model("Company", companySchema);
