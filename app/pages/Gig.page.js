import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AboutApp from '../components/Gig/Gig.component';


class Gig extends Component {

  static navigationOptions = {
    tabBarVisible: false
  };

  render () {
    const {zipCode, title} = this.props;
    return (
      <AboutApp x={title} gig={this.props.navigation.getParam('gigProfile', 'NO-GIG')}/>
    );
  }
 }

Gig.propTypes = {
  zipCode: PropTypes.string,
  title: PropTypes.string,

};

const mapStateToProps = (state) => ({
  zipCode: state.content.zipCode,
  title: state.content.title
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Gig);
