const { Schema, model } = require('mongoose');


const userSchema = new Schema(
  {

    username: {
      type: String,
      Unique: true,
      Required: true,
      Trim: true,
    },
    email: {
      type: String,
      required: true,
      Unique: true,
      match: /.+\@.+\..+/,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],


  },
  {
    toJSON: {
        getters: true,
      },
      id: false,
    }  
  );

  const User = model('User', userSchema);


  module.exports = User;

