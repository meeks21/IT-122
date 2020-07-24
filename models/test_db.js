
const Guitar = require('./gtrDB');

// Guitar.find({}, (err, result) => {
//     if(err) {
//         console.log(err);
//     }
//     else{
//         return
//     }
// });
Guitar.find({}).lean()
  .then((guitars) => {
    console.log(guitars);
  })
  .catch(err => next(err))