const Circle = require('../lib/circle');

describe('Circle', () => {
    describe('Instantiate', () => {
        it('should be an instance of the Circle class', () => {
            const circle = new Circle();
            expect(circle).toBeInstanceOf(Circle);
        });
    });
    
});