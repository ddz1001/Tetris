
var spriteMap = []; //Sprite map associated with character codes

/*Draw the field to a canvas. Canvas must be w240 by h600*/
function drawField(fld, context) {
	xc = 0;
	yc = 0;
	
	xr = 24;
	yr = 24;
	
	for(i = 24; i >= 0; i--) {
		for(j = 0; j < fld[i].length; j++) {
			context.drawImage(getImage(fld[i][j]), xc, yc);
			xc += xr;
		}
		xc = 0;
		yc += yr;
	}
}

/*Get image associated with a character */
function getImage(character) {
	return spriteMap[character.charCodeAt()];
}

/*Initialize sprite chacter map with chars and images. Both sets must be same length and conatain no duplicates. 
Sets are associated in order. */
function initializeSpriteMap(charset, imgset) {
	for(k = 0; k < 127; k++) {
		spriteMap[k] = null;
	}
	
	for(i = 0; i < charset.length; i++) {
		spriteMap[charset[i].charCodeAt()] = imgset[i];
	}
}

