const uuid = require("uuid").v4;
const Joi = require("@hapi/joi");

const db = require("../data/db");

module.exports = [
  {
    path: "/songs",
    method: "GET",
    handler: async (req, h) => {
      return await db("songs");
    },
    options: {
      description: "Get all songs",
      notes: "Return the full songs collection",
      tags: ["api"]
    }
  },
  {
    path: "/songs/{id}",
    method: "GET",
    handler: async (req, h) => {
      const { id } = req.params;
      return await db("songs")
        .where({ id })
        .first();
    },
    options: {
      description: "Get one song",
      notes: "Return one selected song",
      tags: ["api"],
      validate: {
        params: Joi.object({
          id: Joi.string().guid({ version: "uuidv4" })
        })
      }
    }
  },
  {
    path: "/songs",
    method: "POST",
    handler: async (req, h) => {
      const id = uuid();
      const { title, duration, link, albumId, rapperId } = req.payload;
      await db("songs").insert({ id, title, duration, link, albumId, rapperId });
      return await db("songs")
        .where({ id })
        .first();
    },
    options: {
      description: "Create song",
      notes: "Create a new song and return it",
      tags: ["api"]
    }
  },
  {
    path: "/songs/{id}",
    method: ["PUT", "PATCH"],
    handler: async (req, h) => {
      const { id } = req.params;
      const { title, duration, link, albumId, rapperId } = req.payload;
      await db("songs").insert({ id, title, duration, link, albumId, rapperId });
      return await db("songs")
        .where({ id })
        .first();
    },
    options: {
      description: "Update song",
      notes: "Update an song and return it",
      tags: ["api"],
      validate: {
        params: Joi.object({
          id: Joi.string().guid({ version: "uuidv4" })
        })
      }
    }
  }
];
