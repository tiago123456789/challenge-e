import dotenv from "dotenv"
import express from "express"
import routesApp from "../routes/index"
dotenv.config()

const app = express();

app.use(express.json())

routesApp(app);

app.listen(process.env.PORT, () => {
    console.log("SERVER IS RUNNING")
})

