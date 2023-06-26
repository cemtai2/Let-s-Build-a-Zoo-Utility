<?
function conn() {
	//establish error reporting
	error_reporting(E_ALL);
	ini_set('display_errors', 1);

	//database variables
	$servername = "localhost";
	$username =   "kendramo_zoo";
	$password =   "zooPAssword";
	$database =   "kendramo_test";

	//declare global $conn variable
	global $conn;
	
	// Create a connection
	$conn = new mysqli($servername, $username, $password, $database);
	
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
	return $conn;
}
?>