const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our m1 model
class m1 extends Model {}

// create fields/columns for m1 model
m1.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    m1_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'm1'
  }
);

module.exports = m1;