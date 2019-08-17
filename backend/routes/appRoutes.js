const express = require('express');
const Router =  express.Router();
const Country = require('../models/countrySchema');
const ObjectId = require('mongoose').Types.ObjectId;


Router.post('/create',(req, res, next)=>{
    const country = Country({
        name: req.body.name,
        capital:req.body.capital
    });
    country.save()
    .then((country)=>{
        if(country){
            res.status(200).json({ country: country, msg: 'Post request successful'});
        }
    }).catch(err => next(err))
});

Router.get('/read',(req,res,next)=>{
    Country.find({})
    .then((country)=>{  
        res.status(200).json({ country: country});
    }).catch(err => next(err))
});


Router.put('/update/:id',(req, res, next) =>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No record found with given id: ${req.params.id}`);
    }
    const country = {
        name: req.body.name,
        capital: req.body.capital
    };
    Country.findByIdAndUpdate(req.params.id,{$set:country},{new : true},(err,doc)=>{
        if(!err){ res.send(doc)}
        else{
            console.log("Error in Employees:"+JSON.stringify(err,undefined,2));
        }
    });
});

Router.delete('/delete/:id',(req, res, next)=>{
    if(req.params.id){
        if(!ObjectId.isValid(req.params.id)){
            
            return res.status(400).send(`No record found with given id: ${req.params.id}`);
        }
        Country.findByIdAndDelete(req.params.id,(err, doc)=>{
            if(!err){ 
                res.status(200).json({msg: doc});
            }
            else{
                console.log("Error in Employees:"+JSON.stringify(err,undefined,2));
            }
        });
    }else{ res.write("Error no Id found")}
});


module.exports = Router;