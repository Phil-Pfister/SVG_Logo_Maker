const inquirer = require("inquirer");
const { writeFile } = require('fs/promises');
// const generateSVG = require('./lib/generateSVG')
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');
const Shape = require('./lib/shape');

const questions = [
    {
        type: 'list',
        message: 'Which shape would you like your icon to be?',
        name: 'shape',
        choices: ['circle', 'square', 'triangle']
    },
    {
        type: 'input',
        message: 'What color would you like the background? (enter color or hex value)',
        name: 'fillColor',
    },
    {
        type: 'input',
        message: 'What 3 letter logo would you like to display?',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color would you like the text to be? (enter color or hex value)',
        name: 'textColor',
    }
];
inquirer.prompt(questions)
    .then((data => {
        
            if (data.shape === 'circle') {
                const circle = new Circle(data.text, data.textColor, data.fillColor, `<circle cx="150" cy="100" r="80"`)
                userShape = circle;
            } else if (data.shape === 'square') {
                const square = new Square(data.text, data.textColor, data.fillColor,`<polygon points="70,20, 230,20, 230,180 70,180"`)
                userShape = square;
            } else if (data.shape === 'triangle') {
                const triangle = new Triangle(data.text, data.textColor, data.fillColor,`<polygon points="150,10 260,150 40,150"`)
                userShape = triangle;
            }
        }
        
        
        
    ))
    .then(() => {
        const icon = userShape.renderUserShape();
        return writeFile('./examples/icon.svg', icon);
    })
    .then(() => {
        console.log('Generated logo.svg');
    })
    .catch((err) => {
        console.log(err)
        console.log('unable to create file')
    });
