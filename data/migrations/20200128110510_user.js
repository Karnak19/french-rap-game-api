exports.up = async knex => {
  try {
    return await Promise.all([
      knex.schema.createTable("rappers", table => {
        table
          .uuid("id")
          .primary()
          .unique()
          .notNullable();
        table.string("sceneName");
        table.string("realName");
        table.string("dateNaissance");
        table.string("picture");
      }),
      knex.schema.createTable("albums", table => {
        table
          .uuid("id")
          .primary()
          .unique()
          .notNullable();
        table.string("picture");
        table.string("title");
        table
          .uuid("rapperId")
          .references("rappers.id")
          .onDelete("CASCADE");
      }),
      knex.schema.createTable("songs", table => {
        table
          .uuid("id")
          .primary()
          .unique()
          .notNullable();
        table.string("title");
        table.string("duration");
        table.string("link");
        table
          .uuid("albumId")
          .references("albums.id")
          .onDelete("CASCADE");
        table
          .uuid("rapperId")
          .references("rappers.id")
          .onDelete("CASCADE");
      })
    ]);
  } catch (err) {
    console.log(err);
  }
};

exports.down = async knex => {
  return await Promise.all([
    knex.schema.dropTableIfExists("songs"),
    knex.schema.dropTableIfExists("albums"),
    knex.schema.dropTableIfExists("rappers")
  ]);
};
