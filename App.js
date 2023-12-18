import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Router from './screens/Router';
import Getstarted from './screens/Getstarted';
import Homescreen from "./Bottomnavigation/Homescreen";



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Getstarted"
          component={Getstarted}
          options={{ headerShown: false }}
        /> 
           <Stack.Screen
          name="Router"
          component={Router}
          options={{ headerShown: false }}
        /> 
            <Stack.Screen
          name="Homescreen"
          component={Homescreen}
          options={{ headerShown: false }}
        /> 
            
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
// import React from 'react'
// import { Text, View } from 'react-native'

// const Login =()=>{
//     return(
//         <View>
//             <Text>HI</Text>
//         </View>
//     )
// }
// export default Login;
