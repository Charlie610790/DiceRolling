'use strict';

(function () {
//Test reset button to clear all input fields
describe('Reset Button', function() {

	$('.reset').click();

	it('should set input-number-of-sides input field to empty', function() {
	expect($('.input-number-of-sides').val()).to.equal();

	});

	it('should set input-how-many-dice input field to empty', function() {
		expect($('.input-how-many-dice').val()).to.equal();
	});

});

// Test reset button to clear dice-container
 describe('Reset Button', function() {
	
	$('.box1').val(34);
	
	$('.reset').click();
	
	it('should set dice-container val to empty', function() {
		expect($('.dice-container').val()).to.equal();
	});
 });

//Random Array Generator
describe('Random Array Generator', function(){

	it('Should generate a random array of results for the die depending on Number Of Dice passed in variable and contain the Max property.', function(){

		function generateArray(numDice,minDiceSides,maxDiceSides) {
			var randomArray = [];
				for (var dice=0; dice<numDice; dice++) {
				randomArray[dice] = randomNumber(minDiceSides,maxDiceSides);
				expect(randomNumber).to.have.property('numDice');
				}
		}
	});
});

describe('Random Dice Side Generator', function(){

	it('Should generate a random result for the die depending on maxium number of sides passed in variable and contain the Max property.', function(){

		function randomNumber(min,max) {
			return (Math.round((max-min) * Math.random() + min));
			expect(randomNumber).to.have.property('max');
		}
	});
});

// Die Constructor
describe('Game Constructor', function(){

	it('Should add a sides property to instances to determine how many sides each die has.', function(){
		var game = new Game(6, 2);
		expect(game).to.have.property('diceSides');
	});

	it('Should add a howMany property to instances to determine how many dice are being rolled.', function(){
		var game = new Game(6, 2);
		expect(game).to.have.property('howMany');
	});

	it('Should accept a number or a number as a string as its argument.', function(){
		var game = new Game(6, 2);
		expect(game.diceSides).to.equal(6);
	});

	it('Should accept a number or a number as a string as its argument.', function(){
		var game = new Game(6, 2);
		expect(game.howMany).to.equal(2);
	});
});


})();