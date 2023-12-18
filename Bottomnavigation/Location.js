import React from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    StyleSheet,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    FlatList
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { PRODUCT_HOME } from "../Components/DiscoverFood";
import { LUNCH_ITEMS } from "../Components/Lunches";
import { PRODUCT_CARD } from "../Components/Recomended";
import Icon from 'react-native-ico-material-design';






const Homescreen = () => {
    const navigation = useNavigation();




    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={require('../assets/map.png')}>
                <View style={{ marginTop: 10, marginBottom: 20 }}>

                    <View style={{ marginTop: 20, marginLeft: 28, flexDirection: 'row' }}>
                       
                  

                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
                            <Image source={require('../assets/ICONS/back.png')} style={{ height: 15, width: 15, tintColor: 'black' }} />
                             
                        </TouchableOpacity>
                        <Text style={{ fontSize: 29, fontWeight: 'bold', color: 'grey', marginTop: 12,marginHorizontal:28 }}>QuickGrab Mart</Text>

                    </View>


                </View>
            </ImageBackground>
            <View style={{ marginTop:-15,height: 900, backgroundColor: 'white', borderRadius: 25 }}>
             
                    <View style={{borderBottomWidth:0.5 ,borderColor: "black" }}>
                        <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold', marginHorizontal: 75, marginTop: 30 }}> Estimated delivery time is 5:30</Text>
                        <Text style={{ color: '#333333', fontSize: 16, marginHorizontal: 55, marginBottom: 20 }}> your order is already on its way to you !</Text>
                    </View>
                    
                

                <View style={{borderBottomWidth:0.5 ,borderColor: "black" }}>
                    <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/ICONS/bill.png')} style={{ marginLeft:35 ,marginVertical:35 ,height: 35, width: 35, tintColor: 'black' }} />
                    <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold', marginHorizontal: 2, marginTop: 35 }}> ..........</Text>
                    <Image source={require('../assets/ICONS/cooking.png')} style={{ marginLeft:5 ,marginVertical:35 ,height: 40, width: 40,  }} />
                    <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold', marginHorizontal: 2, marginTop: 35 }}> ..........</Text>
                    <Image source={require('../assets/ICONS/scooter.png')} style={{ marginLeft:5 ,marginVertical:35 ,height: 40, width: 40,  }} />
                    <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold', marginHorizontal: 2, marginTop: 35 }}> ..........</Text>
                    <Image source={require('../assets/ICONS/tick.png')} style={{ marginLeft:5 ,marginVertical:35 ,height: 40, width: 40,  }} />

                    </View>
                </View>
               
               
                    <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.button2}  >
                        <Image source={require('../assets/bestlin1.png')} style={{ height: 55, width: 55 }} />
                    </TouchableOpacity>
                 
                    <View>
                        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginHorizontal: 5, marginTop: 30 }}> Edward Thomas</Text>
                        <Text style={{ color: '#333333', fontSize: 16, marginHorizontal: 5, marginVertical: 0 }}> Delivery Partner</Text>
                    </View>

                    <View>
                   
                    <TouchableOpacity style={styles.button3}  >
                            <Image source={require('../assets/heart.png')} style={{ height: 25, width: 25, tintColor: 'red' }} />
                        </TouchableOpacity>
                    </View>

                    <View>
                    <TouchableOpacity style={styles.button5}  >
                            <Image source={require('../assets/ICONS/dail.png')} style={{ height: 25, width: 25, tintColor: 'red' }} />
                        </TouchableOpacity>
                    </View>

                    </View>
                
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: 'black',
        flex: 2,
        position:'relative'

    },
    logo: {
        height: 125,
        width: 125,
        marginLeft: 22

    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
        height: 45,
        backgroundColor: '#333333',
        marginTop: 10,
        borderRadius: 6,
        marginLeft: 25,
    },

    searchIcon: {
        height: 18,
        width: 18,
        marginRight: 5,
        marginLeft: 15,
        tintColor: '#dddddd'
    },

    buttonView: {
        flex: 1,
        color: 'black',
        paddingLeft: 10,
    },
    button: {
        height: 35,
        width: 45,
        borderColor: 'white',
        elevation: 15,
        borderWidth: 1,
        backgroundColor: 'white',
        paddingVertical: 12,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginHorizontal: 18,
        marginBottom:350

    },
    button1: {
        height: 45,
        width: 65,
        borderColor: 'black',
        elevation: 15,
        borderWidth: 8,
        backgroundColor: 'white',
        paddingVertical: 12,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 90



    },
    button2: {
        height: 59,
        width: 59,
        borderColor: 'red',
        borderStyle: 'dotted',
        elevation: 35,
        borderWidth: 2,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: "row",
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 15,
        marginLeft:25,
        marginTop: 32,

    },
    button3: {
        height: 50,
        width: 50,
        borderColor: 'rgba(255,255,255,0.2)',
        borderStyle: 'dotted',
        elevation: 28,
        borderWidth: 2,
        backgroundColor: 'rgba(255,255,255,0.4)',
        alignItems: 'center',
        flexDirection: "row",
        borderRadius: 100,
        justifyContent: 'center',
        marginLeft: 25,
        marginTop: 40

    },
    button5: {
        height: 50,
        width: 50,
        borderColor: 'rgba(255,255,255,0.2)',
        borderStyle: 'dotted',
        elevation: 28,
        borderWidth: 2,
        backgroundColor: 'rgba(255,255,255,0.4)',
        alignItems: 'center',
        flexDirection: "row",
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 5,
        marginTop: 40

    },
    buttonView1: {
        width: '65%',
        height: 45,
        backgroundColor: 'white',
        marginTop: 110,
        borderRadius: 45,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: "center",


    },
    buttontext1: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,



    },
    discoverFooditems: {
        borderWidth: 0,
        borderColor: 'white',
        width: 125,
        height: 45,
        borderRadius: 10,
        marginHorizontal: 10,
        justifyContent: "center",


        backgroundColor: '#EEEDED'
    },
    discoverLunches: {
        borderWidth: 0,
        borderColor: 'white',
        width: 325,
        height: 310,
        elevation: 10,
        marginHorizontal: 18,
        borderRadius: 30,
        overflow: 'hidden',
    },
    backgroundImage1: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        // borderRadius: 30,
    },
    discovercards: {
        borderWidth: 0,
        borderColor: 'white',
        width: 180,
        height: 120,
        borderRadius: 20,
        marginTop: 5,
        
        marginLeft:15,
        marginVertical:15,
        // alignItems: "center",
        // justifyContent: 'center',
        backgroundColor: '#333333'
    },




})
export default Homescreen;
