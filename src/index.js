const express=require('express')
//require('./db/mongoose')
//const userRouter=require('./router/userRoute')
//const taskRouter=require('./router/taskRouter')



const app=express();
app.use(express.json())
// app.use((req,res,next)=>{
//     res.status(503).send("maintenance error");
  
// })

//app.use(userRouter)
//app.use(taskRouter)

app.get('/',(req,res)=>{
  res.send("hello world");
})

const PORT=process.env.PORT||3000;


app.listen(PORT,()=>console.log("server is up in" + PORT))

//git