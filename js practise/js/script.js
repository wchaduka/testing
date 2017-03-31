// var string ="hello";
// string += " world";
// console.log (string +"!");

// // math operators
// console.log((5+4)/3);
// console.log((undefined)/3);

// function test1 (a){

// 	console.log(a/5);
// }

// var x="4", y=4;
// if (x===y) {
// 	console.log("its equal");
// }
// else{
// 	console.log("aare you nuts")
// }

// var sum =0;
// for (var i =0; i <100; i++) {
// 	console.log(i);
// sum=sum+i;
// }
// console.log("its: "  + sum);

// var company=new Object();
// company.name="thandi";
// company.ceo=new Object();
// company.ceo.firstname="washington";
// console.log(company ["name"]);
// //better way object

// var facebook = {
// 	name: "Facebook",
// 	ceo:{
// 		fName: "washington",
// 		favColor: "blue"
// 	},
// 	"stock of company":110
// };

// console.log(facebook)

// function multiply(x,y){
// 	return x*y;
// }

// multiply.version="v.1.0.0";
// console.log(multiply.version);

// // factory
// function makeMulti(multiplier){
// 	var myFunc=function(x){
// 		return multiplier*x;
// 	};

// 	return myFunc;
// }
// var multiplyBy3=makeMulti(3);
// console.log(multiplyBy3(10));
// var dAll=makeMulti(2);
// console.log(dAll(20000000));

// function doOp(x, operation){
// 	return operation (x);
// }

// var result = doOp(5,multiplyBy3);
// // console.log(result);

// var a = {x:7};
// var b=a;
// b.x=5;

// console.log(a);
// console.log(b);

// Function constructors
// function Circle (radius) {
//   this.radius = radius;
// }

// Circle.prototype.getArea = 
//   function () {
//     return Math.PI * Math.pow(this.radius, 2);
//   };


// var myCircle = new Circle(10);
// console.log(myCircle.getArea());

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle);

// var array= new Array();
// array[0]="thandi";
// array[1]="7";
// array[2]=function (name) {
// 	console.log("hello" +name);
// 	// body...
// };
//  array[3] ={course: "HTML, css java"};

//  console.log(array);
//  array[2]( array[0]);

//  console.log(array[3].course)

//  var names=["washington","love","happiness"];
//  console.log(names);

//  for (var i = 0; i < names.length; i++) {
//  	console.log("hello"+names[i]);
 	
//  }
//  names[100]="john";
//   for (var i = 0; i < names.length; i++) {
//  	console.log("hello"+names[i]);
 	
//  }

//  // Arrays
// var array = new Array();
// array[0] = "Yaakov";
// array[1] = 2;
// array[2] = function (name) {
//   console.log("Hello " + name);
// };
// array[3] = {course: " HTML, CSS & JS"};

// console.log(array);
// array[2](array[0]);
// console.log(array[3].course);


// // Short hand array creation
// var names = ["Yaakov", "John", "Joe"];
// console.log(names);

// for (var i = 0; i < names.length; i++) {
//   console.log("Hello " + names[i]);
// }

// names[100] = "Jim";
// for (var i = 0; i < names.length; i++) {
//   console.log("Hello " + names[i]);
// }

// var names2 = ["Yaakov", "John", "Joe"];

// var myObj = {
//   name: "Yaakov",
//   course: "HTML/CSS/JS",
//   platform: "Courera"
// };
// for (var prop in myObj) {
//   console.log(prop + ": " + myObj[prop]);
// }

// for (var name in names2) {
//   console.log("Hello " + names2[name]);
// }

// names2.greeting = "Hi!";

// for (var name in names2) {
//   console.log("Hello " + names2[name]);
// }

// function makeMult(mult){
// 	return{
// 		function(x){
// 			return mult*x;
// 		}
// 	};
// }
// var dAll =makeMult(2);
// console.log(dAll(10));


// Document Object Model
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);
// document.addEventListener("DOMContentLoaded",
// 	function (event){
// 		console.log(event);
// 		function sayHello(){
// 	this.textContent="said it";
// 		var name=document.getElementById("name").value;
// 		var message = "<h2>hello " + name + " !</h2>";
// 		// document.getElementById("content").textContent=message;
// 	document.getElementById("content").innerHTML=message;

// 	if (name==="student"){
// 		//var title = document.getElementById("title");
// 		var title = document
// 			.querySelector("#title")
// 			.textContent;

// 		title+="&loving it!";
// 		document
// 			.querySelector("#title")
// 			.textContent =title;

// 			// document
// 			// .querySelector("h1")
// 			// .textContent =title;

// 			}
// 	}
// 	document.querySelector("button")
// 	.addEventListener("click", sayHello);
// 	// 	document.querySelector("button")
// 	// .onclick=sayHello;
// document.querySelector("body")
// 	.addEventListener("mousemove",
// 		function(event){
// 			if (event.shiftKey===true){
// 			console.log("X " + event.clientX);
// 			console.log("y" + event.clientY);
// 		}

// 	});
// });
// Event handling
// document.addEventListener("DOMContentLoaded",
//   function (event) {
    
//     // Unobtrusive event binding
//     document.querySelector("button")
//       .addEventListener("click", function () {
        
//         // Call server to get the name
//         $ajaxUtils
//           .sendGetRequest("data/Washington-wa-Nonny.txt", 
//             function (request) {
//               var name = request.responseText;

//               document.querySelector("#content")
//                 .innerHTML = "<h2>Hello " + name + "!</h2>";
//             });

        
//       });
//   }
// );

//Javascript Object Notation (JSON)
// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/x.json", 
            function (res) {
              var message = 
                res.firstName + " " + res.lastName
              if (res.likesChineseFood) {
                message += " likes Chinese food";
              }
              else {
                message += " doesn't like Chinese food";
              }
              message += " and uses ";
              message += res.numberOfDisplays + 1;
              message += " displays for coding.";

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  }
);

