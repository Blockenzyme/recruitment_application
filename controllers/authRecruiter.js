import passport from "passport";
import Recruiter from "../models/Recruiter.js";

const signin = async (req, res) => {
  const recruiter = {
    username: req.body.username,
    password: req.body.password,
  };
  req.login(recruiter, function (err) {
    if (err) {
      console.log(err);
      res.redirect("/recruiter-login");
    } else {
      passport.authenticate("recruiterlocal")(req, res, () => {
        res.send("Successfully logged in!");
      });
    }
  });
};

const register = async (req, res) => {
  const newRecruiter = new Recruiter({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    ats: req.body.ats,
    role: req.body.role,
    fund: req.body.fund,
    userType: "recruiter",
  });
  Recruiter.register(newRecruiter, req.body.password, function (err, user) {
    if (err) {
      console.log(err);
      res.redirect("/recruiter-register");
    } else {
      passport.authenticate("recruiterlocal")(req, res, () => {
        res.send("Successfully registered!");
      });
    }
  });
};

export { signin, register };
