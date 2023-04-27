
// Parent shape class data
class Shape {
    constructor(text, textColor, fillColor = []) {
        this.text = text;
        this.textColor = textColor;
        this.fillColor = fillColor;
    }
    // function to render text and text color
    // renderText() {
    //     return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    // }
    // function to set background color
    setColor(color) {
       this.fillColor.push(color);
       
    }

}

//exports data
module.exports = Shape;