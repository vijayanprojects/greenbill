var mongoose = require('mongoose')
var Schema = mongoose.Schema,
	ObjectId = Schema.Types.ObjectId;


var CategoriesSchema = new Schema({
	name : String,
	attr : [String],
	p : String, /*parent*/
	gp : String /*grand parent*/
})

module.exports = mongoose.model('Category', CategoriesSchema)
