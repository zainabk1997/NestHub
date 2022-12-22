# NestHub

## Idea Description
This is a peer to peer off campus housing website that connects potential roommates with room owners based on communities, preferences, and multimedia. There will also be a swipe functionality for Approval and Rejection of the user profile.


## UML Diagram
The UML diagram has been attached below. <br>
![NestHub](https://user-images.githubusercontent.com/106755622/199390796-67eb54fa-a00d-4f69-948d-81b3999ef9e1.png)


## User Requirements
Based on the UML Diagram, it is clear that the user begins with a registration and verification. <br>
They can register as a room finder or a room poster. <br>
The authentication for the specific roles will be conducted. If the user is a room poster, they can access the 'Room Poster' profile, and if they are looking for rooms, they can access the 'Room Finder' profile.<br>
The Room Finder profile helps the user add/edit personal details, preferences such as food, locality (distance from university), 
and rent. They can also filter out rooms based on these preferences.<br>
They will then get a list of available rooms/places, and relevant data based on their preferences.<br>
The Room Finder profile can then swipe left or right based on their choices.<br>
The Room Poster creates a similar profile with personal details and preferences for the roommate they wish to have.<br>
They can add/edit details about the room, such as pictures, rent, distance from the university, surrounding grocery stores, transportation, and food preferences.<br>
Their profile is then made visible to users.<br>
They can also swipe right or left based on roommate profiles. Once both swipes are right, they will get matched. <br>
The Room Poster and Room Finder can chat using a chat functionality and make a decision to rent the room.<br>
Once the room has been rented, the Room Poster can delete the listing. <br>
The users can then rate each other to enhance connections on the platform. <br>


## loginapi: Server side Folders and Files
```
1. Routes:<br>
Contains the Routes used in the project. These routes are then called in the API calls <br>

2. Models: <br>
Contains the Schemas that were used in the project. These schemas are the same as used to connect <br>
with MongoDB clients

3. Controllers: <br>
The controllers which are called by the routes are located in this folder <br>
These Controllers are responsible for making sure the data flows into the <br>
right documents in the database

4. Services: <br>
The services which finally push the data into the Database and return a response object<br>
to the controllers are places in this folder

5. server.js: <br>
The server port 8080 is initially called here.<br>
All API ports are listened to in this file
```

## nesthub-app: Client Side Files and folders
```

1. Index.js
The App.js file component is called here and rendered into the REACT-DOM

2. App.js
All main components are called within the App.js and then pushed into index.js<br>
Also contains the routes for navigation to various pages

3. login.js
The main landing page when the app opens up.<br>
Contains 2 components, Home.js and Signup.js

4. Home.js
Contains the components used for logging in the user

5. Signup.js
Contains the components used to enter the useremai, password, and confirm password<br>
and create a new user

6. registration.js
Contains the components that would allow the user to enter and update personal details<br>
and post the details to the database

7. RoomForm.js
Contains the form component to enter the details of house by the poster

8. RoommPost.js
Allows the user to see the preview of the room that is being posted

9. Dashboard
The main staging area of the application where the users will see and <br>
interact with other users, along with several other functions. <br>
Will also contain the cards that the user can swipe on and the Chat box

10.  ChatContainer.js
This container holds the components of the chat box

11. ChatHeader.js
Header of the chat box component. Holding the user profile picture, name <br>
and logout buttons

12. ChatDisplay.js
Display all the chats that have occured between two users

13. ChatInput.js
This input area for all the chats that are being made

14. MatchesDisplay.js
Area to display all the current matches for a User

15. PopUp.js
Component used to display the house poster details when clicked

16. Feedback.js
Page allows the user to enter a feedback for the application

```

## Installation

Please install the below Packages using 'npm install <package_name>' command in terminal
    "axios": "^1.2.1",
    "bcrypt": "^5.1.0",
    "cookies": "^0.8.0",
    "react": "^18.2.0",
    "react-cookie": "^4.1.1",
    "react-dom": "^18.2.0",
    "react-file-base64": "^1.0.3",
    "react-hook-form": "^7.40.0",
    "react-phone-number-input": "^3.2.13",
    "react-router-dom": "^6.4.5",
    "react-scripts": "^5.0.1",
    "react-tinder-card": "^1.6.2",
    "uuid": "^9.0.0",
    "web-vitals": "^2.1.4"
    "bcrypt": "^5.1.0",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "joi": "^17.7.0",
    "joi-password-complexity": "^5.1.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.8.0",
    "nodemon": "^2.0.20",
    "uuid": "^9.0.0"
Please download the files from https://github.com/neu-mis-info6150-fall-2022/final-project-hackstreetboys and run them in VSCode.

## API Services Available 
```
Parent URL: http://localhost:8080/

//Register a new User
POST /register

//Log into the profile
POST /Login

//Authorize to create a new Signup
POST /Auth

//Obtain a single user based on the EmailID
GET /getUser/:email

//Delete a user form the app
DELETE /delete/:email

//Obtain the card details based on user Roles 
GET/ /getCards/:role

//Post the messages made in the chat
POST /postMessages 

//Get all the messages between the Users
GET/ /getMessages/:fromEmail/:toEmail

//Add a match into the user profile
PUT  /addMatch/:userEmail/:swippedUserEmail

//Get all the matches for a particular user profile
GET/ /getMatches
```

## Application FLow

1. When executed, the react app first takes the user to the landing page
2. If the user is an existing user, then they can log into their profile from log in tab
3. If its a first time user, create a new profile in the sign up tab of the page
4. The user will be led to the registration page then, where they can update their personal preferences
5. If its a poster, they will be led to the House Details forms next, where they can post the<br>
   housing details
6. Next, the user is led to the dashboard of the Application
7. Here the user can select who they wish to match with by swipping on them
8. If the other person has also swipped on you, then that user will show up in your match list
9. You can then select this user and start a chat with them
10. You can also look at the Poster Profile by seelcting the Poster profile button to the top right
11. A feedback form allows you to write in feedback for the application
12. Update house allows the user to update the house details
13. If the user wishes to log out, the log out button allows the user to leave the application
14. Finally, if the user wishes to delete their account, they can do so by simply clicking the<br>
    Delete user button


## Compatible Browsers
1. Chrome 60+
2. Safari 10.1+ / iOS Safari 10.1+
3. Edge 12+
4. Firefox ESR+
5. Opera.

## Troubleshooting
For troubleshooting, contact these emails - khokawala.z@northeastern.edu, patel.hina@northeastern.edu, shetty.varu@northeastern.edu, singh.abhishek2@northeastern.edu

## Credits
Team - Hackstreet Boys<br>
Team Members - Hinal Patel, Abhisehk Singh, Varun Shetty, Zainab Khokawala
