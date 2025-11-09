let input = process.argv.slice(2);

function add(a, b) {
  let num1 = Number(a);
  let num2 = Number(b);
  console.log(num1 + num2);
}
add(input[0], input[1]);
