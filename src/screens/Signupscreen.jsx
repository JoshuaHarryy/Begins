import { Image, StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import useOrientation from '../Hooks/useOrientation';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Please enter your name'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email address'),
  password: Yup.string()
    .min(6)
    .required('Please enter your password')
    .required(
      'Must contain minimum 6 characters'
    )

});

const Signupscreen = () => {
  const orientation = useOrientation();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState()

  const handleLogin = async () => {
    try {
      if (email.length > 0 && password.length > 0 && name.length > 0) {
        const isUserCreated = await auth().createUserWithEmailAndPassword(

          email,
          password
        )
          .then(async (userCredentials) => {
            userData = {
              name: name,
              email: userCredentials.user.email,
              uid: userCredentials.user.uid,
              address: '',
              phone: '',
              mcNumber: '',
              dotNumber: '',
              supportNumber: '',
              createdAt: firestore.FieldValue.serverTimestamp(),
              updatedAt: firestore.FieldValue.serverTimestamp(),
            }
            await firestore().collection("Users").doc(userCredentials.user.uid)
              .set(userData);
            console.log(userCredentials);
            Alert.alert("Signup successful!")
          })
          .catch((error) => {
            console.log(error)
          })



        await auth().currentUser.sendEmailVerification();
        await auth().signOut();
        Alert('please Verify your Email Check Out Link In Your Inbox');
        navigation.navigate('Login');
        console.log(isUserCreated);
      } else {
        Alert.alert('please Enter All data')
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error', error.message);
    }
  }
  const HandleLogin = () => {
    navigation.navigate("Login");

  }
  return (
    <Formik initialValues={{
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }}
      validationSchema={SignupSchema}
    >

      {({ values, errors, touched, handleChange, handleSubmit, setFieldTouched }) => (



        <ScrollView contentContainerStyle={styles.container}>
          <View>

            <View style={orientation === 'landscape' ? styles.imageContainerLandscape : styles.imageContainerPortrait}>
              <Image source={require("../screens/Assets/HeaderRoad.png")} style={orientation === 'landscape' ? styles.imageTopLandscape : styles.imageTopPortrait} />
            </View>
            <View style={orientation === 'landscape' ? styles.CreateAccLandscape : styles.CreateAccPortrait}>
              <Text style={styles.CreateAcc}>Create account!</Text>
              <Text style={styles.RegisterText}>Register to get started.</Text>
            </View>


            <View style={styles.BoxesmainView}>
              <View style={styles.NameBox}>
                <FontAwesome name={"user-circle-o"} size={24} color={"#757575"} style={styles.IconUser} />
                <TextInput style={styles.TextName}
                  value={values.name}
                  onChangeText={value => {
                    setName(value);
                    handleChange('name')(value);
                  }}
                  onBlur={() => setFieldTouched('name')}
                  placeholder='Name'
                  placeholderTextColor={'#757575'} />
              </View>
              {touched.name && errors.name && (
                <Text style={styles.errorText}>{errors.name} </Text>
              )}
            </View>


            <View style={styles.BoxesmainView}>
              <View style={styles.EmailAddressBox}>
                <Entypo name={"mail"} size={24} color={"#757575"} style={styles.IconUser} />
                <TextInput style={styles.TextName}
                  value={values.email}
                  onChangeText={value => {
                    setEmail(value);
                    handleChange('email')(value);
                  }}
                  onBlur={() => setFieldTouched('email')}
                  placeholder='Email Address'
                  placeholderTextColor={'#757575'} />
              </View>

              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email} </Text>
              )}
            </View>

            <View style={styles.BoxesmainView}>
              <View style={styles.PasswordBox}>
                <Entypo name={"lock"} size={24} color={"#757575"} style={styles.IconUser} />
                <TextInput style={styles.TextName}
                  value={values.password}
                  onChangeText={value => {
                    setPassword(value);
                    handleChange('password')(value);
                  }}
                  onBlur={() => setFieldTouched('password')}
                  placeholder='Password'
                  secureTextEntry placeholderTextColor={'#757575'} />
              </View>
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password} </Text>
              )}
            </View>

            <View style={styles.BoxesmainView}>
              <View style={styles.ConfirmPasswordBox}>
                <Entypo name={"lock"} size={24} color={"#757575"} style={styles.IconUser} />
                <TextInput style={styles.TextName} placeholder='ConfirmPassword' secureTextEntry placeholderTextColor={'#757575'} />
              </View>
            </View>
            <View style={styles.SignupView}>
              <TouchableOpacity style={styles.Signupbutton}
                onPress={handleLogin}>
                <Text style={styles.signupText}>Sign up</Text>
              </TouchableOpacity>
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
            <View style={orientation === 'landscape' ? styles.FooterContainerLandscape : styles.FooterContainerPortrait}>
              <Text style={styles.baseText}>
                <Text style={styles.FirstFooterText}>Already have an account?</Text>
                <TouchableOpacity onPress={HandleLogin}>
                  <Text style={styles.secondFooterText}> Log in</Text>

                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  )
}

export default Signupscreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    flexGrow: 1,

  },
  imageContainerLandscape: {
    height: verticalScale(35),
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
  HeaderImage: {
    width: 450,
    height: 150,
  },
  CreateAccPortrait: {
    marginHorizontal: 30,
    marginTop: 115,
  },
  CreateAccLandscape: {
    marginTop: verticalScale(150),
    alignItems: 'center',
    marginBottom: verticalScale(20)
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
    width: '85%',
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
    width: '85%',
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
    width: '85%',
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
    width: '85%',
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
    width: '85%',
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
    width: '25%',
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
    width: '25%',
    height: 50,
    borderWidth: 1,
    borderColor: '#00A170',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'

  },
  FooterContainerLandscape: {
    width: '100%',
    height: 59,
    backgroundColor: '#E8F3F2',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    marginTop: verticalScale(50)
  },
  FooterContainerPortrait: {
    width: '100%',
    height: 59,
    backgroundColor: '#E8F3F2',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,

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