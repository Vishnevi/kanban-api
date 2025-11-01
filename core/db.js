import mongoose from 'mongoose';

const connectionString = 'mongodb+srv://robertkhvaleev3_db_user:gErtI200676@cluster0.7kx5kih.mongodb.net/?appName=Cluster0';


function dbConnect() {
    mongoose.connect(connectionString)
        .then(() => console.log('✅ MongoDB connected'))
        .catch(err => console.error('❌ Connection error:', err));
}

export default dbConnect;