# Seattle Sustenance Architecture Specification
Kaitlyn Cameron, Kevin Nguyen, Rachel Vuu, Robert Goertz, Soham Hinduja

All components are located under seattle-sustenance/src/components/stubs

# Model
**“MealPrograms”**
- Receives user filtering input from filter controller, cross references with meal programs from the csv file, and returns only the results of meal programs that match the filtering input. Communicates the filtered results to the map to display the locations of the results.
- Resides on server-side only
- Communicates with filtering input and map to receive input and then display applicable results and locations

# Views
**“Header” view**
- This component displays the branding and navigation options for the website
- Resides on the client-side only
- Communicates with ‘About’, ‘Find a meal’, ‘Browse all’ and ‘Map’ view

**“About” view**
- This component provides information about the website, food insecurity, and the team
- Resides on the client-side only
- Does not communicate with other components

**“Find a meal” view**
- This component provides input fields for the user to enter their filtering options relating to zip code, location name, type of meal served, age served, gender served, and days served
- Resides on the client-side only
- Communicates with the “Go” controller, passing it the user’s filtering options

**“Filtered results” view**
- This component shows the applicable meal programs based on the user’s applied filters
- Resides on the client-side only
- Communicates with the model, receiving meal programs to display, and the “Map” view to display locations of applicable meal programs

**“Browse all” view**
- This component displays all meal programs in our database in its unfiltered form
- Resides on the client-side only
- Communicates with the model, receiving all meal programs to display, and the “Map” view to display locations of all meal programs

**“Alert” view**
- This component displays an error message when the user has entered missing or incorrect information into one or more of the input fields 
- Resides on the client-side only
- Communicates with the “Go” controller which validates input; only displays when incorrect filters are selected

**“Map” view**
- This component displays the geographical locations of all the various food spots available to the user based on the designated filter option (or no filter)
- Resides on the client-side only
- Communicates with the model, and ’Filtered results’, ‘Browse all’ and ‘Find a meal’ views

# Controllers
**Filter “Go” button**
- This component receives filtering options from the user, sends the data from the form to update the displayed meal programs using the csv file
- Receives filtering options from the “Find a meal” view, displays results by updating the “Filtered results” view

**Map**
- This component receives user input from a click on the map, and when the user clicks a pin, it will display the location name
- Communicates with the “Map” view
