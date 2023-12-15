const express = require('express')
const connectDB = require('./config/db')
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

const PORT = 8899;
connectDB()
const commonRouter = require('./routes/indexRouter')

app.use("/api", commonRouter)


app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Work on ${PORT}`);
})