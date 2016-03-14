function mySend() {
	name = document.getElementById('name').value; 
	email = document.getElementById('email').value;
	subject = document.getElementById('subject').value; 
	message = document.getElementById('message').value; 

	if ((name=="") || (subject=="") || (message=="") || (email=="")){
		return; 
	}

	$.ajax({
		type: 'POST', 
		url: 'https://mandrillapp.com/api/1.0/messages/send.json',
		data: {
			'key': 'MmExOmJ-VIdIV2cu5_Dh0w', 
			'message': {
				'from_email': 'btmoore95@gmail.com', 
				'to': [
				{
					'email': 'illinihyperloop@gmail.com', 
					'name': '', 
					'type': 'to'
				}
				], 
				'autotext': 'true', 
				'subject': 'New Contact Form Response', 
				'html': '<b>Name: </b>' + '<br>' + name + '<br><br>' + 
					'<b>Email Address: </b>' + '<br>' + email + '<br><br>' +
					'<b>Subject: </b>' + '<br>' + subject + '<br><br>' +
					'<b>Message: </b>' + '<br>' + message + '<br>'
			}
		}
	}).done(function(response) {
		console.log(response); 
		$("form").css("display", "none"); 
		$("p.formSuccess").css("display", "block"); 
	}); 
}


function scrollIntro() {
	$('html, body').animate({
		scrollTop: $("section.intro").offset().top
	}, 1000);
};

function scrollSub() {
	$('html, body').animate({
		scrollTop: $("#subTop").offset().top
	}, 1000);
};

function scrollContact() {
	$('html, body').animate({
		scrollTop: $("#contactTop").offset().top
	}, 1000);
};


function subchange(event){
	var num = event.data.param;
	console.log(num);
	var sel = "#sp" + num;
	console.log(sel);
	reset();
	$(sel).css("display", "block"); 
};

function reset(){
	$("#sp1").css("display", "none"); 
	$("#sp2").css("display", "none"); 
	$("#sp3").css("display", "none"); 
	$("#sp4").css("display", "none"); 
	$("#sp5").css("display", "none"); 
};

$(document).ready(function(){
	$("#about").click(scrollIntro);
	$("#sub").click(scrollSub);
	$("#contact").click(scrollContact);
	$("#sb1").click({param: 1}, subchange);
	$("#sb2").click({param: 2}, subchange);
	$("#sb3").click({param: 3}, subchange);
	$("#sb4").click({param: 4}, subchange);
	$("#sb5").click({param: 5}, subchange);
});
