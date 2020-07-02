import React from "react";
import "../style/footer.css";

function Footer() {
  function handleButtonPress() {
    console.log("work");
    window.scrollTo(0, 0);
  }
  return (
    <>
      <div className="footer-wrapper">
        <button onClick={handleButtonPress}>Back to Top</button>
      </div>
    </>
  );
}

export default Footer;
