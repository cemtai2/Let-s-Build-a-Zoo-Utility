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
	var parent_one = document.getElementById('parent_one').value;
	var parent_two = document.getElementById('parent_two').value;
	var hybrid_name = document.getElementById('hybrid_name').value;
	var animal_name = document.getElementById('animal_name').value;
	
	//form validation
	
	//regex expression to make sure the field contains a string with only letters
	const regex = /^[^\s]+$/;
	
	//this if statement checks if the input matches the type string and contains only letters
	if (
		typeof parent_one === 'string' &&
		typeof parent_two === 'string' &&
		typeof hybrid_name === 'string' &&
		typeof animal_name === 'string' &&
		regex.test(parent_one) &&
		regex.test(parent_two) &&
		regex.test(hybrid_name) &&
		regex.test(animal_name )
	) {
		//all of the parameters are strings and have no white space
		
		//create new XMLHttpRequest object
		var xhttp = new XMLHttpRequest();

		//create the function to be executed when the server response is ready
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("form_message_hybrid").innerHTML = this.responseText;
			}
		};

		xhttp.open("GET", "insert_into.php?parent_one=" + parent_one + "&parent_two=" + parent_two + "&hybrid_name=" + hybrid_name + "&animal_name=" + animal_name, true);
		
		xhttp.send();

				
		//submit valid form
		const form = document.getElementById('myForm');
		
		//reset the form and move cursor to top form field
		form.reset();
		document.getElementById("parent_one").focus();
		document.getElementById("parent_one").select();
	}
	else {
		
		//create an array to iterate over each form element and determin which are good and which are bad, then add classes to the elements
		const inputs = [document.getElementById('parent_one'), document.getElementById('parent_two'), document.getElementById('hybrid_name'), document.getElementById('animal_name')];
		
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