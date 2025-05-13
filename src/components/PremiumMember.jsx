import React from "react";


const PremiumMessage = ({isPremiumUser}) => {
  return (
    <p>
      {isPremiumUser
        ? "Thank you for being a premium member!"
        : "Upgrade to premium to enjoy exclusive features!"}
    </p>
  );
};

export default PremiumMessage;    