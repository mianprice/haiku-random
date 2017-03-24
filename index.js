var fs = require('fs');
var path = require('path');

function Haiku() {
  this.set = fs.readFileSync(path.join(__dirname, 'haiku.txt'), 'utf8').replace(/\n\n$/, "").split("\n\n");
}

Haiku.prototype = {
  random: function() {
    return this.set[Math.floor(Math.random() * this.set.length)];
  },
  specific: function(index) {
    return this.set[index];
  }
};

module.exports = new Haiku();
