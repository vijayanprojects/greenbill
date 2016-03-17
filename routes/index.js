var express = require('express');
var router = express.Router();
var Category = require('../models/categories')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
	Format : {
		name : Specific Name, 
		attr : Regex array { eg : fairness cream, etc}
		p : 'Parent category name', 
		gp : 'Grand Parent name'
	}

	TODO : This will be changed eventually
 */
router.post('/categories', function(req, res) {
	var data = req.data
	if (!data || data.length == 0)
		return res.json({message : 'Missing data'})

	var counter = data.length
	for (var i = 0; i < data.length; i++) {
		var c = new Category(data[i])
		c.save(function(err, status) {
			if (err) 
				return console.log('Error : ' + err)
			counter--
			if (!counter)
				return res.json({message : 'Success'})
		})
	}
})

/*
 format : {
	user : {
		name : '',
		number : ''
	},
	billno : String, // other bill related info needs to be updated
	items : [{
		name : '',
		quantity : '',
		unit_price : ''
	}]
 }
 */

router.post('/bill', function(req, res) {
	// Need to create items.
	res.json({message : 'Success'})
})

module.exports = router;
