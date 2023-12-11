// document.addEventListener('DOMContentLoaded', function () {
//     // Fetch the JSON file
//     fetch('main.json')
//         .then(response => response.json())
//         .then(data => {
//             // Manipulate the HTML DOM with the JSON data
//             const outputDiv = document.getElementById('output');

//             // Loop through the array and display information for each item
//             data.forEach(item => {
//                 // Create an img element and set its src attribute
//                 const imageElement = document.createElement('img');
//                 imageElement.src = item.image;

//                 // Append the image element to the output div
//                 outputDiv.appendChild(imageElement);

//                 // Display other information
//                 outputDiv.innerHTML += `<p>Model: ${item.model}</p><p>Brand: ${item.brand}</p><p>MRP: ${item.mrp}</p><p>Price: ${item.price}</p><p>Ram: ${item.ram}</p><p>Storage: ${item.storage}</p><p>Camera: ${item.camera}</p>`;
//             });
//         })
//         .catch(error => console.error('Error fetching JSON:', error));
// });

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/product/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server