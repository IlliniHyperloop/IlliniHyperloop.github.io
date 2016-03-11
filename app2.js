var b = 1;

var names = [
"Mizan Rahman",
"Scott Qualkenbush",
"Seth Faletsky",
"Kyle Weiskircher",
"Jay Mahadev",
"Rishab Pohane",
"Nick Wodrich",
"Christopher Wessel",
"Bala Chandrasekaran",
"Joseph Kasson",
"Jordyn Robare"
]; 

var subs = [
"Aerodynamics", 
"Chassis", 
"Electronics", 
"Power",
"Manufacturing"
]

var positions = [
"Founder & Co-President",
"VP of Engineering",
"Co-President",
"Aerodynamics Subsystem Lead",
"Chassis Subsystem Lead",
"Electronics Subsystem Lead",
"Safety/Reliability Subsystem Lead",
"Manufacturing Subsystem Lead",
"Business/Finance Subsystem Lead",
"Marketing/Public Relations Subsystem Lead",
"Industrial Design"
]; 

var duties= [
"Duties: Aero, Dynamics, Popcorn", 	
"Duties: Chasis, Peanuts, Cleaning", 	
"Duties: Electricty, Tronics, CPUs", 	
"Duties: Power, GigaWatts, Power Hours", 	
"Duties: Manufacturing, Powerfacturing, Deep Web" 	
]; 
function intro() {
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

function member_left() {
	if (b > 1)
	member(b-1);		
};

function member_right() {
	if (b < 5)
	member(b+1);		
};

function member_change(event) {
		var num = event.data.param;
		member(num);
};

function member(i) {
		var num = i;
		console.log(num);
		var time1 = 500; 
		b = num; 
		//var picURL = "url(images/" + num + ".jpg)";
		//var bioURL = "bios/" + num + ".txt";
		var picURL = "url(subteams/" + num + ".jpg)";
		var bioURL = "subteams/" + num + ".txt";
		var buttonURL = "#b" + num;

		buttonReset();
		$(buttonURL).css("background", "#767676");
		$('#circular').animate({'opacity': 0}, time1, function () {
				$('#circular').css("background-image", picURL); 
		}).animate({'opacity': 1}, time1);
		$('#member_name').animate({'opacity': 0}, time1, function () {
				$(this).text(subs[num-1]);
				//$(this).text(names[num-1]);
		}).animate({'opacity': 1}, time1);
		$('#member_pos').animate({'opacity': 0}, time1, function () {
				$(this).text(duties[num-1]);
				//$(this).text(positions[num-1]);
		}).animate({'opacity': 1}, time1);
		$('#bio').animate({'opacity': 0}, time1, function () {
				$(this).load(bioURL);
		}).animate({'opacity': 1}, time1);
};

function hi() {
	console.log("hi");
};

function buttonReset() {
	var normal = "#a6a6a6";
	$('#b1').css("background", normal); 
	$('#b2').css("background", normal); 
	$('#b3').css("background", normal); 
	$('#b4').css("background", normal); 
	$('#b5').css("background", normal); 
	$('#b6').css("background", normal); 
	$('#b7').css("background", normal); 
	$('#b8').css("background", normal); 
	$('#b9').css("background", normal); 
	$('#b10').css("background", normal); 
	$('#b11').css("background", normal); 
};

function scrollIntro() {
		$('html, body').animate({
				scrollTop: $("#intro_view").offset().top
		}, 1000);
};

function scrollMembers() {
		$('html, body').animate({
				scrollTop: $("#members_view").offset().top
		}, 1000);
};

function scrollContact() {
		$('html, body').animate({
				scrollTop: $("#bottom_view").offset().top
		}, 1000);
};

$(document).ready(intro);

$(document).ready(function(){
		$("#nav2").click(scrollIntro);
		$("#nav3").click(scrollMembers);
		$("#nav5").click(scrollContact);
});

$(document).ready(function(){
		$(".tr a.left").click(member_left);
		$(".tr a.right").click(member_right);
});
$(document).ready(function(){
		$("#b1").click({param: 1}, member_change);
		$("#b2").click({param: 2}, member_change);
		$("#b3").click({param: 3}, member_change);
		$("#b4").click({param: 4}, member_change);
		$("#b5").click({param: 5}, member_change);
		$("#b6").click({param: 6}, member_change);
		$("#b7").click({param: 7}, member_change);
		$("#b8").click({param: 8}, member_change);
		$("#b9").click({param: 9}, member_change);
		$("#b10").click({param: 10}, member_change);
		$("#b11").click({param: 11}, member_change);
});




