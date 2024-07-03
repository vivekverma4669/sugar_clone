const mongoose = require('mongoose');
const FaceSchema= mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    type: { type: String, enum: ['Face-gloss', 'liquid-Facestick', 'Face-crayon'] },
    imageUrl: { type: String },
    price :{ type : String},
});
const FaceModel= mongoose.model('Face', FaceSchema);
module.exports = FaceModel;
