/**********************************************************
** Zachary Wetekamm
** 10/28/18
** Description: Program implements DOM and Events
** interactions with a basic table which the user can move
** across data cells and highlight specific cells.
**********************************************************/
// Function to create a 4x4 table with a header row above.
// Each row displays the column and row coordinates.
function createTable() {
    var table = document.createElement("table");
    var tBody = document.createElement("tbody");

    // Create the header rows for the table
    var hRow = document.createElement("tr");
    for (var i = 0; i < 4; i++) {
        var tHead = document.createElement("th");
        tHead.textContent = "Header " + (i + 1);
        tHead.style.textAlign = "center";
        tHead.style.border = "1px solid black";
        hRow.appendChild(tHead);
    }
    table.appendChild(hRow);

    // Create the data rows for the table
    for (var i = 0; i < 4; i++) {
        var tRow = document.createElement("tr");

        for (var j = 0; j < 4; j++) {
            var tData = document.createElement("td");
            tData.textContent = (i + 1) + "," + (j + 1);
            tData.style.textAlign = "center";
            tData.style.border = "1px solid black";
            tRow.appendChild(tData);
        }
        table.appendChild(tRow);        
    }

    table.appendChild(tBody);
    document.body.appendChild(table);
    return table;
}

// Create the table by calling function
var newTable = createTable();
newTable.style.border = "1px solid black";

// Create the direction buttons using a div
var buttonDiv = document.createElement("div");
var directions = ["up", "right", "down", "left"];
for (var i = 0; i < 4; i++) {
    var newButton = document.createElement("button");
    newButton.textContent = directions[i];
    newButton.id = directions[i];
    buttonDiv.appendChild(newButton);
}

document.body.appendChild(buttonDiv);
document.body.appendChild(document.createTextNode(" "));

// Create the mark button
var markButton = document.createElement("button");
markButton.textContent = "Mark Cell";
markButton.id = "mark";
document.body.appendChild(markButton);

// Set the initial position as the top-left cell
var row = 1, col = 0;
var initialPos = newTable.rows[row].cells[col];
initialPos.style.border = "3px solid black";
initialPos.id = "selected";

// Functions to move the cursor; it uses the split operation
// to get the row/col information from textContent. Then the
// coordinations are changed the the next move.
function cursorUp() {
    var current = document.getElementById("selected");
    var coordinates = current.textContent.split(",");
    var row = Number(coordinates[0]);
    var col = Number(coordinates[1]);
    if (row > 1) {
        var next = newTable.rows[row-1].cells[col-1];
        next.style.border = "3px solid black";
        current.style.border = "1px solid black";
        next.id = "selected";
        current.id = null;
    } else {return;}
}

function cursorRight() {
    var current = document.getElementById("selected");
    var coordinates = current.textContent.split(",");
    var row = Number(coordinates[0]);
    var col = Number(coordinates[1]);
    if (col < 4) {
        var next = newTable.rows[row].cells[col];
        next.style.border = "3px solid black";
        current.style.border = "1px solid black";
        next.id = "selected";
        current.id = null;
    } else {return;}
}

function cursorDown() {
    var current = document.getElementById("selected");
    var coordinates = current.textContent.split(",");
    var row = Number(coordinates[0]);
    var col = Number(coordinates[1]);
    if (row < 4) {
        var next = newTable.rows[row+1].cells[col-1];
        next.style.border = "3px solid black";
        current.style.border = "1px solid black";
        next.id = "selected";
        current.id = null;
    } else {return;}
}

function cursorLeft() {
    var current = document.getElementById("selected");
    var coordinates = current.textContent.split(",");
    var row = Number(coordinates[0]);
    var col = Number(coordinates[1]);
    if (col > 1) {
        var next = newTable.rows[row].cells[col-2];
        next.style.border = "3px solid black";
        current.style.border = "1px solid black";
        next.id = "selected";
        current.id = null;
    } else {return;}
}

// Funtion to mark a cell with yellow background
function mark() {
    var current = document.getElementById("selected");
    current.style.backgroundColor = "yellow";
}

// Link the buttons
document.getElementById("up").addEventListener("click", cursorUp);
document.getElementById("right").addEventListener("click", cursorRight);
document.getElementById("down").addEventListener("click", cursorDown);
document.getElementById("left").addEventListener("click", cursorLeft);
document.getElementById("mark").addEventListener("click", mark);