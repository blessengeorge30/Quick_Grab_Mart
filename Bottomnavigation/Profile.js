import React from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
// import { PRODUCT_PROFILEITEMS } from "../Components/profileitemlist";


const Profile = () => {
    const renderItem = (item) => {
        return (

            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <View>
                    <View style={{ flexDirection: 'row', }}>
                        <Image style={{ height: 30, width: 30, marginLeft: 30, marginVertical: 15, }} source={item.image} />

                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, marginLeft: 15, marginTop: 15 }}>{item.name}</Text>
                    </View>
                    <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 15, position: 'absolute', marginTop: 34, marginLeft: 75 }}>{item.name1}</Text>

                    <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'white', marginHorizontal: 10 }}></View>
                </View>
            </View>
        );

    };
    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={require('../assets/background1.jpg')}
                style={styles.backgroundImage}>
                <View style={{ marginTop: 50, marginBottom: 70 }}>
                    <View style={{ flex: 1 }}>

                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 4 }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white',marginLeft:160,marginRight:75 }}>Profile</Text>
                        <TouchableOpacity >
                            <Image source={require('../assets/bell.png')} style={{ height: 25, width: 25 ,marginRight:14,tintColor:'black'}} />

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button1}>
                            <Image source={require('../assets/menu.png')} style={{ height: 15, width: 15, tintColor: 'white' }} />

                        </TouchableOpacity>
                       
                        
                    </View>
                </View>
            </ImageBackground>
            <View style={{ height: 1000, backgroundColor: '#e6e9eb', borderRadius: 15, }}>
                <View style={styles.headercard}>
                    <View style={{ flexDirection: 'row', marginTop: 30, marginBottom: 5 }}>
                        <View style={{ flex: 1 }}>
                            <Image source={require('../assets/blessen.jpg')}
                                style={styles.logo}>
                            </Image>
                        </View>
                        <View style={{ marginTop: 28, marginRight: 95 }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>BLESSEN GEORGE</Text>
                            <Text style={{ fontSize: 16, color: 'grey' }}>ID: 8526974316</Text>

                        </View>
                    </View>
                    <View >
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccd3d6' }}>
                            <Text style={styles.cardtext}>Personal Information</Text>
                        </View>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccd3d6', flexDirection: "row" }}>
                            <Text style={styles.cardtext1}>Account settings</Text>
                            <Text style={styles.cardtext2}>Domain IES20</Text>
                        </View>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccd3d6', flexDirection: "row" }}>
                            <Text style={styles.cardtext1}>Email</Text>
                            <Text style={styles.cardtext3}>         George30@gmail.com</Text>
                        </View>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccd3d6', flexDirection: "row" }}>
                            <Text style={styles.cardtext1}>Mobile Number</Text>
                            <Text style={styles.cardtext2}>+91 8137066525</Text>
                        </View>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccd3d6' }}>
                            <Text style={styles.cardtext}>Course Info</Text>
                        </View>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccd3d6', flexDirection: "row" }}>
                            <Text style={styles.cardtext1}>location center</Text>
                            <Text style={styles.cardtext2}>Thrissur, Kearla</Text>
                        </View>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccd3d6', flexDirection: "row" }}>
                            <Text style={styles.cardtext1}>Specialization</Text>
                            <Text style={styles.cardtext2}>  React-native</Text>
                        </View>
                        <View style={{  flexDirection: "row" }}>
                            <Text style={styles.cardtext1}>Expiry Date</Text>
                            <Text style={styles.cardtext2}>      25th December</Text>
                        </View>
                    </View>
             
                </View>
{/*                
               <View style={styles.button3}>
               <TouchableOpacity style={styles.button4}>
                
                            <Image source={require('../assets/creditcard.png')} style={{ height: 25, width: 25, tintColor: 'white' }} />

                        </TouchableOpacity>
                    <Text style={{ color:'white',fontSize:20,marginVertical:25}}>Custom payment </Text>
                    </View> */}
              

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: 'black',
        flex: 1
    },
    logo: {
        height: 100,
        width: 100,
        marginLeft: 25,
        marginRight:25

    },
    backgroundImage: {
        height: 185
    },
    headercard: {
        borderWidth: 0,
        width: '89%',
        height: 640,
        backgroundColor: 'white',
        marginTop: -65,
        marginHorizontal: 22,
        borderRadius: 30,
        elevation: 15


    },
    cardtext: {
        marginVertical: 25,
        marginHorizontal: 35,
        color: '#000305',
        fontSize: 20,
        fontWeight: 'bold'
    },
    cardtext1: {
        marginVertical: 15,
        marginHorizontal: 20,
        color: '#000305',
        fontSize: 15,
        //    fontWeight:'bold'
    },
    cardtext2: {
        marginVertical: 15,
        marginHorizontal: 50,
        color: '#000305',
        fontSize: 16,
        fontWeight: 'bold'
    },
    cardtext3: {
        marginVertical: 15,
        marginHorizontal: 75,
        color: '#000305',
        fontSize: 16,
        fontWeight: 'bold'
    },
    button1: {
        height: 35,
        width: 35,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'black',
        paddingVertical: 8,
        flexDirection: "row",
        borderRadius: 5,
        justifyContent: 'center',


    },
  
    button2: {
        height: 80,
        width: '85%',
        borderColor: 'green',
        borderWidth: 2,
        backgroundColor: 'green', 
        borderRadius: 10,
        alignItems:"center",
        justifyContent: 'center',
        marginLeft: 30,
        marginVertical:15
    },
    button3: {
        flexDirection:'row',
        height: 80,
        width: '85%',
        borderColor: '#01c459',
        borderWidth: 2,
        backgroundColor: '#01c459', 
        borderRadius: 10,
        marginLeft: 30,
        marginVertical:15,
        
    },
    button4: {
        height: 45,
        width: 45,
        borderColor: '#017635',
        borderWidth: 1,
        backgroundColor: '#01c459',
        paddingVertical: 8,
        flexDirection: "row",
        borderRadius: 5,
        marginvertical:20,
        marginTop:16,
        marginHorizontal:25,
        justifyContent: 'center',


    },
    bank: {
        height: 65,
        width: 65,
        marginTop: 30,
        marginLeft: 40,

    },
    bank1: {
        height: 45,
        width: 45,
        marginTop: 38,
        marginLeft: 60,

    },
    bank2: {
        height: 50,
        width: 50,
        marginTop: 38,
        marginLeft: 58,

    },


})
export default Profile;