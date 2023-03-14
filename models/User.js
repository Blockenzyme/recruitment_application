import mongoose from "mongoose";
import validator from "validator";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  username: {
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
  role: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
});

userSchema.plugin(passportLocalMongoose);
export default mongoose.model("User", userSchema);
