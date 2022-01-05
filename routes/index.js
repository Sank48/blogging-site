const express = require('express')
const app = express()
const http = require('http');
const path = require('path');

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
app.use(logger);

app.use(express.static(staticPath));
// console.log(staticPath);

app.get('/',(req,res)=>{
  res.sendFile(root)
})

const server = http.createServer(app);

server.listen(port, host, ()=>{
  console.log(`Server running at http://${host}:${port}`);
});
