import React from "react";
import PropTypes from "prop-types";
//import sidebar and header

const Template = ({ children }) => <div>{children}</div>;

Template.propTypes = {
  children: PropTypes.element.isRequired
};

export default Template;
