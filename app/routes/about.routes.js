import {TabNavigator} from 'react-navigation';
import AboutApp from '../components/About/AboutApp.component';
import AboutDevs from '../components/About/AboutDevs.component';
import {aboutRoutesConfig} from '../config/routes.config';
import {translateHeaderText} from '../utils/language.utils';

export default TabNavigator({
  aboutApp: {
    screen: AboutApp,
    navigationOptions: translateHeaderText('ABOUT_theApp')
  },
  aboutDevs: {
    screen: AboutDevs,
    navigationOptions: translateHeaderText('ABOUT_theCreators')
  },
  aboutDevs1: {
    screen: AboutDevs,
    navigationOptions: translateHeaderText('1')
  },
  aboutDevs2: {
    screen: AboutDevs,
    navigationOptions: translateHeaderText('2')
  },
  aboutDevs3: {
    screen: AboutDevs,
    navigationOptions: translateHeaderText('3')
  },
  aboutDevs4: {
    screen: AboutDevs,
    navigationOptions: translateHeaderText('4')
  }
}, aboutRoutesConfig);
