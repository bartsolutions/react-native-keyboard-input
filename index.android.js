import KeyboardAppScreen from './demo/demoScreen';
import DemoRootScreen from './demo/demoRoot';

import {Navigation} from 'react-native-navigation';

Navigation.registerComponent('screens.star', () => KeyboardAppScreen);
Navigation.registerComponent('screens.settings', () => DemoRootScreen);
Navigation.registerComponent('screens.innerScreen', () => KeyboardAppScreen);

Navigation.setRoot({
  root: {
    bottomTabs: {
      children: [{
        stack: {
          children: [{
            component: {
              name: 'screens.star',
              passProps: {
                message: 'On the main tab, the keyboard input is in the root screen!',
              },
            },
          }],
          options: {
            bottomTab: {
              text: 'Main Tab',
              icon: require('./demo/res/star.png'),
            },
            topBar: {
              title: {
                text: 'Main Tab',
              },
            },
          },
        },
      },
      {
        stack: {
          children: [{
            component: {
              name: 'screens.settings',
              passProps: {
                message: 'Secondary Tab',
              },
            },
          }],
          options: {
            bottomTab: {
              text: 'Second Tab',
              icon: require('./demo/res/settings.png'),
            },
            topBar: {
              title: {
                text: 'Second Tab',
              },
            },
          },
        },
      }],
    },
  },
});
