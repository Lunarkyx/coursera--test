//JAVASCRIPT TYPES PART 1 //
/*var x = "Hello World";

var message = "in global";
console.log("global: message = " + message);

var a = function () {
    var message = "inside a";
    console.log("a message = " + message);
    
    function b () {
    console.log("b message = " + message);
}
    
    b();
}
a(); */

// JAVASCRIPT TYPES PART 2 //
/*var a;
console.log(a);

if (a == undefined){
    console.log("a is undefined");
}

a = 7;
if (a == undefined){
    console.log("a is undefined");
}
else {
    console.log("a has been defined");
}*/

//COMMON LANGUAGE CONSTRUCTS PART 1 //

// var string = "Hello";
// string += " World";
// console.log(string + "!");

// console.log((5 + 4) / 3);
// console.log(undefined / 5); //Outputs NaN(Not a Number)
// function test1 (a){
//     console.log( a/ 5);
// }
// test1();

// TYPE COERCION //
//  var x = 4, y = 4;
// if (x == y){
//     console.log("x=4 is equal to y=4");
// }
//  x = "x";
// if (x == y){
//     console.log("x='4' is equal to y=4");
// }

// STRICT EQUALITY //
// if (x === y){
//     console.log("Strict x = '4' is equal to y = 4");
// }
// else {
//     console.log("Strict: x = '4' is NOT equal to y = 4");
// }

// ******** If statement(all false)
// if (false || null || undefined || "" || NaN){
//     console.log("This line is never going to be executed");
// }
// else{
//     console.log("All false")
// }

// if(true && "hello" 1 && -1 && "false"){
//     console.log("All true")
// }

// function az ()
// {
//     return
//     {
//         name: "Yaakov"
//     };
// }
 
// function bz(){
//     return {
//         name: "Yaakov"
//     };
// }

// console.log(az());
// console.log(bz());

// var sum = 0;
//     for(var i = 0; i < 10; i++){
//         sum = sum + i;
//         console.log(sum)
//     }
// console.log(sum);

// HANDLING DEFAULT VALUES //
// function orderChickenWith(sideDish){
//     sideDish = sideDish || "whatever";
//     console.log("Chicken with " + sideDish);
// }

// orderChickenWith("noodles");
// orderChickenWith();

// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";

// console.log(company);
// console.log("Company CEO name is: " + company.ceo.firstName);
// console.log(company["name"]);

// company.$stock = 110;
// console.log(company["$stock"]);
// var stockPropName = "Stock of Company";
// company[stockPropName] = 115;
// company["Stock of Company"] = 150;
// console.log("Stock price is: " + company["Stock of Company"]);

// Better way: object literal
// var twitter = {
//     name: "Twitter",
//     ceo: {
//         firstName: "Lalaine",
//         color: "Yellow"
//     },
//     $Cash: 500
// };

// console.log(twitter);
// console.log(twitter.ceo.color);

// function multiply(x, y){
//     return  x + y;
// }
// console.log(multiply(10,15));
// multiply.version = "v.1.0.0";
// console.log(multiply);
// console.log(multiply.toString());
// console.log(multiply.version);

// function makeMultiplier(multiply){
//     var myFunc = function(x){
//         return multiply * x;
//     };
   
//     return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));

// function doOperationOn(x, operation){
//     return operation(x);
// };

// var result = doOperationOn(5, multiplyBy3);
// console.log(result);
// result = doOperationOn(100,doubleAll);
// console.log(result);

// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b = 5;
// console.log("after b update: ");
// console.log("a: " + a);
// console.log("b: " + b);

// var a = {a:7};
// var b = a;
// console.log(a);
// console.log(b);

// b.a = 5;
// console.log("After b.x update");
// console.log(a);
// console.log(b);

// function test(){
//     console.log(this);
//     this.myName = "Lalaine";
// }
// test();
// console.log(window.myName);

//FUNCTION CONSTRUCTORS //
// function Circle(radius){
//     console.log(this);
//     this.radius = radius;
// }
// Circle.prototype.getArea = 
//        function () {
//         return Math.PI * Math.pow(this.radius, 2); 
//     }


// var myCircle = new Circle(10);
// console.log(myCircle);
// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle); 

// var literalCircles = {
//     radius: 10,

//     getArea: function(){
//         console.log(this);
//         return Math.PI * Math.pow(this.radius, 2);
//     }
// };

// console.log(literalCircles.getArea());

// var array = new Array();
// array[0] = "Lalaine";
// array[1] = 8;
// array[2] = function (name){
//     console.log("Hello " + name);
// };
// array[3] = {course: " HTML, CSS & JS",
//             language: "Python PHP Ruby" };

// console.log(array);
// console.log(array[1]);
// array[2](array[0]);
// console.log(array[3].language);

// SHORT HAND ARRAY CREATION //
// var names = [
//     {name: "Lalaine"}, 
//     {name: "Lery"}, 
//     "Diok"];
// console.log(names);
// console.log(names.name)

// var names = ["Lalaine", "Lery", "Diok"];
// console.log(names);

// for (var i = 0; i < names.length; i++){
//     console.log("Hello " + names[i]);
// }

// names[100] = "Jim";
// for (var i = 0; i < names.length; i++){
//     console.log("Hello " + names[i]);
// }

// var name2 = ["Lalaine","Lery","Diok"];
// var myObj = {
//     name: "Lalaine",
//     course: "HTML/CSS/JS",
//     platform: "Coursera"
// };
// for(var prop in myObj){
//     console.log(prop + ": " + myObj[prop]);
// }
// name2.greeting = "Hi!";
// for (var name in name2){
//     console.log("Hello " + name2[name]);
// }

//CLOSURES//
// function makeMultiplier(multiplier){
//     function b() {
//         console.log("Multiplier is: " + multiplier);
//     }
//     b();

//     return (
//         function (x){
//             return multiplier * x;
//         }
//     );
// }

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(10));

// IMMEDIATELY INVOKED FUNCTION EXPERSSIONS(IIFEs)

