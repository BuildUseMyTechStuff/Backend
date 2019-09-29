# backend

Build week for **WEB Unit 4 Node Build** 

## Prerequisites
Download/Install [SQLite Studio](https://sqlitestudio.pl/index.rvt?act=download)



Will need a REST client like [Insomnia](https://insomnia.rest/download/)

Create [Heroku] account for production deployment (https://www.heroku.com/)

## Link to teams backend deployment to Heroku:
https://droneon.herokuapp.com



## CRUD Endpoints

| POST | /api/auth/register | Creates a `user` using the information sent inside the `body` of the request|

The API should return:

{
    
    full_name: "",
    email: "",
    password: ""

}

| POST | /api/auth/login | Use the credentials sent inside the `body` to authenticate the user. If login fails, respond with the correct status code and the message: 'Please try again'|

The API should return:

{
    message: "Welcome....." // with registered email address. 
}

| POST | /api/users/add-drone | Use the credentials sent inside the `body` to add a drone to database. If fail, respond with the correct status code and the message: 'Error adding drone.'|

The API should return:
{
    Name: "",
    Model: "",
    Brand: "",
    Purpose: "",
    ExperienceLevel: "",
    Cost: ,
    Link: "", // photo of drone
    Photographer: ""
}

| POST | /api/users/availabledrones | Use the credentials sent inside the `body` to add available drones to database.|

The API should return:

{
  "availabledrones": [
    10 // the number of drones available to rent
  ]
}


| POST | /api/users/renteddrones | Use the credentials sent inside the `body` to add rented drones to database.|

The API should return:

{
  "renteddrones": [
    3 // the number of drones rented
  ]
}

| GET | /api/users | If the user is logged in, respond with an array of all the users contained in the database. If the user is not logged in respond with the correct status code and the message: 'Please try again'|

The API should return full list of registered users:
{
    full_name: "",
    email: "",
    password: ""
}


| GET | /api/users/drones | Once drones are added to database, respond with an array of all drones contained in the database. If drone is not listed in database, respond with 500 status code |

The API should return:
{
    Name: "",
    Model: "",
    Brand: "",
    Purpose: "",
    ExperienceLevel: "",
    Cost: ,
    Link: "", // photo of drone
    Photographer: ""
}


 GET | /api/users/id/user | Respond with selected id/user contained in the database. If the user is not listed in database, respond with the correct status code and the message: 'Could not find user.'|

The API should return selected registered user:
{
    full_name: "",
    email: "",
    password: ""
}


| PUT | /api/users/users/:id | Updates a given user id|

The API should return:

{
  "updated": 1 // Indicating the selected user id information has been updated.
}


| DELETE | /api/users/users/:id | Removes a given user and all associated data|

The API should return:

{
  "removed": 1 //Indicating the selected user id information has been deleted.
}


**Team trello link**
(https://trello.com/b/MY9LDHG7/use-my-tech-stuff)  A visual overview of what is being worked on and who is working on it.




