import mongoose from 'mongoose';

const connectDB = async () => {
   try {
      console.log("aaya tih h **************************** ")
      const conn = await mongoose.connect(process.env.MONGO_URI)
      console.log(`MongoDB connected ${conn.connection.host}`)
   } catch (error) {
      console.log('Error in connecting to MONGO DB ', error.message);
      process.exit(1)
   }
}

export default connectDB;