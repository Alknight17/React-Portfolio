import React from "react";

function Header({ setPage }) {
  return (
    <section>
        <h1>Alex </h1>
      <ul>
        <li onClick={() => setPage("About Me")}>About Me</li>
        <li onClick={() => setPage("Contact")}>Contact</li>
        <li onClick={() => setPage("Portfolio")}>Portfolio</li>
        <li onClick={() => setPage("Resume")}>Resume</li>
      </ul>
    </section>
  );
}

export default Header;
