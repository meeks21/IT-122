
const Guitar = require('./gtrDB');


Guitar.find({}).lean()
  .then((guitars) => {
    console.log(guitars);
  })
  .catch(err => next(err));



  // Guitar.find({}, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(result)
  //   }
  //   return
  // });