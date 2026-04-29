import express from "express"
import {createServer} from "http"
import { Server } from "socket.io"
import {YSocketIO} from "y-socket.io/dist/server"


const app= express()
// wrap the app in server

const httpServer = createServer(app)


const io = new Server(httpServer, {
    cors:{
        origin:"*",
        method:["POST","GET"]
    }
})

const ySocketIO = new YSocketIO(io) 
// when we initalize it here then the stup will be complete in server side
ySocketIO.initialize()




// health check router which check the server is running 
// these apis help us to check that server is running correctly 
app.get("/", (req,res) =>{
    res.status(200).json({
        message:"hello this server is working fine ",
        success:true
    })
})

app.get("/", (req,res) =>{
    res.status(200).json({
        message:"ok",
        success:true
    })
})



httpServer.listen(3000,() =>{
    console.log("server is running on 3000")
})
