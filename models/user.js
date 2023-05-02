const { Schema, Types } = require('mongoose');


const assignmentSchema = new Schema(
    {

        username:{
        type:String,
         Unique:true,
         Required: true,
         Trim: true,
        },
       email:{
        type:String,
        required: true,
         Unique:true,
         match: /.+\@.+\..+/,
      },
      * `thoughts`
        * Array of `_id` values referencing the `Thought` model
      
      * `friends`
        * Array of `_id` values referencing the `User` model (self-reference)
    
       
       }
       
  );









* `username`
  type:String
  * Unique
  * Required
  * Trimmed

* `email`
  * String
  * Required
  * Unique
  * Must match a valid email address (look into Mongoose's matching validation)

* `thoughts`
  * Array of `_id` values referencing the `Thought` model

* `friends`
  * Array of `_id` values referencing the `User` model (self-reference)