import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


export default function HomeScreen() {
  const navigation = useNavigation();

  const HandleCompanyInfo = () => {
    navigation.navigate("company")

  }
  return (
    <ScrollView>
    <View>
      <View style={styles.Headercontainer}>
        <View style={styles.RowText}>
          <Image source={require("../Begins/src/screens/Assets/Settings.png")} style={styles.imageLine} />
          <Text style={styles.HomeText}>Home</Text>
        </View>
        <View style={styles.CenterUnderLineView}>
          <View style={styles.underline}></View>
          </View>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={HandleCompanyInfo}>
          <View style={styles.Card1}>
            <Image source={require("../Begins/src/screens/Assets/infoicon.png")} style={styles.imageLine2} />
            <Text style={styles.Textcard}>Company Info</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Accounts")}>
          <View style={styles.Card2}>
            <Image source={require("../Begins/src/screens/Assets/user.png")} style={styles.imageLine2} />
            <Text style={styles.Textcard2}>Account Info & Settings</Text>
          </View>
        </TouchableOpacity>
      </View>


      <View style={styles.cardContainer2}>
        <TouchableOpacity onPress={() => navigation.navigate("Permit")}>
          <View style={styles.Card1}>
            <Image source={require("../Begins/src/screens/Assets/ebook.png")} style={styles.imageLine2} />
            <Text style={styles.Textcard3}>Permit Log Book</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("IFTA")}>
          <View style={styles.Card2}>
            <Image source={require("../Begins/src/screens/Assets/tracking.png")} style={styles.imageLine2} />
            <Text style={styles.Textcard}>IFTA Tracking</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer3}>
        <TouchableOpacity onPress={() => navigation.navigate("Expense")}>
          <View style={styles.Card1}>
            <Image source={require("../Begins/src/screens/Assets/expense.png")} style={styles.imageLine2} />
            <Text style={styles.Textcard5}>Expenses Report </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("ElectronicLog")}>
          <View style={styles.Card2}>
            <Image source={require("../Begins/src/screens/Assets/ebook.png")} style={styles.imageLine2} />
            <Text style={styles.Textcard6}>Electronic Log Book</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer4}>
        <TouchableOpacity onPress={() => navigation.navigate("OtherInfo")}>
          <View style={styles.Card1}>
            <Image source={require("../Begins/src/screens/Assets/lock.png")} style={styles.imageLine2} />
            <Text style={styles.Textcard7}>Other Accounts Info</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
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
  },
  RowText:{
    flexDirection: 'row',
  },
  HomeText: {
    color: '#00A170',
    fontSize: 25,
    fontWeight: '700',
    marginHorizontal: moderateScale(94),
    marginTop: 60,
  },
  CenterUnderLineView:{
    flex: 1,
    alignItems: 'center'
  },
  underline: {
      width: '25%',
      height: 4,
      backgroundColor: '#00A170',
      marginTop: 5,
  },
  imageLine: {
    marginHorizontal: moderateScale(20),
    marginTop: verticalScale(50),

  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',

  },
  Card1: {
    width: 180,
    height: 111,
    borderWidth: 0.6,
    borderRadius: 20,
    borderColor: '#00A170',
    backgroundColor: '#FFFFFF',
    elevation: 7,
    marginTop: 25,

  },
  Textcard: {
    fontSize: scale(13),
    marginHorizontal: 40,
    marginTop: 5,
    fontWeight: '700',
    color: '#181818',
  },
  Textcard2: {
    fontSize: scale(12),
    marginHorizontal: 10,
    marginTop: 5,
    fontWeight: '700',
    color: '#181818',
  },
  Textcard3: {
    fontSize: scale(13),
    marginHorizontal: 30,
    marginTop: 5,
    fontWeight: '700',
    color: '#181818',
  },
  Textcard5: {
    fontSize: scale(13),
    marginHorizontal: 30,
    marginTop: 5,
    fontWeight: '700',
    color: '#181818',
  },
  Textcard6: {
    fontSize: scale(13),
    marginHorizontal: 20,
    marginTop: 5,
    fontWeight: '700',
    color: '#181818',
  },
  Textcard7: {
    fontSize: scale(13),
    marginHorizontal: 18,
    marginTop: 5,
    fontWeight: '700',
    color: '#181818',
  },

  Card2: {
    width: 180,
    height: 111,
    borderWidth: 0.6,
    borderRadius: 20,
    borderColor: '#00A170',
    backgroundColor: '#FFFFFF',
    elevation: 7,
    marginTop: 25,
    marginHorizontal: 4,

  },
  cardContainer2: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-evenly',
  },
  cardContainer3: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-evenly',
  },
  cardContainer4: {
    flexDirection: 'row',
    marginTop: 25,
    marginHorizontal: moderateScale(10)
  },
  imageLine2: {
    marginHorizontal: 60,
    marginTop: 15
  }
})