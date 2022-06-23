import mongoose from 'mongoose'

const goalsSchema = mongoose.Schema(
  {
    text: {
    type: String,
    required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('goalsSchema', goalsSchema);