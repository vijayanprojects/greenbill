var mongoose = require('mongoose')
var Schema = mongoose.Schema,
	ObjectId = Schema.Types.ObjectId;



var BillSchema = new Schema({
	items : [{type : ObjectId, ref : 'Item'}],
	billCategories : [{type : ObjectId, ref : 'Category'}], /*Top 3 categories based on quantity for now*/
	billtotal : Number,
	user : {type : ObjectId, ref : User},
	billno : String,
	raw : String
})


module.exports = mongoose.model('Bill', BillSchema)