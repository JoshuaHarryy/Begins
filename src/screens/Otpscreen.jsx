import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import useOrientation from '../Hooks/useOrientation';


export default function Otpscreen() {
  const orientation = useOrientation();
  const navigation = useNavigation();

  const Handleverify= ()=> {
    navigation.navigate("verify")

  }
  
  return (
    
    <View style={orientation === 'landscape' ? styles.MainViewLandscape : styles.MainViewPortrait}>
      
      <View>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
      <MaterialIcons name={"arrow-back-ios"} size={24} color={"#505050"} style={orientation === 'landscape' ? styles.ArrowIconLandscape : styles.ArrowIconPortrait}/>
      </TouchableOpacity>
    <View style={orientation === 'landscape' ? styles.HeadertextLandscape : styles.HeadertextPortrait}>
      <Text style={styles.Headertext}>OTP Verification</Text>
    </View>
    <View style={orientation === 'landscape' ? styles.text2containerLandscape : styles.text2containerPortrait}>
      <Text style={styles.text2}>Enter the verification code we just sent to your email johndoe@email.com</Text>
    </View>
    <View style={styles.BoxContainer}> 
      <View>
        <TextInput style={styles.box1} placeholder='0' placeholderTextColor={"black"} />
      </View>
      <View>
        <TextInput style={styles.box2} placeholder='0'placeholderTextColor={"black"}/>
      </View>
      <View>
        <TextInput style={styles.box3} placeholder='0'placeholderTextColor={"black"}/>
      </View>
      <View>
        <TextInput style={styles.box4} placeholder='0'placeholderTextColor={"black"}/>
      </View>
      <View>
        <TextInput style={styles.box5} placeholder='0'placeholderTextColor={"black"}/>
      </View>
      <View>
        <TextInput style={styles.box6} placeholder='0'placeholderTextColor={"black"}/>
      </View>
    </View>
    <View style={styles.baseText}>
          <Text style={styles.FirstLineText}>Didn’t receive code?  </Text>
          <Text style={styles.secondLineText}>Resend</Text>
        </View>
        </View>
        <View style={orientation === 'landscape' ? styles.verifyViewLandscape : styles.verifyViewPortrait}>
        <TouchableOpacity onPress={Handleverify}>
        <View style={orientation === 'landscape' ? styles.verifyConatinerLandscape : styles.verifyConatinerPortrait}> 
          <Text style={styles.verifyText}>verify</Text>
        </View>
        </TouchableOpacity>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  MainViewLandscape:{
    flex: 1,
  },
  MainViewPortrait:{
    flex:1,
    justifyContent: 'space-between',
  },
  HeadertextLandscape:{
    alignItems: 'center'
  },
  HeadertextPortrait:{
    marginHorizontal : moderateScale(30),
    marginTop : 70,
    
  },
  ArrowIconLandscape: {
    marginHorizontal: moderateScale(40),
    marginTop: verticalScale(20)
  },
  ArrowIconPortrait:{
    marginHorizontal: moderateScale(20),
    marginTop: verticalScale(40)
  },

  Headertext:{
    fontSize : 30,
    fontWeight : '600',
    color: 'black',
  },
  text2:{
  color: '#80807F',
  },
  text2containerLandscape:{
    alignItems:'center'
  },
  text2containerPortrait:{
    marginHorizontal : moderateScale(30),
  },
  BoxContainer:{
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'center',
  },

  box1:{
    width :47, 
    height: 51,
    borderWidth : 2,
    borderColor : '#007959',
    borderRadius : 9,
    paddingHorizontal: 18,
    marginHorizontal: 7,
    fontSize: 20,
    

  },
  box2:{
    width :47, 
    height: 51,
    borderWidth : 2 ,
    borderColor : '#007959',
    borderRadius : 9,
    marginHorizontal: 7,
    fontSize: 20,
    paddingHorizontal: 18,
  },

  box3: {
    width :47, 
    height: 51,
    borderWidth : 2 ,
    borderColor : '#007959',
    borderRadius : 9,
    paddingHorizontal: 18,
    marginHorizontal: 7,
    fontSize: 20,
  },

  box4 : { 
    width :47, 
    height: 51,
    borderWidth : 2 , 
    borderColor : '#007959',
    borderRadius : 9,
    marginHorizontal: 7,
    fontSize: 20,
    paddingHorizontal: 18,
  },
  box5:{
    width :47, 
    height: 51,
    borderWidth : 2 ,
    borderColor : '#007959',
    borderRadius : 9,
    marginHorizontal: 7,
    fontSize: 20,
    paddingHorizontal: 18,
  },
  box6:{
    width :47, 
    height: 51,
    borderWidth : 2 ,
    borderColor : '#007959',
    borderRadius : 9,
    marginHorizontal: 7,
    fontSize: 20,
    paddingHorizontal: 18,
  },
  baseText:{
    fontSize:15,
    justifyContent: 'center',
    marginTop: 40,
    flexDirection: 'row',
    marginBottom: verticalScale(20)
  },
  FirstLineText:{
    color: '#606060',
  },
  secondLineText:{
    color: '#00A170',
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  verifyViewLandscape:{
    alignItems:  'center',
    marginBottom: 50
  },
  verifyViewPortrait:{
    alignItems:  'center',
  },
  verifyConatinerLandscape:{
    width: 343.79,
    height: 59.73,
    backgroundColor : '#007959',
    borderRadius: 102,
    elevation : 2,
    alignItems :'center',
    justifyContent : 'center',
    marginBottom: 100
  },
  verifyConatinerPortrait:{
    width: 343.79,
    height: 59.73,
    backgroundColor : '#007959',
    borderRadius: 102,
    elevation : 2,
    alignItems :'center',
    justifyContent : 'center',
    
    marginBottom: verticalScale(100),
    
   },
   verifyText: {
      fontSize: 20.52,
      color: 'white',
   },
})