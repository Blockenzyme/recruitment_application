import express from "express";
import { signin,register } from "../controllers/authCompany.js";


const router = express.Router({mergeParams: true});

router.route("/company-register").get((req,res)=>{
    res.send("Company Register Page");
}).post(register);


router.route("/company-login").get((req,res)=>{
    res.send("Company Login Page");
}).post(signin);

router.route("/logout").get((req,res)=>{
    req.logout(function(err){
        if(err){ console.log(err);}
        res.redirect('/');
    });
});

export default router;