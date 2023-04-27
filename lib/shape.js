
// Parent shape class data
class Shape {
    constructor(text, textColor, fillColor = []) {
        this.text = text;
        this.textColor = textColor;
        this.fillColor = fillColor;
    }
    
    
    // function to set background color
    setColor(color) {
       this.fillColor.push(color);
       
    }

}

//exports data
module.exports = Shape;