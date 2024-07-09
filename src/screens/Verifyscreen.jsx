import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default function Verifyscreen() {
  const navigation = useNavigation();

  const HandleHome = () => {
    navigation.navigate("Home")
  }
  return (
    
    <View style={styles.MainView}>
      
      <View>
      <View style={styles.IconView}>
        <Image source={require("../screens/Assets/verifyDone.png")} style={styles.imageTop} />
      </View>
      <View style={styles.TextConatiner}>
        <Text style={styles.VerifyText}>Verification Successful!</Text>
        <Text style={styles.SecondaryText}>Your account has been created</Text>
         <Text style={styles.SecondaryText}>successfully</Text>
      </View>

      </View>

      <View style={styles.ContinueView}>
      <TouchableOpacity onPress={HandleHome}>
        <View style={styles.ContinueConatiner}>
          <Text style={styles.ContinueText}>Continue</Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  MainView:{
    flex: 1,
    justifyContent: 'space-between',
  },
  IconView: {
    alignItems: 'center',
  },
  imageTop: {
    width: 80,
    height: 80,
    marginTop: 270
  },
  VerifyText: {
    fontSize: 28,
    fontWeight: '600',
    color: 'black',
  },
  TextConatiner: {
    alignItems: 'center',
    marginTop: 20,
  },
  SecondaryText: {
   color: '#80807F',
  },
  ContinueView:{
    alignItems:  'center',
  },
  ContinueConatiner: {
    width: 343.79,
    height: 59.73,
    backgroundColor: '#005C89',
    borderRadius: 102,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(100)
  },
  ContinueText: {
    fontSize: 20.52,
    color: 'white',
  },
})