# backend

Build week for **WEB Unit 4 Node Build** 

### Design and build the following endpoints.

| POST | /api/auth/register | Creates a `user` using the information sent inside the `body` of the request|

| POST | /api/auth/login | Use the credentials sent inside the `body` to authenticate the user. If login fails, respond with the correct status code and the message: 'Please try again'|

| GET | /api/users | If the user is logged in, respond with an array of all the users contained in the database. If the user is not logged in respond with the correct status code and the message: 'Please try again'|

| PUT | /api/users/users/:id | Updates a given user id|

- | DELETE | /api/users/users/:id | Removes a given user and all associated data|

