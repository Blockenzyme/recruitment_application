import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    recruiterId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    status: {
      type: String,
      enum: ['applied', 'shortlisted', 'accepted', 'rejected'],
      default: 'applied',
      required: true,
    },
    dateOfApplication: {
      type: Date,
      default: Date.now,
    },
    dateOfJoining: {
      type: Date,
      validate: [
        {
          validator(value) {
            return this.dateOfApplication <= value;
          },
          msg: 'dateOfJoining should be greater than dateOfApplication',
        },
      ],
    },
    sop: {
      type: String,
      validate: {
        validator(v) {
          return v.split(' ').filter((ele) => ele !== '').length <= 250;
        },
        msg: 'Statement of purpose should not be greater than 250 words',
      },
    },
  },
  { collation: { locale: 'en' } },
);

export default mongoose.model('application', applicationSchema);
