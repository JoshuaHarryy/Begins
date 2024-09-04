import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Button, TextInput,Alert, 
    ActivityIndicator, Modal} from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import useOrientation from '../Hooks/useOrientation';
import { useNavigation } from '@react-navigation/native'
import DocumentPicker from 'react-native-document-picker';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useEffect } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
    ein: Yup.string()
      .min(3, 'Too Short!')
      .max(15, 'Too Long!')
      .required('please enter atleast 6 digits'),
    authority: Yup.string()
      .email('Invalid email')
      .required('Please enter your email address'),
    password: Yup.string()
      .min(6)
      .required('Please enter your password')
      .required(
        'Must contain minimum 6 characters'
      )
  
  });

export default function CardScreen1() {
    const [name, setName] = useState('');
    const [ein, setEin] = useState('');
    const [authority, setAuthority] = useState('');
    const [bradstreet, setBradstreet] = useState('');
    const [mcNumber, setMcNumber] = useState('');
    const [dotNumber, setDotNumber] = useState('');
    const [email, setEmail] = useState(auth().currentUser.email); 
    const [Loading, setLoading] = useState(false)
    
    useEffect(() => {
        const fetchUserData = async () => {
            const userId = auth().currentUser.uid;

            try {
                const userDoc = await firestore().collection('Users').doc(userId).get();

                if (userDoc.exists) {
                    const data = userDoc.data();
                    setEin(data.ein);
                    setAuthority(data.authority);
                    setBradstreet(data.bradstreet);
                    setMcNumber(data.mcNumber);
                    setDotNumber(data.dotNumber);
                    setEmail(data.email)
                }
            } catch (error) {
                Alert.alert('Error', error.message);
            }
        };

        fetchUserData();
    }, []);

    const handleUpdate = async () => {
        try {
            if (
                (ein && ein.length > 0) &&
                (authority && authority.length > 0) &&
                (bradstreet && bradstreet.length > 0) &&
                (mcNumber && mcNumber.length > 0) &&
                (dotNumber && dotNumber.length > 0)
            ) {
                const userId = auth().currentUser.uid;
                const userData = {
                    ein,
                    authority,
                    bradstreet,
                    mcNumber,
                    dotNumber,
                    updatedAt: firestore.FieldValue.serverTimestamp(),
                };

                await firestore().collection('Users').doc(userId).set(userData, { merge: true });
                Alert.alert("Profile updated successfully!");
            } else {
                Alert.alert('Please fill in all required fields');
            }
        } catch (error) {
            console.log(error);
            Alert.alert('Error', error.message);
        }
    };

    const [FileData, setFileData] = useState([]);

    const selectDoc = async () => {
        try {
            const response = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
                allowMultiSelection: true,
                copyTo: "cachesDirectory"
            });
            setFileData(response);
            console.log(response);
            Alert.alert('Selected')
        } catch (error) {
            if (DocumentPicker.isCancel(error))
                console.log("user cancelled the upload", error);
            else
                console.log(error);
        }
    };

    const uploadFiles = async () => {
        setLoading(true);
        try {
            if (FileData.length > 0) {
                const uploadTasks = FileData.map(async (file) => {
                    const reference = storage().ref('/Stocks/' + file.name);
                    await reference.putFile(file.fileCopyUri);
                    const downloadURL = await reference.getDownloadURL();
                    return { name: file.name, url: downloadURL };
                });

                const uploadedFiles = await Promise.all(uploadTasks);
                console.log("Uploaded files: ", uploadedFiles);


                saveFileLocationsToFirestore(uploadedFiles);
            } else {
                console.log("No files selected");
                Alert.alert('No file selected')
            }
        } catch (error) {
            console.log(error);
        }finally {
            setLoading(false);
        }
    };

    const saveFileLocationsToFirestore = async (uploadedFiles) => {
        try {
            const user = auth().currentUser;
            const userDoc = firestore().collection('Users').doc(user.uid);

            await userDoc.set({
                files: uploadedFiles,
                updatedAt: firestore.FieldValue.serverTimestamp(),
            }, { merge: true });

            console.log('File locations saved to Firestore successfully');
            Alert.alert('Uploaded successfully')
        } catch (error) {
            console.error(error);
        }
    };
    const orientation = useOrientation();
    const navigation = useNavigation();
    return (
        <Formik initialValues={{
            ein: '',
            authority: '',
            bradsheet: '',
            mcNumber: '',
            dotNumber: '',
          }}
            validationSchema={SignupSchema}
          >
      
            {({ values, errors, touched, handleChange, handleSubmit, setFieldTouched }) => (
        <View>
            <ScrollView style={styles.container}>
                <LinearGradient colors={['#A8C8D7', '#80DEC3']} style={styles.Headercontainer}>
                    <View style={styles.RowText}>
                        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                            <MaterialIcons name={"arrow-back-ios"} size={24} color={"#505050"} style={styles.ArrowIcon} />
                        </TouchableOpacity>
                        <Text style={orientation === 'landscape' ? styles.CompanyTextLandscape : styles.CompantTextPortrait}>Company Info</Text>
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
                        <TextInput style={styles.TextXX}
                             value={ein}
                             onChangeText={value => setEin(value)}
                             onBlur={() => setFieldTouched('ein')}
                            placeholder='XXX-XXXX,'
                        />
                    </View>
                </View>
                    {touched.ein && errors.ein && (
                <Text style={styles.errorText}>{errors.ein} </Text>
              )}

                <View style={orientation === 'landscape' ? styles.SmallBox1ViewLandscape : styles.SmallBox1ViewPortrait}>
                    <View style={orientation === 'landscape' ? styles.SmallBox1Landscape : styles.SmallBox1Portrait}>
                        <TouchableOpacity>
                            <Text style={styles.TextSmall1} onPress={selectDoc}>View File</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={orientation === 'landscape' ? styles.SmallBox1Landscape : styles.SmallBox1Portrait}>
                        <TouchableOpacity>
                            <Text style={styles.TextSmall1} onPress={uploadFiles}>Upload File</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {Loading && (
        <Modal transparent={true} animationType="slide">
          <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper}>
              <ActivityIndicator size="large" color="#00A170" />
              <Text style={{ marginTop: 10 }}>Uploading...</Text>
            </View>
          </View>
        </Modal>
      )}



                <View style={styles.authorityHash}>
                    <Text style={styles.AuthorityText}>Authority </Text>
                    <Feather name={"hash"} size={24} color={"#505050"} style={styles.HashIcon} />
                </View>
                <View style={styles.FillBoxView}>
                    <View style={styles.FillBox1}>
                    <TextInput style={styles.TextXX}
                            value={authority}
                            onChangeText={value => setAuthority(value)}
                            placeholder='XXX-XXXX,'
                        />
                    </View>
                </View>
                <View style={orientation === 'landscape' ? styles.SmallBox1ViewLandscape : styles.SmallBox1ViewPortrait}>
                    <View style={orientation === 'landscape' ? styles.SmallBox1Landscape : styles.SmallBox1Portrait}>
                        <TouchableOpacity>
                            <Text style={styles.TextSmall1} onPress={selectDoc}>View File</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={orientation === 'landscape' ? styles.SmallBox1Landscape : styles.SmallBox1Portrait}>
                        <TouchableOpacity>
                            <Text style={styles.TextSmall1} onPress={uploadFiles}>Upload File</Text>
                        </TouchableOpacity>
                    </View>
                </View>
               


                <View style={styles.BradstreetHash}>
                    <Text style={styles.EinText}>Bradstreet</Text>
                    <Feather name={"hash"} size={24} color={"#505050"} style={styles.HashIcon} />
                </View>
                <View style={styles.FillBoxView}>
                    <View style={styles.FillBox1}>
                    <TextInput style={styles.TextXX}
                            value={bradstreet}
                            onChangeText={value => setBradstreet(value)}
                            placeholder='XXX-XXXX,'
                        />
                    </View>
                </View>

                <View style={orientation === 'landscape' ? styles.SmallBox1ViewLandscape : styles.SmallBox1ViewPortrait}>
                    <View style={orientation === 'landscape' ? styles.SmallBox1Landscape : styles.SmallBox1Portrait}>
                        <TouchableOpacity>
                            <Text style={styles.TextSmall1} onPress={selectDoc}>View File</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={orientation === 'landscape' ? styles.SmallBox1Landscape : styles.SmallBox1Portrait}>
                        <TouchableOpacity>
                            <Text style={styles.TextSmall1} onPress={uploadFiles}>Upload File</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                

                <View style={styles.MCHash}>
                    <Text style={styles.EinText}>MC</Text>
                    <Feather name={"hash"} size={24} color={"#505050"} style={styles.HashIcon} />
                </View>
                <View style={styles.FillBoxView}>
                    <View style={styles.FillBox1}>
                    <TextInput style={styles.TextXX}
                            value={mcNumber}
                            onChangeText={value => setMcNumber(value)}
                            placeholder='XXX-XXXX,'
                        />
                    </View>
                </View>
                <View style={orientation === 'landscape' ? styles.SmallBox1ViewLandscape : styles.SmallBox1ViewPortrait}>
                    <View style={orientation === 'landscape' ? styles.SmallBox1Landscape : styles.SmallBox1Portrait}>
                        <TouchableOpacity>
                            <Text style={styles.TextSmall1} onPress={selectDoc}>View File</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={orientation === 'landscape' ? styles.SmallBox1Landscape : styles.SmallBox1Portrait}>
                        <TouchableOpacity>
                            <Text style={styles.TextSmall1} onPress={uploadFiles}>Upload File</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.DotHash}>
                    <Text style={styles.EinText}>DOT</Text>
                    <Feather name={"hash"} size={24} color={"#505050"} style={styles.HashIcon} />
                </View>
                <View style={styles.FillBoxView}>
                    <View style={styles.FillBox5}>
                    <TextInput style={styles.TextXX}
                            value={dotNumber}
                            onChangeText={value => setDotNumber(value)}
                            placeholder='XXX-XXXX,'
                        />
                    </View>
                </View>
                <View style={orientation === 'landscape' ? styles.UPSaveContainerLandscape : styles.UPSaveContainerPortrait}>
                    <View style={styles.SmallBox5}>
                        <Text style={styles.TextSmall5}>Upload File</Text>
                    </View>
                    <TouchableOpacity onPress={handleUpdate}> 
                    <View style={styles.SmallBox6}>
                        <Text style={styles.TextSmall6}>save</Text>
                    </View>
                        </TouchableOpacity>
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

                <View style={orientation === 'landscape' ? styles.UPSaveContainerLandscape : styles.UPSaveContainerPortrait}>
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
        )}
    </Formik>
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
        position: 'relative',
    },
    RowText: {
        flexDirection: 'row',
    },
    ArrowIcon: {
        marginHorizontal: moderateScale(15),
        marginTop: verticalScale(52)
    },
    CompanyTextLandscape: {
        color: '#005C89',
        fontSize: 25,
        fontWeight: '700',
        position: 'absolute', // Absolute positioning
        left: '50%', // Centers the text horizontally based on the container
        transform: [{ translateX: -80 }], // Adjusts the centering
        top: 52, // Align the text vertically as needed
        // Other styling for the text
    },
    CompantTextPortrait: {
        color: '#005C89',
        fontSize: 25,
        fontWeight: '700',
        marginHorizontal: moderateScale(60),
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
        color: 'black',
        marginHorizontal: 20,
        marginTop: 10
    },
    SmallBox1Landscape: {
        backgroundColor: '#F1F1F1',
        width: moderateScale(110),
        height: 60,
        elevation: 5,
        borderRadius: 25,
        marginHorizontal: moderateScale(420),
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#00A170',
        marginTop: verticalScale(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    SmallBox1ViewLandscape:{
        
    
        
        
    },
    SmallBox1ViewPortrait: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 40
    },
    SmallBox1Portrait: {
        backgroundColor: '#F1F1F1',
        width: moderateScale(110),
        height: 60,
        elevation: 5,
        borderRadius: 25,
        marginEnd: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#00A170',
        justifyContent: 'center',
        alignItems: 'center',

    },
    TextSmall1: {
        fontSize: 17,
        fontWeight: '500',
        color: '#111111',

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
    SmallBox3Landscape: {
        backgroundColor: '#F1F1F1',
        width: moderateScale(130),
        height: 60,
        elevation: 5,
        borderRadius: 25,
        marginHorizontal: moderateScale(400),
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#333333',
        marginTop: verticalScale(10)
    },
    SmallBox3Portrait: {
        backgroundColor: '#F1F1F1',
        width: 140,
        height: 60,
        elevation: 5,
        borderRadius: 25,
        marginHorizontal: moderateScale(205),
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#333333',
        justifyContent: 'center',
        alignItems: 'center',
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
    UPSaveContainerLandscape: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: verticalScale(200),
        marginTop: verticalScale(10)
    },
    UPSaveContainerPortrait: {
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
    Otherview: {
        flex: 1,
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
    UploadContainer: {
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
    SaveContainer: {
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
    loadingContainer: { 
        marginTop: 20
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    activityIndicatorWrapper:{
        backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    },
})