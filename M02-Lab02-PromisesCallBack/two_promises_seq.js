/*

Practice Exercise: Create and execute a script with two promises
Create a script which has two methods that return promises - 
  One of the promises should get resolved after 6 seconds timeout 
  and the other one after 3 seconds timeout. 
Call the promise in such a way that the second promise is invoked after the first promise is resolved.


*/







//Creating two promise method. 
//The second promise will be invoked once first promise get resolved 
//when timer times out after 6 seconds. The second promise will wait 3 seconds.
let firstPromise = new Promise((resolve1, reject1) => {
  setTimeout(() => {
    resolve1("Promise A resolved")
  }, 3000)
})

let secondPromise = new Promise((resolve2, reject2) => {
  setTimeout(() => {
    resolve2("Promise B resolved")
  }, 6000)
})
//Console log before calling the promise
console.log("Ready to start...?");

//Call the promise and wait for it to be resolved print 
//first message and invoke second Promise 
//then print second message message.
firstPromise.then((successMessage1) => {
  console.log("First: " + successMessage1)

  secondPromise.then((successMessage2) => {
    console.log("Second: " + successMessage2)
  })
})
//Console log after calling the promise
console.log("Ok! Starting...");