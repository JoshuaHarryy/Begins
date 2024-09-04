import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import useOrientation from './src/Hooks/useOrientation';
import firebase from 'firebase/app';
import auth from '@react-native-firebase/auth';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
useState


export default function HomeScreen() {

  const [loading, setLoading] = useState(true)
  const orientation = useOrientation();
  const navigation = useNavigation();

 useEffect(() => {
  const loadData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  loadData().then(() => {
    setLoading(false);
  });
}, []);

  if (loading) {
    return (
      <SkeletonPlaceholder>
        <View style={styles.skeletonHeader} />
         {/* Card 1 and 2 */}
      <View style={styles.cardContainer}>
        <View style={styles.skeletonCard} />
        <View style={styles.skeletonCard} />
      </View>

      {/* Card 3 and 4 */}
      <View style={styles.cardContainer2}>
        <View style={styles.skeletonCard} />
        <View style={styles.skeletonCard} />
      </View>

      {/* Card 5 and 6 */}
      <View style={styles.cardContainer3}>
        <View style={styles.skeletonCard} />
        <View style={styles.skeletonCard} />
      </View>

      {/* Last single card, aligned to the left */}
      <View style={styles.cardContainer4}>
        <View style={styles.skeletonCardSingle} />
      </View>
      
      </SkeletonPlaceholder>
    );
  }

  return (
    <ScrollView>
      <View>
        <View style={styles.Headercontainer}>
          <View style={styles.RowText}>
            <Image source={require("../Begins/src/screens/Assets/Settings.png")} style={styles.imageLine} />
            <Text style={orientation === 'landscape' ? styles.HomeTextLandscape : styles.HomeTextPortrait}>Home</Text>
          </View>
          <View style={styles.CenterUnderLineView}>
            <View style={styles.underline}></View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Company")}>
            <View style={orientation === 'landscape' ? styles.Card1Landscape : styles.Card1Portrait}>
              <Image source={require("../Begins/src/screens/Assets/infoicon.png")} style={styles.imageLine2} />
              <View style={styles.TextcardView}>
                <Text style={styles.Textcard}>Company Info</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Accounts")}>
            <View style={orientation === 'landscape' ? styles.Card2Landscape : styles.Card2Portrait}>
              <Image source={require("../Begins/src/screens/Assets/user.png")} style={styles.imageLine2} />
              <View style={styles.TextcardView}>
                <Text style={styles.Textcard2}>Account Info & Settings</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>


        <View style={styles.cardContainer2}>
          <TouchableOpacity onPress={() => navigation.navigate("Permit")}>
            <View style={orientation === 'landscape' ? styles.Card1Landscape : styles.Card1Portrait}>
              <Image source={require("../Begins/src/screens/Assets/ebook.png")} style={styles.imageLine2} />
              <View style={styles.TextcardView}>
                <Text style={styles.Textcard3}>Permit Log Book</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("IFTA")}>
            <View style={orientation === 'landscape' ? styles.Card2Landscape : styles.Card2Portrait}>
              <Image source={require("../Begins/src/screens/Assets/tracking.png")} style={styles.imageLine2} />
              <View style={styles.TextcardView}>
                <Text style={styles.Textcard}>IFTA Tracking</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer3}>
          <TouchableOpacity onPress={() => navigation.navigate("Expense")}>
            <View style={orientation === 'landscape' ? styles.Card1Landscape : styles.Card1Portrait}>
              <Image source={require("../Begins/src/screens/Assets/expense.png")} style={styles.imageLine2} />
              <View style={styles.TextcardView}>
                <Text style={styles.Textcard5}>Expenses Report </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("ElectronicLog")}>
            <View style={orientation === 'landscape' ? styles.Card2Landscape : styles.Card2Portrait}>
              <Image source={require("../Begins/src/screens/Assets/ebook.png")} style={styles.imageLine2} />
              <View style={styles.TextcardView}>
                <Text style={styles.Textcard6}>Electronic Log Book</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer4}>
          <TouchableOpacity onPress={() => navigation.navigate("OtherInfo")}>
            <View style={orientation === 'landscape' ? styles.Card3Landscape : styles.Card3Portrait}>
              <Image source={require("../Begins/src/screens/Assets/lock.png")} style={styles.imageLine2} />
              <View style={styles.TextcardView}>
                <Text style={styles.Textcard7}>Other Accounts Info</Text>
              </View>
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
    position: 'relative'
  },
  RowText: {
    flexDirection: 'row',
  },
  HomeTextLandscape: {
    color: '#00A170',
    fontSize: 25,
    fontWeight: '700',
    position: 'absolute',
    left: '50%', 
    transform: [{ translateX: -35 }], 
    top: 52, 
    

  },
  HomeTextPortrait: {
    color: '#00A170',
    fontSize: 25,
    fontWeight: '700',
    marginHorizontal: moderateScale(94),
    marginTop: 60,
  },
  CenterUnderLineView: {
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
  Card1Landscape: {
    width: '100%',
    height: 111,
    borderWidth: 0.6,
    borderRadius: 20,
    borderColor: '#00A170',
    backgroundColor: '#FFFFFF',
    marginTop: 25,
  },
  Card1Portrait: {
    width: 180,
    height: 111,
    borderWidth: 0.6,
    borderRadius: 20,
    borderColor: '#00A170',
    backgroundColor: '#FFFFFF',
    
    marginTop: 25,

  },
  Textcard: {
    fontSize: scale(12),
    fontWeight: '700',
    color: '#181818',
  },
  Textcard2: {
    fontSize: scale(12),
    fontWeight: '700',
    color: '#181818',
  },
  Textcard3: {
    fontSize: scale(12),
    fontWeight: '700',
    color: '#181818',
  },
  Textcard5: {
    fontSize: scale(12),
    fontWeight: '700',
    color: '#181818',
  },
  Textcard6: {
    fontSize: scale(12),
    fontWeight: '700',
    color: '#181818',
  },
  TextcardView: {
    fontSize: scale(12),
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    color: '#181818',
  },
  Textcard7: {
    fontSize: scale(12),
    fontWeight: '700',
    color: '#181818',
  },

  Card2Landscape: {
    width: '100%',
    height: 111,
    borderWidth: 0.6,
    borderRadius: 20,
    borderColor: '#00A170',
    backgroundColor: '#FFFFFF',
    marginTop: 25,
  },
  Card2Portrait: {
    width: 180,
    height: 111,
    borderWidth: 0.6,
    borderRadius: 20,
    borderColor: '#00A170',
    backgroundColor: '#FFFFFF',
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
    marginHorizontal: moderateScale(10),
    marginBottom: verticalScale(40)
  },
  imageLine2: {
    marginHorizontal: 60,
    marginTop: 15,
    marginBottom: 5
  },
  Card3Landscape: {
    width: 185,
    height: 111,
    borderWidth: 0.6,
    borderRadius: 20,
    borderColor: '#00A170',
    backgroundColor: '#FFFFFF',
    marginTop: 25,
    marginHorizontal: moderateScale(135)
  },
  Card3Portrait: {
    width: 180,
    height: 111,
    borderWidth: 0.6,
    borderRadius: 20,
    borderColor: '#00A170',
    backgroundColor: '#FFFFFF',
    marginTop: 25,
  },
  skeletonHeader: {
    width: '100%',
    height: 120,
    borderRadius: 20,
    marginBottom: 20,
  },
  skeletonCard: {
    width: 180,
    height: 111,
    borderRadius: 20,
    marginTop: 25,
    marginHorizontal: moderateScale(10),
    backgroundColor: '#E1E9EE',
  },
  skeletonCardSingle: {
    width: '47%',
    height: 105,
    borderRadius: 25,
    marginTop: 25,
    marginLeft: moderateScale(2), // Align the last card to the left
    backgroundColor: '#E1E9EE',
  },
})
