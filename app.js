const express = require('express');
const app = express();
const cors = require('cors');

const port = 3000;

app.use(cors());

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