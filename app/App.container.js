import React, {Component} from 'react';
import {connect} from 'react-redux';
import Proptypes from 'prop-types';
import AboutRoutes from './routes/about.routes.js';


class App extends Component {
  render () {
    const {userPreferences} = this.props;
    return (
      <AboutRoutes screenProps={userPreferences} />
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
