const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://kpkeerthi:Keerthi20@dbcluster-voldi.gcp.mongodb.net/task-manager?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected successfully")
}).catch(error=>{
    console.log("error not connected to db")
})


