var mysql = require('mysql');
var pool = mysql.createPool({
	connectionLimit	: 10,
	host  			: 'classmysql.engr.oregonstate.edu',
	user  			: 'cs290_wetekamz',
	password		: '5085',
	database		: 'cs290_wetekamz'
});
module.exports.pool = pool;