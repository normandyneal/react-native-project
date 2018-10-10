import React, {Component} from 'react';
import styles from './Profile.styles.js';
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
    const {zipCode, x} = this.props;
    return (
//      <View style={styles.container}>
//        <Text>{translate('ACTIVE_activeGig')}</Text>
//        <Text>{translate('HOME_categoryTitle') + ':' +  me.x}</Text>
//        <Text>{translate('HOME_zipCodeTitle') + ':' +  me.zipCode}</Text>
//      </View>
      <ScrollView>
        <Tile
          imageSrc={{uri: me.picture.large}}
          featured
          title={`${me.name.first.toUpperCase()} ${me.name.last.toUpperCase()}`}
          caption={me.email}
        />

        <List>
          <ListItem
            title='Email'
            rightTitle={me.email}
            hideChevron
          />
          <ListItem
            title='Phone'
            rightTitle={me.phone}
            hideChevron
          />
        </List>


        <List>
          <ListItem
            title='Username'
            rightTitle={me.login.username}
            hideChevron
          />
        </List>


        <List>
          <ListItem
            title='City'
            rightTitle={me.location.city}
            hideChevron
          />
        </List>

      </ScrollView>


    );
  }
}

AboutApp.defaultProps = {
  ...me
};
AboutApp.propTypes = {
};

export default AboutApp;
