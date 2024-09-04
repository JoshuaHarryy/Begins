import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions, Alert, ActivityIndicator } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { moderateScale, moderateVerticalScale, verticalScale, scale } from 'react-native-size-matters';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import useOrientation from '../Hooks/useOrientation';
import auth from '@react-native-firebase/auth';
import { useState } from 'react';
import { useLogin } from '../context/LoginProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';


const Loginscreen = ({ navigation }) => {
const {login} = useLogin()
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('')

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleSignIn = () => {

   
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
    setLoading(true);
    
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        Alert.alert("Login In successful!")
        console.log(userCredentials.user.email);
        login()
        // navigation.replace('AppStack');
       
      })
      .catch(error => {
        setLoading(false);
        Alert.alert("Email & password are incorrect")
        console.log(error)
        setError(error.message);
        
      });
      
  };
  
  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const orientation = useOrientation();
  return (

    <ScrollView contentContainerStyle={styles.container}>

      <View>
        <View style={orientation === 'landscape' ? styles.imageContainerLandscape : styles.imageContainerPortrait}>
          <Image source={require("../screens/Assets/HeaderRoad.png")} style={orientation === 'landscape' ? styles.imageTopLandscape : styles.imageTopPortrait} />
        </View>
        <View style={orientation === 'landscape' ? styles.HelloLandscape : styles.helloPortrait}>
          <Text style={styles.helloText}>Welcome back!</Text>
        </View>
        <View style={styles.inputView}>
          <View style={styles.inputContainer}>
            <AntDesign name={"mail"} size={24} color={"#757575"} style={styles.inputIcon} />
            <TextInput style={styles.Textinput}
              value={email}
              onChangeText={value => setEmail(value)}
              placeholder='Email Address'
              placeholderTextColor={'#757575'} />
          </View>
          <View style={styles.inputContainer2}>
            <Fontisto name={"locked"} size={24} color={"#757575"} style={styles.inputIcon} />
            <TextInput style={styles.Textinput}
              value={password}
              onChangeText={value => setPassword(value)}
              placeholder='Password'
              secureTextEntry={secureTextEntry}
              placeholderTextColor={'#757575'} />
            {/* <Feather name={"eye-off"} size={24} color={"#757575"} style={styles.inputIcon2} /> */}
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Feather
                name={secureTextEntry ? 'eye-off' : 'eye'}
                size={24}
                color="gray"
                style={styles.inputIcon2}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={orientation === 'landscape' ? styles.ForgetPassLandscape : styles.ForgetPassPortrait}>Forgot Password?</Text>
        </TouchableOpacity>

{loading? (
  <ActivityIndicator size="large" color="#00A170" style={styles.loading} />
): (
        <TouchableOpacity onPress={handleSignIn}>
          <View style={styles.LoginView}>
            <View style={styles.logincontainer}>
              <Text style={styles.loginText}>Log In</Text>
            </View>
          </View>
        </TouchableOpacity>
        )}

        <View style={styles.connectView}>
          <Text style={styles.connect}>Or connect via</Text>
        </View>

        <SafeAreaView style={styles.twoboxes}>
          <TouchableOpacity style={styles.googlebox}>
            <View >
              <AntDesign name={"google"} size={24} color={"#757575"} style={styles.GoogleIcon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Facebookbox}>
            <View >
              <AntDesign name={"facebook-square"} size={24} color={"#757575"} style={styles.facebookIcon} />
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </View>



      <View style={orientation === 'landscape' ? styles.FooterContainerLandscape : styles.FooterContainerPortrait}>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.baseText}>
            <Text style={styles.FirstFooterText}>Don’t have an account? </Text>
            <Text style={styles.secondFooterText}> Register</Text>
          </Text>
        </TouchableOpacity>
      </View>

    </ScrollView>

  )
}

export default Loginscreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  imageContainerLandscape: {
    height: verticalScale(50),
    marginTop: verticalScale(1),
    flexDirection: 'row',
  },
  imageContainerPortrait: {
    height: verticalScale(50),
    marginTop: verticalScale(10),
    flexDirection: 'row',
  },
  imageTopLandscape: {
    width: '100%',
    height: verticalScale(200),
  },
  imageTopPortrait: {
    width: '100%',
    height: verticalScale(120)
  },
  imageLine: {
    width: 46.53,
  },
  HelloLandscape: {
    alignItems: 'center',
    marginTop: 170,
    marginBottom: verticalScale(20),
  },
  helloPortrait: {
    paddingHorizontal: moderateScale(35),
    marginTop: 115,
  },
  helloText: {
    fontSize: scale(25),
    fontWeight: 'bold',
    color: '#00A170'
  },

  inputView: {
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    borderRadius: 20,
    width: '80%',
    height: 58,
    elevation: 5,
    marginVertical: 12,
    alignItems: 'center',
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#757575',

  },
  inputIcon: {
    marginLeft: 20,
    marginRight: 10,
  },
  inputIcon2: {
    color: "green",
    marginRight: 20,
  },

  Textinput: {
    flex: 1,
    fontSize: 16,
    color: '#757575'
  },
  inputContainer2: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    borderRadius: 20,
    width: "80%",
    height: 58,
    elevation: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#757575',
  },
  ForgetPassLandscape: {
    color: '#00A170',
    fontSize: 16,
    marginHorizontal: moderateScale(80),
    marginTop: verticalScale(30),
  },

  ForgetPassPortrait: {
    color: '#00A170',
    fontSize: 16,
    marginHorizontal: moderateScale(35),
    marginTop: verticalScale(30),
  },

  LoginView: {
    alignItems: 'center',
  },
  logincontainer: {
    width: "80%",
    height: 58,
    backgroundColor: '#007959',
    borderRadius: 20,
    marginTop: verticalScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',


  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 20,

  },
  connectView: {
    alignItems: 'center',
  },
  connect: {
    fontSize: 16,
    color: '#00A170',

    paddingTop: 30

  },
  twoboxes: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-evenly',
  },

  googlebox: {
    color: '#FFFFFF',
    width: "25%",
    height: 50,
    borderWidth: 1,
    borderColor: '#00A170',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Facebookbox: {
    color: '#FFFFFF',
    width: "25%",
    height: 50,
    borderWidth: 1,
    borderColor: '#00A170',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  FooterContainerLandscape: {
    width: "100%",
    height: 59,
    backgroundColor: '#E8F3F2',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    marginTop: verticalScale(50)
  },
  FooterContainerPortrait: {
    width: "100%",
    height: 59,
    backgroundColor: '#E8F3F2',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  baseText: {
    fontSize: 16
  },
  FirstFooterText: {
    color: '#606060',
  },
  secondFooterText: {
    color: '#00A170',

  },
  loading:{
    marginVertical: 20,
    flex : 1,
  },
})