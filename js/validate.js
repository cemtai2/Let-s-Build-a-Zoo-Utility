// JavaScript Document

document.addEventListener('DOMContentLoaded', function() {
	//form constants
	const form = document.getElementById('myForm');
	//const formA = document.getElementById('animalsForm');
	//const formB = document.getElementById('breedForm');

	//regex
	const alphanumericRegex = /^[a-zA-Z0-9]+$/;

	// Attach event listener to each input field
 	Array.from(form.elements).forEach(function(input) {
		if (input.type !== 'submit') {
			input.addEventListener('input', function() {
				validateField(input);
			});
		}
	});

function validateField(input) {
	if (!alphanumericRegex.test(input.value)) {
		input.setCustomValidity('Field must contain only alphanumeric characters.');
	} else {
		input.setCustomValidity('');
	}
	}
});