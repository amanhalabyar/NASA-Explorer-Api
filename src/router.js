const handler = require('./handler');

const router = (request, response) => {
  const endpoint = request.url;

  if (endpoint === '/') {
    handlerHome(request, response);
  // } else if (endpoint === '/picture') {
  //   handlerPicture(request, response);
  // } else if (endpoint === '/public') {
  //   handlerPublic(request, response, url);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('<h1> 404 not found </h1>');
  }
};

module.exports = router;
