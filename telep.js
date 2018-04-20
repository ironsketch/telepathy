// Variables
var size = 18;
var alpha = " abcdefghijklmnopqr";
var gameInProgress = false;
var helpWithGame = false;

var red = "#ff0000";
var purple = "#bf00ff";
var silver = "#d1d1e0";
var green = "#00ff00";
var blue = "#0000ff";
var yellow = "#ffff00";
var pink = "#ffb3ff";
var white = "#ffffff";
var orange = "#ff8000";
var bolt = "url('images/bolt.png')";
var circle = "url('images/circle.png')";
var diamond = "url('images/diamond.png')";
var hand = "url('images/hand.png')";
var heart = "url('images/heart.png')";
var moon = "url('images/moon.png')";
var star = "url('images/star.png')";
var sun = "url('images/sun.png')";
var eye = "url('images/eye.png')";

var basics = [[yellow,"yellow","images/sun.png","sun"],[orange,"orange","images/star.png","star"],[red,"red","images/eye.png","eye"],[purple,"purple","images/moon.png","moon"],[pink,"pink","images/circle.png","circle"],[blue,"blue","images/bolt.png","bolt"],[green,"green","images/diamond.png","diamond"],[silver,"silver","images/hand.png","hand"],[white,"white","images/heart.png","heart"]]

var domCells = [
    [[blue,bolt],[pink,circle],[green,diamond],[white,hand],[yellow,moon],[purple,eye],[red,star],[orange,heart],[silver,sun],[green,eye],[silver,star],[white,circle],[red,moon],[purple,sun],[yellow,bolt],[orange,diamond],[blue,hand],[pink,heart]],
    [[pink,hand],[green,heart],[silver,eye],[orange,circle],[white,bolt],[red,sun],[blue,moon],[purple,diamond],[yellow,star],[purple,hand],[red,heart],[pink,star],[yellow,diamond],[silver,circle],[blue,eye],[green,bolt],[white,sun],[orange,moon]],
    [[silver,heart],[yellow,eye],[white,star],[red,diamond],[purple,circle],[pink,moon],[green,hand],[blue,sun],[orange,bolt],[yellow,star],[white,bolt],[purple,diamond],[pink,hand],[blue,moon],[orange,circle],[red,sun],[green,heart],[silver,eye]],
    [[white,eye],[orange,star],[purple,bolt],[pink,sun],[blue,diamond],[silver,hand],[yellow,heart],[green,moon],[red,circle],[pink,diamond],[green,sun],[yellow,hand],[purple,star],[orange,eye],[silver,moon],[white,heart],[red,bolt],[blue,circle]],
    [[purple,star],[red,bolt],[blue,circle],[silver,moon],[green,sun],[white,heart],[orange,eye],[yellow,hand],[pink,diamond],[silver,sun],[yellow,moon],[orange,heart],[blue,bolt],[red,star],[white,hand],[purple,eye],[pink,circle],[green,diamond]],
    [[green,circle],[silver,diamond],[yellow,sun],[purple,heart],[orange,hand],[blue,star],[pink,bolt],[red,eye],[white,moon],[orange,bolt],[purple,circle],[blue,sun],[silver,heart],[green,hand],[red,diamond],[pink,moon],[yellow,eye],[white,star]],
    [[red,moon],[blue,hand],[pink,heart],[yellow,bolt],[silver,star],[orange,diamond],[purple,sun],[white,circle],[green,eye],[white,moon],[orange,hand],[red,eye],[green,circle],[pink,bolt],[purple,heart],[blue,star],[silver,diamond],[yellow,sun]],
    [[orange,sun],[purple,moon],[red,hand],[green,star],[pink,eye],[yellow,circle],[white,diamond],[silver,bolt],[blue,heart],[red,circle],[blue,diamond],[green,moon],[white,eye],[yellow,heart],[pink,sun],[silver,hand],[orange,star],[purple,bolt]],
    [[yellow,diamond],[white,sun],[orange,moon],[blue,eye],[red,heart],[green,bolt],[silver,circle],[pink,star],[purple,hand],[blue,heart],[pink,eye],[silver,bolt],[orange,sun],[white,diamond],[green,star],[yellow,circle],[purple,moon],[red,hand]],
    [[pink,moon],[green,hand],[blue,sun],[purple,circle],[orange,bolt],[white,star],[red,diamond],[yellow,eye],[silver,heart],[white,sun],[purple,hand],[red,heart],[silver,circle],[orange,moon],[yellow,diamond],[blue,eye],[pink,star],[green,bolt]],
    [[silver,hand],[yellow,heart],[green,moon],[blue,diamond],[red,circle],[purple,bolt],[pink,sun],[orange,star],[white,eye],[blue,hand],[green,eye],[silver,star],[purple,sun],[pink,heart],[red,moon],[yellow,bolt],[white,circle],[orange,diamond]],
    [[yellow,circle],[white,diamond],[silver,bolt],[pink,eye],[blue,heart],[red,hand],[green,star],[purple,moon],[orange,sun],[red,bolt],[pink,diamond],[green,sun],[orange,eye],[blue,circle],[purple,star],[silver,moon],[yellow,hand],[white,heart]],
    [[white,heart],[orange,eye],[yellow,hand],[green,sun],[pink,diamond],[blue,circle],[silver,moon],[red,bolt],[purple,star],[pink,circle],[silver,sun],[yellow,moon],[red,star],[green,diamond],[blue,bolt],[white,hand],[orange,heart],[purple,eye]],
    [[green,bolt],[silver,circle],[pink,star],[red,heart],[purple,hand],[orange,moon],[blue,eye],[white,sun],[yellow,diamond],[purple,moon],[blue,heart],[pink,eye],[white,diamond],[red,hand],[orange,sun],[green,star],[silver,bolt],[yellow,circle]],
    [[purple,eye],[red,star],[orange,heart],[yellow,moon],[silver,sun],[green,diamond],[white,hand],[pink,circle],[blue,bolt],[silver,diamond],[white,moon],[orange,hand],[pink,bolt],[yellow,sun],[green,circle],[purple,heart],[red,eye],[blue,star]],
    [[blue,star],[pink,bolt],[red,eye],[orange,hand],[white,moon],[yellow,sun],[purple,heart],[silver,diamond],[green,circle],[orange,star],[red,circle],[blue,diamond],[yellow,heart],[purple,bolt],[white,eye],[pink,sun],[green,moon],[silver,hand]],
    [[red,sun],[blue,moon],[purple,diamond],[white,bolt],[yellow,star],[silver,eye],[orange,circle],[green,heart],[pink,hand],[yellow,eye],[orange,bolt],[purple,circle],[green,hand],[white,star],[silver,heart],[red,diamond],[blue,sun],[pink,moon]],
    [[orange,diamond],[purple,sun],[white,circle],[silver,star],[green,eye],[pink,heart],[yellow,bolt],[blue,hand],[red,moon],[green,heart],[yellow,star],[white,bolt],[blue,moon],[silver,eye],[pink,hand],[orange,circle],[purple,diamond],[red,sun]]];



