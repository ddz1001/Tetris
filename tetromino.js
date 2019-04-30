function _2DCoordinate(ic, jc) {
	this.i = ic;
	this.j = jc;
}

function StraightPolyomino() {
	this.p1 = new _2DCoordinate(1,0);
	this.p2 = new _2DCoordinate(1,1);
	this.p3 = new _2DCoordinate(1,2);
	this.p4 = new _2DCoordinate(1,3);
	
	this.drawChar = 'I';
	this.advanced = 1;
	this.retreated = 0;
	this.minI = 1;
	this.minJ = 3;
	this.maxI = 1;
	this.maxJ = 3;
	
	this.state = 0;
	this.stateChange = -1;
	
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
	
	this.advanceState = function() {
		this.state = (this.state < 3) ? this.state + 1 : 0;
		this.updateState();
		this.stateChange = this.advanced;
	}
	
	this.retreatState = function() {
		this.state = (this.state > 0) ? this.state - 1 : 3;
		this.updateState();
		this.stateChanged = this.retreated;
	}
	
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

function SquarePolyomino() {
	this.p1 = new _2DCoordinate(0,1);
	this.p2 = new _2DCoordinate(0,2);
	this.p3 = new _2DCoordinate(1,1);
	this.p4 = new _2DCoordinate(1,2);
	
	this.drawChar = 'O';
	this.advanced = 1;
	this.retreated = 0;
	this.minI = 1;
	this.minJ = 1;
	this.maxI = 1;
	this.maxJ = 2;
	
	this.state = 0;
	this.stateChange = -1;
	
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
	
	this.advanceState = function() {
		this.state = (this.state < 3) ? this.state + 1 : 0;
		this.updateState();
		this.stateChange = this.advanced;
	}
	
	this.retreatState = function() {
		this.state = (this.state > 0) ? this.state - 1 : 3;
		this.updateState();
		this.stateChanged = this.retreated;
	}
	
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

function JPolyomino() {
	this.p1 = new _2DCoordinate(0,0);
	this.p2 = new _2DCoordinate(1,0);
	this.p3 = new _2DCoordinate(1,1);
	this.p4 = new _2DCoordinate(1,2);
	
	this.drawChar = 'J';
	this.advanced = 1;
	this.retreated = 0;
	this.minI = 0;
	this.minJ = 0;
	this.maxI = 1;
	this.maxJ = 2;
	
	this.state = 0;
	this.stateChange = -1;
	
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
	
	this.advanceState = function() {
		this.state = (this.state < 3) ? this.state + 1 : 0;
		this.updateState();
		this.stateChange = this.advanced;
	}
	
	this.retreatState = function() {
		this.state = (this.state > 0) ? this.state - 1 : 3;
		this.updateState();
		this.stateChanged = this.retreated;
	}
	
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

function LPolyomino() {
	this.p1 = new _2DCoordinate(0,2);
	this.p2 = new _2DCoordinate(1,0);
	this.p3 = new _2DCoordinate(1,1);
	this.p4 = new _2DCoordinate(1,2);
	
	this.drawChar = 'L';
	this.advanced = 1;
	this.retreated = 0;
	this.minI = 0;
	this.minJ = 0;	
	this.maxI = 2;
	this.maxJ = 2;
	
	this.state = 0;
	this.stateChange = -1;
	
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
	
	this.advanceState = function() {
		this.state = (this.state < 3) ? this.state + 1 : 0;
		this.updateState();
		this.stateChange = this.advanced;
	}
	
	this.retreatState = function() {
		this.state = (this.state > 0) ? this.state - 1 : 3;
		this.updateState();
		this.stateChanged = this.retreated;
	}
	
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
	
function TPolyomino() {
	this.p1 = new _2DCoordinate(0,1);
	this.p2 = new _2DCoordinate(1,0);
	this.p3 = new _2DCoordinate(1,1);
	this.p4 = new _2DCoordinate(1,2);
	
	this.drawChar = 'T';
	this.advanced = 1;
	this.retreated = 0;
	this.minI = 0;
	this.minJ = 2;
	this.maxI = 1;
	this.maxJ = 2;
	
	
	this.state = 0;
	this.stateChange = -1;
	
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
	
	this.advanceState = function() {
		this.state = (this.state < 3) ? this.state + 1 : 0;
		this.updateState();
		this.stateChange = this.advanced;
	}
	
	this.retreatState = function() {
		this.state = (this.state > 0) ? this.state - 1 : 3;
		this.updateState();
		this.stateChanged = this.retreated;
	}
	
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

function SPolyomino() {
	this.p1 = new _2DCoordinate(0,1);
	this.p2 = new _2DCoordinate(0,2);
	this.p3 = new _2DCoordinate(1,0);
	this.p4 = new _2DCoordinate(1,1);
	
	this.drawChar = 'S';
	this.advanced = 1;
	this.retreated = 0;
	this.minI = 0;
	this.minJ = 0;
	this.maxI = 1;
	this.maxJ = 2;
	
	this.state = 0;
	this.stateChange = -1;
	
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
	
	this.advanceState = function() {
		this.state = (this.state < 3) ? this.state + 1 : 0;
		this.updateState();
		this.stateChange = this.advanced;
	}
	
	this.retreatState = function() {
		this.state = (this.state > 0) ? this.state - 1 : 3;
		this.updateState();
		this.stateChanged = this.retreated;
	}
	
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

function ZPolyomino() {
	this.p1 = new _2DCoordinate(0,0);
	this.p2 = new _2DCoordinate(0,1);
	this.p3 = new _2DCoordinate(1,1);
	this.p4 = new _2DCoordinate(1,2);
	
	this.drawChar = 'Z';
	this.advanced = 1;
	this.retreated = 0;
	this.minI = 0;
	this.minJ = 0;	
	this.maxI = 1;
	this.maxJ = 2;
	
	this.state = 0;
	this.stateChange = -1;
	
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
	
	this.advanceState = function() {
		this.state = (this.state < 3) ? this.state + 1 : 0;
		this.updateState();
		this.stateChange = this.advanced;
	}
	
	this.retreatState = function() {
		this.state = (this.state > 0) ? this.state - 1 : 3;
		this.updateState();
		this.stateChanged = this.retreated;
	}
	
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
	
	this.state3 = function() {
		this.p1.i = 0;
		this.p1.j = 1;
		
		this.p2.i = 1;
		this.p2.j = 0;
		
		this.p3.i = 0;
		this.p3.j = 1;
		
		this.p4.i = 2;
		this.p4.j = 0;
	}
	
}