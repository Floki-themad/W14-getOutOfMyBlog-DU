const m1 = require('./m1');
const m2 = require('./m2');
const m3 = require('./m3')

// https://sequelize.org/master/index.html

//Defines 1 to 1 relationship
// m1.hasOne(m2);
// m2.belongsTo(m1);

//Defines 1 to M relationship
// m1.hasMany(m2);
// m2.hasOne(m1);

//Defines M to M relationship
// m1.belongsToMany(m2, { through: 'm3' });
// m2.belongsToMany(m1, { through: 'm3' }); 

module.exports = { m1, m2, m3 };