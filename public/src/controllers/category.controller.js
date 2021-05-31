const  Category =require('../models/catogory.model');

const addCategory = async(req,res)=>
{
    if(req.body)
    {
        const category = new Category(req.body);
        await category.save()
        .then(data=>
        {
            res.status(200).send({data:data});
        })
        .catch(error=>{
            res.status(500).send({error:error.message});
        })
    }
}

const getAllCategory = async(req,res)=>
{
    await Category.find({}).populate('rooms','code amount wing pax')
    .then(data=>{
        res.status(200).send({data:data});
    })
    .catch(error=>{
        res.status(500).send({error:error.message});
    })
}
const getRoomsInCategory =async(req,res)=>
{
    if(req.params && req.params.id)
    {
        await Category.findById(req.params.id)
        .populate('rooms','code amount wing pax')
        .then(data=>{
            res.status(200).send({rooms : data.rooms});
        })
        .catch(error=>{
            res.status(500).send({error:error.message});
        })
    }
}

module.exports ={
    addCategory,
    getAllCategory,
    getRoomsInCategory
};