import React, {Component} from 'react';
import styles from './Gig.styles.js';
import translate from '../../utils/language.utils';
import Touchable from 'react-native-platform-touchable';
import {NativeModules, Text, View, ScrollView} from 'react-native';
import {Tile, List, ListItem, Button} from 'react-native-elements';
import {me} from '../../config/data/data.js';

class AboutApp extends Component {

  static navigationOptions = {
    animationEnabled: false
  };


  render () {
    const {gig, x} = this.props;
    return (
//      <View style={styles.container}>
//        <Text>{translate('ACTIVE_activeGig')}</Text>
//        <Text>{translate('HOME_categoryTitle') + ':' +  me.x}</Text>
//        <Text>{translate('HOME_zipCodeTitle') + ':' +  me.zipCode}</Text>
//      </View>
      <View>
        <Tile
          imageSrc={{uri: 'https://www.nationalgeographic.com/content/dam/animals/pictures/mammals/b/beaver/beaver.adapt.1190.1.JPG'}}
          featured
          title={`${me.name.first.toUpperCase()} ${me.name.last.toUpperCase()}`}
          caption={me.email}
        />

        <List>
          <ListItem
            title='Title'
            rightTitle={gig.title}
            hideChevron
          />
          <ListItem
            title='Category'
            rightTitle={gig.category}
            hideChevron
          />

          <ListItem
            title='ZipCode'
            rightTitle={gig.zipCode}
            hideChevron
          />
        </List>

        <Text>{gig.text}</Text>



      </View>


    );
  }
}

AboutApp.defaultProps = {
  ...me
};
AboutApp.propTypes = {
};

export default AboutApp;
