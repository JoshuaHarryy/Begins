import { StyleSheet, Text, View, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import useOrientation from '../Hooks/useOrientation';
import { useNavigation } from '@react-navigation/native';



export default function OtherAccountsScreens() {
    const orientation = useOrientation();
    const navigation = useNavigation();
    return (
        <View>
            <ScrollView style={styles.container}>
                <LinearGradient colors={['#A8C8D7', '#80DEC3']} style={styles.Headercontainer}>
                    <View style={styles.RowText}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <MaterialIcons name={"arrow-back-ios"} size={24} color={"#505050"} style={styles.ArrowIcon} />
                        </TouchableOpacity>
                        <Text style={styles.HomeText}>Other Accounts Info</Text>
                    </View>
                    <View style={styles.CenterUnderLineView}>
                        <View style={styles.underline}></View>
                    </View>
                </LinearGradient>

                <Text style={styles.TextSave}>Save Login Info</Text>
                <Text style={styles.WebsiteText}>Website URL</Text>

                <SafeAreaView style={styles.httpscontainer}>
                    <View style={styles.Https}>
                        <Text style={styles.httpsText}> https://</Text>
                    </View>
                    <View style={styles.LinkGoesBox}>
                        <Text style={styles.httpsText}> Link goes here</Text>
                    </View>
                </SafeAreaView>


                <View style={styles.inputView}>
                    <View style={styles.inputContainer}>
                        <AntDesign name={"mail"} size={24} color={"#757575"} style={styles.inputIcon} />
                        <TextInput style={styles.Textinput} placeholder='Username/Email' placeholderTextColor={"#757575"} />
                    </View>
                    <View style={styles.inputContainer2}>
                        <Fontisto name={"locked"} size={24} color={"#757575"} style={styles.inputIcon} />
                        <TextInput style={styles.Textinput} placeholder='Password' secureTextEntry placeholderTextColor={"#757575"} />
                    </View>
                </View>

                <View style={orientation === 'landscape' ? styles.SaveViewContainerLandscape : styles.SaveViewContainerPortrait}>
                    <View style={styles.SaveBox}>
                        <Text style={styles.SaveText}>Save</Text>
                    </View>
                </View>

                <View style={styles.Imagecontainer}>
                    <Ionicons name={"add-circle-outline"} size={scale(24)} color={"#00A170"} style={styles.AddIcon} />
                    <Text style={styles.ImageText}>Add Account</Text>
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
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        position: 'relative',
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
        position: 'absolute', // Absolute positioning
        left: '50%', // Centers the text horizontally based on the container
        transform: [{ translateX: -114 }], // Adjusts the centering
        top: 52, // Align the text vertically as needed
        // Other styling for the text
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

    TextSave: {
        fontSize: scale(23),
        marginHorizontal: 30,
        marginTop: 50,
        fontWeight: 'bold',
        color: '#00A170'
    },
    WebsiteText: {
        marginHorizontal: 35,
        marginTop: 40,
        fontSize: 17,
        fontWeight: '500',
        color: 'grey'

    },
    Https: {
        width: 77,
        height: 55,
        borderRadius: 20,
        backgroundColor: 'white',
        elevation: 2,


    },
    httpsText: {
        fontSize: 17,
        marginHorizontal: 5,
        marginTop: 13,
        color: '#6D7280'
    },
    httpscontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    LinkGoesBox: {
        width: 262,
        height: 55,
        backgroundColor: '#DCFDF3',
        borderRadius: 20,
        elevation: 2,
    },
    inputView: {
        flex: 1,
        alignItems: 'center',
    },
    inputContainer: {
        backgroundColor: '#F5F5F5',
        flexDirection: 'row',
        borderRadius: 20,
        width: 343,
        height: 66,
        elevation: 2,
        alignItems: 'center',
        marginTop: 30,
        borderWidth: 0.7,
        borderColor: '#757575',
        marginBottom: verticalScale(5)
    },

    Textinput: {
        flex: 1,
        fontSize: 16,
        color: '#757575'
    },

    inputContainer2: {
        backgroundColor: '#F5F5F5',
        flexDirection: 'row',
        borderRadius: 20,
        width: 343,
        height: 66,
        elevation: 2,
        alignItems: 'center',
        borderWidth: 0.7,
        borderColor: '#757575',
    },

    inputIcon: {
        marginLeft: 20,
        marginRight: 10,
    },
    SaveViewContainerLandscape:{
        alignItems: 'flex-end',
        marginRight: moderateScale(230),
        marginTop: verticalScale(10)
    },
    SaveViewContainerPortrait: {
        alignItems: 'flex-end',
        marginRight: moderateScale(30)
    },

    SaveBox: {
        width: 110,
        height: 55,
        backgroundColor: '#00A170',
        borderRadius: 20,
        marginTop: 12,
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center',

    },
    SaveText: {
        fontSize: 18,
        color: 'white',
    },
    Imagecontainer: {
        flexDirection: 'row',
        marginTop: 40,
        marginHorizontal: 40,
        marginBottom: verticalScale(40)
    },
    AddIcon: {
        marginHorizontal: 10,
        marginTop: 3

    },
    ImageText: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#00A170'
    },
})