// Image Variables
var x_img = "images/x.png";

// Float RIGHT div
widthOfSide = windowWidth * .3;
var body = document.body,
    divFloatRight = document.createElement("DIV");
divFloatRight.style.float = "right";
divFloatRight.style.width = widthOfSide;
body.appendChild(divFloatRight);


var windowHeight = $( window ).height();
var windowWidth = $( window ).width();
var xSize = windowHeight / (size + 1);

// Table Creation
function setBoard(choice) {
    
    sideBoard();
    bottomControls();
    // Mainboard
    var body = document.body,
	boardGame = document.createElement("TABLE"); // Creating the game table
    
    // Table width and height / Design
    var windowHeight = $( window ).height();
    var windowWidth = $( window ).width();
    var tdBack = windowHeight / (choice + 1);
    widthOfGame = windowWidth * .7;
    boardGame.style.width  = windowHeight;
    boardGame.style.height  = windowHeight;
    boardGame.style.border = '1px solid black';
    
    // Setting up the table
    for (i = 0; i < choice + 1; i++) {
	if (i == 0){
	    var tr = boardGame.insertRow();
	    for (a = 0; a < choice + 1; a++){
		var td = tr.insertCell();
		td.setAttribute('id',"top " + alpha[a]);
		td.onclick = xRowColumn.bind(td);
		td.style.textAlign = "center";
		td.style.fontSize = "x-large";
		td.innerHTML = alpha[a];
		td.style.border = '1px solid black';
		td.style.width = tdBack - 10;
		td.style.height = tdBack - 10;
		td.style.padding = '0px';
		td.style.margin = '0px';
	    }
	}
	else{
	    var tr = boardGame.insertRow();
	    for (b = 0; b < choice + 1; b++){
		if(b == 0){
		    var td = tr.insertCell();
		    td.setAttribute('id',"side " + i);
		    td.onclick = xRowColumn.bind(td);
		    td.style.textAlign = "center";
		    td.style.fontSize = "x-large";
		    td.innerHTML = i;
		    td.style.border = '1px solid black';
		    td.style.width = tdBack - 10;
		    td.style.height = tdBack - 10;
		    td.style.padding = '0px';
		    td.style.margin = '0px';
		}
		else{
		    var td = tr.insertCell();
		    td.setAttribute('id', i + alpha[b]);
		    td.onclick = xify.bind(td);
		    td.style.border = '1px solid black';
		    td.style.width = tdBack - 10;
		    td.style.height = tdBack - 10;
		    td.style.padding = '0px';
		    td.style.margin = '0px';
		    td.style.backgroundColor = domCells[i - 1][b - 1][0];
		    td.style.backgroundImage = domCells[i - 1][b - 1][1];
		    td.style.backgroundSize = "contain";
		    
		}
	    }
	}
    }
    body.appendChild(boardGame);
}

