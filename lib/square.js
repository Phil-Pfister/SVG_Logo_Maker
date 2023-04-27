const Shape = require('./shape');

// Square class data

class Square extends Shape {
    constructor(text, textColor, fillColor) {
        super(text, textColor, fillColor);
        
    }

    renderText() {
        return `<text x="153" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
    //render function to return shape and color
    render() {
        return `<polygon points="70,20, 230,20, 230,180 70,180" fill="${this.fillColor}" />`
    }

}


module.exports = Square;