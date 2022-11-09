import User from "../models/User.js";

export const renderSignUpForm = (req, res) => {
  res.render("auth/signup");
};

export const signup = async (req, res) => {
  const errros = [];
  const { name, email, password } = req.body;
  if (password != confirm_password) {
    errors.push({ text: "Password do not match" });
  }
  if (password.length < 4) {
    errors.push({ text: "Password must be at least 4 characters" });
  }
  if (errors.length > 0) {
    res.render("users/signup", {
      errors,
      name,
      email,
      password,
      confirm_password,
    });
  } else {
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
      req.flash("error_msg", "The email is already in use");
      res.redirect("/users/signup");
    } else {
      // Esto me permite cifrar la contraseña
      newUser.password = await newUser.encryptPassword(password);
      //Este newUser es el que utilizo para guardar en la base de datos
      const newUser = new User({ name, email, password });
      await newUser.save();
      res.flash("success_msg", "You are registered");
      res.redirect("/users/singin");
    }
  }
};

export const renderSigninForm = (req, res) => {
  res.render("auth/signin");
};

export const signin = (req, res) => {
  res.send("signin");
};

export const logout = (req, res) => {
  res.send("logout");
};
