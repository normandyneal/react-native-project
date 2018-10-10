import {StackNavigator, TabNavigator} from 'react-navigation';
// import AboutApp from '../components/About/AboutApp.component';

import {aboutRoutesConfig} from '../config/routes.config';
import {translateHeaderText} from '../utils/language.utils';

import HomePage from '../pages/Home.page';
import Category from '../pages/Category.page';
import ZipCode from '../pages/ZipCode.page';
import Active from '../pages/Active.page';
import Profile from '../pages/Profile.page';
import Gig from '../pages/Gig.page';

const Router = StackNavigator({
  category: {
    screen: Category,
    navigationOptions: translateHeaderText('HOME_gigDig')
  },
  zipCode: {
    screen: ZipCode,
    navigationOptions: translateHeaderText('HOME_gigDig')
  },
  home: {
    screen: HomePage,
    navigationOptions: translateHeaderText('HOME_gigDig')
  }

});

const GigStack = StackNavigator({
  aboutApp: {
    screen: Active,
    navigationOptions: translateHeaderText('HOME_active')
  },
  gigScreen: {
    screen: Gig,
    navigationOptions: translateHeaderText('HOME_gigDig')
  }
});




export default TabNavigator({
  aboutDevs1: {
    screen: Profile,
    navigationOptions: translateHeaderText('HOME_profile')
  },
  gigStack: {
    screen: GigStack
  },
  aboutDevs: {
    screen: Router,
    navigationOptions: translateHeaderText('HOME_create')
  }


}, aboutRoutesConfig);
