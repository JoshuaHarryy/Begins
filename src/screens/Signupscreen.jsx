import { Image, StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity, ScrollView, Alert, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
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
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
import { useLogin } from '../context/LoginProvider';
import { ActivityIndicator } from 'react-native';



const SignupSchema = Yup.object().shape({
  
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Please enter your name'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email address'),
  password: Yup.string()
    .min(6, 'Must contain minimum 6 characters')
    .required('Please enter your password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password')
});

const Signupscreen = () => {
  
  GoogleSignin.configure({
    webClientId: '1081204046823-2kk1sbc0bomnhn7r0a9ead74oglsc31r.apps.googleusercontent.com',
    offlineAccess: true, 
  });

  const orientation = useOrientation();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState('');
    const [isloading, setLoading] = useState(false);

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleLogin = async () => {
    setLoading(true);
    try {
      if (email.length > 0 && password.length > 0 && name.length > 0) {
        const isUserCreated = await auth().createUserWithEmailAndPassword(email, password)
          .then(async (userCredentials) => {
            const userData = {
              name,
              email: userCredentials.user.email,
              uid: userCredentials.user.uid,
              address: '',
              phone: '',
              mcNumber: '',
              dotNumber: '',
              supportNumber: '',
              createdAt: firestore.FieldValue.serverTimestamp(),
              updatedAt: firestore.FieldValue.serverTimestamp(),
            };
            await firestore().collection("Users").doc(userCredentials.user.uid).set(userData);
            console.log(userCredentials);
            Alert.alert("Signup successful!");
            await auth().currentUser.sendEmailVerification();
            await auth().signOut();
            Alert.alert('Please verify your email. Check the link in your inbox.');
            navigation.navigate('Login');
          })
          .catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
              Alert.alert('Email already in use', 'The email address is already registered. Please use a different email or log in.');
            } else if (error.code === 'auth/invalid-email') {
              Alert.alert('Invalid Email', 'The email address is not valid. Please enter a valid email.');
            } else if (error.code === 'auth/weak-password') {
              Alert.alert('Weak Password', 'The password is too weak. Please enter a stronger password.');
            } else {
              Alert.alert('Error', error.message);
            }
            console.log(error);
          });
      } else {
        Alert.alert('Please Enter All Data', 'All fields are required. Please fill in all the details.');
      }
    } catch (error) {
      console.log(error.message);
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false); 
    }
  };

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const {login} = useLogin()
  const signIn = async () => {
    
    try {
      
      await GoogleSignin.hasPlayServices();
  
     
      await GoogleSignin.signOut(); // Add this line
  
      
      const { idToken } = await GoogleSignin.signIn();
  
      
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
      
      const userCredential = await auth().signInWithCredential(googleCredential);
  
     
      console.log("Google Sign-In successful:", userCredential.user);
  
      
      const userDoc = await firestore().collection("Users").doc(userCredential.user.uid).get();
  
      if (!userDoc.exists) {
        
        const userData = {
          name: userCredential.user.displayName || '',
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          address: '',
          phone: '',
          mcNumber: '',
          dotNumber: '',
          supportNumber: '',
          createdAt: firestore.FieldValue.serverTimestamp(),
          updatedAt: firestore.FieldValue.serverTimestamp(),
        };
  
        console.log("Saving user data to Firestore:", userData);
  
        await firestore().collection("Users").doc(userCredential.user.uid).set(userData)
          .then(() => {
            console.log("User data saved successfully!");
          })
          .catch((error) => {
            console.error("Error saving user data:", error);
            Alert.alert("Error", "Failed to save user data to Firestore. Please try again.");
          });
      } else {
        console.log("User already exists in Firestore.");
      }
      login();
      Alert.alert("Login successful!");

     
    } catch (error) {
      console.error("Error during Google Sign-In:", error); // Print full error
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert("Google Sign-In cancelled.");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert("Google Sign-In is in progress.");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert("Google Play Services not available.");
      } else {
        Alert.alert("Error", error.message);
      }
    }
  };

  const signInWithFacebook = async () => {
    try {
      // Attempt login with Facebook
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }

      // Get the access token
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      // Create a Facebook credential with the token
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

      // Sign in with the credential
      const userCredential = await auth().signInWithCredential(facebookCredential);

      console.log("Facebook Sign-In successful:", userCredential.user);

      // Check if the user already exists in Firestore
      const userDoc = await firestore().collection("Users").doc(userCredential.user.uid).get();

      if (!userDoc.exists) {
        const userData = {
          name: userCredential.user.displayName || '',
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          address: '',
          phone: '',
          mcNumber: '',
          dotNumber: '',
          supportNumber: '',
          createdAt: firestore.FieldValue.serverTimestamp(),
          updatedAt: firestore.FieldValue.serverTimestamp(),
        };

        console.log("Saving user data to Firestore:", userData);

        await firestore().collection("Users").doc(userCredential.user.uid).set(userData)
          .then(() => {
            console.log("User data saved successfully!");
          })
          .catch((error) => {
            console.error("Error saving user data:", error);
            Alert.alert("Error", "Failed to save user data to Firestore. Please try again.");
          });
      } else {
        console.log("User already exists in Firestore.");
      }
      login();
      Alert.alert("Login successful!");
    } catch (error) {
      console.log("Error during Facebook Sign-In:", error);
      Alert.alert("Error", error.message || "Failed to sign in with Facebook. Please try again.");
    }
  };
  
  
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to exit?", [
        {
          text: "No",
          onPress: () => null,
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => BackHandler.exitApp()
        }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);


  return (
    <Formik
    initialValues={{
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }}
    validationSchema={SignupSchema}
    onSubmit={handleLogin}
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
                <TextInput
                  style={styles.TextName}
                  value={values.name}
                  onChangeText={value => {
                    setName(value);
                    handleChange('name')(value);
                  }}
                  onBlur={() => setFieldTouched('name')}
                  placeholder='Name'
                  placeholderTextColor={'#757575'}
                />
              </View>
              {touched.name && errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
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
            <Fontisto name={"locked"} size={24} color={"#757575"} style={styles.inputIcon} />
            <TextInput style={styles.TextName}
              value={password}
              onChangeText={value => setPassword(value)}
              placeholder='Password'
              secureTextEntry={secureTextEntry}
              placeholderTextColor={'#757575'} />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Feather
                name={secureTextEntry ? 'eye-off' : 'eye'}
                size={24}
                style={styles.inputIcon2}
              />
            </TouchableOpacity>
          </View>
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password} </Text>
              )}
            </View>

            <View style={styles.BoxesmainView}>
            <View style={styles.ConfirmPasswordBox}>
            <Fontisto name={"locked"} size={24} color={"#757575"} style={styles.inputIcon} />
            <TextInput style={styles.TextName}
              value={confirmPassword}
              onChangeText={value => setConfirmPassword(value)}
              placeholder='Confirm Password'
              secureTextEntry={secureTextEntry}
              placeholderTextColor={'#757575'} />
              <TouchableOpacity  onPress={togglePasswordVisibility}>
             <Feather 
             name={secureTextEntry ? 'eye-off' : 'eye'} 
             size={24} 
             style={styles.inputIcon2} />
             </TouchableOpacity>
          </View>

            </View>
            {isloading ?  (
          <ActivityIndicator size="large" color="#00A170" style={styles.loading}/>
      ): (
            <View style={styles.SignupView}>
              <TouchableOpacity style={styles.Signupbutton}
                onPress={handleLogin}>
                <Text style={styles.signupText}>Sign up</Text>
              </TouchableOpacity>
            </View>
            
          )}

            <View style={styles.connectText}>
              <Text style={styles.Connectvia}>Or connect via</Text>
            </View>

            <View style={styles.twoboxes}>
              <TouchableOpacity
              onPress={signIn} 
              style={styles.googlebox}>
              <View >
                <AntDesign name={"google"} size={24} color={"#757575"} style={styles.GoogleIcon} />
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={signInWithFacebook} style={styles.Facebookbox}>
              <View >
                <AntDesign name={"facebook-square"} size={24} color={"#757575"} style={styles.facebookIcon} />
              </View>
              </TouchableOpacity>
            </View>

          </View>



          <View style={styles.FooterView}>
            <View style={orientation === 'landscape' ? styles.FooterContainerLandscape : styles.FooterContainerPortrait}>
              <Text style={styles.baseText}>
                <Text style={styles.FirstFooterText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
  inputIcon2:{
    color: "green",
    marginRight: 20,
    marginTop: 15,
  },
  TextName: {
    fontSize: 18,
    flex: 1,
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
  inputIcon: {
    marginLeft: 25,
    marginRight: 14,
    marginTop: 18
  },
  Textinput: {
    flex: 1,
    fontSize: 16,
    color: '#757575',
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

  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
loading:{
  marginTop: 20 
},
})