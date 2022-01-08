const express = require('express')
const app = express()
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const connectDB = require('./database')
const Blog = require('./models/blog')

const host = "localhost";
const port = "3000";
const staticPath = path.join(__dirname,"../");
// app.use((req, res, next) =>{
//   res.statusCode = 200;
//   res.send('index.html');
// });

const logger=(req,res,next)=>{
  console.log(req.method,req.path, '-', req.ip );
  next();
}

connectDB()
// a logger to log method, path and ip
app.use(logger);
app.use(express.static(staticPath));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
// console.log(staticPath);

app.get('/',(req,res)=>{
  res.sendFile(root)
})


app.post('/signin',(req,res,next)=>{
  res.json({
    "Email": req.body["email"],
    "Password": req.body["password"]
  });
  return
})
app.post('/signup',(req,res,next)=>{
  res.json({
    "Full name": req.body["fullname"],
    "Username":req.body.username,
    "Email": req.body["email"],
    "Password":req.body.passwords,
    "Confirm Password": req.body.Cpasswords
  });
  return
})
app.post('/blog/new', async (req, res,next)=>{
  req.body.time = new Date().toString()
  const blog =  await Blog.create(req.body);
  // console.log(req.body)
  res.status(201).json({
    success: true,
    blog
  })
})

const server = http.createServer(app);

server.listen(port, host, ()=>{
  console.log(`Server running at http://${host}:${port}`);
});
