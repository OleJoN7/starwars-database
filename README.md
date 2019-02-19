# starwars-database

 Another application based on React: 
 
 - This time focused on the work of fetch api (used async / await syntax) for receiving data provided by the swapi.co site.
 - The SwApiService component was created separately in order to make it easier to work with the obtained data.
     - In this component, methods are created that take data for different tasks and these methods are passed directly
     to smart components for processing and further data output by presentation components to the page.
     - For this purpose, higher order components were used that process data obtained from swapi.co 
     and transfer them to simple components and return this simple componets.
These actions helped to preserve the principles of "Do not repeat yourself" and "Separation of concern".

- Also React Router module was used in the application to set up routes.
- Also was created component for catching errors separately in different parts of the application.

You can see this app by clicking link below:

# https://olejon7.github.io/sw-db/
