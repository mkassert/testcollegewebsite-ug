import React from "react";

const Icons = () => {
  const iconStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#25D366",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "bold",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
  };
  const textDivStyle = {
    position: "fixed",
    top: "60%",
    right: "-2.5%",
    transform: "translateY(-50%) rotate(-90deg)",
    backgroundColor: "yellow",
    color: "#333",
    padding: "10px",
    borderRadius: "5px",
    margin: "0px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  };
  const textDivStyle2 = {
    position: "fixed",
    top: "80%",
    right: "-2.5%",
    transform: "translateY(-50%) rotate(-90deg)",
    backgroundColor: "yellow",
    color: "#333",
    padding: "10px",
    borderRadius: "5px",
    margin: "0px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const handleClick = () => {
    // handle WhatsApp icon click event
    console.log("WhatsApp icon clicked!");
  };

  return (
    <>
      <div style={iconStyle} onClick={handleClick}>
        <i class="fa fa-whatsapp"></i>
      </div>
      <div className="d-none d-lg-block fs-bolder" style={textDivStyle}>
        <p>ENQUIRY FORM</p>
      </div>
      <div className="d-none d-md-block fs-bolder" style={textDivStyle2}>
        <p>NEWS LETTER</p>
      </div>
    </>
  );
};

export default Icons;
