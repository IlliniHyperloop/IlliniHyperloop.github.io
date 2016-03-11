var main = function() {
		var delay1 = 500; 
		var delay2 = 500;
		var time = 750; 
	$(".jumbotext").delay(delay1).fadeIn(time);
	$("#tron").delay(delay1).fadeIn(time);
	$(".alltext").delay(delay1).fadeIn(time);
	$("#top_view").fadeIn(time);
	$("#logo").delay(delay2).slideDown(time);
	$(".nav a").delay(delay2).slideDown(time);
};

$(document).ready(main);
