/**********************************************************
** Zachary Wetekamm
** 10/21/18
** Description: Demonstrates the arithmetic of closures
** within function calls.
**********************************************************/
function buildList(list) {
	var result = [];
	for (var i = 0; i < list.length; i++) {
		var item = 'item';
		/* Outputs the value in each item index */
		result.push(function (x) {
			return function () {
				alert(item + x + ' ' + list[x]);
			};
		}(i));
	}
	return result;
}
 
function testList() {
    var fnlist = buildList([1,2,3]);
    // using j only to help prevent confusion - could use i
    for (var j = 0; j < fnlist.length; j++) {
        fnlist[j]();
    }
}

testList();