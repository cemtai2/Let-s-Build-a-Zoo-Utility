<?php
	require_once 'users/init.php';  //make sure this path is correct!
	error_reporting(E_ALL);
	ini_set('display_errors', 1);
	require_once('functions.php');
	
	//set the $userId variable
	$userID = $user->data()->id;

//include function needed to establish database connection

function populateDatalist($column, $table, $userIDColumn = 'default') {
	//open the connection
	$conn = conn();
	global $userID;
	
	//set the sql statement
	
	if ($userIDColumn != 'default') {
		$sql = "SELECT " . $column . " FROM " . $table . " WHERE " . $userIDColumn . " = " . $userID;
	} else {
		$sql = "SELECT " . $column . " FROM " . $table;
	}
	
	
	//

	$results = $conn->query($sql);
	
	//initialize array to store result data
	$data = array();

	if($results && $results->num_rows > 0) {
		//get the rows from the results
		while ($row = $results->fetch_assoc()) {
			$data[] = $row[$column];
		}
	
		//eliminate duplicates
		$data = array_unique($data);
		
		//sort the results alphabetically
		sort($data);
		
		if($data) {
			//get the rows from the results
			foreach ($data as $row)
			
				echo "<option value='" . $row . "'>" . $row . "</option>";
			}
	}

	$conn->close();
}


if (isset($_GET['function'])) {
  $function = $_GET['function'];

  // Call the desired PHP function based on the provided function name
  if ($function == 'outputTable') {
    outputTable();
  }
}

//function that controls hybrid table filtering
function outputTable() {

  $value = $_GET['value'];
  global $userID;
	  
  $conn = conn();
  $sql = "SELECT * FROM hybrids WHERE hybrids_parent_one = '$value' OR hybrids_parent_two = '$value' && fk_hybrids_users = '$userID'";

  $results = $conn->query($sql);

  	$output = "<table class='table'><tr><th>Parent One</th><th>Parent Two</th><th>Species</th><th>Name</th><th>Location</th>";

  if ($results && $results->num_rows > 0) {
    while ($row = $results->fetch_assoc()) { 
      $output .= "<tr>";
      $output .= "<td>" . $row['hybrids_parent_one'] . "</td>";
      $output .= "<td>" . $row['hybrids_parent_two'] . "</td>";
      $output .= "<td>" . $row['hybrids_hybrid_name'] . "</td>";
      $output .= "<td>" . $row['hybrids_animal_name'] . "</td>";
	  $output .= "<td>" . $row['hybrids_animal_location'] . "</td>";
      $output .= "</tr>";
    }
  } else {
    $output .= "<tr><td colspan='4'>No results found.</td></tr>";
  }

  $output .= "</table>";

  echo $output;
}

//function to initilaize the hybrid table
function initTable() {
    $conn = conn();
    global $userID;
    
    $sql = "SELECT * FROM hybrids WHERE fk_hybrids_users = " . $userID;
    $results = $conn->query($sql);
    $output = "<table class='table' id='myTable'><tr><th>Parent One</th><th>Parent Two</th><th>Species</th><th>Name</th><th>Location</th>";

    if ($results && $results->num_rows > 0) {
        while ($row = $results->fetch_assoc()) {
            $output .= "<tr>";
            $output .= "<td>" . $row['hybrids_parent_one'] . "</td>";
            $output .= "<td>" . $row['hybrids_parent_two'] . "</td>";
            $output .= "<td>" . $row['hybrids_hybrid_name'] . "</td>";
            $output .= "<td>" . $row['hybrids_animal_name'] . "</td>";
            $output .= "<td>" . $row['hybrids_animal_location'] . "</td>";
            $output .= "<td>" . "</td>";
            $output .= "</tr>";
        }
    } else {
        $output .= "<tr><td colspan='4'>No results found.</td></tr>";
    }

    $output .= "</table>";

    echo $output;
}
?>