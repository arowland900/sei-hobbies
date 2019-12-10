var Hobby = require('../models/hobby');

module.exports = {
  index,
  show,
  create
};

function index(req,res){
    Hobby.find({}, function(err, hobbies){
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