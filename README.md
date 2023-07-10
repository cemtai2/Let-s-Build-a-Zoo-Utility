# letsbuildazooutility
This is a utility project for the game Let's Build a Zoo!  It allows users to track their animals (name, age, location, breed, and variant), their breeding pairs, and the hybrids they've already created.

This project uses UserSpice because why invent the wheel.  Users are able to do as much or as little with it as they choose.

This project contains the following tools:
-  Animal tracker:
   -  Species
   -  Variant
   -  Name
   -  Location
 Animals can be filtered by species or location.  I plan to add other filter/search options in the future.

-  Breeding Pairs
   -  Species
   -  Location
   -  Parent 1 variant
   -  Parent 1 name
   -  Parent 1 age
   -  Parent 2 variant
   -  Parent 2 name
   -  Parent 2 age
Pairs can be filtered by species or location.  I also plan to add a way to view all possible pairs and which variants they would produce, which would tie in with the Animals tracker.

-  Hybrids
   -  Parent one species
   -  Parent two species
   -  Hybrid species name
   -  Animal name
Currently, the location isn't tracked.  I might add that in the future.

Major functionality: 
1.  User features - 100%
2.  Database design - 90%
2.  Site layout - 70%
  -- Animals tab - 75%
  -- Breeding pairs tab - 25%
  -- Hybrids tab - 100%
  -- Species tab - 100%

Additional functionality per tab
1.  Animals tab - 10%
  -- Add new animal - 10%
  -- Filter by species - 0%
  -- Filter by location - 0%
  -- Update animal info - 0%

2.  Breeding pairs tab - 10%
  -- Add new pair - 10%
  -- Filter by species - 0%
  -- Filter by location - 0%
  -- Update pair info - 0%

3.  Hybrids tab - 95%
  -- Add new hybrid - 100%
  -- Filter by parent one species - 100%
  -- Filter by parent two species - 100%
  -- Table for all hybrids by user - 100%
  -- Edit/update hybrids - 75%
  
4.  Species tab - 100%

To Do:
1.  Display images via url pulled from database
2.  Make those images act as form inputs
3.  Add ability for users to alter info from any tab
4.  Add all species to database
5.  Add all species variants to database
6.  Upload all variant images to site
7.  Add all variant image urls to database
8.  Add ability for users to filter animals by expected variant of offspring
9.  Create git repository - 100%

Bugs:
 - Hybrids tab table doesn't always update after an animal is added or deleted
 - Hybrids tab must be reloaded if it fails validation
 - No explicit error messages when hybrid form fails validation
 - Need more detailed name for myForm and myTable
 - Need more detailed name for form_submit
 - Need more detailed name for tableWrapper
 - Need more detailed name for initTable
 
Bug Fixes:
 - Updated parent_one, parent_two, animal_name, and animal_location to hybrid_parent_one, hybrid_parent_two, and hybrid_animal_location