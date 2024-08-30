import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    stock: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stock',
        required: true,
    },
    transactionType: {
        type: String,
        enum: ['BUY', 'SELL'],
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    priceAtTransaction: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

export const Transaction = mongoose.model("Transaction",TransactionSchema);