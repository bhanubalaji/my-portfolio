var express = require('express')
var cors =require("cors")
var bodyParser =require("body-parser")
var mongoose =require("mongoose")
// mongoose.set('strictQuery', true);
var path =require("path")
var app = express();
// var ObjectID = require('mongodb').ObjectId

app.use (cors({
    credentials:true,
    origin:["http://localhost:4200"]
      
  }));
  console.log(" ok")
  app.use ("*",(req, res, next) =>{
    res.header("Access-Conssstrol-Allow-Orgin", "http://localhost:4200");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PATCH< DELETE" );
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // console.log("cores ok")
    next();
  })
  
// app.use(express.static("upload"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}))  
  
  mongoose.connect('mongodb://127.0.0.1:27017/bhanu',{
      useNewUrlParser: true,
      useUnifiedTopology: true
  },{poolSize: 10});
  var db = mongoose.connection;
   db.on('error',()=>console.log("error in connecting database"));
   db.once('open',()=>console.log("Connected to Database"))
   db.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });
  

app.post('/api/feedbackdata',async(req,res)=>{
    console.log(req.body)
    var y = await db.collection("feedbackdata").insertOne(req.body.x)
    console.log(y)
    if(y.acknowledged=true){
        res.send({result:true})

    }
})


app.post('/api/requirementdata',async(req,res)=>{
  console.log(req.body)
  var y = await db.collection("requirementdata").insertOne(req.body.x)
  console.log(y)
  if(y.acknowledged=true){
      res.send({result:true})

  }
})
  app.use(express.static(path.join(__dirname,'dist/myportfolio')));
  app.get('*', (req, res) => {
   res.sendFile('index.html', {root: 'dist/myportfolio'});
  })


 

app.listen(3000,()=>{
console.log('listen on 3000 port')
})