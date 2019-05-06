/* Default images to be drawn to canvas. Must be 24x24.*/
var blankBlock = document.createElement("img"); blankBlock.setAttribute('src', 'sprite/blanksquare.bmp'); blankBlock.width = 24; blankBlock.height = 24;
var redBlock = document.createElement("img"); redBlock.setAttribute('src', 'sprite/redsquare.bmp'); redBlock.width = 24; redBlock.height = 24;
var blueBlock = document.createElement("img"); blueBlock.setAttribute('src', 'sprite/bluesquare.bmp'); blueBlock.width = 24; blueBlock.height = 24;
var cyanBlock = document.createElement("img"); cyanBlock.setAttribute('src', 'sprite/cyansquare.bmp'); cyanBlock.width = 24; cyanBlock.height = 24;
var greenBlock = document.createElement("img"); greenBlock.setAttribute('src', 'sprite/greensquare.bmp'); greenBlock.width = 24; greenBlock.height = 24;
var orangeBlock = document.createElement("img"); orangeBlock.setAttribute('src', 'sprite/orangesquare.bmp'); orangeBlock.width = 24; orangeBlock.height = 24;
var yellowBlock = document.createElement("img"); yellowBlock.setAttribute('src', 'sprite/yellowsquare.bmp'); yellowBlock.width = 24; yellowBlock.height = 24;
var purpleBlock = document.createElement("img"); purpleBlock.setAttribute('src', 'sprite/purplesquare.bmp'); purpleBlock.width = 24; purpleBlock.height = 24;

var imgset = [blankBlock,	redBlock,	 blueBlock,		cyanBlock,	 greenBlock, 	orangeBlock,	 yellowBlock,	 purpleBlock]; //Default image set
var charset= [	'N',		'Z', 		'J'	,		 		'I',		'S',		'L',				'O',			'T'	]; //Default character association