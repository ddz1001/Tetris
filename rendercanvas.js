
var spriteMap = [];

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

function getImage(character) {
	return spriteMap[character.charCodeAt()];
}

function initializeSpriteMap(charset, imgset) {
	for(k = 0; k < 127; k++) {
		spriteMap[k] = null;
	}
	
	for(i = 0; i < charset.length; i++) {
		spriteMap[charset[i].charCodeAt()] = imgset[i];
	}
}

