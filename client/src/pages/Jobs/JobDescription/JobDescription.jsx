import React from "react";
import { Row, Col, Container, Button } from "reactstrap";
import "./JobDescription.styles.css";
import jobdesc1 from '../../../assets/jobdesc1.png';

const JobDescription = () => {
  return (
    <React.Fragment>
      <div>
        <Container>
          <div>
            <Row>
              <Col md={12}>
                <h3 id="title">Discover the best remote jobs</h3>
              </Col>
            </Row>
          </div>
          <Row id="box1">
            <Col md={3}>
              <img />
              <p className="text">Job title or Keyword</p>
            </Col>
            <Col md={7}>
              <img />
              <p className="text">Add Country or City</p>
            </Col>
            <Col >
              <Button className="button1">Search</Button>
            </Col>
          </Row>
          <div className="container2">
            <Row className="box2">
              <Col md={3}>
                <img src={jobdesc1} alt="jobdesc" id="jobdesc1" />
              </Col>
              <Col md={6} className="text2">
                <h3 >Vacant Job</h3>
                <h4 >Company Name</h4>
              </Col>
              <Col md={3}>
                <Button className="button2" >Apply Now</Button>
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
                <h5 id="title2" className="c1">Job Details</h5>
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
    </React.Fragment>
  );
};

export default JobDescription;
