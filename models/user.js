var mongoose = require('mongoose')
var Schema = mongoose.Schema,
	ObjectId = Schema.Types.ObjectId;


var UserSchema = new Schema({
	name : String,
	number : String,
	email : String
})