import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const uri = process.env.DB;

    // Connect to MongoDB
    await mongoose.connect(uri);

    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};
