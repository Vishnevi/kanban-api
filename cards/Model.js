import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const cardSchema = new Schema({ //схема
    name: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    status: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    }
});


export default mongoose.model('Card', cardSchema); //модель