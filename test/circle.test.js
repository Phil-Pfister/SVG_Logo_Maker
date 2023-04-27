const Circle = require('../lib/circle');

// tests for circle class

describe('Circle', () => {
    describe('Instantiate', () => {
        it('should be an instance of the Circle class', () => {
            const circle = new Circle();
            expect(circle).toBeInstanceOf(Circle);
        });
    });
    describe('render() method with setColor() method', () => {
        it('should render SVG line with circle parameters and fill color', () => {
            const shape = new Circle();
            shape.setColor("yellow")
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="yellow" />');
        })
    });
    describe('renderText() method', () => {
        it('should retun text line and text color formated for SVG graphic', () => {
            const shapeText = new Circle(
                'SVG',
                'white'
            );
            expect(shapeText.renderText()).toEqual(`<text x="150" y="120" font-size="60" text-anchor="middle" fill="white">SVG</text>`)
        })
    })
});