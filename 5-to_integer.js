let argument = process.argv.slice(2);
let convert = parseInt(argument[0]);

if (!convert || isNaN(convert)) {
  console.log("Not a number");
} else {
  let output = `My number: ${convert}`;
  console.log(output);
}
