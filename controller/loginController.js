import connectdb from "../db/connectdb.js";
import passport from "passport";
import bcrypt from 'bcrypt';
import initializePassport from '../passport-config.js';


console.log(initializePassport);

initializePassport(
    passport,
    email =>  connectdb.query('SELECT * FROM students WHERE email = ' + email, function (err, rows, fields) {  }),
    id =>  connectdb.query('SELECT * FROM students WHERE id = ' + id, function (err, rows, fields) {  }),

   
        
    // users.find(user => user.email === email),
    // id => users.find(user => user.id === id)
  )

class LoginController{

    static login=(req, res)=>{
        res.render('login')

    }
    static loginUser=(req, res)=>{
        res.render('login')

    }

    // static loginUser= checkNotAuthenticated, passport.authenticate('local', {
    //     successRedirect: '/',
    //     failureRedirect: '/login',
    //     failureFlash: true
    //   }))
    static register=(req, res)=>{
        res.render('register')

    }
    static registerUser= async(req, res)=>{
     try{
      const hashPassword=  await bcrypt.hash(req.body.password, 10)
        var user = {
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        }
        connectdb.query('INSERT INTO users SET ?', user, function (err, result) {
            if (err) {
                console.log(err)

            } else {
                 req.flash('success', 'Data added successfully!');           
                res.redirect('/student/login');
            }
            
        })
    } catch {
        res.redirect('/student/register')
      }

    }
}

export default LoginController;