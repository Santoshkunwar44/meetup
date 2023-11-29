const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const app = express()
const session = require("express-session");
const cookieParser = require("cookie-parser")


require("dotenv").config();

app.use(cors({
    origin:["http://localhost:5173",process.env.FRONTEND_URL],
    methods:["POST","GET","PUT","DELETE"],
    credentials:true
}))

app.use(cookieParser())
app.use(express.json())
app.use(morgan("common"))

require("./utils/db")();

app.use(session({
    name:"codewithmama.sid",
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        secure:true,
        httpOnly:true,
        maxAge:1000*60*60,
        sameSite:"none"
    }
}))

require('./routes/AllRoutes')(app)



app.listen(8000,()=>console.log(`server started...`))