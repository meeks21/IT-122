const http = require("http"); //imports the node built-in module http
const guitars = require('./data');//imports the data.js page as a module

let guitarArray = guitars.getAll();//cretates a variable that calls the function from from the data.js page. Which will return the contents of the array.

http.createServer(
    (req,res) => {

       const path = req.url.toLowerCase();

       switch(path) {
          case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Home page\n' + 'Guitar\'s in stock: ' + guitarArray.length);//this grabs the the length of the array
            break;
          case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('About page\n My name Kemar and this is my third quarter at Seattle Central \n I\'m a little nervous about this class');
            break;
          default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not found');
            break;
          }
    }
 ).listen(process.env.PORT || 3000);