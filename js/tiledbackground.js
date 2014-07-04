//String, String, Integer, Integer, String
//Color set options: DARK
function setTiledBackground(canvasId, elementId, squareWidth, squareHeight, colorCombination) {
//Before anything, set canvas size
$("#" + canvasId).css("width", $("#" + elementId).css("width"));
$("#" + canvasId).css("height", $("#" + elementId).css("height"));
var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d');

/** Randoms **/
var colorSet1 = ["rgb(0, 98, 139)", "rgb(230, 230, 220)", "rgb(129, 165, 148)"];
var colorSet2 = ["rgb(68, 50, 102)", "rgb(195, 195, 229", "rgb(241, 240, 255)", "rgb(140, 72, 159)"];
var colorSet3 = ["rgb(232, 208, 169)", "rgb(183, 175, 163)", "rgb(193, 218, 214)", "rgb(245, 250, 250)", 
					"rgb(172, 209, 233)", "rgb(109, 146, 155)"];
var colorSet4 = ["rgb(255, 255, 102)", "rgb(255, 204, 0)", "rgb(255, 153, 0)", "rgb(255, 0, 0)"];
var colorSet5 = ["rgb(204, 0, 0)", "rgb(153, 255, 0)", "rgb(255, 204, 0)"," rgb(51, 51, 255)"];
var colors = [colorSet1, colorSet2, colorSet3, colorSet4, colorSet5];
/** END Randoms **/

/** Darks **/
var colorSet6 = ["rgb(3, 2, 2)", "rgb(15, 12, 12)", "rgb(48, 48, 46)", "rgb(28, 28, 22)"];
var colorSet7 = ["rgb(3, 2, 2)", "rgb(8, 7, 7)"];
var darkColors = [colorSet7]

function assignToElement(){
  dataUrl = canvas.toDataURL();
  document.getElementById(elementId).style.background='url('+dataUrl+')';
}

function drawTiles() {
  var canvasWidth = $("#" + canvasId).width();
  var canvasHeight = $("#" + canvasId).height();
  var numOfCols = canvasWidth / squareWidth;
  var numOfRows = canvasHeight / squareHeight;
  var colorSet = null;
  if(colorCombination === "DARKS")
 	colorSet = darkColors[Math.floor(Math.random() * darkColors.length)];
  else
    colorSet = colors[Math.floor(Math.random() * colors.length)];
  for(var i = 0; i < numOfCols; i++) {
	for(var j = 0; j < numOfRows; j++) {
		ctx.fillStyle = colorSet[Math.floor(Math.random() * colorSet.length)];
		ctx.fillRect(squareWidth * i, squareHeight * j, squareWidth, squareHeight);
	}
  }
}

drawTiles();
assignToElement();
}