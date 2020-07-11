const guitars = require('./data');

let guitarArray = guitars.getAll();

document.querySelector('.gtr').innerHTML = guitarArray;
console.log(guitarArray);