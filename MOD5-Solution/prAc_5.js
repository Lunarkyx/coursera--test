// DOM Manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

// document.addEventListener("DOMContentLoaded",
// function (event){

// function sayHello (event){
//     console.log(event);
//     this.textContent = "Said it!";
//     var name = 
//       document.getElementById("name").value;
//       var message = "<h2>Hello to you, " + name + "</h2>";
    // document
    //    .getElementById("content")
    //    .textContent = message;
    
//     document
//        .getElementById("content")
//        .innerHTML = message;
       
//     if (name === "student")
//         var title =
//           document
//             .querySelector("#title")
//             .textContent ;
//     title += " & Lovin it!";
//           document
//             .querySelector("h1")
//             .textContent = title;
// }

// // UNBUSTRUTE EVENT BINDING
// document.querySelector("button")
//    .addEventListener("click",sayHello);
// document.querySelector("body")
//    .addEventListener("mousemove",
//     function(event){
//         if (event.shiftKey === true){
//         console.log("x: " + event.clientX);
//         console.log("y: " + event.clientY);
//       }
//      }
//     );
// });


// document.querySelector("button")
//  .onclick = sayHello;

document.addEventListener("DOMContentLoaded",
     function (){

      document.querySelector("button")
        .addEventListener("click", 
          function(){
              $ajaxUtils
               .sendGetRequest("name.txt",
                   function (request){
                       var name = request.responseText;

                   document.querySelector("#content")
                        .innerHTML ="<h2>" + name + "!</h2>";
                   });
                
           });
     });