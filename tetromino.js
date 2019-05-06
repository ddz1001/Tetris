/*2d points to track position inside a 2 dimensional matrix */
function _2DCoordinate(ic, jc) {
	this.i = ic;
	this.j = jc;
}

/*Straight polyomino*/
function StraightPolyomino() {
	
	/*Initialize default state */
	this.p1 = new _2DCoordinate(1,0);
	this.p2 = new _2DCoordinate(1,1);
	this.p3 = new _2DCoordinate(1,2);
	this.p4 = new _2DCoordinate(1,3);
	
	this.pArray = [this.p1, this.p2, this.p3, this.p4];
	
	this.drawChar = 'I'; //Char identifier to be drawn on the field
	this.advanced = 1;
	this.retreated = 0;
	
	/*square bounding box */
	this.minI = 1;
	this.minJ = 3;
	this.maxI = 1;
	this.maxJ = 3;
	
	this.state = 0; //Current state
	this.stateChange = -1;
	
	/* Update state if changed */
	this.updateState = function() {
		switch(this.state) {
			case 0:
				this.state0();
				break;
			case 1:
				this.state1();
				break;
			case 2:
				this.state2();
				break;
			case 3:
				this.state3();
				break;
			default:
				break;
				
		}
	}
	
	/*Advance the state forward */
	this.advanceState = function() {
		this.state = (this.state < 3) ? this.state + 1 : 0;
		this.updateState();
		this.stateChange = this.advanced;
	}
	
	/*Retreat the state */
	this.retreatState = function() {
		this.state = (this.state > 0) ? this.state - 1 : 3;
		this.updateState();
		this.stateChanged = this.retreated;
	}
	
	/*Upright position */
	this.state0 = function() {
		this.p1.i = 1;
		this.p1.j = 0;
		
		this.p2.i = 1;
		this.p2.j = 1;
		
		this.p3.i = 1;
		this.p3.j = 2;
		
		this.p4.i = 1;
		this.p4.j = 3;
		
		this.minI = 1;
		this.minJ = 3;
		
		this.maxI = 1;
		this.maxJ = 3;
	}
	
	/*Rightward position */
	this.state1 = function() {
		this.p1.i = 0;
		this.p1.j = 2;
		
		this.p2.i = 1;
		this.p2.j = 2;
		
		this.p3.i = 2;
		this.p3.j = 2;
		
		this.p4.i = 3;
		this.p4.j = 2;
		
		this.minI = 0;
		this.minJ = 2;
		
		this.maxI = 3;
		this.maxJ = 2;
	}
	
	/*Upside down position*/
	this.state2 = function() {
		this.p1.i = 2;
		this.p1.j = 0;
		
		this.p2.i = 2;
		this.p2.j = 1;
		
		this.p3.i = 2;
		this.p3.j = 2;
		
		this.p4.i = 2;
		this.p4.j = 3;
		
		this.minI = 2;
		this.minJ = 0;
		
		this.maxI = 2;
		this.maxJ = 3;
	}
	
	/*Leftward position*/
	this.state3 = function() {
		this.p1.i = 0;
		this.p1.j = 1;
		
		this.p2.i = 1;
		this.p2.j = 1;
		
		this.p3.i = 2;
		this.p3.j = 1;
		
		this.p4.i = 3;
		this.p4.j = 1;
		
		this.minI = 0;
		this.minJ = 1;
		
		this.maxI = 3;
		this.maxJ = 1;
	}
	
}

