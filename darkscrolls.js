$(document).ready(function() {

var world = [
	[2,2,2,2,2,2,2,2,2,2],
	[2,1,1,1,1,1,1,1,1,2],
	[2,1,1,1,1,1,1,1,1,2],
	[2,1,1,1,1,1,1,1,1,2],
	[2,1,1,1,1,1,1,1,1,2],
	[2,1,1,1,1,1,1,1,1,2],
	[2,1,1,1,1,1,1,1,1,2],
	[2,1,1,1,1,1,1,1,1,2],
	[2,1,1,1,1,1,1,1,1,2],
	[2,1,1,1,1,1,1,1,1,2],
	[2,2,2,2,2,2,2,2,2,2]
	];

var mainChar = {
	x: 60,
	y: 60
}

function draw_mainChar(){
	document.getElementById('mainChar').style.top = mainChar.y +60 +"px";

}

function displayWorld(){
	var output = '';

	for(var i=0; i<world.length; i++){
		output += "<div class='row'>";
		for(var j=0; j<world[i].length; j++){
			if(world[i][j] == 2){
				output += "<div class='brick'></div>";
			}
			else if(world[i][j] == 1){
				output += "<div class='coin'></div>";
			}
			if(world[i][j] == 0){
				output += "<div class='empty'></div>";
			}
		}
		output += "</div>";
	}
	document.getElementById('world').innerHTML = output;
}

displayWorld();

document.onkeydown = function(e){
	if(e.keyCode==37)
	{
		if(mainChar.x)
		document.getElementById('mainChar').style.t;
	}
	console.log(e.keyCode);
}

});