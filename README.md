# haiku-random

> 1500 haiku

All haiku can be found in [haiku.txt](haiku.txt)

## Examples
```
running my river
I uncovered my princes
beside my money

summoning my soul,
Sweden admired my fingers
before my clothing

sweeping your target
I uncovered your lounges
before your luggage
```

## Install
```
$ npm install --save haiku-random
```

## Usage
```js
var haiku = require('haiku');
var random_haiku = haiku.random();
var specific_haiku = haiku.specific(1);
var html_haiku = haiku.random("html");
var haiku_array = haiku.specific(1500,"shell");
var all_haiku = haiku.getAll();
var all_html_haiku = haiku.getAll("html");
```

## API
### haiku.random([format])
Returns a random haiku from the set (Optional 'format' parameter determines haiku format {"html", "shell"})

### haiku.specific(index, [format])
Returns a specific haiku from the set (index = {1-1500})(Optional 'format' parameter determines haiku format {"html", "shell"})

### haiku.getAll([format])
Returns the entire set of haiku in the specified format (default: each haiku as array of lines, inside array of all haiku)

## Related
- [Random Haiku](http://www.randomhaiku.com/)

## License
ISC © [Ian Price](http://github.com/mianprice)
