import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setZipCode} from '../redux/actions/index.actions';
import Home from '../components/ZipCode/ZipCode.component';

class ZipCode extends Component {

  static navigationOptions = {
    tabBarVisible: false
  };

  render () {
    const {setZipCode, zipCode} = this.props;
    return (
      <Home navigation={this.props.navigation} setZipCode={setZipCode} zipCode={zipCode} onAboutPress={this.props.onAboutPress}/>
    );
  }
 }

ZipCode.propTypes = {
  setTitle: PropTypes.func,
  title: PropTypes.string,
  navigation: PropTypes.object,
  onAboutPress: PropTypes.func
};

const mapStateToProps = (state) => ({
  zipCode: state.content.zipCode,
});

const mapDispatchToProps = (dispatch) => ({
  setZipCode: (zipCode) => dispatch(setZipCode(zipCode)),


});

export default connect(mapStateToProps, mapDispatchToProps)(ZipCode);
