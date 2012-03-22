var gWOrientation, gWH, gWW;
$(document).ready(function() {
	onWindowResize();
});

function clickedButton() {
	var objText = $("#objText");
	objText.html(id$("textInput").value);
	var textH = id$("objText").offsetHeight;
	var textW = id$("objText").offsetWidth;
	objText.css("font-size", gWH + "px");

	do {
		objText.css("font-size", (parseInt(objText.css("font-size"), 10) - 1) + "px");
	} while ((id$("objText").offsetWidth > gWW));

	do {
		objText.css("font-size", (parseInt(objText.css("font-size"), 10) - 1) + "px");
	} while ((id$("objText").offsetHeight > gWH));

	//console.log(id$("objText").offsetHeight + " " + id$("objText").offsetWidth + " " + parseInt(objText.css("font-size"), 10) + " " + gWH);
}

function clickedTools() {
	$("#jQUi").popup({
		title: "TOOLS",
		message: "hello!",
		cancelText: "CLOSE",
		cancelCallback: function() {},
		cancelOnly: true
	});
}

function id$(i) {
	return document.getElementById(i);
}

function onWindowResize() {
	gWH = window.innerHeight * 0.9;
	gWW = window.innerWidth * 0.9;
	if (gWW > gWH) {
		gWOrientation = "landscape";
	} else {
		gWOrientation = "portrait";
	}
	var newWidth = id$("navbar").offsetWidth - id$("textSubmit").offsetWidth - id$("textTools").offsetWidth - 50;
	console.log(id$("textSubmit").offsetWidth + " " + id$("textTools").offsetWidth + " " + id$("navbar").offsetWidth);
	$("#textInput").css("width", newWidth + "px");
}

window.onresize = function() {
	onWindowResize();
};
