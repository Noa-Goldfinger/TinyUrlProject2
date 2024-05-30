import mongoose from "mongoose";

// יצירת הסכמה של המשימה (Task)
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "",
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    links: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Link'
    }], // שימוש ב-ObjectId להפניה לקישורים
});

// יצוא המודל
export default mongoose.model("users", UserSchema);
