const Task=require('../models/taskModel');
exports.getAllTasks=async(_,res)=>{try{res.json(await Task.find())}catch(e){res.status(500).json({message:e.message})}};
exports.createTask=async(req,res)=>{try{let{title,description,status}=req.body;if(!title||!description)return res.status(400).json({message:'Title and description is mandatory'});res.status(201).json(await Task.create({title,description,status}))}catch(e){res.status(500).json({message:e.message})}};
exports.editTask=async(req,res)=>{try{let x=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});return x?res.json(x):res.status(404).json({message:'Task not found for update'})}catch(e){res.status(400).json({message:e.message})}};
exports.deleteTask=async(req,res)=>{try{let x=await Task.findByIdAndDelete(req.params.id);return x?res.status(204).end():res.status(404).json({message:'Task not found for deletion'})}catch(e){res.status(500).json({message:e.message})}};
