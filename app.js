import express from "express";
import { join } from "path";
import connectdb from "./db/connectdb.js";
import web from './routes/web.js'
import session from "express-session";
import cookieParser from "cookie-parser";
import flash from "express-flash";
import passport  from 'passport';
import env from 'dotenv';
import method_overridde from 'method-override';

const app= express();
env.config();
const port= process.env.PORT;

app.locals.baseURL = "http://localhost:3000"

// static files
// app.use(express.static(join(process.cwd(), "public")))
// app.use('/student/edit/',express.static(join(process.cwd(), "public")))
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({ 
    secret:process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
   
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(method_overridde('_method'))
app.use(flash());


app.set("view engine", "ejs")
// load routes
app.use('/student',web);


app.listen(port,()=>{
    console.log(`Server running at port http://localhost:${port}`);
})