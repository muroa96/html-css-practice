let arr = ['a','b','c'];
let upperarr = [];
arr.forEach(function(elements) {
  upp = elements.toUpperCase();
  upperarr.push(upp);
});
console.log(upperarr);

let arr1 = ['a', 'b'];
let upperarr2 = [];

arr1.forEach(function(el){
  upperarr2.push(el.toUpperCase());
});

console.log(upperarr2);


let x = 'hi';

switch(x) {
  case 1:
    console.log(1);
    break;
  case 'hi':
    console.log('correct');
    break;
  default:
    console.log('there is no answer');
}

let y=5;
if (y<3){
  console.log(3);
} else if (y>10){
  console.log(10);
} else {
  console.log(y);
}

let xa = 5, res;
console.log(res);

var t1=5, t2;

t2=++t1;
console.log(t1, t2);


arr.forEach(function(eli){
  console.log(eli);
});


var asf = 6;
var adf = (asf<0) ? 'over six' : 'lower six';
console.log(adf);


arr = [1,2,3];

arr.forEach(function(eli){
  console.log

})

var arrayDouble=['bark','meow'];
arrayDouble2=[];

arrayDouble.forEach(function(e) {
  arrayDouble2.push(e);
  arrayDouble2.push(e);
});

console.log(arrayDouble2);



function arraysum(array) {
  var suma = 0;
  array.forEach(function(e) {
    suma = suma+e

  });
  console.log(suma);
}
arraysum([1,2,3])

