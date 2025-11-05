import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});

export default mongoose.models.Contact || mongoose.model("Contact", contactSchema);
