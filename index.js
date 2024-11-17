// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will this application be used?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can someone contribute to the project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can the application be tested?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Enter a license for your project',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content = `
# ${data.title}

## Description
${data.description}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${data.license}
    `;
    
    fs.writeFile(fileName, content, (err) => {
        if (err) throw err;
        console.log('README generated successfully!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', answers);
    });
}

// Function call to initialize app
init();
