//add event listeners
/*document.addEventListener("DOMContentLoaded", function () {
	
document.getElementById('parent_one').addEventListener('change', validateData);
document.getElementById('parent_two').addEventListener('change', validateData);
document.getElementById('hybrid_name').addEventListener('change', validateData);
document.getElementById('animal_name').addEventListener('change', validateData);
document.getElementById('animal_location').addEventListener('change', validateData);
});*/  

//add event listeners to the datalists on the hybrids tab and call the event handler eventListen
document.addEventListener("DOMContentLoaded", function () {
    //set the column variables
	eventListen("one");
	eventListen("two");
});                              

//function that handles filtering the table on the hybrids tab
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

	//function to handle the XMLHttpRequest for the table on the hybrids page.
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
	
	//clear the container
	document.getElementById("animal-variant-container").innerHTML = "";
	
	fetchImg(species);
}

function fetchImg(directory) {
	
	var xhr = new XMLHttpRequest();
 	
	xhr.onreadystatechange = function() {
		 if (this.readyState == 4 && this.status == 200) {
			var files = JSON.parse(xhr.responseText);
			//loop  through files and display
			files.forEach(function(file) {
				displayImage(directory + '/' + file);
			});
		}
	};
		
		xhr.open('GET', 'getImg.php?directory=' + directory , true);
		xhr.send();
	//displayImage("/zoo/img/Duck/Duck2.webp")
}

function displayImage(filePath) {

	//create button element
	var button = document.createElement('button');
	
	//create a new img element
	var img = document.createElement('img');
	var path = '/zoo/img/' + filePath;
	img.src = path;
	
    // append the img element to the button element
    button.appendChild(img);
    
    // add click event listener to the button
    button.addEventListener('click', function() {
		//prevent default behavior
		event.preventDefault();
		
		//set the hidden form field
		document.getElementById("animal-variant").value = filePath;
    });
    
    // get the image container
    var imgCont = document.getElementById('animal-variant-container');
    
    // add the button to the img container
    imgCont.appendChild(button);	
}

