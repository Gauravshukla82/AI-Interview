import mongoose from "mongoose";
const FeedbackSchema = mongoose.Schema({
    email: { required: true, type: String },
    question: { required: true, type: String },
    answer: String,
    feedback: { required: true, type: String },
    // attempt: { required: true, type: Number }
})
const FeedbackModel = mongoose.model("feedback", FeedbackSchema)
export default FeedbackModel