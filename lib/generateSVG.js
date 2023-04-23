function renderShape(shape) {
    if (shape === 'circle') {
        return `<circle cx="150" cy="100" r="80"`
    } else if (shape === 'square') {
        return `<polygon points="70,20, 230,20, 230,180 70,180"`
    } else if (shape === 'triangle') {
        return `<polygon points="150,10 260,150 40,150"`
    }
};

function generateSVG(data) {
    return `
    <svg version="1.1" width='300' height='200' xmlns="http://www.w3.org/2000/svg">
   ${renderShape(data.shape)} fill="${data.fillColor}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

    </svg>
    
    
    `
}

//exports generateSVG function to index,js
module.exports = generateSVG;