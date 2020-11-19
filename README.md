### SalesLoft Developer Assignment

#### Goals
- Level 1. Show a list of People records that are available via the API.  Display each Person’s name, email address, and job title.
- Level 2. Create a button that, when clicked, displays a frequency count of all the unique characters in all the email addresses of all the People you have access to, sorted by frequency count.
- Level 3. Create a 2nd button that would show us a list of suggested possible duplicate People.  A human can tell that “benoliv@salesloft.com” and “benolive@salesloft.com” are very likely the same person with just one of the email addresses having a typo.  However you would like to decide what might constitute a duplicate - up to you.
- Level 4. Level 4: Build a scalable enterprise-ready underlying architecture for this application that would scale to handle the function in Level 2 and 3 for trillions and trillions of records while returning results in a reasonable amount of time (< 200ms).


#### Technology Used
 ##### Backend:
  - Node (v14.15.0, npm 6.14.8)
  - Express
  
 ##### Frontend:
  - React
  
#### Setting up the project
  - Fork and clone repo on your local machine
  - Navigate to 'backend' folder and run `npm i`. After installing dependancies, run `npm start` to start the server.
  - In 'backend' folder, update the 'example.env' file with your api key and rename file to '.env'.
  - Navigate to 'frontend' folder and run `npm i`. After installing dependancies, run `npm start` to start the server.
  - Frontend will serve at http://localhost:3000/

#### Testing Goals
- Level 1. Click the 'List People' nav button to display People data from the SalesLoft API. This will show 100 records.
- Level 2. Click the 'View Frequency' nav button to display letter frequency of the emails from level 1.
- Level 3. Click the 'View Duplicates' nav button. This will display an input where you will enter a email address (ex.sakatius@gmail.com) and will return a possible duplicate email address and rating (0-1) from the data retreived in level 1.
- Level 4. Didn't complete but has got my mind thinking about refactoring to handle trillions of records without introducing latency.
