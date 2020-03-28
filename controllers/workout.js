const express = require('express');
const router = new express.Router();
const db = require('../models');
const {Types: {ObjectId}} = require('mongoose');

router.get('/api/workouts/',(req,res)=>{
    db.Workout.find({})
    .then(workouts => {
        // console.log(workouts[0]);
        res.json(workouts);
    })
    .catch(err=>{
        res.json(err);
    })
});

router.put('/api/workouts/:id',(req,res)=>{
    const id = req.params.id;
    db.Workout.updateOne({"_id": ObjectId(id)}, {$push: {'exercises': req.body}})
    .then(update=>{
        // console.log(update);
        res.json(update);
    })
    .catch(err=>{
        res.json(err);
    })
});

router.post('/api/workouts',(req,res)=>{
    db.Workout.create(req.body)
    .then(success=>{
        res.json(success);
    })
    .catch(err=>{
        res.json(err);
    })
});

router.get('/api/workouts/range',(req,res)=>{
    db.Workout.find({})
    .then(result=>{
        res.json(result);
    })
    .catch(err=>{
        res.json(err);
    });
})

module.exports = router;