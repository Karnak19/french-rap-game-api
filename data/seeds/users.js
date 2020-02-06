const uuid = require("uuid").v4;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomTeamId(array) {
  return array[getRandomInt(array.length)].id;
}

const rappers = [
  { id: uuid(), sceneName: "Booba", realName: "Élie Yaffa", dateNaissance: "", picture: "" },
  { id: uuid(), sceneName: "Lacrim", realName: "Karim Zenoud", dateNaissance: "", picture: "" },
  {
    id: uuid(),
    sceneName: "Kaaris",
    realName: "Okou Armand Gnakouri",
    dateNaissance: "",
    picture: ""
  }
];

const users = [
  {
    id: uuid(),
    firstName: "Toto",
    lastName: "Jean",
    age: "18",
    teamId: getRandomTeamId(rappers)
  },
  {
    id: uuid(),
    firstName: "Tata",
    lastName: "Jane",
    age: "8",
    teamId: getRandomTeamId(rappers)
  },
  {
    id: uuid(),
    firstName: "Jean",
    lastName: "Dick",
    age: "38",
    teamId: getRandomTeamId(rappers)
  },
  {
    id: uuid(),
    firstName: "Nick",
    lastName: "Does",
    age: "14",
    teamId: getRandomTeamId(rappers)
  },
  {
    id: uuid(),
    firstName: "John",
    lastName: "Peter",
    age: "73",
    teamId: getRandomTeamId(rappers)
  },
  {
    id: uuid(),
    firstName: "Tom",
    lastName: "Mark",
    age: "68",
    teamId: getRandomTeamId(rappers)
  },
  {
    id: uuid(),
    firstName: "Nigel",
    lastName: "Spencer",
    age: "26",
    teamId: getRandomTeamId(rappers)
  },
  {
    id: uuid(),
    firstName: "Tom",
    lastName: "Jane",
    age: "28",
    teamId: getRandomTeamId(rappers)
  },
  {
    id: uuid(),
    firstName: "Tata",
    lastName: "Hamill",
    age: "12",
    teamId: getRandomTeamId(rappers)
  },
  {
    id: uuid(),
    firstName: "Titi",
    lastName: "Jack",
    age: "38",
    teamId: getRandomTeamId(rappers)
  }
];

exports.seed = async knex => {
  try {
    await Promise.all([knex("rappers").del(), knex("albums").del(), knex("songs").del()]);
    await knex("rappers").insert(rappers);
    // await knex("users").insert(users);
  } catch (err) {}
};
