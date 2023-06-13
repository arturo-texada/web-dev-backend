//   Syntax
/*  await expression             */


// 
function resolveAfter2Seconds(x) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Mensaje de Éxito:= ${x+x}`);
      }, 2000);
    });
  }
  
async function asyncCall() {
  console.log('calling');
  const y = await resolveAfter2Seconds(10).then((successMessage) => {
  console.log(` ${successMessage}`);
  
});
}     
  
  
asyncCall();