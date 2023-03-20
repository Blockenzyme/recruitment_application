import mongoose from "mongoose";
import validator from "validator";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new mongoose.Schema({
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
  // password: {
  //   type: String,
  // },
  userType: {
    type: String,
    enum: ["recruiter", "applicant"],
    required: true,
  },
});

userSchema.plugin(passportLocalMongoose);
export default mongoose.model("User", userSchema);
