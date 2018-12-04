function deepEqual(x, y) {
	// If both are type object and not null
	if ((typeof x == "object" && x != null) && 
		(typeof y == "object" && y != null)) {
		
		// If unequal amount of properties
		if (Object.keys(x).length != Object.keys(y).length) {
			return false;
		}

		// Recursively check each object property.
		for (var prop in x) {
			if (y.hasOwnProperty(prop)) {
				if (!deepEqual(x[prop], y[prop])) {
					return false;
				} else {
					return true;
				}
			}
		}

		// If all properties are equal
		return true;

	} else if (x !== y) {
		// If both are object but do not match
		return false;
	} else {
		// If both aren't objects but do match
		return true;
	}
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true