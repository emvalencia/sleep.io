/------------------------------------------------------------------------------
    Authors:
    Emery Valencia, SID: 59325878, netid: emvalenc
    Brian Slaughter, SID: 15194844, netid: slaughtb
    Raymond Yang, SID: 65365541, netid: raymonwy
    Robert Cuttris, SID: 37895822, netid: rcuttris
/------------------------------------------------------------------------------

/--------------------------EXPO SETUP INSTRUCTIONS-----------------------------
    RUN in CLI in the /sleep.io/ directory
    npm install -g expo-cli     // installs expo client
    npm install                 // installs all necessary dependencies
    yarn start                  // runs the application
/------------------------------------------------------------------------------

PROJECT IS CURRENTLY IN-DEVELOPMENT

Sleep.io is a sleep tracking application aimed at gathering and organizing sleep
data from external devices, such as Fitbits, in a centralized place. Sleep 
disorders are becoming more common so recognizing patterns in sleep can play an 
important factor in the overall health of an individual. 

The overall goal of this project is to create a personalized application that is 
tailored to individual users. 

EditProfileScreen.js - allows the user to change entries of their profile page. They can type in 
their first name, last name, age, weight(pounds), height(feet), medical history.

ProfileScreen.js - Component that displays the user’s information. This includes their full name, 
age, sex, height, weight, and medical history.

LogScreen.js - Component that displays a log of the patient’s data, including an average of their 
sleep ratings per day and their sleep data records.

HomeScreen.js - Component that contains the recommendation system feedback results and overview of 
the user’s health state.

LoginScreen.js - Component that allows the user to sign up and log into the application.

LinksScreen.js - Where user logs in their start and end time of sleep. When the log start time button
is pressed it displays a range of 24 hours that the user can choose from to start tracking their sleep time.
The same with Log end time button, but after this button is pressed it increases the number of days logged.
It displays the amount of days logged. 

SearchScreen.js - We load JavaScript object data from assets/articles/sleep.js into a map that 
associates search terms to a two-list of article titles and their respective URLs. Upon the pressing
of a given link, a user is redirected to the respective article associated with the title. A ScrollView
is used to implement scroll-through functionality.

SleepinessScreen.js - This view intends to allow a user to report their sleep satisfaction based on 
the individual's current context. An adjustable slider is used for an individual to report their levels
of sleep satisfaction.
