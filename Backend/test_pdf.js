const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');

async function test() {
    try {
        // Find a random small pdf in node_modules if possible, or we just trust the API:
        // const dataBuffer = fs.readFileSync('some.pdf');
        // const data = await pdf(dataBuffer);
        // console.log(data.text);
    } catch (e) { console.error(e); }
}
test();
