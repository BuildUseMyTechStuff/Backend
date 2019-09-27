# backend

Build week for **WEB Unit 4 Node Build** 

## Prerequisites
 [SQLite Studio](https://sqlitestudio.pl/index.rvt?act=download) installed.

A REST client alike [Insomnia](https://insomnia.rest/download/)

Create [Heroku] account for production deployment (https://www.heroku.com/)




## CRUD Endpoints

| POST | /api/auth/register | Creates a `user` using the information sent inside the `body` of the request|

| POST | /api/auth/login | Use the credentials sent inside the `body` to authenticate the user. If login fails, respond with the correct status code and the message: 'Please try again'|

| GET | /api/users | If the user is logged in, respond with an array of all the users contained in the database. If the user is not logged in respond with the correct status code and the message: 'Please try again'|

| PUT | /api/users/users/:id | Updates a given user id|

| DELETE | /api/users/users/:id | Removes a given user and all associated data|


**Trello link**
(https://trello.com/b/MY9LDHG7/use-my-tech-stuff)  A visual overview of what is being worked on and who is working on it.




