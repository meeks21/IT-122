const http = require("http"); //imports the node built-in module http
const guitars = require('./data');//imports the data.js page as a module

let guitarArray = guitars.getAll();//cretates a variable that calls the function from from the data.js page. Which will return the contents of the array.


/******************* Adds express and body-parser***************************/
'use strict'
const express = require("express");
const bodyParser = require("body-parser")
let exphbs  = require('express-handlebars');

const app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // set location for static files
app.use(bodyParser.urlencoded({extended: true})); // parse form submissions

/********************* Assignment 2 *********************************************************************************** */

// send static file as response
app.get('/', (req, res) => {
  res.send('Home page\n' + 'Guitar\'s in stock: ' + guitarArray.length);
   });

app.get('/about', (req, res) => {
  res.send('About page\n My name Kemar and this is my third quarter at Seattle Central \n I\'m a little nervous about this class');
   });

   app.use( (req,res) => {
    res.type('text/plain'); 
    res.status(404);
    res.send('404 - Not found');
   });

   
   app.listen(app.get('port'), () => {
    console.log('Express started'); 
   });
/******************* Assignment 1 code ********************************************************************************/

// http.createServer(
//     (req,res) => {

//        const path = req.url.toLowerCase();

//        switch(path) {
//           case '/':
//             res.writeHead(200, {'Content-Type': 'text/plain'});
//             res.end('Home page\n' + 'Guitar\'s in stock: ' + guitarArray.length);//this grabs the the length of the array
//             break;
//           case '/about':
//             res.writeHead(200, {'Content-Type': 'text/plain'});
//             res.end('About page\n My name Kemar and this is my third quarter at Seattle Central \n I\'m a little nervous about this class');
//             break;
//           default:
//             res.writeHead(404, {'Content-Type': 'text/plain'});
//             res.end('Not found');
//             break;
//           }
//     }
//  ).listen(process.env.PORT || 3000);

// /
