import React from 'react'
import mongoose from 'mongoose'

const dbConnect = () => {
    if (mongoose.connection.readyState >= 1) {
        console.log('MongoDB connection is already established')
        return;
    }

    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.DB_URI);
    console.log('New MongoDB connection established')
};

export default dbConnect;