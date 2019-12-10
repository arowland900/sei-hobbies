var Hobby = require('../models/hobby');

module.exports = {
  index,
  show,
  create,
  update,
  delete: deleteHobby
};

function index(req,res){
    Hobby.find({}, function(err, hobbies){
        console.log("HIT!: ", hobbies)
        res.render('index', {
            title: "Hobbies Page",
            hobbies
        })
    })
}

function show(req, res){
    Hobby.findById(req.params.id, function(err, hobby){
        res.render('show', {
            title: "Hobby Details Page",
            hobby
        })
    })
}

function create(req, res){
    let hobby = new Hobby(req.body)
    hobby.save(function(err){
        res.redirect('/')
    })
}

function update(req, res){
    Hobby.findById(req.params.id, function(err, hobby){
        if(!req.body.description){
            req.body.description = hobby.description
        }
        if(!req.body.name){
            req.body.name = hobby.name
        }
        Hobby.findByIdAndUpdate(req.params.id, req.body, function(err, updatedHobby){
            res.redirect('back')
        })
    })
}

function deleteHobby(req, res){
    Hobby.findByIdAndDelete(req.params.id, function(err, hobby){
        console.log(hobby)
        res.redirect('/')
    })
}