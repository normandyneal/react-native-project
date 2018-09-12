import React, {Component} from 'react';
import Router from './routes';
import {connect} from 'react-redux';
import Proptypes from 'prop-types';


class App extends Component {
  render () {
    const {userPreferences} = this.props;
    return (
      <Router screenProps={userPreferences} />
    );
  }
}

App.propTypes = {
  dispatch: Proptypes.func,
  nav: Proptypes.object,
  userPreferences: Proptypes.object
};

const mapStateToProps = ({nav, userPreferences}) => ({
  nav,
  userPreferences
});

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
