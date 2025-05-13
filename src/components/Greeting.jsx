import React from "react";

const Greeting = ({ userName }) => {
  const today = new Date().toLocaleDateString();
  return( 
  <div>
        <h1>Hello, {userName}!</h1>
        <p>Todays Date: {today}</p>
    </div>
  );
};

export default Greeting;