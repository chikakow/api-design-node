var fs = require('fs');

var readAllFiles = function() {
  var promises = [readFile(), readFile(), readFile()];
  return Promise.all(promises);
};

var readFile = function() {
  return new Promise((resolve, reject) => {
    fs.readFile('./package.json', function(err, file){
      return err ? reject(err) : resolve(file.toString());
    });
  });
}

readAllFiles().then((file) => {
  console.log('package.json', file.length);
}).catch((err) => {
  console.log('err', err);
});