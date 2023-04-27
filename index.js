// imports data from other javascript pages
const inquirer = require("inquirer");
const { writeFile } = require('fs/promises');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');
const { generateSVG } = require('./lib/generateSVG')

// questions for inquirer
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
// inquirer prompt to generate responses to query
inquirer.prompt(questions)
    .then((data => {
            // sets data for the shape that was chosen by user 
            if (data.shape === 'circle') {
                const circle = new Circle(data.text, data.textColor);
                circle.setColor(data.fillColor);
                 // sets the inputs to generateSVG function
                iconText = circle.renderText();
                userShape = circle.render();
               
            } else if (data.shape === 'square') {
                const square = new Square(data.text, data.textColor);
                square.setColor(data.fillColor);
                iconText = square.renderText();
                userShape = square.render();
                
               
            } else if (data.shape === 'triangle') {
                const triangle = new Triangle(data.text, data.textColor)
                triangle.setColor(data.fillColor);
                iconText = triangle.renderText();
                userShape = triangle.render();
                
               
                
            }
            // makes sure the text is only three letters or throws error
            if (data.text.length !== 3) {
                throw new Error(`logo must be 3 exactly characters`)
            }

            
            // sets the inputs to generateSVG function
            // iconText = userShape.renderText();
            // iconTextColor = data.textColor;
        }
       
        
        
        
    ))
    .then(() => {
        // passes info to generateSVG function and writes results to file
        const icon = generateSVG(userShape, iconText);
        return writeFile('./examples/icon.svg', icon);
        
    })
    .then(() => {
        // logs success
        console.log('Generated logo.svg');
        
    })
    // catches errors and logs them
    .catch((err) => {
        console.log(err)
        console.log('unable to create file')
    });
