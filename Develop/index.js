const fs = require('fs');
const inquirer = require('inquirer');

//modules
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Project Description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please add guidelines for contributing to the repository:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license:',
        choices: [
            'GNU AGPLv3', 
            'GNU GPLv3', 
            'GNU LGPLv3', 
            'Mozilla Public License 2.0', 
            'Apache License 2.0', 
            'MIT License', 
            'Boost Software License 1.0', 
            'The Unlicense',
        ]},
    {
        type: 'input',
        name: 'Tests',
        message: 'Please provide instructions on how to run tests on the application:'
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Please provide instructions on how to reach you with additional questions:'
    },
  ];

// function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, err => {
        if (err) {
          return console.log(err);
        }
        console.log("Your README.md file has been generated.")
    });
}

// function to initialize program
function init() {
prompt(questions).then(answers => {
    const response = generateMarkdown(answers);
    console.log(answers);
    writeToFile("README.md", response);
})
};

init();