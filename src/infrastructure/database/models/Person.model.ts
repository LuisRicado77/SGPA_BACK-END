import { Model, DataType, DataTypes, Sequelize } from 'sequelize';
import { sequelize } from "../sequelize";
import { AutoIncrement } from "sequelize-typescript";


export class Person extends Model{}


Person.init(
    {
      // Model attributes are defined here
      cedula: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey:true
      },
      name: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      lastName: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey:true
      },
      email: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey:true
      },
      picture: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey:true
      },
      state: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey:true
      },
      typeDocument: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey:true
      },
      whyInactivity: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey:true
      },
      age: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey:true
      },
      street: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey:true
      },
      city: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey:true
      },
      neiborhood: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey:true
      },
      codeZip: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey:true
      },
      country: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey:true
      },
      ageGroup   : {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey:true
      },



    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: 'Person', // We need to choose the model name
    },
  );