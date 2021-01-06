const { add } = require("../controllers/skills");

let skills = [
    {id:"0", name:"javscript", level:"4"},
    {id:"1", name:"css", level:"2"},
    {id:"2", name:"html", level:"1"},
    {id:"3", name:"nodejs", level:"3"},
    {id:"4", name:"express", level:"1"}
]

function findSkill(inputId){
    let name;
    skills.forEach(function(skill){
        if(skill.id == inputId)
        {
            name = skill; 
        }
    })
    return name;
}

function addSkill(obj){
    let addObj = {id:skills.length.toString()};
    console.log(obj);
    for(let key in obj){
        console.log(key + " " + obj[key]);
        addObj[key] = obj[key];
    }
    skills.push(addObj);
    console.log(skills);
}

function deleteSelect(ind){
    skills.forEach(function(skill){
        if(skill.id == ind){
            skills.splice(ind,1);
        }
    });
}

function updateSelect(ind,obj){
    obj["id"] = ind;
    skills.forEach(function(skill){
        if(skill.id == ind){
            skills[parseInt(ind)] = obj;
        }
    });
}

module.exports={
    skills,
    findSkill,
    addSkill,
    deleteSelect,
    updateSelect
}