const Square = require('../lib/square');

describe('Square', () => {
    describe('Instantiate', () => {
        it('should be an instance of the square class', () => {
            const square = new Square();
            expect(square).toBeInstanceOf(Square);
        });
    });
    describe('renderUserShape() method', () => {
        it('should render complete .svg file code for a shape', () => {
            const shape = new Square(
             'SVG',
             'white',
             'blue',
             `<polygon points="70,20, 230,20, 230,180 70,180"`       
            );
            
            expect(shape.renderUserShape()).toEqual(`<svg version="1.1" width='300' height='200' xmlns="http://www.w3.org/2000/svg">
        <polygon points="70,20, 230,20, 230,180 70,180" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>`);
        })
    });
    describe('renderText() method', () => {
        it('should retun text line and text color formated for SVG graphic', () => {
            const shapeText = new Square(
                'SVG',
                'white',
                'blue',
                '<polygon points="70,20, 230,20, 230,180 70,180"'
            );
            expect(shapeText.renderText()).toBe(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>`)
        })
    })
  
});