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
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useLogin } from '../context/LoginProvider';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';



const SignupSchema = Yup.object().shape({

  name: Yup.string()
    .min(3, 'First Name must be at least 3 characters')
    .max(15, 'First Name must be at most 15 characters')
    .required('First Name is required'),
  lastName: Yup.string()
    .min(3, 'Last Name must be at least 3 characters')
    .max(15, 'Last Name must be at most 15 characters')
    .required('Last Name is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone Number must be exactly 10 digits')
    .required('Phone Number is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const Signupscreen = () => {

  const orientation = useOrientation();
  const navigation = useNavigation();
  const [isloading, setLoading] = useState(false);

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isDrawerOpen, setDrawerOpen] = useState(false); // State for dropdown
  const [selectedOption, setSelectedOption] = useState(null); // Store selected option

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setDrawerOpen(false); // Close drawer after selecting
  };


  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
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


  async function registerUser(values) {

    setLoading(true);
    const data = {
      first_name: values.name,
      last_name: values.lastName,
      phone_number: values.phone,
      email: values.email,
      password: values.password,
      confirm: values.confirm,
      timezone: 'UTC'
    };
    console.log(values);
    try {
      const response = await fetch("https://staging.ardent-training.com/api/student-register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": "eyJpdiI6ImpDdHdQL0NHYzVNQmwwYmE0NFMxbnc9PSIsInZhbHVlIjoiRmZPN2poWjg4OHJkR2xjOGg5SDgwSmg5M0lXMUhXeFhzbUJZZ05hT21MMmd1TUlpUlhEMWo1ekJXU1dTMThnT0szYTlMSlQva3BoODc3cDJhS2sxZE5KMDhyR1U0VlhoSUp1Z3pVSEwydk9KZHpYbWg5SjNjUjdoVFZFem51UFlRK28yemRVZ2NxWVYvVEJTSHZNWEJROXM4NnFubFVaU09UNDZYWSs4REpvYVdjdldaWVFYYlpPZFlpOWc0Z2cvSHA0YXlQMWVJMWlSeEFWakU2TzVyTXljM0xsMmVtMm5lLzMwWlZEbUlCZER3REZMWko0dTNPZGFSak5LRkdFNCIsIm1hYyI6IjIxYzNkNTM3MjVhOGVkN2Q5YjFjMDU2ZjYwM2QzM2MxMzVkYWIzODEwYmEyZDg1ODJiZjViMzUzZmU5NDBmYmIiLCJ0YWciOiIifQ=="
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (response.ok) {
        Alert.alert("Success", "Registration Successful!");
        navigation.navigate("Login");
      } else {
        console.log("Server error: ", result);
        Alert.alert("Error", result.message || "Registration failed");
      }
    } catch (error) {
      console.log("Network or validation error: ", error.message)
    } finally {
      setLoading(false);
    }
  }


  return (
    <Formik
      initialValues={{
        name: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        confirm: '',
        timezone: 'UTC'
      }}
      validationSchema={SignupSchema}
      validateOnMount={true}
      onSubmit={async (values, { setSubmitting }) => {
        console.log("Form Submitted: ", values);
        setSubmitting(true);
        try {
          await registerUser(values);
        } catch (error) {
          console.error(error.message);
        }
        setSubmitting(false);
      }}

    >
      {({ values, errors, touched, handleChange, handleSubmit, handleBlur, isSubmitting }) => (




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
              <View style={styles.NameBox1}>
                <FontAwesome name={"user-circle-o"} size={24} color={"#757575"} style={styles.IconUser} />
                <TextInput
                  style={styles.TextName}
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  placeholder='First Name'
                  placeholderTextColor={'#757575'}
                />
              </View>
              {touched.name && errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}
            </View>
            <View style={styles.BoxesmainView}>
              <View style={styles.NameBox}>
                <FontAwesome name={"user-circle-o"} size={24} color={"#757575"} style={styles.IconUser} />
                <TextInput
                  style={styles.TextName}
                  value={values.lastName}
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  placeholder='Last Name'
                  placeholderTextColor={'#757575'}
                />
              </View>
              {touched.lastName && errors.lastName && (
                <Text style={styles.errorText}>{errors.lastName}</Text>
              )}
            </View>


            <View style={styles.BoxesmainView}>
              <View style={styles.EmailAddressBox}>
                <Entypo name={"phone"} size={24} color={"#757575"} style={styles.IconUser} />
                <TextInput style={styles.TextName}
                  value={values.phone}
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  placeholder='Phone Number'
                  placeholderTextColor={'#757575'} />
              </View>

              {touched.phone && errors.phone && (
                <Text style={styles.errorText}>{errors.phone} </Text>
              )}
            </View>
            <View style={styles.BoxesmainView}>
              <View style={styles.EmailAddressBox}>
                <Entypo name={"mail"} size={24} color={"#757575"} style={styles.IconUser} />
                <TextInput style={styles.TextName}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
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
                  value={values.password}
                  onChangeText={handleChange('password')}
                  placeholder='Password'
                  onBlur={handleBlur('password')}
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
                  value={values.confirm}
                  onChangeText={handleChange('confirm')}
                  placeholder='Confirm Password'
                  onBlur={handleBlur('confirm')}
                  secureTextEntry={secureTextEntry}
                  placeholderTextColor={'#757575'} />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Feather
                    name={secureTextEntry ? 'eye-off' : 'eye'}
                    size={24}
                    style={styles.inputIcon2} />
                </TouchableOpacity>
              </View>
              {touched.confirm && errors.confirm && (
                <Text style={styles.errorText}>{errors.confirm}</Text>
              )}
            </View>

            <View style={styles.BoxesmainView}>
              <View style={styles.ConfirmPasswordBox}>
                <Text style={styles.HearAboutUsText}>
                  Where did you hear about us?
                </Text>
                <TouchableOpacity onPress={toggleDrawer}>
                  <Feather name={isDrawerOpen ? 'arrow-up' : 'arrow-down'} size={24} style={styles.inputIcon2} />
                </TouchableOpacity>
              </View>

              {/* Dropdown List */}
              {isDrawerOpen && (
                <View style={styles.dropdown}>
                  {['Social Media', 'From a Friend', 'Red Seas', 'Advertisement', 'RYA Instructor',
                    'RYA Training Centre',
                    'Yacht Club',
                    'Magazine',
                    'Prefer Not To Say',
                    'Other'].map((option, index) => (
                      <TouchableOpacity key={index} onPress={() => selectOption(option)} style={styles.option}>
                        <Text style={styles.optionText}>{option}</Text>
                      </TouchableOpacity>
                    ))}
                </View>
              )}
            </View>

            {isloading ? (
              <ActivityIndicator size="large" color="#00A170" style={styles.loading} />
            ) : (
              <View style={styles.SignupView}>
                <TouchableOpacity style={styles.Signupbutton}
                  onPress={handleSubmit}
                  disabled={isSubmitting}
                >
                  <Text style={styles.signupText}>Sign up</Text>
                </TouchableOpacity>
                {isSubmitting && <ActivityIndicator />}
              </View>

            )}

            <View style={styles.connectText}>
              <Text style={styles.Connectvia}>Or connect via</Text>
            </View>

            <View style={styles.twoboxes}>
              <TouchableOpacity
                style={styles.googlebox}>
                <View >
                  <AntDesign name={"google"} size={24} color={"#757575"} style={styles.GoogleIcon} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Facebookbox}>
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
  dropdown: {
    width: '85%',
    borderWidth: 1,
    borderColor: '#757575',
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    marginTop: 5,
  },
  option: {
    padding: 15,
  },
  optionText: {
    fontSize: 16,
    color: '#757575',
  },
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
  NameBox1: {
    width: '85%',
    height: 60,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#757575',
    borderRadius: 20,
    marginTop: 40,
    flexDirection: "row",
    elevation: 4,
  },
  NameBox: {
    width: '85%',
    height: 60,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#757575',
    borderRadius: 20,
    marginTop: 5,
    flexDirection: "row",
    elevation: 4,

  },
  IconUser: {
    marginLeft: 25,
    marginRight: 10,
    marginTop: 18
  },
  inputIcon2: {
    color: "green",
    marginRight: 20,
    marginTop: 15,
    marginLeft: 35
  },
  HearAboutUsText: {
    fontSize: 18,
    marginLeft: 30,
    marginTop: 15
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
  loading: {
    marginTop: 20
  },
})
