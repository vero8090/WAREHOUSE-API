//define required tools
const express = require('express')
const app = express()

const cors = require('cors')

//using the app
app.use(express.json())
app.use(cors())

//give the port
const PORT = 5050

//define router
const {userRouter} = require('./routers')

// ### Sequelize Synchronous
const Sequelize = require('sequelize');
const Models = require('./models');
Models.sequelize.sync({
    force : false,
    alter: true,
    logging : console.log
}).then(function () {
    console.log('Database is Synchronized!')

}).catch(function (err) {
    console.log(err, "Something Went Wrong with Database Update!")
});

//optional for welcoming
app.get('/', (req,res)=>{
    res.status(201).send('<h1>Welcome to Starbucks</h1>')
})

//import router
app.use('/users', userRouter)

//optional
app.listen(PORT, ()=>console.log(`API Running on Port ${PORT}`))