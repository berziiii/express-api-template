'use strict'

const getAllExamples = (req, res) => {
    // let query = 'SELECT * FROM dbo.examples';
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
    res.json([
        {
            title: 'Example 1',
            content: 'asdjandjkandw'
        },
        {
            title: 'Example 2',
            content: 'asdjandjkandw'
        },
        {
            title: 'Example 3',
            content: 'asdjandjkandw'
        }
    ])
};

module.exports = {
    getAllExamples,
};