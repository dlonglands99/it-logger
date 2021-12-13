import React from "react";
import PropTypes from "prop-types";

const TechItem = ({ tech }) => {
  return (
    <li className="collection-item">
      <div>
        <a className="secondary-content" href="#!">
          <i className="material-icons grey-text">delete</i>
        </a>
        <div>ID: {tech.id}</div>
        <div>First Name: {tech.firstName}</div>
        <div>Last Name: {tech.lastName}</div>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;
