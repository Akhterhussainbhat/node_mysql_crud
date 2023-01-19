import express from 'express';
 const router =express.Router();
import StudentController from '../controller/studentController.js';
import LoginController from '../controller/loginController.js';

 router.get('/',StudentController.getAllDoc)
 router.get('/create',StudentController.createDoc)
 router.post('/store',StudentController.storeDoc)
 router.get('/edit/:id',StudentController.editDoc)
 router.post('/update/:id',StudentController.updateDoc)
 router.get('/delete/:id',StudentController.deleteDoc)

 // login routes
 router.get('/login',LoginController.login);
 router.post('/login_user',LoginController.loginUser);
 router.get('/register',LoginController.register)
 router.post('/register_user',LoginController.registerUser)

 

 export default router;
