//  

/* 
A callback function is:
 a function passed into another function as an argument, 
 which is then invoked inside the outer function to complete some kind of routine or action. 
 */

 // Inner function
function greeting(name) {
    console.log(`Hello, ${name}`);
  }
  
  // Outter function
  async function processUserInput(callback) {
    const name = await console.log("Please enter your name.");
    nombre = 'Arturo' 
    callback(nombre);
  }
  
   processUserInput(greeting);

   //  Results:
   //  backend@MienMac M02-Lab03-AsyncCallback % node callback_function_mozilla.js
//     Please enter your name.
//     Hello, Arturo