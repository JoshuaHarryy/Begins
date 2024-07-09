import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { moderateScale, moderateVerticalScale, verticalScale, scale } from 'react-native-size-matters';

const Loginscreen = () => {

  const navigation = useNavigation();

  const Handleregister = () => {

    navigation.navigate("Signup");


  }
  return (

    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.ImageTopContainer}>
            <Image source={require("../screens/Assets/HeaderRoad.png")} style={styles.imageTop} />
          </View>
          <View style={styles.hello}>
            <Text style={styles.helloText}>Welcome back!</Text>
          </View>
          <View style={styles.inputView}>
            <View style={styles.inputContainer}>
              <AntDesign name={"mail"} size={24} color={"#757575"} style={styles.inputIcon} />
              <TextInput style={styles.Textinput} placeholder='Email Address' placeholderTextColor={'#757575'} />
            </View>
            <View style={styles.inputContainer2}>
              <Fontisto name={"locked"} size={24} color={"#757575"} style={styles.inputIcon} />
              <TextInput style={styles.Textinput} placeholder='Password' secureTextEntry placeholderTextColor={'#757575'} />
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.ForgetPasswordtext}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('OTP')}>
            <View style={styles.LoginView}>
              <View style={styles.logincontainer}>
                <Text style={styles.loginText}>Log In</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.connectView}>
            <Text style={styles.connect}>Or connect via</Text>
          </View>

          <SafeAreaView style={styles.twoboxes}>
            <View style={styles.googlebox}>
              <AntDesign name={"google"} size={24} color={"#757575"} style={styles.GoogleIcon} />
            </View>
            <View style={styles.Facebookbox}>
              <AntDesign name={"facebook-square"} size={24} color={"#757575"} style={styles.facebookIcon} />
            </View>
          </SafeAreaView>
        </View>
        </ScrollView>
      

      <View style={styles.FooterContainer}>
        <TouchableOpacity onPress={Handleregister}>
          <Text style={styles.baseText}>
            <Text style={styles.FirstFooterText}>Don’t have an account? </Text>
            <Text style={styles.secondFooterText}> Register</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default Loginscreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'space-between',
  },
  ImageTopContainer: {
    height: verticalScale(50),
    marginTop: verticalScale(10),
    flexDirection: 'row',
  },
  imageTop: {
    width: '100%',
    height: verticalScale(120)
  },
  imageLine: {
    width: 46.53,
  },
  hello: {
    paddingHorizontal: moderateScale(35),
    fontSize: 20,
    marginTop: 115
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
  ForgetPasswordtext: {
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
    elevation: 2,
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
    width: "28%",
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
    width: "28%",
    height: 50,
    borderWidth: 1,
    borderColor: '#00A170',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  FooterContainer: {
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
})