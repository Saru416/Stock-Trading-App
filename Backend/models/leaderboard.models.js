import mongoose from "mongoose";

const LeaderBoardSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    portfolioValue: {
        type: Number,
        required: true,
    },
    rank: {
        type: Number,
        required: true,
    },
    lastUpdated: {
        type: Date,
        default: Date.now,
    },
});

export const LeaderBoard = mongoose.model('LeaderBaord',LeaderBoardSchema);