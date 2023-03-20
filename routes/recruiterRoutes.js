import express from "express";
import Recruiter from "../models/Recruiter.js";

const router = express.Router({ mergeParams: true });

router.route("/recruiter-dashboard").get((req, res) => {
  if (req.isAuthenticated()) {
    const reqUsername = req.user.username;
    Recruiter.findOne({ username: reqUsername }, function (err, docs) {
      if (!err) {
        if (docs && docs.userType === "recruiter") {
          res.send("Recruiter Dashboard");
        } else {
          res.redirect("/logout");
        }
      }
    });
  } else {
    res.redirect("/recruiter-login");
  }
});

export default router;
