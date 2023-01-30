// rabano, Rymbrent Maximillian L.
// WD-201
// 01-30-23

var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Tyoe': 'text/html' });
    res.write(
      '<html><body style = "background-color: #679289"><h1>Welcome to my Node.js Application.</h1><p>Welcome Rabano, Rymbrent. This is an activity about basics of Node.js</p></body></html>'
    );
    res.end();
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body style = "background-color: #679289"><h1>This is the About Page.</h1><p>Hello Rabano, Rymbrent. This activity will teach on how to deal with a simple server and local modules in Node.js</p></body></html>'
    );
    res.end();
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body style = "background-color: #679289"><h1>This is the Contact Page.</h1><p>Rabano, Rymbrent. if you want additional details about this activity go to this site: https://tutorialteacher.com/nodejs-tutorials</p></body></html>'
    );
    res.end();
  } else if (req.url == '/gallery') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body style = "background-color: #679289"><h1>This is the Gallery Page.</h1></body></html>'
    );
    res.end();
  } else res.end('Invalid Request');
});

server.listen(5000);

console.log('Node.js web sever at port 5000 is running..');
