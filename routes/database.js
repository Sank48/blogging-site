const mongoose = require('mongoose');

const connectDatabase = ()=>{
	mongoose.connect('',{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		family: 4
	}).then(con=>{
		console.log(`MongoDB connected to HOST: ${con.connection.host}`)
	})
}

module.exports = connectDatabase;
