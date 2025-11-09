const argument = process.argv.slice(2);
const element = isNaN(argument[0]);

if (element) {
  console.log("Missing number of occurrences");
}else if(argument > 0){
    for (let index = 0; index < argument; index++) {
      const element = "C is fun";
      console.log(element);
    }
}

