# Requirements

## Navigation
- Across all pages on our website, there will be a navigation bar at the top spanning the width of the screen.
    - Go through each page, and verify the navigation bar is on top of each page and works correctly
- Left section contains our logo that is a link to redirect the user to the homepage. 
    - Start from different pages, and click on the logo to make sure it redirects the user to the homepage 
- On the right side of the navigation bar are two additional links that read ‘about’ and ‘find a meal program’ that redirect the user to those respective pages.
    - Start from different pages, and click on the respective links to make sure they redirect the user to the correct page
- “About” link redirects to an about page that includes information about the website, food insecurity, and the team. 
    - Click on the about link, and make sure it is presenting the correct information

## Search By Name
- The system will allow the user to type in the name of a meal program in Seattle to refine their search, and accurately display the associated meal program details of the search.
    - We will manually test that you can input text into this field.
    - Manually test that the correct meal program information comes up when a search inquiry matches
    - Manually test that correct information comes up regardless of upper/lower case
- The system will return results if the input field is blank, using any applicable filters.  
    - Manually test by leaving the search field blank and moving on to the filtering section, ensuring that results still appear when the search is not used.

## Filtering
- A pane on the left side will enable users to filter meal programs on the find my meal page
    - Users can pick one of the filtering options of search by zip code, name of program, type of meal served, type of people served, and on which days are they served
        - Manually test each filter option one at a time and all of their options to see if the correct results from the filters are displayed correctly 
- The system will notify the user if they enter a query that does not match any results.
    - Manually test to ensure an alert comes up when no results are found. Will test by entering incorrect inquiries that have no matches with our data.
- The system allows user to select multiple filtering option for certain categories 
    - “Meal served”: breakfast, lunch, dinner, snack, any
    - “People served”: men, women, children, any
    - “Day served”: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, any
        - Manually test that those options are available under respective drop downs and that multiple options can be selected 
- Once the user submits the form using the ‘go’ button, the system will display meal programs based on filters as a list on the left sidebar 
    - Manually test that search queries with at least one result will be displayed in the left sidebar

## Map
- The map will be on the right side of the screen, taking up the rest of the space next to the results pane on the left. 
    - Ensure that the map is present on the right side of the screen next to either the filtering options or results, depending on the state of the program
- Upon returning results from the search, the map will populate pins for all corresponding meal provider locations.
    - Manually test that search queries with at least one result will display pins for each of the respective meal programs in the results
- When the user clicks on the pin, a text box will expand from the pin with the meal program name, address, and program information. 
    - When clicking on a pin on the map, a text box should expand detailing the program name, address, days served, people served, and any other additional information such as hours and further restrictions


## Results
- The left panel on ‘Find a Meal Program’ (also the homepage) will display the meal programs matching user input and filter selection. Details associated with results will appear on the left side of the screen, while the map of the locations is on the right
    - After the user fills out the fields on the ‘Find a meal’ page, ensure they are presented with the relevant results after clicking ‘go’
- The details displayed for each location include: name, restriction, meal-type, time, days, and address
    - Browse through results and make sure each of them correspond with the details and restrictions in the dataset


## Technical Requirements
- What devices do your requirements say it will be able to run on? Screen sizes?
    - The website will run on Google Chrome, Firefox, and Safari browsers and will be responsive such that it can be displayed on any smartphone (utilize ‘wrap_content’ and ‘match_parent’), tablet, or laptop or desktop
        - Use “Inspect” on Google Chrome to change views to see how the website looks
- Who needs to be able to use your app? i.e In what ways does your app need to be accessible? (colors, screen readers, voice to text?)
    - The application will be accessible with screen readers
        - Test screen readers that are built into our computers to see if it reads the text correctly
- Where do you GET that data?
    - Data will be downloaded from data.seattle.gov
        - The data will be modified after downloading to ensure it works effectively for our website
- If you are storing information, where are you storing it?
    - The information will be stored statically in a .JSON file and the server will retrieve the needed information from it
        - We will read different rows from the file to verify that the data can be pulled correctly before we start implementing
- If you have a search bar HOW are you going to search?
    - The search will be implemented so that the server searches through the location name column in the data and gets the matching location names to the user input. It will show the results with all of their information (the location name, hours, meal served, age served, people served, days served, and their address) on the sidebar on the left of the screen and a Google Map on the right side of the screen with pins representing each location.
        - Manual tests for the search are specified in the “Search By Name” and “Filtering” section of this document 
