import express from "express";
import User from "../models/User.js";

const router = express.Router({ mergeParams: true });

router.route("/user-dashboard").get((req, res) => {
  console.log(req.user);
  if (req.isAuthenticated()) {
    const reqUsername = req.user.username;
    User.findOne({ username: reqUsername }, function (err, docs) {
      if (!err) {
        if (docs && docs.userType === "user") {
          res.send("User Dashboard");
        } else {
          res.redirect("/logout");
        }
      }
    });
  } else {
    res.redirect("/user-login");
  }
});

export default router;
