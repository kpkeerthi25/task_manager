const mongoose = require('mongoose')

mongoose.connect(process.env.dbname||"mongodb://localhost:27017/task-manager-api",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected successfully")
}).catch(error=>{
    console.log("error not connected to db")
})


