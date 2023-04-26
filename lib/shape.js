

class Shape {
    constructor(text, textColor, fillColor = []) {
        this.text = text;
        this.textColor = textColor;
        this.fillColor = fillColor;
    }
    renderText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }

    setColor(color) {
       this.fillColor.push(color);
       
    }

    

    // renderUserShape = function () {
    //     return `<svg version="1.1" width='300' height='200' xmlns="http://www.w3.org/2000/svg">
    //     ${this.renderShape()}
    //     ${this.renderText()}
    //     </svg>`
    // }



}


module.exports = Shape;