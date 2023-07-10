<?php
//file to handle inserting new animals into the database.  This file accesses the animals table in the test database.

	require_once 'users/init.php';  //make sure this path is correct!
	error_reporting(E_ALL);
	ini_set('display_errors', 1);
	include('query.php'); 

	//set variables
	$animal_species = $_GET["animal_species"];
	$animal_variant = $_GET["animal_variant"];
	$animal_name = $_GET["animal_name"];
	$animal_location = $_GET["animal_location"];
	$userID = $user->data()->id;
	
	//echo variables
	/*echo "<div id='results'>Parent one: " . $parent_one . "<br />";
	echo "Parent two: " . $parent_two . "<br />";
	echo "Hybrid name: " . $hybrid_name . "<br />";
	echo "Animal name: " . $animal_name . "<br />";
	echo "User ID: " . $userID . " </div>"; */

	$conn = conn();

	//prepare SQL statement
	$sql = "INSERT INTO animals (animals_species, animals_variant_url, animals_name, animals_location, fk_animals_users) VALUES ('$animal_species', '$animal_variant', '$animal_name', '$animal_location', '$userID')";
	
	//execute statement
	if ($conn->query($sql) === TRUE) {
		echo "Record inserted sucessfully.";
		
		//get the new table
		//$results = hybridsTable(); 
		//echo $results;
	}
	else {
		echo "Error inserting record: " . $conn->error;
	}

	$conn->close();
?>