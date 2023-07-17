import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  Button,
  Row,
  Col,
  Container,
} from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import fbook from "../../../assets/facebook.png";
import google from "../../../assets/google.png";
import linkedin from "../../../assets/linkedin.png";
import logo from "../../../assets/logo.jpg";
import lin1 from "../../../assets/lin1.png";
import lin2 from "../../../assets/lin2.png";
import "../login/login.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/user/login",
        { username, password },
        config
      );
      alert("Logged In");
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };
  return (
    <div>
      <Form className="form">
        <Container>
          <Row>
            <Col md={12}>
              <img src={logo} className="logo" alt="" />
            </Col>
          </Row>
          <Row>
            <Col md={4} className="social">
              <img src={fbook} alt="" />
            </Col>
            <Col md={4} className="social">
              <img src={google} alt="" />
            </Col>
            <Col md={4} className="social">
              <img src={linkedin} alt="" />
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
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="label2"
          />
        </FormGroup>
        <Link to="" className="link1">
          Forgot Password?
        </Link>
        <br />
        <Button className="login" onClick={handleLogin}>
          Log In
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
