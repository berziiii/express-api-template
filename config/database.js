'use strict';

module.exports = {
    Development: {
        configName: 'Development',
        client: 'mssql',
        port: process.env.PORT || 3000,
        connection: {
            host: '<% IP ADDRESS %>',
            user: '<% USERNAME %>',
            password: '<% PASSWORD %>',
            database: '<% DATABASE NAME %>'
        }
    },
};
