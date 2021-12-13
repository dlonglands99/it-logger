import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';

const TechItem = ({ tech, deleteTech }) => {
  return (
    <li className="collection-item">
      <div>
        <a className="secondary-content" href="#!" onClick={() => deleteTech(tech.id)}>
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

export default connect(null, { deleteTech })(TechItem);
