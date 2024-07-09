import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ElectronicLogScreen() {
  return (
    <View>
      <ScrollView>
      <LinearGradient colors={['#A8C8D7', '#80DEC3']} style={styles.Headercontainer}>
        <View style={styles.RowText}>
          <MaterialIcons name={"arrow-back-ios"} size={24} color={"#505050"} style={styles.ArrowIcon} />
          <Text style={styles.HeaderText}>Electronic Log Book</Text>
        </View>
        <View style={styles.CenterUnderLineView}>
          <View style={styles.underline}></View>
        </View>
      </LinearGradient>

      <View style={styles.dailyLogView}>
        <LinearGradient colors={['#A8C8D7', '#A8DFCF']} style={styles.DailyLogContainer}>
          <Text style={styles.DailyLogText}> Daily Log</Text>
        </LinearGradient>
      </View>
      <View></View>
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
  },
  RowText: {
    flexDirection: 'row',
  },
  ArrowIcon: {
    marginTop: verticalScale(60),
    marginHorizontal: moderateScale(20),
    color: '#005C89',
  },
  HeaderText: {
    fontSize: scale(23),
    fontWeight: 'bold',
    color: '#005C89',
    marginHorizontal: moderateScale(25),
    marginTop: verticalScale(54)
  },
  CenterUnderLineView: {
    flex: 1,
    alignItems: 'center'
  },
  underline: {
    width: '30%',
    height: 4,
    backgroundColor: '#005C89',
    marginTop: 5,
  },

  dailyLogView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: verticalScale(200)

  },
  DailyLogContainer: {
    width: moderateScale(185),
    height: verticalScale(60),
    borderRadius: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  DailyLogText: {
    fontSize: scale(18),
    fontWeight: "600",
    color: '#005C89',
  },
})