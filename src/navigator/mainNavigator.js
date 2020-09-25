import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen111155Navigator from '../features/BlankScreen111155/navigator';
import BlankScreen211154Navigator from '../features/BlankScreen211154/navigator';
import BlankScreen211144Navigator from '../features/BlankScreen211144/navigator';
import BlankScreen111139Navigator from '../features/BlankScreen111139/navigator';
import BlankScreen011138Navigator from '../features/BlankScreen011138/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen111155: { screen: BlankScreen111155Navigator },
BlankScreen211154: { screen: BlankScreen211154Navigator },
BlankScreen211144: { screen: BlankScreen211144Navigator },
BlankScreen111139: { screen: BlankScreen111139Navigator },
BlankScreen011138: { screen: BlankScreen011138Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
