import React from "react";
import "./MembershipBadge.css";
import iacpLogo from "../assets/iacp-logo.png"; // Make sure this path matches your file structure

const MembershipBadge = () => {
  return (
    <div className="iacp-membership">
      <img
        src={iacpLogo}
        alt="International Association of Canine Professionals Member"
        className="iacp-logo"
      />
      <p className="iacp-text">
        Associate Member of the <strong>International Association of Canine Professionals (IACP)</strong>. 
        Committed to ethical training and continuing education.
      </p>
    </div>
  );
};

export default MembershipBadge;
