const guitars = require('./data');

let guitarArray = guitars.getAll();

let textGtr = document.querySelector('.gtr');
textGtr.innerHTML =`${guitarArray}`;