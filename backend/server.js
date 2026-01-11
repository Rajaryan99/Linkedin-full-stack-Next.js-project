import express from 'express'
import cors from 'cors'
import 'dotenv/config'


const app = express();

app.use(cors())
app.use(express.json());

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})
