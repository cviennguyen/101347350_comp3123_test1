const fs = require("fs");
const path = require("path");

const directory = "Logs";
fs.mkdirSync(`${__dirname}/Logs`, { recursive: true });

for (let i = 0; i < 11; i++) {
  fs.appendFileSync(`${__dirname}/Logs/log${i}.txt`, "Hello world");
}

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (file of files) {
    console.log(file);
  }
});
