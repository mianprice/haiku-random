var fs = require('fs');
var path = require('path');

function Haiku() {
  this.set = fs.readFileSync(path.join(__dirname, 'haiku.txt'), 'utf8').replace(/\n\n$/, "").split("\n\n");
}

Haiku.prototype = {
  random: function(format) {
    var result = this.set[Math.floor(Math.random()*this.set.length)];
    if (format !== undefined) {
      if (format === "html") {
        result = result.replace(/\n/g,"<br>");
      } else if (format === "arr") {
        result = result.split("\n");
      }
    }
    return result;
  },
  specific: function(index, format) {
    var result = this.set[index];
    if (format !== undefined) {
      if (format === "html") {
        result = result.replace(/\n/g,"<br>");
      } else if (format === "arr") {
        result = result.split("\n");
      }
    }
    return result;
  }
};

module.exports = new Haiku();
