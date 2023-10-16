import React from "react";
import PropTypes from "prop-types";

const CustomButton = ({
  border,
  backgroundColor,
  textColor,
  borderRadius,
  onClick,
  children,
}) => {
  const buttonStyle = {
    border,
    backgroundColor,
    color: textColor,
    borderRadius,
    padding: "10px 20px",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle} onClick={onClick} className="hover:scale-95 duration-300">
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  border: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  borderRadius: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

CustomButton.defaultProps = {
  border: "1px solid #000",
  backgroundColor: "#007bff",
  textColor: "#ffffff",
  borderRadius: "5px",
};

export default CustomButton;
