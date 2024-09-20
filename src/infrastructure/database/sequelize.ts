import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect: 'mssql',
    host: 'localhost',
    username: 'root',
    password:'',
    database:'church'
})