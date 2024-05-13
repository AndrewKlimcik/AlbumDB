const path = require('path');

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'mydb.sqlite')  // Ensures the path is always correct regardless of where the script is run from
    },
    useNullAsDefault: true,  // Important for SQLite, because it doesn't support inserting default values without explicit NULL
    migrations: {
        directory: path.resolve(__dirname, 'migrations')  // Ensures your migrations are correctly located
    },
    seeds: {
        directory: path.resolve(__dirname, 'seeds')  // If you use seed files, they should be located here
    },
    debug: false  // Set to true if you want detailed logs for your database queries, useful for debugging
};
