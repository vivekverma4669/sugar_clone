const mongoose = require('mongoose');
const LipSchema= mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    type: { type: String, enum: ['lip-gloss', 'liquid-lipstick', 'lip-crayon'] },
    imageUrl: { type: String },
    price :{ type : String},
});

const LipModel= mongoose.model('lips', LipSchema);
module.exports = LipModel;



