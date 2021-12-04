const arg = process.argv.slice(2); // argument coming from comandline - slicing off the beghinning info

const timer = function(arg) {
  arg.forEach(element => { // for each comandline arg, 
    const isValidNumber = element > 0 || typeof element === 'number';
    if (isValidNumber) { //error handling - so nobody can put in a number <0 or different data type
      setTimeout(() => { //async 
        process.stdout.write('\x07'); // The function 'beep' is called
      }, (element * 1000)); //the delay
    }
  });
};

timer(arg);