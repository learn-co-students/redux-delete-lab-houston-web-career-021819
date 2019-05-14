import React, { Component } from "react";
import BandInput from "./BandInput";
import Band from "./Band";

import { connect } from "react-redux";

class BandsContainer extends Component {
  renderBands = () => {
    return this.props.bands.map(band => {
      return (
        <Band band={band} key={band.id} deleteBand={this.props.deleteBand} />
      );
    });
  };

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>{this.renderBands()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ bands }) => ({ bands });

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: bandID => dispatch({ type: "DELETE_BAND", id: bandID })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BandsContainer);
