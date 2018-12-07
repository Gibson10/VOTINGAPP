var passportLocalMongoose = require('passport-local-mongoose'),
    mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
   hasConfirmed: String,
   confirmUrl: String,
   username: {
       type: String,
       unique: true
   },
   name: {
       type: String,
       unique: true
   },
   password: String,
   randomUid: String,
   date : {
      type: Date,
      default: Date.now
   },
   chairman : String,
//    chairlady : String,
//    secretary : String,
//    academic_rep : String,
//    clubs_rep : String,
//    entertainment_rep : String,
//    it_rep : String,
//    sports_rep : String,
//    wellness_rep : String,
//    treasurer : String,
//    honor_council : String,
   country : String,
   hall : String,
   resetPasswordToken: String,
   hasVoted : Boolean,
   hash_id : String,
   resetPasswordExpires: Date
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);