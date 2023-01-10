import 'react-native-gesture-handler'
import React from 'react'
import { NativeBaseProvider, Box, Button } from "native-base";
import { customTheme } from './theme/customTheme'
import AuthNavigation from './navigators/AuthNavigation'
import MainNavigation from './navigators/MainNavigation'

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

const App = () => (
  <NativeBaseProvider theme={customTheme} config={config}>
    {/* <AuthNavigation /> */}
    <MainNavigation />
  </NativeBaseProvider>
)

export default App
