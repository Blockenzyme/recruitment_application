import React from "react";
import { Row, Col, Container, Button } from "reactstrap";
import "./JobDescription.styles.css";
import jobdesc1 from "../../../assets/jobdesc1.png";
import dummyJobs from "./dummyJob";
import save from "../FindJobs/svgs/save.svg";
import loc from "../FindJobs/svgs/location.svg";
import srch from "../FindJobs/svgs/search.svg";

import styles from "../FindJobs/FindJobs.module.css";

const JobDescription = () => {
  return (
    <React.Fragment>
      <div>
        <Container>
         
          <div className={styles.jobsPage}>
      <section className={styles.topSection}>
        <h2>Discover the best remote jobs here</h2>
        <div className={styles.searchSection}>
          <div>
            <img src={srch} alt="search icon" />
            <input placeholder="Job title or Keyword" />
          </div>
          <span className={styles.vline}></span>
          <div>
            <img src={loc} alt="location icon" />
            <input placeholder="Add Country or City" />
          </div>
          <Button className={styles.searchbtn}>Search</Button>
        </div>
      </section>
      </div>
          <div className="container2">
            <Row className="box2">
              <Col md={3}>
                <img src={jobdesc1} alt="jobdesc" id="jobdesc1" />
              </Col>
              <Col md={6} className="text2">
                <h3>Vacant Job</h3>
                <h4>Company Name</h4>
              </Col>
              <Col md={3}>
                <Button className="button2">Apply Now</Button>
              </Col>
            </Row>
            <Row className="text3">
              <Col md={6}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <br />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passageincluding versions of Lorem Ipsum.{" "}
                </p>
              </Col>
              <Col md={6} className="box3">
                <h5 id="title2" className="c1">
                  Job Details
                </h5>
                <p className="c2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,.
                </p>
              </Col>
            </Row>
            <Row>
              <p className="text4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. remaining essentially unchanged. It was popularised
                in the 1960s with the release.
              </p>
            </Row>
            <Row>
              <Button className="button3">Apply Job</Button>
            </Row>
          </div>

          <Row>
            <h3 id="title4">Similar Job Postings</h3>
          </Row>
        </Container>
      </div>
      <Container>
        <div className={styles.jobListing}>
          {dummyJobs.map((job) => {
            return (
              <div className={styles.job}>
                <img
                  className={styles.jobLogo}
                  src={job.companylogo}
                  alt="logo"
                />
                <span>
                  <h4>{job.title}</h4>
                  <h6>{job.company}</h6>
                </span>
                <span className={styles.jobtag}>
                  <span>{job.tags[0]}</span>
                  <span>{job.tags[1]}</span>
                  <span>{job.tags[2]}</span>
                </span>
                <h4>{job.location}</h4>
                <h4>{job.duration}</h4>
                <img src={save} alt="save icon" />
              </div>
            );
          })}
        </div>
      </Container>
    </React.Fragment>
  );
};

export default JobDescription;
