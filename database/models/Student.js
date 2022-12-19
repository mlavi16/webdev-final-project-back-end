/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://www.commonsense.org/sites/default/files/png/2020-12/30-fun-ways-to-celebrate-the-end-of-the-school-year-from-a-distance-article.png"
  },

  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      // isFloat: true,
      min: 0.0,
      max: 4.0
    }
  }
});

// Export the student model
module.exports = Student;
