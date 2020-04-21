# Requirements

## Navigation
- Across all pages on our website, there will be a navigation bar at the top spanning the width of the screen.
- On the left side of the navbar will be a link displayed as our logo and project name that redirects the user to the homepage. 
- On the right side of the navbar are two additional links that read ‘about’ and ‘browse all’, that redirect the user to those respective pages.
- If the user clicks the link that reads “about”, they will be redirected to the about page that includes information about the website, food insecurity, and the team. 
- If the user clicks the link that reads “browse all”, they will be redirected to a page that lists all meal services in the city of Seattle sorted by alphabetical order.

## Search
- The system will not require a “search by zip code” entry in order to produce meal program results upon a user clicking “go.”
- The system will not require a “search by name” entry in order to produce meal program results upon a user clicking “go.”
- The system will notify the user if they enter a zip code that is not valid as an alert on top of the form.
- The system will return results if the input field is blank, using any applicable filters.  

## Filtering
- Users will be able to filter meal programs through a pane on the left side of the screen on the find my meal page
    - Users can pick one of the filtering options of search by zip code, name of location, type of meal served, type of age served, gender served, and on which days are they served
- The system will allow a user to select more than one filtering option underneath “meal served”
    -  Ex of type of meal served: breakfast, lunch, dinner, snack
- The system will allow a user to select more than one filtering option underneath “age served”
    - Ex of age served: 0-12, 13-21, 21-54, 55+
- The system will allow a user to select more than one filtering option underneath “gender served”
    - Ex of gender served: Male, Female, Prefer not to disclose
- The system will allow a user to select more than one filtering option underneath “day served”
    - Ex of day served: Monday, Tuesday, Wednesday Thursday, Friday, Saturday, Sunday
- The system will require a user to select at least one filtering option underneath both “meal served”, “gender served”, and “age served” upon a user clicking “go”, which begins the query and returns the results in place of the filtering on the left panel
    - If the user does not select a filtering option for meal served, gender served, and age served, an alert bubble will appear, centered and under the navigation bar, asking them to select at least one filter
- The system will allow a user to select at least one filtering option underneath “day served” upon a user clicking “go”
    - A user can leave this blank if they choose, and the system will allow them to search
- The system will read through the CSV, and using the filters, it will find the locations that match each of the filters that were inputted and display them as a list on the sidebar on the left side of the screen, along with a Google Maps with pins representing their locations

## Map
- Upon returning results from the search, the map will populate pins for all corresponding meal provider locations.
- When the user selects a meal provider from the list of results on the left pane after they filter, the map (using a Google Maps API) will display a highlighted pin that indicates the location. 
- When the user clicks on the pin, a text box will expand from the pin with the location name and address. 
- The map will be on the right side of the screen, taking up the rest of the space next to the results pane on the left. 

## Results
- When the inputs are received, the system will display the nearby locations related to the inputs and the details associated with them on the left side of the screen, while the map of the locations is on the right
- The details displayed for each location include: name, restriction, meal-type, time, days, and address
    - Restrictions include age, sex, ethnicity, etc.
- The user will be able to scroll down the the sidebar on the left side of the screen to view more locations available near them
    - The details of the location that is displayed will include the location name, hours, meal served, age served, gender served, days served, and their address
- The user will be able to click on an address of a location on the sidebar that is on the left side of the screen, and the marker on the maps should change to the color yellow to let the user know which location is being highlighted
    - The map is on the right side of the screen displayed as a Google Map, it is filled with many pins representing each meal provider location
    - These pins are clickable and when clicked,  the sidebar of results that is on the left side of the screen, will scroll down, so that the location that was clicked is shown on the top of the sidebar. The details of the location that is displayed will include the location name, hours, meal served, age served,  gender served, days served, and their address

## Technical Requirements
- What devices do your requirements say it will be able to run on? Screen sizes?
    - The website will run on Google Chrome, Firefox, and Safari browsers and will be responsive such that it can be displayed on a phone, tablet, or laptop or desktop
- Who needs to be able to use your app? i.e In what ways does your app need to be accessible? (colors, screen readers, voice to text?)
    - The application will be accessible with screen readers
- Where do you GET that data?
    - Data will be downloaded from data.seattle.gov
- If you are storing information, where are you storing it?
    - The information will be stored statically in a CSV file and the server will retrieve the needed information from it
- If you have a search bar HOW are you going to search?
    - The search will be implemented so that the server searches through the location name column in the data and gets the matching location names to the user inputted. It will show the results with all of their information (the location name, hours, meal served, age served, gender served, days served, and their address) on the sidebar on the left of the screen and a Google Map on the right side of the screen with pins representing each location.
