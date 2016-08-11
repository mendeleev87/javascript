var calculateRoots = function (a, b, c) {
	var d = b*b - 4*a*c;
	if (d < 0) {
		return 'No real roots';
	} else if (d === 0) {
		return -b/(2*a);
	} else {
		var x1 = (-b + Math.sqrt(d))/(2*a);
		var x2 = (-b - Math.sqrt(d))/(2*a);
		return {x1: x1, x2:x2};
	}
};

//console.log(calculateRoots(2, 5, -3));
//console.log(calculateRoots(2, -4, 2));
//console.log(calculateRoots(4, 2, 1));

var calculateKnots = function(kmh) {
	var knotsPerKmh = 0.5399568034557235;
	return Math.round(kmh * knotsPerKmh * 100) / 100;
};


//console.log(calculateKnots(20));
//console.log(calculateKnots(112));
//console.log(calculateKnots(400));

function calcCylinderVol(r, h) {
	return Math.PI * r * r * h;
}

//console.log(calcCylinderVol(2, 4));
//console.log(calcCylinderVol(5, 8));
//console.log(calcCylinderVol(12, 3));

