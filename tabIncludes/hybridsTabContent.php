			<div class="container" id="hybrids-tab">
				<div class="row">
					<div class="col-12">
						<h2 align="center">Hybrids</h2>
					</div>
				</div>
				
				<div class="row"> 
					<div class="col-6">
						<h3 align="center">New Hybrid</h3>

						<span id="form_message_hybrid"></span>

						<form method="post" class="needs-validation" id="myForm" novalidate>
							<input class="form-control-lg" type="text" id="parent_one" name="parent_one" placeholder="Parent One" required /><br><br>

							<input class="form-control-lg" type="text" id="parent_two" name="parent_two" placeholder="Parent Two" required /><br><br>

							<input class="form-control-lg" type="text" id="hybrid_name" name="hybrid_name" placeholder="Hybrid Name" required /><br><br>

							<input class="form-control-lg" type="text" id="animal_name" name="animal_name" placeholder="Animal Name" required /><br><br>

							<input class="form-control-lg" type="text" id="animal_location" name="animal_location" placeholder="Animal Location" required /><br><br>

							<button class="btn btn-outline-dark" onclick="form_submit(event);" class="btn btn-outline-dark">Submit</button>
						</form>
					</div><!--col-6-->

					<div class="col-6">
						<h3 align='center'>Search</h3>

						<div class="row">
							<div class="col-6">
								<h3 align="center">Parent One</h3>

								<form method="post" id="parent-one">			
									<input list="parentOne" name="one" id="one" class="form-control" onFocus="this.value=''">
										<datalist id="parentOne">
										  <?php //$column, $table, $userIDColumn
											populateDatalist('hybrids_parent_one', 'hybrids', 'fk_hybrids_users'); ?>
										</datalist>
								</form>
							</div>

							<div class="col-6">
								<h3 align="center">Parent Two</h3>

								<form method="post" id="parent-two">			
									<input list="parentTwo" name="two" id="two" class="form-control" onFocus="this.value=''">
										<datalist id="parentTwo">
											<?php populateDatalist('hybrids_parent_two', 'hybrids', 'fk_hybrids_users'); ?>
										</datalist>
								</form>
							</div> <!--col-6-->
						</div> <!--row-->
						
						<div class="row">
							
								<?php initTable(); ?>
										
						</div>
					</div> <!--col-6-->
				</div> <!--row-->
			</div><!--container-->
    	</div> <!--hybrids-tab-pane-->