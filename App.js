
import React from 'react';
import type {Node} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaView,StyleSheet,Text,useColorScheme,View,} from 'react-native';
import Home from './src/views/Home';
import Library from './src/views/Library';
//import Prueba from './src/views/Prueba';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    padding: 15,
  },

});

const Stack = createStackNavigator();

const App = ()=>(
  <NavigationContainer>
  
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options ={{title: 'Inicio'}}/>
        <Stack.Screen name="Library" component={Library} options = {{title: 'Detalles'}} />
      </Stack.Navigator>

  </NavigationContainer>


)



export default App;
