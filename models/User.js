import mongoose from 'mongoose';
import validator from 'validator';
import passportLocalMongoose from 'passport-local-mongoose';
import findOrCreate from 'mongoose-findorcreate';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide username'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email',
    },
    unique: true,
  },
  userType: {
    type: String,
    enum: ['recruiter', 'applicant'],
    required: true,
  },
  googleId: String,
  facebookId: String,
  linkedinId: String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);
export default mongoose.model('User', userSchema);
