import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from './src/screens/Loginscreen';
import Signupscreen from './src/screens/Signupscreen';
import Otpscreen from './src/screens/Otpscreen';
import Verifyscreen from './src/screens/Verifyscreen';
import HomeScreen from './HomeScreen';
import CardScreen1 from './src/screens/CardScreen1';
import AccountScreen from './AccountScreen';
import OtherAccountsScreens from './src/screens/OtherAccountsScreens';
import PermitScreen from './src/screens/PermitScreen';
import IFTAScreen from './src/screens/IFTAScreen';
import ExpenseScreen from './src/screens/ExpenseScreen';
import ElectronicLogScreen from './src/screens/ElectronicLogScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Login" component={Loginscreen} />
        <Stack.Screen name="Signup" component={Signupscreen} />
        <Stack.Screen name="OTP" component={Otpscreen} />
        <Stack.Screen name="verify" component={Verifyscreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="company" component={CardScreen1} />
        <Stack.Screen name="Accounts" component={AccountScreen}  />
        <Stack.Screen name="OtherInfo" component={OtherAccountsScreens}  />
        <Stack.Screen name="Permit" component={PermitScreen}  />
        <Stack.Screen name="IFTA" component={IFTAScreen}  />
        <Stack.Screen name="Expense" component={ExpenseScreen}  />
        <Stack.Screen name="ElectronicLog" component={ElectronicLogScreen}  />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})