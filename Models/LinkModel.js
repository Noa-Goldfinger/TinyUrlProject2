// import mongoose from "mongoose";

// const linkSchema = new mongoose.Schema({
//     originalUrl: {
//         type: String,
//         required: true,
//         validate: {
//             validator: function(v) {
//                 return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
//             },
//             message: props => `${props.value} is not a valid URL!`
//         }
//     },
//     clicks: [
//         {
//             _id: 0,
//             insertedAt: new Date(),
//             ipAddress: "0.0.0.0"
//         }
//     ]
// });
// export default mongoose.model("links", linkSchema);

import mongoose from "mongoose";

// סכמה לקליקים
const clickSchema = new mongoose.Schema({
    insertedAt: {
        type: Date,
        default: Date.now,
    },
    ipAddress: {
        type: String,
        required: true,
        default: "0.0.0.0"
    },
    targetParamValue: String
}); // לא מציינים { _id: false }, כך ש-Mongoose ייצור _id אוטומטית
const targetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "",
    },
    value: {
        type: String,
        required: true,
        default: "",
    }
});
// סכמה לקישורים
const linkSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    clicks: {
        type: [clickSchema],
        default: [],
    },
    targetParamName: {
        type: String,
        default: "t",
    },
    targetValues: {
        type: [targetSchema],
        default: [],
    }
});

export default mongoose.model("links", linkSchema);
