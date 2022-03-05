const mongoose = require('mongoose');

const connectDatabase = ()=>{
	mongoose.connect('mongodb+srv://blogmongo:blogmongo%4048@cluster0.syqoy.mongodb.net/blog?retryWrites=true&w=majority',{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		family: 4
	}).then(con=>{
		console.log(`MongoDB connected to HOST: ${con.connection.host}`)
	})
}

module.exports = connectDatabase;