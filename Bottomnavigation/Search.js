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
import { PRODUCT_HOME } from "../Components/DiscoverFood";
import { LUNCH_ITEMS } from "../Components/Lunches";
import { PRODUCT_CARD } from "../Components/Recomended";
import Icon from 'react-native-ico-material-design';






const Homescreen = () => {
    const renderitem = (item) => {

        return (
            <View style={styles.discoverFooditems}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ height: 20, width: 20, marginHorizontal: 15, marginVertical: 5 }} source={item.image} />
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginVertical: 5 }}>{item.name}</Text>
                </View>
            </View>
        )
    }
    
    const renderitem1 = (item) => {

        return (
            <View style={styles.discovercards}>
              
                <View style={{ position: 'absolute', borderRadius: 30, overflow: 'hidden' }}>
                    <Text style={{ marginLeft: 12, marginTop: 18, fontSize: 20, fontWeight: 'bold', color: 'white' }}>{item.name}</Text>
                    
                   
                 

                </View>
                <View style={{ marginVertical:45,flexDirection: 'row' }}>
                <Text style={{ marginLeft: 12, marginTop: 25, fontSize: 20, fontWeight: 'bold', color: 'white' }}>{item.price}</Text>
                    <Image style={{ height: 50, width: 85, marginHorizontal: 30,marginVertical:15 }} source={item.Image} />
    
                

                    

                </View>
              

            </View>
        )
    }




    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={require('../assets/background1.jpg')}>
                <View style={{ marginTop: 10, marginBottom: 20 }}>

                    <View style={{ marginTop: 20, marginLeft: 28, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 29, fontWeight: 'bold', color: 'white', marginTop: 6 }}>QuickGrab Mart</Text>
                        <View >
                            <TouchableOpacity style={styles.button1}>
                                <Image source={require('../assets/cart.png')} style={{ height: 15, width: 15, tintColor: 'black' }} />
                            </TouchableOpacity>

                        </View>

                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.inputContainer}>
                            <Image source={require('../assets/search1.png')} style={styles.searchIcon} />
                            <TextInput
                                style={styles.buttonView}
                                placeholder='Search our store...'
                                placeholderTextColor='#dddddd'
                                maxLength={20}
                            />
                        </View>
                        <TouchableOpacity style={styles.button}>
                            <Image source={require('../assets/menu.png')} style={{ height: 15, width: 15, tintColor: 'black' }} />
                        </TouchableOpacity>

                    </View>


                </View>
            </ImageBackground>
            <View style={{ height: 900, backgroundColor: 'white', borderRadius: 25 }}>
                <View style={{ flexDirection: "row" }}>
                    <View>
                        <Text style={{ color: 'black', fontSize: 32, fontWeight: 'bold', marginHorizontal: 25, marginTop: 30 }}> Fresh Food !</Text>
                        <Text style={{ color: '#333333', fontSize: 18, marginHorizontal: 25, marginVertical: 0 }}> how can we help you today?</Text>
                    </View>
                    <TouchableOpacity style={styles.button2}  >
                        <Image source={require('../assets/bestlin1.png')} style={{ height: 55, width: 55 }} />
                    </TouchableOpacity>
                </View>

                <View >
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold', marginHorizontal: 25, marginTop: 25 }}> Top Categories</Text>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                        
                            <Text style={{ color: '#333333', fontSize: 15, marginLeft: 105, marginTop: 35 }}>View all  </Text>
                            <Image source={require('../assets/rightarrow.png')} style={{ height: 15, width: 15, tintColor: 'black', marginTop: 38, marginLeft: 5 }} />
                        </TouchableOpacity>

                    </View>

                    <View style={{ marginVertical: 10,marginLeft:8 }}>
                        <ScrollView horizontal={true}>
                            {
                                PRODUCT_HOME?.map((item) => {
                                    return renderitem(item);
                                })
                            }
                        </ScrollView>
                    </View>

                    
                    <View >
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold', marginHorizontal: 25, marginTop: 25 ,marginBottom:20}}> Recommended for you</Text>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#333333', fontSize: 15, marginLeft: 40, marginTop: 35 }}>View all  </Text>
                                <Image source={require('../assets/rightarrow.png')} style={{ height: 15, width: 15, tintColor: 'black', marginTop: 38, marginLeft: 5 }} />
                            </TouchableOpacity>

                        </View>
                        <FlatList
                            data={PRODUCT_CARD}
                            renderItem={({ item }) => renderitem1(item)}
                            numColumns={2}
                        />
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
        flex: 2
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
        marginLeft: 10,
        tintColor: '#dddddd'
    },

    buttonView: {
        flex: 1,
        color: 'black',
        paddingLeft: 10,
    },
    button: {
        height: 45,
        width: 55,
        borderColor: 'white',
        elevation: 15,
        borderWidth: 1,
        backgroundColor: 'white',
        paddingVertical: 12,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 15

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
        marginHorizontal: 55,
        marginTop: 32,

    },
    button3: {
        height: 50,
        width: 50,
        borderColor: 'rgba(255,255,255,0.2)',
        borderStyle: 'dotted',
        elevation: 35,
        borderWidth: 2,
        backgroundColor: 'rgba(255,255,255,0.4)',
        alignItems: 'center',
        flexDirection: "row",
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 25,
        marginTop: 105,

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
        width: 300,
        height: 290,
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
