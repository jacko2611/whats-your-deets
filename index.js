const inquirer = require('inquirer');
const fs = require ('fs');

const questions = [
    {
        type: 'input',
        message: `What is the team manager's name?`,
        name: 'title',
    },
    {
        type: 'input',
        message: `What is the team manager's ID?`,
        name: 'id',
    },
    {
        type: 'input',
        message: `What is the team manager's email?`,
        name: 'email'
    },
    {
        type: 'input',
        message: `What is the team manager's office number?`,
        name: 'number'
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