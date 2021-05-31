const Room = require('../models/room.model');

const addRoom = async(req,res)=>{
    if(req.body)
    {
        const room = new Room(req.body);
        room.save()
        .then(data=>{
            res.status(200).send({data:data});
        })
        .catch(error=>{
            res.status(500).send({error:error.message});
        })
    }
}

const getAllRooms = async(req,res)=>{
    await Room.find({})
    .then(data=>{
        res.status(200).send({data:data});
    })
    .catch(error=>
    {
            res.status(500).send({error:error.message});
    })
}

module.exports ={
    addRoom,
    getAllRooms
};