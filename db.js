import mongoose from "mongoose";

const url = "mongodb+srv://girrajsinghal:girrajsinghal@cluster0.fmflsn5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/"; // Replace 'yourDatabaseName' with the actual name of your database

const connection = async () => {
  try {
    await mongoose.connect(url, {
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

export default connection;
