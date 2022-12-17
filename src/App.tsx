import 'react-native-gesture-handler'
import React from 'react'
import { NativeBaseProvider, Box, Button } from "native-base";
import { customTheme } from './theme/customTheme'
import AuthNavigation from './navigators/AuthNavigation'

const App = () => (
  <NativeBaseProvider theme={customTheme}>
    <AuthNavigation />
  </NativeBaseProvider>
)

export default App
