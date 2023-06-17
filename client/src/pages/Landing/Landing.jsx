import React from "react";
import heroimg from "./heroimg.png";
import howwework1 from "./howwework1.png";
import howwework2 from "./howwework2.jpg";
import howwework3 from "./howwework3.jpg";
import howwework4 from "./howwework4.jpg";
import styles from "./Landing.module.css";
import {Button} from "reactstrap";

function Landing(){
  return (
    <div className={styles.landingpage}>
      <section className={styles.herosection}>
        <div className={styles.herotext}>
          <h1>Find Your Future Career</h1>
          <p>
            Our platform is designed to guide you every step of the way, from
            creating your profile to applying for your dream job. Start
            exploring our job listings now and see where your career can take
            you! Get started with:
          </p>
          <Button>Google</Button>
          <Button>LinkedIn</Button>
        </div>
        <div className={styles.homeimg}>
          <img src={heroimg} alt="hero img" />
        </div>
      </section>
      <section className={styles.howwework}>
        <h5>
          How <span className={styles.companyName}>Blockenzyme</span> works for
          you?
        </h5>
        <div className={styles.howweworkflex}>
          <div className={styles.howweworkimg}>
            <img src={howwework1} alt="img 1" />
            <h6>Find the Right Job</h6>
          </div>
          <div className={styles.howweworkimg}>
            <img src={howwework2} alt="img 2" />
            <h6>Research Companies</h6>
          </div>
          <div className={styles.howweworkimg}>
            <img src={howwework3} alt="img 3" />
            <h6>Apply to Jobs</h6>
          </div>
          <div className={styles.howweworkimg}>
            <img src={howwework4} alt="img 4" />
            <h6>Compare Salaries</h6>
          </div>
        </div>
      </section>
      <section className={styles.exploreNow}>
        <p>
          <span className={styles.exploretext}>Unleash</span> your potential and
          find your dream job - Let our{" "}
          <span className={styles.exploretext}>website</span> guide you to{" "}
          <span className={styles.exploretext}>SUCCESS</span>!
        </p>
        <Button>Explore Now </Button>
      </section>
      <section className={styles.companies}>
        <h2>Companies</h2>
        <hr />
        <div className={styles.logoSection}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2S1f2Uzw11czJcdvqb1Sifb1KFRA9uKPnFTeGf5-0eg&usqp=CAU&ec=48665701"
            alt="company img"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2S1f2Uzw11czJcdvqb1Sifb1KFRA9uKPnFTeGf5-0eg&usqp=CAU&ec=48665701"
            alt="company img"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2S1f2Uzw11czJcdvqb1Sifb1KFRA9uKPnFTeGf5-0eg&usqp=CAU&ec=48665701"
            alt="company img"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2S1f2Uzw11czJcdvqb1Sifb1KFRA9uKPnFTeGf5-0eg&usqp=CAU&ec=48665701"
            alt="company img"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2S1f2Uzw11czJcdvqb1Sifb1KFRA9uKPnFTeGf5-0eg&usqp=CAU&ec=48665701"
            alt="company img"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2S1f2Uzw11czJcdvqb1Sifb1KFRA9uKPnFTeGf5-0eg&usqp=CAU&ec=48665701"
            alt="company img"
          />
        </div>
      </section>
      <hr />
    </div>
  );
};

export default Landing;
