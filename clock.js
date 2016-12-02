document.addEventListener("DOMContentLoaded", function() {
	
	var x = 0;
	
	var tickTock = function() {
		x+=1; 
		document.getElementById("second").style.transform = "rotate(" + (x/60*360) + "deg)";
		document.getElementById("minute").style.transform = "rotate(" + (x/(60*60)*360) + "deg)";
		document.getElementById("hour").style.transform = "rotate(" + (x/(60*60*12)*360) + "deg)";
	};
	
	var interval = setInterval(tickTock,1000);

});