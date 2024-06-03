import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },  
    job: {
        type: String,
        required: true,
        enum: ["MERN", "MEAN", "React", "Data Science"]
    },
    address: {
        type: String,
        required: true
    }
});

const Expense = mongoose.model('Expense', expenseSchema);

export default Expense;
