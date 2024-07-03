const mongoose = require('mongoose');
const EyeSchema= mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    type: { type: String, enum: ['Eye-kajal', 'Eye-liner', 'Eye-mascara'] },
    imageUrl: { type: String },
    price :{ type : String},
});
const EyeModel= mongoose.model('Eye', EyeSchema);
module.exports = EyeModel;