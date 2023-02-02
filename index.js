const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const generateHTML = require("./src/generateHtml")

const answers = [];

const team = [];


const questions = (newStaff) => {
    inquirer 
        .prompt ([ 
            {
                type: 'input',
                name: 'name',
                message: `What is the ${newStaff}'s name?`,
            },
            {
                type: 'input',
                name: 'id',
                message: `What is the ${newStaff}'s ID?`,
            },
            {
                type: 'input',
                name: 'email',
                message: `What is the ${newStaff}'s email?`,
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the team manager's office number?",
               
                when: () => newStaff === "team manager"
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's GitHub username?",
                
                when: () => newStaff === "engineer"
            },
            {
                type: 'input',
                name: 'school',
                message: "What school did the intern attend?",
                when: () => newStaff === "intern"
            }
        ])
        .then((response) => {
            answers.push(response);
            nextTeamMember()
    });
};

const nextTeamMember = () => {
    inquirer.prompt(choices).then((response) => {
        switch (response.nextEmployee) {
            case "Engineer":
                newStaff = "engineer"
                questions (newStaff)
                break;
            case "Intern":
                newStaff = "intern"
                questions (newStaff)
                break;        
            default:
                teamConstruction ();
        }
    });
};

const choices = [
    {
        type: 'list',
        name: 'nextEmployee',
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members."],
    }
];

const teamConstruction = () => {
    answers.forEach((member) => {
        if(member.officeNumber) {
            const manager = new Manager(member.name, member.id, member.email, member.officeNumber);
            team.push(manager); 
        } else if(member.github) {
            const engineer = new Engineer(member.name, member.id, member.email, member.github);
            team.push(engineer);
        } else if(member.school) {
            const intern = new Intern(member.name, member.id, member.email, member.school);
            team.push(intern);
        } else {
            console.log("Oops! something went wrong?")
        }
     });
     

const htmlcontent = generateHTML(team)

writeToFile('./dist/Team.html', htmlcontent)
};


const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err =>
        err ? console.log(err) : console.log('File created successfully!')
)};

function init() {
    let newStaff = "team manager";
    console.log("Please build your team")
    questions (newStaff);
}


init();