const Q = require('q');
const Position = require('./positionModel.js');
// this file is not used

const findPosition = Q.nbind(Position.findOne, Position);
const createPosition = Q.nbind(Position.create, Position);
const findAllPositions = Q.nbind(Position.find, Position);

module.exports = {

	// testInsert: () {
	// 	// Position.insert
	// }

	allPositions: (req, res) => {

		findAllPositions({})
			.then((positions) => {
				res.json(positions);
			})
			.fail((err) => {
				console.log(err)
			});
	},

	newPosition: (req, res) => {

		createPosition(req.body.data)

		  .then((createdPosition) => {
		  	if (createdPosition) {
		  		console.log("request", req.body.data);
		  		res.json(createdPosition);
		  	}
		  })
		  .fail((error) => {
		  	console.log(error);
		  });
	}

}
