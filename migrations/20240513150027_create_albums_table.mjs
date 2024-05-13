/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
    await knex.schema.createTable('albums', (table) => {
        table.increments('id').primary()
        table.string('title')
        table.string('artists')
        table.string('songs')
        table.string('year')
        table.string('genre')
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
    await knex.schema.dropTable('albums')
};
