import React from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Homescreen from "./Router";




const Profile = () => {
    const navigation = useNavigation();
    const Homescreen = () => {
        navigation.navigate("Router")
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/background.jpg')}
                style={styles.backgroundImage}>
                    <View>
                    <Text style={{ color: 'white', fontSize: 35,marginVertical:85, alignSelf: 'center', fontWeight: "bold"  }}>Quick-Grab Mart </Text>
                    </View>

                <View style={{ marginTop: 400, alignItems: 'center', alignSelf: 'center' }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: 'white', fontSize: 20, marginHorizontal: 10, marginBottom: 5 }}>FOOD </Text>
                        <Text style={{ color: 'white', fontSize: 20, marginLeft: 20, marginBottom: 5 }}>INSTAMART </Text>
                        <Text style={{ color: 'white', fontSize: 20, marginLeft: 20, marginBottom: 5 }}>DINE IN </Text>

                    </View>

                    <View style={{ borderTopWidth: 2, borderColor: 'grey' }}>

                        <Text style={{ color: 'white', fontSize: 25, alignSelf: 'center', fontWeight: "bold" }}>Order from Top Restaurants</Text>

                    </View>
                </View>

                <View>
                    <TouchableOpacity style={styles.buttonView} onPress={Homescreen}>
                        <Text style={styles.buttontext}> Get Started </Text>
                    </TouchableOpacity>
                </View>






            </ImageBackground>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        height: 100,

        flex: 1
    },
    backgroundImage: {
        height: '100%',
        width: '100%',


    },
    logo: {
        height: 350,
        width: 350,
        marginBottom: 80,
        resizeMode: "contain",
        // marginLeft:45,

        alignSelf: "center"

    },
    logo1: {
        height: 15,
        width: 15,



    },
    inputView: {
        width: '70%',
        height: 65,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#012143',
        backgroundColor: '#011122',
        marginTop: 25,
        paddingLeft: 25,
        marginLeft: 10


    },
    inputView1: {
        width: '15%',
        height: 65,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#012143',
        backgroundColor: '#011122',
        marginTop: 25,
        paddingLeft: 10,
        marginLeft: 25


    },
    logo2: {
        height: 20,
        width: 20,




    },
    cardtext: {
        marginTop: 12,
        marginLeft: 24,
        color: 'white',
        fontSize: 18,
        marginRight: 110
    },

    buttonView: {
        width: '88%',
        height: 65,
        backgroundColor: 'white',
        marginTop: 25,
        borderRadius: 5,
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: "center",
        textAlignVertical: 'center',
        zIndex: 2,




    },
    buttonView1: {
        width: '80%',
        height: 35,
        backgroundColor: '#ebecf0',
        marginTop: 22,
        borderRadius: 8,
        alignSelf: "center",
        alignItems: 'center',
        textAlignVertical: 'center',
        paddingHorizontal: 40,
        flexDirection: "row",


    },


    buttontext: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center'


    },

    buttontext1: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 20


    },


})
export default Profile;
