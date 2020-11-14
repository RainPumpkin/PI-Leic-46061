const fs = require('fs')
const file = process.argv[2]
//don't put let here

fs.readFile(file, function (err, contents) {
  if (err) return console.log(err)
  let lines = contents.toString().split('\n').length - 1
  console.log(lines)
})