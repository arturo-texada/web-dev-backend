const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};


// GET request: Retrieve all friends
router.get("/",(req,res)=>{
  // Update the code here
  // console.log('GETTING all users');
  res.send(JSON.stringify(friends,null,4));
  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email",(req,res)=>{
  // Update the code here
  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
  const email = req.params.email;
  //let filtered_users = users.filter((user) => user.email === email);
  res.send(friends[email]);
});


// POST request: Add a new friend
router.post("/",function (req,res){
  if (req.body.email){
      friends[req.body.email] = {
          "firstName":req.body.firstName,
          //Add similarly for lastName
          "lastName": req.body.lastName,
          //Add similarly for DOB
          "DOB": req.body.DOB
          }
          //friends[email]=friend;
  }
res.send("The user" + (' ')+ (req.body.firstName) + " Has been added!");
});

//  h t t p s : / / arturotejada-5000.theiadocker-0-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/friends/evadyck@gamil.com
// PUT request: Update the details of a friend with email id
router.put("/:email", function (req, res) {
  const email = req.params.email;
  let friend = friends[email]
  if (friend) { //Check is friend exists
      let DOB = req.body.DOB;
      //Add similarly for firstName
      let firstName = req.body.firstName;
      //Add similarly for lastName
      let lastName = req.body.lastName;

      //if DOB the DOB has been changed, update the DOB 
      if(DOB) {
          friend["DOB"] = DOB
      }
      //Add similarly for firstName
      if(firstName) {
          friend["firstName"] = firstName
      }
      //Add similarly for lastName
      if(lastName) {
          friend["lastName"] = lastName
      }
      friends[email]=friend;
      res.send(`Friend with the email  ${email} updated.`);
  }
  else{
      res.send("Unable to find friend!");
  }
});


// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  const email = req.params.email;
  if (email){
      delete friends[email]
  }
  res.send(`Friend with the email  ${email} deleted.`);
});

module.exports=router;
