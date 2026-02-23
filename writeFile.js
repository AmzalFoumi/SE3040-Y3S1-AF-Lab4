const fs = require("fs");
fs.writeFile("fileWrite.txt", "Hello World!", function (err) {
  if (err) throw err;
  console.log("File saved!");
});
