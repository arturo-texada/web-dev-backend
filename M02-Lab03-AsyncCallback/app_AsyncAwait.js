//* We will see how the same is accomplished with async/await. *//
const axios = require('axios');
const connectToURL = async (url) => {
    const outcome = axios.get(url);
    let listOfEntries = (await outcome).data.entries;
    listOfEntries.forEach((entry) => {
        console.log(entry.Category);
    });
}
console.log("Before connect URL")
connectToURL('https://api.publicapis.org/entries');
console.log("After connect URL")