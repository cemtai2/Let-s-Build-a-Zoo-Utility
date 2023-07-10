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
	
	//get form values
	var parent_one = document.getElementById('hybrid_parent_one').value;
	var parent_two = document.getElementById('hybrid_parent_two').value;
	var hybrid_name = document.getElementById('hybrid_name').value;
	var animal_name = document.getElementById('hybrid_animal_name').value;
	var animal_location = document.getElementById('hybrid_animal_location').value;
	
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

		//reset the form and move cursor to top form field
		var form = document.getElementById('myForm');
		
		form.reset();
		document.getElementById("parent_one").focus();
		document.getElementById("parent_one").select();

		//table update request
		xhttpRequest ("GET", "hybridsTable.php", "tableWrapper");
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

function animals_form_submit() {
	//prevent form submission unless form is validated
	event.preventDefault();
	
	//get form values
	var animal_species = document.getElementById('animal_species').value;
	var animal_variant = document.getElementById('animal-variant').value;
	var animal_name = document.getElementById('animal-name').value;
	var animal_location = document.getElementById('animal-location').value;
	
	alert("Animal Species: " + animal_species + " Animal Variant: " + animal_variant + " Animal Name: " + animal_name + " Animal Location: " + animal_location);
	
	//form validation
	//regex expression to make sure the field contains a string with only letters
	const regex = /^[a-zA-Z]+$/;
	const regex2 = /^[a-zA-Z0-9\s]+$/;
	
	//this if statement checks if the input matches the type string and contains only letters
	if (
		typeof animal_species === 'string' &&
		//typeof animal_variant === 'string' &&
		typeof animal_name === 'string' &&
		typeof animal_location === 'string' &&
		regex.test(animal_species) &&
		//regex.test(animal_variant) &&
		regex.test(animal_name) &&
		regex2.test(animal_location)
	) {
		//all of the parameters are strings and have no white space
		
		//request var to pass to xhttpRequest function for the insert request
		var request ="insert_into_animal.php?animal_species=" + animal_species + "&animal_variant=" + animal_variant + "&animal_name=" + animal_name + "&animal_location=" + animal_location;
	
		//insert request
		xhttpRequest ("GET", request, "form_message_animal");

		//reset the form and move cursor to top form field
		var form = document.getElementById('animalsForm');
		
		form.reset();
		document.getElementById("animal_species").focus();
		document.getElementById("animal_species").select();

		//table update request
		xhttpRequest ("GET", "animalsTable.php", "animalTableWrapper");
	}
	else {
		
		//create an array to iterate over each form element and determin which are good and which are bad, then add classes to the elements
		const inputs = [document.getElementById('animal_species'), document.getElementById('animal_variant'), document.getElementById('animal_name'),
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
				alert("Error updating table. Status: " + xhttp2.status);
			}
		}
	};//xhttp2 function close
		
	xhttp2.open(method, page, true);
	xhttp2.send();
}

function validateData(elementID) {
	alert(elementID);
	
	if (elementID !== "animal_location") {
		alert("Not animal location!");
		const regex = /^[a-zA-Z]+$/;
	}
	else if (elementID == "animal_location") {
		alert("Animal location!");
		const regex = /^[a-zA-Z0-9\s]+$/;
	}
	else {
		alert("error");
	}
}

function deleteHybrid(hybridPK) {
	//this function allows users to delete the hybrid animal with the primary key of the hybrid they clicked on.
	
	alert("you clicked animal number " + hybridPK);
	
	//send the xhttprequest to the hybridsDelete.php file including the hybrid primary key
	xhttpRequest ("GET", "hybridsDelete.php?hybridPK=" + hybridPK, "form_message_hybrid");

	var form = document.getElementById('myForm');

	form.reset();
	document.getElementById("parent_one").focus();
	document.getElementById("parent_one").select();
	
	xhttpRequest ("GET", "hybridsTable.php", "tableWrapper");

}