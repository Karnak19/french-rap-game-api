const uuid = require("uuid").v4;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomTeamId(array) {
  return array[getRandomInt(array.length)].id;
}

function findRapperId(array, name) {
  return array.find(el => el.sceneName === name).id;
}

// function findAlbumId(array, title) {
//   return array.find(el => el.)
// }

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

const albums = [
  {
    id: uuid(),
    title: "Dozo",
    picture: "",
    rapperId: findRapperId(rappers, "Kaaris")
  },
  {
    id: uuid(),
    title: "Double Fuck",
    picture: "",
    rapperId: findRapperId(rappers, "Kaaris")
  },
  {
    id: uuid(),
    title: "Trône",
    picture: "",
    rapperId: findRapperId(rappers, "Booba")
  },
  {
    id: uuid(),
    title: "D.U.C",
    picture: "",
    rapperId: findRapperId(rappers, "Booba")
  },
  {
    id: uuid(),
    title: "Force et Honneur",
    picture: "",
    rapperId: findRapperId(rappers, "Lacrim")
  },
  {
    id: uuid(),
    title: "Faites entrer Lacrim",
    picture: "",
    rapperId: findRapperId(rappers, "Lacrim")
  }
];

exports.seed = async knex => {
  try {
    await Promise.all([knex("rappers").del(), knex("albums").del(), knex("songs").del()]);
    await knex("rappers").insert(rappers);
    await knex("albums").insert(albums);
  } catch (err) {}
};
