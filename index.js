const express = require('express')
const app = express()
const port = 5000
//const bodyParser = require('body-parser')

app.use(express.json())

app.get('/', (req,res) => {
    res.send("Welcome To My Calculator API")
})

app.get('/sum', (req,res) =>{
    console.log(req.body);
    let x = req.body.firstNum;
    let y = req.body.secondNum;
    let z = x+y;
    if(z==0){
        res.status(200).send({"Sum":z});
    }
    if(!z){
        res.status(400).send({"Error":"Request does not have numbers"});
    }
    else{
        res.status(200).send({"Sum":z});
    }
})

app.get('/diff', (req,res) =>{
    console.log(req.body);
    let x = req.body.firstNum;
    let y = req.body.secondNum;
    let z = x-y;
    console.log(z);
    if(z==0){
        res.status(200).send({"Difference":z});
    }
    else if(!z){
        res.status(400).send({"Error":"Request does not have numbers"});
    }
    else{
        res.status(200).send({"Difference":z});
    }
})

app.get('/prod', (req,res) =>{
    console.log(req.body);
    let x = req.body.firstNum;
    let y = req.body.secondNum;
    let z = x*y;
    if(z==0){
        res.status(200).send({"Product":z});
    }
    if(!z){
        res.status(400).send({"Error":"Request does not have numbers"});
    }
    else{
        res.status(200).send({"Product":z});
    }
})

app.get('/div', (req,res) =>{
    console.log(req.body);
    let x = req.body.firstNum;
    let y = req.body.secondNum;
    let z = x/y;
    console.log(z);
    if(y==0){
        res.status(400).send({"Error":"Can't be divided by 0"});
    }
    else if(z==0){
        res.status(200).send({"Quotient":z});
    }
    else if(!z){
        res.status(400).send({"Error":"Request does not have numbers"});
    }
    else{
        res.status(200).send({"Quotient":z});
    }
})


app.listen(port, () => {
    console.log("API Server is running...")
})

