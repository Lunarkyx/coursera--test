//JAVASCRIPT TYPES PART 1
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

//JAVASCRIPT TYPES PART 2
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

//COMMON LANGUAGE CONSTRUCTS PART 1 

// var string = "Hello";
// string += " World";
// console.log(string + "!");

// console.log((5 + 4) / 3);
// console.log(undefined / 5); //Outputs NaN(Not a Number)
// function test1 (a){
//     console.log( a/ 5);
// }
// test1();

//TYPE COERCION
//  var x = 4, y = 4;
// if (x == y){
//     console.log("x=4 is equal to y=4");
// }
//  x = "x";
// if (x == y){
//     console.log("x='4' is equal to y=4");
// }

// //STRICT EQUALITY
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

// HANDLING DEFAULT VALUES
// function orderChickenWith(sideDish){
//     sideDish = sideDish || "whatever";
//     console.log("Chicken with " + sideDish);
// }

// orderChickenWith("noodles");
// orderChickenWith();