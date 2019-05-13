import React, { Component } from 'react'
import BandInput from './BandInput'
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.props.bands.map(b => <Band name={b} deleteBand={this.props.deleteBand} />)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: name => dispatch({ type: "DELETE_BAND", name })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
