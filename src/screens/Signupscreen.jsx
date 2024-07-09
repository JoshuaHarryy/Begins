import { Image, StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


const Signupscreen = () => {

  const navigation = useNavigation();

  const HandleLogin = () => {
    navigation.navigate("Login");

  }
  return (
    <View styles={styles.Headerconatiner}>
<ScrollView>
      <View>

        <View style={styles.Imagecontainer}>
          <Image source={require("../screens/Assets/HeaderRoad.png")} style={styles.imageTop} />
        </View>
        <View style={styles.Textcontainer}>
          <Text style={styles.CreateAcc}>Create account!</Text>
          <Text style={styles.RegisterText}>Register to get started.</Text>
        </View>
        <View style={styles.BoxesmainView}>
          <View style={styles.NameBox}>
            <FontAwesome name={"user-circle-o"} size={24} color={"#757575"} style={styles.IconUser} />
            <TextInput style={styles.TextName} placeholder='Name' placeholderTextColor={'#757575'} />
          </View>
          <View style={styles.EmailAddressBox}>
            <Entypo name={"mail"} size={24} color={"#757575"} style={styles.IconUser} />
            <TextInput style={styles.TextName} placeholder='Email Address' placeholderTextColor={'#757575'} />
          </View>
          <View style={styles.PasswordBox}>
            <Entypo name={"lock"} size={24} color={"#757575"} style={styles.IconUser} />
            <TextInput style={styles.TextName} placeholder='Password' secureTextEntry placeholderTextColor={'#757575'} />
          </View>
          <View style={styles.ConfirmPasswordBox}>
            <Entypo name={"lock"} size={24} color={"#757575"} style={styles.IconUser} />
            <TextInput style={styles.TextName} placeholder='ConfirmPassword' secureTextEntry placeholderTextColor={'#757575'} />
          </View>
        </View>
        <View style={styles.SignupView}>
          <View style={styles.Signupbutton}>
            <Text style={styles.signupText}>Sign up</Text>
          </View>
        </View>

        <View style={styles.connectText}>
          <Text style={styles.Connectvia}>Or connect via</Text>
        </View>

        <View style={styles.twoboxes}>
          <View style={styles.googlebox}>
            <AntDesign name={"google"} size={24} color={"#757575"} style={styles.GoogleIcon} />
          </View>
          <View style={styles.Facebookbox}>
            <AntDesign name={"facebook-square"} size={24} color={"#757575"} style={styles.facebookIcon} />
          </View>
        </View>
       
      </View>



      <View style={styles.FooterView}>
        <View style={styles.FooterContainer}>
          <Text style={styles.baseText}>
            <Text style={styles.FirstFooterText}>Already have an account?</Text>
            <TouchableOpacity onPress={HandleLogin}>
              <Text style={styles.secondFooterText}> Log in</Text>

            </TouchableOpacity>
          </Text>
        </View>
      </View>
      </ScrollView>
    </View>

  )
}

export default Signupscreen

const styles = StyleSheet.create({
  Headerconatiner: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'space-between',

  },
  Imagecontainer: {
    height: 50,
    marginTop: verticalScale(10),
  },
  imageTop: {
    width: '100%',
    height: verticalScale(120),
  },
  HeaderImage: {
    width: 450,
    height: 150,
  },
  Textcontainer: {
    marginHorizontal: 30,
    marginTop: 115,
  },
  CreateAcc: {
    fontSize: scale(26),
    fontWeight: 'bold',
    color: '#00A170',

  },
  RegisterText: {
    fontSize: scale(17),
    color: '#00A170',
  },

  BoxesmainView: {
    alignItems: 'center',
  },
  NameBox: {
    width: moderateScale(320),
    height: 60,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#757575',
    borderRadius: 20,

    marginTop: 30,
    flexDirection: "row",
    elevation: 4,

  },
  IconUser: {
    marginLeft: 25,
    marginRight: 10,
    marginTop: 18
  },
  TextName: {
    fontSize: 18
  },
  EmailAddressBox: {
    width: moderateScale(320),
    height: 60,
    borderWidth: 1,
    borderColor: '#757575',
    backgroundColor: '#F5F5F5',
    borderRadius: 20,

    marginTop: 5,
    flexDirection: "row",
    elevation: 4,
  },
  PasswordBox: {
    width: moderateScale(320),
    height: 60,
    borderWidth: 1,
    backgroundColor: '#F5F5F5',
    borderColor: '#757575',
    borderRadius: 20,

    marginTop: 5,
    flexDirection: "row",
    elevation: 4,
  },
  ConfirmPasswordBox: {
    width: moderateScale(320),
    height: 60,
    borderWidth: 1,
    borderColor: '#757575',
    backgroundColor: '#F5F5F5',
    borderRadius: 20,

    marginTop: 5,
    flexDirection: "row",
    elevation: 4,
  },
  SignupView: {
    alignItems: 'center',
  },
  Signupbutton: {
    width: 343,
    height: 58,
    elevation: 10,
    backgroundColor: '#007959',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  signupText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '400',


  },
  connectText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  Connectvia: {
    fontSize: 16,
    color: '#00A170',

  },
  twoboxes: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-evenly',
  },

  googlebox: {
    color: '#FFFFFF',
    width: 110,
    height: 50,
    borderWidth: 1,
    borderColor: '#00A170',
    borderRadius: 20,
    flexDirection: 'row',


  },
  Facebookbox: {
    color: '#FFFFFF',
    width: 110,
    height: 50,
    borderWidth: 1,
    borderColor: '#00A170',
    borderRadius: 20,

  },
  GoogleIcon: {
    marginHorizontal: 40,
    marginTop: 12,
  },
  facebookIcon: {
    marginHorizontal: 40,
    marginTop: 12,
  },
  FooterView: {

  },
  FooterContainer: {
    width: 412,
    height: 59,
    backgroundColor: '#E8F3F2',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    marginTop: verticalScale(45)
  },
  baseText: {
    fontSize: 16,

  },
  FirstFooterText: {
    color: '#606060',
  },
  secondFooterText: {
    color: '#00A170',

  },
})