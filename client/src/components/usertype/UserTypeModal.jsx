import React, { useState } from "react";
import axios from "axios";
import { Button } from "reactstrap";

const UserTypeComponent = () => {
  const handleUpdateUserType = (userType) => {
    axios
      .patch("http://localhost:5000/api/v1/user/type/:type", { userType })
      .then((response) => {
        console.log("User type updated successfully.");
        // Handle any further actions after successful update
      })
      .catch((error) => {
        console.error("Error updating user type:", error);
        // Handle any error cases
      });
  };

  return (
    <div>
      <p>Your registration was successful.</p>
      <Button color="primary" onClick={() => handleUpdateUserType("applicant")}>
        Find Jobs
      </Button>
      <Button color="success" onClick={() => handleUpdateUserType("recruiter")}>
        Hire Staff
      </Button>
    </div>
  );
};

export default UserTypeComponent;
