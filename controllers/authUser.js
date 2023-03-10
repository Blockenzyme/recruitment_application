import passport from "passport";
import User from "../models/User.js";

const signin = async (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
  };

  req.login(user, function (err) {
    if (err) {
      console.log(err);
      res.redirect("/user-login");
    } else {
      passport.authenticate("userlocal")(req, res, () => {
        res.send("Successfully logged in!");
      });
    }
  });
};

const register = async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    role: req.body.role,
    userType: "user",
  });
  User.register(newUser, req.body.password, function (err, user) {
    if (err) {
      console.log(err);
      res.redirect("/user-register");
    } else {
      passport.authenticate("userlocal")(req, res, () => {
        res.send("Successfully registered!");
      });
    }
  });
};

export { signin, register };
