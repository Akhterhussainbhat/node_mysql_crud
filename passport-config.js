
 import passportLocal from 'passport-local';
import bcrypt from 'bcrypt';
    const LocalStrategy= passportLocal.Strategy;

function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = getUserByEmail(email)
    if (user.length <= 0) {
      return done(null, false, { message: 'No user with that email' })
    }

    try {
      if (await bcrypt.compare(password, user[0].password)) {
        return done(null, user)
      } else {
        return done(null, false, { message: 'Password incorrect' })
      }
    } catch (e) {
      return done(e)
    }
  }

  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))
  passport.serializeUser((user, done) => done(null, user[0].id))
  passport.deserializeUser((id, done) => {
    return done(null, getUserById(id))
  })
}

export default initialize