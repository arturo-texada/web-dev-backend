//   Syntax
/* async function name(param0) {
    statements
  }
  async function name(param0, param1) {
    statements
  }
  async function name(param0, param1, ... paramN) {
    statements
  }              */


//   Async
function resolveAfter2Seconds(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x+x);
      }, 2000);
    });
  }
  
  async function f1() {
    const y = await resolveAfter2Seconds(10);
    console.log(y,'-',y); // 10
  }
  
  f1();

//  Result:
//  20 "-" 20