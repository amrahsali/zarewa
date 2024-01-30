import React from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="header-text" >
          <h1>Zarewa Aluminium and Plastic ltd.</h1>
        </div>
        <div className="nav-links">
          <a href="/" activeStyle>
            Dashborad
          </a>
          <a href="/transaction" activeStyle>
            Transaction
          </a>
          <a href="/production" activeStyle>
            Production
          </a>
          <a href="/accounting" activeStyle>
            accounting
          </a>
          <a href="/report" activeStyle>
            Report
          </a>
          <a href="/management" activeStyle>
            Management
          </a>
          <a href="/hr" activeStyle>
            HR
          </a>
          <a href="/settings" activeStyle>
            settings
          </a>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
