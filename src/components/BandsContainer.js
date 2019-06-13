import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.props.bands.map(band => <Band band = {band.name} id = {band.id} delete = {this.props.deleteBand}/>)}
      </div>
    )
  }
}

// const mapStateToProps = ({ bands }) => ({ bands })
const mapStateToProps = state =>{
  return {bands: state.bands}
} 
const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: bandId => dispatch({type: 'DELETE_BAND', bandId:bandId})
})
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
