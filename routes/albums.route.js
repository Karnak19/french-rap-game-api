const uuid = require("uuid").v4;
const Joi = require("@hapi/joi");

const db = require("../data/db");

module.exports = [
  {
    path: "/albums",
    method: "GET",
    handler: async (req, h) => {
      return await db("albums");
    },
    options: {
      description: "Get all albums",
      notes: "Return the full albums collection",
      tags: ["api"]
    }
  },
  {
    path: "/albums/{id}",
    method: "GET",
    handler: async (req, h) => {
      const { id } = req.params;
      return await db("albums")
        .where({ id })
        .first();
    },
    options: {
      description: "Get one album",
      notes: "Return one selected album",
      tags: ["api"],
      validate: {
        params: Joi.object({
          id: Joi.string().guid({ version: "uuidv4" })
        })
      }
    }
  },
  {
    path: "/albums",
    method: "POST",
    handler: async (req, h) => {
      const id = uuid();
      const { title, picture, rapperId } = req.payload;
      await db("albums").insert({ id, title, picture, rapperId });
      return await db("albums")
        .where({ id })
        .first();
    },
    options: {
      description: "Create album",
      notes: "Create a new album and return it",
      tags: ["api"]
    }
  },
  {
    path: "/albums/{id}",
    method: ["PUT", "PATCH"],
    handler: async (req, h) => {
      const { id } = req.params;
      const { title, picture, rapperId } = req.payload;
      await db("albums").insert({ id, title, picture, rapperId });
      return await db("albums")
        .where({ id })
        .first();
    },
    options: {
      description: "Update album",
      notes: "Update an album and return it",
      tags: ["api"],
      validate: {
        params: Joi.object({
          id: Joi.string().guid({ version: "uuidv4" })
        })
      }
    }
  }
];
