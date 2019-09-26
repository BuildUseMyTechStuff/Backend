

exports.seed = function(knex, Promise) {
  return knex('users-data').insert([
{
    id: 1,
    email: "george.edwards@reqres.in",
    password: "gotit",
    token: "plJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE5LCJ1c2VybmFtZSI6ImNocmlzMzQuZWR8YXJkc0ByZXFyZXMuaW4iLCJpYXQiOjE1Njk0NjM2OTQsImV4cCI6MTU2OTU1MDA5NH0.4l-PLgzS7WPaDuyBOOUxV1sP95wGb9ShR75TZ2akGNg"
},
{
    id: 2,
    email: "byron.fields@reqres.in",
    password: "word1",
    token: "ofJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE5LCJ1c2VybmFtZSI6ImNocmlzMzQuVWR3YXJkc0ByZXFyZXMuaW4iLCJpYXQiOjE1Njk0NjM2OTQsImV4cCI6MTU2OTU1MDA5NH0.4l-PLgzS7WPaDuyBOOUxV1sP95wGb9ShR75TZ2akGNg"

},
{
    id: 3,
    email: "rachel.howell@reqres.in",
    password: "homepl",
    token: "asJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE5LCJ1c2VybmFtZSI6ImNocmlzMzQuZWR3YXJkc0ByZXFyZXMuaW4iLCJpYXQiOjE1Njk0NjM2OTQsImV4cCI6MTU2OTU1MDA5NH0.4l-PLgzS7WPaDuyBOOUxV1sP95wGb9ShR75TZ2akGNh"
}
  ]);
}
