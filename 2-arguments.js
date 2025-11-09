let argument = process.argv.slice(2);
let len = argument.length;

if (len < 1) {
  console.log("No argument Found");
} else if (len == 1) {
  console.log("Argument Found");
} else {
  console.log("Arguments Found");
}
