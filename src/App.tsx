import 'react-native-gesture-handler'
import React from 'react'
import { NativeBaseProvider, Box, Button } from "native-base";
import { customTheme } from './theme/customTheme'
import AuthNavigation from './navigators/AuthNavigation'
import MainNavigation from './navigators/MainNavigation'
const App = () => (
  <NativeBaseProvider theme={customTheme}>
    {/* <AuthNavigation /> */}
    <MainNavigation />
  </NativeBaseProvider>
)

export default App
