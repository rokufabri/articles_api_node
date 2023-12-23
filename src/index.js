import express from "express"
import morgan from "morgan";
import {articles_routes} from "./routes/articles.routes.js"
const app = express();
const PORT = '3200'

//Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use('/api',articles_routes)

//Listening server
app.listen(PORT,() => {
    console.log(`Server Running in PORT: ${PORT}`)
})

