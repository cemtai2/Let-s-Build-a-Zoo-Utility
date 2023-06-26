<?php 
require_once 'users/init.php';  //make sure this path is correct!
require_once $abs_us_root.$us_url_root.'users/includes/template/prep.php';
if (!securePage($_SERVER['PHP_SELF'])){die();}
?>

<!doctype html>

<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>

<html>
<head>
<meta charset="utf-8">
<title>Let's Build a Zoo Utility Tool</title>
	<link rel="stylesheet" href="css/bootstrap.css" type="text/css">
	<link rel="stylesheet" href="css/style.css" type="text/css">
	
	<script src="js/bootstrap.bundle.js"></script>
	<script src="js/submit_form.js"></script>
	<script src="js/query.js"></script>

	<meta http-equiv="cache-control" content="max-age=0">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="-1">
	<meta http-equiv="expires" content="Tue, 01 Jan 1980 11:00:00 GMT">
	<meta http-equiv="pragma" content="no-cache">
	
	<style>
		.good {
			border: 1px solid #1FE02C;
		}
		
		.bad {
			border: 1px solid #E1191D;
		}
	</style>
</head>

<body>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<h1 align="center" class="my-4">Let's Build a Zoo!</h1>
			</div>
		</div>
	</div>
		
	<?php
		include('query.php'); 
	?>
<!--hybrids_parent_one	hybrids_parent_two	hybrids_hybrid_name	hybrids_animal_name-->
	<div class="container">
		<ul class="nav nav-tabs" id="myTabs" role="tablist">
			<li class="nav-item" role="presentation">
				<button class="nav-link active" id="animal_tab" data-bs-toggle="tab" data-bs-target="#animal-tab-pane" type="button" aria-controls="animal-tab-pane">Animals</a>
			</li>

			<li class="nav-item" role="presentation">			
				<button class="nav-link" id="breeding_tab" data-bs-toggle="tab" data-bs-target="#breeding-tab-pane" type="button" aria-controls="breeding-tab-pane" aria-selected="true">Breeding Pairs</a>
			</li>

			<li class="nav-item" role="presentation">
				<button class="nav-link" id="hybrid_tab" data-bs-toggle="tab" data-bs-target="#hybrids-tab-pane" type="button" aria-controls="hybrids-tab-pane">Hybrids</a>
			</li>
		
			<li class="nav-item" role="presentation">			
				<button class="nav-link" id="species_tab" data-bs-toggle="tab" data-bs-target="#species-tab-pane" type="button" aria-controls="species-tab-pane" aria-selected="true">Species</a>
			</li>
		</ul>
	</div>
	
	<div class="tab-content" id="animalTabContent">
		<?php include("tabIncludes/animalTabContent.php"); ?> 
	</div>
	
	<div class="tab-content" id="breedingTabContent"> 
		<?php include("tabIncludes/breedingTabContent.php"); ?>
	</div>
		
	<div class="tab-content" id="hybridTabContent">
		<?php include("tabIncludes/hybridsTabContent.php"); ?>
	</div> <!--myTabContent-->
	
	<div class="tab-content" id="speciesTabContent"> 
		<?php include("tabIncludes/speciesTabContent.php"); ?>
	</div>

</body>
</html>