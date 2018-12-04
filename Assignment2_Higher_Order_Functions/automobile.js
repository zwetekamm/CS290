/**********************************************************
** Zachary Wetekamm
** 10/21/18
** Description: Demonstrates use of higher-order functions
** by sorting various automobiles by different categories.
**********************************************************/
function Automobile(year, make, model, type){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
    this.logMe = function(bool) {
		if (true) {
			console.log(this.year + " " + this.make + " " + this.model + " " + this.type);
		} else {
			console.log(this.year + " " + this.make + " " + this.model);
		}
	}
}

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")];

/*This function sorts arrays using an arbitrary comparator. A comparator and
* an array are passed, and the array is sorted using a copy array and temp
* value; the sorted array is then returned. */
function sortArr(comparator, array){
	var sortedArr = array;
	// Performs a swap between two array elements after using comparator.
	for (var i = 0; i < sortedArr.length; i++) {
		for (var j = 0; j < sortedArr.length; j++) {
			if (comparator(sortedArr[i], sortedArr[j])) {
				var temp = sortedArr[i];
				sortedArr[i] = sortedArr[j];
				sortedArr[j] = temp;
			}
		}
	}
	return sortedArr;
}

/*A comparator takes two arguments and uses some algorithm to compare them. If 
* the first argument is larger or greater than the 2nd it returns true, otherwise 
* it returns false. Here is an example that works on integers */
function exComparator( int1, int2){
    if (int1 > int2){
        return true;
    } else {
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison rules then either can come first*/

/* Compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator(auto1, auto2){
	if (auto1.year > auto2.year) {
		return true;
	} else {
		return false;
	}
}

/*This compares two automobiles based on their make. */
function makeComparator(auto1, auto2){
	if (auto1.make.toUpperCase() < auto2.make.toUpperCase()) {
		return true;
	} else {
		return false;
	}
}

/*This compares two automobiles based on their type. Autos are ranked by
 significance in the switch statement, 1 being highest. If autos are same
 type, then compare by year. If no type exists, default to lowest rank */
function typeComparator(auto1, auto2){
    var compare = function(auto) {
    	// Return an integer 1-4 for each auto type; if no type, return 5
    	switch (auto.type.toUpperCase()) {
    		case "ROADSTER":
    			return 1;
    			break;
    		case "PICKUP":
    			return 2;
    			break;
    		case "SUV":
    			return 3;
    			break;
    		case "WAGON":
    			return 4;
    			break;
    		default:
    			return 5;
    	}
    }

    // Auto rank is sorted as lower number has greater significance;
    // therefore, compare by less than. If type is equal, compare by year.
    if (compare(auto1) < compare(auto2)) {
    	return true;
    } else if (compare(auto1) == compare(auto2)) {
    	return yearComparator(auto1, auto2);
    } else {
    	return false;
    }
}

/*Prints the sorted array to the console by calling the logMe function
* for each iteration */
function printArr(arr, bool) {
	for (var i = 0; i < arr.length; i++) {
 		arr[i].logMe(bool);
 	}
}

console.log("*****");

console.log("The cars sorted by year are:");
printArr(sortArr(yearComparator, automobiles), false);

console.log("\nThe cars sorted by make are:");
printArr(sortArr(makeComparator, automobiles), false);

console.log("\nThe cars sorted by type are:");
printArr(sortArr(typeComparator, automobiles), true);

console.log("*****");