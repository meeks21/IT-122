'use strict'

//imports the data.js page as a module
// const guitars = require('./data'); 


const Guitar = require('./models/gtrDB')


//cretates a variable that calls the function from from the data.js page. Which will return the contents of the array.
// let guitarArray = guitars.getAll();

/******************* Adds express, body-parser, and handlebars***************************/

const express = require("express");
const bodyParser = require("body-parser")
let exphbs  = require('express-handlebars');



const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // set location for static files
app.use(bodyParser.urlencoded({extended: true})); // parse form submissions
app.use('/api', require('cors')());

/***********************************Four API routes******************************************************** */



app.get('/api/guitars', (req, res) => {
  return Guitar.find({}).lean()
    .then((guitars) => {
        // res.json sets appropriate status code and response header
        res.json(guitars);
    })
    .catch(err => res.status(500).send('Error occurred: database error.'));
});



app.get('/api/details', (req, res) => {
  return Guitar.findOne({model:req.query.model}).lean()
  .then((guitars) => {

    res.json(guitars);
  })
  .catch(err => next(err));
});


app.post('/api/added', (req, res) => {
  const newGuitar = req.body
  return Guitar.update({'model':newGuitar.model}, newGuitar, {upsert:true}, (err, result) => {
    if (err) return next(err);
    console.log(result);
     res.json(result)
  }); 
});


app.delete('/api/delete', (req, res) => {
  if(!req.query.model) {
    return res.status(400).send("guitar not found")
  }
  Guitar.findOneAndRemove({model: req.query.model}).then(guitars => {
    res.json(guitars)
  })
  .catch(err => {
    res.status(500).json(err)
  })
})









/*********************************Assignment 4 updated routes to mongoDB*********************************************** */

app.get('/', (req, res, next) => {
  return Guitar.find({}).lean()
    .then((guitars) => {
     console.log(guitars)
      res.render('home', {guitars})
    })              //passes data through to handlebars
    .catch(err => next(err));
   
});


app.get('/details', (req, res) => {
  return Guitar.findOne({model:req.query.model}).lean()
  .then((guitars) => {

    
    res.render('details', {guitars});
  })
  .catch(err => next(err));
});


app.get('/delete', (req, res) => {
  Guitar.findOneAndDelete({model: req.query.model}, (err, guitars) => {
    if (err) {
      console.log(err);
    } else if (!guitars) {
      console.log('Guitar does not exist')
      res.send('Guitar does not exist')
    } else{
      console.log(`Removed "${guitars.model}"`)
      res.send(`Removed "${guitars.model}"`)
    }
  });
});


app.get('/about', (req, res) => {
  res.type('text/plain');
  res.send('About page\n My name Kemar and this is my third quarter at Seattle Central');
                    //passes data through to handlebars
});


app.use( (req,res) => {
  res.type('text/plain'); 
  res.status(404);
  res.send('404 - Not found');
});

   
app.listen(app.get('port'), () => {
    console.log('Express started'); 
});





/********************* Assignment 2 *********************************************************************************** */

// Route to home page
// app.get('/', (req, res) => {
//   res.render('home', {guitars: guitarArray});
//                     //passes data through to handlebars
// });


// //route to the detials page 
// app.get('/details', (req, res) => {
//   let result = guitars.getGuitar(req.query.model);
//   res.render('details', {model: req.query.model, guitar: result});

// });




/******************* Assignment 1 code ********************************************************************************/

// http.createServer(
//     (req,res) => {

//        const path = req.url.toLowerCase();

//        switch(path) {
//           case '/':
//             res.writeHead(200, {'Content-Type': 'text/plain'});
//             res.end('Home page\n' + 'Guitar\'s in stock: ' + guitarArray.length);//this grabs the the length of the array
//             break;
          // case '/about':
          //   res.writeHead(200, {'Content-Type': 'text/plain'});
          //   res.end('About page\n My name Kemar and this is my third quarter at Seattle Central \n I\'m a little nervous about this class');
          //   break;
//           default:
//             res.writeHead(404, {'Content-Type': 'text/plain'});
//             res.end('Not found');
//             break;
//           }
//     }
//  ).listen(process.env.PORT || 3000);

