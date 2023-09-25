import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png"
          alt="Company Logo"
        />
      </div>
      <div className="dropdown">
        <button className="dropbtn">My Account</button>
        <div className="dropdown-content">
          <p>Link 1</p>
          <p>Link 2</p>
          <p>Link 3</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
