const inquirer = require('inquirer');
const { generateLogo } = require('./lib/generator');

// prompt user 
function promptUser() {
  const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (color keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shapeType',
      message: 'Choose a shape for the logo:',
      choices: ['Triangle', 'Circle', 'Square', 'Ellipse', 'Pentagon', 'Hexagon'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (color keyword or hexadecimal number):',
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    generateLogo(answers.text, answers.textColor, answers.shapeType.toLowerCase(), answers.shapeColor);
  });
}

promptUser();