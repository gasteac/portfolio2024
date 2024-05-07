const mongoose = require("mongoose");
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN);
    console.log('DB Online');
  } catch (error) {
    console.log(process.env.DB_CNN)
    console.log(error);
        throw new Error('Error initializing BD'); 
  }
};
module.exports = {
  dbConnection
}