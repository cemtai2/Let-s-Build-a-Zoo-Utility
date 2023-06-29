function validateLoginForm()
{
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	var errMsg = '';
	
	if (username !== '' && password !== '') {
		return true;
	}
	else {
		if (username == '') {
			errMsg += "Please enter your username";
		}
		if (password == '') {
			errMsg += " and password.";
		}
		
		return false;
	}
}

function form_submit() {
	//prevent form submission unless form is validated
	event.preventDefault();
	
	document.getElementById("myTable").innerHTML = "test";
	alert("pause");
	//get form values
	var parent_one = document.getElementById('parent_one').value;
	var parent_two = document.getElementById('parent_two').value;
	var hybrid_name = document.getElementById('hybrid_name').value;
	var animal_name = document.getElementById('animal_name').value;
	var animal_location = document.getElementById('animal_location').value;
	
	//form validation
	//regex expression to make sure the field contains a string with only letters
	const regex = /^[a-zA-Z]+$/;
	const regex2 = /^[a-zA-Z0-9\s]+$/;
	
	//this if statement checks if the input matches the type string and contains only letters
	if (
		typeof parent_one === 'string' &&
		typeof parent_two === 'string' &&
		typeof hybrid_name === 'string' &&
		typeof animal_name === 'string' &&
		typeof animal_location === 'string' &&
		regex.test(parent_one) &&
		regex.test(parent_two) &&
		regex.test(hybrid_name) &&
		regex.test(animal_name) &&
		regex2.test(animal_location)
	) {
		//all of the parameters are strings and have no white space
		
		//request var to pass to xhttpRequest function for the insert request
		var request ="insert_into.php?parent_one=" + parent_one + "&parent_two=" + parent_two + "&hybrid_name=" + hybrid_name + "&animal_name=" + animal_name + "&animal_location=" + animal_location;
		
		//insert request
		xhttpRequest ("GET", request, "form_message_hybrid");
		
		//table update request
		xhttpRequest ("GET", "query.php?action=hybridsTable", "myTable");
		
/*		var xhttp = new XMLHttpRequest();

		//create the function to be executed when the server response is ready
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState === XMLHttpRequest.DONE) {
				if (xhttp.status === 200) {
					document.getElementById("form_message_hybrid").innerHTML = this.responseText;
					
					
					
/*					//second XMLHttpRequest object, to update table
					var xhttp2 = new XMLHttpRequest();
				
					//handle second server response
					xhttp2.onreadystatechange = function() {
						if (xhttp2.readyState === XMLHttpRequest.DONE) {
							if (xhttp2.status === 200) {
								var updatedTable = xhttp2.responseText;
																
								document.getElementById("myTable").innerHTML = this.responseText;
							}//if xhttp2 readstate close
							else {
								alert("Error updating myTable. Status: " + xhttp2.status);
							}
						}
					};//xhttp2 function close
				
					xhttp2.open("GET", "query.php?action=hybridsTable", true);
					xhttp2.send();
				}//first if statement close
				else {
					alert("Error inserting record.  Status: " + xhttp.status);
				}
			}
		};//xhttp.onreadystatechange close
		
		//prepare send to insert_into.php file with the entered variables
		xhttp.open("GET", "insert_into.php?parent_one=" + parent_one + "&parent_two=" + parent_two + "&hybrid_name=" + hybrid_name + "&animal_name=" + animal_name + "&animal_location=" + animal_location, true);
		
		//send the variables to the php file, form will either reset and display a
		//sucess message, or fail verification
		xhttp.send();
				
		//submit valid form
		const form = document.getElementById('myForm');
		
		//if (typeof resultPHP !== 'undefined') { 
		//	document.getElementById("myTable").innerHTML = resultPHP;
		//}*/
		
		//reset the form and move cursor to top form field
		form.reset();
		document.getElementById("parent_one").focus();
		document.getElementById("parent_one").select();
	}
	else {
		
		//create an array to iterate over each form element and determin which are good and which are bad, then add classes to the elements
		const inputs = [document.getElementById('parent_one'), document.getElementById('parent_two'), document.getElementById('hybrid_name'), document.getElementById('animal_name'),
		document.getElementById('animal_location')];
		
		for (let i = 0; i < inputs.length; i++) {
			//test each element and add the class good or bad
			if(typeof inputs[i].value === 'string' && regex.test(inputs[i].value)) {
				inputs[i].classList.add('good');
			}
			else {
				inputs[i].classList.add('bad');
			}			
		}
	}	
}

function xhttpRequest (method, page, elemID) {

	var xhttp2 = new XMLHttpRequest();

	//handle second server response
	xhttp2.onreadystatechange = function() {
		if (xhttp2.readyState === XMLHttpRequest.DONE) {
			if (xhttp2.status === 200) {
				document.getElementById(elemID).innerHTML = this.responseText;
			}//if xhttp2 readstate close
			else {
				alert("Error updating myTable. Status: " + xhttp2.status);
			}
		}
	};//xhttp2 function close
		
	xhttp2.open(method, page, true);
	xhttp2.send();

}