/*Square polyomino */
function SquarePolyomino() {
	/*Initialize default state */
	this.p1 = new _2DCoordinate(0,1);
	this.p2 = new _2DCoordinate(0,2);
	this.p3 = new _2DCoordinate(1,1);
	this.p4 = new _2DCoordinate(1,2);
	
	this.pArray = [this.p1, this.p2, this.p3, this.p4];
	
	this.drawChar = 'O'; //Char identifier to be drawn on the field
	this.advanced = 1;
	this.retreated = 0;
	
	/*square bounding box */
	this.minI = 1;
	this.minJ = 1;
	this.maxI = 1;
	this.maxJ = 2;
	
	this.state = 0; //Current state
	this.stateChange = -1;
	
	/* Update state if changed */
	this.updateState = function() {
		switch(this.state) {
			case 0:
				this.state0();
				break;
			case 1:
				this.state1();
				break;
			case 2:
				this.state2();
				break;
			case 3:
				this.state3();
				break;
			default:
				break;
				
		}
	}
	
	/*Advance the state forward */
	this.advanceState = function() {
		this.state = (this.state < 3) ? this.state + 1 : 0;
		this.updateState();
		this.stateChange = this.advanced;
	}
	
	/*Retreat the state */
	this.retreatState = function() {
		this.state = (this.state > 0) ? this.state - 1 : 3;
		this.updateState();
		this.stateChanged = this.retreated;
	}
	
	/*Upright position */
	this.state0 = function() {
		this.p1.i = 0;
		this.p1.j = 1;
		
		this.p2.i = 0;
		this.p2.j = 2;
		
		this.p3.i = 1;
		this.p3.j = 1;
		
		this.p4.i = 1;
		this.p4.j = 2;
		
		this.minI = 1;
		this.minJ = 1;
		
		this.maxI = 1;
		this.maxJ = 2;
	}
	
	/*Rightward position */
	this.state1 = function() {
		this.p1.i = 0;
		this.p1.j = 1;
		
		this.p2.i = 0;
		this.p2.j = 2;
		
		this.p3.i = 1;
		this.p3.j = 1;
		
		this.p4.i = 1;
		this.p4.j = 2;
		
		this.minI = 1;
		this.minJ = 1;
		
		this.maxI = 1;
		this.maxJ = 2;
	}
	
	/*Upside down position*/
	this.state2 = function() {
		this.p1.i = 0;
		this.p1.j = 1;
		
		this.p2.i = 0;
		this.p2.j = 2;
		
		this.p3.i = 1;
		this.p3.j = 1;
		
		this.p4.i = 1;
		this.p4.j = 2;
		
		this.minI = 1;
		this.minJ = 1;
		
		this.maxI = 1;
		this.maxJ = 2;
	}
	
	/*Leftward position*/
	this.state3 = function() {
		this.p1.i = 0;
		this.p1.j = 1;
		
		this.p2.i = 0;
		this.p2.j = 2;
		
		this.p3.i = 1;
		this.p3.j = 1;
		
		this.p4.i = 1;
		this.p4.j = 2;
		
		this.minI = 1;
		this.minJ = 1;
		
		this.maxI = 1;
		this.maxJ = 2;
	}
	
}

