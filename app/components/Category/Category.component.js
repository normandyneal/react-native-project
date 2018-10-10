import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Category.component.style';
import Touchable from 'react-native-platform-touchable';
import noop from 'lodash/noop';
import translate from '../../utils/language.utils';
import {Tile, List, ListItem, Button} from 'react-native-elements';

class Home extends Component {

  render () {
    const {setCategory, category} = this.props;

    return (
      <View style={styles.container}>
        {/* <Text style={styles.titleHeading}>{translate('What category is your gig?')}</Text>*/}

        <Tile
          imageSrc={{uri: 'https://www.nationalgeographic.com/content/dam/animals/pictures/mammals/b/beaver/beaver.adapt.1190.1.JPG'}}
          featured
          title={'Create a Gig'}
          caption={'What category is your gig?'}
        />


        <TextInput style={styles.titleTextInput}
            onChangeText={setCategory} value={category} />

        <Touchable style={styles.aboutUsWrapper} onPress={() => this.props.navigation.navigate('zipCode')}>
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
  category: PropTypes.string,
  setCategory: PropTypes.func,
  navigation: PropTypes.object
};

export default Home;
