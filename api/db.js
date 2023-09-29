require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const ResponsesModel = require('./src/models/response'); 

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   { logging: false, native: false }
);

ResponsesModel(sequelize);

const {Responses} = sequelize.models; 

module.exports = {
    Responses,
    conn: sequelize,
};