var gWOrientation, gWH, gWW, swiped;
$(document).ready(function() {
	onWindowResize();
	swiped = false;

	$("#content").swipeListener({
		vthreshold: 30,
		hthreshold: 50,
		callBack: function (dir) {
			contentSwiped(dir);
		}
	});
});

function contentSwiped(dir) {
	if ( dir.right ) {
		clickedButton();
		$.ui.toggleNavMenu(false);
	}
	if ( dir.left ) {
		clickedClear();
		$.ui.toggleNavMenu(true);
	}
	swiped = true;
}

function clickedContent() {
	if (!swiped) {
		$.ui.toggleNavMenu();
		swiped = false;
	}
	onWindowResize();
	swiped = false;
}

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

function clickedClear() {
	id$("textInput").value = "";
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

/*	var newWidth = id$("navbar").offsetWidth - id$("textSubmit").offsetWidth - id$("textTools").offsetWidth - 50;
	$("#textInput").css("width", newWidth + "px");*/
}

window.onresize = function() {
	onWindowResize();
};
