import React from "react";
import { Row, Col, Container } from "reactstrap";
import about_1 from "../../assets/img1.png";
import about_2 from "../../assets/img2.jpg";
import about_3 from "../../assets/img3.jpg";
import Footer from "../../components/footer";
import "./About.styles.css";

function About() {
  return (
    <React.Fragment>
      <div>
        <Container>
          <div>
            <Row>
              <Col md={12} sm={12} >
                <h1 id="about" className="col-sm-12"><span>About us</span></h1>
              </Col>
            </Row>
          </div>
          <br />
          <br />
          <div className="col-sm-12">
            <Row>
              <Col md={6} lg={6}>
                <img src={about_1} alt="about_1" id="about_1" className="col-lg-6" />
              </Col>
              <Col md={6} className="content col-md-6 col-lg-6">
                <span>Blockenzyme, a dynamic tech outsourcing company founded 
                  by Swapnil Kole, is a visionary in the field of technology. 
                  We provide innovative technology solutions to businesses and 
                  organizations of all sizes, and are dedicated to sharing our
                   expertise and knowledge through engaging and educational tech 
                   seminars.</span>
                <br />
                <br />

                <span>
                  At Blockenzyme, we believe that technology is a powerful tool
                  that can revolutionize the way businesses operate. Our team is
                  dedicated to delivering cutting-edge solutions that help our
                  clients streamline their operations, increase efficiency, and
                  stay ahead of the competition.
                </span>
              </Col>
            </Row>
            <br />
            <br />

            <Row id="reverse">

              <Col lg={6} className="content col-md-6 col-lg-6" id="content2">
                Founded in 2023 , our team of experts has a wealth of experience
                 in a wide range of technologies, including blockchain development, 
                 software engineering, and digital asset management. Our mission is
                  to help businesses stay ahead of the curve in an ever-changing 
                  technological landscape.
              </Col>
              <Col lg={6} className="col-md-6 col-lg-6">
                <img src={about_2} alt="about2" id="about_2" />
              </Col>

            </Row>

            <br />
            <Row>
              <Col md={6} sm={12} lg={6}>
                <img id="about_3" src={about_3} alt="about_3" />
              </Col>
              <Col md={6} sm={12} lg={6} className="content">
                <p>In addition to our tech outsourcing services, we also hold
                   regular tech seminars led by industry experts, including our 
                   founder. These seminars provide a platform for attendees to 
                   learn about new technologies, network with other professionals, 
                   and stay up-to-date on the latest industry developments.
                </p>
                <br />
                <p>
                  Join us on our mission to empower businesses and individuals
                  with the knowledge and skills they need to succeed in a
                  rapidly changing technological landscape. Contact us today to
                  learn more about how we can help you stay ahead of the curve.
                </p>
              </Col>
            </Row>
            <br />
          </div>
        </Container>
      </div>
      <br />
      <br />
      <div className="foot">
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default About;
