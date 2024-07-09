import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default function PermitScreen() {
    return (
        <ScrollView style={styles.container}>
            <LinearGradient colors={['#A8C8D7', '#80DEC3']} style={styles.Headercontainer}>
                <View style={styles.RowText}>
                    <MaterialIcons name={"arrow-back-ios"} size={24} color={"#505050"} style={styles.ArrowIcon} />
                    <Text style={styles.HomeText}>Permit Log Book</Text>
                </View>
                <View style={styles.CenterUnderLineView}>
            <View style={styles.underline}></View>
          </View>

            </LinearGradient>

            <Text style={styles.FirstText}> Contract Company/Application</Text>

            <View style={styles.ContainerView}>
                <View style={styles.FisrtContainer}>
                    <Text style={styles.ViewText}>View File</Text>
                </View>
            </View>

            <Text style={styles.FirstText}> Colliecense</Text>

            <View style={styles.ContainerView}>
                <View style={styles.UploadFileConatiner}>
                    <Image source={require("../screens/Assets/UploadArrow.png")} style={styles.imageLine} />
                    <Text style={styles.UploadResumeText}>Upload File</Text>
                </View>
            </View>


            <Text style={styles.FirstText}> Medical Card</Text>
            <View style={styles.ContainerView}>
                <View style={styles.UploadFileConatiner}>
                    <Image source={require("../screens/Assets/UploadArrow.png")} style={styles.imageLine} />
                    <Text style={styles.UploadResumeText}>Upload File</Text>
                </View>
            </View>

            <Text style={styles.FirstText}>Insurance</Text>

            <View style={styles.ContainerView}>
                <View style={styles.UploadFileConatiner}>
                    <Image source={require("../screens/Assets/UploadArrow.png")} style={styles.imageLine} />
                    <Text style={styles.UploadResumeText}>Upload File</Text>
                </View>
            </View>

            <Text style={styles.FirstText}>IFTA Registration</Text>
            <View style={styles.ContainerView}>
                <View style={styles.UploadFileConatiner}>
                    <Image source={require("../screens/Assets/UploadArrow.png")} style={styles.imageLine} />
                    <Text style={styles.UploadResumeText}>Upload File</Text>
                </View>
            </View>

            <Text style={styles.FirstText}>Twic Card</Text>
            <View style={styles.ContainerView}>
                <View style={styles.UploadFileConatiner}>
                    <Image source={require("../screens/Assets/UploadArrow.png")} style={styles.imageLine} />
                    <Text style={styles.UploadResumeText}>Upload File</Text>
                </View>
            </View>

            <Text style={styles.FirstText}>CAB Card</Text>
            <View style={styles.ContainerView}>
                <View style={styles.UploadFileConatiner}>
                    <Image source={require("../screens/Assets/UploadArrow.png")} style={styles.imageLine} />
                    <Text style={styles.UploadResumeText}>Upload File</Text>
                </View>
            </View>


            <Text style={styles.FirstText}>Authority Letter</Text>
            <View style={styles.ContainerView}>
                <View style={styles.UploadFileConatiner}>
                    <Image source={require("../screens/Assets/UploadArrow.png")} style={styles.imageLine} />
                    <Text style={styles.UploadResumeText}>Upload File</Text>
                </View>
            </View>


            <Text style={styles.FirstText}>UCR</Text>
            <View style={styles.ContainerView}>
                <View style={styles.UploadFileConatiner}>
                    <Image source={require("../screens/Assets/UploadArrow.png")} style={styles.imageLine} />
                    <Text style={styles.UploadResumeText}>Upload File</Text>
                </View>
            </View>


            <Text style={styles.FirstText}>Empty Scale Ticket</Text>
            <View style={styles.ContainerView}>
                <View style={styles.UploadFileConatiner}>
                    <Image source={require("../screens/Assets/UploadArrow.png")} style={styles.imageLine} />
                    <Text style={styles.UploadResumeText}>Upload File</Text>
                </View>
            </View>


            <Text style={styles.FirstText}>Truck Inspection</Text>
            <View style={styles.ContainerView}>
                <View style={styles.UploadFileConatiner}>
                    <Image source={require("../screens/Assets/UploadArrow.png")} style={styles.imageLine} />
                    <Text style={styles.UploadResumeText}>Upload File</Text>
                </View>
            </View>

            <Text style={styles.SecondText}>HighUse Stater Permit</Text>
            <View style={styles.ContainerView}>
                <View style={styles.HigherUsePermitContainer}>
                    <TextInput style={styles.Textinput} placeholder='Select your state' placeholderTextColor={"#757575"} />
                    <Feather name={"arrow-down"} size={24} color={"#757575"} style={styles.inputIcon} />
                </View>
            </View>

            <Text style={styles.OtherText}>Other:</Text>
            <View style={styles.ContainerView}>
                <View style={styles.OtherCard1}>
                    <Text style={styles.OtherTextBox}>Title</Text>
                </View>
                <View style={styles.OtherCard2}>
                    <Text style={styles.OtherTextBox}>Add Description</Text>
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

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Headercontainer: {
        width: '100%',
        height: 120,
        backgroundColor: '#FFFFFF',
        elevation: 15,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    RowText: {
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
        marginHorizontal: moderateScale(55),
        marginTop: verticalScale(50),
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
    FirstText: {
        fontSize: scale(18),
        fontWeight: 'bold',
        marginTop: 40,
        marginHorizontal: moderateScale(30),
        color: '#757575'
    },
    ContainerView: {
        Flex: 1,
        alignItems: 'center',
    },
    FisrtContainer: {
        width: 350,
        height: 60,
        backgroundColor: '#00A170',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        elevation: 5,
    },
    ViewText: {
        fontSize: scale(17),
        color: 'white',

    },
    UploadFileConatiner: {
        width: 350,
        height: 60,
        backgroundColor: '#00A170',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        elevation: 5,
        flexDirection: 'row',
    },
    UploadResumeText: {
        fontSize: scale(17),
        color: 'white',
    },
    imageLine: {
        marginEnd: 15,
    },

    SecondText: {
        fontSize: scale(18),
        fontWeight: 'bold',
        marginTop: verticalScale(46),
        marginHorizontal: moderateScale(30),
        color: '#757575'
    },

    HigherUsePermitContainer: {
        width: 340,
        height: 60,
        borderWidth: 2,
        borderColor: '#00A170',
        borderRadius: 10,
        marginTop: 15,
        flexDirection: 'row',
    },

    Textinput: {
        flex: 1,
        fontSize: 16,
        color: '#757575',
        marginHorizontal: 15
    },

    OtherText: {
        fontSize: scale(18),
        fontWeight: '600',
        color: '#757575',
        marginTop: verticalScale(46),
        marginHorizontal: moderateScale(30),
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
        marginTop: 13,
        color: '#606060'
    },

    UPSaveContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: verticalScale(25)

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
        shadowOffset: '#111111',
        marginBottom: verticalScale(60)
    },
    SmallBox6: {
        backgroundColor: '#007959',
        width: 120,
        height: 60,
        elevation: 5,
        borderRadius: 25,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginBottom: verticalScale(60)
    },
    TextSmall5: {
        fontSize: 19,
        color: '#757575',
    },
    TextSmall6: {
        fontSize: 20,
        color: 'white'
    },

    inputIcon: {
        marginLeft: 20,
        marginRight: 10,
        marginTop: 15
    },
})