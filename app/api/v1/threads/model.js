const mongoose = require('mongoose');

let threadsSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, 'Content is required'],
      maxlength: 500,
    },
    hashTags: [
      {
        type: String,
        maxlength: 50,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Threads', threadsSchema);
