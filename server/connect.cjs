
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require("dotenv").config({path: "./config.env"})
const {eventModel} = require("./data.cjs")
const {itemModel} = require("./data.cjs")

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

async function main() {
    const Db = process.env.ATLAS_URI;

    const connectDB = async () => {
        try {
            const conn = await mongoose.connect (Db);
            console.log('MongoDB connected:')
        } catch (error) {
            console.error(error);
            process.exit(1);
        }
    };

    await connectDB();
}

main();

app.get('/', async (req, res) => {
    try {
        const events = await eventModel.find();
        const items = await itemModel.find();
        console.log(events);
        console.log(items);

        res.json({
            events,
            items
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

app.listen(port, () => {
    console.log('app is running');
})