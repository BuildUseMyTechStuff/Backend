exports.seed = function(knex, Promise) {
  return knex('users').insert([
{
    id: 1,
    full_name: "george",
    email: "george.edwards@reqres.in",
    password: "gotit"
},
{
    id: 2,
    full_name: "boston",
    email: "byron.fields@reqres.in",
    password: "word1"
},
{
    id: 3,
    full_name: "rachel",
    email: "rachel.howell@reqres.in",
    password: "homepl"
}
  ]);
}
