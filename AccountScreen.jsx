import { ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import useOrientation from '../Begins/src/Hooks/useOrientation';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import firebase from 'firebase/compat/app';
import auth from '@react-native-firebase/auth';
import { useLogin } from './src/context/LoginProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function AccountScreen() {
  const { logout } = useLogin();
  const orientation = useOrientation();
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [mcNumber, setMcNumber] = useState('');
  const [dotNumber, setDotNumber] = useState('');
  const [supportNumber, setSupportNumber] = useState('');
  const [email, setEmail] = useState();  // Fetch the current user's email from auth
  const [Loading, setLoading] = useState();
  const [profileData, setProfileData] = useState({
    name : '',
    email :'',
  })

  
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const token = await AsyncStorage.getItem('authtoken');
        if (!token) {
          throw new Error('No token found');
        }
  
        const response = await fetch('https://staging.ardent-training.com/api/student-profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            "api-key": "eyJpdiI6ImpDdHdQL0NHYzVNQmwwYmE0NFMxbnc9PSIsInZhbHVlIjoiRmZPN2poWjg4OHJkR2xjOGg5SDgwSmg5M0lXMUhXeFhzbUJZZ05hT21MMmd1TUlpUlhEMWo1ekJXU1dTMThnT0szYTlMSlQva3BoODc3cDJhS2sxZE5KMDhyR1U0VlhoSUp1Z3pVSEwydk9KZHpYbWg5SjNjUjdoVFZFem51UFlRK28yemRVZ2NxWVYvVEJTSHZNWEJROXM4NnFubFVaU09UNDZYWSs4REpvYVdjdldaWVFYYlpPZFlpOWc0Z2cvSHA0YXlQMWVJMWlSeEFWakU2TzVyTXljM0xsMmVtMm5lLzMwWlZEbUlCZER3REZMWko0dTNPZGFSak5LRkdFNCIsIm1hYyI6IjIxYzNkNTM3MjVhOGVkN2Q5YjFjMDU2ZjYwM2QzM2MxMzVkYWIzODEwYmEyZDg1ODJiZjViMzUzZmU5NDBmYmIiLCJ0YWciOiIifQ=="
          },
        });
  
        if (response.ok) {
          const result = await response.json();
          console.log('Profile data:', result); 
          setName(result.first_name);  
          setPhone(result.phone_number);
          setEmail(result.email);
         
        } else {
          console.error('Error fetching profile:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     const userId = auth().currentUser.uid;

  //     try {
  //       const userDoc = await firestore().collection('Users').doc(userId).get();

  //       if (userDoc.exists) {
  //         const data = userDoc.data();
  //         setName(data.name);
  //         setAddress(data.address);
  //         setPhone(data.phone);
  //         setMcNumber(data.mcNumber);
  //         setDotNumber(data.dotNumber);
  //         setSupportNumber(data.supportNumber);
  //         setEmail(data.email)
  //       }
  //     } catch (error) {
  //       Alert.alert('Error', error.message);
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  // const handleUpdate = async () => {
  //  setLoading(true)
  //   try {
  //     if (name.length > 0 && email.length > 0) {
  //       const userId = auth().currentUser.uid;
  //       const userData = {
  //         name,
  //         email,
  //         address,
  //         phone,
  //         mcNumber,
  //         dotNumber,
  //         supportNumber,
  //         updatedAt: firestore.FieldValue.serverTimestamp(),
  //       };

  //       await firestore().collection('Users').doc(userId).set(userData, { merge: true });
  //       Alert.alert("Profile updated successfully!");
  //     } else {
  //       Alert.alert('Please fill in all required fields');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     Alert.alert('Error', error.message);
  //   }finally{
  //     setLoading(false)
  //   }
  // };

  
  const logoutUser = async () => {
    try {
     
      await AsyncStorage.removeItem('authtoken');
      
      // Call the logout function from LoginContext
      logout();
      console.log("logout successful")
      // // Optionally navigate to a different screen after logout
      // navigation.navigate('Login'); // Adjust to your desired screen
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
   
    <View>
      <ScrollView style={styles.container}>
        <LinearGradient colors={['#A8C8D7', '#80DEC3']} style={styles.Headercontainer}>
          <View style={styles.RowText}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <MaterialIcons name={"arrow-back-ios"} size={24} color={"#505050"} style={styles.ArrowIcon} />
            </TouchableOpacity>
            <Text style={orientation === 'landscape' ? styles.AccountTextLandscape : styles.AccountTextPortrait}>Account Info & Settings</Text>
          </View>
          <View style={styles.CenterUnderLineView}>
            <View style={styles.underline}></View>
          </View>

        </LinearGradient>

        <Text style={styles.NameText}>Name</Text>
        <View style={styles.BoxesView}>
          <View style={styles.BoxContainer}>
            <TextInput style={styles.johndoe}
              value={name}
              onChangeText={setName}
              placeholder='johndoe*,'
            />
          </View>
        </View>

        <Text style={styles.addressText}>Address</Text>
        <View style={styles.BoxesView}>
          <View style={styles.BoxContainer2}>
            <TextInput style={styles.johndoe}
              value={address}
              onChangeText={value => setAddress(value)}
              placeholder='123 Main StreetAnytown,'
            />
          </View>
        </View>
        <Text style={styles.PhoneText}>Phone </Text>
        <View style={styles.BoxesView}>
          <View style={styles.BoxContainer}>
            <TextInput style={styles.johndoe}
              value={phone}
              onChangeText={setPhone}
              placeholder='8057545XX'
              placeholderTextColor={'#757575'} />
          </View>
        </View>

        <Text style={styles.PhoneText}>Email </Text>
        <View style={styles.BoxesView}>
          <View style={styles.BoxContainer}>
            <TextInput style={styles.johndoe}
              value={email}
              onChangeText={value => setEmail(value)}
              placeholder='johndoe@gmail.com,'
            />
          </View>
        </View>

        <View style={styles.MCHash}>
          <Text style={styles.AuthorityText}>MC</Text>
          <Feather name={"hash"} size={24} color={"#505050"} style={styles.HashIcon} />
        </View>
        <View style={styles.BoxesView}>
          <View style={styles.FillBox2}>
            <TextInput style={styles.johndoe}
              value={mcNumber}
              onChangeText={value => setMcNumber(value)}
              placeholder='XXXX-XX'
              placeholderTextColor={'#757575'} />
          </View>
        </View>

        <View style={styles.DotHash}>
          <Text style={styles.DotText}>DOT</Text>
          <Feather name={"hash"} size={24} color={"#505050"} style={styles.HashIcon} />
        </View>
        <View style={styles.BoxesView}>
          <View style={styles.FillBox3}>
            <TextInput style={styles.johndoe}
              value={dotNumber}
              onChangeText={value => setDotNumber(value)}
              placeholder='XXXX-XX'
              placeholderTextColor={'#757575'} />
          </View>
        </View>


        <View style={styles.SupportHash}>
          <Text style={styles.SupportText}>support</Text>
          <Feather name={"hash"} size={24} color={"#505050"} style={styles.HashIcon} />
        </View>
        <View style={styles.BoxesView}>
          <View style={styles.FillBox4}>
            <TextInput style={styles.johndoe}
              value={supportNumber}
              onChangeText={value => setSupportNumber(value)}
              placeholder='XXXX-XXX'
              placeholderTextColor={'#757575'} />
          </View>
        </View>

        {Loading ?  (
          <ActivityIndicator size="large" color="#00A170" style={styles.loading}/>
          
      ): (
        <View style={styles.ResumeView}>
          <TouchableOpacity >
            <View style={styles.verifyConatiner}>
              <Text style={styles.verifyText}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }
        <View style={styles.ResumeView1}>
          <TouchableOpacity onPress={logoutUser}>
            <View style={styles.verifyConatiner1}>
              <Text style={styles.verifyText1}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  Headercontainer: {
    width: '100%',
    height: 120,
    backgroundColor: '#FFFFFF',
    elevation: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'space-between',
    position: 'relative'
  },
  RowText: {
    flexDirection: 'row',
  },
  ArrowIcon: {
    marginHorizontal: 15,
    marginTop: 60,
    marginLeft: verticalScale(15)
  },
  AccountTextLandscape: {
    color: '#005C89',
    fontSize: 25,
    fontWeight: '700',
    position: 'absolute', // Absolute positioning
    left: '50%', // Centers the text horizontally based on the container
    transform: [{ translateX: -137 }], // Adjusts the centering
    top: 52, // Align the text vertically as needed
    // Other styling for the text
  },
  AccountTextPortrait: {
    color: '#005C89',
    fontSize: 25,
    fontWeight: '700',
    position: 'absolute', // Absolute positioning
    left: '50%', // Centers the text horizontally based on the container
    transform: [{ translateX: -120 }], // Adjusts the centering
    top: 52, // Align the text vertically as needed
    // Other styling for the text
  },
  CenterUnderLineView: {
    flex: 1,
    alignItems: 'center'
  },
  underline: {
    width: '40%',
    height: 4,
    backgroundColor: '#005C89',
    marginTop: 5,
  },
  NameText: {
    fontSize: 20,
    marginHorizontal: 40,
    marginTop: 50,
    fontWeight: 'bold',
    color: '#757575'
  },
  BoxesView: {
    flex: 1,
    alignItems: 'center',
  },
  BoxContainer: {
    width: 320,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#D0F2E8',
    marginTop: 10,
    elevation: 4,
  },
  johndoe: {
    fontSize: 19,
    marginHorizontal: 20,
    marginTop: verticalScale(6),
    color: '#666666',
  },
  addressText: {
    fontSize: 20,
    marginHorizontal: 40,
    marginTop: 50,
    fontWeight: 'bold',
    color: '#757575'
  },
  BoxContainer2: {
    width: 320,
    height: 117,
    borderRadius: 20,
    backgroundColor: '#D0F2E8',
    marginTop: 10,
    elevation: 4,
  },
  PhoneText: {
    fontSize: 20,
    marginHorizontal: 40,
    marginTop: 50,
    fontWeight: 'bold',
    color: '#757575'
  },
  MCHash: {
    flexDirection: 'row',
    marginHorizontal: 40,
    marginTop: 50,
  },
  AuthorityText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#757575',
  },
  FillBox2: {
    width: 320,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#D0F2E8',

    marginTop: 10,
    elevation: 4,
  },
  Text: {
    fontSize: 17,
    marginHorizontal: 20,
    marginTop: 17,
    color: '#666666',

  },
  DotHash: {
    flexDirection: 'row',
    marginHorizontal: 40,
    marginTop: 50,
  },
  DotText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#757575',
  },
  FillBox3: {
    width: 320,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#D0F2E8',

    marginTop: 10,
    elevation: 4,
  },
  Text2: {
    fontSize: 17,
    marginHorizontal: 20,
    marginTop: 17,
    color: '#666666',
  },
  SupportHash: {
    flexDirection: 'row',
    marginHorizontal: 40,
    marginTop: 50,
  },
  SupportText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#757575',
  },
  FillBox4: {
    width: 320,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#D0F2E8',
    marginBottom: verticalScale(60),
    marginTop: 10,
    elevation: 4,
  },
  Text3: {
    fontSize: 17,
    marginHorizontal: 20,
    marginTop: 17,
    color: '#666666',
  },
  verifyConatiner: {
    width: 343.79,
    height: 59.73,
    backgroundColor: '#007959',
    borderRadius: 25,
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  verifyConatiner1: {
    width: 343.79,
    height: 59.73,
    backgroundColor: 'white',
    borderRadius: 25,
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#007959'
  },
  verifyText: {
    fontSize: 20.52,
    color: 'white',
  },
  verifyText1: {
    fontSize: 20.52,
    color: '#007959',

  },
  ResumeView: {
    flex: 1,
    alignItems: 'center',
  },
  ResumeView1: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 50,
  },
  loading:{
    marginBottom: 20 ,
  },
})