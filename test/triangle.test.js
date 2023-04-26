const Triangle = require('../lib/triangle');

describe('Triangle', () => {
    describe('Instantiate', () => {
        it('should be an instance of the Triangle class', () => {
            const triangle = new Triangle();
            expect(triangle).toBeInstanceOf(Triangle);
        });
    });
    describe('renderShape() method', () => {
        it('should render SVG line with points and fill color', () => {
            const shape = new Triangle(
             'SVG',
             'white',
             'blue',
             '<polygon points="150,10 260,150 40,150"'       
            );
            
            expect(shape.renderShape()).toEqual('<polygon points="150,10 260,150 40,150" fill="blue" />');
        })
    });
    describe('renderText() method', () => {
        it('should retun text line and text color formated for SVG graphic', () => {
            const shapeText = new Triangle(
                'SVG',
                'white',
                'blue',
                '<polygon points="150,10 260,150 40,150"'
            );
            expect(shapeText.renderText()).toEqual(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>`)
        })
    })
  
    
});