import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

import User from "../models/User.js";

passport.use(
  //Defino una nueva estrategia para autenticar
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      // Match Email's User
      const user = await User.findOne({ email: email });

      if (!user) {
        return done(null, false, { message: "Not User found." });
      }

      // Match Password's User
      const isMatch = await user.matchPassword(password);
      if (!isMatch)
        return done(null, false, { message: "Incorrect Password." });

      return done(null, user);
    }
  )
);

//Esta funcion recibe un usuario y callback para terminar (done)
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//A través del id comprueba que el usuario existe o puede navegar
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
