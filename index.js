const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/generateHtml');

const answers = [];

const questions = [
    {
        type: 'input',
        name: 'name',
        message: `What is the team manager's name?`,
    },
    {
        type: 'input',
        name: 'id',
        message: `What is the team manager's ID?`,
    },
    {
        type: 'input',
        name: 'email',
        message: `What is the team manager's email?`
    },
    {
        type: 'input',
        name: 'number',
        message: `What is the team manager's office number?`
    },
    {
        type: `list`,
        message: 'Which type of team member would you like to add?',
        choices: [`Engineer`, 'Intern', `I don't want to add anymore team members`],
        name: 'team'
    } ,
]


function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("Team.html" , generateHtml(data));
        console.log(data);
    })
  
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName);
        console.log(data);
        if (err) {
            return console.log(err)
        } else {
            console.log("File generated succesfully!");
        }
    })
}


init();
return;