<?php 
$conn = conn();
    global $userID;
    
    $sql = "SELECT * FROM hybrids WHERE fk_hybrids_users = 3"; //. $userID;
    $results = $conn->query($sql);
    //$output = "<table class='table' id='myTable'><tr><th>Parent One</th><th>Parent Two</th><th>Species</th><th>Name</th><th>Location</th>";

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

   // $output .= "</table>";

    return($output) ;
?>