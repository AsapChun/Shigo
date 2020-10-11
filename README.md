# Shigo
This is my startup attempt to try find a solution to allevaite the pressures of COVID-19 and connect students with recruiters! This project is still in progress and I try to put in work whenever I get the chance. 

Within this repo contains the MVP and start-up planning documents... ALSO contains the slide deck used to present to Fortune 500 Company (Gartner and Coca-cola) and the University of Michigan!
Documents:
  - Slide Deck
  - Planning Document 
  - UML Diagram

Prototype Features/Functionalties: (Only a student account can be made currently)
Home and About Page:
  - Created using bootstrap, HTML, CSS to showcase my companies idea
  - Contains a login portal powered by Google's Firebase (Created using bootstrap's carousel!)
    - Authentication Options:
      - Google Signin
      - Regular Email/Password
    - Create Account Feature:
      - Select Student/Recruiter
      - Select Major, Interested Fields, Year, Skills, etc...
    - Additional Account Information stored using Google's Firestore (Documents and Collections)
User Home:
  - Dashboard (In Progress)
  - Settings 
    -Able to update account information and change information on Firebase and FireStore
  - Calendar (In Progress)
  - Messaging (In Progress)
  
 Video Call Capabilites (Zoom API):
 - In browser Zoom Calls can be done; however, functionality has not been linked to dashboard and must be tested seperately
 - Currently can only join exisitng Zoom meetings and cannot create own meetings yet.

Prototype Tech Stack:
- vue.js
- HTML/CSS/BootStrap
- Firebase/Firestore

Protoype Known Bugs:
- Create Account Carousel occassionally wont stop sliding
- After updating information in Settings, program gets logged out back to homepage and have to resign in 

How To Run!
1) Download an IDE (For example, I use WebStorm currently)
2) npm install
3) npm run serve (run website on localhost)
