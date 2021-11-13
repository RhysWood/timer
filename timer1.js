const arg = process.argv.slice(2);

const timer = function(arg) {
  arg.forEach(element => {
    if (element > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, (element * 1000));
    }
  });
};

timer(arg);