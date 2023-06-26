		<div class="tab-pane fade show active" id="animal-tab-pane" role="tabpanel" aria-labelledby="animal-tab">
			<div class="container" id="animal-tab">
				<div class="row">
					<div class="col-12">
						<h2 align="center">Animals</h2>
					</div>
				</div>
				
				<div class="row">
					<div class="col-6">
						<h3 align="center">New Animal</h3>

						<form method="post" class="needs-validation" id="animalsForm" novalidate>
							<input class="form-control-lg" type="text" id="animal-species" name="animal-species" placeholder="Species" required /><br><br>

							<input class="form-control-lg" type="text" id="animal-variant" name="animal-variant" placeholder="Variant" required /><br><br>

							<input class="form-control-lg" type="text" id="animal-name" name="animal-name" placeholder="Name" required /><br><br>

							<input class="form-control-lg" type="text" id="animal-location" name="animal-location" placeholder="Location" required /><br><br>

							<button class="btn btn-outline-dark" onclick="animal_form_submit(event);" class="btn btn-outline-dark">Submit</button>
						</form>
					</div>

					<div class="col-6">
						<div class="row">
							<div class="col-6"> 
								<h3 align="center">Species</h3>
	
								<form method="post" id="species-select">	
									<input list="speciesSelect" name="species" id="animalSpecies" class="form-control" onFocus="this.value=''">
										<datalist id="speciesSelect">
										  <?php //populateDatalist('species_select'); ?>
										</datalist>
								</form>
							</div>

							<div class="col-6">
								<h3 align="center">Location</h3> 

									
								<form method="post" id="location-select">	
									<input list="locationSelect" name="location" id="animalLocation" class="form-control" onFocus="this.value=''">
										<datalist id="locationSelect">
										  <?php //populateDatalist('location_select'); ?>
										</datalist>
								</form>

							</div>
						</div>

						<div class="row">
							<div class="col-12">
								<table class="table" id="animals-table">
									<tr>
										<th>Species</th>
										<th>Variant</th>
										<th>Age</th>
										<th>Name</th>
										<th>Location</th>
									</tr>
								</table>
							</div>
						</div>
					</div>
				</div> 
			</div>
		</div>