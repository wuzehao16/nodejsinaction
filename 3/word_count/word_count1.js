const fs = require('fs');
var completedTasks = 0;
var tasks = [];
var wordCounts = {};
var filesDir = './text';

fs.readdir(filesDir, (err, files) => {
  if (err) throw err;
  files.forEach(fileName => {
    // var task = (function (fileName) {
    //   return function () {
      var file = filesDir + '/' + fileName
        fs.readFile(file, (err, text) => {
          if (err) throw err;
          countWordsInText(text);
          checkIfComplete();
        })
      // }
    // })(filesDir + '/' + fileName);
    // tasks.push(task);
  })
  // for (var task in tasks) {
  //   tasks[task]();
  // }
})

function countWordsInText(text) {
  var words = text.toString().toLowerCase().split(/\W+/).sort();
  for (var index in words) {
    var word = words[index];
    if (word) {
      wordCounts[word] = (wordCounts[word])? wordCounts[word] + 1 : 1;
    }
  }
}

function checkIfComplete() {
  console.log(wordCounts)
}
