const mongoose = require('mongoose');
// require('dotenv').config();

// console.log(process.env.DB_URI)
// const connectDatabase=()=>{
// // 	mongoose.connect(process.env.DB_URI);
// }
const connectDatabase = ()=>{
	mongoose.connect(process.env.DB_GLOBAL_URI,{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		family: 4
	}).then(con=>{
		console.log(`MongoDB connected to HOST: ${con.connection.host}`)
	})
}

module.exports = connectDatabase;
