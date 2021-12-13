import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const TechOptions = ({ tech: { techs } }) => {
  if (!techs || techs.length === 0) {
    return (
      <option value="" disabled>
        No technicians found
      </option>
    );
  }

  return techs.map((tech) => (
    <option value={`${tech.firstName} ${tech.lastName}`}>
      {tech.firstName + ' ' + tech.lastName}
    </option>
  ));
};

TechOptions.propTypes = {
    tech: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps)(TechOptions);
