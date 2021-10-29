import React from "react";
import PropTypes from "prop-types";

function Button({ children, backgroundColor }) {
  return <button style={{ backgroundColor }}>{children}</button>;
}

export default Button;
