import passport from "passport";
import Company from "../models/Company.js";

const signin = async (req, res) => {
  const company = {
    username: req.body.username,
    password: req.body.password,
  };
  req.login(company, function (err) {
    if (err) {
      console.log(err);
      res.redirect("/company-login");
    } else {
      passport.authenticate("companylocal")(req, res, () => {
        res.send("Successfully logged in!");
      });
    }
  });
};

const register = async (req, res) => {
  const newCompany = new Company({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    ats: req.body.ats,
    role: req.body.role,
    fund: req.body.fund,
    userType: "company",
  });
  Company.register(newCompany, req.body.password, function (err, user) {
    if (err) {
      console.log(err);
      res.redirect("/company-register");
    } else {
      passport.authenticate("companylocal")(req, res, () => {
        res.send("Successfully registered!");
      });
    }
  });
};

export { signin, register };
