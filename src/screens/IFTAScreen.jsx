import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useOrientation from '../Hooks/useOrientation';
import { useNavigation } from '@react-navigation/native';


export default function IFTAScreen() {
  const orientation = useOrientation();
  const navigation = useNavigation();

  return (
    <View>
       <ScrollView>
      <LinearGradient colors={['#A8C8D7', '#80DEC3']} style={styles.Headercontainer}>
      <View style={styles.RowText}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <MaterialIcons name={"arrow-back-ios"} size={24} color={"#505050"} style={styles.ArrowIcon}/>
      </TouchableOpacity>
      <Text style={styles.HeaderText}>IFTA Tracking</Text>
      <Ionicons name={"add-circle-outline"} size={24} color={"#505050"} style={styles.AddIcon}/>
      </View>
      <View style={styles.CenterUnderLineView}>
            <View style={styles.underline}></View>
          </View>
      </LinearGradient>

    <View style={styles.TripView}>
    <Text style={styles.TripText}>Trips 2024</Text>
    </View>

<View style={orientation === 'landscape' ? styles.ContainerViewLandscape : styles.ContainerViewPortrait}>
    <View style={orientation === 'landscape' ? styles.Underline1Landscape : styles.Underline1Portrait}></View>

    <View style={styles.TextContainer}>
      <View style={orientation === 'landscape' ? styles.TextContainerViewLandscape : null}>
      <Text style={styles.TextDallas}>Dallas, TX - Houston, TX</Text>
      </View>
      <MaterialIcons name={"arrow-forward-ios"} size={24} color={"#505050"} style={orientation === 'landscape' ? styles.ArrowIconForwardLandscape : styles.ArrowIconForwardPortrait}/>
    </View>
    <View style={styles.StringContainer}>
      <Text style={styles.StringNumber}>03748</Text>
      <Text style={styles.StringDate}>12/05/2024</Text>
    </View>

    <View style={orientation === 'landscape' ? styles.Underline2Landscape : styles.Underline2Portrait}></View>
    <View style={styles.TextContainer}>
      <View style={orientation === 'landscape' ? styles.TextContainerViewLandscape : null}> 
      <Text style={styles.TextDallas}>Dallas, TX - Salt Lake City, UT</Text>
      </View>
      <MaterialIcons name={"arrow-forward-ios"} size={24} color={"#505050"} style={orientation === 'landscape' ? styles.ArrowIconForwardLandscape : styles.ArrowIconForwardPortrait2}/>
    </View>
    <View style={styles.StringContainer}>
      <Text style={styles.StringNumber}>76833</Text>
      <Text style={styles.StringDate}>06/05/2024</Text>
    </View>

    <View style={orientation === 'landscape' ? styles.Underline2Landscape : styles.Underline2Portrait}></View>
    <View style={styles.TextContainer}>
    <View style={orientation === 'landscape' ? styles.TextContainerViewLandscape : null}> 
      <Text style={styles.TextDallas}>Jurupa Valley, CA - Dallas, TX</Text>
      </View>
      <MaterialIcons name={"arrow-forward-ios"} size={24} color={"#505050"} style={orientation === 'landscape' ? styles.ArrowIconForwardLandscape : styles.ArrowIconForwardPortrait3}/>
    </View>
    <View style={styles.StringContainer}>
      <Text style={styles.StringNumber}>73212</Text>
      <Text style={styles.StringDate}>02/04/2024</Text>
    </View>


    <View style={orientation === 'landscape' ? styles.Underline2Landscape : styles.Underline2Portrait}></View>
    <View style={styles.TextContainer}>
    <View style={orientation === 'landscape' ? styles.TextContainerViewLandscape : null}> 
      <Text style={styles.TextDallas}>Beaver, OR- Atlanta, GA</Text>
      </View>
      <MaterialIcons name={"arrow-forward-ios"} size={24} color={"#505050"} style={orientation === 'landscape' ? styles.ArrowIconForwardLandscape : styles.ArrowIconForwardPortrait4}/>
    </View>
    <View style={styles.StringContainer}>
      <Text style={styles.StringNumber}>1001</Text>
      <Text style={styles.StringDate}>20/03/2024</Text>
    </View>
    <View style={orientation === 'landscape' ? styles.Underline3Landscape : styles.Underline2Portrait}></View>
    </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    Headercontainer:{
        width: '100%' ,
        height: moderateScale(120),
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        elevation: 15,
    },
    RowText: {
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    },

    ArrowIcon:{
        marginTop: verticalScale(60),
        marginHorizontal: moderateScale(20),
        color: '#005C89',
    },
    HeaderText:{
        fontSize: scale(23),
        fontWeight: 'bold',
        color: '#005C89',
        marginHorizontal: moderateScale(44),
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
    AddIcon:{
        color: '#00A170',
        fontSize: scale(30),
        marginTop: verticalScale(54),
        marginHorizontal: moderateScale(20),
    },
    TripView:{
      alignItems: 'center',
    },
    TripText:{
        fontSize: scale(20),
        fontWeight: '900',
        color: '#000000',
        marginTop: verticalScale(20)
    },
    TextContainerViewLandscape:{
      flex: 1,
      
    },
    ContainerViewPortrait:{},

    Underline1Landscape:{
      width: moderateScale('80%'),
      height: verticalScale(1.5),
      backgroundColor: '#757575',
      marginHorizontal: moderateScale(32),
      marginTop: verticalScale(20)
    },
    Underline1Portrait:{
      width: moderateScale(310),
      height: verticalScale(1.5),
      backgroundColor: '#757575',
      marginHorizontal: moderateScale(32),
      marginTop: verticalScale(20)
      
    },
    TextContainer:{
      flexDirection: 'row',
    },
    TextDallas:{
      fontSize: scale(17),
      fontWeight: 'bold',
      color: '#000000',
      marginHorizontal: moderateScale(30),
      marginTop: verticalScale(7)
    },
    ArrowIconForwardLandscape:{
      marginHorizontal: moderateScale(30),
      color: '#757575',
      marginTop: verticalScale(7)
    },
    
    ArrowIconForwardPortrait:{
     marginHorizontal: moderateScale(60),
     color: '#757575',
     marginTop: verticalScale(7)
    },
    StringContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    StringNumber:{
      color: '#606060',
      fontSize: scale(14),
      marginHorizontal: moderateScale(30),
      marginTop: verticalScale(10),
    },
    StringDate:{
      color: '#606060',
      fontSize: scale(14),
      marginTop: verticalScale(10),
      marginRight: moderateScale(35)
    },
    ArrowIconForwardPortrait2: {
      marginHorizontal: moderateScale(17),
     color: '#757575',
     marginTop: verticalScale(7)
    },
    ArrowIconForwardPortrait3:{
      marginHorizontal: moderateScale(16),
     color: '#757575',
     marginTop: verticalScale(7)
    },
    ArrowIconForwardPortrait4:{
      marginHorizontal: moderateScale(66),
     color: '#757575',
     marginTop: verticalScale(7)
    },
    Underline2Landscape:{
      width: moderateScale('80%'),
      height: verticalScale(1.5),
      backgroundColor: '#757575',
      marginHorizontal: moderateScale(32),
      marginTop: verticalScale(5),
    },
    Underline2Portrait:{
      width: moderateScale(310),
      height: verticalScale(1.5),
      backgroundColor: '#757575',
      marginHorizontal: moderateScale(32),
      marginTop: verticalScale(5),
      
    },
    Underline3Landscape:{
      marginBottom: verticalScale(40),
      width: moderateScale('80%'),
      height: verticalScale(1.5),
      backgroundColor: '#757575',
      marginHorizontal: moderateScale(32),
      marginTop: verticalScale(5),
    },
})