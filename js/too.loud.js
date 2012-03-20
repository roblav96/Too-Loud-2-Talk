var gWOrientation, gWH, gWW, gIntFont;
$$(document).ready(function() {
	onWindowResize();
});

function clickedButton() {
	var objText = $$("#objText");
	objText.html(document.getElementById("textInput").value);
	var objTextSize = gIntFont;
	objText.css("font-size", objTextSize);
	console.log(objText.css("font-size"));
	var textH, textW;
	if (gWOrientation == "portrait") {
		do {
			textW = objText.width();
			objTextSize = objTextSize - 1;
			objText.css("font-size", objTextSize);
		} while (textW > gWW);
	} else {
		do {
			textH = objText.height();
			objTextSize = objTextSize - 1;
			objText.css("font-size", objTextSize);
		} while (textH > gWH);
	}
}

function onWindowResize() {
	gWH = window.innerHeight * 0.9;
	gWW = window.innerWidth * 0.9;
	gIntFont = gWH;
	if (gWW > gWH) {
		gWOrientation = "landscape";
	} else {
		gWOrientation = "portrait";
	}
	var btnW = $$("#textSubmit").outerWidth();
	$$("#textInput").css("width", ((gWW * 1.1) - btnW - 25));
	$$("#textInput").css("height", $$("#navbar").height() * 0.8);
	$$("#textInput").css("font-size", $$("#navbar").height() * 0.25);
	$$("#textSubmit").css("height", $$("#navbar").height() * 0.8);
}

window.onresize = function() {
	onWindowResize();
};
