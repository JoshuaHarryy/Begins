import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useOrientation from '../Hooks/useOrientation';
import { useNavigation } from '@react-navigation/native';


export default function ElectronicLogScreen() {
  const orientation = useOrientation();
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView>
      <LinearGradient colors={['#A8C8D7', '#80DEC3']} style={styles.Headercontainer}>
        <View style={styles.RowText}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialIcons name={"arrow-back-ios"} size={24} color={"#505050"} style={styles.ArrowIcon} />
          </TouchableOpacity>
          <Text style={orientation === 'landscape' ? styles.ElectronicTextLandscape : styles.ElectronicTextPortrait}>Electronic Log Book</Text>
        </View>
        <View style={styles.CenterUnderLineView}>
          <View style={styles.underline}></View>
        </View>
      </LinearGradient>

      <View style={styles.dailyLogView}>
        <LinearGradient colors={['#A8C8D7', '#A8DFCF']} style={orientation === 'landscape' ? styles.DailyLogContainerLandscape : styles.DailyLogContainerPortrait}>
          <Text style={styles.DailyLogText}> Daily Log</Text>
        </LinearGradient>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  Headercontainer: {
    width: '100%',
    height: moderateScale(120),
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    elevation: 15,
    position: 'relative',
  },
  RowText: {
    flexDirection: 'row',
  },
  ArrowIcon: {
    marginTop: verticalScale(60),
    marginHorizontal: moderateScale(20),
    color: '#005C89',
  },
  ElectronicTextLandscape:{
    fontSize: scale(23),
    fontWeight: 'bold',
    color: '#005C89',
    position: 'absolute', // Absolute positioning
        left: '50%', // Centers the text horizontally based on the container
        transform: [{ translateX: -125 }], // Adjusts the centering
        top: 58, // Align the text vertically as needed
        // Other styling for the text
  },
  ElectronicTextPortrait: {
    fontSize: scale(23),
    fontWeight: 'bold',
    color: '#005C89',
    position: 'absolute', // Absolute positioning
    left: '50%', // Centers the text horizontally based on the container
    transform: [{ translateX: -110 }], // Adjusts the centering
    top: 58, // Align the text vertically as needed
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

  dailyLogView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  DailyLogContainerLandscape: {
    width: moderateScale(185),
    height: verticalScale(60),
    borderRadius: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    marginBottom: verticalScale(100),
    marginTop: verticalScale(110)
  },
  DailyLogContainerPortrait: {
    width: moderateScale(185),
    height: verticalScale(60),
    borderRadius: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    marginBottom: verticalScale(40),
    marginTop: verticalScale(200)

  },
  DailyLogText: {
    fontSize: scale(18),
    fontWeight: "600",
    color: '#005C89',
  },
})