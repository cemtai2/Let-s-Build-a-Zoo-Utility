document.addEventListener("DOMContentLoaded", function () {
    //set the column variables
	eventListen("one");
	eventListen("two");
});

function eventListen(elemID) {
  var selectFirst = document.getElementById(elemID);
  var selectedValue = '';

  selectFirst.addEventListener("mousedown", function() {
    selectedValue = selectFirst.value;
  });

  selectFirst.addEventListener("input", function() {
    if (selectFirst.value.trim() !== "") {
      selectedValue = selectFirst.value.trim();
    }
  });

  selectFirst.addEventListener("change", function() {
    if (selectedValue !== "") {
      sendValueToPHP(selectedValue);
    }
  });

	function sendValueToPHP(value) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("myTable").innerHTML = this.responseText;
			}
		};

		if (value.trim() !== "") {
			// Encode the value using encodeURIComponent to handle special characters properly
			xhttp.open("GET", "query.php?function=outputTable&value=" + encodeURIComponent(value), true);
			xhttp.send();
		} else {
			// Clear the table if the value is empty
			document.getElementById("myTable").innerHTML = "";
		}
	}
}

function variantImages() {
	var species = document.getElementById("animal_species").value;
	
	var directory = '../img/' + species;
	
	alert(directory);
}