function sideBoard(){
    sideBoardImgSize = windowHeight / 20;
    
    // Setting up side board
    var body = document.body,
	sideBoardTable = document.createElement("TABLE"); // Creating the game table

    // Table width and height / Design
    
    sideBoardTable.style.width  = "100%";
    sideBoardTable.style.height  = "70%";
    sideBoardTable.style.border = '1px solid black';
    var tr = sideBoardTable.insertRow();
    
    var td = tr.insertCell();
    td.style.textAlign = "center";
    td.style.fontSize = "x-large";
    td.innerHTML = "Color";
    td.style.border = '1px solid black';
    td.style.padding = '0px';
    td.style.margin = '0px';
    
    var td = tr.insertCell();
    td.style.textAlign = "center";
    td.style.fontSize = "x-large";
    td.innerHTML = "Symbol";
    td.style.border = '1px solid black';
    td.style.padding = '0px';
    td.style.margin = '0px';

    for (i = 0; i < 9; i++){
	var tr = sideBoardTable.insertRow();
	
	var td = tr.insertCell();
	td.setAttribute('id', basics[i][1] + " " + 1);
	td.onclick = userControls.bind(td);
	td.style.textAlign = "center";
	td.style.fontSize = "x-large";
	td.style.border = '1px solid black';
	td.style.padding = '0px';
	td.style.margin = '0px';
	td.innerHTML = basics[i][1];
	td.style.backgroundColor = basics[i][0];
	td.style.backgroundSize = "contain";
	
	var td = tr.insertCell();
	td.setAttribute('id', basics[i][3] + " " + 2);
	td.onclick = userControls.bind(td);
	td.style.textAlign = "center";
	td.style.fontSize = "x-large";
	td.style.border = '1px solid black';
	td.style.padding = '0px';
	td.style.margin = '0px';
	td.innerHTML = basics[i][3] + "     ";
	var img = document.createElement("IMG");
	img.src = basics[i][2];
	td.appendChild(img);
	img.style.width = sideBoardImgSize;
	td.style.backgroundSize = "contain";
    }
    
    divFloatRight.appendChild(sideBoardTable);
}

function bottomControls(){
    // Setting up bottom controls board
    var body = document.body,
	bottomControlBoard = document.createElement("TABLE"); // Creating the game table

    // Table width and height / Design
    
    bottomControlBoard.style.width  = "100%";
    bottomControlBoard.style.border = '1px solid black';
    var tr = bottomControlBoard.insertRow();
    var td = tr.insertCell();
    td.setAttribute('id', "help");
    td.onclick = toggleHelp.bind(td);
    td.style.textAlign = "center";
    td.style.fontSize = "x-large";
    td.style.border = '1px solid black';
    td.style.padding = '0px';
    td.style.margin = '0px';
    td.innerHTML = "HELP";

    var td = tr.insertCell();
    td.setAttribute('id', "help");
    td.onclick = newGame.bind(td);
    td.style.textAlign = "center";
    td.style.fontSize = "x-large";
    td.style.border = '1px solid black';
    td.style.padding = '0px';
    td.style.margin = '0px';
    td.innerHTML = "New Game";

    divFloatRight.appendChild(bottomControlBoard);
    
}
function toggleHelp(select){
    var poo = this;
    if (helpWithGame == true){
	helpWithGame = false;
	this.style.backgroundColor = white;
    }
    else{
	helpWithGame = true;
	this.style.backgroundColor = red;
    }
}

