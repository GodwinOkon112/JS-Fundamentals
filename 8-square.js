const input = process.argv.slice(2);
let convert = Number(input);

if (isNaN(convert) || !convert) {
  console.log("Missing size");
} else if (convert > 0) {
  for (let i = 0; i < convert; i++) {
    console.log("X".repeat(convert));
  }
} 
