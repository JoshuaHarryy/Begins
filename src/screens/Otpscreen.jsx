import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
export default function Otpscreen() {
  const navigation = useNavigation();

  const Handleverify= ()=> {
    navigation.navigate("verify")

  }
  
  return (
    <View style={styles.MainView}>
      <View>
      <MaterialIcons name={"arrow-back-ios"} size={24} color={"#505050"} style={styles.ArrowIcon}/>
    <View style={styles.HeaderConatiner}>
      <Text style={styles.Headertext}>OTP Verification</Text>
    </View>
    <View style={styles.text2container}>
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
    <Text style={styles.baseText}>
          <Text style={styles.FirstLineText}>Didn’t receive code?  </Text>
          <Text style={styles.secondLineText}>Resend</Text>
        </Text>
        </View>
        <View style={styles.VerifyView}>
        <TouchableOpacity onPress={Handleverify}>
        <View style={styles.verifyConatiner}> 
          <Text style={styles.verifyText}>verify</Text>
        </View>
        </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  MainView:{
    flex:1,
    justifyContent: 'space-between',
  },
  HeaderConatiner:{
    marginHorizontal : moderateScale(30),
    marginTop : 70,
    
  },
  ArrowIcon:{
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
  text2container:{
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
    marginHorizontal: 100,
    marginTop: 40
  },
  FirstLineText:{
    color: '#606060',
  },
  secondLineText:{
    color: '#00A170',
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  VerifyView:{
    alignItems:  'center',
  },
   verifyConatiner:{
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