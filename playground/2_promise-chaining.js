require('../src/db/mongoose')
const Task=require('../src/models/task')

Task.findOneAndRemove({description:"to play fortnite"}).then(()=>{
    return Task.countDocuments({});
}).then((res)=>console.log(res))
.catch((er)=>console.log(rea))