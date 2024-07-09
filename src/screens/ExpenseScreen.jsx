import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ExpenseScreen() {
  return (
    <View>
      <ScrollView>
      <View style={styles.Seconddesign}>
        <LinearGradient colors={['#A8C8D7', '#80DEC3']} style={styles.Headercontainer}>
          <View style={styles.RowText}>
          <MaterialIcons name={"arrow-back-ios"} size={24} color={"#505050"} style={styles.ArrowIcon} />
          <Text style={styles.HeaderText}>Expenses Report</Text>
          </View>
          <View style={styles.CenterUnderLineView}>
          <View style={styles.underline}></View>
          </View>
        </LinearGradient>
        <View style={styles.vaultView}>
          <View style={styles.VaultContainer}>
            <View style={styles.box}>
              <Text style={styles.text}>Total</Text>
              <Text style={styles.text2}>US$23,345.43</Text>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.box}>
              <Text style={styles.text}>Last 30 days</Text>
              <Text style={styles.text3}>-US$170.00</Text>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.box}>
              <Text style={styles.text}>Last 7 days</Text>
              <Text style={styles.text4}>US$0.00</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.Imagecontainer}>
        <Ionicons name={"add-circle-outline"} size={scale(24)} color={"#00A170"} style={styles.AddIcon} />
        <Text style={styles.ImageText}>Add Wallet</Text>
      </View>

      <View style={styles.walletView}>
        <LinearGradient colors={['#A8C8D7', '#80DEC3']} style={styles.walletContainer}>
          <Text style={styles.mywalletText}>  My Wallet</Text>
          <View style={styles.UsdView}>
            <Text style={styles.UsdText}> US$23,345.43 </Text>
            <Ionicons name={"add-circle-outline"} size={scale(24)} color={"#00A170"} style={styles.AddIcon2} />
          </View>
          <View style={styles.textDaysView}>
            <Text style={styles.text}>Last 30 days</Text>
            <Text style={styles.text}>Last 7 days</Text>
          </View>
          <View style={styles.textDaysView2}>
            <Text style={styles.text3}>-US$170.00</Text>
            <Text style={styles.text4}>US$0.00</Text>
          </View>
        </LinearGradient>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  Seconddesign: {
    height: verticalScale(250),
    width: '100%',
    backgroundColor: 'rgba(0, 255, 255, 0.1)',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowOffset: 1

  },
  Headercontainer: {
    width: '100%',
    height: moderateScale(120),
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    elevation: 15,
  },
  RowText:{
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
    marginHorizontal: moderateScale(40),
    marginTop: verticalScale(54)
  },
  CenterUnderLineView:{
    flex: 1,
    alignItems: 'center'
  },
  underline: {
      width: '35%',
      height: 4,
      backgroundColor: '#005C89',
      marginTop: 5,
  },

  vaultView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  VaultContainer: {
    width: moderateScale(300),
    height: verticalScale(75),
    borderWidth: 1.5,
    borderColor: '#005C89',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    width: 1,
    height: '60%',
    backgroundColor: 'black',
  },
  text: {
    fontSize: scale(10),
    fontWeight: '700',
    color: '#000000'
  },
  text2: {
    fontSize: scale(12),
    fontWeight: "600",
    color: '#007959'
  },
  text3: {
    fontSize: scale(12),
    fontWeight: "600",
    color: '#EA2525'
  },
  text4: {
    fontSize: scale(12),
    fontWeight: "600",
    color: '#575757'
  },
  Imagecontainer: {
    flexDirection: 'row',
    marginTop: verticalScale(15),
    marginHorizontal: moderateScale(20)
  },
  AddIcon: {
    marginHorizontal: 10,
    marginTop: 3,
    fontSize: scale(30)

  },
  ImageText: {
    fontSize: scale(23),
    fontWeight: 'bold',
    color: '#005C89'
  },
  walletView: {
    alignItems: 'center',
    marginTop: verticalScale(20)
  },
  walletContainer: {
    width: moderateScale(323),
    height: verticalScale(161),
    borderRadius: 30,
    elevation: 10
  },
  mywalletText: {
  fontSize: scale(17),
  color: '#005C89',
  fontWeight: 'bold',
  marginHorizontal: moderateScale(25),
  marginTop: verticalScale(30),
  fontStyle: 'italic',
},
UsdView:{
  flexDirection: 'row',
},
UsdText:{
  fontSize: scale(24),
  color: '#005C89',
  fontWeight: '800',
  marginHorizontal: moderateScale(25)
},
AddIcon2:{
  marginHorizontal: moderateScale(15),
    marginTop: 3,
    fontSize: scale(40)

},
textDaysView:{
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  marginRight: moderateScale(80)
},
textDaysView2:{
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  marginRight: moderateScale(90)
},



})