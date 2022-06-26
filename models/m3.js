const { Model, DataTypes } = require('sequelize');
const { m3 } = require('.');
const sequelize = require('../config/connection');

// create our m3 model
class m3 extends Model {}

// create fields/columns for m3 model
m3.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    m2_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'm2',
        key: 'id',
        unique: false
      }
    },
    m1_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'm1',
        key: 'id',
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'm3'
  }
);

module.exports = m3;