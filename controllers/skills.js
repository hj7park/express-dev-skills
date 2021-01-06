const importedData = require("../models/skilldata.js")
let skillList = importedData.skills;


function show(req, res, next) {
    res.render("skills.ejs",{skillList});
  }

function index(req, res, next) {
    let skill =  importedData.findSkill(req.params.id);
    res.send(skill.name);
  }

function addForm(req,res,next){
  res.render("skillAdd.ejs");
}

function addFormHandle(req,res,next){
  importedData.addSkill(req.body);
  res.redirect("/skills");
}

function deleteSkill(req,res,next){
  importedData.deleteSelect(req.params.id);
  res.redirect("/skills");
}

function updateForm(req,res,next){
  let skill =  importedData.findSkill(req.params.id);
  res.render("skillUpdate.ejs",{skill})
}

function updateFormHandle(req,res,next){
  importedData.updateSelect(req.params.id,req.body);
  res.redirect("/skills");
}

  module.exports={
    show,
    index,
    addForm,
    addFormHandle,
    deleteSkill,
    updateForm,
    updateFormHandle
  }