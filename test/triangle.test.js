const Triangle = require('../lib/triangle');

// tests for triangle class

describe('Triangle', () => {
    describe('Instantiate', () => {
        it('should be an instance of the Triangle class', () => {
            const triangle = new Triangle();
            expect(triangle).toBeInstanceOf(Triangle);
        });
    });
    describe('render() method with setColor() method', () => {
        it('should render SVG line with points and fill color', () => {
            const shape = new Triangle();
            shape.setColor("blue")
            expect(shape.render()).toEqual('<polygon points="150,10 260,150 40,150" fill="blue" />');
        })
    });
    describe('renderText() method', () => {
        it('should retun text line and text color formated for SVG graphic', () => {
            const shapeText = new Triangle(
                'SVG',
                'white'
            );
            expect(shapeText.renderText()).toEqual(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>`)
        })
    })
  
    
});