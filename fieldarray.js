
var field = [
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
				['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N']
			];
var fieldRow = ['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'];			

var startLine = 23;
var killLine = 25;

var translateI;
var translateJ;

var removalList = [];
var activeTetromino;
var tracking = false;

function activateTetromino(tetro) {
	activeTetromino = tetro;
	tracking = true;
}

function releaseTetromino() {
	activeTetronimo = null;
	tracking = false;
}

function scanField() {
	for(i = 0; i < field.length; i++) {
		if(scanLine(i)) {
			removalList[removalList.length] = i;
		}
	}
}

function scanLine(i) {
	var complete = true;
	for(j = 0; j < field[i].length; j++) {
		complete &= (field[i][j] != 'N') ? true : false ;
	}
	
	return complete;
}

function removeLines() {
	removalList.sort(function(a, b){return a - b});
	var ptr = removalList.length - 1;
	for(i = 0; i < removalList.length; i++) {
		removeLine(removalList[ptr--]);
	}
	removalList = [];
}

function removeLine(x) {
	for(i = x; i < field.length - 1; i++) {
		field[i] = field[i + 1].slice();
	}
}
	
	