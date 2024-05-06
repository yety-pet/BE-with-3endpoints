const express = require("express")
const dotenv = require("dotenv")
dotenv.config()

serva = express()

const PORT = process.env.PORT || 5000
const Database_Password = process.env.DbPassword

serva.listen(PORT, () =>{
    console.log (`server is running now .... on ${PORT}`)
})

serva.get("/post", (req, res)=>{
    res.send("your SERVER is ready...")
})

serva.get("/str", (req, res)=>{
    res.send("This is returning string: USERS INFORMATION")

})

serva.get("/obj", (req, res)=>{
    res.send({
        car: "Benz", 
        color: "white", 
        Model_No: "234562",
        charsisNo: 234577885
    })
    })

 serva.get("/arr", (req, res)=>{
     res.send([
        {
         car: "Benz", 
         color: "white", 
         Model_No: "234562",
         charsisNo: 234577885
        },
         {
            car: "Toyota", 
            color: "green", 
            Model_No: "23116662",
            charsisNo: 230097885
        }
 ])
})