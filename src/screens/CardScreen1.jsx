import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default function CardScreen1() {
    return (
        <View>
            <ScrollView style={styles.container}>
                <LinearGradient colors={['#A8C8D7', '#80DEC3']} style={styles.Headercontainer}>
                <View style={styles.RowText}>
                    <MaterialIcons name={"arrow-back-ios"} size={24} color={"#505050"} style={styles.ArrowIcon} />
                    <Text style={styles.HomeText}>Company Info</Text>
                    </View>
                    <View style={styles.CenterUnderLineView}>
          <View style={styles.underline}></View>
          </View>
                </LinearGradient>


                <View style={styles.EinHash}>
                    <Text style={styles.EinText}>EIN</Text>
                    <Feather name={"hash"} size={24} color={"#505050"} style={styles.HashIcon} />
                </View>
                <View style={styles.FillBoxView}>
                    <View style={styles.FillBox1}>
                        <Text style={styles.TextXX}>XX-XXXXXXX</Text>
                    </View>
                </View>
                <View style={styles.SmallBox1}>
                    <Text style={styles.TextSmall1}>View File</Text>
                </View>


                <View style={styles.authorityHash}>
                    <Text style={styles.AuthorityText}>Authority </Text>
                    <Feather name={"hash"} size={24} color={"#505050"} style={styles.HashIcon} />
                </View>
                <View style={styles.FillBoxView}>
                    <View style={styles.FillBox3}>
                        <Text style={styles.TextXX}></Text>
                    </View>
                </View>
                <View style={styles.SmallBox3}>
                    <Text style={styles.TextSmall1}>Upload File</Text>
                </View>


                <View style={styles.BradstreetHash}>
                    <Text style={styles.EinText}>Bradstreet</Text>
                    <Feather name={"hash"} size={24} color={"#505050"} style={styles.HashIcon} />
                </View>
                <View style={styles.FillBoxView}>
                    <View style={styles.FillBox1}>
                        <Text style={styles.TextXX}>XXXXXXXXX</Text>
                    </View>
                </View>
                <View style={styles.SmallBox1}>
                    <Text style={styles.TextSmall1}>View File</Text>
                </View>


                <View style={styles.MCHash}>
                    <Text style={styles.EinText}>MC</Text>
                    <Feather name={"hash"} size={24} color={"#505050"} style={styles.HashIcon} />
                </View>
                <View style={styles.FillBoxView}>
                    <View style={styles.FillBox1}>
                        <Text style={styles.TextXX}>XXXXXXXXX</Text>
                    </View>
                </View>
                <View style={styles.SmallBox7}>
                    <Text style={styles.TextSmall1}>Upload File</Text>
                </View>


                <View style={styles.DotHash}>
                    <Text style={styles.EinText}>DOT</Text>
                    <Feather name={"hash"} size={24} color={"#505050"} style={styles.HashIcon} />
                </View>
                <View style={styles.FillBoxView}>
                    <View style={styles.FillBox5}>
                        <Text style={styles.TextXX}>XXXXXXX</Text>
                    </View>
                </View>
                <View style={styles.UPSaveContainer}>
                    <View style={styles.SmallBox5}>
                        <Text style={styles.TextSmall5}>Upload File</Text>
                    </View>
                    <View style={styles.SmallBox6}>
                        <Text style={styles.TextSmall6}>save</Text>
                    </View>
                </View>
                <Text style={styles.resumeText}>Resume</Text>

                <View style={styles.ResumeView}>
                    <View style={styles.verifyConatiner}>
                        <Image source={require("../screens/Assets/UploadArrow.png")} style={styles.imageLine} />
                        <Text style={styles.verifyText}>Upload Resume</Text>
                    </View>
                </View>

                <Text style={styles.OtherText}>Other:</Text>

                <View style={styles.Otherview}>
                    <View style={styles.OtherCard1}>
                        <Text style={styles.OtherTextBox}>Title</Text>
                    </View>
                    <View style={styles.OtherCard2}>
                        <Text style={styles.OtherTextBox}>Add Description</Text>
                    </View>
                </View>

                <View style={styles.UPSaveContainer}>
                    <View style={styles.UploadContainer}>
                        <Text style={styles.TextSmall5}>Upload File</Text>
                    </View>
                    <View style={styles.SaveContainer}>
                        <Text style={styles.TextSmall6}>save</Text>
                    </View>
                </View>
                <View>
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
    },
    RowText:{
        flexDirection: 'row',
      },
    ArrowIcon: {
        marginHorizontal: moderateScale(15),
        marginTop: verticalScale(52)
    },

    HomeText: {
        color: '#005C89',
        fontSize: 25,
        fontWeight: '700',
        marginHorizontal: moderateScale(60),
        marginTop: verticalScale(50),
    },
    CenterUnderLineView:{
        flex: 1,
        alignItems: 'center'
      },
      underline: {
          width: '30%',
          height: 4,
          backgroundColor: '#005C89',
          marginTop: 5,
      },
    EinHash: {
        flexDirection: 'row',
        marginHorizontal: moderateScale(40),
        marginTop: verticalScale(40)
    },
    EinText: {
        fontSize: scale(18),
        fontWeight: 'bold',
        color: '#757575',

    },
    FillBoxView: {
        flex: 1,
        alignItems: 'center',
    },
    FillBox1: {
        backgroundColor: '#F1F1F1',
        width: 320,
        height: 69,
        elevation: 5,
        borderRadius: 30,
        marginTop: 7
    },
    TextXX: {
        fontSize: 20,
        fontWeight: '500',
        color: '#111111',
        marginHorizontal: 20,
        marginTop: 20
    },
    SmallBox1: {
        backgroundColor: '#F1F1F1',
        width: 120,
        height: 60,
        elevation: 5,
        borderRadius: 25,
        marginHorizontal: 240,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#00A170'

    },
    TextSmall1: {
        fontSize: 17,
        fontWeight: '500',
        color: '#111111',
        marginHorizontal: 23,
        marginTop: 16,
    },
    authorityHash: {
        flexDirection: 'row',
        marginHorizontal: 40,
        marginTop: 15
    },
    AuthorityText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#757575',
    },
    FillBox3: {
        backgroundColor: '#757575',
        width: 320,
        height: 69,
        elevation: 5,
        borderRadius: 30,
        marginTop: 7
    },
    SmallBox3: {
        backgroundColor: '#F1F1F1',
        width: 140,
        height: 60,
        elevation: 5,
        borderRadius: 25,
        marginHorizontal: 220,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#333333'
    },


    BradstreetHash: {
        flexDirection: 'row',
        marginHorizontal: 40,
        marginTop: 15
    },
    AuthorityText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#757575',
    },
    FillBox2: {
        backgroundColor: '#F1F1F1',
        width: 320,
        height: 69,
        elevation: 5,
        borderRadius: 30,
        marginHorizontal: 45,
        marginTop: 7
    },
    SmallBox2: {
        backgroundColor: '#F1F1F1',
        width: 120,
        height: 60,
        elevation: 5,
        borderRadius: 25,
        marginHorizontal: 240,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#00A170'
    },



    MCHash: {
        flexDirection: 'row',
        marginHorizontal: 40,
        marginTop: 15
    },
    AuthorityText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#757575',
    },
    FillBox2: {
        backgroundColor: '#F1F1F1',
        width: 320,
        height: 69,
        elevation: 5,
        borderRadius: 30,
        marginHorizontal: 45,
        marginTop: 7
    },
    SmallBox2: {
        backgroundColor: '#F1F1F1',
        width: 120,
        height: 60,
        elevation: 5,
        borderRadius: 25,
        marginHorizontal: 240,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#00A170'
    },


    DotHash: {
        flexDirection: 'row',
        marginHorizontal: 40,
        marginTop: 15
    },
    AuthorityText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#757575',
    },
    FillBox5: {
        backgroundColor: '#F1F1F1',
        width: 320,
        height: 69,
        elevation: 5,
        borderRadius: 30,
        marginHorizontal: 45,
        marginTop: 7,
        borderColor: '#00A170',
        borderWidth: 1,
    },
    SmallBox2: {
        backgroundColor: '#F1F1F1',
        width: 120,
        height: 60,
        elevation: 5,
        borderRadius: 25,
        marginHorizontal: 240,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#00A170'
    },
    UPSaveContainer: {
        flexDirection: 'row',
        marginHorizontal: 125
    },
    SmallBox5: {
        backgroundColor: '#F1F1F1',
        width: 120,
        height: 60,
        elevation: 5,
        borderRadius: 25,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: '#111111'
    },
    SmallBox6: {
        backgroundColor: '#007959',
        width: moderateScale(110),
        height: verticalScale(50),
        elevation: 5,
        borderRadius: 25,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    },
    TextSmall5: {
        fontSize: 19,
        color: '#757575',

    },
    TextSmall6: {
        fontSize: 20,
        color: 'white'
    },
    resumeText: {
        fontSize: 23,
        fontWeight: '600',
        color: '#757575',
        marginHorizontal: 40,
        marginTop: 50
    },
    ResumeView: {
        flex: 1,
        alignItems: 'center',
    },
    verifyConatiner: {
        width: 343.79,
        height: 59.73,
        backgroundColor: '#007959',
        borderRadius: 25,
        elevation: 4,
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    verifyText: {
        fontSize: 20.52,
        color: 'white',

    },
    imageLine: {
        marginEnd: 15,
    },

    OtherText: {
        fontSize: 23,
        fontWeight: '600',
        color: '#757575',
        marginHorizontal: 40,
        marginTop: 60,
    },
    Otherview:{
        flex:1,
        alignItems: 'center',
    },
    OtherCard1: {
        width: 320,
        height: 50,
        backgroundColor: '#D9D9D9',
        elevation: 5,
        borderRadius: 10,
        marginTop: 15,
    },

    OtherCard2: {
        width: 320,
        height: 50,
        backgroundColor: '#D9D9D9',
        elevation: 5,
        borderRadius: 10,
        marginTop: 15,
    },
    OtherTextBox: {
        fontSize: 18,
        fontWeight: '300',
        marginHorizontal: 25,
        marginTop: 13

    },
    SmallBox7: {
        backgroundColor: '#F1F1F1',
        width: 140,
        height: 60,
        elevation: 5,
        borderRadius: 25,
        marginHorizontal: 220,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#333333'
    },
    UploadContainer:{
        backgroundColor: '#F1F1F1',
        width: 120,
        height: 60,
        elevation: 5,
        borderRadius: 25,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: '#111111',
        marginBottom: verticalScale(60)
    },
    SaveContainer:{
        backgroundColor: '#007959',
        width: moderateScale(110),
        height: verticalScale(50),
        elevation: 5,
        borderRadius: 25,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginBottom: verticalScale(60)
    },
})