// function to generate final output
function generateSVG(shape, userText) {
     
    

    return `
    <svg version="1.1" width='300' height='200' xmlns="http://www.w3.org/2000/svg">
    ${shape}
    ${userText}
    </svg>`;
}




module.exports = { generateSVG };