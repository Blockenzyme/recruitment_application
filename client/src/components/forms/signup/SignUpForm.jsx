import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import axios from "axios";
import logo from "../../../assets/logo.jpg";
import fbook from "../../../assets/facebook.png";
import google from "../../../assets/google.png";
import linkedin from "../../../assets/linkedin.png";
import "../signup/SignUp.css";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/user/register",
        {
          username,
          email,
          password,
        },
        config
      );
      alert("User signed up successfully");
    } catch (error) {
      console.error(error);
      alert("Sign up failed");
    }
    console.log("Signing up...");
  };
  return (
    <div>
      <Form className="form">
        <Container>
          <Row>
            <Col md={12}>
              <img src={logo} className="col-12" alt="" id="logo" />
            </Col>
          </Row>
          <Row>
            <Col md={4} className="social">
              <img src={fbook} alt="facebook" />
            </Col>
            <Col md={4} className="social">
              <img src={google} alt="google" />
            </Col>
            <Col md={4} className="social">
              <img src={linkedin} alt="linkedin" />
            </Col>
          </Row>
        </Container>
        <FormGroup>
          <Input
            id="username"
            name="username"
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="label1"
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="email"
            name="email"
            placeholder="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="label2"
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="password"
            name="password"
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="label2"
          />
        </FormGroup>
        <FormGroup check>
          <Label check className="check">
            <Input type="checkbox" />I agree to all Term, Privacy Policy and
            Fees
          </Label>
        </FormGroup>
        <Button className="login" onClick={handleSignup}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUpForm;
