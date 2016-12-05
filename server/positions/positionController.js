const Q = require('q');
const Position = require('./positionModel.js');

const findPosition = Q.nbind(Position.findOne, Position);
const createPosition = Q.nbind(Position.create, Position);
const findAllPositions = Q.nbind(Position.find, Position);

module.exports = {

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
			let role = req.body.role;
			let companyName = req.body.companyName;

			findPosition({role: role, companyName: companyName})
				.then((match) => {
					if(match){
						res.send(match)
					}
				})
	}

}