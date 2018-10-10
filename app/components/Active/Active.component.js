import React, {Component} from 'react';
import styles from './Active.styles.js';
import translate from '../../utils/language.utils';
import Touchable from 'react-native-platform-touchable';
import {NativeModules, Text, View, ScrollView, FlatList} from 'react-native';
import {user} from '../../config/data/data.js';
import {Tile, List, ListItem, Button} from 'react-native-elements';

class AboutApp extends Component {

  static navigationOptions = {
    animationEnabled: false
  };

  enterGig = (gigProfile) => {
    this.props.navigation.navigate('gigScreen', {gigProfile: gigProfile});
  };

  render () {
    const {zipCode, x, gigArray} = this.props;

    return (

      <ScrollView>

        <Tile
        imageSrc={{uri: 'https://www.nationalgeographic.com/content/dam/animals/pictures/mammals/b/beaver/beaver.adapt.1190.1.JPG'}}
        featured
        title={'Active Gigs'}
        caption={'List of Active Gigs'}
        />

        <List containerStyle={{marginBottom: 20}}>
          {
            gigArray.map(
              (l) => {
                if (l.category !== undefined) {
                  return  <ListItem
                    roundAvatar
                    avatar={{uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/American_Beaver.jpg'}}
                    key={l._id}
                    title={l.title}
                    onPress={() => this.enterGig(l)}
                  />;
                }

              }
            )
          }
        </List>

      </ScrollView>
    );
  }
}

AboutApp.defaultProps = {
};
AboutApp.propTypes = {
};

export default AboutApp;
