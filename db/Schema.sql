DROP DATABASE IF EXISTS  Social_db;

-- CREATE DATABASE
CREATE DATABASE Social_db;



 CREATE table reactionId(
   Use Mongooss ObjectId data type
   Default value is set to a new ObjectId
);
  CREATE table reactionBody(
   String
   Required
   280 character maximum
  );
 CREATE table  username(
   String
   Required
 );
  CREATE table createdAt(
  Date
   Set default value to the current timestamp
   Use a getter method to format the timestamp on query
  );