/*J hook polyomino */
function JPolyomino() {
	
	/*Initialize default state */
	this.p1 = new _2DCoordinate(0,0);
	this.p2 = new _2DCoordinate(1,0);
	this.p3 = new _2DCoordinate(1,1);
	this.p4 = new _2DCoordinate(1,2);
	
	this.pArray = [this.p1, this.p2, this.p3, this.p4];
	
	this.drawChar = 'J'; //Char identifier to be drawn on the field
	this.advanced = 1;
	this.retreated = 0;
	
	/*square bounding box */
	this.minI = 0;
	this.minJ = 0;
	this.maxI = 1;
	this.maxJ = 2;
	
	this.state = 0; //Current state
	this.stateChange = -1;
	
	/* Update state if changed */
	this.updateState = function() {
		switch(this.state) {
			case 0:
				this.state0();
				break;
			case 1:
				this.state1();
				break;
			case 2:
				this.state2();
				break;
			case 3:
				this.state3();
				break;
			default:
				break;
				
		}
	}
	/*Advance the state forward */
	this.advanceState = function() {
		this.state = (this.state < 3) ? this.state + 1 : 0;
		this.updateState();
		this.stateChange = this.advanced;
	}
	/*Retreat the state */
	this.retreatState = function() {
		this.state = (this.state > 0) ? this.state - 1 : 3;
		this.updateState();
		this.stateChanged = this.retreated;
	}
	/*Upright position */
	this.state0 = function() {
		this.p1.i = 0;
		this.p1.j = 0;
		
		this.p2.i = 1;
		this.p2.j = 0;
		
		this.p3.i = 1;
		this.p3.j = 1;
		
		this.p4.i = 1;
		this.p4.j = 2;
		
		this.minI = 0;
		this.minJ = 0;
		
		this.maxI = 1;
		this.maxJ = 2;
	}
	/*Rightward position */
	this.state1 = function() {
		this.p1.i = 0;
		this.p1.j = 1;
		
		this.p2.i = 0;
		this.p2.j = 2;
		
		this.p3.i = 1;
		this.p3.j = 1;
		
		this.p4.i = 2;
		this.p4.j = 1;
		
		this.minI = 1;
		this.minJ = 1;
		
		this.maxI = 2;
		this.maxJ = 2;
	}
	/*Upside down position*/
	this.state2 = function() {
		this.p1.i = 1;
		this.p1.j = 0;
		
		this.p2.i = 1;
		this.p2.j = 1;
		
		this.p3.i = 1;
		this.p3.j = 2;
		
		this.p4.i = 2;
		this.p4.j = 2;
		
		this.minI = 1;
		this.minJ = 0;
		
		this.maxI = 2;
		this.maxJ = 2;
	}
	/*Leftward position*/
	this.state3 = function() {
		this.p1.i = 0;
		this.p1.j = 1;
		
		this.p2.i = 1;
		this.p2.j = 1;
		
		this.p3.i = 2;
		this.p3.j = 1;
		
		this.p4.i = 2;
		this.p4.j = 0;
		
		this.minI = 0;
		this.minJ = 0;
		
		this.maxI = 2;
		this.maxJ = 1;
	}
	
}
/* L hook polyomino */
function LPolyomino() {
	
	/*Initialize default state */
	this.p1 = new _2DCoordinate(0,2);
	this.p2 = new _2DCoordinate(1,0);
	this.p3 = new _2DCoordinate(1,1);
	this.p4 = new _2DCoordinate(1,2);
	
	this.pArray = [this.p1, this.p2, this.p3, this.p4];
	
	this.drawChar = 'L'; //Char identifier to be drawn on the field
	this.advanced = 1;
	this.retreated = 0;
	
	/*square bounding box */
	this.minI = 0;
	this.minJ = 0;	
	this.maxI = 2;
	this.maxJ = 2;
	
	this.state = 0; //Current state
	this.stateChange = -1;
	
	/* Update state if changed */
	this.updateState = function() {
		switch(this.state) {
			case 0:
				this.state0();
				break;
			case 1:
				this.state1();
				break;
			case 2:
				this.state2();
				break;
			case 3:
				this.state3();
				break;
			default:
				break;
				
		}
	}
	
	/*Advance the state forward */
	this.advanceState = function() {
		this.state = (this.state < 3) ? this.state + 1 : 0;
		this.updateState();
		this.stateChange = this.advanced;
	}
	
	/*Retreat the state */
	this.retreatState = function() {
		this.state = (this.state > 0) ? this.state - 1 : 3;
		this.updateState();
		this.stateChanged = this.retreated;
	}
	
	/*Upright position */
	this.state0 = function() {
		this.p1.i = 0;
		this.p1.j = 2;
		
		this.p2.i = 1;
		this.p2.j = 0;
		
		this.p3.i = 1;
		this.p3.j = 1;
		
		this.p4.i = 1;
		this.p4.j = 2;
		
		this.minI = 0;
		this.minJ = 0;
		
		this.maxI = 2;
		this.maxJ = 2;
	}
	
	/*Rightward position */
	this.state1 = function() {
		this.p1.i = 0;
		this.p1.j = 1;
		
		this.p2.i = 1;
		this.p2.j = 1;
		
		this.p3.i = 2;
		this.p3.j = 1;
		
		this.p4.i = 2;
		this.p4.j = 2;
		
		this.minI = 0;
		this.minJ = 1;
		
		this.maxI = 2;
		this.maxJ = 2;
	}
	
	/*Upside down position*/
	this.state2 = function() {
		this.p1.i = 1;
		this.p1.j = 0;
		
		this.p2.i = 1;
		this.p2.j = 1;
		
		this.p3.i = 1;
		this.p3.j = 2;
		
		this.p4.i = 2;
		this.p4.j = 0;
		
		this.minI = 1;
		this.minJ = 0;
		
		this.maxI = 2;
		this.maxJ = 2;
	}
	
	/*Leftward position*/
	this.state3 = function() {
		this.p1.i = 0;
		this.p1.j = 0;
		
		this.p2.i = 0;
		this.p2.j = 1;
		
		this.p3.i = 1;
		this.p3.j = 1;
		
		this.p4.i = 2;
		this.p4.j = 1;
		
		this.minI = 0;
		this.minJ = 0;
		
		this.maxI = 2;
		this.maxJ = 1;
	}
	
}

