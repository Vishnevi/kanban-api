import mongoose from 'mongoose';

function dbConnect() {
    mongoose.connect('mongodb://localhost/kanban')
        .then(() => console.log('✅ MongoDB connected'))
        .catch(err => console.error('❌ Connection error:', err));
}

export default dbConnect;