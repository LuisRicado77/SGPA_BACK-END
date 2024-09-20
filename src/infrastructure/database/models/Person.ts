import { Model, DataType, DataTypes } from "sequelize";
import { sequelize } from "../sequelize";
import { AutoIncrement } from "sequelize-typescript";

export class PersonModel extends Model{}


PersonModel.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: false,
            primaryKey: true

        },
        name:{
            type: DataTypes.TEXT,
        }
    }
)