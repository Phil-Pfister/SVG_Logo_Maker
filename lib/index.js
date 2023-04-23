const inquirer = require("inquirer");
const fs = require('fs');
const generateSVG = require('./generateSVG')

class Shape {
    constructor(text, textColor, fillColor) {
        this.text = text;
        this.textColor = textColor;
        this.fillColor = fillColor;
    }
}

class Circle extends Shape {
    constructor(text, textColor, fillColor, cx, cy, radius) {
    super(text, textColor, fillColor);
    this.cx = cx;
    this.cy = cy;
    this.radius = radius;
    }
}

class Square extends Shape {
    constructor(text, textColor, fillColor, height, width) {
        super(text, textColor, fillColor);
        this.height = height;
        this.width = width;
        
    }

}

class Triangle extends Shape {
    constructor(text, textColor, fillColor, height, width) {
        super(text, textColor, fillColor);
        this.height = height;
        this.width = width;
    }
}

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

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    });
    console.log('Icon Created');
};

function init() {
    inquirer.prompt(questions)
    .then((answers => {
        let iconSVG = generateSVG(answers);
        writeToFile('iconSVG.svg', iconSVG);
    }));
};

init();