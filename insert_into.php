<?php 
	require_once 'users/init.php';  //make sure this path is correct!
	error_reporting(E_ALL);
	ini_set('display_errors', 1);
	include('query.php'); 

	//set variables
	$parent_one = $_GET["parent_one"];
	$parent_two = $_GET["parent_two"];
	$hybrid_name = $_GET["hybrid_name"];
	$animal_name = $_GET["animal_name"];
	$userID = $user->data()->id;
	
	//echo variables
	/*echo "<div id='results'>Parent one: " . $parent_one . "<br />";
	echo "Parent two: " . $parent_two . "<br />";
	echo "Hybrid name: " . $hybrid_name . "<br />";
	echo "Animal name: " . $animal_name . "<br />";
	echo "User ID: " . $userID . " </div>"; */

	$conn = conn();

	//prepare SQL statement
	$sql = "INSERT INTO hybrids (hybrids_parent_one, hybrids_parent_two, hybrids_hybrid_name, hybrids_animal_name, fk_hybrids_users) VALUES ('$parent_one', '$parent_two', '$hybrid_name', '$animal_name', '$userID')";
	
	//execute statement
	if ($conn->query($sql) === TRUE) {
		echo "Record inserted sucessfully.";
	}
	else {
		echo "Error inserting record: " . $conn->error;
	}

	$conn->close();

?>