function newGame(select){
    
}

// User Controls
function userControls(select){
    var basicsIndex = basics.indexOf(this.id);
    var id = this.id;
    var splits = id.split(" ");
    for (i = 0; i < 9; i++){
	if (splits[0] == basics[i][1]){
	    colorSplits = basics[i][0];
	}
    }
    // 1 and 0
    if (helpWithGame == true){
	if (splits[1] == 1){
	    for (i = 0; i < size; i++){
		for (i = 0; i < size; i++){
		    
		}
	    }
	}
    }
    else{
    }
    
}

function pullOutColororName(){
}

// Xing out what you don't need
// Row Xing out
function xRowColumn(select){
    var thisid = this.id;
    var splits = thisid.split(" ");
    if (splits[0] == "side"){
	if (domCells[splits[1] - 1][0].full != true){
	    for (i = 0; i < size; i++){
		if ( domCells[splits[1] - 1][i].xed != true){
		    var img = document.createElement("IMG");
		    var tdTemp = document.getElementById(splits[1] + alpha[i + 1])
		    img.src = x_img;
		    img.width = xSize - 11;
		    img.setAttribute('id', splits[1] + alpha[i + 1] + "X");
		    tdTemp.appendChild(img);
		    domCells[splits[1] - 1][i].xed = true;
		}
	    }
	    domCells[splits[1] - 1][0].full = true;
	}
	else{
	    for (i = 0; i < size; i++){
		if ( domCells[splits[1] - 1][i].xed == true){
		    removeElement(document.getElementById(splits[1] + alpha[i + 1] + "X"));
		    domCells[splits[1] - 1][i].xed = false;
		}
	    }
	    domCells[splits[1] - 1][0].full = false;
	}
    }
    else{
	if (domCells[alpha.indexOf(splits[1]) - 1][0].full != true){
	    for (i = 0; i < size; i++){
		if ( domCells[i][alpha.indexOf(splits[1]) - 1].xed != true){
		    var img = document.createElement("IMG");
		    var tdTemp = document.getElementById((i + 1) + splits[1])
		    img.src = x_img;
		    img.width = xSize - 11;
		    img.setAttribute('id', (i + 1) + splits[1] + "X");
		    tdTemp.appendChild(img);
		    domCells[i][alpha.indexOf(splits[1]) - 1].xed = true;
		}
	    }
	    domCells[alpha.indexOf(splits[1]) - 1][0].full = true;
	}
	else{
	    for (i = 0; i < size; i++){
		if ( domCells[i][alpha.indexOf(splits[1]) - 1].xed == true){
		    removeElement(document.getElementById((i + 1) + splits[1] + "X"));
		    domCells[i][alpha.indexOf(splits[1]) - 1].xed = false;
		}
	    }
	    domCells[alpha.indexOf(splits[1]) - 1][0].full = false;
	}
	
    }
}

// Single Xing out
function xify(select) {
    row = getRow(this.id);
    column = getColumn(this.id);
    if ( domCells[row][column].xed != true){
	var img = document.createElement("IMG");
	img.src = x_img;
	img.width = xSize - 11;
	img.setAttribute('id', this.id + "X");
	$(this).html(img);
	domCells[row][column].xed = true;
    }
    else  {
	removeElement(document.getElementById(this.id + "X"));
	domCells[row][column].xed = false;
	
    }
    
    //domCells[this].xed = "true";
}
function getColumn(location) {
    sliced = location.slice(-1);
    var row = alpha.indexOf(sliced);
    row--;
    return row;
}

function getRow(location) {
    var thisid = location;
    var cols = thisid.substring(0, thisid.length-1);
    column = cols - 1;
    return column;
}

function removeElement(ele) {
    ele.parentNode.removeChild(ele);
}

// User board functionality
function gameFunction(){
    
}

// Testing this SHIT out
setBoard(size);


