

class Shape {
    constructor(text, textColor, fillColor, innerSVG) {
        this.text = text;
        this.textColor = textColor;
        this.fillColor = fillColor;
        this.innerSVG = innerSVG;
    }
    renderText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }

    

    renderUserShape = function () {
        return `<svg version="1.1" width='300' height='200' xmlns="http://www.w3.org/2000/svg">
        ${this.renderShape()}
        ${this.renderText()}
        </svg>`
    }



}


module.exports = Shape;