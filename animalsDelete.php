<?php 
	require_once 'users/init.php';  //make sure this path is correct!
	error_reporting(E_ALL);
	ini_set('display_errors', 1);
	include('query.php'); 

	$conn = conn();
	$animalPK = $_GET['animalPK'];

    $sql = "DELETE FROM animals WHERE pk_animals = " . $animalPK;
	
	if ($conn->query($sql) === TRUE) {
		echo "Record deleted sucessfully.";
	}
	else {
		echo "Error deleting record: " . $conn->error;
	}

	$conn->close(); 
?>