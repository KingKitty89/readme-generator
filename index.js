const inquirer = require('inquirer'); 
var fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

    // array of questions for user

const questions = [
    
    {
        type:"input",
        message: "What is your Github Username?",
        name: "username"
    },
    {
        type:"input",
        message: "What is your email address?",
        name: "email"
        
    },
    {
        type:"input",
        message: "What is the link to your GitHub profile:",
        name: "profile"
        
    },
    {
        type: "input",
        message: "What is your project's title?",
        name: "title"
    
    },
    {
        type: "input",
        message:"Who contributed to the project?",
        name: "contributors"
    },
    {
        type: "input",
        message:"Please enter a description of your project.",
        name: "description"
    },
    {
        type: "input",
        message:"Enter installation requirements:",
        name: "installation"
    },
    {
        type: "checkbox",
        message:"What technoligies did you use?",
        name: "technologies",
        choices: [
            "Javascript",
            "Java",
            "Python",
            "PHP",
            "Node.js",
            "GitHub"

        ]
    },
    {
        type: "input",
        message:"Please enter a usage?",
        name: "usage"
    },
    {
        type: "checkbox",
        message:"What license do you want to use?",
        name: "license",
        choices: [
            "Apache",
            "MIT",
            "GNU GPLv3",
            "ISC"

        ]
    },
    {
        type: "input",
        message:"Enter any tests:",
        name: "tests"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
    
  
}

// function to initialize program
function init() {
    inquirer
    .prompt (questions)
.then ((data) => {
    writeToFile ("README.md", generateMarkdown({...data}))
}).catch((err)=>{
    console.log(err);
})
}

// function call to initialize program
init();
