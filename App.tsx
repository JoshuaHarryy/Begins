import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
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
import LoginProvider, { useLogin } from './src/context/LoginProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Settings } from 'react-native-fbsdk-next';
import SplashScreen from './src/screens/SplashScreen';
import { store } from './src/Redux/storeRedux' // Import the Redux store
import {Provider, useSelector, useDispatch } from 'react-redux';
import { checkToken } from './src/Redux/authSlice';
import { RootState, AppDispatch } from './src/redux/store';


Settings.setAppID('7935311009913194');
Settings.initializeSDK();

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName={'SplashScreen'} screenOptions={{ headerShown: false }}>
    <Stack.Screen name="splace" component={SplashScreen} />
    <Stack.Screen name="Login" component={Loginscreen} />
    <Stack.Screen name="Signup" component={Signupscreen} />
    <Stack.Screen name="OTP" component={Otpscreen} />
    <Stack.Screen name="Verify" component={Verifyscreen} />

  </Stack.Navigator>
);

const AppStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Company" component={CardScreen1} />
    <Stack.Screen name="Accounts" component={AccountScreen} />
    <Stack.Screen name="OtherInfo" component={OtherAccountsScreens} />
    <Stack.Screen name="Permit" component={PermitScreen} />
    <Stack.Screen name="IFTA" component={IFTAScreen} />
    <Stack.Screen name="Expense" component={ExpenseScreen} />
    <Stack.Screen name="ElectronicLog" component={ElectronicLogScreen} />
  </Stack.Navigator>
);

const MainApp = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Access the token from Redux to determine if the user is logged in
  const token = useSelector((state: RootState) => state.auth.token);

  // Check if token exists in AsyncStorage on app load
  useEffect(() => {
    dispatch(checkToken());
  }, [dispatch]);

  return (
    <NavigationContainer>
      {token ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

const App = () => (
  // Provide the Redux store to the app
  <Provider store={store}>
    <MainApp />
  </Provider>
);

export default App;

const styles = StyleSheet.create({});