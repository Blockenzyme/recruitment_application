import express from "express";
import Company from "../models/Company.js";

const router = express.Router({ mergeParams: true });

router.route("/company-dashboard").get((req, res) => {
  if (req.isAuthenticated()) {
    const reqUsername = req.user.username;
    Company.findOne({ username: reqUsername }, function (err, docs) {
      if (!err) {
        if (docs && docs.userType === "company") {
          res.send("Company Dashboard");
        } else {
          res.redirect("/logout");
        }
      }
    });
  } else {
    res.redirect("/company-login");
  }
});

export default router;
