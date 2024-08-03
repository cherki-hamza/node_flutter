const express = require('express');
const app = express();
const cors = require('cors');

const port = 3000;

app.use(cors());

app.get("/" , (req,res) => {
  res.writeHead(200 , {"Content-Type":"text/html"});
  res.end(`<center><h1 style='color:red;margin-top:100px'>hello from cherki hamza developer web fullstack</h1></center>`);
});

app.get("/api/data",(req,res)=>{

    const data = {
        success: true,
         message: "hello from cherki hamza",
        username: "cherkihamza",
        email: "user@example.com",
        country: "morocco",
        password: "123456789"
    };

 res.json({
     data
 });
});

app.listen(port , () =>{
 console.log(`server running on https://localhost:${port}`);
});