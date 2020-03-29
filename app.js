'use strict';
require('dotenv').config();

const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

const passport = require('./utils/pass')

const catRouter = require('./routes/catRoute')
const userRouter = require('./routes/userRoute')
const authRouter = require('./routes/authRoute')

const db = require('./db/db')

app.use(cors())

app.use('/cat', passport.authenticate('jwt', {session: false}), catRouter)
app.use('/user', passport.authenticate('jwt', {session: false}), userRouter)
app.use('/auth', authRouter)

db.on('connected', () => {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
})
