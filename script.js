'use strict';

//var firstName = 'Matilda';

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);

      //const self = this;
        //const isMillenial = function() {
          //console.log(self.year >= 1981 && self.year <= 1996);
       // };


        const isMillenial = () => {
          console.log(this.year >= 1981 && this.year <= 1996);
        };

        isMillenial();
    },

  greet: () => console.log(`Hey ${this.firstName}`)
};
jonas.greet();
jonas,calcAge();


const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);

//hoisting 
/*

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

function addDecl(a,b) {
    return a + b;
};

const addExpr = function(a,b) {
    return a + b;
};

var addArrow = (a,b) => a+b;


if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!')
}



var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.x);
console.log(z === window.x);
*/

//scoping

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  
  function printAge() {
      let output = `${firstName}, you are ${age}, born in ${birthYear}`;
      console.log(output);

      if(birthYear >= 1981 && birthYear <= 1996) {
          var millenial = true;
          const firstName = 'Steven';
          const str = `Oh, and you are a millenial, ${firstName}`;
          console.log(str);

          function add(a, b) {
              return a + b ;
          }

          output = 'new output!'
      }
      console.log(millenial);
      //add(2, 3);
      console.log(output);
      }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);

*/

//this keyword

/*
console.log(this);

const calcAge = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
};
calcAge(1991)


const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
};
calcAge(1980)

const jonas = {
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);
    }
}
jonas.calcAge();

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();

*/