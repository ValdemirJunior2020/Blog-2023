const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  blogPost: { type: mongoose.Schema.Types.ObjectId, ref: 'BlogPost', required: true },
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;
