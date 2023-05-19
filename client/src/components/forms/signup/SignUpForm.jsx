import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";

const SignUpForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   const handleSignup =async (e) => {
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
      alert('User signed up successfully');
    } catch (error) {
      console.error(error);
      alert('Sign up failed');
    }
     console.log("Signing up...");
   };
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            id="username"
            name="username"
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button color="primary" onClick={handleSignup}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUpForm;
