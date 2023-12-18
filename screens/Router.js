import React from "react";
import { Text, View, Image } from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Cartpage from "../Bottomnavigation/Cartpage";
import Location from "../Bottomnavigation/Location";
import Homescreen from "../Bottomnavigation/Homescreen";
import Profile from "../Bottomnavigation/Profile";
import Search from "../Bottomnavigation/Search";
import Icon from 'react-native-vector-icons/AntDesign';




const Tab = createBottomTabNavigator()

const Router = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarStyle: {
              position: 'absolute', // Position the tab bar at the bottom
              bottom: 15, // Align it at the bottom
              left: 20, // Align it to the left
              right: 0, // Align it to the right
              backgroundColor: '#00070a',
              elevation: 25, // Add an elevation to create a floating effect
              shadowColor: 'black', // Set the shadow color
              height:60,
              width:'90%',
              borderRadius:15,
              borderColor:'black',
              borderWidth:3
            },
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'grey',
            tabBarItemStyle: {
              marginTop: 2,
              marginBottom: 2,

            },
            
          }} >

             <Tab.Screen
                name="Homescreen"
                component={Homescreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="calendar" size={25} color="white"/>
                        ),
                    tabBarLabelStyle: {
                        marginBottom: 5,
                        marginTop: 1,

                    },
                }} />
          
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="search1" size={25} color="white"/>
                        ),
                    tabBarLabelStyle: {
                        marginBottom: 5,
                        marginTop: 1,
                    },
                }} />
                
            <Tab.Screen
                name="Location"
                component={Location}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="inbox" size={25} color="white"/>
                        ),
                    tabBarLabelStyle: {
                        marginBottom: 5,
                        marginTop: 1,

                    },
                }} />
            <Tab.Screen
                name="Cartpage"
                component={Cartpage}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" size={25} color="white"/>
                        ),
                    tabBarLabelStyle: {
                        marginBottom: 5,
                        marginTop: 1,

                    },
                }}
            />
              <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={25} color="white"/>
                        ),
                    tabBarLabelStyle: {
                        marginBottom: 5,
                        marginTop: 1,

                    },
                }} />
        </Tab.Navigator>

    )
}
export default Router;