const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our m2 model
class m2 extends Model {}

// create fields/columns for m2 model
m2.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'm2'
  }
);

module.exports = m2;