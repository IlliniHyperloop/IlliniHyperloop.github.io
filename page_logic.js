var member = 0; 


function change() {		
		var mem_name = document.getElementById("member_name"); 
		var mem_title = document.getElementById("member_pos");
		var mem_bio = document.getElementById("bio_text");

		mem_name.innerHTML = "Ben Moore"; 	
		mem_title.innerHTML = "President of Most Things"; 	
		//var temp = readTextFile('bios/1.txt');
		loadDoc();
		//mem_bio.innerHTML = temp; 	
}

function readTextFile(file)
{
		var reader = new FileReader();
		var temp; 
		reader.onload = function(e) {
				var text = reader.result;
				temp = text; 
		}

		reader.readAsText(file);
		return temp; 
}





function loadDoc() {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
				if (xhttp.readyState == 4 && xhttp.status == 200) {
						document.getElementById("bio_text").innerHTML = xhttp.responseText;
				}
		};
		xhttp.open("GET", "bios/1.txt", true);
		xhttp.send();
}
