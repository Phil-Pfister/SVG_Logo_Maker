const inquirer = require("inquirer");
const { writeFile } = require('fs/promises');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');
const { generateSVG } = require('./lib/generateSVG')

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
                const circle = new Circle(data.text, data.textColor);
                circle.setColor(data.fillColor);
                userShape = circle.render();
               
            } else if (data.shape === 'square') {
                const square = new Square(data.text, data.textColor);
                square.setColor(data.fillColor);
                userShape = square.render();
                
               
            } else if (data.shape === 'triangle') {
                const triangle = new Triangle(data.text, data.textColor)
                triangle.setColor(data.fillColor);
                userShape = triangle.render();
                
               
                
            }

            if (data.text.length !== 3) {
                throw new Error(`logo must be 3 exactly characters`)
            }

            
            
            iconText = data.text;
            iconTextColor = data.textColor;
        }
       
        
        
        
    ))
    .then(() => {
        console.log(userShape)
    })
    .then(() => {
        const icon = generateSVG(userShape, iconText, iconTextColor);
        return writeFile('./examples/icon.svg', icon);
        
    })
    .then(() => {
        console.log('Generated logo.svg');
        
    })
    .catch((err) => {
        console.log(err)
        console.log('unable to create file')
    });
