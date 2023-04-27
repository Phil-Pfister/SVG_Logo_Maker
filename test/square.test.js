const Square = require('../lib/square');


// tests for square class
describe('Square', () => {
    describe('Instantiate', () => {
        it('should be an instance of the square class', () => {
            const square = new Square();
            expect(square).toBeInstanceOf(Square);
        });
    });
    describe('renderText() method', () => {
        it('should retun text line and text color formated for SVG graphic', () => {
            const shapeText = new Square(
                'SVG',
                'white'
            );
            expect(shapeText.renderText()).toBe(`<text x="148" y="120" font-size="60" text-anchor="middle" fill="white">SVG</text>`)
        })
    });
    describe('render() method with setColor() method', () => {
        it('should render SVG line with points and fill color', () => {
            const shape = new Square();
            shape.setColor("blue")
            expect(shape.render()).toEqual('<rect width="150" height="150" x="70" y="25" fill="blue" />');
        })
    });
  
});