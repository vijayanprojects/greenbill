var mongoose = require('mongoose')
var Schema = mongoose.Schema,
	ObjectId = Schema.Types.ObjectId;

var Category = require('./categories')

var ItemsSchema = new Schema({
	name : String,
	quantity : Number,
	unit_price : Number,
	category : [{type : ObjectId, ref : 'Category'}], /*As category currently has all levels*/
})

ItemsSchema.pre('save', function(next, done) {
	// fill the categories here. So save will automatically
	var name = this.name
	// Need to find a better way
	Category.find({}, function(c, err) {
		if (err)
			return done()
		for (var i = 0; i < c.length; i++) {
			var attr = c[i].attr
			for (var i = 0; i < attr.length; i++) {
				if (this.name.indexOf(attr[i]) != -1){
					this.category.push(c._id)
					return done()
				}
			}
		}
	})
})

module.exports = mongoose.model('Item', ItemsSchema)