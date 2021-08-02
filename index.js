const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRouter = require('./routes/userRoutes')


dotenv.config()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.send('Voila app works'))
//user Route
app.use('/user', userRouter)

//Database connection
mongoose.connect(`mongodb+srv://pawan:Helloworld!23@cluster0.3ivca.mongodb.net/user?retryWrites=true&w=majority`,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(() => console.log('Connected to mongoDB'))
    .catch(err => console.error('Could not connect to MongoDB..', err))

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


app.listen(3000, () => {
    console.log("Express server listening on port " + 3000)
})
