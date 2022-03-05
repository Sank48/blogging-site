const express = require('express')
const app = express()
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan')
const connectDB = require('./database')
const Blog = require('./models/blog')
const User = require('./models/user')
var exec = require('child_process').exec;

const host = "localhost";
const port = "3000";
const staticPath = path.join(__dirname,"../");
// app.use((req, res, next) =>{
//   res.statusCode = 200;
//   res.send('index.html');
// });

// const logger=(req,res,next)=>{   // Custom logger
//   console.log(req.method,req.path, '-', req.ip );
//   next();
// }

connectDB()
// a logger to log method, path and ip
app.use(logger('dev'));  // can use other predefined formats like combined,common,dev,short,tiny
app.use(express.static(staticPath));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
// console.log(staticPath);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
  res.sendFile(root)
})

app.get('/getBlogs', async(req,res)=>{
  // const blog = await Blog.find({});
  // console.log(blog.map(blogs=>blogs));
  // for item in blog{
  //   console.log()
  // }
  // blog.exec((err,data)=>{
  //   if(err) throw err;
  //   res.render('dispBlogs',{data: blog});
  // })
  // res.render('dispBlogs',{title:blog.title, content:blog.content});
  // res.status(201).json({
  //   success: true,
  //   blog
  // })
  Blog.find((err, blog) => {
    if(!err){
      // console.log(blog[0].title);
      res.render('dispBlogs',{data:blog})
    }else{
      console.log("Failed to retrive data.")
    }
  })
})

app.post('/signin',(req,res,next)=>{
  res.json({
    "Email": req.body["email"],
    "Password": req.body["password"]
  });
  return
})
app.post('/signup', async (req,res,next)=>{
  const user = await User.create(req.body); 
  // console.log(req.body);
  res.status(201).json({
    success: true,
    user
  });
  
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

http.createServer(app).listen(port, host, ()=>{
  console.log(`Server running at http://${host}:${port}`);
});
