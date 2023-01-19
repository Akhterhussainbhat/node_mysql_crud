import connectdb from "../db/connectdb.js";

class StudentController {

    static createDoc=(req, res)=>{
        res.render('create')

    }

    static storeDoc = (req, res) => {
        // console.log("it is in request body");
        // console.log(req.body);
        var user = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        }
        connectdb.query('INSERT INTO students SET ?', user, function (err, result) {
            if (err) {
                console.log(err)

            } else {
                 req.flash('success', 'Data added successfully!');           
                res.redirect('/student');
            }
        })

    }
    static getAllDoc = async (req, res) => {
        try {
            connectdb.query('SELECT * FROM students ORDER BY id desc', function (err, rows) {
                if (err) {
                    req.flash('error', err);
                    res.render('index', { page_title: "Customers - Node.js", data: '' });
                } else {
                    res.render('index', { page_title: "Customers - Node.js", data: rows });

                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    static editDoc = (req, res) => {
        connectdb.query('SELECT * FROM students WHERE id = ' + req.params.id, function (err, rows, fields) {
            if (err) throw err
            // if user not found
            if (rows.length <= 0) {
                // req.flash('error', 'Customers not found with id = ' + req.params.id)
                console.log('something is wrong');
                res.redirect('/student')
            }
            else { // if user found
                // render to views/user/edit.ejs template file
                res.render('edit', {
                    data: rows[0],
                    // id: rows[0].id,
                    // name: rows[0].name,
                    // email: rows[0].email,
                    // phone:rows[0].phone                 
                })
            }
        })


    }

    static updateDoc = (req, res) => {

        var user = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        }
        connectdb.query('UPDATE students SET ? WHERE id = ' + req.params.id, user, function (err, result) {
            //if(err) throw err
            if (err) {
                console.log('something is wrong');
                // render to views/user/add.ejs
                res.render('edit', {
                    id: req.params.id,
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone
                })
            } else {
                // req.flash('success', 'Data updated successfully!');
                console.log('Data updated successfully!');
                res.redirect('/student');
            }
        })

    }

    static deleteDoc = (req, res) => {
        var user = { id: req.params.id }
        connectdb.query('DELETE FROM students WHERE id = ' + req.params.id, user, function (err, result) {
            //if(err) throw err
            if (err) {
                console.log('something is wrong');
                // redirect to users list page
                res.redirect('/student')
            } else {
                // req.flash('success', 'Customer deleted successfully! id = ' + req.params.id)
                console.log('Data deleted successfully! id = ' + req.params.id);
                // redirect to users list page
                res.redirect('/student')
            }
        })
       
    }
}

export default StudentController;