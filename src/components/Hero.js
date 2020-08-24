import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

import logo from "../assets/logo.svg";

const Hero = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    if (error.error == 'unauthorized') {
      return <div>Oops... {error.message}</div>;
    }
  }
  
  return (
    <div className="text-center hero my-5">
      <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
      <h1 className="mb-4">Cruise0</h1>

      <p className="lead">    
        Let's travel the world!
      </p>
    </div>
  );
};

export default Hero;
