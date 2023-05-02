const { Schema, Types } = require('mongoose');
const reactionSchema = require('./Reaction');


const thoughtSchema = new Schema(
    {

        thoughtText:{
            type: String,
           Required: true,
           maxlength: 200,
           minlength: 1,
            },
           createdAt:{
            type: Date,
            default: Date.now
           },
           username:{
            type:String,
            Required: true
           },
           reactions:[reactionSchema]
       
       
       },
       {
        toJSON: {
            getters: true,
          },
          id: false,
        }
  );
  const Thought = model('Thought', thoughtSchema);


  module.exports = Thought;

