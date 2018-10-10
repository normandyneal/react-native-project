import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {toggleLanguage} from '../redux/thunks/index.thunks';
import {setCategory, setTitle, setText, addNote, setZipCode, setGigArray} from '../redux/actions/index.actions';
import Home from '../components/Home/Home.component';


class HomePage extends Component {

  static navigationOptions = {
    tabBarVisible: false
  };

  render () {
    const {category, setCategory, setGigArray, gigArray, setTitle, setText, title, text, saveNote, notes, currentLanguage, toggleLanguage, zipCode, setZipCode} = this.props;
    return (
      <Home category={category} setCategory={setCategory} setGigArray={setGigArray} gigArray={gigArray} navigation={this.props.navigation} zipCode={zipCode} setTitle={setTitle} setZipCode={setZipCode} toggleLanguage={toggleLanguage} currentLanguage={currentLanguage} saveNote={saveNote} notes={notes} setText={setText} title={title} text={text} onAboutPress={this.props.onAboutPress}/>
    );
  }
 }

HomePage.propTypes = {
  setTitle: PropTypes.func,
  setText: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string,
  navigation: PropTypes.object,
  currentLanguage: PropTypes.string,
  toggleLanguage: PropTypes.func,
  onAboutPress: PropTypes.func,
  saveNote: PropTypes.func,
  notes: PropTypes.array
};

const mapStateToProps = (state) => ({
  category: state.content.category,
  title: state.content.title,
  text: state.content.text,
  notes: state.notes,
  currentLanguage: state.userPreferences.language,
  zipCode: state.content.zipCode
});

const mapDispatchToProps = (dispatch) => ({
  setGigArray: (gigArray) => dispatch(setGigArray(gigArray)),
  setCategory: (category) => dispatch(setCategory(category)),

  setZipCode: (zipCode) => dispatch(setZipCode(zipCode)),
  setTitle: (title) => dispatch(setTitle(title)),
  setText: (text) => dispatch(setText(text)),
  saveNote: (note) => {
    dispatch(addNote(note));
    dispatch(setTitle(''));
    dispatch(setText(''));
  },
  toggleLanguage: () => dispatch(toggleLanguage()),

});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
