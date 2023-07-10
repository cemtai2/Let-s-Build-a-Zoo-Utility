<?php 
	require_once 'users/init.php';  //make sure this path is correct!
	error_reporting(E_ALL);
	ini_set('display_errors', 1);
	include('query.php'); 

    $conn = conn();
    global $userID;
     
    $sql = "SELECT * FROM animals WHERE fk_animals_users = " . $userID;
    $results = $conn->query($sql);
    $output = "<table class='table' id='animalsTable'><tr><th>Species</th><th>Variant</th><th>Name</th><th>Location</th>";	
	
    if ($results && $results->num_rows > 0) {
        while ($row = $results->fetch_assoc()) {
            $output .= "<tr id='" . $row['pk_animals'] . "'>";
            $output .= "<td>" . $row['animals_species'] . "</td>";
            $output .= "<td><img src='/zoo/img/" . $row['animals_variant_url'] . "'></td>";
            $output .= "<td>" . $row['animals_name'] . "</td>";
            $output .= "<td>" . $row['animals_location'] . "</td>";
            $output .= "<td><a onclick='deleteAnimals(" . $row['pk_animals'] . ")'>Delete</a></td>";
            $output .= "</tr>";
        }
    } else {
        $output .= "<tr><td colspan='4'>No results found.</td></tr>";
    }

   $output .= "</table>";
	 
    echo $output;
?>