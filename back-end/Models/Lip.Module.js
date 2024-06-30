const mongoose =require('mongoose');
const LipSchema= mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    type: { type: String, enum: ['lip', 'brush', 'skincare', 'masks', 'trending'] },
    imageUrl: { type: String }
});
const LipModel= mongoose.model('lip', LipSchema);
module.exports = LipModel;

