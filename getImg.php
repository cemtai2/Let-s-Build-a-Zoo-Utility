<?php
	error_reporting(E_ALL);
	ini_set('display_errors', 1);

$animal = $_GET['directory'];

//get the directory
$directory = 'img/' . $animal . '/';//$_GET['directory'];

//echo "Here: " . $directory;
//get a list of files from the directory
$files = scandir($directory);

function is_image_file($file) {
    $extension = strtolower(pathinfo($file, PATHINFO_EXTENSION));
    $allowed_extensions = ['webp'];
    return in_array($extension, $allowed_extensions);
}

$imgFiles = array_filter($files, function($file) {
    // Filter only image files
    return is_image_file($file);
});

function sort_files($a, $b) {
    // Extract the numeric part of the file names
    $number_a = intval(preg_replace('/[^0-9]+/', '', $a));
    $number_b = intval(preg_replace('/[^0-9]+/', '', $b));

    return $number_a - $number_b;
}

$imgFiles = array_filter($files, function($file) {
    // Filter only image files
    return is_image_file($file);
});

// Sort the image files using the custom sorting function
usort($imgFiles, 'sort_files');

//return the list of img files as JSON
header('Content-Type: application/json'); 
echo json_encode($imgFiles);
?>