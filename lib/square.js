const Shape = require('./shape');

class Square extends Shape {
    constructor(text, textColor, fillColor) {
        super(text, textColor, fillColor);
        
        
    }
    render() {
        return `<polygon points="70,20, 230,20, 230,180 70,180" fill="${this.fillColor}" />`
    }

}


module.exports = Square;