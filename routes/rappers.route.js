const uuid = require("uuid").v4;
const Joi = require("@hapi/joi");

const db = require("../data/db");

module.exports = [
  {
    path: "/rappers",
    method: "GET",
    handler: async (request, h) => {
      return await db("rappers");
    },
    options: {
      description: "Get all rappers",
      notes: "Return the full rappers collection",
      tags: ["api"]
    }
  },
  {
    path: "/rappers/{id}",
    method: "GET",
    handler: async (request, h) => {
      const { id } = request.params;
      return await db("rappers")
        .where({ id })
        .first();
    },
    options: {
      description: "Get one rapper",
      notes: "Return one selected rapper",
      tags: ["api"],
      validate: {
        params: Joi.object({
          id: Joi.string().guid({ version: "uuidv4" })
        })
      }
    }
  },
  {
    path: "/rappers",
    method: "POST",
    handler: async (request, h) => {
      const id = uuid();
      const { sceneName, realName, dateNaissance, picture } = request.payload;
      await db("rappers").insert({ id, sceneName, realName, dateNaissance, picture });
      return await db("rappers")
        .where({ id })
        .first();
    },
    options: {
      description: "Create rapper",
      notes: "Create a new rapper and return it",
      tags: ["api"]
    }
  },
  {
    path: "/rappers/{id}",
    method: ["PUT", "PATCH"],
    handler: async (request, h) => {
      const { id } = request.params;
      const { sceneName, realName, dateNaissance, picture } = request.payload;
      await db("rappers").insert({ id, sceneName, realName, dateNaissance, picture });
      return await db("rappers")
        .where({ id })
        .first();
    },
    options: {
      description: "Update rapper",
      notes: "Update an rapper and return it",
      tags: ["api"],
      validate: {
        params: Joi.object({
          id: Joi.string().guid({ version: "uuidv4" })
        })
      }
    }
  },
  {
    path: "/rappers/{id}/albums",
    method: "GET",
    handler: async (request, h) => {
      const { id } = request.params;
      return await db("albums").where({ rapperId: id });
    },
    options: {
      description: "Get one rapper albums collection",
      notes: "Return one selected rapper albums collection",
      tags: ["api"],
      validate: {
        params: Joi.object({
          id: Joi.string().guid({ version: "uuidv4" })
        })
      }
    }
  },
  {
    path: "/rappers/{id}/songs",
    method: "GET",
    handler: async (request, h) => {
      const { id } = request.params;
      return await db("rappers")
        .where({ rapperId: id })
        .first();
    },
    options: {
      description: "Get one rapper songs collection",
      notes: "Return one selected rapper songs collection",
      tags: ["api"],
      validate: {
        params: Joi.object({
          id: Joi.string().guid({ version: "uuidv4" })
        })
      }
    }
  }
];
