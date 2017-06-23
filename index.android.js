import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

/*import elastic_euclid from './src/screens/Splash'*/

import Signup from './src/screens/SignupPage';
import Login from './src/screens/LoginMain';
import ForgotPasswordPage from './src/screens/ForgotPassword';
import AdditionalDetails from './src/screens/AdditionalDetails';

import ProfilePage from './src/screens/ProfilePage';
import ProfileEditPage from './src/screens/ProfileEditPage';
import Tab from './src/screens/Tab';

AppRegistry.registerComponent('elastic_euclid', () => Tab);