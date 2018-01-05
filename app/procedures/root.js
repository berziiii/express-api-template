'use strict';

const getIndexContent = (req, res) => {
    // let query = 'SELECT * FROM dbo.index';
    // knex.raw(query)
	// .on('query', function(data) {
	// 	// console.log(data)
	// })
	// .then(function(rows){
	// 	res.json(rows);
	// })
	// .catch(function(err){
	// 	console.error(err);
    // });

    // TEMPORARY RESPONSE
    res.json({
        index: {
            title: 'Express API Template',
            environment: req.app.get('env')
        }
    })
};

module.exports = {
    getIndexContent,
}