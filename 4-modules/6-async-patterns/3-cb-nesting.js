const fs = require('fs');

fs.readFile(__filename, function cb1(err, data) {
    console.log('read done')
    for (i = 0; i < 1000000; i++) {
      if ( i % 100000 == 0){
          console.log(i)
      };
    }
  fs.writeFile(__filename + '.copy', data, function cb2(err) {
    // Nest more callbacks here...
    for (i = 0; i < 100000; i++) {
      if ( i % 10000 == 0){
          console.log(i)
      };
    }
    console.log('first write done')
  });
});

fs.readFile(__filename, function cb1(err, data) {
    console.log('second read done')
    for (i = 0; i < 1000000; i++) {
      if ( i % 200000 == 0){
          console.log(i)
      };
    }
  fs.writeFile(__filename + '.copy', data, function cb2(err) {
    console.log('second write done')
  });
});



for (i = 0; i < 1000000; i++) {
  if ( i % 100000 == 0){
      console.log(i)
  };
}
console.log('TEST');
