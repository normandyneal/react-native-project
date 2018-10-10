import React, {Component} from 'react';
import {View, Text, TextInput, KeyboardAvoidingView} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Home.component.style';
import Notes from '../Notes/Notes.component';
import Touchable from 'react-native-platform-touchable';
import noop from 'lodash/noop';
import translate from '../../utils/language.utils';
import {NavigationActions} from 'react-navigation';
import {Tile, List, ListItem, Button} from 'react-native-elements';

// Icon Usage
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../../assets/selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

class Home extends Component {


  render () {
    const {category, setCategory, setGigArray, setTitle, title, text, setText, currentLanguage, toggleLanguage, zipCode, setZipCode} = this.props;

    const two = () => {
      setGigArray({_id: Math.floor(Math.random() * 16777215), category: category, zipCode: zipCode, text: text, title: title});
      setTitle('');
      setZipCode('');
      setCategory('');
      setText('');
      this.props.navigation.pop(3);
      this.props.navigation.navigate('aboutApp');

    };



    return (

      <View style={styles.container}>



        <Tile
          imageSrc={{uri: 'https://www.nationalgeographic.com/content/dam/animals/pictures/mammals/b/beaver/beaver.adapt.1190.1.JPG'}}
          featured
          title={'Gig Summary'}
          caption={translate('HOME_zipCodeTitle') + ': ' + zipCode + '\n' + translate('HOME_categoryTitle') + ': ' + category  }
        />

        <Text style={styles.titleHeading}>{translate('HOME_title')}</Text>

        <TextInput style={styles.titleTextInput}
            onChangeText={setTitle} value={title} />

        <Text style={styles.textAreaTitle}>{translate('HOME_description')}  <Icon name='notepad' size={15}/></Text>

        <TextInput style={styles.textArea} multiline = {true}
          onChangeText={setText} value={text}/>

        <Touchable style={styles.aboutUsWrapper} onPress={two}>
          <Text style={styles.aboutUs}>{translate('SendGig')}</Text>
        </Touchable>


      </View>
    );
  }



}

Home.defaultProps = {
  onAboutPress: noop
};

Home.propTypes = {
  setTitle: PropTypes.func,
  onAboutPress: PropTypes.func,
  setText: PropTypes.func,
  toggleLanguage: PropTypes.func,
  title: PropTypes.string,
  currentLanguage: PropTypes.string,
  text: PropTypes.string,
  navigation: PropTypes.object
};

export default Home;
