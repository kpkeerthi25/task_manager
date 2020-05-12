const express=require('express')
const router=new express.Router()
const Task=require('../models/task')
const auth=require('../middleware/auth')


router.post('/task',auth,async(req,res)=>{
    
    try{
        const task=new Task({...req.body,owner:req.user._id})
        await task.save()
        return res.send(task);
    }
    catch(err){
        res.status(400).send(err);
    }
})

//  /task/?completed=true;
//  /task/?limit=2&skip=2;
//  /task/?sort=createdAt_desc||asc

router.get('/task',auth,async(req,res)=>{
    const match={}
    const sort={}
    if(req.query.sort)
    {
    const parts=req.query.sort.split('_')
    sort[parts[0]]=parts[1]==='desc'?-1:1;
    }
    if(req.query.completed)
    {
        match.completed=req.query.completed==="true"
    }
    try{
        const user=req.user;
        await user.populate({
            path:'tasks',
            match,
            options:{
                limit:parseInt(req.query.limit),
                skip:parseInt(req.query.skip),
                sort
            }
        }).execPopulate();
        res.send(user.tasks);
    }catch(err){
        res.sendStatus(500)
    }
})

router.get('/task/:id',auth,async(req,res)=>{
    const _id=req.params.id;
    try{
        const task=await Task.findOne({_id,owner:req.user._id});
        if(!task)
        res.status(404).send();
        res.send(task)
    }catch(e){
        res.status(500).send();
    }
    
})


router.patch('/task/:id',auth, async(req,res)=>{
    
        const toUpdate=Object.keys(req.body)
        const allowed=['description','completed']
        const isValid=toUpdate.every((item)=>allowed.includes(item))
        if(!isValid)
        return res.sendStatus(400)
    try{

        const task=await Task.findOne({_id:req.params.id,owner:req.user._id});
        console.log(task)
        if(!task)
        return res.sendStatus(404);
        toUpdate.forEach(toup => {
            task[toup]=req.body[toup];
        });
        await task.save();
        res.send(task)
    }
    catch(e){
        res.sendStatus(500)
    }
})


router.delete('/task/:id',auth,async(req,res)=>{
    try{
        //console.log(req.params.id)
        const task=await Task.findOne({_id:req.params.id,owner:req.user._id});
        if(!task)
        return res.sendStatus(404)
        await task.remove()
        res.send(task)
    }
    catch(e)
    {
        res.sendStatus(500)
    }
    
})


module.exports=router;