/*T pipe polyomino*/
function TPolyomino() {
	
	/*Initialize default state */
	this.p1 = new _2DCoordinate(0,1);
	this.p2 = new _2DCoordinate(1,0);
	this.p3 = new _2DCoordinate(1,1);
	this.p4 = new _2DCoordinate(1,2);
	
	this.pArray = [this.p1, this.p2, this.p3, this.p4];
	
	this.drawChar = 'T'; //Char identifier to be drawn on the field
	this.advanced = 1;
	this.retreated = 0;
	
	/*square bounding box */
	this.minI = 0;
	this.minJ = 2;
	this.maxI = 1;
	this.maxJ = 2;
	
	
	this.state = 0; //Current state
	this.stateChange = -1;
	
	/* Update state if changed */
	this.updateState = function() {
		switch(this.state) {
			case 0:
				this.state0();
				break;
			case 1:
				this.state1();
				break;
			case 2:
				this.state2();
				break;
			case 3:
				this.state3();
				break;
			default:
				break;
				
		}
	}
	
	/*Advance the state forward */
	this.advanceState = function() {
		this.state = (this.state < 3) ? this.state + 1 : 0;
		this.updateState();
		this.stateChange = this.advanced;
	}
	
	/*Retreat the state */
	this.retreatState = function() {
		this.state = (this.state > 0) ? this.state - 1 : 3;
		this.updateState();
		this.stateChanged = this.retreated;
	}
	
	/*Upright position */
	this.state0 = function() {
		this.p1.i = 0;
		this.p1.j = 1;
		
		this.p2.i = 1;
		this.p2.j = 0;
		
		this.p3.i = 1;
		this.p3.j = 1;
		
		this.p4.i = 1;
		this.p4.j = 2;
		
		this.minI = 0;
		this.minJ = 0;
		
		this.maxI = 2;
		this.maxJ = 2;
	}
	
	/*Rightward position */
	this.state1 = function() {
		this.p1.i = 0;
		this.p1.j = 1;
		
		this.p2.i = 1;
		this.p2.j = 1;
		
		this.p3.i = 1;
		this.p3.j = 2;
		
		this.p4.i = 2;
		this.p4.j = 1;
		
		this.minI = 0;
		this.minJ = 1;
		
		this.maxI = 2;
		this.maxJ = 2;
	}
	
	/*Upside down position*/
	this.state2 = function() {
		this.p1.i = 1;
		this.p1.j = 0;
		
		this.p2.i = 1;
		this.p2.j = 1;
		
		this.p3.i = 1;
		this.p3.j = 2;
		
		this.p4.i = 2;
		this.p4.j = 1;
		
		this.minI = 1;
		this.minJ = 0;
		
		this.maxI = 2;
		this.maxJ = 2;
	}
	
	/*Leftward position*/
	this.state3 = function() {
		this.p1.i = 0;
		this.p1.j = 1;
		
		this.p2.i = 1;
		this.p2.j = 0;
		
		this.p3.i = 1;
		this.p3.j = 1;
		
		this.p4.i = 2;
		this.p4.j = 1;
		
		this.minI = 0;
		this.minJ = 1;
		
		this.maxI = 2;
		this.maxJ = 1;
	}
	
}

/* S jagged polyomino */
function SPolyomino() {
	
	/*Initialize default state */
	this.p1 = new _2DCoordinate(0,1);
	this.p2 = new _2DCoordinate(0,2);
	this.p3 = new _2DCoordinate(1,0);
	this.p4 = new _2DCoordinate(1,1);
	
	this.pArray = [this.p1, this.p2, this.p3, this.p4];
	
	this.drawChar = 'S'; //Char identifier to be drawn on the field
	this.advanced = 1;
	this.retreated = 0;
	
	/*square bounding box */
	this.minI = 0;
	this.minJ = 0;
	this.maxI = 1;
	this.maxJ = 2;
	
	this.state = 0; //Current state
	this.stateChange = -1;
	
	/* Update state if changed */
	this.updateState = function() {
		switch(this.state) {
			case 0:
				this.state0();
				break;
			case 1:
				this.state1();
				break;
			case 2:
				this.state2();
				break;
			case 3:
				this.state3();
				break;
			default:
				break;
				
		}
	}
	
	/*Advance the state forward */
	this.advanceState = function() {
		this.state = (this.state < 3) ? this.state + 1 : 0;
		this.updateState();
		this.stateChange = this.advanced;
	}
	
	/*Retreat the state */
	this.retreatState = function() {
		this.state = (this.state > 0) ? this.state - 1 : 3;
		this.updateState();
		this.stateChanged = this.retreated;
	}
	
	/*Upright position */
	this.state0 = function() {
		this.p1.i = 0;
		this.p1.j = 1;
		
		this.p2.i = 0;
		this.p2.j = 2;
		
		this.p3.i = 1;
		this.p3.j = 0;
		
		this.p4.i = 1;
		this.p4.j = 1;
		
		this.minI = 0;
		this.minJ = 0;
		
		this.maxI = 1;
		this.maxJ = 2;
	}
	
	/*Rightward position */
	this.state1 = function() {
		this.p1.i = 0;
		this.p1.j = 1;
		
		this.p2.i = 1;
		this.p2.j = 1;
		
		this.p3.i = 1;
		this.p3.j = 2;
		
		this.p4.i = 2;
		this.p4.j = 2;
		
		this.minI = 0;
		this.minJ = 1;
		
		this.maxI = 2;
		this.maxJ = 2;
	}
	/*Upside down position*/
	this.state2 = function() {
		this.p1.i = 1;
		this.p1.j = 1;
		
		this.p2.i = 1;
		this.p2.j = 2;
		
		this.p3.i = 2;
		this.p3.j = 0;
		
		this.p4.i = 2;
		this.p4.j = 1;
		
		this.minI = 1;
		this.minJ = 0;
		
		this.maxI = 2;
		this.maxJ = 2;
	}
	/*Leftward position*/
	this.state3 = function() {
		this.p1.i = 0;
		this.p1.j = 0;
		
		this.p2.i = 1;
		this.p2.j = 0;
		
		this.p3.i = 1;
		this.p3.j = 1;
		
		this.p4.i = 2;
		this.p4.j = 1;
		
		this.minI = 0;
		this.minJ = 0;
		
		this.maxI = 2;
		this.maxJ = 1;
	}
	
}

