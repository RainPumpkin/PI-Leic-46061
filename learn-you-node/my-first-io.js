const fs = require('fs')

let contents = fs.readFileSync(process.argv[2])
let lines = contents.toString().split('\n').length - 1 //copied from shown, replaced mess created by me
console.log(lines)