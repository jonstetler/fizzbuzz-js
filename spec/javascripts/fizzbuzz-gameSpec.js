describe("FizzBuzzGame Suite", function() {
  var fizzBuzzResults = FizzBuzzGame.computeFizzBuzz();

  it("should return true when isFizzMultiple is called with 3", function() {
    expect(FizzBuzzGame.isFizzMultiple(3)).toBe(true);
  });

  it("should return false when isFizzMultiple is called with 4", function() {
  	expect(FizzBuzzGame.isFizzMultiple(4)).toBe(false);
  });

  it("should return true when isBuzzMultiple is called with 5", function() {
  	expect(FizzBuzzGame.isBuzzMultiple(5)).toBe(true);
  });

  it("should return false when isBuzzMultiple is called with 4", function() {
  	expect(FizzBuzzGame.isBuzzMultiple(5)).toBe(true);
  });

  it("should return true when isFizzBuzzMultiple is called with 15", function() {
  	expect(FizzBuzzGame.isFizzBuzzMultiple(15)).toBe(true);
  });

  it("should return false when isFizzBuzzMultiple is called with 4", function() {
  	expect(FizzBuzzGame.isFizzBuzzMultiple(4)).toBe(false);
  });

  it("should compute a FizzBuzzResult array that contains the value Fizz (rather than 24) at index 23 when computeFizzBuzz is called", 
  	function() {
  	expect(fizzBuzzResults[23]).toBe("Fizz");
  });

  it("should compute a FizzBuzzResult array that contains the value Buzz (rather than 40) at index 39 when computeFizzBuzz is called", 
  	function() {
  	expect(fizzBuzzResults[39]).toBe("Buzz");
  });

  it("should compute a FizzBuzzResult array that contains the value FizzBuzz (rather than 90) at index 89 when computeFizzBuzz is called", 
  	function() {
  	expect(fizzBuzzResults[89]).toBe("FizzBuzz");
  });

  it("should compute a FizzBuzzResult array where the first value is one", 
  	function() {
  	expect(fizzBuzzResults[0]).toBe(1);
  });

  it("should compute a FizzBuzzResult array where the last value is Buzz (rather than 100)", 
  	function() {
  	expect(fizzBuzzResults[99]).toBe("Buzz");
  });

});