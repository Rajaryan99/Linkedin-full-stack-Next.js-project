import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose';
import postsRoutes from './routes/posts.routes.js'


const app = express();

app.use(cors())
app.use(express.json());

const port = process.env.PORT;

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })


app.use(postsRoutes)

const connectDB = async () => {
    try {

        const DB = await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log('Database connected Successfully!')

        app.listen(port, () => {

            console.log(`server is running on http://localhost:${port}`)
        })
        
    } catch (error) {
        console.log(error)
    }
}


connectDB();
