import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import styles from './ZipCode.component.style';
import Touchable from 'react-native-platform-touchable';
import noop from 'lodash/noop';
import translate from '../../utils/language.utils';
import {Tile, List, ListItem, Button} from 'react-native-elements';

class Home extends Component {

  render () {
    const {setZipCode, zipCode} = this.props;

    return (

      <View style={styles.container}>
        {/*  <Text style={styles.titleHeading}>{translate('What ZipCode is your gig?')}</Text> */}

        <Tile
          imageSrc={{uri: 'https://www.nationalgeographic.com/content/dam/animals/pictures/mammals/b/beaver/beaver.adapt.1190.1.JPG'}}
          featured
          title={'Create a Gig'}
          caption={'What ZipCode is your gig?'}
        />

        <TextInput style={styles.titleTextInput}
            onChangeText={setZipCode} value={zipCode} />

        <Touchable style={styles.aboutUsWrapper} onPress={() => this.props.navigation.navigate('home')}>
          <Text style={styles.aboutUs}>{translate('Next')}</Text>
        </Touchable>
      </View>
    );
  }
}

Home.defaultProps = {
  onAboutPress: noop
};

Home.propTypes = {
  title: PropTypes.string,
  setTitle: PropTypes.func,
  navigation: PropTypes.object
};

export default Home;
