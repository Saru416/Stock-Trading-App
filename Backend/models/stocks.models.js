import mongoose from "mongoose";

const StockSchema = new mongoose.Schema({
    symbol: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    currentPrice: {
        type: Number,
        required: true,
    },
    lastUpdated: {
        type: Date,
        default: Date.now,
    }
});

export const Stock = mongoose.model("Stock",StockSchema);