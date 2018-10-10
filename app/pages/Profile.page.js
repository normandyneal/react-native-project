import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AboutApp from '../components/Profile/Profile.component';




class Profile extends Component {

  render () {
    const {zipCode, title} = this.props;
    return (
      <AboutApp x={title} zipCode={zipCode}/>
    );
  }
 }

Profile.propTypes = {
  zipCode: PropTypes.string,
  title: PropTypes.string,

};

const mapStateToProps = (state) => ({
  zipCode: state.content.zipCode,
  title: state.content.title
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