/*Z jagged polyomino*/
function ZPolyomino() {
	
	/*Initialize default state */
	this.p1 = new _2DCoordinate(0,0);
	this.p2 = new _2DCoordinate(0,1);
	this.p3 = new _2DCoordinate(1,1);
	this.p4 = new _2DCoordinate(1,2);
	
	this.pArray = [this.p1, this.p2, this.p3, this.p4];
	
	this.drawChar = 'Z'; //Char identifier to be drawn on the field
	this.advanced = 1;
	this.retreated = 0;
	
	/*square bounding box */
	this.minI = 0;
	this.minJ = 0;	
	this.maxI = 1;
	this.maxJ = 2;
	
	this.state = 0; //Current state
	this.stateChange = -1;
	
	/* Update state if changed */
	this.updateState = function() {
		switch(this.state) {
			case 0:
				this.state0();
				break;
			case 1:
				this.state1();
				break;
			case 2:
				this.state2();
				break;
			case 3:
				this.state3();
				break;
			default:
				break;
				
		}
	}
	
	/*Advance the state forward */
	this.advanceState = function() {
		this.state = (this.state < 3) ? this.state + 1 : 0;
		this.updateState();
		this.stateChange = this.advanced;
	}
	
	/*Retreat the state */
	this.retreatState = function() {
		this.state = (this.state > 0) ? this.state - 1 : 3;
		this.updateState();
		this.stateChanged = this.retreated;
	}
	
	/*Upright position */
	this.state0 = function() {
		this.p1.i = 0;
		this.p1.j = 0;
		
		this.p2.i = 0;
		this.p2.j = 1;
		
		this.p3.i = 1;
		this.p3.j = 1;
		
		this.p4.i = 1;
		this.p4.j = 2;
		
		this.minI = 0;
		this.minJ = 0;
		
		this.maxI = 1;
		this.maxJ = 2;
	}
	
	/*Rightward position */
	this.state1 = function() {
		this.p1.i = 0;
		this.p1.j = 2;
		
		this.p2.i = 1;
		this.p2.j = 1;
		
		this.p3.i = 1;
		this.p3.j = 2;
		
		this.p4.i = 2;
		this.p4.j = 1;
		
		this.minI = 1;
		this.minJ = 1;
		
		this.maxI = 2;
		this.maxJ = 2;
	}
	
	/*Upside down position*/
	this.state2 = function() {
		this.p1.i = 1;
		this.p1.j = 0;
		
		this.p2.i = 1;
		this.p2.j = 1;
		
		this.p3.i = 2;
		this.p3.j = 1;
		
		this.p4.i = 2;
		this.p4.j = 2;
		
		this.minI = 1;
		this.minJ = 0;
		
		this.maxI = 2;
		this.maxJ = 2;
	}
	
	/*Leftward position*/
	this.state3 = function() {
		this.p1.i = 1;
		this.p1.j = 1;
		
		this.p2.i = 1;
		this.p2.j = 0;
		
		this.p3.i = 0;
		this.p3.j = 1;
		
		this.p4.i = 2;
		this.p4.j = 0;
	}
	
}