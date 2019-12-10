var Hobby = require('../models/hobby');

module.exports = {
  index,
  show,
  new: newMovie,
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
