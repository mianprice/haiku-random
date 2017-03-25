var haiku = require('../index.js');

describe('Parsing', function() {
  it('should parse the haiku list', function() {
    expect(haiku.random().length).not.toBe(0);
    expect(haiku.specific(0).length).not.toBe(0);
    expect(haiku.specific(0)).toBe(haiku.specific(0));
    expect(haiku.set.length).not.toBe(0);
    expect(haiku.set.length).toBe(1500);
  });
});
