var haiku = require('../index.js');

describe('Parsing', function() {
  it('should parse the haiku list text file into set of 1500 unique haiku', function() {
    expect(haiku.set.length).not.toBe(0);
    expect(haiku.set.length).toBe(1500);
  });
});

describe('Access', function() {
  it('should produce random haiku', function() {
    var one = haiku.random();
    var two = haiku.random();
    var three = haiku.random();
    expect(one).not.toBe(two);
    expect(one).not.toBe(three);
    expect(one).not.toBe(haiku.random());
  });

  it('should produce specified haiku', function() {
    var one = haiku.specific(1);
    var two = haiku.specific(2);
    var three = haiku.specific(3);
    expect(one).not.toBe(two);
    expect(one).not.toBe(three);
    expect(one).toBe(haiku.specific(1));
  });
});

describe('Format', function() {
  it('haiku.random() should produce haiku in shell output format', function() {
    var one = haiku.random();
    var two = haiku.random();
    var three = haiku.random();
    expect(one.split("\n").length).toBe(3);
    expect(two.split("\n").length).toBe(3);
    expect(three.split("\n").length).toBe(3);
  });

  it('haiku.specific(n) should produce specified haiku in shell output format', function() {
    var one = haiku.specific(1);
    var two = haiku.specific(2);
    var three = haiku.specific(3);
    expect(one.split("\n").length).toBe(3);
    expect(two.split("\n").length).toBe(3);
    expect(three.split("\n").length).toBe(3);
  });

  it('haiku.random("arr") should produce haiku in array of lines format', function() {
    var one = haiku.random("arr");
    var two = haiku.random("arr");
    var three = haiku.random("arr");
    expect(one.length).toBe(3);
    expect(two.length).toBe(3);
    expect(three.length).toBe(3);
  });

  it('haiku.specific(n, "arr") should produce specified haiku in array of lines format', function() {
    var one = haiku.specific(1,"arr");
    var two = haiku.specific(2,"arr");
    var three = haiku.specific(3,"arr");
    expect(one.length).toBe(3);
    expect(two.length).toBe(3);
    expect(three.length).toBe(3);
  });

  it('haiku.random("html") should produce haiku in htmlString format', function() {
    var one = haiku.random("html");
    var two = haiku.random("html");
    var three = haiku.random("html");
    expect(one.split("<br>").length).toBe(3);
    expect(two.split("<br>").length).toBe(3);
    expect(three.split("<br>").length).toBe(3);
  });

  it('haiku.specific(n, "html") should produce specified haiku in htmlString format', function() {
    var one = haiku.specific(1,"html");
    var two = haiku.specific(2,"html");
    var three = haiku.specific(3,"html");
    expect(one.split("<br>").length).toBe(3);
    expect(two.split("<br>").length).toBe(3);
    expect(three.split("<br>").length).toBe(3);
  });
});
