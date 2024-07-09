import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default function AccountScreen() {
  return (
    <View>
      <ScrollView style={styles.container}>
        <LinearGradient colors={['#A8C8D7', '#80DEC3']} style={styles.Headercontainer}>
          <View style={styles.RowText}>
            <MaterialIcons name={"arrow-back-ios"} size={24} color={"#505050"} style={styles.ArrowIcon} />
            <Text style={styles.HomeText}>Account Info & Settings</Text>
          </View>
          <View style={styles.CenterUnderLineView}>
            <View style={styles.underline}></View>
          </View>

        </LinearGradient>

        <Text style={styles.NameText}>Name</Text>
        <View style={styles.BoxesView}>
          <View style={styles.BoxContainer}>
            <Text style={styles.johndoe}>John Doe</Text>
          </View>
        </View>

        <Text style={styles.addressText}>Address</Text>
        <View style={styles.BoxesView}>
          <View style={styles.BoxContainer2}>
            <Text style={styles.johndoe}>123 Main Street
              Anytown, USA
              12345</Text>
          </View>
        </View>
        <Text style={styles.PhoneText}>Phone </Text>
        <View style={styles.BoxesView}>
          <View style={styles.BoxContainer}>
            <Text style={styles.johndoe}>000 000 0000</Text>
          </View>
        </View>

        <Text style={styles.PhoneText}>Email </Text>
        <View style={styles.BoxesView}>
          <View style={styles.BoxContainer}>
            <Text style={styles.johndoe}>johndoe@email.com</Text>
          </View>
        </View>

        <View style={styles.MCHash}>
          <Text style={styles.AuthorityText}>MC</Text>
          <Feather name={"hash"} size={24} color={"#505050"} style={styles.HashIcon} />
        </View>
        <View style={styles.BoxesView}>
          <View style={styles.FillBox2}>
            <Text style={styles.Text}>XXXXXXXXX</Text>
          </View>
        </View>

        <View style={styles.DotHash}>
          <Text style={styles.DotText}>DOT</Text>
          <Feather name={"hash"} size={24} color={"#505050"} style={styles.HashIcon} />
        </View>
        <View style={styles.BoxesView}>
          <View style={styles.FillBox3}>
            <Text style={styles.Text2}>XXXXXXXXX</Text>
          </View>
        </View>


        <View style={styles.SupportHash}>
          <Text style={styles.SupportText}>support</Text>
          <Feather name={"hash"} size={24} color={"#505050"} style={styles.HashIcon} />
        </View>
        <View style={styles.BoxesView}>
          <View style={styles.FillBox4}>
            <Text style={styles.Text3}>XXXXXXXXX</Text>
          </View>
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
  },
  RowText: {
    flexDirection: 'row',
  },
  ArrowIcon: {
    marginHorizontal: 15,
    marginTop: 60,
    marginLeft: verticalScale(15)
  },

  HomeText: {
    color: '#005C89',
    fontSize: 25,
    fontWeight: '700',
    marginHorizontal: moderateScale(20),
    marginTop: 60,
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
    marginTop: 14,
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
})