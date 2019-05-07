const path = require('path');
const fs = require('fs');
// const querystring = require('querystring');
// const url = require('url');


const handlerHome = (request, response) => {
  const endpoint = request.url;
  if (endpoint === '/') {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (error, file) => {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(file);
    });
  } else if (endpoint === '/style.css') {
   const filePath = path.join(__dirname, '..', 'public', 'style.css');
    fs.readFile(filePath, (error, file) => {
      response.writeHead(200, {'Content-Type': 'text/css'});
      response.end(file);
    });
  } else if (endpoint === '/main.js') {
    const filePath = path.join(__dirname, '..', 'public', 'main.js');
    fs.readFile(filePath, (error, file) => {
      response.writeHead(200, { "Content-Type": "application/javascript" });
      response.end(file);
    });
 } else if (endpoint === '/media_type') {
   const filePath = path.join(__dirname, '..', 'apod', 'picture');
   fs.readFile(filePath, (error, file) => {
  response.writeHead(200, { "Content-Type": "image/jpeg" });
  response.end(file);
});
};
  // if (endpoint === "/posts") {
  //   const filePath = path.join(__dirname, 'posts.json');
  // fs.readFile(filePath, (error, file) => {
  //   response.writeHead(200, { "Content-Type": "application/json" });
  //   response.end(file);
  // });
  // } else {
  //     response.writeHead(200, { 'Content-Type': 'text/html' });
  //     response.end(file);
  //   }
// const handlerPicture = (request, response) => {
//   const myUrl = "https://apod.nasa.gov/apod/image/1905/CarinaWideField_Willasch_1080.jpg";
//   request(myUrl, (error, response, body)=> {
//     if (error) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.end('There is a server error');
// } else {
//   response.writeHead(200);
//   response.end(JSON.stringify(result[0]));
//   }
//   })
// };


// const handlerPublic = (request, response) => {
//   const url = request.url
//   const extension = url.split('.')[1];
//   const filepath = path.join(__dirname, '..', 'public', url);
//   const type = {
//     htm: 'text/html',
//     js: 'application/javascript',
//     css: 'text/css'
//   }[extension]
//
//   fs.readFile(filepath, (error, file) => {
//     if (error) {
//       console.log(error);
//       response.writeHead(404, {'Content-Type': 'text/plain'})
//       response.end('404 - FILE NOT FOUND');
//       return;
//     }
//     response.writeHead(200, {'Content-Type': type});
//     response.end(file);
//   });
// }

// const handlerPicture = ((request, response) => {
//   const myUrl = "https://apod.nasa.gov/apod/image/1905/CarinaWideField_Willasch_1080.jpg";
//   request(myUrl, (error, response, body)=> {
//     if (error) {
//     response.writeHead(500, { 'Content-Type': 'text/plain' });
//     response.end('There is a server error');
// } else {
//   response.writeHead(200);
//   response.end(JSON.stringify(result[0]));
//   }
//   })
// });






module.exports = handlerHome;
