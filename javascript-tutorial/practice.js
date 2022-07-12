// 기본 문법

var obj={name:'lee', gender:'male'}; 
var array=[1,2,3];
var foo=function() {};

var area=5*4;
var bar=(5>3)&&(2<4);

console.log(bar);

var type= typeof('hi');

console.log(type);

var today= new Date();
console.log(today);

var foo = 1 * '10';
console.log(foo);

function foo (arg) {
  return ++arg
};



var i =0;
while (1) {
  if (i>5){
    break;
  }
  console.log(i);
  i++;
};

//주석(한줄)
/*주석 
여러줄
*/ 

function myFunction(x,y){
  return x+y;
}

console.log(myFunction(1,2));

// for (var i=0; i<10 i++) {

// }

var person ={
  name:'Lee',
  gender:'male',
  sayHello: function(){
    console.log('Hi! My name is '+ this.name);
  }
};

person.sayHello();

var arr=[1,2,3,4];
console.log(arr[1]);

// 데이터 타입과 변수

var integer = 10;//모든 수를 실수로 처리한다.
console.log(typeof(integer));

var str='string';

for (var i=0; i<str.length; i++){
  console.log(str[i]);
}

//문자열을 변경할 수 없다.
str[0]='S';
console.log(str);

//새로 할당하는것은 가능하다.
str='String';
console.log(str);

str=str.substring(0,3);
console.log(str);
str=str.toUpperCase();
console.log(str);

function counter (x,y){

}


/*created element->tag
vanilla js로 todolist 만들기

*/