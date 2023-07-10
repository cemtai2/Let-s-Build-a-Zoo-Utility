    <div class="container" id="animal-tab">
        <div class="row">
            <div class="col-12">
                <h2 align="center">Animals</h2>
            </div>
        </div>

        <div class="row">
            <div class="col-6">
                <h3 align="center">New Animal</h3>

				<span id="form_message_animals"></span>
				
                <form method="post" class="needs-validation" id="animalsForm" novalidate>
                    <input list="species" name="species" id="animal_species" class="form-control-lg" onFocus="this.value=''" onchange="variantImages()" placeholder="Species">
                        <datalist id="species">
                            <?php populateDatalist('species_name', 'species'); ?>
                        </datalist> <br><br>
					
					<div id="animal-variant-container" class="form-control-lg">
						
					</div>
					
                    <input type="hidden" id="animal-variant" name="animal-variant" placeholder="Variant" required /><br><br>

                    <input class="form-control-lg" type="text" id="animal-name" name="animal-name" placeholder="Name" required /><br><br>

                    <input class="form-control-lg" type="text" id="animal-location" name="animal-location" placeholder="Location" required /><br><br>

                    <button class="btn btn-outline-dark" onclick="animals_form_submit(event);" class="btn btn-outline-dark">Submit</button>
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
                    <div class="col-12" id="animalTableWrapper">
                        
						<?php initAnimalTable(); ?>
						
                    </div>
                </div>
            </div>
        </div> 
    </div>
</div>