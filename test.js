const fs = require("fs");
const https = require("https");
const myPhotoUrl ="https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg";


fs.writeFile(__dirname + "/index2.html", "<h1>Html is great</h1>", (error) => {
  if (error) {
    return console.log(error);
  } else {
    return console.log("Congrats");
  }
});

const req = https.get(myPhotoUrl,  (res) => {
  console.log(`statuscode ${res.statusCode}`);
    res.pipe(fs.createWriteStream(__dirname + "/myDog.jpg"));
});
