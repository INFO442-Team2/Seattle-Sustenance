# Requirements

## Navigation
- Across all pages on our website, there will be a navigation bar at the top spanning the width of the screen.
    - Go through each page, and verify the navigation bar is on top of each page and works correctly
- Left section contains our logo that is a link to redirect the user to the homepage. 
    - Start from different pages, and click on the logo to make sure it redirects the user to the homepage 
- On the right side of the navbar are two additional links that read ‘about’ and ‘browse all’, that redirect the user to those respective pages.
    - Start from different pages, and click on the respective links to make sure they redirect the user to the correct page
- “About” link redirected to about page that includes information about the website, food insecurity, and the team. 
    - Click on the about link, and make sure it is presenting the correct information
- “Browse all” link redirects the user to a page that lists all meal services in Seattle sorted by alphabetical order.
    - Make sure that all meal programs in the Seattle area are displayed in the results view and map view

## Search By Name
- The system will allow the user to type in the name of a meal program in Seattle to refine their search, and accurately display the associated meal program details of the search.
    - We will manually test that you can input text into this field.
    - Manually test that the correct meal program information comes up when a search inquiry matches
    - Manually test that correct information comes up regardless of upper/lower case
- The system will notify the user if they enter a name that does not match any results.
    - Manually test to ensure alert comes up when incorrect meal program name is entered. Will test by typing incorrect inquiries that have no matches with our data.
- The system will return results if the input field is blank, using any applicable filters.  
    - Manually test by leaving the search field blank and moving on to the filtering section, ensuring that results still appear when the search is not used.

## Filtering
- A pane on the left side will enable users to filter meal programs on the find my meal page
    - Users can pick one of the filtering options of search by zip code, name of location, type of meal served, type of age served, gender served, and on which days are they served
        - Manually test each filter option one at a time and all of their options to see if the correct results from the filters are displayed correctly 
- The system allows user to select multiple filtering option for certain categories 
    - “Meal served”: breakfast, lunch, dinner, snack
    - “Age served”: 0-12, 13-21, 21-54, 55+
    - “Gender served”: Male, Female, Prefer not to disclose
    - “Day served”: Monday, Tuesday, Wednesday Thursday, Friday, Saturday, Sunday
        - Manually test 20 different filter combinations with each other to see if the correct results from the filters are displayed correctly 
- As the system will require a user to select at least one filtering option underneath “meal served”, “gender served”, and “age served”, failing to select a filter option will result in an alert bubble centered and under the title of the “find a meal” view asking them to select at least one filter
    - Test that when no filters are selected, an alert is displayed in the “find a meal” view telling the user that they must select at least one filter
- The system will allow a user to select at least one filtering option underneath “day served” upon a user clicking “go”
    - Manual tests for these individual filters are displayed above
- The system will read through the CSV, and based on filters will find and display meal providers as a list on the left sidebar, along with corresponding Google Map pins representing their locations
    - Manual tests for these filters are displayed above

## Map
- Upon returning results from the search, the map will populate pins for all corresponding meal provider locations.
    - On the ‘Find a meal’ page, fill out the filter options and ensure that there are pins for each of the respective meal programs in the results
- Upon user selection of a meal provider on the left sidebar, the map (using a Google Maps API) will display a highlighted pin that indicates the selected location. 
    - When selecting a meal program from the list of results, ensure that the pin is highlighted on the map to distinguish that program from the others
- When the user clicks on the pin, a text box will expand from the pin with the location name and address. 
    - When clicking on a pin on the map, a textbox should expand detailing more information about the program and location
- The map will be on the right side of the screen, taking up the rest of the space next to the results pane on the left. 
    - Ensure that the map is present on the right side of the screen next to either the filtering options or results, depending on the state of the program

## Results
- The system will display the nearby locations related to user input and filter selection. Details associated with results will appear on the left side of the screen, while the map of the locations is on the right
    - After the user fills out the fields on the ‘Find a meal’ page, ensure they are presented with the relevant results after clicking ‘Go’
- The details displayed for each location include: name, restriction, meal-type, time, days, and address
    - Browse through results and make sure each of them correspond with the details and restrictions in the dataset
- The user will be able to click on an address of a location on the sidebar that is on the left side of the screen, and the marker on the maps should change to the color yellow to let the user know which location is being highlighted
    - On the Results view, test that when a result is clicked, the page responds by changing the color of that location’s pin to highlight to the user where that meal program is located

## Technical Requirements
- What devices do your requirements say it will be able to run on? Screen sizes?
    - The website will run on Google Chrome, Firefox, and Safari browsers and will be responsive such that it can be displayed on any smartphone (utilize ‘wrap_content’ and ‘match_parent’), tablet, or laptop or desktop
        - Test our website on each browser, and on smartphones to see if the information is displayed correctly
        - Also can use “Inspect” on Google Chrome to change views to see how the website looks
- Who needs to be able to use your app? i.e In what ways does your app need to be accessible? (colors, screen readers, voice to text?)
    - The application will be accessible with screen readers
        - Test screen readers that are built into our computers to see if it reads the text correctly
- Where do you GET that data?
    - Data will be downloaded from data.seattle.gov
        - The data will be modified after downloading to ensure it works effectively for our website
- If you are storing information, where are you storing it?
    - The information will be stored statically in a CSV file and the server will retrieve the needed information from it
        - We will read different rows from the file to verify that the data can be pulled correctly before we start implementing
- If you have a search bar HOW are you going to search?
The search will be implemented so that the server searches through the location name column in the data and gets the matching location names to the user input. It will show the results with all of their information (the location name, hours, meal served, age served, gender served, days served, and their address) on the sidebar on the left of the screen and a Google Map on the right side of the screen with pins representing each location.
    - Manual tests for the search are specified in the “Search By Name” section of the document 