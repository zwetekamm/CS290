/***********************************************************
 * These are javascript activities which demonstrate basic 
 * arithmetic in javascript. Activites are from lectures in 
 * CS290: Web Development.
***********************************************************/

/* Declaring a function by definition or assignment */
// Will call since function is hoisted
countdown(5);

function countdown(n) {
	while (n > 0) {
		console.log(n);
		n--;
	} 
	console.log("Blastoff!");
}


// Won't call since variable square not yet defined
/*
square(3);

var square = function(n) {
	return n * n;
};
*/


/* Sum array of integers using my forEach higher-order function */
function sumArray(array) {
	var sum = 0;
	array.forEach(function(v) {
		sum += v;
	});
	return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));


/* This function creates a dialogue string of a speaker and what
 * the speaker says. */
function dialog(speaker) {
	return function(speech) {
		return speaker + " says \"" + speech + "\"";
	}
}

var Donald = {name: "Donald Duck"};
Donald.speak = dialog(Donald.name);
console.log(Donald.speak("Hello World"));