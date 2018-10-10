import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setCategory} from '../redux/actions/index.actions';
import Home from '../components/Category/Category.component';

class Category extends Component {

  static navigationOptions = {
    tabBarVisible: false
  };

  render () {
    const {setCategory, category} = this.props;
    return (
      <Home navigation={this.props.navigation} setCategory={setCategory} category={category} onAboutPress={this.props.onAboutPress}/>
    );
  }
 }

Category.propTypes = {
  setCategory: PropTypes.func,
  category: PropTypes.string,
  navigation: PropTypes.object,
  onAboutPress: PropTypes.func,
};

const mapStateToProps = (state) => ({
  category: state.content.category,
});

const mapDispatchToProps = (dispatch) => ({
  setCategory: (category) => dispatch(setCategory(category))

});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
