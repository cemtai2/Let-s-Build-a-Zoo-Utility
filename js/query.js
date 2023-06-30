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
	
	var directory = species;
	
	alert("variantImages Directory: " + directory);
	fetchImg(directory);
}

function fetchImg(directory) {
	
	alert("fetchImg Directory: " + directory);
	
	var xhr = new XMLHttpRequest();
 	
	xhr.onreadystatechange = function() {
		 if (this.readyState == 4 && this.status == 200) {
			var files = JSON.parse(xhr.responseText);
			alert("hello");
			//loop  through files and display
			files.forEach(function(file) {
				displayImage(directory + '/' + file);
			});
		}
	};
		
		xhr.open('GET', 'getImg.php', true);
		xhr.send();
	//displayImage("/zoo/img/Duck/Duck2.webp")
}

function displayImage(filePath) {
	
	//create a new img element
	var img = document.createElement('img');
	img.src = filePath;

	//get the image container
	var imgCont = document.getElementById("animal-variant-container");

	//add the image to the img container
	imgCont.appendChild(img);	
}