# firebase-app

Firebase is a mobile and web application development platform made up of complementary features that developers can mix-and-match to fit their needs. Firebase's initial product was a realtime database, which provides an API that allows developers to store and sync data across multiple clients. Over time, it has expanded its product line to become a full suite for app development. The company was 
acquired by Google in October 2014 and a significant number of new features were featured in May 2016 at Google I/O.

### Example features:
* Firebase Analytics
* Firebase Cloud Messaging
* Firebase Auth
* Realtime Database
* Firebase Storage
* Firebase Hosting
* Firebase Test Lab for Android
* Firebase Crash Reporting
* and much more....


### Below I walk you through real world scenarios and briefly explain how I would solve them.

###### Part 2.1

#### Learning Objectives:
* Firebase
* Firebase SDK
* Firebase command line interface
* Firebase Alias

#### Prerequisites:
* An active firebase account
* A nodejs dev box

#### Problem:
* You need a rest API cloud backend for a distributed mobile application. Your line manager tells you that there will be cross platform and native mobile clients as well as the need to support push notifications and messaging. 

#### Solution:
* Spin up a firebase web application 
* Sign in: https://console.firebase.google.com/
* Install the firebase SDK and Command Line Interface (inside projects / Firebase folder)
     
      https://github.com/firebase/firebase-tools
     
      sudo npm install firebase –save
     
      sudo npm install –g firebase-tools
      
##### Source Code:

    https://github.com/nsavageJVM/firebase_tutorial-

#### Inside firebase_tutorial:
* firebase login
* firebase init
* firebase deploy


#### Firebase alias:
* Firebase use –clear
* Firebase use –add

#### In /scripts:
* Make init.js file. Copy code in from firebase. This will add Firebase to your web app and initialize firebase JavaScript API

###### Part 2.2

Firebase Authentication

#### Learning Objectives:
* Firebase Authentication API
* Authentication API syntax

#### Problem:
* Your line manager tells you that there will be many types of user authentication including social media. Your line manager tells you it needs to be set up and working ASAP as he needs to demo it to the client.

#### Solution:
* Exploit Firebases Authentication API to rapidly extend your application source code to allow authentication with social media or email / password. 

* Run the tutorial source code: firebase serve

      This will make server listen at localhost:5000

###### Part 2.3

Using Firebase Internal API’s storage

#### Learning Objectives:
* Firebase storage API
* Firebase storage API syntax

#### Problem:
* Your line manager asks you to set up file upload and download ASAP as he needs to demo it to the client

#### Solution:
* Exploit Firebases storage API to rapidly extend your application source code to allow file upload and download.
* I am able to access the remote firebase database


###### Part 2.4

Using Firebase Internal API’s Database

#### Realtime Database:
* Its different from other databases in the way the data behaves when it is in the database
* With this database, we can dynamically create “Collections” (a very general term).
* We can think of this Firebase Database as one big JSON object, analogy to MongDB collections is very loose. 

#### Learning Objectives:
* Firebase Database API (for JavaScript)
* Firebase Database API syntax

#### Problem:
* Your line manager asks you to set up Firebase push notifications ASAP as he needs to demo it to the client

#### Solution:
* Exploit Firebases Real-time NoSQL API  to rapidly extend your application source code to allow data persistence. 


