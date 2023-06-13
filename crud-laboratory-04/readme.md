curl --request POST 'localhost:5000/user? firstName=Jon&
lastName=Lovato&
email=jonlovato@theworld.com&
DOB=10/10/1995'

curl --request POST 'localhost:5000/user? firstName=Bob&
lastName=Smith&
email=bobsmith@gamil.com&
DOB=1/1/1978’

GET all users REQUEST
https://arturotejada-5000.theiadocker-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/user
{
"users": [
{
"firstName": "John",
"lastName": "wick",
"email": "johnwick@gamil.com",
"DOB": "22-01-1990"
},
{
"firstName": "John",
"lastName": "smith",
"email": "johnsmith@gamil.com",
"DOB": "21-07-1983"
},
{
"firstName": "Joyal",
"lastName": "white",
"email": "joyalwhite@gamil.com",
"DOB": "21-03-1989"
},
{
"firstName": "Bob",
"lastName": "Smith",
"email": "bobsmith@gamil.com",
"DOB": "1/1/1981"
}
]
}

Get user by specific id
https://arturotejada-5000.theiadocker-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/user/johnsmith@gamil.com
[
{
"firstName": "John",
"lastName": "smith",
"email": "johnsmith@gamil.com",
"DOB": "21-07-1983"
}
]

Post login request
https://arturotejada-5000.theiadocker-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/login
https://XXXXXXXXXX-5000.theiadocker-0-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/user/
https://arturotejada-5000.theiadocker-0-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/user/

{
"user":{
"name":"John",
"id":1
}
}

curl --request PUT 'localhost:5000/user/johnsmith@gamil.com?DOB=1/1/1971'
--request PUT 'arturotejada-5000.theiadocker-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/user/jonlovato@theworld.com?DOB=1/1/1971'
https://XXXXXXXXXX-5000.theiadocker-0-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/user/johnsmith@gamil.com

POST new user REQUEST
https://arturotejada-5000.theiadocker-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/user?firstName=Bob&lastName=Smith&email=bobsmith@gamil.com&DOB=1/1/1978

{
"user":{
firstName: "Bob",
lastName: "Smith",
email:"bobsmith@gamil.com",
DOB:"1-1-1978",
}
}

The user Bob Has been added!

PUT REQUEST
https://XXXXXXXXXX-5000.theiadocker-0-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/user/bobsmith@gamil.com
https://arturotejada-5000.theiadocker-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/user/bobsmith@gamil.com?DOB=1/1/1981

User with the email bobsmith@gamil.com updated.

DELETE REQUEST
https://XXXXXXXXXX-5000.theiadocker-0-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/user/bobsmith@gamil.com
https://arturotejada-5000.theiadocker-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/user/bobsmith@gamil.com

User with the email bobsmith@gamil.com deleted.
//