import express, { request, response } from 'express';
import { PORT, mongoDBURL } from './config.js'
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'


const app = express()

//Middleware for parsing request body :- 
app.use(express.json())

app.use(cors())

//Middleware for handling CORS policy :-
// app.use(cors({
//   origin: "http://localhost:3000",
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHEaders: ['Content-Type'],
// }))

app.get("/", (req, res) => {
  console.log(req)
  return res.status(234).send('Welcome to Book-Store using MERN Stack')
})

app.use('/books', booksRoute)

mongoose.connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database')
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`)
    })
    
  })
  .catch((error) => {
    console.log(error)
  })

//CORS stands for Cross-Origin Resource Sharing
