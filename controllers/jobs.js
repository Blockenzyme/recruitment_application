import Job from '../models/Job.js'
import asyncWrapper from '../middlewares/async.js'
import {createCustomError} from '../errors/custom-error.js'
const getAllJobs = asyncWrapper (async (req,res) => {
    
        const jobs = await Job.find({})
        res.status(200).json({jobs})    
}
)

const createJob = asyncWrapper (async (req,res)=>{
    
        const job = await Job.create(req.body)
        
        res.status(201).json({job})
    }
)
const getJob = asyncWrapper (async (req,res,next)=>{
    
        const {id:jobID} = req.params
        const job = await Job.findOne({_id:jobID});
        if(!job){
            return next(createCustomError(`No job with id : ${jobID}`,404))
            
        }

        res.status(200).json({job})}
    
)
const deleteJob = asyncWrapper (async (req,res)=>{
    
        const {id:jobID} = req.params;
        const job = await Job.findOneAndDelete({_id:jobID});
        if(!job){
            return res.status(404).json({msg:`No job with id : ${jobID}`})
        }
        res.status(200).json({job})
    
    }  
)
const updateJob = asyncWrapper (async (req,res)=>{
    
        const {id:jobID} = req.params;

        const job = await Job.findOneAndUpdate({_id:jobID},req.body,{
            new:true,runValidators:true,
        })
        if(!job){
            return next(createCustomError(`No job with id : ${jobID}`,404))
        }

        res.status(200).json({job})
    
}
)




export {getAllJobs,
        createJob,
        getJob,
        updateJob,
        deleteJob,}

