var fs = require('fs');
var path = require('path');

function Haiku() {
  var i = fs.readFileSync(path.join(__dirname, 'haiku.txt'), 'utf8').replace(/\n\n$/, "").split("\n\n");
  this.set = i.map(function(element) {
    return element.split("\n");
  });
}

Haiku.prototype = {
  random: function(format) {
    var result = this.set[Math.floor(Math.random()*this.set.length)];
    if (format !== undefined) {
      if (format === "html") {
        result = result.join("<br>");
      } else if (format === "shell") {
        result = result.join("\n");
      }
    }
    return result;
  },
  specific: function(index, format) {
    var result = this.set[index - 1];
    if (format !== undefined) {
      if (format === "html") {
        result = result.join("<br>");
      } else if (format === "shell") {
        result = result.join("\n");
      }
    }
    return result;
  },
  getAll: function(format) {
    var result = JSON.parse(JSON.stringify(this.set));
    if (format !== undefined) {
      if (format === "html") {
        result = result.map(function(element) {
          return element.join("<br>");
        });
      } else if (format === "shell") {
        result = result.map(function(element) {
          return element.join("\n");
        });
      }
    }
    return result;
  }
};

module.exports = new Haiku();
