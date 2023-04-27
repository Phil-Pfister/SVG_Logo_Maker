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
});