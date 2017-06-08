//checks if bubblesort can handle an empty array 
describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
	
  it ('handles an array with multiple elements', function() {
	  expect(bubbleSort([20, 15, 18, 90, 45])).toEqual([15, 18, 20, 45, 90]);
  })
  it ('handles an array with multiple elements', function() {
	  expect(bubbleSort([90, 45, 18, 15, 20])).toEqual([15, 18, 20, 45, 90]);
  }) 
	
  // all elements of an array should be a number (use alert like keyword...) should return should be only number 
  // the array should be flattened ... 
  // spy on the sort method 
  // not allowed to use array to store intermediate result... 
  // . 
  // it ('should have a global swap counter..', function() {
  //  var swapCounter = 0;
  //  spyOn(tootsiepop, 'lick').and.callThrough()
  //  tootsiepop.lick.calls.count())
  // expect(swapCounter).toEqual(100);
  //  })
  // should not use split method 


  
});


